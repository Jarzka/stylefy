# stylefy

[![Clojars Project](https://img.shields.io/clojars/v/stylefy.svg)](https://clojars.org/stylefy)
[![CircleCI](https://circleci.com/gh/Jarzka/stylefy.svg?style=svg)](https://circleci.com/gh/Jarzka/stylefy)

An EXPERIMENTAL ClojureScript library for styling UI components with ease.

[API documentation](https://jarzka.github.io/stylefy/doc)

# Introduction

stylefy makes it possible to define UI component styles as Clojure data. Internally the defined styles are converted to CSS classes by using [Garden](https://github.com/noprompt/garden) and inserted into DOM. When styles are defined as Clojure data, they can be easily transformed with Clojure's powerful functions (like merge) and parametrised. Also, since the converted CSS is handled internally by the library, there is no need to worry about things like name conflicts etc.

# Features

- Styles as Clojure data for any UI element
- Sub-styles (you can create a style for the root element of your UI component and then define substyles for the internal elements)
- Use any other classes (such as Boostrap) easily with stylefy, override if necessary
- Define general, inheriting styles (such as text color, font etc.) by putting them in the root component of the app
- Define how your style behaves in different modes, for example when a mouse is on top of an element using the style
- Vendor prefixes, define which vendor prefixes are used and which properties should be prefixed
- Media queries, define how your style looks different on various screen sizes
- Easy and simple API

# Requirements

- Currently stylefy works only with [Reagent](https://github.com/reagent-project/reagent). This is because stylefy forces all components to re-render themselves when currently used styles are changed. This requirement has been implemented using Reagent atom, which is deref'd in all components calling *use-style*. Support for other UI frameworks is planned, but not on the top priority list.
- Your browser needs to support requestAnimationFrame. However, all major browsers have supported it for a long time, so this should not be problem.

# FAQ

## How is this library different than Garden?

Garden is "just" a Clojure to CSS generator. If you want to use Garden to style your page, you are pretty much going to write CSS code as usual, i.e. write classes and selectors to stylize things on the page. You also need to avoid CSS quirks like name conflicts and make sure you always handle CSS cascading process correcly. stylefy helps you with this; you just write your style definition and attach it to your component in the render function. There is no need to write CSS classes or selectors, no need to worry about name conflicts etc. You just call *use-style* in your component and let stylefy handle everything.

Yes, it is possible to easily attach styles to components with Garden too if you use inline styles. But if you use stylefy, all your style definitions are converted to unique CSS classes automatically and the corresponding class is attached to your component. This is more effective than using inline-styles, especially if the same component exists multiple times on the same page. The style is defined only once in the CSS class, not multiple times in each component instance. Also, pseudoclasses (:hover etc.) and media queries are difficult (impossible) to work with inline styles. For stylefy, this is not a problem, as it allows you to define pseudoclasses and media queries and converts them to CSS code automatically.

# Installation

Add the following line to your Leiningen project:

```clj
[stylefy "0.4.3"]
```

# Usage

```clj
(:require [stylefy.core :as stylefy])
```

## Init

Make sure there is the following *style* tag on your page's *head* tag. The *style* tag should be the last of its kind.

```html
<style id="_stylefy-styles_"></style>
```

Then, call *stylefy/init* once when your application starts:

```clojure
(stylefy/init)
```

## Creating & using styles

Create a style as a normal Clojure map:

```clojure
(def generic-container {:padding "25px"
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

## Modes

Define how your style looks in different modes, such as when mouse is on top of an element using the style:

```clojure
(def simple-element {:background-color "rgb(88, 121, 193)"
                     ::stylefy/mode {:hover {:background-color "rgb(98, 131, 213)"}}}
```

## Combine & parametrise styles

Combine or parametrise styles however you like:

```clojure
(def primary-button (merge generic-button {:background-color "rgb(88, 121, 193)"}))
                                  
(defn button-style [background-color]
  (merge generic-button {:background-color background-color}))
```

## Sub-styles

Create styles in styles using sub-styles (useful, if you want to define styles for the root component and it's sub elements in a single map):

```clojure
(def container-style (merge
                       generic-container
                       {::stylefy/sub-styles {:list {:margin-top "1em"}}}))

(defn list-in-container []
  [:div (use-style styles/container-style)
   [:ul (use-sub-style styles/container-style :list)
    [:li "List element 1"]
    [:li "List element 2"]
    [:li "List element 3"]]])
```

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
                           {::stylefy/with-classes ["active"]}))
              {:role "presentation"
               :on-click #(reset! index-atom index)})
   [:a text]])

(defn- bs-navbar []
  (let [active-index (r/atom 0)]
    (fn []
      [:ul (use-style styles/boostrap-navbar-overrides
                      {::stylefy/with-classes ["nav" "nav-pills"]})
       [bs-navbar-item 0 active-index "One"]
       [bs-navbar-item 1 active-index "Two"]
       [bs-navbar-item 2 active-index "Three"]
       [bs-navbar-item 3 active-index "Four"]])))
```

## Units and colors

You can use Garden's [Unit](https://github.com/noprompt/garden/wiki/Units-%26-Arithmetic) and [Color](https://github.com/noprompt/garden/wiki/Color) helpers with stylefy.

## More examples

More examples available here: https://github.com/Jarzka/stylefy/tree/master/examples/src/stylefy/main

# Changelog

Here: https://github.com/Jarzka/stylefy/releases
