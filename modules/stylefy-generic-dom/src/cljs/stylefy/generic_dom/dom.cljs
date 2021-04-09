(ns stylefy.generic-dom.dom
  "Generic DOM updates styles always synchronously.
   This makes sure the DOM is always up-to-date, but it can be up to 20x slower
   compared to asynchronous updating. However, this solution works virtually everywhere.

   It is highly recommended to use caching with this generic DOM module."
  (:require [dommy.core :as dommy]
            [stylefy.impl.cache :as cache]
            [stylefy.impl.log :as log]
            [stylefy.impl.dom :as dom]))

(def styles-in-dom (atom {})) ; style hash -> atom with boolean value
(def styles-as-css (atom {})) ; style hash -> map containing keys: :css
(def keyframes-in-use (atom {})) ; keyframe identifier -> map containing keys: :css
(def font-faces-in-use (atom [])) ; Vector of maps containing keys: :css
(def custom-tags-in-use (atom [])) ; Vector of maps containing keys: :css
(def custom-classes-in-use (atom [])) ; Vector of maps containing keys: :css

(defn style-by-hash [style-hash]
  (when style-hash
    (get @styles-as-css style-hash)))

(defn- update-style-tags!
  [node-stylefy node-stylefy-constant]
  (let [styles-in-css (map (comp :css style-by-hash) (keys @styles-as-css))
        keyframes-in-css (map :css (vals @keyframes-in-use))
        font-faces-in-use (map :css @font-faces-in-use)
        custom-tags-in-use (map :css @custom-tags-in-use)
        custom-classes-in-use (map :css @custom-classes-in-use)
        new-style-constant-css (apply str (concat font-faces-in-use
                                                  keyframes-in-css
                                                  custom-tags-in-use
                                                  custom-classes-in-use))
        new-style-css (apply str styles-in-css)]
    ; Do not update this node contents if there are no new styles to be added.
    ; This is important, because even if setting the same contents should have no effect,
    ; it can cause font flickering in some browsers.
    (when-not (= (dommy/text node-stylefy-constant) new-style-constant-css)
      (dommy/set-text! node-stylefy-constant new-style-constant-css))

    (dommy/set-text! node-stylefy new-style-css)))

(defn- mark-all-styles-added-in-dom! []
  (doseq [style-hash (keys @styles-in-dom)]
    (reset! (get @styles-in-dom style-hash) true)))

(defn update-dom
  []
  (let [node-stylefy (dom/get-stylefy-node dom/stylefy-node-id @dom/stylefy-base-node @dom/stylefy-instance-id)
        node-stylefy-constant (dom/get-stylefy-node dom/stylefy-constant-node-id @dom/stylefy-base-node @dom/stylefy-instance-id)]
    (if (and node-stylefy node-stylefy-constant)
      (do (update-style-tags! node-stylefy node-stylefy-constant)

          (try
            (cache/cache-styles @styles-as-css @dom/stylefy-instance-id)
            (catch :default e
              (log/warn (str "Unable to cache styles, error: " e))
              (cache/clear-styles @dom/stylefy-instance-id)
              e))

          (mark-all-styles-added-in-dom!))
      (log/error "stylefy is unable to find the required <style> tags!"))))

(defn load-cache []
  (when-let [cached-styles (cache/read-cache-value
                             (cache/cache-key-styles @dom/stylefy-instance-id))]
    (reset! styles-as-css (or cached-styles {}))
    (reset! styles-in-dom (apply merge (map
                                         #(-> {% (atom false)})
                                         (keys cached-styles))))))

(defn add-style
  [{:keys [css hash] :as _style}]
  (assert css "Unable to save empty style!")
  (assert hash "Unable to save style without hash!")
  (let [style-to-be-saved {:css css}]
    (swap! styles-as-css assoc hash style-to-be-saved)
    (swap! styles-in-dom assoc hash (atom true))
    (update-dom)))

(defn style-in-dom? [style-hash]
  (boolean @(get @styles-in-dom style-hash)))

(defn add-keyframes [identifier keyframes-as-css]
  (swap! keyframes-in-use assoc identifier {:css keyframes-as-css})
  (update-dom)
  nil)

(defn add-font-face [font-faces-as-css]
  (swap! font-faces-in-use conj {:css font-faces-as-css})
  (update-dom)
  nil)

(defn add-tag [tag-css]
  (swap! custom-tags-in-use conj {:css tag-css})
  (update-dom)
  nil)

(defn add-class [class-as-css]
  (swap! custom-classes-in-use conj {:css class-as-css})
  (update-dom)
  nil)

(defn load-uninitialised-styles [uninitialised-styles]
  (doseq [tag (:tag uninitialised-styles)]
    (add-tag tag))

  (doseq [class (:class uninitialised-styles)]
    (add-class class))

  (doseq [[identifier keyframes] (:keyframes uninitialised-styles)]
    (add-keyframes identifier keyframes))

  (doseq [font-face (:font-face uninitialised-styles)]
    (add-font-face font-face))

  (doseq [style (:style uninitialised-styles)]
    (add-style style)))

(defrecord GenericDom []
  dom/Dom
  (load-uninitialised-styles [this uninitialised-styles] (load-uninitialised-styles uninitialised-styles))
  (load-cache [this] (load-cache))

  (add-style [this style] (add-style style))
  (add-class [this class-as-css] (add-class class-as-css))
  (add-tag [this tag-as-css] (add-tag tag-as-css))
  (add-font-face [this font-face-as-css] (add-font-face font-face-as-css))
  (add-keyframes [this identifier keyframes-as-css] (add-keyframes identifier keyframes-as-css))

  (update-dom [this] (update-dom))
  (update-dom-if-needed [this] (update-dom))
  (style-in-dom? [this style-hash] (style-in-dom? style-hash))
  (style-by-hash [this style-hash] (style-by-hash style-hash)))