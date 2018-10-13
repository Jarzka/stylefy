# stylefy

<img src="stylefy_logo_small.png" alt="" style="width: 100px; float: right;"/>

[![Clojars Project](https://img.shields.io/clojars/v/stylefy.svg)](https://clojars.org/stylefy)
[![CircleCI](https://circleci.com/gh/Jarzka/stylefy.svg?style=svg)](https://circleci.com/gh/Jarzka/stylefy)

ClojureScript library for styling UI components with ease.

[API documentation](https://jarzka.github.io/stylefy/doc)

# Introduction

stylefy makes it possible to define UI component styles as Clojure data and attach them into components easily. When styles are defined as Clojure data, they can be easily transformed with Clojure's powerful functions (like merge) and parametrised. Styles are converted to CSS on-demand, and since the converted CSS is handled internally by the library, there is no need to worry about things like writing selectors, name conflicts, difficult cascading, dead CSS code etc.

Currently stylefy works only with SPA applications using [Reagent](https://github.com/reagent-project/reagent). stylefy uses [Garden](https://github.com/noprompt/garden) in the background to do most of its CSS conversions. 

# Features

- Define styles as Clojure data, for any UI element
- Sub-styles help you to define a style for your component and all the elements inside of it in a single map
- Use any 3rd party CSS or framework (such as Bootstrap) easily with stylefy, override style props if necessary
- Supports CSS pseudo-classes & pseudo-elements via modes
- Vendor prefixes, define which vendor prefixes are used and which properties should be prefixed (locally or globally)
- Media queries, define how your style looks on various screen sizes
- Keyframes (for CSS animations)
- Font-face (for 3rd party web fonts)
- Feature queries (CSS @supports query)
- Style caching using local storage (can be turned off)
- Multi-instance support (you can run multiple apps using stylefy on the same web page)
- Small and simple core API
- Automatic style reloading with [Figwheel](https://github.com/bhauman/lein-figwheel)
- All features are tested to work with Chrome, Firefox, Edge & Internet Explorer 11

# FAQ

## How is this library different than Garden?

Garden is awesome, but it's "just" a Clojure to CSS generator. If you want to use Garden to style your page, you are pretty much going to write CSS code as usual, i.e. write classes and selectors to stylize things on the page. You also need to avoid CSS quirks like name conflicts and make sure you always handle CSS cascading process correcly. stylefy helps you with this; you just write your style definition in a map and attach it to your component in the render function by calling *use-style*. There is no need to write CSS classes or selectors, no need to worry about name conflicts etc.

Yes, it is possible to easily attach styles to components with Garden too if you use inline styles. But if you use stylefy, all your style definitions are converted to unique CSS classes automatically and the corresponding class is attached to your component. This is more effective than using inline-styles, especially if the same component exists multiple times on the same page. The style is defined only once in the CSS class, not multiple times in each component instance. Also, some CSS features like pseudoclasses (:hover etc.), media queries and feature queries are not possible to use as inline styles. For stylefy, this is not a problem, as it allows you to define pseudoclasses and media queries within the style map and converts everything to CSS automatically.

## Any real projects using stylefy?

Yup, for example:
- [Finnish Transport Agency: National Access Point and digitalization tools](https://github.com/finnishtransportagency/mmtis-national-access-point)
- [Velho Design System](https://github.com/velho-allianssi/velho-ds)
- [Solita Rooms](https://github.com/solita/solita-rooms)
- [My personal website](https://github.com/Jarzka/Voimala.org)

# Installation

Add the following line to your Leiningen project:

```clj
[stylefy "1.9.0"]
```

# Usage

```clj
(:require [stylefy.core :as stylefy])
```

## Init

Add the following *style* tags on your page's *head* tag. It is **recommended** that these tags are the last style tags in the *header* so that possible other styles do not override them.

The first tag is going to contain CSS definitions that are not going to change (font-face, keyframes etc.). The second will contain class definitions that are added into the DOM on-demand when components need them.

```html
<style id="_stylefy-constant-styles_"></style>
<style id="_stylefy-styles_"></style>
```

Then, call *stylefy/init* once when your application starts:

```clojure
(stylefy/init)
```

## Creating & using styles

Create a style as a normal Clojure map:

```clojure
(def button-style {:padding "25px"
                   :background-color "#BBBBBB"
                   :border "1px solid black"})
```

To use it in a component, use the *use-style* function:

```clojure
(defn- button [text]
  [:div (use-style button-style)
    text])
```

*use-style* accepts HTML attributes as the second parameter:

```clojure
(defn- button [text]
  [:div (use-style button-style {:on-click #(.log js/console "Click!")
                                 :class "some-3rd-party-button-class"})
    text])
```

Calling use-style asks stylefy to save the style (if it has not been saved already) and add it into the DOM as CSS class as soon as possible. The return value is a map pointing to the created class, and the given style properties as inline style. Inline style is needed until the CSS code has been generated and inserted into the DOM. When the DOM is ready, the component is forced to re-render itself and use only class definition.

If the style contains some specific definitions that cannot be present as inline style (some specific modes or media queries), the component is going to be hidden for a few milliseconds until the CSS style is added into the DOM. This should not be a problem, but if needed, the style can also be added into the DOM beforehand by calling *prepare-styles*. Calling this function on :component-will-mount makes sure the style is completely ready to be used when the component needs it.

```clojure
(r/create-class
  {:component-will-mount #(stylefy/prepare-styles [style1 style2 style3])
   :render (fn []
             [:div (use-style style1)
               [:div (use-style style2)]
               [:div (use-style style3)]])})
```

It's good to keep in mind that most of the time *prepare-styles* is not needed but calling *use-style* should be enough. Also, when caching is used, the style will be ready after its CSS has been created for the first time.

## Combine & parametrise styles

Combine or parametrise styles however you like:

```clojure
(def primary-button (merge generic-button {:background-color "rgb(88, 121, 193)"}))

(defn button-style [background-color]
  (merge generic-button {:background-color background-color}))
```

## Modes

Define how your style looks in different modes, such as when mouse is on top of an element using the style:

```clojure
(def simple-element {:background-color "rgb(88, 121, 193)"
                     ::stylefy/mode {:hover {:background-color "rgb(98, 131, 213)"}
                                     :before {:content "'CSS generated content'"}
                                     "::-webkit-progress-bar" {:-webkit-appearance "none"}}})
```

stylefy modes are pretty much the same thing as pseudoclasses in CSS and they simply create a new "class:mode" selector for you style. The reason for not using the name pseudoclass is completely self-willed; I think "pseudoclass" simply means nothing, when "mode" is a little bit more informative what CSS pseudoclasses are supposed to do.

## Sub-styles

Define a style for your component and all the elements inside of it in a single map:

```clojure
(def list-container-style (merge generic-container
                                 {::stylefy/sub-styles {:list {:margin-top "1em"}
                                                        :list-item {:color "black"}}}))

(defn list-in-container []
  [:div (use-style list-container-style)
   [:ul (use-sub-style list-container-style :list)
    [:li (use-sub-style list-container-style :list-item) "List element 1"]
    [:li (use-sub-style list-container-style :list-item) "List element 2"]
    [:li (use-sub-style list-container-style :list-item) "List element 3"]]])
```

Another version using deeper sub-style nesting:

```clojure
(def list-container-style (merge generic-container
                                 {::stylefy/sub-styles
                                   {:list {:margin-top "1em"
                                           ::stylefy/sub-styles {:item {:color "black"}}}}}))

(defn list-in-container []
  [:div (use-style list-container-style)
   [:ul (use-sub-style list-container-style :list)
    [:li (use-style (sub-style list-container-style :list :item)) "List element 1"]
    [:li (use-style (sub-style list-container-style :list :item)) "List element 2"]
    [:li (use-style (sub-style list-container-style :list :item)) "List element 3"]]])
```

Sub-styles are nothing special, they are supposed to contain the same contents as the main style map. ::sub-styles helps you to define styles that are closely related to the main style map but do not deserve their own 'def'.

## Vendor prefixes

Supported in the same way as Garden supports them.

```clojure
(def button {:border "1px solid black"
             :background-color "#888888"
             :border-radius "5px"
             :color "white"
             :text-align :center
             :padding "5px"
             :width "150px"
             :height "38px"
             ::stylefy/vendors ["webkit" "moz" "o"]
             ::stylefy/auto-prefix #{:border-radius}})
```

You can also use globally defined vendor prefixes. These prefixes are automatically added into every style map.

```clojure

(stylefy/init {:global-vendor-prefixes {::stylefy/vendors ["webkit" "moz" "o"]
                                        ::stylefy/auto-prefix #{:border-radius}}})
```

## Media queries

Define how your style looks on various screen sizes:

```clojure
(def phone-width "414px")

(def column {:padding "5px"
             :color "white"})

(def responsive-layout {:display :flex
                        :flex-direction :row
                        ::stylefy/media {{:max-width phone-width} {:flex-direction :column}}
                        ::stylefy/sub-styles {:column1 (merge column
                                                              {:background-color "#AA0000"
                                                               :flex 1})
                                              :column2 (merge column
                                                              {:background-color "#00AA00"
                                                               :flex 2})
                                              :column3 (merge column
                                                              {:background-color "#0000AA"
                                                               :flex 1})}})

(defn responsive-layout []
  [:div (use-style responsive-layout)
   [:div (use-sub-style responsive-layout :column1)
    [:p "This is column 1"]]
   [:div (use-sub-style responsive-layout :column2)
    [:p "This is column 2"]]
   [:div (use-sub-style responsive-layout :column3)
    [:p "This is column 3"]]])
```

You can also use modes and vendor prefixes inside media query style map.

## Feature queries

Define how your style looks when certain CSS features are supported by the browser:

```clojure
(def grid-style {;; Default style uses Flexbox as fallback
                 :display "flex"
                 :flex-direction "row"
                 :flex-wrap "wrap"
                 ::stylefy/media {{:max-width styles/phone-width}
                                  {:display "block"}}
                 ;; Use CSS Grid style if it is supported by the browser.
                 ;; If the browser does not support CSS Grid or feature queries at all, this
                 ;; block is simply ignored.
                 ::stylefy/supports {"display: grid"
                                     {:display "grid"
                                      :grid-template-columns "1fr 1fr 1fr"
                                      ;; Make CSS Grid responsive
                                      ::stylefy/media {{:max-width styles/phone-width}
                                                       {:grid-template-columns "1fr"}}}}})

```

You can use modes, media queries, and vendor prefixes inside feature query style map.


## 3rd party classes

Use 3rd party classes along with stylefy definitions:

```clojure
(defn- bs-navbar-item [index index-atom text]
  [:li (use-style styles/clickable
          {:class (when (= @index-atom index) "active")
           :role "presentation"
           :on-click #(reset! index-atom index)})
   [:a text]])
```

Alternative syntax:

```clojure
(defn- bs-navbar []
  (let [active-index (r/atom 0)]
    (fn []
      ;; Additional classes can also be attached in the name of the element
      [:ul.nav.nav-pills (use-style styles/boostrap-navbar-overrides)
       [bs-navbar-item 0 active-index "One"]
       [bs-navbar-item 1 active-index "Two"]
       [bs-navbar-item 2 active-index "Three"]
       [bs-navbar-item 3 active-index "Four"]])))
```

3rd party classes can also be attached directly into a style map. This means that the defined additional class names are always used with the style:

```clojure
(def boostrap-navbar {:background-color "#DDDDDD"
                      ::stylefy/with-classes ["nav" "nav-pills"]})
                      
(defn- bs-navbar []
  (let [active-index (r/atom 0)]
    (fn []
      [:ul (use-style boostrap-navbar)
       [bs-navbar-item 0 active-index "One"]
       [bs-navbar-item 1 active-index "Two"]
       [bs-navbar-item 2 active-index "Three"]
       [bs-navbar-item 3 active-index "Four"]])))
```


## Font-face

Call *stylefy/font-face* and the given font-face is added into the DOM as CSS code.

```clojure
(stylefy/font-face {:font-family "open_sans"
                    :src "url('../fonts/OpenSans-Regular-webfont.woff') format('woff')"
                    :font-weight "normal"
                    :font-style "normal"})
```


## Keyframes

Call *stylefy/keyframes* and the given keyframes are added into the DOM as CSS code.

```clojure
(stylefy/keyframes "simple-animation"
                   [:from
                    {:background-color "red"}]
                   [:to
                    {:background-color "blue"}])

(def animated-box (merge simple-box
                         {:animation-name "simple-animation"
                          :animation-duration "3s"
                          :animation-iteration-count "infinite"}))
```

## Custom class names

As has been told, stylefy converts style definition to unique CSS classes automatically and there is no need to worry about class names. It can, however, be useful to be able to generate custom named classes for example when working with 3rd party libraries / frameworks. For this purpose, call *stylefy/class*:

```clojure
;; This generates a CSS class with the name "background-transition" and adds it into the DOM.
(stylefy/class "background-transition"
               {:transition "background-color 1s"})

;; Use the generated class in a component like any other class
[:div.background-transition]
```

## Custom tag styles

As has been told, stylefy converts style definition to unique CSS classes automatically and there is no need to worry about writing selectors for HTML tags. However, custom tag styles can be useful for setting styles on base elements, like html or body. For this purpose, call *stylefy/tag*:

```clojure
;; This generates a CSS tag selector and style for "body" element
(def body-style
  {:background-color :lightyellow
   :padding          :5px})

(stylefy/tag "body" body-style)
```

## Style caching

stylefy supports style caching with HTML5 local storage. The converted CSS code is added into local storage and loaded from there when the page is reloaded.

As from version 1.7.0, caching with local storage is turned on by default. You can turn it off in the initialisation function:

```clojure
  (stylefy/init {:use-caching? false})
```

By default, the cache is cleared in seven days. You can clear it manually by calling:

```clojure
(require '[stylefy.cache :as stylefy-cache])
(stylefy-cache/clear)
```

### Cache options

Cache options support automatic cache clearing when a certain amount of time is passed.

```clojure
(stylefy/init {:use-caching? true
               :cache-options {:expires (* 1 60 60 24 7)}}) ; Cache is cleared after 7 days
```

# Multi-instance support

If you need to run multiple apps using stylefy on the same web page, use your app name as a suffix in the *style* tag id.

```html
<style id="_stylefy-constant-styles_myapp"></style>
<style id="_stylefy-styles_myapp"></style>
```

Then init stylefy with multi-instance support. Instance-id is a unique string (for example app name). Base-node is an optional base node for style tags (handy if you use web components).

```clojure
(stylefy/init {:multi-instance {:base-node (dommy/sel1 "#myapp")
                                :instance-id "myapp"}})
```

## Units and colors

You can use Garden's [Unit](https://github.com/noprompt/garden/wiki/Units-%26-Arithmetic) and [Color](https://github.com/noprompt/garden/wiki/Color) helpers with stylefy.

## More examples

More examples available here: https://github.com/Jarzka/stylefy/tree/master/examples/src/stylefy/examples

# Changelog

Here: https://github.com/Jarzka/stylefy/releases

# More cool stuff

- Need to namespace or unnamespace keywords in a map? Checkout my other library: [namespacefy](https://github.com/Jarzka/namespacefy)
- If you also want to present SQL queries as Clojure data, checkout [specql](https://github.com/tatut/specql)
