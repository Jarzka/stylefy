(ns stylefy.examples.hoverbox
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]]))

(def hoverbox-style {:width "200px"
                     :height "200px"
                     :padding "20px"
                     :margin-bottom "10px"
                     :background-color "#55AA55"
                     ::stylefy/sub-styles {:innerbox {:width "100%"
                                                      :height "100%"
                                                      :background-color "#444444"}}
                     ::stylefy/inner [[:&:hover [:.innerbox {:background-color "#999999"}]]]})

(defn hoverbox []
  [:div (use-style hoverbox-style)
   [:div.innerbox (use-sub-style hoverbox-style :innerbox)]])