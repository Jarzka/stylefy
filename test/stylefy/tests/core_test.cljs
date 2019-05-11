(ns stylefy.tests.core-test
  (:require [cljs.test :as test :refer-macros [deftest is testing]]
            [stylefy.core :as stylefy]
            [stylefy.impl.styles :as styles]
            [stylefy.impl.dom :as dom]
            [garden.core :refer [css]]
            [garden.color :as color]
            [garden.units :as units]
            [clojure.string :as str]))

(def css-props {:border "1px solid black"
                :background-color "#FFDDDD"
                :text-align :center
                :padding "5px"
                :width "150px"
                :height "150px"})

(def style-box (merge css-props
                      {:stylefy.core/mode {:hover {:background-color "red"}}
                       :stylefy.core/vendors #{"moz"}
                       :stylefy.core/auto-prefix #{:border-radius}
                       :stylefy.core/sub-styles {:sub-box {:border "1px solid black"}}}))

(deftest use-style
  (testing "Use style"
    (let [return (stylefy/use-style style-box)]
      (is (string? (:class return)))
      ;; This is the first time we use this style map -> inline style shoule be returned
      (is (map? (:style return)))
      ;; Inline style does not contain namespaced keywords:
      (is (= (:style return) css-props))))

  (testing "Use style with :hover mode"
    (let [return (stylefy/use-style (merge style-box
                                           {:stylefy.core/mode {:hover {:background-color "blue"}}}))]
      (is (string? (:class return)))
      (is (map? (:style return)))
      ;; Inline style does not contain namespaced keywords and it's not hidden.
      (is (= (:style return) css-props))))

  (testing "Use style with :foo mode"
    (let [return (stylefy/use-style (merge style-box
                                           {:stylefy.core/mode {:foo {:background-color "blue"}}}))]
      (is (string? (:class return)))
      (is (map? (:style return)))
      ;; Inline style does not contain namespaced keywords and it IS hidden, because only
      ;; certain modes can be accepted without hiding the component
      (is (= (:style return) (assoc css-props :visibility "hidden")))))

  (testing "Use style with media query"
    (let [return (stylefy/use-style (merge style-box
                                           {:stylefy.core/media {{:max-width "400px"}
                                                                 {:border "1px solid red"}}}))]
      (is (string? (:class return)))
      (is (map? (:style return)))
      ;; Inline style hides the component (media queries do not work as inline style)
      (is (= (:style return) (assoc css-props :visibility "hidden")))))

  (testing "Use style with manual mode"
    (let [return (stylefy/use-style (merge style-box
                                           {:stylefy.core/manual [[:&:hover [:.innerbox
                                                                             {:background-color "#999999"}]]]}))]
      (is (string? (:class return)))
      (is (map? (:style return)))
      ;; Inline style hides the component (manual mode does not work as inline style)
      (is (= (:style return) (assoc css-props :visibility "hidden")))))

  (testing "Use style with feature query"
    (let [return (stylefy/use-style (merge style-box
                                           {:stylefy.core/supports {"display: grid"
                                                                    {:border "1px solid red"}}}))]
      (is (string? (:class return)))
      (is (map? (:style return)))
      ;; Inline style hides the component (feature queries do not work as inline style)
      (is (= (:style return) (assoc css-props :visibility "hidden")))))

  (testing "Use nil style"
    (let [return (stylefy/use-style nil)]
      (is (nil? return))))

  (testing "Use nil style with HTML attributes"
    (let [return (stylefy/use-style nil {:src "image.jpg" :class "myclass"})]
      (is (= return {:src "image.jpg" :class "myclass"}))))

  (testing "Use empty style"
    (let [return (stylefy/use-style {})]
      (is (nil? return))))

  (testing "Use empty style with HTML attributes"
    (let [return (stylefy/use-style {} {:src "image.jpg" :class "myclass"})]
      (is (= return {:src "image.jpg" :class "myclass"}))))

  (testing "Use garbage style: number"
    (try
      (stylefy/use-style 123)
      (is false "Error was not thrown")
      (catch js/Error e
        (is true "Error was thrown as expected"))))

  (testing "Use garbage style: string"
    (try
      (stylefy/use-style "foo")
      (is false "Error was not thrown")
      (catch js/Error e
        (is true "Error was thrown as expected"))))

  (testing "Use style with option: ::with-classes"
    (let [return (stylefy/use-style style-box
                                    {::stylefy/with-classes ["dummy"]})]
      (is (string? (:class return)))
      (is (str/includes? (:class return) "dummy"))))

  (testing "Use style with HTML attributes and ::with-classes"
    (let [attr-src "image.jpg"
          attr-alt "fail"
          attr-class "myclass"
          return (stylefy/use-style style-box
                                    {:src attr-src
                                     :alt attr-alt
                                     :class attr-class
                                     ::stylefy/with-classes ["dummy"]})]
      (is (= (:src return) attr-src))
      (is (= (:alt return) attr-alt))
      (is (string? (:class return)))
      (is (str/includes? (:class return) "_stylefy_")) ;; Prefix for auto-generated class
      (is (str/includes? (:class return) "myclass"))
      (is (str/includes? (:class return) "dummy"))))

  (testing "Use style with :class vector"
    (let [attr-src "image.jpg"
          attr-alt "fail"
          attr-class ["myclass" "myclass2"]
          return (stylefy/use-style style-box
                                    {:src attr-src
                                     :alt attr-alt
                                     :class attr-class
                                     ::stylefy/with-classes ["dummy"]})]
      (is (= (:src return) attr-src))
      (is (= (:alt return) attr-alt))
      (is (string? (:class return)))
      (is (str/includes? (:class return) "_stylefy_")) ;; Prefix for auto-generated class
      (is (str/includes? (:class return) "myclass myclass2"))
      (is (str/includes? (:class return) "dummy"))))

  (testing "Use style with additional class names attached to it"
    (let [attr-src "image.jpg"
          attr-alt "fail"
          return (stylefy/use-style (assoc style-box
                                      ::stylefy/with-classes ["dummy"])
                                    {:src attr-src
                                     :alt attr-alt})]
      (is (= (:src return) attr-src))
      (is (= (:alt return) attr-alt))
      (is (string? (:class return)))
      (is (str/includes? (:class return) "_stylefy_")) ;; Prefix for auto-generated class
      (is (str/includes? (:class return) "dummy"))))

  (testing "Use style with additional class names attached to it, along with :class"
    (let [attr-src "image.jpg"
          attr-alt "fail"
          return (stylefy/use-style (assoc style-box
                                      ::stylefy/with-classes ["dummy"])
                                    {:src attr-src
                                     :alt attr-alt
                                     ::stylefy/with-classes ["anotherclass"]
                                     :class "myclass"})]
      (is (= (:src return) attr-src))
      (is (= (:alt return) attr-alt))
      (is (string? (:class return)))
      (is (str/includes? (:class return) "_stylefy_")) ;; Prefix for auto-generated class
      (is (str/includes? (:class return) "dummy"))
      (is (str/includes? (:class return) "myclass"))
      (is (str/includes? (:class return) "anotherclass"))))

  (testing "Use style with additional HTML attribute :style definition"
    (try
      (stylefy/use-style {:color "blue"} {:style {:color "red"}}) ;; No point here!
      (is false "Error was not thrown")
      (catch js/Error e
        (is true "Error was thrown as expected")))))

(deftest garden-types
  (testing "Garden units are converted correctly"
    (let [return (stylefy/use-style {:width (units/px 50)})]
      (is (string? (:class return)))
      (is (map? (:style return)))
      (is (= (:style return)
             {:width "50px"}))))

  (testing "Garden colors are converted correctly"
    (let [return (stylefy/use-style {:color (color/hsl 123 1 2)})]
      (is (string? (:class return)))
      (is (map? (:style return)))
      (is (= (:style return)
             {:color "#050505"})))))

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
      (stylefy/use-sub-style {} 123 :foo)
      (is false "Error was not thrown")
      (catch js/Error e
        (is true "Error was thrown as expected"))))

  (testing "Use garbage style: string"
    (try
      (stylefy/use-sub-style {} "foo" :foo)
      (is false "Error was not thrown")
      (catch js/Error e
        (is true "Error was thrown as expected"))))

  (testing "Use sub-style with option: ::with-classes"
    (let [return (stylefy/use-sub-style style-box :sub-box
                                        {::stylefy/with-classes ["dummy"]})]
      (is (string? (:class return)))
      (is (str/includes? (:class return) "dummy"))
      (is (= (:style (get-in style-box [::stylefy/sub-styles :sub-box]))))))

  (testing "Use sub-style with additional HTML attribute :style definition"
    (try
      (stylefy/use-sub-style style-box :sub-box {:style {:color "red"}})
      (is false "Error was not thrown")
      (catch js/Error e
        (is true "Error was thrown as expected"))))

  (testing "Use sub-style with HTML attributes and ::with-classes"
    (let [attr-src "image.jpg"
          attr-alt "fail"
          attr-class "myclass"
          return (stylefy/use-sub-style style-box :sub-box
                                        {:src attr-src
                                         :alt attr-alt
                                         :class attr-class
                                         ::stylefy/with-classes ["dummy"]})]
      (is (= (:src return) attr-src))
      (is (= (:alt return) attr-alt))
      (is (string? (:class return)))
      (is (str/includes? (:class return) "_stylefy_")) ;; Prefix for auto-generated class
      (is (str/includes? (:class return) "myclass"))
      (is (str/includes? (:class return) "dummy"))))

  (testing "Use sub-style with :class vector"
    (let [attr-src "image.jpg"
          attr-alt "fail"
          attr-class ["myclass" "myclass2"]
          return (stylefy/use-sub-style style-box :sub-box
                                        {:src attr-src
                                         :alt attr-alt
                                         :class attr-class
                                         ::stylefy/with-classes ["dummy"]})]
      (is (= (:src return) attr-src))
      (is (= (:alt return) attr-alt))
      (is (string? (:class return)))
      (is (str/includes? (:class return) "_stylefy_")) ;; Prefix for auto-generated class
      (is (str/includes? (:class return) "myclass myclass2"))
      (is (str/includes? (:class return) "dummy"))))

  (testing "Use sub-style that does not exist: returns nil"
    (let [return (stylefy/use-sub-style style-box :foo)]
      (is (nil? return)))))

(deftest sub-style
  (testing "Get sub-style"
    (let [style-map {::stylefy/sub-styles
                     {:button
                      {:border "1px solid black"
                       ::stylefy/sub-styles
                       {:icon
                        {:background-color "red"}}}}}]
      (is (= (stylefy/sub-style style-map :button)
             {:border "1px solid black"
              ::stylefy/sub-styles
              {:icon
               {:background-color "red"}}}))
      (is (= (stylefy/sub-style style-map :button :icon)
             {:background-color "red"}))))

  (testing "sub-style when the actual style map is nil"
    (let [return (stylefy/sub-style nil :button :icon)]
      (is (nil? return))))

  (testing "sub-style when the actual style map is empty"
    (let [return (stylefy/sub-style {} :button :icon)]
      (is (nil? return))))

  (testing "sub-style with bad substyle argument"
    (try
      (stylefy/sub-style {} :foo "bar")
      (is false "Error was not thrown")
      (catch js/Error e
        (is true "Error was thrown as expected")))))

(deftest dom-update-is-requested
  (let [dom-update-requested? (atom false)]
    (with-redefs [dom/request-asynchronous-dom-update #(reset! dom-update-requested? true)]
      (is (nil? (stylefy/init)))
      (stylefy/use-style {:color "red"})
      (is (true? @dom-update-requested?)))))

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

(deftest update-keyframes
  (reset! stylefy.impl.dom/keyframes-in-use {})
  (stylefy/keyframes "animation-a"
                     [:from
                      {:background-color "red"}]
                     [:to
                      {:background-color "blue"}])

  (stylefy/keyframes "animation-a"
                     [:from
                      {:background-color "blue"}]
                     [:to
                      {:background-color "red"}])

  (stylefy/keyframes "animation-b"
                     [:from
                      {:background-color "blue"}]
                     [:to
                      {:background-color "red"}])

  (is (= (count (keys @stylefy.impl.dom/keyframes-in-use))
         2))

  (is (= @stylefy.impl.dom/keyframes-in-use
         {"animation-a" (css (stylefy/keyframes "animation-a"
                                                [:from
                                                 {:background-color "blue"}]
                                                [:to
                                                 {:background-color "red"}]))
          "animation-b" (css (stylefy/keyframes "animation-b"
                                                [:from
                                                 {:background-color "blue"}]
                                                [:to
                                                 {:background-color "red"}]))})))

(deftest tag
  (reset! stylefy.impl.dom/custom-tags-in-use [])
  (is (= (stylefy/tag "code"
                      {:background-color :lightyellow})
         {:stylefy.impl.dom/tag-name "code"
          :stylefy.impl.dom/tag-properties {:background-color :lightyellow}}))
  (is (= @stylefy.impl.dom/custom-tags-in-use
         [{:stylefy.impl.dom/css "code {\n  background-color: lightyellow;\n}"}])))

(deftest class
  (is (= (stylefy/class "background-transition"
                        {:transition "background-color 1s;"})
         {::stylefy.impl.dom/class-name "background-transition"
          ::stylefy.impl.dom/class-properties {:transition "background-color 1s;"}}))
  (is (= @stylefy.impl.dom/custom-classes-in-use
         [{:stylefy.impl.dom/css ".background-transition {\n  transition: background-color 1s;;\n}"}])))

(deftest prepare-styles
  (testing "Return value"
    (is (nil? (stylefy/prepare-styles [{:foo :bar} nil {:foo :bar}]))))

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

(deftest prepare-style
  (let [style {:background-color :red}]
    (testing "Return value"
      (is (= (stylefy/prepare-style style) style)))

    (testing "Good argument"
      (try
        (is (= (stylefy/prepare-style style) style))
        (is true "Error was not thrown as expected")
        (catch js/Error e
          (is false "Error was thrown"))))

    (testing "Good nil argument"
      (try
        (is (nil? (stylefy/prepare-style nil)))
        (is true "Error was not thrown as expected")
        (catch js/Error e
          (is false "Error was thrown"))))

    (testing "Bad argument: vector of styles"
      (try
        (stylefy/prepare-style [style style])
        (is false "Expected an error to be thrown.")
        (catch js/Error e
          (is true "Error was thrown as expected"))))))
