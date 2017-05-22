(ns stylefy.tests.core-test
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

(deftest use-style
  (testing "Use style"
    (let [return (stylefy/use-style style-box)]
      (is (string? (:class return)))
      (is (= (:style style-box)))))

  (testing "Use style with option: ::with-classes"
    (let [return (stylefy/use-style style-box
                                    {::stylefy/with-classes ["dummy"]})]
      (is (string? (:class return)))
      (is (str/includes? (:class return) "dummy"))
      (is (= (:style style-box))))))

(deftest use-sub-style
  (testing "Use sub-style"
    (let [return (stylefy/use-sub-style style-box :sub-box)]
      (is (string? (:class return)))
      (is (= (:style (get-in style-box [::stylefy/sub-styles :sub-box]))))))

  (testing "Use sub-style with option: ::with-classes"
    (let [return (stylefy/use-sub-style style-box :sub-box
                                        {::stylefy/with-classes ["dummy"]})]
      (is (string? (:class return)))
      (is (str/includes? (:class return) "dummy"))
      (is (= (:style (get-in style-box [::stylefy/sub-styles :sub-box])))))))

(deftest init
  (let [update-styles-in-dom-called (atom false)]
    (with-redefs [;; No DOM manipulation here, just check that the function
                  ;; was called
                  dom/update-styles-in-dom! #(reset! update-styles-in-dom-called true)
                  ;; No .requestAnimationFrame in Phantom,
                  ;; use a simple function call instead
                  dom/request-dom-update #(dom/update-styles-in-dom!)]
      (stylefy/init)
      (is (true? @update-styles-in-dom-called)))))