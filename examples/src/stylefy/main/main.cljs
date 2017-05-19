(ns stylefy.examples.main
  (:require [reagent.core :as r]
            [stylefy.examples.styles :as styles]
            [stylefy.core :as stylefy :refer [style use-style use-sub-style]]))

(defn- button-style-by-type [type]
  (case type
    :primary styles/primary-button
    :secondary styles/secondary-button
    styles/generic-button))

(defn- button
  ([] (button nil))
  ([type]
   [:div (use-style (button-style-by-type type))
    "Hello world"]))

(defn- button-container []
  [:div (use-style styles/generic-container)
   [button]
   [button :primary]
   [button :secondary]])

(defn stuff-box []
  [:div (use-style styles/stuff-box-style)
   [:p "This container contains multiple elements, like texts and lists."]
   [:div (use-sub-style styles/stuff-box-style :box)]
   [:ul
    [:li "List element 1"]
    [:li "List element 2"]
    [:li "List element 3"]]])

(defn- examples []
  [:div
   [:h1 "Generic button"]
   [button]

   [:h1 "Different type of buttons in a container (styled by merging styles)"]
   [button-container]

   [:h1 "Component with multiple sub elements (styled by using sub-styles)"]
   [stuff-box]])

(defn start []
  (r/render examples (.getElementById js/document "app")))