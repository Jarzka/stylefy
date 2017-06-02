(ns stylefy.core
  (:require [dommy.core :as dommy]
            [stylefy.impl.styles :as impl-styles]
            [stylefy.impl.dom :as dom])
  (:require-macros [reagent.ratom :refer [run!]]))

(defn use-style
  "Defines a style for a component by converting the given style map in to an unique CSS class,
   and returning a pointer (a map with :class keyword) to it so that the component can use it.

   Calling use-style does not immediately add the generated CSS class to DOM, because doing this
   in a single render would slow everything down if use-style is called multiple times.
   If the style has not been added to DOM yet, it also returns the given props as inline style, so that
   the component looks good even if CSS class has not been genererated yet.
   Exception: if the style contains specific modes or media query definitions,
   {:visibility \"hidden\"} is returned until DOM is ready).

   The given 'style' parameter is a map which contains CSS style properties
   (as supported by Garden library). There can also be special namespaced keywords
   along with the style definitions:

   ::sub-styles        Makes it possible to define a named style map inside of the main style map.
                       The contents of ::sub-styles should be a map,
                       in which keys define the name of the sub-style and
                       values contain the style properties.
                       Sub-styles are nothing special, they are supposed to contain the same contents
                       as the main style map. ::sub-styles helps you to define styles that are closely
                       related to the main style map but do not deserve their own 'def'.
   ::mode              A map in which keys are mode names and values are style properties.
                       Internally all modes are converted to CSS pseudoclasses. You can use any mode name
                       that is a valid CSS speudoclass.
   ::media             A map in which keys are maps presenting CSS media query definitions, and values
                       are style maps which are used when the media query is active.
   ::vendors           A vector of vendor prefixes that are used with ::auto-prefix.
   ::auto-prefix       A set of style properties that should be prefixed with ::vendors.

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

(defn class
  "Creates a CSS class with the given name and properties.
   Normally you should let stylefy convert your style maps to unique CSS classes by calling
   use-style. Thus, there is usually no need to create customly named classes when using stylefy.

   Example:
   (stylefy/class \"enter-transition\"
                   {:transition \"background-color 2s\"})"
  [name properties]
  (dom/add-class name properties))

(def ^{:doc "Reagent atom, true if all font-faces are present in DOM"}
font-faces-in-dom? dom/font-faces-in-dom?)
(def ^{:doc "Reagent atom, true if all keyframes are present in DOM"}
keyframes-in-dom? dom/keyframes-in-dom?)