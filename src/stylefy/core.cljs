(ns stylefy.core
  (:require [dommy.core :as dommy]
            [stylefy.impl.styles :as impl-styles]
            [stylefy.impl.dom :as dom]
            [reagent.core :as reagent :refer [atom]])
  (:require-macros [reagent.ratom :refer [run!]]))

(defn use-style
  "Defines style for a component.
   Returns a map which contains :class keyword pointing to the given style.

   The given parameter is a map which contains style properties. There can also be special namespaced keywords:
   ::sub-styles        The content of sub-styles should be a map, in which keys define the name of the sub-style and
                      values contain the style properties."
  [style]
  (impl-styles/use-style! style))

(defn use-sub-style
  "Defines style for a component using sub-style.

   The style map is the same as you would use with use-style.
   sub-style is the name of the sub-stale in the given style map."
  [style sub-style]
  (impl-styles/use-sub-style! style sub-style))