(ns stylefy.examples.main
  (:require [reagent.core :as r]
            [stylefy.core :refer [use-style]])
  (:require-macros [stylefy.macros :refer [style]]))

(def generic-button (style {:border "1px solid black"
                            :background-color "grey"
                            :padding "5px"
                            :width "150px"
                            :height "50px"}
                           {}))

;; TODO option map: add support for inheriting styles and using media queries

(defn- hello-world []
  [:div (use-style generic-button)])

(defn start []
  (r/render hello-world (.getElementById js/document "app")))