(ns stylefy.tests.core-test
  (:require [cljs.test :as test :refer-macros [deftest is testing]]
            [stylefy.core :as stylefy]
            [stylefy.impl.styles :as styles]
            [stylefy.impl.dom :as dom]
            [garden.core :refer [css]]
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

  (testing "Use nil style"
    (let [return (stylefy/use-style nil)]
      (is (nil? return))))

  (testing "Use empty style"
    (let [return (stylefy/use-style {})]
      (is (nil? return))))

  (testing "Use garbage style: number"
    (try
      (stylefy/use-style 123)
      (is true "Error was not thrown")
      (is (nil? return))
      (catch js/Error e
        (is true "Error was thrown as expected"))))

  (testing "Use garbage style: string"
    (try
      (stylefy/use-style "foo")
      (is true "Error was not thrown")
      (is (nil? return))
      (catch js/Error e
        (is true "Error was thrown as expected"))))

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

  (testing "Use sub-style when the actual style map is nil"
    (let [return (stylefy/use-sub-style nil :foo)]
      (is (nil? return))))

  (testing "Use sub-style when the actual style map is empty"
    (let [return (stylefy/use-sub-style {} :foo)]
      (is (nil? return))))

  (testing "Use garbage style: number"
    (try
      (stylefy/use-sub-style style 123 :foo)
      (is true "Error was not thrown")
      (is (nil? return))
      (catch js/Error e
        (is true "Error was thrown as expected"))))

  (testing "Use garbage style: string"
    (try
      (stylefy/use-sub-style style "foo" :foo)
      (is true "Error was not thrown")
      (is (nil? return))
      (catch js/Error e
        (is true "Error was thrown as expected"))))

  (testing "Use sub-style with option: ::with-classes"
    (let [return (stylefy/use-sub-style style-box :sub-box
                                        {::stylefy/with-classes ["dummy"]})]
      (is (string? (:class return)))
      (is (str/includes? (:class return) "dummy"))
      (is (= (:style (get-in style-box [::stylefy/sub-styles :sub-box]))))))

  (testing "Use sub-style that does not exist: returns nil"
    (let [return (stylefy/use-sub-style style-box :foo)]
      (is (nil? return)))))

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

(deftest font-face
  (is (= (css {:pretty-print? false}
              (stylefy/font-face {:font-family "open_sans"
                                  :src "url('../fonts/OpenSans-Regular-webfont.woff') format('woff')"
                                  :font-weight "normal"
                                  :font-style "normal"}))
         "@font-face{font-family:open_sans;src:url('../fonts/OpenSans-Regular-webfont.woff') format('woff');font-weight:normal;font-style:normal}")))

(deftest keyframes
  (is (= (css {:pretty-print? false}
              (stylefy/keyframes "simple-animation"
                                 [:from
                                  {:background-color "red"}]
                                 [:to
                                  {:background-color "blue"}]))
         "@keyframes simple-animation{from{background-color:red}to{background-color:blue}}")))

(deftest class
  (is (= (stylefy/class "background-transition"
                        {:transition "background-color 1s;"})
         {::stylefy.impl.dom/class-name "background-transition"
          ::stylefy.impl.dom/class-properties {:transition "background-color 1s;"}})))

(deftest prepare-styles
  (testing "Good argument"
    (try
      (stylefy/prepare-styles [{:foo :bar} nil {:foo :bar}])
      (is true "Error was not thrown as expected")
      (catch js/Error e
        (is false "Error was thrown"))))

  (testing "Good empty argument"
    (try
      (stylefy/prepare-styles [])
      (is true "Error was not thrown as expected")
      (catch js/Error e
        (is false "Error was thrown"))))

  (testing "Bad argument: map"
    (try
      (stylefy/prepare-styles {:foo :bar})
      (is false "Expected an error to be thrown.")
      (catch js/Error e
        (is true "Error was thrown as expected")))))