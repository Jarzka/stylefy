(ns stylefy.impl.dom
  (:require [dommy.core :as dommy]
            [reagent.core :as r]
            [garden.core :refer [css]]
            [garden.stylesheet :refer [at-media at-keyframes at-font-face]])
  (:require-macros [reagent.ratom :refer [run!]]))

(def styles-in-use (r/atom {})) ;; style hash -> props
(def keyframes-in-use (r/atom []))
(def font-faces-in-use (r/atom []))
(def custom-classes-in-use (r/atom []))

(def font-faces-in-dom? (r/atom false))
(def keyframes-in-dom? (r/atom false))

(def ^:private stylefy-node-id :#_stylefy-styles_)
(def ^:private stylefy-constant-node-id :#_stylefy-constant-styles_)
(def ^:private dom-needs-update? (atom false))

(defn- style-by-hash [style-hash]
  (get @styles-in-use style-hash))

(defn- update-style-tags!
  [node node-constant]
  (let [styles-in-css (map (fn [style-hash]
                             (::css (style-by-hash style-hash)))
                           (keys @styles-in-use))
        keyframes-in-css (map (fn [keyframes]
                                (css keyframes))
                              @keyframes-in-use)
        font-faces-in-use (map (fn [properties]
                                 (css properties))
                               @font-faces-in-use)
        custom-classes-in-use (map (fn [class-definition]
                                     (css [(keyword (str "." (::class-name class-definition)))
                                           (::class-properties class-definition)]))
                                   @custom-classes-in-use)]
    (dommy/set-text! node-constant (apply str (concat font-faces-in-use
                                                      keyframes-in-css
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
            (mark-styles-added-in-dom!)
            (reset! keyframes-in-dom? true)
            (reset! font-faces-in-dom? true))
        (.error js/console "stylefy is unable to find the required <style> tags!")))))

(defn- continuously-update-styles-in-dom!
  "Updates style tag if needed."
  []
  (when @dom-needs-update?
    (update-styles-in-dom!))
  (request-dom-update))

(defn init-dom-update []
  (continuously-update-styles-in-dom!))

(defn style->css
  ([style] (style->css style {}))
  ([{:keys [props hash] :as style} options]
   (let [general-style-props (dissoc props
                                     :stylefy.core/sub-styles
                                     :stylefy.core/media
                                     :stylefy.core/mode
                                     :stylefy.core/vendors
                                     :stylefy.core/auto-prefix)
         class-selector (keyword (str "." hash))
         garden-class-definition [class-selector general-style-props]
         modes (:stylefy.core/mode props)
         garden-modes (mapv #(-> [(keyword (str "&" %)) (% modes)])
                            (keys modes))
         vendors (when-let [vendors (:stylefy.core/vendors props)]
                   {:vendors vendors
                    :auto-prefix (:stylefy.core/auto-prefix props)})
         garden-options (merge
                          options
                          vendors)
         css-class (if garden-options
                     (css garden-options (into garden-class-definition garden-modes))
                     (css (into garden-class-definition garden-modes)))
         media-queries (:stylefy.core/media props)
         css-media (map (fn [media-query]
                          (css (at-media media-query [class-selector (get media-queries media-query)])))
                        (keys media-queries))]
     (str css-class (apply str css-media)))))

(defn- save-style!
  "Stores the style in an atom. The style is going to be added in DOM soon."
  [{:keys [props hash] :as style}]
  (assert props "Unable to save empty style!")
  (assert hash "Unable to save style without hash!")
  (let [style-css (style->css style)]
    (swap! styles-in-use assoc hash
           (assoc props ::css style-css))
    (reset! dom-needs-update? true)))

(defn style-in-dom? [style-hash]
  (boolean (::in-dom? (style-by-hash style-hash))))

(defn add-keyframes [identifier & frames]
  (reset! keyframes-in-dom? false)
  (let [garden-definition (apply at-keyframes identifier frames)]
    (swap! keyframes-in-use conj garden-definition)
    (reset! dom-needs-update? true)
    garden-definition))

(defn add-font-face [properties]
  (reset! font-faces-in-dom? false)
  (let [garden-definition (at-font-face properties)]
    (swap! font-faces-in-use conj garden-definition)
    (reset! dom-needs-update? true)
    garden-definition))

(defn add-class [name properties]
  (let [custom-class-definition {::class-name name ::class-properties properties}]
    (swap! custom-classes-in-use conj custom-class-definition)
    (reset! dom-needs-update? true)
    custom-class-definition))