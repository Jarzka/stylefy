(ns stylefy.core
  (:require [dommy.core :as dommy]
            [stylefy.impl.styles :as impl-styles]
            [stylefy.impl.dom :as dom])
  (:require-macros [reagent.ratom :refer [run!]]))

(defn use-style
  "Defines style for a component.
   Returns a map which contains :class keyword pointing to the given style if the style is found in DOM.
   If the style has not been added to DOM yet, also returns the given props as inline style, so that
   the component looks good even if CSS has not been genererated yet.

   The given parameter is a map which contains style properties (as supported by Garden library)
   There can also be special namespaced keywords alogn with the style definitions in the same map:
   ::sub-styles        The content of sub-styles should be a map, in which keys define the name of the sub-style and
                       values contain the style properties.

   Options is an optional map with the following features:
   ::with-classes       A vector of class names used with the current style"
  ([style] (use-style style {}))
  ([style options]
   (impl-styles/use-style! style options)))

(defn use-sub-style
  "Defines style for a component using sub-style.

   The style and options are the same as you would use with use-style.
   sub-style is the name of the sub-stale in the given style map."
  ([style sub-style] (use-sub-style style sub-style {}))
  ([style sub-style options]
  (impl-styles/use-sub-style! style sub-style options)))

(defn init
  "Initialises stylefy.

  Internally starts checking if new styles need to be added in to DOM as CSS classes."
  []
  (dom/init-dom-update))