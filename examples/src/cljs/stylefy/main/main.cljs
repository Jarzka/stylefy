(ns stylefy.examples.main
  (:require [reagent.core :as r]))

(defn- hello-world []
  [:div "Hello world"])

(defn start []
  (r/render hello-world (.getElementById js/document "app")))