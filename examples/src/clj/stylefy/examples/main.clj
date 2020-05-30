(ns stylefy.examples.main
  (:require [hiccup.core :refer :all]
            [stylefy.core :as stylefy :refer [use-style]]))

(defn sub-component [message]
  [:span (use-style {:color :red}) message])

(defn constant-styles []
  (stylefy/keyframes "simple-animation"
                     [:from
                      {:opacity 0}]
                     [:to
                      {:opacity 1}])

  (stylefy/font-face {:font-family "open_sans"
                      :src "url('../fonts/OpenSans-Regular-webfont.woff') format('woff')"
                      :font-weight "normal"
                      :font-style "normal"})

  (stylefy/tag "code"
               {:background-color "lightyellow"})

  (stylefy/class "enter-transition"
                 {:transition "background-color 2s"}))

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
    (fn []
      (constant-styles)
      (html (example-component)))))