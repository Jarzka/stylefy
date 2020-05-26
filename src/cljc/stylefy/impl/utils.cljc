(ns stylefy.impl.utils
  (:require [garden.core :refer [css]]
            [garden.color :as color]
            [garden.types :as types]
            [garden.stylesheet :refer [at-media at-keyframes at-font-face]]
            [clojure.string :as str]))

(defn filter-css-props
  "Removes stylefy's namespaced keywords from the given map."
  [props]
  (apply dissoc props (filter #(and (namespace %)
                                    (str/starts-with? (namespace %) "stylefy"))
                              (keys props))))

(defn is-garden-value? [value]
  ; Note: types/CSSAtRule is not included since it is a selector, not a valid CSS value.
  false
  #_(or (instance? types/CSSUnit value)
      (instance? color/CSSColor value)
      (instance? types/CSSFunction value)))