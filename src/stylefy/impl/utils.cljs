(ns stylefy.impl.utils
  (:require [dommy.core :as dommy]
            [reagent.core :as r]
            [garden.core :refer [css]]
            [garden.color :as color]
            [garden.units :as units]
            [garden.types :as types]
            [garden.compiler :as compiler]
            [garden.stylesheet :refer [at-media at-keyframes at-font-face]]
            [clojure.string :as str])
  (:require-macros [reagent.ratom :refer [run!]]))

(defn filter-css-props
  "Removes stylefy's namespaced keywords from the given map."
  [props]
  (apply dissoc props (filter #(and (namespace %)
                                    (str/starts-with? (namespace %) "stylefy"))
                              (keys props))))

(defn garden-units->css
  "Checks all values in the map and converts all Garden units to CSS."
  [props]
  (reduce
    (fn [result next-key]
      (let [value (next-key props)]
        (if (or (instance? types/CSSUnit value)
                (instance? color/CSSColor value))
          (assoc result next-key (compiler/render-css value))
          result)))
    props
    (keys props)))