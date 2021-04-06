(ns stylefy.tests.style-hash-test
  (:require [cljs.test :as test :refer-macros [deftest is testing]]
            [stylefy.core :as stylefy]
            [garden.units :as units]
            [stylefy.impl.hashing :as hashing]
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

(def h4-style-clone-with-different-key-order {:line-height line-height
                                              :font-size (units/rem 2.1)
                                              :padding-bottom (units/rem 1)})

(def h4-style-clone-with-different-garden-values-and-key-order {:line-height line-height
                                                                :font-size (units/rem 2.2)
                                                                :padding-bottom (units/rem 1.1)})

(deftest hash-style
  (is (= (hashing/hash-style style-box) style-box-expected-hash)))

(deftest hash-style-with-custom-prefix
  ; Default case: custom class prefixes are disabled globally by default
  (let [default-hash (hashing/hash-style style-box)
        custom-prefix-hash (hashing/hash-style (assoc style-box ::stylefy/class-prefix "hello-from-cljs-test"))]
    (is (= default-hash style-box-expected-hash))
    (is (= custom-prefix-hash "_stylefy_-2018943876"))
    (is (= default-hash style-box-expected-hash)))

  ; Custom class prefixes are enabled globally
  (with-redefs [hashing/use-custom-class-prefix? (atom true)]
    (let [default-hash (hashing/hash-style style-box)
          custom-prefix-hash (hashing/hash-style (assoc style-box ::stylefy/class-prefix "hello-from-cljs-test"))]

      (is (= default-hash style-box-expected-hash))
      (is (not= default-hash custom-prefix-hash))))

  ; Custom class prefix is a keyword
  (with-redefs [hashing/use-custom-class-prefix? (atom true)]
    (let [default-hash (hashing/hash-style style-box)
          custom-prefix-hash (hashing/hash-style (assoc style-box ::stylefy/class-prefix :hello-from-cljs-test))]

      (is (= default-hash style-box-expected-hash))
      (is (not= default-hash custom-prefix-hash))))

  ; Custom class prefix is nil -> use default
  (with-redefs [hashing/use-custom-class-prefix? (atom true)]
    (let [default-hash (hashing/hash-style style-box)
          custom-prefix-hash (hashing/hash-style (assoc style-box ::stylefy/class-prefix nil))]
      (is (= default-hash style-box-expected-hash))
      (is (= custom-prefix-hash "_stylefy_-2018943876"))
      (is (= default-hash style-box-expected-hash))))

  ; Custom class prefix is something else
  (with-redefs [hashing/use-custom-class-prefix? (atom true)]
    (try
      (hashing/hash-style (assoc style-box ::stylefy/class-prefix {}))
      (is false "Error was not thrown")
      (catch js/Error e
        (is true "Error was thrown as expected")))))

(deftest hash-sub-styles
  ; ::sub-styles is only a link to other styles, it
  ; does not define the actual properties of this style.
  ; Therefore, the hash should be the same even if the sub-styles does not exist.
  (is (= (hashing/hash-style (dissoc style-box ::stylefy/sub-styles))
         style-box-expected-hash)))

(deftest hash-style-with-garden-units
  ; Hashed garden units should have the same hash as manually written units
  (is (= (hashing/hash-style {:width "100px"})
         (hashing/hash-style {:width (units/px 100)})))
  (is (= (hashing/hash-style {:width "100rem"})
         (hashing/hash-style {:width (units/rem 100)})))

  (is (= (hashing/hash-style h2-style) "_stylefy_154513737"))
  (is (= (hashing/hash-style h3-style) "_stylefy_-1528553558"))
  (is (= (hashing/hash-style h4-style) "_stylefy_-372704016"))

  ; Different Garden units should make style maps structurally different
  (is (not= (hashing/hash-style h2-style)
            (hashing/hash-style h3-style)))
  (is (not= (hashing/hash-style h3-style)
            (hashing/hash-style h4-style)))
  (is (not= (hashing/hash-style h2-style)
            (hashing/hash-style h4-style)))
  (is (not= (hashing/hash-style h4-style)
            (hashing/hash-style h4-style-clone-with-different-garden-values-and-key-order)))
  ; Key order does not matter
  (is (= (hashing/hash-style h4-style)
         (hashing/hash-style h4-style-clone-with-different-key-order))))
