(ns stylefy.impl.dom
  (:require [dommy.core :as dommy]
            [reagent.core :as r]
            [garden.core :refer [css]]
            [garden.stylesheet :refer [at-media]])
  (:require-macros [reagent.ratom :refer [run!]]))

(def styles-in-use (r/atom {})) ;; style hash -> props
(def ^:private stylefy-node-id :#_stylefy-styles_)
(def ^:private dom-needs-update? (atom false))

(defn- style-by-hash [style-hash]
  (get @styles-in-use style-hash))

(defn- update-style-tag!
  "Sets the content of the given style tag to be the CSS of the used styles."
  [node]
  (let [styles-in-css (map (fn [style-hash]
                             (::css (style-by-hash style-hash)))
                           (keys @styles-in-use))]
    (dommy/set-text! node (apply str styles-in-css))))

(defn- mark-styles-added-in-dom! []
  (reset! styles-in-use (apply merge (map
                                       #(-> {% (assoc (get @styles-in-use %) ::in-dom? true)})
                                       (keys @styles-in-use)))))

(declare update-styles-in-dom!)

(defn- request-dom-update []
  (.requestAnimationFrame js/window update-styles-in-dom!))

(defn- update-styles-in-dom!
  "Updates style tag if needed."
  []
  (when @dom-needs-update?
    (if-let [node (dommy/sel1 stylefy-node-id)]
      (do (update-style-tag! node)
          (reset! dom-needs-update? false)
          (mark-styles-added-in-dom!))
      (.error js/console "stylefy is unable to find the required <style> tag!")))
  (request-dom-update))

(defn init-dom-update []
  (request-dom-update))

(defn style->css [{:keys [props hash] :as style}]
  (let [general-style-props (dissoc props
                                    :stylefy.core/sub-styles
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
        garden-options vendors
        css-class (if garden-options
                    (css garden-options (into garden-class-definition garden-modes))
                    (css (into garden-class-definition garden-modes)))
        media-queries (:stylefy.core/media props)
        css-media (map (fn [media-query]
                         (css (at-media media-query [class-selector (get media-queries media-query)])))
                       (keys media-queries))]
    (str css-class (apply str css-media))))

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