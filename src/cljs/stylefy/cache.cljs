(ns stylefy.cache
  "Public API for CSS cache manipulation in frontend."
  (:require [stylefy.impl.cache :as cache]
            [stylefy.impl.dom :as dom]))

(defn clear []
  (cache/clear-styles @dom/stylefy-instance-id))