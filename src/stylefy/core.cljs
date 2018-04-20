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
   If the style has not been added into the DOM yet, it also returns the given props as inline style, so that
   the component looks good even if CSS class has not been generated yet.

   Important exception: if the style contains specific modes or media query definitions,
   {:style {:visibility \"hidden\"}} is returned until the DOM is ready.
   This is done because these definitions cannot be present as inline style.
   If this is a problem, see prepare-styles function.

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
   ::with-classes      A collection of additional class names that should always be used with
                       this style definition.

   Options is an optional map, which contains HTML attributes (:class, :href, :src etc.).
   It can also contain the the following features:

   ::with-classes       DEPRECATED. A vector of additional class names used with the current style.
                        Deprecated since version 1.3.0: The options map can now contain
                        any HTML attributes. Thus, you can just use :class instead of ::with-classes."
  ([style] (use-style style {}))
  ([style options]
   (assert (or (map? style) (nil? style)) (str "Style should be a map or nil, got: " (pr-str style)))
   (assert (or (map? options) (nil? options)) (str "Options should be a map or nil, got: " (pr-str options)))
   (impl-styles/use-style! style options)))

(defn use-sub-style
  "Defines style for a component using sub-style.

   The style and options are the same as you would use with use-style.
   sub-style is the name of the sub-stale in the given style map.

   If you have a deeper sub-style nesting, ie. you want to get a sub-style from sub-style,
   take a look at sub-style function."
  ([style sub-style] (use-sub-style style sub-style {}))
  ([style sub-style options]
   (assert (or (map? style) (nil? style)) (str "Style should be a map or nil, got: " (pr-str style)))
   (assert (or (map? options) (nil? options))
           (str "Options should be a map or nil, got: " (pr-str options)))
   (impl-styles/use-sub-style! style sub-style options)))

(defn sub-style
  "Returns sub-style for a given style."
  [style & sub-styles]
  (assert (every? keyword? sub-styles) (str "Sub style should be referenced by keyword, got: " (pr-str sub-styles)))
  (apply impl-styles/sub-style (apply conj [style] sub-styles)))

(defn init
  "Initialises stylefy.

  Internally checks cache once and starts checking if new styles need to be added into
  the DOM as CSS classes.

  The following options are supported:
    use-caching?              If true, caches the generated CSS code using localstorage
                              so that future page loads work faster. Defaults to false.
                              Also check :cache-options.
    cache-options             A map which can contain the following keywords:
      expires                 Number of seconds after the cache is cleared automatically.
                              For example, value 604800 clears the cache after one week.
                              By default, the cache is never cleared automatically.
                              You can also clear the cache manually by calling stylefy.cache/clear.
    global-vendor-prefixes    A map containing a set of ::stylefy/vendors and
                              ::stylefy/auto-prefix properties.
                              These properties are globally prefixed in all CSS code."
  ([] (init {}))
  ([options]
   (dom/init-dom-update)
   (dom/init-styles-in-use options)
   (impl-styles/init-global-vendor-prefixes options)))

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
  (assert (string? identifier) (str "Identifier should be string, got: " (pr-str identifier)))
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
  (assert (map? properties) (str "Properties should be a map, got: " (pr-str properties)))
  (dom/add-font-face properties))

(defn tag
  "Creates a CSS selector for the given tag and properties.
   Normally you should let stylefy convert your style maps to unique CSS classes by calling
   use-style, instead of creating tag selectors. However, custom tag styles
   can be useful for setting styles on base elements, like html or body.

   Example:
   (stylefy/tag \"code\"
                 {:background-color \"lightyellow\"})"
  [name properties]
  (assert (string? name) (str "Tag name should be a string, got: " (pr-str name)))
  (assert (map? properties) (str "Properties should be a map, got: " (pr-str properties)))
  (dom/add-tag name properties))

(defn class
  "Creates a CSS class with the given name and properties.
   Normally you should let stylefy convert your style maps to unique CSS classes by calling
   use-style. Thus, there is usually no need to create customly named classes when using stylefy,
   unless you work with some 3rd party framework.

   Example:
   (stylefy/class \"enter-transition\"
                   {:transition \"background-color 2s\"})"
  [name properties]
  (assert (string? name) (str "Name should be a string, got: " (pr-str name)))
  (assert (map? properties) (str "Properties should be a map, got: " (pr-str properties)))
  (dom/add-class name properties))

(defn prepare-styles
  "Will convert the given styles and their sub-styles to CSS
   and add them into the DOM immediately, all at once.

   Normally, when you call use-style, the given style is converted to CSS and will
   be added into the DOM very soon. Until then, the style is returned as inline style, except
   if it cannot be present as inline style (it contains some specific modes and media queries).
   In this purpose, it can be useful to ask stylefy to prepare
   certain styles before they are used in a component. This way, components using these styles
   can start using CSS classes and media queries immediately.

   This function should be called when a component is going to be created
   (in :component-will-mount lifecycle method)."
  [styles]
  (assert (seqable? styles) (str "Styles should be seqable, got: " (pr-str styles)))
  (assert (every? map? (remove nil? styles))
          (str "Every style should be a map or nil, got: " (pr-str styles)))
  (impl-styles/prepare-styles styles))

;; Style maps can contain the following special keywords,
;; which are referenced to this namespace:
;;  :stylefy.core/sub-styles
;;  :stylefy.core/media
;;  :stylefy.core/mode
;;  :stylefy.core/vendors
;;  :stylefy.core/auto-prefix
;;  :stylefy.core/supports