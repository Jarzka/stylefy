(ns stylefy.impl.cache
  (:require [dommy.core :as dommy]
            [reagent.core :as r]
            [garden.core :refer [css]]
            [stylefy.impl.utils :as utils]
            [garden.stylesheet :refer [at-media at-keyframes at-font-face]])
  (:require-macros [reagent.ratom :refer [run!]]))

(def cache-key "stylefy_cache")
(def cache-styles? (atom false))

(defn use-caching! []
  (reset! cache-styles? true))

(defn read-cache
  "Reads the cache if caching is used."
  []
  (when @cache-styles?
    (when-let [cache-contents (.getItem (.-localStorage js/window) cache-key)]
      (cljs.reader/read-string cache-contents))))

(defn cache-style
  "Caches the given style if caching is used."
  [hash style]
  (when @cache-styles?
    (let [cache-contents (read-cache)
          new-cache (assoc cache-contents hash style)]
      (.setItem (.-localStorage js/window) cache-key new-cache))))

