(ns stylefy.impl.state
  (:require [stylefy.impl.log :as log]))

(def stylefy-initialised? (atom false))

(def global-vendor-prefixes (atom {:stylefy.core/vendors #{}
                                   :stylefy.core/auto-prefix #{}}))

(defn check-stylefy-initialisation []
  (when-not @stylefy-initialised?
    (log/warn "use-style called before stylefy was initialised!")))