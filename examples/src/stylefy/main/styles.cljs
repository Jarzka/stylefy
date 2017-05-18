(ns stylefy.examples.styles
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy :refer [style use-style]]))

(def generic-container (style {:padding "25px"
                               :background-color "#BBBBBB"
                               :border "1px solid black"}))

(def generic-button (style {:border "1px solid black"
                            :background-color "grey"
                            :color "white"
                            :text-align :center
                            :font-size "1.2em"
                            :padding "5px"
                            :width "150px"
                            :height "38px"
                            :margin-right "5px"
                            :margin-bottom "5px"}))

(def primary-button (style (merge (:style generic-button)
                                  {:background-color "rgb(88, 121, 193)"})))
(def secondary-button (style (merge (:style generic-button)
                                    {:background-color "rgb(88, 121, 152)"})))

(def stuff-box-style (style (:style generic-container)))


(def simple-box-style (style {:border "1px solid black"
                        :background-color "#FFDDDD"
                        :text-align :center
                        :padding "5px"
                        :width "150px"
                        :height "150px"}))