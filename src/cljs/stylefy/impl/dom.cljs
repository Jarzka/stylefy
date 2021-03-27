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

(defn warn-not-initialised []
  (log/warn "stylefy functions called before it was initialised!"))

(defrecord UninitialisedDom []
  Dom
  ; TODO Store values to be used when the real DOM record has been initialised?
  (init-cache [this options] (warn-not-initialised))
  (save-style [this style] (warn-not-initialised))
  (add-class [this class-as-css] (warn-not-initialised))
  (add-tag [this tag-as-css] (warn-not-initialised))
  (add-font-face [this font-face-as-css] (warn-not-initialised))
  (add-keyframes [this identifier keyframes-as-css] (warn-not-initialised))
  (update-dom [this] (warn-not-initialised))
  (update-dom-if-needed [this] (warn-not-initialised))
  (style-in-dom? [this style-hash] (warn-not-initialised))
  (style-by-hash [this style-hash] (warn-not-initialised)))

(def dom (atom (->UninitialisedDom)))