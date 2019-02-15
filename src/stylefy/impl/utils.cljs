(ns stylefy.impl.utils
  (:require [dommy.core :as dommy]
            [garden.core :refer [css]]
            [garden.color :as color]
            [garden.types :as types]
            [garden.stylesheet :refer [at-media at-keyframes at-font-face]]
            [clojure.string :as str])
  (:require-macros [reagent.ratom :refer [run!]]))

(defn filter-css-props
  "Removes stylefy's namespaced keywords from the given map."
  [props]
  (apply dissoc props (filter #(and (namespace %)
                                    (str/starts-with? (namespace %) "stylefy"))
                              (keys props))))

(defn is-garden-value? [value]
  ; Note: types/CSSAtRule is not included since it is a selector, not a valid CSS value.
  (or (instance? types/CSSUnit value)
      (instance? color/CSSColor value)
      (instance? types/CSSFunction value)))