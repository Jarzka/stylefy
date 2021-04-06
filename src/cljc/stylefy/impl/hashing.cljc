(ns stylefy.impl.hashing
  (:require [stylefy.impl.utils :as utils]
            [garden.compiler :as compiler]))

(def default-class-prefix "_stylefy")
(def use-custom-class-prefix? (atom false))

(defn- check-custom-class-prefix
  "Checks that the value is valid and returns as properly formatted prefix."
  [custom-class-prefix]
  (assert (or
            (nil? custom-class-prefix)
            (string? custom-class-prefix)
            (keyword? custom-class-prefix))
          (str "Custom class prefix should be either string, keyword or nil, got: " (pr-str custom-class-prefix)))

  (cond (nil? custom-class-prefix) default-class-prefix
        (string? custom-class-prefix) custom-class-prefix
        (keyword? custom-class-prefix) (name custom-class-prefix)))

(declare recursively-convert-garden-units)
(declare recursively-remove-unnecessary-keywords)

(defn- convert-garden-units-in-map [style-map]
  (reduce
    (fn [result prop-key]
      (let [prop-value (get style-map prop-key)]
        (if (or (utils/is-garden-value? prop-value)
                (map? prop-value)
                (coll? prop-value))
          (assoc result prop-key (recursively-convert-garden-units prop-value))
          result)))
    style-map
    (keys style-map)))

(defn- recursively-convert-garden-units [item]
  (cond
    (utils/is-garden-value? item)
    (compiler/render-css item)

    (map? item)
    (convert-garden-units-in-map item)

    (vector? item)
    (mapv recursively-convert-garden-units item)

    (set? item)
    (set (map recursively-convert-garden-units item))

    (coll? item)
    (map recursively-convert-garden-units item)

    :else item))

(defn- remove-unnecessary-keywords-in-map [style-map]
  (let [style-without-unncessary-keywords (dissoc style-map
                                                  :stylefy.core/sub-styles
                                                  :stylefy.core/class-prefix)]
    (reduce
      (fn [result prop-key]
        (let [prop-value (get style-map prop-key)]
          (if (or (map? prop-value)
                  (coll? prop-value))
            (assoc result prop-key (recursively-remove-unnecessary-keywords prop-value))
            result)))
      style-without-unncessary-keywords
      (keys style-without-unncessary-keywords))))

(defn- recursively-remove-unnecessary-keywords [item]
  (cond
    (map? item)
    (remove-unnecessary-keywords-in-map item)

    (vector? item)
    (mapv recursively-remove-unnecessary-keywords item)

    (set? item)
    (set (map recursively-remove-unnecessary-keywords item))

    (coll? item)
    (map recursively-remove-unnecessary-keywords item)

    :else item))

(defn hash-style [style]
  (when (seq style)
    (let [; Hash style without certain special keywords:
          ; - sub-styles is only a link to other styles, it does not define the actual properties of this style
          ; - class-prefix is only for class naming, the style looks the same with it or without
          style-without-unnecessary-keywords (recursively-remove-unnecessary-keywords style)
          ; Convert Garden units to CSS to make them structurally hashable (different contents = different hash)
          hashable-style (recursively-convert-garden-units style-without-unnecessary-keywords)
          class-prefix (if @use-custom-class-prefix?
                         (check-custom-class-prefix (:stylefy.core/class-prefix style))
                         default-class-prefix)]
      (str class-prefix "_" (hash hashable-style)))))

(defn init-custom-class-prefix [options]
  (reset! use-custom-class-prefix? (boolean (:use-custom-class-prefix? options))))
