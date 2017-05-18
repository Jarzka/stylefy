(ns stylefy.impl.styles
  (:require [dommy.core :as dommy]
            [garden.core :refer [css]]
            [reagent.core :as reagent :refer [atom]])
  (:require-macros [reagent.ratom :refer [run!]]))

(def ^:private styles-in-use (atom #{}))
(def ^:private stylefy-node-id :#_stylefy-style_)

(defn- styles-in-use->css [node styles-in-use]
  (let [styles-as-css (map #(css [(keyword (str "." (:class %))) (:style %)])
                           styles-in-use)]
    (dommy/set-text! node (apply str styles-as-css))))

(defn- update-style [styles-in-use]
  (let [node (dommy/sel1 stylefy-node-id)]
    (if node
      (styles-in-use->css node styles-in-use)
      (.error js/console "stylefy is unable to find the required <style> tag!"))))

(run!
  (update-style @styles-in-use))

(defn- use-style-in-dom! [style]
  (swap! styles-in-use conj style))

(defn use-style! [style]
  (use-style-in-dom! style)
  {:class (:class style)})

(defn style
  [style-map options]
  (let [class-name (str "_stylefy_" (hash style-map))]
    {:style style-map
     :class class-name}))

