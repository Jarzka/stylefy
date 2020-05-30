(ns stylefy.impl.state
  (:require [stylefy.impl.log :as log]))

(def stylefy-initialised? (atom false))

(defn check-stylefy-initialisation []
  (when-not @stylefy-initialised?
    (log/warn "use-style called before stylefy was initialised!")))