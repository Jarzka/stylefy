(ns stylefy.examples
  (:require [reagent.core :as r]))

(defn- hello-world []
  [:div "Hello world"])

(defn- main []
  (r/render hello-world (.getElementById js/document "app")))