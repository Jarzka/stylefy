(ns stylefy.examples.grid
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]]))

(def modern-grid {:display "grid"
                  :grid-template-columns "1fr 1fr 1fr"
                  ::stylefy/supports "(display: grid)"})

(def legacy-grid {:display "flex"
                  :flex-direction "row"
                  })

(def grid-style {})

(defn create-box-style [color]
  {:background-color color
   :height "200px"})

(defn grid [options schema data]
  [:div (use-style grid-style)
   [:div (use-style (create-box-style "#000000"))]
   [:div (use-style (create-box-style "#AA0000"))]
   [:div (use-style (create-box-style "#00AA00"))]
   [:div (use-style (create-box-style "#0000AA"))]
   [:div (use-style (create-box-style "#00AAAA"))]
   [:div (use-style (create-box-style "#AAAA00"))]
   [:div (use-style (create-box-style "#AA00AA"))]])