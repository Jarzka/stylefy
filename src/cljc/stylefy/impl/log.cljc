(ns stylefy.impl.log
  (:require
    #?(:clj [clojure.tools.logging :as logging])))

(defn warn [message]
  #?(:cljs (.warn js/console message)
     :clj  (logging/warn message)))

(defn error [message]
  #?(:cljs (.error js/console message)
     :clj  (logging/error message)))