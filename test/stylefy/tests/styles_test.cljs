(ns stylefy.tests.styles-test
  (:require [cljs.test :as test :refer-macros [deftest is testing]]
            [stylefy.core :as stylefy]
            [stylefy.impl.styles :as styles]
            [stylefy.impl.dom :as dom]
            [clojure.string :as str]))

(def style-box {:padding "25px"
                :background-color "#BBBBBB"
                :border "1px solid black"})

(deftest style->css
  (testing "Converting simple style definition to CSS"
    (is (= (dom/style->css {:props style-box :hash (styles/hash-style style-box)}
                           {:pretty-print? false})
           "._stylefy_878532438{padding:25px;background-color:#BBBBBB;border:1px solid black}"))))