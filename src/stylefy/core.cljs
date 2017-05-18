(ns stylefy.core
  (:require [dommy.core :as dommy]
            [stylefy.impl.styles :as impl-styles]
            [reagent.core :as reagent :refer [atom]])
  (:require-macros [reagent.ratom :refer [run!]]))

(defn style
  "Defines a new style."
  ([style-map] (style style-map {}))
  ([style-map options]
  (impl-styles/style style-map options)))

(defn use-style
  "Defines style for a component."
  [style]
  (impl-styles/use-style! style))