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

(defn- recursively-convert-garden-units-in-map [style-map]
  (reduce
    (fn [result prop-key]
      (let [prop-value (get style-map prop-key)
            ; Check the value and convert it if necessary.
            converted-prop-value (if (or (utils/is-garden-value? prop-value)
                                         (map? prop-value)
                                         (coll? prop-value))
                                   (recursively-convert-garden-units prop-value)
                                   prop-value)
            ; The key can also be a map or collection, check it.
            converted-prop-key (if (or (map? prop-key)
                                       (coll? prop-key))
                                 (recursively-convert-garden-units prop-key)
                                 prop-key)]

        (if (= prop-key converted-prop-key)
          (assoc result prop-key converted-prop-value)
          (-> result
              (dissoc prop-key)
              (assoc converted-prop-key converted-prop-value)))))
    style-map
    (keys style-map)))

(defn- recursively-convert-garden-units [item]
  (cond
    (utils/is-garden-value? item)
    (compiler/render-css item)

    (map? item)
    (recursively-convert-garden-units-in-map item)

    (vector? item)
    (mapv recursively-convert-garden-units item)

    (set? item)
    (set (map recursively-convert-garden-units item))

    (coll? item)
    (map recursively-convert-garden-units item)

    :else item))

(defn hash-style [style]
  (when (seq style)
    (let [; Remove some unnecessary special keywords before hashing:
          ; - sub-styles is only a link to other styles, it does not define the actual properties of this style
          ; - class-prefix is only for class naming, the style looks the same with or without it
          style-without-unnecessary-keywords (dissoc style :stylefy.core/sub-styles :stylefy.core/class-prefix)
          ; Convert Garden units to CSS before hashing.
          ; This makes sure Garden units have the same hash on both frontend and backend.
          ; It also makes sure that Garden units and manually written units have the same hash.
          ; For example: "100px" should be considered the same as (garden.units/px 100)
          hashable-style (recursively-convert-garden-units style-without-unnecessary-keywords)
          class-prefix (if @use-custom-class-prefix?
                         (check-custom-class-prefix (:stylefy.core/class-prefix style))
                         default-class-prefix)]
      (str class-prefix "_" (hash hashable-style)))))

(defn init-custom-class-prefix [options]
  (reset! use-custom-class-prefix? (boolean (:use-custom-class-prefix? options))))
