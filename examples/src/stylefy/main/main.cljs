(ns stylefy.examples.main
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

(defn- button []
  [:div (use-style generic-button) "Hello world"])

(defn- button-container []
  [:div (use-style generic-container)
   [button]
   [button]
   [button]])

(defn- examples []
  [:div
   [:h1 "Styled button"]
   [button]

   [:h1 "Multiple styled buttons in a container"]
   [button-container]])

(defn start []
  (r/render examples (.getElementById js/document "app")))