(ns stylefy.examples.styles
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy :refer [use-style]]))

(def general-styles {:font-family "Verdana"})

(def clickable {:cursor :pointer})

(def generic-container {:padding "25px"
                        :background-color "#BBBBBB"
                        :border "1px solid black"})

(def generic-button (merge {:border "1px solid black"
                            :background-color "#888888"
                            :color "white"
                            :text-align :center
                            :font-size "1.2em"
                            :padding "5px"
                            :width "150px"
                            :height "38px"
                            :margin-right "5px"
                            :margin-bottom "5px"
                            ::stylefy/mode {:hover {:background-color "#AAAAAA"}}}
                           clickable))

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

(def boostrap-navbar-overrides {:background-color "#3333"})