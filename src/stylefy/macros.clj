(ns stylefy.macros
  (:require [garden.core :refer [css]]))

(defmacro style
  ([style-map] (style style-map {}))
  ([style-map options]
    (let [class-name (str "__stylefy__" (gensym))
         css-code (css style)]
     (with-open [writer (clojure.java.io/writer "resources/public/css/stylefy.css" :append true)]
       (.write writer css-code))

     `{:style ~style-map
       :class ~class-name})))