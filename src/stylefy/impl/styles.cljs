(ns stylefy.impl.styles
  (:require [dommy.core :as dommy]
            [garden.core :refer [css]]
            [reagent.core :as reagent :refer [atom]])
  (:require-macros [reagent.ratom :refer [run!]]))

(def ^:private styles-in-use (atom #{}))
(def ^:private stylefy-node-id :#_stylefy-styles_)

(defn- styles-in-use->css [node styles-in-use]
  (let [styles-as-css (map #(css [(keyword (str "." (::stylefy.core/class %))) (::stylefy.core/props %)])
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
  {:class (::stylefy.core/class style)})

(defn use-sub-style! [style sub-style]
  (let [resolved-style (get (::stylefy.core/sub-styles style) sub-style)]
    (if resolved-style
      (do
        (use-style-in-dom! resolved-style)
        {:class (::stylefy.core/class resolved-style)})
      (.error js/console (str "Sub-style " (pr-str sub-style) " not found in style: " (pr-str style))))))

(defn- style-by-hash [styles-in-use style-hash]
  (first (filter #(= (::stylefy.core/class %) style-hash)
                 styles-in-use)))

(defn style
  ([style-map] (style style-map nil))
  ([style-map options]
   (let [class-name (str "_stylefy_" (hash style-map))]
     (if-let [already-created-style (style-by-hash @styles-in-use class-name)]
       already-created-style
       (let [sub-styles (::stylefy.core/sub-styles style-map)
             defined-substyles (when sub-styles
                                 (apply merge (map #(-> {% (style (% sub-styles))})
                                                   (keys sub-styles))))]
         (merge
           {::stylefy.core/props (dissoc style-map ::stylefy.core/sub-styles)
            ::stylefy.core/class class-name}
           (when sub-styles
             {::stylefy.core/sub-styles defined-substyles})))))))