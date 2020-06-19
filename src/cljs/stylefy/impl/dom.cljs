(ns stylefy.impl.dom
  (:require [dommy.core :as dommy]
            [reagent.core :as r]
            [garden.core :refer [css]]
            [cljs.core.async :refer [<! timeout]]
            [stylefy.impl.cache :as cache]
            [garden.stylesheet :refer [at-media at-keyframes at-font-face]]
            [stylefy.impl.log :as log]
            [stylefy.impl.state :as state])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(def styles-in-dom (atom {})) ; style hash -> r/atom with boolean value
(def ^:private dom-update-requested? (atom false))

(def styles-as-css (atom {})) ; style hash -> map containing keys: ::css

(def keyframes-in-use (atom {})) ; keyframe identifier -> css
(def font-faces-in-use (atom [])) ; Vector of maps containing keys: ::css
(def custom-tags-in-use (atom [])) ; Vector of maps containing keys: ::css
(def custom-classes-in-use (atom [])) ; Vector of maps containing keys: ::css

(def ^:private stylefy-node-id "#_stylefy-styles_")
(def ^:private stylefy-constant-node-id "#_stylefy-constant-styles_")
(def ^:private stylefy-base-node (atom nil)) ; Used when running multiple instances of stylefy on the same page
(def stylefy-instance-id (atom nil)) ; Used when running multiple instances of stylefy on the same page

(defn style-by-hash [style-hash]
  (when style-hash
    (get @styles-as-css style-hash)))

(defn- update-style-tags!
  [node-stylefy node-stylefy-constant]
  (let [styles-in-css          (map (comp ::css style-by-hash) (keys @styles-as-css))
        keyframes-in-css       (vals @keyframes-in-use)
        font-faces-in-use      (map ::css @font-faces-in-use)
        custom-tags-in-use     (map ::css @custom-tags-in-use)
        custom-classes-in-use  (map ::css @custom-classes-in-use)
        new-style-constant-css (apply str (concat font-faces-in-use
                                                  keyframes-in-css
                                                  custom-tags-in-use
                                                  custom-classes-in-use))
        new-style-css          (apply str styles-in-css)]
    ; Do not update this node contents if there are no new styles to be added.
    ; This is important, because even if setting the same contents should have no effect,
    ; it can cause font flickering in some browsers.
    (when-not (= (dommy/text node-stylefy-constant) new-style-constant-css)
      (dommy/set-text! node-stylefy-constant new-style-constant-css))

    (dommy/set-text! node-stylefy new-style-css)))

(defn- mark-all-styles-added-in-dom! []
  (doseq [style-hash (keys @styles-in-dom)]
    (reset! (get @styles-in-dom style-hash) true)))

(defn- get-stylefy-node [id base-node instance-id]
  (let [final-id (str id (when instance-id (str instance-id)))]
    (if (nil? base-node)
      (dommy/sel1 final-id)
      (dommy/sel1 base-node final-id))))

(defn update-dom
  []
  (let [node-stylefy (get-stylefy-node stylefy-node-id @stylefy-base-node @stylefy-instance-id)
        node-stylefy-constant (get-stylefy-node stylefy-constant-node-id @stylefy-base-node @stylefy-instance-id)]
    (if (and node-stylefy node-stylefy-constant)
      (do (update-style-tags! node-stylefy node-stylefy-constant)
          (reset! dom-update-requested? false)

          (try
            (cache/cache-styles @styles-as-css @stylefy-instance-id)
            (catch :default e
              (log/warn (str "Unable to cache styles, error: " e))
              (cache/clear-styles @stylefy-instance-id)
              e))

          (mark-all-styles-added-in-dom!))
      (log/error "stylefy is unable to find the required <style> tags!"))))

(defn- update-dom-if-requested
  []
  (when @dom-update-requested?
    (update-dom)))

(defn- request-asynchronous-dom-update
  []
  (when @state/stylefy-initialised?
    (when-not @dom-update-requested?
      (reset! dom-update-requested? true)
      (go
        (update-dom))
      nil)))

(defn init-multi-instance [{:keys [multi-instance] :as options}]
  (let [base-node (:base-node multi-instance)
        instance-id (:instance-id multi-instance)]
    (assert (or (nil? instance-id)
                (string? instance-id))
            (str "instance-id must be string. Got: " (pr-str base-node instance-id)))
    (reset! stylefy-base-node base-node)
    (reset! stylefy-instance-id instance-id)))

(defn init-cache [options]
  (when (not= (:use-caching? options) false)
    (cache/use-caching! (:cache-options options) @stylefy-instance-id)

    (when-let [cached-styles (cache/read-cache-value
                               (cache/cache-key-styles @stylefy-instance-id))]
      (reset! styles-as-css (or cached-styles {}))
      (reset! styles-in-dom (apply merge (map
                                           ; Note: r/atom, to be usable in component render methods.
                                           #(-> {% (r/atom false)})
                                           (keys cached-styles)))))))

(defn save-style!
  "Stores the style in an atom. The style is going to be added into the DOM soon."
  [{:keys [css hash] :as style}]
  (assert css "Unable to save empty style!")
  (assert hash "Unable to save style without hash!")
  (let [style-to-be-saved {::css css}]
    (swap! styles-as-css assoc hash style-to-be-saved)
    (swap! styles-in-dom assoc hash (r/atom false)) ; Note: r/atom, to be usable in component render methods.
    (request-asynchronous-dom-update)))

(defn style-in-dom? [style-hash]
  ; Note: This function does Reagent atom dereference.
  ; If called inside a component render method (via use-style), it causes the component to re-render
  ; itself if the "CSS in DOM" state of this specific style hash is changed.
  (boolean @(get @styles-in-dom style-hash)))

(defn add-keyframes [identifier garden-syntax]
  (swap! keyframes-in-use assoc identifier (css garden-syntax))
  (request-asynchronous-dom-update)
  nil)

(defn add-font-face [garden-syntax]
  (swap! font-faces-in-use conj {::css (css garden-syntax)})
  (request-asynchronous-dom-update)
  nil)

(defn add-tag [tag-css]
  (swap! custom-tags-in-use conj {::css tag-css})
  (request-asynchronous-dom-update)
  nil)

(defn add-class [class-as-css]
  (swap! custom-classes-in-use conj {::css class-as-css})
  (request-asynchronous-dom-update)
  nil)
