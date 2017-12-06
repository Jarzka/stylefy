(ns stylefy.impl.cache
  (:require [dommy.core :as dommy]
            [reagent.core :as r]
            [garden.core :refer [css]]
            [stylefy.impl.utils :as utils]
            [garden.stylesheet :refer [at-media at-keyframes at-font-face]])
  (:require-macros [reagent.ratom :refer [run!]]))

(def cache-prefix "stylefy_cache_")
(def cache-key-styles (str cache-prefix "styles"))
(def cache-key-created (str cache-prefix "created"))
(def cache-styles? (atom false))

(defn now-in-seconds []
  (.floor js/Math (/ (.now js/Date) 1000)))

(defn read-cache-value
  "Reads the cache if caching is used."
  [key]
  (when @cache-styles?
    (when-let [cache-contents (.getItem (.-localStorage js/window) key)]
      (cljs.reader/read-string cache-contents))))

(defn cache-expired? [cache-created expiration-age now]
  (if (and cache-created expiration-age)
    (< (+ cache-created expiration-age) now)
    false))

(defn set-cache-created-time [time-created]
  (.setItem (.-localStorage js/window) cache-key-created time-created))

(defn clear-styles []
  (.setItem (.-localStorage js/window) cache-key-styles ""))

(defn use-caching! [cache-options]
  (reset! cache-styles? true)

  ;; Cache is empty, set creation date.
  (when-not (read-cache-value cache-key-created)
    (.info js/console "Setting cache creation date.")
    (set-cache-created-time (now-in-seconds)))

  (when (cache-expired? (read-cache-value cache-key-created)
                        (:expires cache-options)
                        (now-in-seconds))
    (clear-styles)
    (.info js/console "stylefy cache expired. The cache has been cleared.")
    (set-cache-created-time (now-in-seconds))))

(defn cache-styles
  "Caches the given style if caching is used.
  Throws QUOTA_EXCEEDED_ERR if the storage is full."
  [styles]
  (when (and @cache-styles? (map? styles))
    (.setItem (.-localStorage js/window) cache-key-styles styles)))