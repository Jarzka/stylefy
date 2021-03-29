(ns stylefy.impl.cache
  (:require [cljs.reader :refer [read-string]]
            [clojure.string :as string]))

(def cache-prefix "stylefy_cache_")
(def cache-styles? (atom false))
(def default-cache-expiration-time-s (* 1 60 60 * 24 * 7))

(declare clear-styles)

(defn cache-key-styles [instance-id]
  (str cache-prefix "styles"
       (when instance-id
         (str "_" instance-id))))

(defn- cache-key-created [instance-id]
  (str cache-prefix "created"
       (when instance-id
         (str "_" instance-id))))

; Utils

(defn now-in-seconds []
  (.floor js/Math (/ (.now js/Date) 1000)))

(defn cache-expired? [cache-created expiration-age now]
  (if (and cache-created expiration-age)
    (< (+ cache-created expiration-age) now)
    false))

; Cache reading

(defn read-cache-value
  "Reads the cache if caching is used."
  [key]
  (when @cache-styles?
    (when-let [cache-contents (.getItem (.-localStorage js/window) key)]
      (read-string cache-contents))))

; Cache manipulation

(defn set-cache-created-time
  ([time-created]
   (set-cache-created-time time-created nil))
  ([time-created instance-id]
   (.setItem (.-localStorage js/window)
             (cache-key-created instance-id)
             time-created)))

(defn clear-styles
  ([]
   (clear-styles nil))
  ([instance-id]
   (.setItem (.-localStorage js/window)
             (cache-key-styles instance-id)
             "")))

(defn use-caching!
  ([cache-options]
   (use-caching! cache-options nil))
  ([cache-options instance-id]
   (reset! cache-styles? true)

   ; If cache is empty, set creation date.
   (when-not (read-cache-value (cache-key-created instance-id))
     (set-cache-created-time (now-in-seconds) instance-id))

   (when (cache-expired? (read-cache-value (cache-key-created instance-id))
                         (or (:expires cache-options) default-cache-expiration-time-s)
                         (now-in-seconds))
     (clear-styles instance-id)
     (set-cache-created-time (now-in-seconds) instance-id))))

(defn cache-styles
  "Caches the given style if caching is used.
  Throws QUOTA_EXCEEDED_ERR if the storage is full."
  ([styles]
   (cache-styles styles nil))
  ([styles instance-id]
   (when (and @cache-styles? (map? styles))
     (.setItem (.-localStorage js/window)
               (cache-key-styles instance-id)
               styles))))

; Init

(defn- style-cache-version-not-supported? [cache]
  (let [cached-maps (vals cache)]
    (boolean (some #(contains? % :stylefy.impl.dom/css) cached-maps))))

(defn- check-cache-support!
  "In stylefy 3.0.0, :stylefy.impl.dom/css keywords were replaced with keyword :css while caching CSS.
   This functions checks if the cache contains these old namespaced keywords, and if it does,
   it clears the unsupported cache version."
  [key]
  (when-let [cache-contents (.getItem (.-localStorage js/window) key)]
    (let [cache-as-clojure-data (read-string cache-contents)]
      (when (and (string/starts-with? key "stylefy_cache_styles")
                 (map? cache-as-clojure-data)
                 (style-cache-version-not-supported? cache-as-clojure-data))
        (clear-styles)))))

(defn init [stylefy-instance-id options]
  (when (not= (:use-caching? options) false)
    (check-cache-support! (cache-key-styles stylefy-instance-id))
    (use-caching! (:cache-options options) stylefy-instance-id)))
