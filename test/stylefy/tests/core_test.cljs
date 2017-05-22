(ns stylefy.tests.core-test
  (:require [cljs.test :as test :refer-macros [deftest is]]
            [stylefy.core :as stylefy]
            [stylefy.impl.styles :as styles]
            [stylefy.impl.dom :as dom]))

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

(deftest init
  ;; A bit dummy test
  (let [update-styles-in-dom-called (atom false)]
    (with-redefs [;; No DOM manipulation here, just check that the function
                  ;; was called
                  dom/update-styles-in-dom! #(reset! update-styles-in-dom-called true)
                  ;; No .requestAnimationFrame in Phantom,
                  ;; use a simple function call instead
                  dom/request-dom-update #(dom/update-styles-in-dom!)]
      (stylefy/init)
      (is (true? @update-styles-in-dom-called)))))