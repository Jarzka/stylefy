(ns stylefy.examples.rum.custom-tags
  (:require [stylefy.core :as stylefy]))

(stylefy/tag "code" {:background-color :lightyellow
                     :padding          :5px
                     :border           "1px solid black"})

(stylefy/tag "ul" {:list-style-type :upper-roman
                   :margin-top      :10px})

(defn custom-tags []
  [:div
   [:code "(map (partial clojure.pprint/cl-format nil \"~@r\") (range 1 5))"]
   [:ul [:li "One"] [:li "Two"] [:li "Three"] [:li "Four"]]])