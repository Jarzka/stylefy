(ns stylefy.impl.dom
  (:require [dommy.core :as dommy]
            [garden.core :refer [css]]
            [cljs.core.async :as async] ; Mandatory for running tests
            [stylefy.impl.cache :as cache]
            [stylefy.impl.log :as log]
            [stylefy.impl.state :as state])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(def ^:private stylefy-node-id "#_stylefy-styles_")
(def ^:private stylefy-constant-node-id "#_stylefy-constant-styles_")

(def ^:private stylefy-base-node (atom nil)) ; Used when running multiple instances of stylefy on the same page
(def stylefy-instance-id (atom nil)) ; Used when running multiple instances of stylefy on the same page

(def uninitialised-styles (atom {:font-face []
                                 :keyframes []
                                 :tag []
                                 :class []}))

(defn init-multi-instance [{:keys [multi-instance] :as _options}]
  (let [base-node (:base-node multi-instance)
        instance-id (:instance-id multi-instance)]
    (assert (or (nil? instance-id)
                (string? instance-id))
            (str "instance-id must be string. Got: " (pr-str base-node instance-id)))
    (reset! stylefy-base-node base-node)
    (reset! stylefy-instance-id instance-id)))

(defn- get-stylefy-node [id base-node instance-id]
  (let [final-id (str id (when instance-id (str instance-id)))]
    (if (nil? base-node)
      (dommy/sel1 final-id)
      (dommy/sel1 base-node final-id))))

(defprotocol Dom
  ; Init
  (load-uninitialised-styles [this uninitialised-styles])
  (load-cache [this])

  ; Add styles
  (add-style [this style])
  (add-class [this class-as-css])
  (add-tag [this tag-as-css])
  (add-font-face [this font-face-as-css])
  (add-keyframes [this identifier keyframes-as-css])

  ; DOM management
  (update-dom [this])
  (update-dom-if-needed [this])
  (style-in-dom? [this style-hash])
  (style-by-hash [this style-hash]))

(defn warn-not-initialised [fn-name]
  (log/warn (str "stylefy function " fn-name " can not be called before stylefy is initialised!")))

(defn save-uninitialised-style [key style-as-css]
  (reset! uninitialised-styles
          (assoc @uninitialised-styles
            key
            (conj (key @uninitialised-styles) style-as-css))))

; Temporary "dummy" DOM handler is used until stylefy is initialised
; and this handler is replaced with a real DOM handler.
(defrecord UninitialisedDom []
  Dom
  ; Init
  (load-uninitialised-styles [this uninitialised-styles] (warn-not-initialised "load-uninitialised-styles"))
  (load-cache [this] (warn-not-initialised "load-cache"))

  ; Add styles
  (add-style [this style] (warn-not-initialised "save-style"))
  (add-class [this class-as-css] (save-uninitialised-style :class class-as-css))
  (add-tag [this tag-as-css] (save-uninitialised-style :tag tag-as-css))
  (add-font-face [this font-face-as-css] (save-uninitialised-style :font-face font-face-as-css))
  (add-keyframes [this identifier keyframes-as-css] (save-uninitialised-style :keyframes [identifier keyframes-as-css]))

  ; DOM management
  (update-dom [this] (warn-not-initialised "update-dom"))
  (update-dom-if-needed [this] (warn-not-initialised "update-dom-if-needed"))
  (style-in-dom? [this style-hash] (warn-not-initialised "style-in-dom?"))
  (style-by-hash [this style-hash] (warn-not-initialised "style-by-hash")))

(def dom (atom (->UninitialisedDom)))