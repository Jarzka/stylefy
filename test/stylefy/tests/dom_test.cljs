(ns stylefy.tests.dom-test
  (:require [cljs.test :as test :refer-macros [deftest is testing]]
            [stylefy.core :as stylefy]
            [stylefy.impl.styles :as styles]
            [stylefy.impl.dom :as dom]
            [clojure.string :as str]))

(def style-box {:border "1px solid black"
                :background-color "#FFDDDD"
                :text-align :center
                :padding "5px"
                :width "150px"
                :height "150px"
                ::stylefy/sub-styles {:sub-box {:border "1px solid black"}}})

(deftest hash-style
  (is (= (styles/hash-style style-box) "_stylefy_1385371244"))
  ;; ::sub-styles is only a link to other styles, it
  ;; does not define the actual properties of this style.
  ;; Therefore, the hash should be the same even if the sub-styles does not exist.
  (is (= (styles/hash-style (dissoc style-box ::stylefy/sub-styles))
         "_stylefy_1385371244")))