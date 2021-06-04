(ns stylefy.impl.conversion
  (:require
    [clojure.walk :refer [walk]]
    [garden.core :refer [css]]
    [stylefy.impl.utils :as utils]
    [garden.stylesheet :refer [at-media]]
    [stylefy.impl.log :as log]
    [clojure.string :as str]
    [garden.compiler :as compiler]))

(defn garden-units->css
  "Checks all values in the map and converts all Garden units to CSS."
  [props]
  (reduce
    (fn [result next-key]
      (let [value (next-key props)]
        (if (utils/is-garden-value? value)
          (assoc result next-key (compiler/render-css value))
          result)))
    props
    (keys props)))

(defn- convert-stylefy-vendors-to-garden [props]
  (when-let [vendors (:stylefy.core/vendors props)]
    {:vendors vendors
     :auto-prefix (:stylefy.core/auto-prefix props)}))

(defn- convert-stylefy-modes-to-garden [props]
  (let [modes (:stylefy.core/mode props)
        handle-mode (fn [mode-name mode-props]
                      (assert (or (keyword? mode-name)
                                  (and (string? mode-name)
                                       (str/starts-with? mode-name ":")))
                              (str "Mode must be specified as a keyword or string beginning with a colon, got: " (pr-str mode-name)))
                      (when (and (string? mode-name)
                                 (> (count (str/split mode-name " ")) 1))
                        (log/warn (str "Incorrect mode detected, should not contain spaces. Mode was: " (pr-str mode-name))))
                      [(keyword (str "&" mode-name)) mode-props])]
    (cond
      (map? modes) (mapv #(handle-mode % (get modes %)) (keys modes))
      (vector? modes) (mapv #(handle-mode (first %) (second %)) modes))))

(defn class-selector [hash]
  (keyword (str "." hash)))

(defn- convert-base-style-into-class
  "Converts Clojure style map into CSS class."
  [{:keys [props hash custom-selector] :as _style} options]
  (let [css-props (utils/remove-special-keywords props)
        css-selector (or custom-selector (class-selector hash))
        garden-class-definition [css-selector css-props]
        garden-pseudo-classes (convert-stylefy-modes-to-garden props)
        garden-vendors (convert-stylefy-vendors-to-garden props)
        garden-options (or (merge options garden-vendors) {})
        css-class (css garden-options (into garden-class-definition
                                            garden-pseudo-classes))]
    css-class))

(defn prepare-manual-style-map [style-map]
  (walk #(if (map? %)
           (utils/remove-special-keywords %)
           %)
        identity
        style-map))

(defn- handle-scoped-style-map [props scope]
  (let [scoped-style [scope (utils/remove-special-keywords props)]
        garden-pseudo-classes (convert-stylefy-modes-to-garden props)
        stylefy-manual-styles (:stylefy.core/manual props)]
    (apply conj scoped-style
           (concat
             garden-pseudo-classes
             (mapv prepare-manual-style-map stylefy-manual-styles)))))

(defn- find-and-handle-scoped-style-map [item scope]
  (cond
    (map? item)
    (handle-scoped-style-map item scope)

    (vector? item)
    (mapv #(find-and-handle-scoped-style-map % scope) item)

    :else item))

(defn- convert-scoped-styles
  "Converts stylefy/scope definition into CSS class.

  stylefy features supported in media query style map:
  - modes
  - manual mode
  - vendor prefixes (must be defined in the parent style map)"
  [{:keys [props hash custom-selector] :as _style} options]
  (when-let [stylefy-scoped-styles (:stylefy.core/scope props)]
    (let [css-parent-selector (or custom-selector (class-selector hash))
          css-scoped-styles (map
                              (fn [scoping-rule]
                                (let [selector-and-props (find-and-handle-scoped-style-map scoping-rule css-parent-selector)
                                      garden-vendors (convert-stylefy-vendors-to-garden props)
                                      garden-options (or (merge options garden-vendors) {})
                                      css-selector (css garden-options selector-and-props)]
                                  css-selector))
                              stylefy-scoped-styles)]
      (apply str css-scoped-styles))))

(defn- convert-media-queries
  "Converts stylefy/media definition into CSS media query.

  stylefy features supported in media query style map:
  - modes
  - vendor prefixes

  stylefy/manual is not supported here since one can use it to create
  media queries."
  ; TODO Media queries could also be defined in a vector (just like modes can be defined as a map or vector)
  [{:keys [props hash custom-selector] :as _style} options]
  (when-let [stylefy-media-queries (:stylefy.core/media props)]
    (let [css-selector (or custom-selector (class-selector hash))
          css-media-queries (map
                              (fn [media-query]
                                (let [media-query-props (get stylefy-media-queries media-query)
                                      media-query-css-props (utils/remove-special-keywords media-query-props)
                                      scoped-styles-garden (map
                                                             (fn [scoping-rule]
                                                               (find-and-handle-scoped-style-map scoping-rule css-selector))
                                                             (:stylefy.core/scope media-query-props))
                                      garden-class-definition [css-selector media-query-css-props]
                                      garden-pseudo-classes (convert-stylefy-modes-to-garden media-query-props)
                                      garden-vendors (convert-stylefy-vendors-to-garden media-query-props)
                                      garden-options (or (merge options garden-vendors) {})]
                                  (css garden-options [(at-media media-query (into garden-class-definition
                                                                                   garden-pseudo-classes))
                                                       (at-media media-query scoped-styles-garden)])))
                              (keys stylefy-media-queries))]
      (apply str css-media-queries))))

(defn- convert-feature-queries
  "Converts stylefy/supports definition into CSS feature query.

  stylefy features supported in feature query style map:
  - modes
  - media queries
  - vendor prefixes"
  ; TODO Manual mode and scoping should also be supported here
  [{:keys [props hash custom-selector] :as _style} options]
  (when-let [stylefy-supports (:stylefy.core/supports props)]
    (let [css-selector (or custom-selector (class-selector hash))
          css-supports (map
                         (fn [supports-selector]
                           (let [supports-props (get stylefy-supports supports-selector)
                                 supports-css-props (utils/remove-special-keywords supports-props)
                                 garden-class-definition [css-selector supports-css-props]
                                 garden-pseudo-classes (convert-stylefy-modes-to-garden supports-props)
                                 garden-vendors (convert-stylefy-vendors-to-garden supports-props)
                                 garden-options (or (merge options garden-vendors) {})
                                 css-media-queries-inside-supports (convert-media-queries
                                                                     {:props supports-props
                                                                      :hash hash
                                                                      :custom-selector custom-selector}
                                                                     options)]
                             (str "@supports (" supports-selector ") {"
                                  (css garden-options (into garden-class-definition
                                                            garden-pseudo-classes))
                                  css-media-queries-inside-supports
                                  "}")))
                         (keys stylefy-supports))]
      (apply str css-supports))))

(defn- convert-manual-styles
  "Converts stylefy/manual definition into CSS.

   stylefy's special keywords are not supported here.

   Manually written selectors can contain media queries, those will be correctly nested by Garden
   (media query will be defined first in CSS)."
  [{:keys [props hash custom-selector] :as _style} options]
  (when-let [stylefy-manual-styles (:stylefy.core/manual props)]
    (let [css-parent-selector (or custom-selector (class-selector hash))
          css-manual-styles (map
                              (fn [manual-style]
                                (let [selector-and-props (into [css-parent-selector] [(prepare-manual-style-map manual-style)])
                                      css-class (css options selector-and-props)]
                                  css-class))
                              stylefy-manual-styles)]
      (apply str css-manual-styles))))

(defn style->css
  "Converts the given style to CSS. Options are sent directly to Garden"
  ([style] (style->css style {}))
  ([style options]
   (let [css-class (convert-base-style-into-class style options)
         css-media-queries (convert-media-queries style options)
         css-feature-queries (convert-feature-queries style options)
         css-scoped-styles (convert-scoped-styles style options)
         css-manual-styles (convert-manual-styles style options)]
     ; Order is important so that more specific styles properly overwrite the previous ones.
     (str
       ; Base style definition comes first:
       css-class
       ; Scoped rules:
       css-scoped-styles
       ; Media queries themselves have no specificity, but they appear after class and scope so that
       ; these rules can be overwritten with the same selectors.
       css-media-queries
       ; Feature queries:
       css-feature-queries
       ; Manual mode appears last. It is usually used to have some specific rules
       ; and can also contain manually written media queries.
       css-manual-styles))))
