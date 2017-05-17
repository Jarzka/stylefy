(ns stylefy.macros
  (:require [garden.core :refer [css]]))

(defmacro defstyle
  ([name style] (defstyle name style {}))
  ([name style options]
  (let [class-name (str "__stylefy__" (gensym))
        css-code (css style)]
    (with-open [writer (clojure.java.io/writer "stylefy.css") :append true]
      (.write writer css-code))

    `(def name {:style style
                :class class-name}))))