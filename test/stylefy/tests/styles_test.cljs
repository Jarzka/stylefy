(ns stylefy.tests.styles-test
  (:require [cljs.test :as test :refer-macros [deftest is testing]]
            [stylefy.core :as stylefy]
            [garden.units :as units]
            [stylefy.impl.styles :as styles]
            [stylefy.impl.dom :as dom]
            [clojure.string :as str]))

(def style-box-expected-hash "_stylefy_-2018943876")

(def style-box {:border "1px solid black"
                :background-color "#FFDDDD"
                :text-align :center
                :padding "5px"
                :width "150px"
                :height "150px"
                ::stylefy/vendors ["webkit" "moz" "o"]
                ::stylefy/auto-prefix #{:border-radius}
                ::stylefy/sub-styles {:sub-box {:border "1px solid black"}}})

(def line-height 1.5)

(def h2-style {:font-size (units/rem 2.7)
               :line-height line-height
               :padding-bottom (units/rem 1.7)})

(def h3-style {:font-size (units/rem 2.4)
               :line-height line-height
               :padding-bottom (units/rem 1.4)})

(def h4-style {:font-size (units/rem 2.1)
               :line-height line-height
               :padding-bottom (units/rem 1)})

(def h4-style-clone {:font-size (units/rem 2.1)
                     :line-height line-height
                     :padding-bottom (units/rem 1)})

(deftest hash-style
  (is (= (styles/hash-style style-box) style-box-expected-hash)))

(deftest hash-style-with-custom-prefix
  (let [default-hash (styles/hash-style style-box)
        custom-prefix-hash (styles/hash-style (assoc style-box ::stylefy/class-prefix "hello-from-cljs-test"))]
    (is (= default-hash style-box-expected-hash))
    (is (= custom-prefix-hash "hello-from-cljs-test_-2018943876"))
    (is (not= default-hash style-box-expected-hash))))

(deftest hash-sub-styles
  ;; ::sub-styles is only a link to other styles, it
  ;; does not define the actual properties of this style.
  ;; Therefore, the hash should be the same even if the sub-styles does not exist.
  (is (= (styles/hash-style (dissoc style-box ::stylefy/sub-styles))
         style-box-expected-hash)))

(deftest hash-style-with-garden-units
  (is (= (styles/hash-style h2-style) "_stylefy_350674637"))
  (is (= (styles/hash-style h3-style) "_stylefy_2088259725"))
  (is (= (styles/hash-style h4-style) "_stylefy_1282487896"))

  ;; Different Garden units should make style maps structurally different
  (is (not= (styles/hash-style h2-style)
            (styles/hash-style h3-style)))
  (is (not= (styles/hash-style h3-style)
            (styles/hash-style h4-style)))
  (is (not= (styles/hash-style h2-style)
            (styles/hash-style h4-style)))

  (is (= (styles/hash-style h4-style)
         (styles/hash-style h4-style-clone))))