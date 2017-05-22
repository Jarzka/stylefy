(ns stylefy.core
  (:require [dommy.core :as dommy]
            [stylefy.impl.styles :as impl-styles]
            [stylefy.impl.dom :as dom])
  (:require-macros [reagent.ratom :refer [run!]]))

(defn use-style
  "Defines style for a component.
   Returns a map which contains :class keyword pointing to the given style if the style is found in DOM.
   If the style has not been added to DOM yet, it also returns the given props as inline style, so that
   the component looks good even if CSS has not been genererated yet (except if the style contains
   mode or media query definitions, {:visibility \"hidden\"} is returned until DOM is ready).

   The given parameter is a map which contains CSS style properties (as supported by Garden library).
   There can also be special namespaced keywords along with the style definitions:
   ::sub-styles        The contents of ::sub-styles should be a map,
                       in which keys define the name of the sub-style and
                       values contain the style properties.

   Options is an optional map with the following features:
   ::with-classes       A vector of class names used with the current style."
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

(defn keyframes
  "Adds the given keyframe definition to DOM.
   Identifier is the name of the keyframes.
   Frames are given in the same form as Garden accepts them.

   Example:
   (stylefy/keyframes \"simple-animation\"
                       [:from
                        {:opacity 0}]
                       [:to
                        {:opacity 1}])"
  [identifier & frames]
  (apply dom/add-keyframes identifier frames))

(defn font-face
  "Adds the given font-face definition to DOM.
   Properties are given in the same form as Garden accepts them.

   Example:
   (stylefy/font-face {:font-family \"open_sans\"
                       :src \"url('../fonts/OpenSans-Regular-webfont.woff') format('woff')\"
                       :font-weight \"normal\"
                       :font-style \"normal\"})"
  [properties]
  (dom/add-font-face properties))

(def ^{:doc "Reagent atom, true if all font-faces are present in DOM"}
font-faces-in-dom? dom/font-faces-in-dom?)
(def ^{:doc "Reagent atom, true if all keyframes are present in DOM"}
keyframes-in-dom? dom/keyframes-in-dom?)