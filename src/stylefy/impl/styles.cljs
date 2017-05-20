(ns stylefy.impl.styles
  (:require [stylefy.impl.dom :as dom]
            [garden.core :refer [css]])
  (:require-macros [reagent.ratom :refer [run!]]))

(defn hash-style [style]
  (str "_stylefy_" (hash style)))

(defn- create-style! [{:keys [props hash] :as style}]
  (dom/save-style! {:props props :hash hash})

  ;; Create sub-styles (if any)
  (doseq [sub-style (vals (:stylefy.core/sub-styles props))]
    (create-style! {:props sub-style :hash (hash-style sub-style)})))



(defn use-style! [style]
  (let [style-hash (hash-style style)
        already-created (dom/style-by-hash style-hash)]

    (when-not already-created
      (create-style! {:props style :hash style-hash}))

    (if (dom/style-in-dom? style-hash)
      {:class style-hash}
      {:style style})))

(defn use-sub-style! [style sub-style]
  (let [resolved-sub-style (get (:stylefy.core/sub-styles style) sub-style)]
    (if resolved-sub-style
      (use-style! resolved-sub-style)
      (.error js/console (str "Sub-style " (pr-str sub-style) " not found in style: " (pr-str style))))))