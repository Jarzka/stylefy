(ns stylefy.macros
  (:require [garden.core :refer [css]]))

(defmacro style
  [style-map options]
  (let [class-name (str "__stylefy__" (gensym))
        css-code (css [(keyword (str "." class-name)) style-map])]
    ;; FIXME Clear previous file, but when?
    (with-open [writer (clojure.java.io/writer "resources/public/css/stylefy.css" :append true)]
      (.write writer css-code))

    `(with-meta {:style ~style-map
                 :class ~class-name}
                {:css ~css-code})))