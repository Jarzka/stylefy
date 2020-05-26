(ns stylefy.impl.log)

(defn warn [message]
  #?(:cljs (.warn js/console message)
     :clj  (println "[WARN] " message)))

(defn error [message]
  #?(:cljs (.error js/console message)
     :clj  (println "[ERROR] " message)))