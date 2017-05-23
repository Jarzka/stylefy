(ns stylefy.impl.styles
  (:require [stylefy.impl.dom :as dom]
            [garden.core :refer [css]]
            [clojure.string :as str]))

(defn hash-style [style]
  ;; Hash style without its sub-styles. ::sub-styles is only a link to other styles, it
  ;; does not define the actual properties of this style.
  (str "_stylefy_" (hash
                     (dissoc style
                             :stylefy.core/sub-styles))))

(defn- create-style! [{:keys [props hash] :as style}]
  (dom/save-style! {:props props :hash hash})

  ;; Create sub-styles (if any)
  (doseq [sub-style (vals (:stylefy.core/sub-styles props))]
    (create-style! {:props sub-style :hash (hash-style sub-style)})))

(defn- style-return-value [style style-hash options]
  (let [with-classes (:stylefy.core/with-classes options)
        contains-media-queries? (some? (:stylefy.core/media style))
        excluded-modes #{:hover}
        contains-modes-not-excluded? (not (empty?
                                            (filter (comp not excluded-modes)
                                                    (keys (:stylefy.core/mode style)))))
        return-map {:class (str/join " " (conj with-classes style-hash))}]
    (if (dom/style-in-dom? style-hash)
      return-map
      (if (or contains-media-queries? contains-modes-not-excluded?)
        ;; The style definition has not been added to DOM yet, so return the style props
        ;; as inline style. Inline style gets replaced soon as the style definition
        ;; is added to DOM and the component re-renders itself.
        ;; However, if there are media queries or specific mode definitions, inline styling is probably
        ;; going to look wrong. Thus, hide the component completely until DOM is ready.
        (merge return-map {:style (merge style
                                         {:visibility "hidden"})})
        (merge return-map {:style style})))))

(defn use-style! [style options]
  ;; Deref to make sure components re-render themselves when styles-in-use updates
  ;; so that we can get rid of inline styles and use only classes as soon as possible.
  @dom/styles-in-use

  (when-not (empty? style)
    (let [with-classes (:stylefy.core/with-classes options)]

      (assert (or (nil? with-classes)
                  (and (vector? with-classes)
                       (every? string? with-classes)))
              (str "with-classes argument must be a vector of string, got: " (pr-str with-classes)))

      (let [style-hash (hash-style style)
            already-created (dom/style-by-hash style-hash)]

        (when-not already-created
          (create-style! {:props style :hash style-hash}))

        (style-return-value style style-hash options)))))

(defn use-sub-style! [style sub-style options]
  (let [resolved-sub-style (get (:stylefy.core/sub-styles style) sub-style)]
    (if resolved-sub-style
      (use-style! resolved-sub-style options)
      (.warn js/console (str "Sub-style " (pr-str sub-style) " not found in style: " (pr-str style))))))