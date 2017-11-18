(ns stylefy.cache
  "API for cache manipulation"
  (:require [stylefy.impl.cache :as cache]))

(defn clear []
  (cache/clear))