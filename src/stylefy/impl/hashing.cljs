(ns stylefy.impl.hashing
  (:require [garden.core :refer [css]]
            [stylefy.impl.utils :as utils]
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

(defn hash-style [style]
  (when (not (empty? style))
    (let [hashable-garden-units (reduce
                                  ;; Convert Garden units to CSS to make them structurally
                                  ;; hashable (different contents = different hash)
                                  (fn [result prop-key]
                                    (let [prop-value (prop-key style)]
                                      (if (utils/is-garden-value? prop-value)
                                        (assoc result prop-key (compiler/render-css prop-value))
                                        result)))
                                  {}
                                  (keys (utils/filter-css-props style)))
          hashable-style (merge style hashable-garden-units)
          ;; Hash style without certain special keywords:
          ;; - sub-styles is only a link to other styles, it does not define the actual properties of this style
          ;; - class-prefix is only for class naming, the style looks the same with it or without
          hashable-style (dissoc hashable-style
                                 :stylefy.core/sub-styles
                                 :stylefy.core/class-prefix)
          class-prefix (if @use-custom-class-prefix?
                         (check-custom-class-prefix (:stylefy.core/class-prefix style))
                         default-class-prefix)]
      (str class-prefix "_" (hash hashable-style)))))

(defn init-custom-class-prefix [options]
  (reset! use-custom-class-prefix? (boolean (:use-custom-class-prefix? options))))
