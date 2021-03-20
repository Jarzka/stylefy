(ns stylefy.impl.utils
  (:require [garden.color :as color]
            [garden.types :as types]
            [clojure.string :as str])
  (:import #?@(:clj
               [(garden.types CSSFunction)
                (garden.types CSSUnit)
                (garden.color CSSColor)])))

(defn remove-special-keywords
  "Removes stylefy's namespaced keywords from the given map."
  [props]
  (apply dissoc props (filter #(and (namespace %)
                                    (str/starts-with? (namespace %) "stylefy"))
                              (keys props))))

(defn is-garden-value? [value]
  ; Note: types/CSSAtRule is not included since it is a selector, not a valid CSS value.
  #?(:cljs (or (instance? types/CSSUnit value)
               (instance? color/CSSColor value)
               (instance? types/CSSFunction value))
     :clj  (or (instance? CSSUnit value)
               (instance? CSSColor value)
               (instance? CSSFunction value))))