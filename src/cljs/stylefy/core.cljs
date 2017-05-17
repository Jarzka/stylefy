(ns stylefy.core)

(defmacro defstyle [name style {:keys [inherit] :as options}]
  (with-open [writer (clojure.java.io/writer "stylefy.css") :append true]
    (.write writer content))

  `(def name {:style style
              :class (str "__unique__style" (gensym))}))