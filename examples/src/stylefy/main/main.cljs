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

(def primary-button (style (merge (:style generic-button)
                                  {:background-color "rgb(88, 121, 193)"})))
(def secondary-button (style (merge (:style generic-button)
                                    {:background-color "rgb(88, 121, 152)"})))

(defn- button-style-by-type [type]
  (case type
    :primary primary-button
    :secondary secondary-button
    generic-button))

(defn- button
  ([] (button nil))
  ([type]
   (.log js/console "RENDER BUTTTON: " (pr-str type))
   [:div (use-style (button-style-by-type type))
    "Hello world"]))

(defn- button-container []
  [:div (use-style generic-container)
   [button]
   [button :primary]
   [button :secondary]])

(defn- examples []
  [:div
   [:h1 "Generic button"]
   [button]

   [:h1 "Different type of buttons in a container"]
   [button-container]])

(defn start []
  (r/render examples (.getElementById js/document "app")))