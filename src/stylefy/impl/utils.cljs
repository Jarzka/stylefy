(ns stylefy.impl.utils
  (:require [dommy.core :as dommy]
            [reagent.core :as r]
            [garden.core :refer [css]]
            [garden.stylesheet :refer [at-media at-keyframes at-font-face]])
  (:require-macros [reagent.ratom :refer [run!]]))

(defn filter-style-props
  "Removes namespaced keywords from style map."
  [props]
  (apply dissoc props (filter namespace (keys props))))