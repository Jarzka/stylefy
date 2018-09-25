(ns stylefy.cache
  "API for cache manipulation"
  (:require [stylefy.impl.cache :as cache]
            [stylefy.impl.dom :as dom]))

(defn clear []
  (cache/clear-styles @dom/stylefy-instance-id))