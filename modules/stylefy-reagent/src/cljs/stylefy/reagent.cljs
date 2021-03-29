(ns stylefy.reagent
  (:require [stylefy.reagent.dom :as stylefy-reagent-dom]))

(defn init []
  (stylefy-reagent-dom/->ReagentDom))