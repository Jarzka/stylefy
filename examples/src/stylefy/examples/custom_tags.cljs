(ns stylefy.examples.custom-tags
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy]))

(def code-style
  {:background-color :lightyellow
   :padding          :5px
   :border           "1px solid black"})

(def ul-style
  {:list-style-type :upper-roman
   :margin-top      :10px})

(defn custom-tag-styles []
  (stylefy/tag "code" code-style)
  (stylefy/tag "ul" ul-style))

(defn custom-tags []
  (fn []
    [:div
     [:code "(map (partial clojure.pprint/cl-format nil \"~@r\") (range 1 5))"]
     [:ul [:li "One"] [:li "Two"] [:li "Three"] [:li "Four"]]]))