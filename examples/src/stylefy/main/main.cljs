(ns stylefy.examples.main
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy :refer [style use-style]]))

(def generic-button (style {:border "1px solid black"
                            :background-color "grey"
                            :padding "5px"
                            :width "150px"
                            :height "50px"}))

(defn- hello-world []
  [:div (use-style generic-button) "Hello world"])

(defn start []
  (r/render hello-world (.getElementById js/document "app")))