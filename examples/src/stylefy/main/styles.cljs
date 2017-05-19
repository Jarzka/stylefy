(ns stylefy.examples.styles
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy :refer [use-style]]))

(def generic-container {:padding "25px"
                        :background-color "#BBBBBB"
                        :border "1px solid black"})

(def generic-button {:border "1px solid black"
                     :background-color "grey"
                     :color "white"
                     :text-align :center
                     :font-size "1.2em"
                     :padding "5px"
                     :width "150px"
                     :height "38px"
                     :margin-right "5px"
                     :margin-bottom "5px"
                     :cursor :pointer})

(def primary-button (merge generic-button {:background-color "rgb(88, 121, 193)"}))

(def secondary-button (merge generic-button {:background-color "rgb(88, 121, 152)"}))

(def simple-box {:border "1px solid black"
                 :background-color "#FFDDDD"
                 :text-align :center
                 :padding "5px"
                 :width "150px"
                 :height "150px"})

(def stuff-box (merge generic-container
                      {::stylefy/sub-styles {:box simple-box
                                             :list {:margin-top "1em"}}}))

(def stateful-component {:on (merge generic-container
                                    {:background-color "#22FF22"})
                         :off (merge
                                generic-container
                                {:background-color "#333333"
                                 :color "white"})})