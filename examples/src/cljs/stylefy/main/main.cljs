(ns stylefy.examples.main
  (:require [reagent.core :as r])
  (:require-macros [stylefy.macros :refer [style]]))

(def generic-button (style {:border "1px solid black"
                            :background-color "grey"
                            :padding "5px"
                            :width "100px"
                            :height "70px"}))

(defn- hello-world []
  [:div (pr-str "Hello world " generic-button])

(defn start []
  (r/render hello-world (.getElementById js/document "app")))