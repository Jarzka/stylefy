(ns stylefy.tests.core-test
  (:require [cljs.test :as test :refer-macros [deftest is]]
            [stylefy.core :as stylefy]))

(def style-box {:border "1px solid black"
                :background-color "#FFDDDD"
                :text-align :center
                :padding "5px"
                :width "150px"
                :height "150px"
                ::stylefy/sub-styles {:sub-box {:border "1px solid black"}}})

(deftest use-style
  (let [return (stylefy/use-style style-box)]
    (is (string? (:class return)))
    (is (= (:style style-box)))))

(deftest use-sub-style
  (let [return (stylefy/use-sub-style style-box :sub-box)]
    (is (string? (:class return)))
    (is (= (:style (get-in style-box [::stylefy/sub-styles :sub-box]))))))
