(ns stylefy.impl.dom
  (:require [dommy.core :as dommy]
            [garden.core :refer [css]]
            [reagent.core :as r :refer [atom]])
  (:require-macros [reagent.ratom :refer [run!]]))

(def ^:private styles-in-use (atom {})) ;; style hash -> props
(def ^:private stylefy-node-id :#_stylefy-styles_)
(def ^:private dom-needs-update? (atom false))

(defn- style-by-hash [style-hash]
  (get @styles-in-use style-hash))

(defn- update-styles-in-dom! []
  (when @dom-needs-update?
    (if-let [node (dommy/sel1 stylefy-node-id)]
      (let [styles-in-css (map (fn [style-hash]
                                 (::css (style-by-hash style-hash)))
                               (keys @styles-in-use))]
        (dommy/set-text! node (apply str styles-in-css))
        (reset! dom-needs-update? false))
      (.error js/console "stylefy is unable to find the required <style> tag!")))
  (r/next-tick update-styles-in-dom!))

(r/next-tick update-styles-in-dom!)

(defn- save-style! [{:keys [props hash] :as style}]
  (assert props "Unable to save empty style!")
  (assert hash "Unable to save style without hash!")
  (let [style-css (css [(keyword (str "." hash))
                        props])]
    (swap! styles-in-use assoc hash
           (assoc props ::css style-css))
    (reset! dom-needs-update? true)))