(ns stylefy.impl.dom
  (:require [dommy.core :as dommy]
            [reagent.core :as r]
            [garden.core :refer [css]]
            [cljs.core.async :refer [<! timeout]]
            [stylefy.impl.cache :as cache]
            [stylefy.impl.utils :as utils]
            [stylefy.impl.conversion :as conversion]
            [garden.stylesheet :refer [at-media at-keyframes at-font-face]]
            [clojure.set :as set])
  (:require-macros
    [reagent.ratom :refer [run!]]
    [cljs.core.async.macros :refer [go]]))

(def stylefy-initialised? (r/atom false))
(def styles-in-use (r/atom {})) ;; style hash -> map containing keys: ::css & ::in-dom?
(def keyframes-in-use (r/atom [])) ;; Vector of maps containing keys: ::css
(def font-faces-in-use (r/atom [])) ;; Vector of maps containing keys: ::css
(def custom-tags-in-use (r/atom [])) ;; Vector of maps containing keys: ::css
(def custom-classes-in-use (r/atom [])) ;; Vector of maps containing keys: ::css

(def ^:private stylefy-node-id "#_stylefy-styles_")
(def ^:private stylefy-constant-node-id "#_stylefy-constant-styles_")
(def ^:private stylefy-base-node (atom nil)) ;; Used when running multiple instances of stylefy on the same page
(def stylefy-instance-id (atom nil)) ;; Used when running multiple instances of stylefy on the same page
(def ^:private dom-update-requested? (atom false))

(defn- style-by-hash [style-hash]
  (when style-hash
    (get @styles-in-use style-hash)))

(defn- update-style-tags!
  [node node-constant]
  (let [styles-in-css (map (fn [style-hash]
                             (::css (style-by-hash style-hash)))
                           (keys @styles-in-use))
        keyframes-in-css (map (fn [keyframes]
                                (::css keyframes))
                              @keyframes-in-use)
        font-faces-in-use (map (fn [properties]
                                 (::css properties))
                               @font-faces-in-use)
        custom-tags-in-use (map (fn [tag-definition]
                                  (::css tag-definition))
                                @custom-tags-in-use)
        custom-classes-in-use (map (fn [tag-definition]
                                     (::css tag-definition))
                                   @custom-classes-in-use)]
    (dommy/set-text! node-constant (apply str (concat font-faces-in-use
                                                      keyframes-in-css
                                                      custom-tags-in-use
                                                      custom-classes-in-use)))
    (dommy/set-text! node (apply str styles-in-css))))

(defn- mark-all-styles-added-in-dom! []
  (reset! styles-in-use (apply merge (map
                                       #(-> {% (assoc (get @styles-in-use %) ::in-dom? true)})
                                       (keys @styles-in-use)))))

(defn- get-stylefy-node [id base-node instance-id]
  (let [final-id (str id (when instance-id (str instance-id)))]
    (if (nil? base-node)
      (dommy/sel1 final-id)
      (dommy/sel1 base-node final-id))))

(defn- update-dom
  []
  (let [node (get-stylefy-node stylefy-node-id @stylefy-base-node @stylefy-instance-id)
        node-constant (get-stylefy-node stylefy-constant-node-id @stylefy-base-node @stylefy-instance-id)]
    (if (and node node-constant)
      (do (update-style-tags! node node-constant)
          (reset! dom-update-requested? false)

          (try
            (cache/cache-styles (apply merge
                                       (map
                                         #(-> {% (dissoc (get @styles-in-use %) ::in-dom?)})
                                         (keys @styles-in-use)))
                                @stylefy-instance-id)
            (catch :default e
              (.warn js/console (str "Unable to cache styles, error: " e))
              (cache/clear-styles @stylefy-instance-id)
              e))

          (mark-all-styles-added-in-dom!))
      (.error js/console "stylefy is unable to find the required <style> tags!"))))

(defn- asynchronously-update-dom
  "Updates style tag if needed."
  []
  (when @stylefy-initialised?
    (when-not @dom-update-requested? ; Important. Only one update per tick. Otherwise, this is going to be very slow.
      (reset! dom-update-requested? true)
      (go
        (update-dom)))))

(defn check-stylefy-initialisation []
  (when-not @stylefy-initialised?
    (.warn js/console (str "stylefy has not been initialised correctly. Call stylefy/init once when your application starts."))))

(defn init-multi-instance [{:keys [multi-instance] :as options}]
  (let [base-node (:base-node multi-instance)
        instance-id (:instance-id multi-instance)]
    (assert (or (nil? instance-id)
                (string? instance-id))
            (str "instance-id must be string. Got: " (pr-str base-node instance-id)))
    (reset! stylefy-base-node base-node)
    (reset! stylefy-instance-id instance-id)))

(defn init-cache [options]
  (when (not= (:use-caching? options) false)
    (cache/use-caching! (:cache-options options) @stylefy-instance-id)

    (when-let [cached-styles (cache/read-cache-value
                               (cache/cache-key-styles @stylefy-instance-id))]
      (reset! styles-in-use (or cached-styles {})))))

(defn- save-style!
  "Stores the style in an atom. The style is going to be added into the DOM soon."
  [{:keys [props hash] :as style}]
  (assert props "Unable to save empty style!")
  (assert hash "Unable to save style without hash!")
  (let [style-css (conversion/style->css style)
        style-to-be-saved {::css style-css}]
    (swap! styles-in-use assoc hash style-to-be-saved)
    (asynchronously-update-dom)))

(defn style-in-dom? [style-hash]
  (boolean (::in-dom? (style-by-hash style-hash))))

(defn add-keyframes [identifier & frames]
  (let [garden-definition (apply at-keyframes identifier frames)]
    (swap! keyframes-in-use conj {::css (css garden-definition)})
    (asynchronously-update-dom)
    garden-definition))

(defn add-font-face [properties]
  (let [garden-definition (at-font-face properties)]
    (swap! font-faces-in-use conj {::css (css garden-definition)})
    (asynchronously-update-dom)
    garden-definition))

(defn add-tag [name properties]
  (let [custom-tag-definition {::tag-name name ::tag-properties properties}]
    (swap! custom-tags-in-use conj {::css (conversion/style->css
                                            {:props (::tag-properties custom-tag-definition)
                                             :custom-selector (::tag-name custom-tag-definition)})})
    (asynchronously-update-dom)
    custom-tag-definition))

(defn add-class [name properties]
  (let [custom-class-definition {::class-name name ::class-properties properties}]
    (swap! custom-classes-in-use conj {::css (conversion/style->css
                                               {:props (::class-properties custom-class-definition)
                                                :custom-selector (conversion/class-selector (::class-name custom-class-definition))})})
    (asynchronously-update-dom)
    custom-class-definition))