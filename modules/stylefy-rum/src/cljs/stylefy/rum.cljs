(ns stylefy.rum
  (:require [stylefy.rum.dom :as stylefy-rum-dom]))

(defn init []
  (stylefy-rum-dom/->RumDom))