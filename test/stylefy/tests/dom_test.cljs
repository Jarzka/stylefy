(ns stylefy.tests.dom-test
  (:require [cljs.test :as test :refer-macros [deftest is testing]]
            [stylefy.core :as stylefy]
            [stylefy.impl.styles :as styles]
            [stylefy.impl.dom :as dom]
            [clojure.string :as str]))

(def simple-style {:padding "25px"
                :background-color "#BBBBBB"
                :border "1px solid black"})

(deftest simple-style->css
  (testing "Converting simple style definition to CSS"
    (is (= (dom/style->css {:props simple-style :hash (styles/hash-style simple-style)}
                           {:pretty-print? false})
           "._stylefy_878532438{padding:25px;background-color:#BBBBBB;border:1px solid black}"))))

(def clickable {:cursor :pointer})

(def autoprefix-style (merge {:border "1px solid black"
                              :border-radius "5px"
                            ::stylefy/vendors ["webkit" "moz" "o"]
                            ::stylefy/auto-prefix #{:border-radius}}
                             clickable))

(deftest autoprefixed-style->cssK
  (testing "Converting simple style definition to CSS"
    (is (= (dom/style->css {:props autoprefix-style :hash (styles/hash-style simple-style)}
                           {:pretty-print? false})
           "._stylefy_878532438{border:1px solid black;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-o-border-radius:5px;cursor:pointer}" ))))