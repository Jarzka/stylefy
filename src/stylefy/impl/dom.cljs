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

(def ^:private stylefy-node-id :#_stylefy-styles_)
(def ^:private stylefy-constant-node-id :#_stylefy-constant-styles_)
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

(defn- update-styles-in-dom!
  "Updates style tag if needed."
  []
  (when @dom-update-requested?
    (let [node (dommy/sel1 stylefy-node-id)
          node-constant (dommy/sel1 stylefy-constant-node-id)]
      (if (and node node-constant)
        (do (update-style-tags! node node-constant)
            (reset! dom-update-requested? false)

            (try
              (cache/cache-styles (apply merge
                                         (map
                                           #(-> {% (dissoc (get @styles-in-use %) ::in-dom?)})
                                           (keys @styles-in-use))))
              (catch :default e
                (.warn js/console (str "Unable to cache styles, error: " e))
                (cache/clear-styles)
                e))

            (mark-all-styles-added-in-dom!))
        (.error js/console "stylefy is unable to find the required <style> tags!")))))

(defn- asynchronously-update-dom
  "Updates style tag if needed."
  []
  (when-not @dom-update-requested?
    (reset! dom-update-requested? true)
    (go
      (update-styles-in-dom!))))

(defn check-stylefy-initialisation []
  (when-not @stylefy-initialised?
    (.warn js/console (str "stylefy has not been initialised correctly. Call stylefy/init once when your application starts."))))

(defn init-cache [options]
  (when (not= (:use-caching? options) false)
    (cache/use-caching! (:cache-options options))

    (when-let [cached-styles (cache/read-cache-value
                               cache/cache-key-styles)]
      (reset! styles-in-use (or cached-styles {}))
      (asynchronously-update-dom)
      (update-styles-in-dom!))))

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
  (swap! keyframes-in-use conj {::css (css (apply at-keyframes identifier frames))})
  (asynchronously-update-dom)
  nil)

(defn add-font-face [properties]
  (swap! font-faces-in-use conj {::css (css (at-font-face properties))})
  (asynchronously-update-dom)
  nil)

(defn add-tag [name properties]
  (swap! custom-tags-in-use conj {::css (conversion/style->css
                                          {:props properties
                                           :custom-selector name})})
  (asynchronously-update-dom)
  nil)

(defn add-class [name properties]
  (swap! custom-classes-in-use conj {::css (conversion/style->css
                                             {:props properties
                                              :custom-selector (conversion/class-selector name)})})
  (asynchronously-update-dom)
  nil)