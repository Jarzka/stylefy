# stylefy

An EXPERIMENTAL ClojureScript library for styling UI components with ease.

The library is currently in development. More information coming soon!

# Introduction

stylefy makes it possible to define UI component styles as Clojure data. Internally the defined styles are converted to CSS classes by using [Garden](https://github.com/noprompt/garden) and inserted into DOM. When styles are defined as Clojure data, they can be easily transformed with Clojure's powerful functions (like merge) and parametrised.

# Supported features

- Defining styles as Clojure data for any UI element
- Defining sub-styles (you can create a style for the root element of your UI component and then define substyles for the internal elements)

# Changelog

Here: https://github.com/Jarzka/stylefy/releases
