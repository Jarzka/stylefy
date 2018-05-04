(ns stylefy.impl.dom
  (:require [dommy.core :as dommy]
            [reagent.core :as r]
            [garden.core :refer [css]]
            [stylefy.impl.cache :as cache]
            [stylefy.impl.utils :as utils]
            [stylefy.impl.conversion :as conversion]
            [garden.stylesheet :refer [at-media at-keyframes at-font-face]]
            [clojure.set :as set])
  (:require-macros [reagent.ratom :refer [run!]]))

(def styles-in-use (r/atom {})) ;; style hash -> props
(def keyframes-in-use (r/atom []))
(def font-faces-in-use (r/atom []))
(def custom-tags-in-use (r/atom []))
(def custom-classes-in-use (r/atom []))

(def ^:private stylefy-node-id :#_stylefy-styles_)
(def ^:private stylefy-constant-node-id :#_stylefy-constant-styles_)
(def ^:private dom-needs-update? (atom false))

(defn- style-by-hash [style-hash]
  (when style-hash
    (get @styles-in-use style-hash)))

(defn- update-style-tags!
  [node node-constant]
  (let [styles-in-css (map (fn [style-hash]
                             (::css (style-by-hash style-hash)))
                           (keys @styles-in-use))
        ;; TODO Keyframes, font-faces, custom classes are not going to change once defined.
        ;; Now we re-convert those to CSS every single time this function is called.
        ;; We should use the converted CSS when it has been created.
        keyframes-in-css (map (fn [keyframes]
                                (css keyframes))
                              @keyframes-in-use)
        font-faces-in-use (map (fn [properties]
                                 (css properties))
                               @font-faces-in-use)
        custom-tags-in-use (map (fn [tag-definition]
                                  (conversion/style->css
                                    {:props (::tag-properties tag-definition)
                                     :custom-selector (::tag-name tag-definition)}))
                                @custom-tags-in-use)
        custom-classes-in-use (map (fn [class-definition]
                                     (conversion/style->css
                                       {:props (::class-properties class-definition)
                                        :custom-selector (conversion/class-selector
                                                           (::class-name class-definition))}))
                                   @custom-classes-in-use)]
    (dommy/set-text! node-constant (apply str (concat font-faces-in-use
                                                      keyframes-in-css
                                                      custom-tags-in-use
                                                      custom-classes-in-use)))
    (dommy/set-text! node (apply str styles-in-css))))

(defn- mark-styles-added-in-dom! []
  (reset! styles-in-use (apply merge (map
                                       #(-> {% (assoc (get @styles-in-use %) ::in-dom? true)})
                                       (keys @styles-in-use)))))

(declare continuously-update-styles-in-dom!)

(defn- request-dom-update []
  (.requestAnimationFrame js/window continuously-update-styles-in-dom!))

(defn- update-styles-in-dom!
  "Updates style tag if needed."
  []
  (when @dom-needs-update?
    (let [node (dommy/sel1 stylefy-node-id)
          node-constant (dommy/sel1 stylefy-constant-node-id)]
      (if (and node node-constant)
        (do (update-style-tags! node node-constant)
            (reset! dom-needs-update? false)

            (try
              (cache/cache-styles (apply merge
                                         (map
                                           #(-> {% (dissoc (get @styles-in-use %) ::in-dom?)})
                                           (keys @styles-in-use))))
              (catch :default e
                (.warn js/console (str "Unable to cache styles, error: " e))
                e))

            (mark-styles-added-in-dom!))
        (.error js/console "stylefy is unable to find the required <style> tags!")))))

(defn- continuously-update-styles-in-dom!
  "Updates style tag if needed."
  []
  (when @dom-needs-update?
    (update-styles-in-dom!))
  (request-dom-update))

(defn init-dom-update []
  (continuously-update-styles-in-dom!))

(defn init-styles-in-use [options]
  (when (:use-caching? options)
    (cache/use-caching! (:cache-options options))

    (when-let [cached-styles (cache/read-cache-value
                               cache/cache-key-styles)]
      (reset! styles-in-use (or (cache/read-cache-value
                                  cache/cache-key-styles)
                                {}))
      (reset! dom-needs-update? true)
      (update-styles-in-dom!))))

(defn- save-style!
  "Stores the style in an atom. The style is going to be added into the DOM soon."
  [{:keys [props hash] :as style}]
  (assert props "Unable to save empty style!")
  (assert hash "Unable to save style without hash!")
  (let [style-css (conversion/style->css style)
        style-to-be-saved (assoc props ::css style-css)]
    (swap! styles-in-use assoc hash style-to-be-saved)
    (reset! dom-needs-update? true)))

(defn style-in-dom? [style-hash]
  (boolean (::in-dom? (style-by-hash style-hash))))

(defn add-keyframes [identifier & frames]
  (let [garden-definition (apply at-keyframes identifier frames)]
    (swap! keyframes-in-use conj garden-definition)
    (reset! dom-needs-update? true)
    garden-definition))

(defn add-font-face [properties]
  (let [garden-definition (at-font-face properties)]
    (swap! font-faces-in-use conj garden-definition)
    (reset! dom-needs-update? true)
    garden-definition))

(defn add-tag [name properties]
  (let [custom-tag-definition {::tag-name name ::tag-properties properties}]
    (swap! custom-tags-in-use conj custom-tag-definition)
    (reset! dom-needs-update? true)
    custom-tag-definition))

(defn add-class [name properties]
  (let [custom-class-definition {::class-name name ::class-properties properties}]
    (swap! custom-classes-in-use conj custom-class-definition)
    (reset! dom-needs-update? true)
    custom-class-definition))