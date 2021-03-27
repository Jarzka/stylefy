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

(defn init-multi-instance [{:keys [multi-instance] :as _options}]
  (let [base-node (:base-node multi-instance)
        instance-id (:instance-id multi-instance)]
    (assert (or (nil? instance-id)
                (string? instance-id))
            (str "instance-id must be string. Got: " (pr-str base-node instance-id)))
    (reset! stylefy-base-node base-node)
    (reset! stylefy-instance-id instance-id)))

(defprotocol Dom
  ; Init
  (init-cache [this options])

  ; Add styles
  (save-style [this style])
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

(defrecord UninitialisedDom []
  Dom
  ; TODO Store values to be used when the real DOM record has been initialised?
  ; Init
  (init-cache [this options] (warn-not-initialised "init-cache"))

  ; Add styles
  (save-style [this style] (warn-not-initialised "save-style"))
  (add-class [this class-as-css] (warn-not-initialised "add-class"))
  (add-tag [this tag-as-css] (warn-not-initialised "add-tag"))
  (add-font-face [this font-face-as-css] (warn-not-initialised "add-font-face"))
  (add-keyframes [this identifier keyframes-as-css] (warn-not-initialised "add-keyframes"))

  ; DOM management
  (update-dom [this] (warn-not-initialised "update-dom"))
  (update-dom-if-needed [this] (warn-not-initialised "update-dom-if-needed"))
  (style-in-dom? [this style-hash] (warn-not-initialised "style-in-dom?"))
  (style-by-hash [this style-hash] (warn-not-initialised "style-by-hash")))

(def dom (atom (->UninitialisedDom)))