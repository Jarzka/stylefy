(ns stylefy.impl.styles
  (:require [stylefy.impl.dom :as dom]
            [garden.core :refer [css]]
            [clojure.string :as str]
            [stylefy.impl.utils :as utils]
            [clojure.set :as set]))

(def global-vendor-prefixes (atom {:stylefy.core/vendors #{}
                                   :stylefy.core/auto-prefix #{}}))

(defn- add-global-vendors [style]
  (merge style
         {:stylefy.core/vendors (set/union (:stylefy.core/vendors @global-vendor-prefixes)
                                           (:stylefy.core/vendors style))
          :stylefy.core/auto-prefix (set/union (:stylefy.core/auto-prefix @global-vendor-prefixes)
                                               (:stylefy.core/auto-prefix style))}))

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
  (let [with-classes (:stylefy.core/with-classes style)
        html-attributes (utils/filter-props options)
        html-attributes-class (:class html-attributes)
        html-attributes-inline-style (:style html-attributes)]

    (assert (nil? html-attributes-inline-style)
            "HTML attribute :style is not supported in options map. Instead, you should provide your style definitions as the first argument when calling use-style.")
    (assert (or (nil? html-attributes-class)
                (string? html-attributes-class)
                (vector? html-attributes-class))
            (str "Unsupported :class type (should be nil, string or vector). Got: " (pr-str html-attributes-class)))

    (let [contains-media-queries? (some? (:stylefy.core/media style))
          contains-feature-queries? (some? (:stylefy.core/supports style))
          excluded-modes #{:hover}
          contains-modes-not-excluded? (not (empty?
                                              (filter (comp not excluded-modes)
                                                      (keys (:stylefy.core/mode style)))))
          return-map (merge
                       html-attributes
                       {:class (cond
                                 (nil? html-attributes-class)
                                 (str/join " " (concat with-classes [style-hash]))

                                 (string? html-attributes-class)
                                 (str/join " " (concat [html-attributes-class] with-classes [style-hash]))

                                 (vector? html-attributes-class)
                                 (str/join " " (concat html-attributes-class with-classes [style-hash])))})
          inline-style (-> style
                           (utils/filter-props)
                           (utils/garden-units->to-css))]
      (if (dom/style-in-dom? style-hash)
        return-map
        (if (or contains-media-queries?
                contains-feature-queries?
                contains-modes-not-excluded?)
          ;; The style definition has not been added into the DOM yet, so return the style props
          ;; as inline style. Inline style gets replaced soon as the style definition
          ;; is added into the DOM and the component re-renders itself.
          ;; However, if there are media queries or specific mode definitions, inline styling is probably
          ;; going to look wrong. Thus, hide the component completely until the DOM is ready.
          (merge return-map {:style (merge inline-style
                                           {:visibility "hidden"})})
          (merge return-map {:style inline-style}))))))

(defn use-style! [style options]
  ;; Deref to make sure components re-render themselves when styles-in-use updates
  ;; so that we can get rid of inline styles and use only classes as soon as possible.
  @dom/styles-in-use

  (when-not (empty? style)
    (let [with-classes (:stylefy.core/with-classes style)]

      (assert (or (nil? with-classes)
                  (and (vector? with-classes)
                       (every? string? with-classes)))
              (str "with-classes argument must be a vector of strings, got: " (pr-str with-classes)))

      (let [style (add-global-vendors style)
            style-hash (hash-style style)
            already-created (dom/style-by-hash style-hash)]

        (when-not already-created
          (create-style! {:props style :hash style-hash}))

        (style-return-value style style-hash options)))))

(defn use-sub-style! [style sub-style options]
  (let [resolved-sub-style (get (:stylefy.core/sub-styles style) sub-style)]
    (if resolved-sub-style
      (use-style! resolved-sub-style options)
      (.warn js/console (str "Sub-style " (pr-str sub-style) " not found in style: " (pr-str style))))))

(defn sub-style
  [style & sub-styles]
  (let [resolved-sub-style (reduce #(get-in %1 [:stylefy.core/sub-styles %2])
                                   style
                                   sub-styles)]

    (if resolved-sub-style
      resolved-sub-style
      (.warn js/console (str "Sub-style " (pr-str sub-styles) " not found in style: " (pr-str style))))))

(defn prepare-styles [styles]
  (let [styles (remove nil? styles)]

    (doseq [style styles]
      (use-style! style {})
      (when-let [sub-styles (vals (:stylefy.core/sub-styles style))]
        (prepare-styles sub-styles))))

  (dom/update-styles-in-dom!))

(defn init-global-vendor-prefixes [options]
  (let [global-vendor-prefixes-options (:global-vendor-prefixes options)]
    (reset! global-vendor-prefixes
            {:stylefy.core/vendors (:stylefy.core/vendors global-vendor-prefixes-options)
             :stylefy.core/auto-prefix (:stylefy.core/auto-prefix global-vendor-prefixes-options)})))