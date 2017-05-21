# stylefy

[![Clojars Project](https://img.shields.io/clojars/v/stylefy.svg)](https://clojars.org/stylefy)

An EXPERIMENTAL ClojureScript library for styling UI components with ease.

# Introduction

stylefy makes it possible to define UI component styles as Clojure data. Internally the defined styles are converted to CSS classes by using [Garden](https://github.com/noprompt/garden) and inserted into DOM. When styles are defined as Clojure data, they can be easily transformed with Clojure's powerful functions (like merge) and parametrised. Also, since the converted CSS is handled internally by the library, there is no need to worry about things like name conflicts etc.

# Supported features

- Styles as Clojure data for any UI element
- Sub-styles (you can create a style for the root element of your UI component and then define substyles for the internal elements)
- Use any other classes (such as Boostrap) easily with stylefy style definitions, override if necessary
- Define general, inheriting styles (such as text color, font etc.) by putting them in the root component of the app

# Requirements

Currently stylefy works only with [Reagent](https://github.com/reagent-project/reagent). This is because stylefy forces all components to re-render themselves when currently used styles are changed. This requirement has been implemented using Reagent atoms, which is deref'd in all components calling *use-style*.

Support for other UI frameworks is planned, but not on the top priority list.

# Installation

Add the following line to your Leiningen project:

```clj
[stylefy "0.2.3"]
```

# Usage

```clj
(:require [stylefy.core :as stylefy])
```

## Init

First, call *stylefy/init* once when your application starts:

```clojure
(stylefy/init)
```

## Simple styles

Create style as a normal Clojure map:

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

## Modes

Define how your style looks in different modes, such as when mouse is on top of the element usin the style:

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
