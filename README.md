# stylefy

<img src="stylefy_logo_small.png" alt="" style="width: 100px; float: right;"/>

[![Clojars Project](https://img.shields.io/clojars/v/stylefy.svg)](https://clojars.org/stylefy)
[![CircleCI](https://circleci.com/gh/Jarzka/stylefy.svg?style=svg)](https://circleci.com/gh/Jarzka/stylefy)

ClojureScript library for styling UI components with ease.

[API documentation](https://jarzka.github.io/stylefy/doc)

# Introduction

stylefy makes it possible to define UI component styles as Clojure data. Internally the defined styles are converted to CSS classes by using [Garden](https://github.com/noprompt/garden) and inserted into DOM. When styles are defined as Clojure data, they can be easily transformed with Clojure's powerful functions (like merge) and parametrised. Also, since the converted CSS is handled internally by the library, there is no need to worry about things like name conflicts, difficult cascading, dead CSS code etc.

# Features

- Styles as Clojure data for any UI element
- Sub-styles help you to define a style for your component and all the elements inside of it in a single map
- Use any other classes (such as Boostrap) easily with stylefy, override style props if necessary
- Define general, inheriting styles (such as text color, font etc.) by putting them in the root component of the app
- Define how your style behaves in different modes, for example when a mouse is on top of an element using the style
- Vendor prefixes, define which vendor prefixes are used and which properties should be prefixed
- Media queries, define how your style looks different on various screen sizes
- Keyframes
- Font-face
- Small and simple API
- Tested to work with Chrome, Firefox, Edge & Internet Explorer 11

# Requirements

- Currently stylefy works only with [Reagent](https://github.com/reagent-project/reagent). This is because stylefy forces all components to re-render themselves when currently used styles are changed. This requirement has been implemented using Reagent atom, which is deref'd in all components calling *use-style*. Support for other UI frameworks is on experimental stage.
- Your browser needs to support requestAnimationFrame. However, all major browsers have supported it for a long time, so this should not be problem.

# FAQ

## How is this library different than Garden?

Garden is awesome, but it's "just" a Clojure to CSS generator. If you want to use Garden to style your page, you are pretty much going to write CSS code as usual, i.e. write classes and selectors to stylize things on the page. You also need to avoid CSS quirks like name conflicts and make sure you always handle CSS cascading process correcly. stylefy helps you with this; you just write your style definition and attach it to your component in the render function by calling *use-style*. There is no need to write CSS classes or selectors, no need to worry about name conflicts etc.

Yes, it is possible to easily attach styles to components with Garden too if you use inline styles. But if you use stylefy, all your style definitions are converted to unique CSS classes automatically and the corresponding class is attached to your component. This is more effective than using inline-styles, especially if the same component exists multiple times on the same page. The style is defined only once in the CSS class, not multiple times in each component instance. Also, pseudoclasses (:hover etc.) and media queries are difficult (impossible) to work with inline styles. For stylefy, this is not a problem, as it allows you to define pseudoclasses and media queries and converts them to CSS code automatically.

## Any real projects using stylefy?

Yup, for example:
- [My personal website](https://github.com/Jarzka/Voimala.org). I converted to from SASS to stylefy. Diff [here](https://github.com/Jarzka/Voimala.org/compare/ac776c50d2b6e61786c7771efaf397a5fe28557e...d9d547f25b6bfbe375c501ac09a387a1060a5eef)

Are you using stylefy in your (public) project? Send me a message.

# Installation

Add the following line to your Leiningen project:

```clj
[stylefy "0.7.3"]
```

# Usage

```clj
(:require [stylefy.core :as stylefy])
```

## Init

Make sure there are the following *style* tags on your page's *head* tag. The tags should be the last <style> tags in the header.

The first tag is going to contain CSS definitions that are not going to change (font-face, keyframes etc.). The second will contain class definitions that are added into DOM on-demand when components need them.

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

Calling use-style asks stylefy to save the style (if it has not been saved already) and add it into DOM as CSS class as soon as possible. The return value is a map pointing to the created class, and the given style properties as inline style. Inline style is needed until the CSS code has been generated and inserted into DOM. When the DOM is ready, the component is forced to re-render itself and use only class definition.

If the style contains some specific definitions that cannot be present as inline style (some specific modes or media queries), the component is going to be hidden for a small amount of time until the CSS style is added in to DOM. The styles can also be added in to DOM beforehand by calling *prepare-styles*. Calling this function on :component-will-mount makes sure the styles are completely ready to be used when the component needs them.

```clojure
(r/create-class
  {:component-will-mount #(stylefy/prepare-styles [style1 style2 style3])
   :render (fn []
             [:div (use-style style1)
               [:div (use-style style2)]
               [:div (use-style style3)]])})
```

It's good to keep in mind that most of the time *prepare-styles* is not needed but calling *use-style* should be enough.

## Modes

Define how your style looks in different modes, such as when mouse is on top of an element using the style:

```clojure
(def simple-element {:background-color "rgb(88, 121, 193)"
                     ::stylefy/mode {:hover {:background-color "rgb(98, 131, 213)"}}})
```

stylefy modes are pretty much the same thing as pseudoclasses in CSS and they simply create a new "class:mode" selector for you style. The reason for not using the name pseudoclass is completely self-willed; I think "pseudoclass" simply means nothing, when "mode" is a little bit more informative what CSS pseudoclasses are supposed to do.

## Combine & parametrise styles

Combine or parametrise styles however you like:

```clojure
(def primary-button (merge generic-button {:background-color "rgb(88, 121, 193)"}))
                                  
(defn button-style [background-color]
  (merge generic-button {:background-color background-color}))
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

Sub-styles are nothing special, they are supposed to contain the same contents as the main style map. ::sub-styles helps you to define styles that are closely related to the main style map but do not deserve their own 'def'.

## Vendor prefixes

Supported in the same way as Garden supports them:

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

When using this style, a CSS class generated in which border-radius is prefixed with the given values (webkit, moz and o).

## Media queries

Define how you style looks different on various screen sizes:

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
  [:div (use-style styles/responsive-layout)
   [:div (use-sub-style styles/responsive-layout :column1)
    [:p "This is column 1"]]
   [:div (use-sub-style styles/responsive-layout :column2)
    [:p "This is column 2"]]
   [:div (use-sub-style styles/responsive-layout :column3)
    [:p "This is column 3"]]])
```

## 3rd party classes

Use 3rd party classes along with stylefy definitions:

```clojure
(defn- bs-navbar-item [index index-atom text]
  [:li (merge (use-style styles/clickable
                         (when (= @index-atom index)
                           ;; Call ::with-classes to add additional classes
                           {::stylefy/with-classes ["active"]}))
              {:role "presentation"
               :on-click #(reset! index-atom index)})
   [:a text]])

(defn- bs-navbar []
  (let [active-index (r/atom 0)]
    (fn []
      ;; Additional classes can also be attached in the name of the element,
      ;; just like in Reagent.
      [:ul.nav.nav-pills (use-style styles/boostrap-navbar-overrides)
       [bs-navbar-item 0 active-index "One"]
       [bs-navbar-item 1 active-index "Two"]
       [bs-navbar-item 2 active-index "Three"]
       [bs-navbar-item 3 active-index "Four"]])))
```

## Font-face

Call *stylefy/font-face* and the given font-face is added in to DOM as CSS code.

```clojure
(stylefy/font-face {:font-family "open_sans"
                    :src "url('../fonts/OpenSans-Regular-webfont.woff') format('woff')"
                    :font-weight "normal"
                    :font-style "normal"})
```


## Keyframes

Call *stylefy/keyframes* and the given keyframes are added in to DOM as CSS code.

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
;; This generates a CSS class with the name "background-transition" and adds it in to DOM.
(stylefy/class "background-transition"
               {:transition "background-color 1s"})
          
;; Use the generated class in a component like any other class
[:div.background-transition]
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
