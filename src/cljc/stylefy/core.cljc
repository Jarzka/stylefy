(ns stylefy.core
  (:require [clojure.string :as str]
            [garden.core :refer [css]]
            [garden.stylesheet :refer [at-keyframes at-font-face]]
            [stylefy.impl.conversion :as conversion]
            #?(:cljs [stylefy.impl.dom :as dom])
            [stylefy.impl.cache :as cache]
            [stylefy.impl.hashing :as hashing]
            [stylefy.impl.log :as log]
            [stylefy.impl.state :as state]
            [stylefy.impl.styles :as impl-styles]))

#?(:clj (def ^:dynamic css-in-context (atom nil)))

(defn use-style
  "Defines a style for a component by converting the given style map in to an unique CSS class,
   and returning a pointer (a map with :class keyword) to it so that the component can use it.
   To keep the rendering process fast, use-style works asynchronously, meaning that it
   does not add the generated CSS class into the DOM immediately, but very soon instead.
   If the style has not been added into the DOM yet, it returns the given props as inline style,
   so that the component looks good even if CSS class has not been generated yet.

   Important exception: if the style contains specific modes or media query definitions,
   which cannot be used as inline style, {:style {:visibility \"hidden\"}} is returned.
   Thus, the component is going to be hidden for a few milliseconds.
   In most cases, this is not a problem, but if you want to avoid it, see prepare-styles function.

   The given 'style' parameter is a map which contains CSS style properties
   (as supported by Garden library). There can also be special namespaced keywords
   along with the style definitions. These are:

   Core features:

   ::sub-styles        Makes it possible to define a named style map inside of the main style map.
                       The contents of ::sub-styles should be a map, in which keys define the name of
                       the sub-style and values contain the style properties.
                       Sub-styles are nothing special, they are supposed to contain the same contents
                       as the main style map. ::sub-styles helps you to define styles that are closely
                       related to the main style map but do not deserve their own 'def'.
   ::mode              A map in which keys are mode names and values are style properties.
                       Internally all modes are converted to CSS pseudoclasses or pseudoelements.
                       You can use any mode name that is a valid CSS speudoclass.
   ::media             A map in which keys are maps presenting CSS media query definitions, and values
                       are style maps which are used when the media query is active.
                       Vendor prefixes and modes can be used inside the media query style map.
   ::supports          A map in which keys are strings presenting CSS feature query definitions, and values
                       are style maps which are used when the supports query is active.
                       Vendor prefixes, media queries and modes can be used inside the support query style map.
   ::vendors           A vector of vendor prefixes that are used with ::auto-prefix.
   ::auto-prefix       A set of style properties that should be prefixed with ::vendors.
   ::with-classes      A collection of additional class names that should always be used with
                       this style definition.

   Additional features:

   ::class-prefix      Custom prefix for generated class names. If not given, the default prefix will be used.
                       Custom prefix can be used for debugging and automatic software testing purposes.
                       Note that you need to set custom class prefixes on in the init function.
   ::manual            Manual mode can be used to style child elements with manually written CSS selectors
                       using Garden syntax. It should be used only for styling 3rd party components and
                       resolving corner cases in which complex CSS selectors are needed.
                       For the most part, it is recommended to use ::sub-styles.

   Options is an optional map, which contains HTML attributes (:class, :href, :src etc.)."
  ([style] (use-style style {}))
  ([style options]
   (assert (or (map? style) (nil? style)) (str "Style should be a map or nil, got: " (pr-str style)))
   (assert (or (map? options) (nil? options)) (str "Options should be a map or nil, got: " (pr-str options)))
   #?(:cljs (impl-styles/use-style! style options (fn [style] (dom/save-style @dom/dom style)))
      :clj  (impl-styles/use-style! style options (fn [{:keys [hash css]}]
                                                    (swap! css-in-context assoc-in [:stylefy-classes hash] css))))))


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
   #?(:cljs (impl-styles/use-sub-style! style sub-style options (fn [style] (dom/save-style @dom/dom style)))
      :clj  (impl-styles/use-sub-style! style sub-style options (fn [{:keys [hash css]}]
                                                                  (swap! css-in-context assoc-in [:stylefy-classes hash] css))))))

(defn sub-style
  "Returns sub-style for a given style."
  [style & sub-styles]
  (assert (every? keyword? sub-styles) (str "Sub style should be referenced by keyword, got: " (pr-str sub-styles)))
  (apply impl-styles/sub-style (apply conj [style] sub-styles)))

(defn init
  "Initialises stylefy.

  The following options are supported:

  :global-vendor-prefixes     A map containing a set of ::stylefy/vendors and ::stylefy/auto-prefix properties.
                              These properties are globally prefixed in all stylefy style maps.
  :use-custom-class-prefix?   If set to true, custom class prefix is used if the style map contains it.
                              By default, this is set to false.

  FRONTEND ONLY:

    :use-caching?             If true, caches the generated CSS code using localstorage
                              so that future page loads work faster. Defaults to true since version 1.7.0.
                              Also check :cache-options.
    :cache-options            A map which can contain the following keywords:
      :expires                Number of seconds after the cache is cleared automatically.
                              For example, value 604800 clears the cache after one week.
                              By default, the cache is never cleared automatically.
                              You can also clear the cache manually by calling stylefy.cache/clear.

    :multi-instance           Provides support for multiple stylefy instances.
                              This can be used if you need to run multiple SPA applications
                              on the same page and at least two of them are using stylefy.
      :base-node              Base node where this instance's <style> tags are queried. Not required.
      :instance-id            Unique string (for example app name). This is used as suffix for stylefy's <style> tags
                              so make sure you name each instance's <style> tags correctly. For example:
                              <style id=\"_stylefy-styles_myapp\">
                              <style id=\"_stylefy-constant-styles_myapp\">
                              This value is also used as suffix in caching."
  ([] (init {}))
  ([options]
   (when @state/stylefy-initialised?
     (log/warn "Attempted to initialise stylefy more than once."))

   #?(:cljs (do (reset! dom/dom (:dom options))
                (dom/load-uninitialised-styles @dom/dom @dom/uninitialised-styles)
                (reset! dom/uninitialised-styles nil)))
   (hashing/init-custom-class-prefix options)
   #?(:cljs (dom/init-multi-instance options))
   #?(:cljs (cache/init @dom/stylefy-instance-id options))
   #?(:cljs (dom/load-cache @dom/dom))
   (impl-styles/init-global-vendor-prefixes options)
   (reset! state/stylefy-initialised? true)
   #?(:cljs (dom/update-dom @dom/dom))
   nil))

(defn keyframes
  "Frontend: Adds the given keyframe definition into the DOM asynchronously.
   Backend: Adds the given keyframe definition into the current context.

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
  (let [keyframes-as-css (css (apply at-keyframes identifier frames))]
    #?(:cljs (do (dom/add-keyframes @dom/dom identifier keyframes-as-css)
                 nil)
       :clj  (do (swap! css-in-context assoc-in [:keyframes identifier] keyframes-as-css)
                 nil))))

(defn font-face
  "Frontend: Adds the given font-face definition into the DOM asynchronously.
   Backend: Adds the given font-face definition into the current context.

   Properties are given in the same form as Garden accepts them.

   Example:
   (stylefy/font-face {:font-family \"open_sans\"
                       :src \"url('../fonts/OpenSans-Regular-webfont.woff') format('woff')\"
                       :font-weight \"normal\"
                       :font-style \"normal\"})"
  [properties]
  (assert (map? properties) (str "Properties should be a map, got: " (pr-str properties)))

  (let [font-faces-as-css (css (at-font-face properties))]
    #?(:cljs (do (dom/add-font-face @dom/dom font-faces-as-css)
                 nil)
       :clj  (do (swap! css-in-context assoc :font-faces
                        (conj (:font-faces @css-in-context) font-faces-as-css))
                 nil))))

(defn tag
  "Frontend: Creates a CSS selector for the given tag and properties and adds it into the DOM asynchronously.
   Backend: Creates a CSS selector for the given tag and properties and adds it into the current context.

   Normally you should let stylefy convert your style maps to unique CSS classes by calling
   use-style, instead of creating tag selectors. However, custom tag styles
   can be useful for setting styles on base elements, like html or body.

   Example:
   (stylefy/tag \"code\"
                 {:background-color \"lightyellow\"})"
  [name properties]
  (assert (string? name) (str "Tag name should be a string, got: " (pr-str name)))
  (assert (map? properties) (str "Properties should be a map, got: " (pr-str properties)))

  (let [tag-as-css (conversion/style->css {:props properties :custom-selector name})]
    #?(:cljs (do (dom/add-tag @dom/dom tag-as-css)
                 nil)
       :clj  (do (swap! css-in-context assoc-in [:tags name] tag-as-css)
                 nil))))

(defn class
  "Frontend: Creates a CSS class with the given name and properties and adds it into the DOM asynchronously.
   Backend: Creates a CSS class with the given name and properties and adds it into the the current context.

   Normally you should let stylefy convert your style maps to unique CSS classes by calling
   use-style. Thus, there is usually no need to create customly named classes when using stylefy,
   unless you work with some 3rd party framework.

   Example:
   (stylefy/class \"enter-transition\"
                   {:transition \"background-color 2s\"})"
  [name properties]
  (assert (string? name) (str "Name should be a string, got: " (pr-str name)))
  (assert (map? properties) (str "Properties should be a map, got: " (pr-str properties)))

  (let [class-as-css (conversion/style->css {:props properties :custom-selector (conversion/class-selector name)})]
    #?(:cljs (do (dom/add-class @dom/dom class-as-css)
                 nil)
       :clj  (do (swap! css-in-context assoc-in [:classes name] class-as-css)
                 nil))))

;
; Backend only
;

#?(:clj
   (defn query-with-styles
     "Takes a query-fn, which is assumed to return HTML as text, and executes it.
      If use-style is called during the execution, the generated CSS is kept in temporary memory.
      When the query has finished, a special value of _stylefy-server-styles-content_ is searched
      in the output and replaced with the generated CSS. Returns the end result."
     [query]
     (binding [stylefy.core/css-in-context (atom nil)]
       (let [result (query)
             css (str
                   (apply str (:font-faces @css-in-context))
                   (apply str (vals (:keyframes @css-in-context)))
                   (apply str (vals (:tags @css-in-context)))
                   (apply str (vals (:classes @css-in-context)))
                   (apply str (vals (:stylefy-classes @css-in-context))))
             result-with-styles-attached (str/replace result #"_stylefy-server-styles-content_" css)]
         result-with-styles-attached))))

;
; Frontend only
;

#?(:cljs
   (defn prepare-styles
     "Converts the given styles and their sub-styles to CSS and adds them into the DOM
      synchronously (immediately)."
     [styles]
     (assert (seqable? styles) (str "Styles should be seqable, got: " (pr-str styles)))
     (assert (every? map? (remove nil? styles))
             (str "Every style should be a map or nil, got: " (pr-str styles)))
     (impl-styles/prepare-styles styles)
     nil))

#?(:cljs
   (defn prepare-style
     "Same as prepare-styles, but takes only one style map as a parameter, prepares it
      and returns it. Can be used easily along with use-style: (use-style (prepare-style style))."
     [style]
     (assert (or (map? style) (nil? style)) (str "Style should be a map or nil, got: " (pr-str style)))
     (when style
       (impl-styles/prepare-styles [style]))
     style))
