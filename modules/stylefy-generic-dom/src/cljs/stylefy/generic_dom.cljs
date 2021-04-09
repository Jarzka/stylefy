(ns stylefy.generic-dom
  (:require [stylefy.generic-dom.dom :as stylefy-generic-dom]))

(defn init []
  (stylefy-generic-dom/->GenericDom))