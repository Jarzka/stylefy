(ns stylefy.impl.cache
  (:require [dommy.core :as dommy]
            [reagent.core :as r]
            [garden.core :refer [css]]
            [stylefy.impl.utils :as utils]
            [garden.stylesheet :refer [at-media at-keyframes at-font-face]])
  (:require-macros [reagent.ratom :refer [run!]]))

(def cache-prefix "stylefy_cache_")
(def cache-styles? (atom false))
(def default-cache-expiration-time-s (* 1 60 60 * 24 * 7))

(defn cache-key-styles [instance-id]
  (str cache-prefix "styles"
       (when instance-id
         (str "_" instance-id))))

(defn- cache-key-created [instance-id]
  (str cache-prefix "created"
       (when instance-id
         (str "_" instance-id))))

;; Utils

(defn now-in-seconds []
  (.floor js/Math (/ (.now js/Date) 1000)))

(defn cache-expired? [cache-created expiration-age now]
  (if (and cache-created expiration-age)
    (< (+ cache-created expiration-age) now)
    false))

;; Cache reading

(defn read-cache-value
  "Reads the cache if caching is used."
  [key]
  (when @cache-styles?
    (when-let [cache-contents (.getItem (.-localStorage js/window) key)]
      (cljs.reader/read-string cache-contents))))

;; Cache manipulation

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

    ;; If cache is empty, set creation date.
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