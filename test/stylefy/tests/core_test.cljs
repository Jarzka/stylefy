(ns stylefy.tests.core-test
  (:require [cljs.test :as test :refer-macros [deftest is]]
            [stylefy.core :as stylefy]))

(def style-box {:border "1px solid black"
                :background-color "#FFDDDD"
                :text-align :center
                :padding "5px"
                :width "150px"
                :height "150px"})

(deftest use-style
  (let [use-style-response (stylefy/use-style style-box)]
    (is (string? (:class use-style-response)))
    (is (= (:style style-box)))))
