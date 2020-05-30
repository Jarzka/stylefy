(ns stylefy.examples.main
  (:require [hiccup.core :refer :all]
            [stylefy.core :as stylefy :refer [use-style]]))

(defn sub-component [message]
  [:span (use-style {:color :red}) message])

(defn example-component []
  [:html
   [:head
    [:title "Example"]

    [:meta {:content "width=device-width, initial-scale=1, maximum-scale=1", :name "viewport"}]
    [:meta {:charset "utf-8"}]

    [:style {:id "_stylefy-server-styles_"} "_stylefy-server-styles-content_"]
    [:style {:id "_stylefy-constant-styles_"}]
    [:style {:id "_stylefy-styles_"}]]
   [:body (use-style {:color :black})
    [:div (use-style {:text-align :center} {:id "app"})
     (sub-component "Example text is red")]]
   [:script {:src "/js/main.js"}]])

(defn init-stylefy []
  (stylefy/init))

(defn example-query []
  (stylefy/query-with-styles
    (fn [] (html (example-component)))))