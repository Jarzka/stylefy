# stylefy
An EXPERIMENTAL ClojureScript library for styling UI components with ease.

The library is currently in development. More information coming soon!

# Introduction

stylefy makes it possible to define UI component styles as Clojure data. Internally the defined styles are converted to CSS classes by using [Garden](https://github.com/noprompt/garden) library. When styles are defined as Clojure data, they can be easily transformed using Clojure's powerful functions (like merge) and parametrised using the language you know.

# Supported features

- Defining styles as Clojure data for any UI element, styles are converted internally to CSS classes
- Defining sub-styles (you can create a style for the root element of your UI component and then define substyles for the internal elements like <p> tags)

# Changelog

Here: https://github.com/Jarzka/stylefy/releases
