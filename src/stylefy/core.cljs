(ns stylefy.core
  (:require [dommy.core :as dommy]
            [stylefy.impl.styles :as impl-styles]
            [reagent.core :as reagent :refer [atom]])
  (:require-macros [reagent.ratom :refer [run!]]))

(defn style
  "Defines a new style.
   Returns a map which constains information about the new style. The map constains the following
   keywords:
   ::props        Style properties (as provided)
   ::class        Unique class name for the style
   ::sub-styles   Sub-styles of the style (if any)

   The first parameter is a style-map, keys are CSS props and values are CSS values.

   The style-map can also contain ::sub-styles keyword.
   The content of sub-styles should be a map, in which keys define the name of the sub-style and
   values contain the style properties."
  ([style-map] (style style-map {}))
  ([style-map options]
  (impl-styles/style style-map options)))

(defn use-style
  "Defines style for a component.

   Returns a map which contains :class keyword pointing to the given style."
  [style]
  (impl-styles/use-style! style))

(defn use-sub-style
  "Defines style for a component using sub-style.

   Returns a map which contains :class keyword pointing to the given style."
  [style sub-style]
  (impl-styles/use-sub-style! style sub-style))