(ns stylefy.impl.styles
  (:require [stylefy.impl.dom :as dom]
            [garden.core :refer [css]]
            [clojure.string :as str]))

(defn hash-style [style]
  (str "_stylefy_" (hash style)))

(defn- create-style! [{:keys [props hash] :as style}]
  (dom/save-style! {:props props :hash hash})

  ;; Create sub-styles (if any)
  (doseq [sub-style (vals (:stylefy.core/sub-styles props))]
    (create-style! {:props sub-style :hash (hash-style sub-style)})))

(defn use-style! [style options]
  (let [with-classes (:stylefy.core/with-classes options)]

    (assert (or (nil? with-classes)
                (and (vector? with-classes)
                     (every? string? with-classes)))
            (str "with-classes argument must be a vector of string, got: " (pr-str with-classes)))

    (let [style-hash (hash-style style)
          already-created (dom/style-by-hash style-hash)]

      (when-not already-created
        (create-style! {:props style :hash style-hash}))

      (if (dom/style-in-dom? style-hash)
        {:class (str/join " " (conj with-classes style-hash))}
        {:class (str/join " " with-classes)
         :style style}))))

(defn use-sub-style! [style sub-style options]
  (let [resolved-sub-style (get (:stylefy.core/sub-styles style) sub-style)]
    (if resolved-sub-style
      (use-style! resolved-sub-style options)
      (.error js/console (str "Sub-style " (pr-str sub-style) " not found in style: " (pr-str style))))))