(ns stylefy.core
  (:require [dommy.core :as dommy]
            [stylefy.impl.styles :as impl-styles]
            [reagent.core :as reagent :refer [atom]])
  (:require-macros [reagent.ratom :refer [run!]]))

(defn style
  "Defines a new style.

  The first parameter is a style-map, which contains keys as CSS props and values as CSS values.
  The style-map can also contain sub-styles. This can be defined by using ::sub-styles keyword."
  ([style-map] (style style-map {}))
  ([style-map options]
  (impl-styles/style style-map options)))

(defn use-style
  "Defines style for a component."
  [style]
  (impl-styles/use-style! style))

(defn use-sub-style
  "Defines style for a component using sub-style."
  [style sub-style]
  (impl-styles/use-sub-style! style sub-style))