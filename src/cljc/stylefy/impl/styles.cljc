(ns stylefy.impl.styles
  (:require [clojure.string :as str]
            #?(:cljs [stylefy.impl.dom :as dom])
            [stylefy.impl.hashing :as hashing]
            [stylefy.impl.utils :as utils]
            [stylefy.impl.state :as state]
            [stylefy.impl.conversion :as conversion]
            [stylefy.impl.log :as log]
            [clojure.set :as set]))

(def global-vendor-prefixes (atom {:stylefy.core/vendors #{}
                                   :stylefy.core/auto-prefix #{}}))

(defn- add-global-vendors [style]
  (merge style
         {:stylefy.core/vendors (set/union (:stylefy.core/vendors @global-vendor-prefixes)
                                           (:stylefy.core/vendors style))
          :stylefy.core/auto-prefix (set/union (:stylefy.core/auto-prefix @global-vendor-prefixes)
                                               (:stylefy.core/auto-prefix style))}))

(defn- create-style! [{:keys [props hash] :as style} style-created-handler]
  (let [style-css (conversion/style->css style)]
    (style-created-handler {:css style-css :hash hash})

    ; Create sub-styles (if any)
    (doseq [sub-style (vals (:stylefy.core/sub-styles props))]
      (create-style!
        {:props sub-style :hash (hashing/hash-style sub-style)}
        style-created-handler))))

(defn- class-into-string
  "Return class definition as string, or nil if the argument is nil."
  [class]
  (when class
    (cond
     (string? class) class
     (keyword? class) (name class)
     (vector? class) (str/join " "
                               (remove nil? (mapv class-into-string class))))))

(defn validate-class-definition [class origin]
  (assert (or (nil? class)
              (string? class)
              (keyword? class)
              (and (vector? class)
                   (every? #(or (string? %) (keyword? %) (nil? %)) class)))
          (str "Unsupported " origin " type. It should be nil, keyword, string or vector of strings/keywords). Got: " (pr-str class))))

(defn- prepare-style-return-value
  "Given a style, hash and options, returns HTML attributes for a Hiccup component,
   or nil if there are not any attributes."
  [style style-hash options]

  (when (:stylefy.core/with-classes options)
    (log/warn ":stylefy.core/with-classes is deprecated in options map (since 1.3.0, removed in 2.0.0), use :class instead."))

  (let [style-with-classes (:stylefy.core/with-classes style)
        html-attributes (utils/remove-special-keywords options)
        html-attributes-class (:class html-attributes)
        html-attributes-inline-style (:style html-attributes)]

    (validate-class-definition html-attributes-class ":class")
    (validate-class-definition style-with-classes ":stylefy.core/with-classes")
    (assert (nil? html-attributes-inline-style) "HTML attribute :style is not supported in options map. Instead, you should provide your style definitions as the first argument when calling use-style.")

    (let [class-as-string (class-into-string html-attributes-class)
          style-with-classes-as-string (class-into-string style-with-classes)
          final-class (str/trim
                        (str
                          style-hash " "
                          (str/join " " (remove nil? [class-as-string style-with-classes-as-string]))))
          final-html-attributes (merge
                                  html-attributes
                                  (when (seq final-class) {:class final-class}))]

      (when (seq final-html-attributes)
        final-html-attributes))))

(defn style-return-value [style style-hash options]
  (let [return-map (prepare-style-return-value style style-hash options)]
    #?(:cljs (if (or (empty? style)
                     (dom/style-in-dom? @dom/dom style-hash))
               return-map
               ; The style definition has not been added into the DOM yet, so return the style props
               ; as inline style. Inline style gets replaced soon as the style definition
               ; is added into the DOM and the component re-renders itself.
               ; However, if there are media queries, specific mode definitions etc., inline styling is probably
               ; going to look wrong. In that case, hide the component completely until the DOM is ready.
               (let [contains-media-queries? (some? (:stylefy.core/media style))
                     contains-feature-queries? (some? (:stylefy.core/supports style))
                     contains-manual-mode? (some? (:stylefy.core/manual style))
                     excluded-modes #{:hover}
                     modes (:stylefy.core/mode style)
                     mode-names (cond
                                  (map? modes) (set (keys modes))
                                  (vector? modes) (set (map first modes))
                                  :else #{})
                     contains-modes-not-excluded? (seq (filter (comp not excluded-modes) mode-names))
                     inline-style (-> style
                                      (utils/remove-special-keywords)
                                      (conversion/garden-units->css))]
                 (if (or contains-media-queries?
                         contains-feature-queries?
                         contains-manual-mode?
                         contains-modes-not-excluded?)
                   (merge return-map {:style (merge inline-style {:visibility "hidden"})})
                   (merge return-map {:style inline-style}))))
       :clj  return-map)))

(defn use-style! [style options style-created-handler]
  (state/check-stylefy-initialisation)
  (let [style-with-global-vendors (when-not (empty? style) (add-global-vendors style))
        style-hash (hashing/hash-style style-with-global-vendors)
        already-created #?(:cljs (dom/style-by-hash @dom/dom style-hash)
                           :clj false)] ; TODO Read from css-in-context?

    (when (and (seq style-with-global-vendors)
               (some? style-hash)
               (not already-created))
      (create-style!
        {:props style-with-global-vendors :hash style-hash}
        style-created-handler))

    (style-return-value style-with-global-vendors style-hash options)))

(defn use-sub-style! [style sub-style options style-created-handler]
  (let [resolved-sub-style (get (:stylefy.core/sub-styles style) sub-style)]
    (if resolved-sub-style
      (use-style! resolved-sub-style options style-created-handler)
      (log/warn (str "Sub-style " (pr-str sub-style) " not found in style: " (pr-str style))))))

(defn sub-style
  [style & sub-styles]
  (let [resolved-sub-style (reduce #(get-in %1 [:stylefy.core/sub-styles %2])
                                   style
                                   sub-styles)]

    (if resolved-sub-style
      resolved-sub-style
      (log/warn (str "Sub-style " (pr-str sub-styles) " not found in style: " (pr-str style))))))

#?(:cljs
   (defn prepare-styles
     ([styles]
      (prepare-styles styles {:request-dom-update-after-done? true}))
     ([styles {:keys [request-dom-update-after-done?] :as _options}]
      (let [styles (remove nil? styles)]

        (doseq [style styles]
          (use-style! style {} (fn [style] (dom/save-style @dom/dom style)))
          (when-let [sub-styles (vals (:stylefy.core/sub-styles style))]
            (prepare-styles sub-styles {:request-dom-update-after-done? false}))))

      (when request-dom-update-after-done?
        (dom/update-dom-if-needed @dom/dom)))))

(defn init-global-vendor-prefixes [options]
  (let [global-vendor-prefixes-options (:global-vendor-prefixes options)]
    (reset! global-vendor-prefixes
            {:stylefy.core/vendors (:stylefy.core/vendors global-vendor-prefixes-options)
             :stylefy.core/auto-prefix (:stylefy.core/auto-prefix global-vendor-prefixes-options)})))
