<p align="center">
  <img align="center" width="200" src="stylefy_logo2.png" alt="">
</p>

<p align="center">Clojure(Script) library for styling user interface components with ease.</p>

[![Clojars Project](https://img.shields.io/clojars/v/stylefy.svg)](https://clojars.org/stylefy)
[![CircleCI](https://circleci.com/gh/Jarzka/stylefy.svg?style=svg)](https://circleci.com/gh/Jarzka/stylefy)

[API documentation](https://jarzka.github.io/stylefy/doc)

# Introduction

stylefy makes it possible to define CSS styles as Clojure data and attach them into HTML elements easily. Styles are converted to CSS on-demand and scoped locally. This makes writing style code easy and maintainable.

While being originally created with the frontend in mind, stylefy now runs on both Web browsers and servers. On the frontend, it is designed to be used along with [Reagent](https://github.com/reagent-project/reagent). stylefy uses [Garden](https://github.com/noprompt/garden) in the background for most of its CSS conversions. 

# Features

- Define styles as Clojure data. All important CSS features are supported: pseudo-classes, pseudo-elements, keyframes, font-faces, media queries, feature queries...
- Use any 3rd party CSS code along with stylefy
- Manual mode can be used for styling 3rd party components and resolving corner cases in which complex CSS selectors are needed
- Vendor prefixes are supported both locally and globally
- CSS caching on the frontend using local storage (optional)
- Multi-instance support on the frontend (you can run multiple apps using stylefy on the same web page if all apps are built separately)
- Small and simple core API which is easy to setup
- Fast, asynchronous CSS generation
- Automatic style reloading (with shadow-cljs or Figwheel)
- All features are tested to work with Chrome, Firefox, Edge & Internet Explorer 11

# Installation

Stable version (frontend only):

```clj
[stylefy "1.14.1"]
```

Latest development version (includes SSR support):

```clj
[stylefy "2.0.0-rc.2"]
```

# Setup

## Frontend (ClojureScript)

**Follow these steps if you want to use stylefy along with Reagent:**

Add the following **style** tags on your page's **head** tag. It is **recommended** that these tags are the last style tags in the **header** so that it is less likely that possible other styles would override them.

The first tag is going to contain CSS definitions that are not going to change (font-face, keyframes etc.). The second will contain class definitions that are added into the DOM on-demand when components need them.

```html
<style id="_stylefy-constant-styles_"></style>
<style id="_stylefy-styles_"></style>
```

Require stylefy:

```clj
(:require [stylefy.core :as stylefy])
```

Then, call **stylefy/init** once when your application starts:

```clojure
(stylefy/init)
```

## Backend (Clojure)

**Follow these steps if you want to render styles on the server. These steps are not necessary if you only render styles on the frontend.**

Call `(stylefy/init)` once when your server starts.

Assuming you have a query function which generates HTML text, wrap it with `stylefy/query-with-styles`.

```clj
(stylefy/query-with-styles
  (fn [] (html (example-component))))
```

If `use-style` is called during the query execution, the generated CSS is kept in temporary memory. When the query has finished, a special value of `_stylefy-server-styles-content_` is searched in the output and replaced with the generated CSS. The end result is HTML code with styles attached.
      
Full example:

```clj
(ns my.app
  (:require [hiccup.core :refer [html]
            [stylefy.core :as stylefy :refer [use-style]]))

(defn index []
  [:html
   [:head
    [:title "Example"]

    [:style {:id "_stylefy-server-styles_"} "_stylefy-server-styles-content_"]
    [:style {:id "_stylefy-constant-styles_"}]
    [:style {:id "_stylefy-styles_"}]]

   [:body (use-style {:color :black})
    [:div (use-style {:text-align :center} {:id "app"})]]])

(defn example-query []
  ; stylefy must have been initialised at this point
  (stylefy/query-with-styles
    (fn [] (html (index)))))
```

# Usage

## Creating & using styles

Create a style as a normal Clojure map:

```clojure
(def button-style {:padding "25px"
                   :background-color "#BBBBBB"
                   :border "1px solid black"})
```

To use it in a component, use the **use-style** function:

```clojure
(defn- button [text]
  [:div (use-style button-style)
    text])
```

**use-style** accepts HTML attributes as the second parameter:

```clojure
(defn- button [text]
  [:div (use-style button-style {:on-click #(.log js/console "Click!")
                                 :class "some-3rd-party-button-class"})
    text])
```

On the frontend, **use-style** adds the style into the DOM as a CSS class on-demand (see "How it works" for more details). On the server, it returns a class name pointing to the generated CSS code.

### Passing styles to components

**use-style** is designed to be called only inside component render functions to define styles for **HTML** elements. If you need to pass styles to Reagent components, pass them as regular Clojure maps, and call **use-style** last, only for HTML elements:

```clojure
(defn- button-with-custom-style [text style]
   [:button (use-style style {:on-click #(.log js/console "Click!"))
     text])
     
(defn- button-wrapper []
  [:div
    ;; This is OK
    [button-with-custom-style "Hello" {:padding "25px"
                                       :background-color "#BBBBBB"
                                       :border "1px solid black"}]
    ;; This is NOT ok, because use-style would be called twice, second time with incorrect arguments
    [button-with-custom-style "Hello" (use-style {:padding "25px"
                                                  :background-color "#BBBBBB"
                                                  :border "1px solid black"})]])
```

### Combine & parametrise styles

Combine or parametrise styles however you like:

```clojure
; Define a style using some other style as a template
(def primary-button (merge generic-button {:background-color "rgb(88, 121, 193)"}))

; Generate a style via function
(defn custom-primary-button-style [color]
  (merge primary-button {:color color}))

(defn custom-button [text color]
  [:button (use-style (custom-primary-button-style color))
    text])
```

Notice that if your style-generator function takes numeric values, and you know that it's going to be called with numerous different parameter combinations, it is recommended to use these numeric values via inline styles. Otherwise every possible number combination creates a new CSS class, which is inefficient. So instead of this:

```clojure
(defn button-with-dynamic-position [text color x y]
  ; Bad! Every possible parameter combination creates a new CSS class!
  [:button (use-style (positioned-button color x y))
    text])
```

Do something like this:

```clojure
(defn button-with-dynamic-position [text color x y]
  [:button (merge (use-style (custom-primary-button-style color))
                  {:style {:left x :top y}})
    text])
```

## Modes (pseudo-classes & pseudo-elements)

stylefy modes are pretty much the same thing as pseudoclasses/pseudoelements in CSS and they simply create a new "class:mode" selector for your style. The reason for not using the name pseudoclass is completely self-willed; I think "mode" as a name is a little bit more informative than CSS pseudoclasses.

Here is an example of how to define a style with modes:

```clojure
(def style-with-modes {:background-color "rgb(88, 121, 193)"
                       ::stylefy/mode {:hover {:background-color "rgb(98, 131, 213)"}
                                       :before {:content "'CSS generated content'"}
                                       "::-webkit-progress-bar" {:-webkit-appearance "none"}}})
```

In some cases the order of CSS pseudo elements is important, so writing modes in vector format is also supported:

```clojure
(def style-with-modes {:background-color "white"
                       ::stylefy/mode [[:before {:content "'CSS generated content'"}]
                                       [:hover {:background-color "#ffedcf"}]
                                       [:active {:background-color "blue" :color "white"}]]})
```

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

Sub-styles are nothing special, they are supposed to contain the same contents as the main style map. If you wish, you can always omit them and use the regular **use-style** without any sub-styles. However, sub-styles help you to define styles that are closely related to each other in a single map, which can make style maintenance easier.

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

For syntax help, see Garden's [documentation](https://github.com/noprompt/garden/wiki/Media-Queries).

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

You can use 3rd party class names by passing them via `:class` HTML attribute. The value can be a string, a keyword or a vector of strings/keywords.

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

3rd party classes can also be attached directly into a style map. This means that the defined additional class names are always used with the style. It accepts the same syntax as `:class`.

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

## Font-face (frontend only)

Call **stylefy/font-face** and the given font-face is added into the DOM as CSS code asynchronously.

```clojure
(stylefy/font-face {:font-family "open_sans"
                    :src "url('../fonts/OpenSans-Regular-webfont.woff') format('woff')"
                    :font-weight "normal"
                    :font-style "normal"})
```

## Keyframes (frontend only)

Call **stylefy/keyframes** and the given keyframes are added into the DOM as CSS code asynchronously.

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

## Custom class names (frontend only)

As has been told, stylefy converts style definition to unique CSS classes automatically and there is no need to worry about class names. It can, however, be useful to be able to generate custom named classes for example when working with 3rd party libraries / frameworks. For this purpose, call **stylefy/class**:

```clojure
;; This generates a CSS class with the name "background-transition" and adds it into the DOM.
(stylefy/class "background-transition"
               {:transition "background-color 1s"})

;; Use the generated class in a component like any other class
[:div.background-transition]
```

## Custom tag styles (frontend only)

You can generate styles for HTML tags by calling **stylefy/tag**:

```clojure
;; This generates a CSS tag selector and style for "body" element
(def body-style
  {:background-color :lightyellow
   :padding          :5px})

(stylefy/tag "body" body-style)
```

## Manual mode

Manual mode can be used to style child elements with manually written CSS selectors using Garden syntax. It should be used only for **corner cases** in which complex CSS selectors are needed, or when you want to style some **3rd party child components** that do not take style props as parameters. The selector and the style written in manual mode will be scoped inside the element in which you use the style map with **use-style**. To avoid confusion, stylefy's special keywords do not work in manual mode. For the most part, it is recommended to use **sub-styles** for styling child elements.

An example of such corner case is a situation in which we want to change the style of some child element when the parent element is being hovered:

```clojure
(def mobile-media-query {:max-width "550px"})

(def hoverbox-style
  {:width "500px"1
   :height "200px"
   :padding "33px"
   :margin-bottom "10px"
   :background-color "#55AA55"
   ::stylefy/sub-styles {:innerbox {:width "100%"
                                    :height "100%"
                                    :background-color "#444444"}}
   ;; Change the background color of the child element when the parent element is being hovered.
   ;; This is a corner case that stylefy cannot handle directly, so we use manual mode to resolve it.
   ::stylefy/manual [[:&:hover [:.innerbox
                                ;; Brighten by default
                                {:background-color "#999999"}]]
                     (at-media mobile-media-query [:&:hover [:.innerbox
                                                             ;; Darker on mobile
                                                             {:background-color "#666666"}]])]
   ::stylefy/media {mobile-media-query
                    {:width "100%"}}})

(defn hoverbox []
  [:div (use-style hoverbox-style)
   [:div.innerbox (use-sub-style hoverbox-style :innerbox)]])
```

For syntax help, see Garden's [documentation](https://github.com/noprompt/garden/wiki/Syntax).

## Style caching

stylefy supports style caching for styles generated on the frontend. The styles can be cached in HTML5 local storage. The converted CSS code is added into local storage and loaded from there when the page is reloaded.

As from version 1.7.0, caching with local storage is turned on by default. You can turn it off in the initialisation function:

```clojure
  (stylefy/init {:use-caching? false})
```

By default, the cache is cleared in seven days. You can also clear it manually by calling:

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

## Garden units and colors

You can use Garden's [Unit](https://github.com/noprompt/garden/wiki/Units-%26-Arithmetic) and [Color](https://github.com/noprompt/garden/wiki/Color) helpers with stylefy. You can also use Garden's `defcssfn` macro to create custom CSS functions (notice that `defcssfn` is a macro and needs `garden.core` dependency declaration). 

## Debugging and testing

If you want to test your user interface by examining CSS class names, stylefy's automatically generated class names can become a hassle. To make testing and debugging easier, you can use your own prefix in stylefy's automatically generated class names:

```clojure
(def my-style {:color "red"
               ::stylefy/class-prefix "debugthis"}
```

Notice that you need to turn custom prefixes on separately on the init function:

```clojure
(stylefy/init {:use-custom-class-prefix? true})
```

# Advanced features 

## Frontend multi-instance support

Running multiple apps using stylefy on the same web page is currently possible if every app is built separately (every app contains its own JS file). Every instance can use its own style tag, so use your app name as a suffix in the **style** tag id.

```html
<style id="_stylefy-constant-styles_myapp"></style>
<style id="_stylefy-styles_myapp"></style>
```

Then init stylefy with multi-instance support. Instance-id is a unique string (for example app name). Base-node is an optional base node for style tags (handy if you use web components).

```clojure
(stylefy/init {:multi-instance {:base-node (dommy/sel1 "#myapp")
                                :instance-id "myapp"}})
```

# FAQ

## How is this library different than Garden?

Garden is awesome, but it's "only" a Clojure to CSS generator. If you want to use Garden to style your page, you are pretty much going to write CSS code as usual, i.e. write classes and selectors to stylize things on the page. You also need to avoid CSS quirks like name conflicts and make sure you always handle CSS cascading process correctly. stylefy helps you with this; you just write your style definition in a map and attach it to your component in the render function by calling **use-style**. There is no need to write CSS classes or selectors, no need to worry about name conflicts, dead CSS code etc.

Yes, it is possible to easily attach styles to components with Garden too if you use inline styles. But if you use stylefy, all your style definitions are converted to unique CSS classes automatically and the corresponding class is attached to your component. This is more effective than using inline-styles, especially if the same component exists multiple times on the same page. The style is defined only once in the CSS class, not multiple times in each component instance. Also, some CSS features are not available to use as inline styles (pseudoclasses, media queries etc.). For stylefy, this is not a problem, as it allows you to define pseudoclasses and media queries within the style map and converts everything to CSS automatically.

TLDR; stylefy it's like using inline CSS, but with full support for all CSS features that are not normally available when using CSS inline.

## How does the CSS generation work on the frontend?

**use-style** saves the style and adds it into the DOM as a CSS class asynchronously (if it's not already there). The return value is a map containing the given style properties as inline style. It is needed until the CSS class has been generated and inserted into the DOM. When the DOM is ready, the component is forced to re-render itself and use only the CSS class definition.

You might ask why does **use-style** work asynchronously? The reason is speed. Consider a case when one or more components are going to be rendered and all of them are calling **use-style** very many times with different style maps. In this case, updating the DOM on every single call would slow the rendering process down. To keep the rendering fast, the idea is to collect as many style maps as possible during a single render event, convert all of them to CSS and add into the DOM at once.

If the style contains some specific definitions that cannot be present as inline style (some specific modes or media queries), the HTML element using the style is going to be hidden for a few milliseconds with CSS **visibility** set to **hidden**, until the converted CSS style is added into the DOM. In most cases, this should not be a problem, but if needed, the style can be added into the DOM synchronously by calling **prepare-style**:

```clojure
[:div (use-style (prepare-style style))]
```

Because **prepare-style** causes immediate synchronous DOM update, it is not recommended to overuse it, as it can slow the rendering process. Also, it's good to keep in mind that most of the time **prepare-style** is not needed, but calling **use-style** is enough. Also, when caching is used, the style will be ready after its CSS has been created for the first time.

## Any real projects using stylefy?

Yup, for example: [Finnish National Access Point](https://github.com/finnishtransportagency/mmtis-national-access-point), [Velho Design System](https://github.com/velho-allianssi/velho-ds), [Solita Rooms](https://github.com/solita/solita-rooms), [My personal website](https://github.com/Jarzka/Pikseli.org), and [various other projects](https://github.com/search?q=_stylefy-constant-styles_&type=Code)

# More examples

More examples available here: https://github.com/Jarzka/stylefy/tree/master/examples/src/stylefy/examples

# More cool stuff

- Need to namespace or unnamespace keywords in a map? Checkout my other library: [namespacefy](https://github.com/Jarzka/namespacefy)
- If you also want to present SQL queries as Clojure data, checkout [specql](https://github.com/tatut/specql)
