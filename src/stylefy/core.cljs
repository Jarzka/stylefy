(ns stylefy.core
  (:require [dommy.core :as dommy]
            [stylefy.impl.styles :as impl-styles]
            [stylefy.impl.dom :as dom])
  (:require-macros [reagent.ratom :refer [run!]]))

(defn use-style
  "Defines style for a component.
   Returns a map which contains :class keyword pointing to the given style if the style is found in DOM.
   Otherwise, returns the given props as inline style.

   The given parameter is a map which contains style properties. There can also be special namespaced keywords:
   ::sub-styles        The content of sub-styles should be a map, in which keys define the name of the sub-style and
                      values contain the style properties."
  ([style] (use-style style {}))
  ([style options]
   (impl-styles/use-style! style options)))

(defn use-sub-style
  "Defines style for a component using sub-style.

   The style map is the same as you would use with use-style.
   sub-style is the name of the sub-stale in the given style map."
  ([style sub-style] (use-sub-style style sub-style {}))
  ([style sub-style options]
  (impl-styles/use-sub-style! style sub-style options)))

(defn init
  "Initialises stylefy.

  Internally starts checking if new styles need to be added in to DOM as CSS classes."
  []
  (dom/init-dom-update))