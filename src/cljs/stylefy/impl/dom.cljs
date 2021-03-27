(ns stylefy.impl.dom
  (:require [dommy.core :as dommy]
            [garden.core :refer [css]]
            [cljs.core.async :as async] ; Mandatory for running tests
            [stylefy.impl.cache :as cache]
            [stylefy.impl.log :as log]
            [stylefy.impl.state :as state])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(def dom (atom nil))

(def ^:private stylefy-node-id "#_stylefy-styles_")
(def ^:private stylefy-constant-node-id "#_stylefy-constant-styles_")
(def ^:private stylefy-base-node (atom nil)) ; Used when running multiple instances of stylefy on the same page
(def stylefy-instance-id (atom nil)) ; Used when running multiple instances of stylefy on the same page

(defprotocol Dom
  ; Init
  (init-cache [this options])
  (init-multi-instance [this options])

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