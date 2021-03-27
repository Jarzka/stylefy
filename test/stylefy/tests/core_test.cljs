(ns stylefy.tests.core-test
  (:require [cljs.test :as test :refer-macros [deftest is testing]]
            [stylefy.core :as stylefy]
            [garden.color :as color]
            [garden.units :as units]
            [clojure.string :as str]))

; Style definitions for tests:

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
  
  ; Use style smoke tests
  
  (testing "Use style"
    (let [return (stylefy/use-style style-box)]
      (is (= (:class return) "_stylefy_1149735588"))
      ; This is the first time we use this style map -> inline style shoule be returned
      (is (map? (:style return)))
      ; Inline style does not contain namespaced keywords. Also, it is not marked as hidden, because
      ; the style works perfectly as inline style.
      (is (= (:style return) css-props))))

  (testing "Use nil style"
    (let [return (stylefy/use-style nil)]
      (is (nil? return))))

  (testing "Use empty style"
    (let [return (stylefy/use-style {})]
      (is (nil? return))))

  ; Modes

  (testing "Use style with :hover mode"
    (let [return (stylefy/use-style (merge style-box
                                           {:stylefy.core/mode {:hover {:background-color "blue"}}}))]
      (is (string? (:class return)))
      (is (map? (:style return)))
      ; Inline style does not contain namespaced keywords and it's not hidden.
      (is (= (:style return) css-props))))

  (testing "Use style with :foo mode"
    (let [return (stylefy/use-style (merge style-box
                                           {:stylefy.core/mode {:foo {:background-color "blue"}}}))]
      (is (string? (:class return)))
      (is (map? (:style return)))
      ; Inline style does not contain namespaced keywords and it IS hidden, because only
      ; certain modes can be accepted without hiding the component
      (is (= (:style return) (assoc css-props :visibility "hidden")))))

  ; Media queries

  (testing "Use style with media query"
    (let [return (stylefy/use-style (merge style-box
                                           {:stylefy.core/media {{:max-width "400px"}
                                                                 {:border "1px solid red"}}}))]
      (is (string? (:class return)))
      (is (map? (:style return)))
      ; Inline style hides the component (media queries do not work as inline style)
      (is (= (:style return) (assoc css-props :visibility "hidden")))))

  ; Manual mode

  (testing "Use style with manual mode"
    (let [return (stylefy/use-style (merge style-box
                                           {:stylefy.core/manual [[:&:hover [:.innerbox
                                                                             {:background-color "#999999"}]]]}))]
      (is (string? (:class return)))
      (is (map? (:style return)))
      ; Inline style hides the component (manual mode does not work as inline style)
      (is (= (:style return) (assoc css-props :visibility "hidden")))))

  ; Feature query

  (testing "Use style with feature query"
    (let [return (stylefy/use-style (merge style-box
                                           {:stylefy.core/supports {"display: grid"
                                                                    {:border "1px solid red"}}}))]
      (is (string? (:class return)))
      (is (map? (:style return)))
      ; Inline style hides the component (feature queries do not work as inline style)
      (is (= (:style return) (assoc css-props :visibility "hidden")))))

  (testing "Use nil style with HTML attributes"
    (let [return (stylefy/use-style nil {:src "image.jpg" :class "myclass"})]
      (is (= return {:src "image.jpg" :class "myclass"}))))

  ; HTML attributes

  (testing "Use style with HTML class name (as string):"
    (let [return (stylefy/use-style style-box {:class "dummy"})]
      (is (= "_stylefy_1149735588 dummy" (:class return)))))

  (testing "Use style with multiple HTML class names (as long string):"
    (let [return (stylefy/use-style style-box {:class "dummy hello world"})]
      (is (= "_stylefy_1149735588 dummy hello world" (:class return)))))

  (testing "Use style with HTML class name (as keyword):"
    (let [return (stylefy/use-style style-box {:class :dummy})]
      (is (= "_stylefy_1149735588 dummy" (:class return)))))

  (testing "Use style with HTML class name (in vector):"
    (let [return (stylefy/use-style style-box {:class ["dummy"]})]
      (is (= "_stylefy_1149735588 dummy" (:class return)))))

  (testing "Use style with multiple HTML class names (in vector):"
    (let [return (stylefy/use-style style-box {:class ["dummy" "hello" "world"]})]
      (is (= "_stylefy_1149735588 dummy hello world" (:class return)))))

  (testing "Use style with multiple HTML class names (in vector, both strings and keywords):"
    (let [return (stylefy/use-style style-box {:class ["dummy" :hello "world"]})]
      (is (= "_stylefy_1149735588 dummy hello world" (:class return)))))

  (testing "Use style with multiple HTML class names (in vector, both strings, keywords and nils):"
    (let [return (stylefy/use-style style-box {:class ["dummy" :hello nil nil "world" nil nil]})]
      (is (= "_stylefy_1149735588 dummy hello world" (:class return)))))

  (testing "Use empty style with HTML attributes"
    (let [return (stylefy/use-style {} {:src "image.jpg" :class "myclass"})]
      (is (= return {:src "image.jpg" :class "myclass"}))))

  (testing "Use style with HTML attributes, class is string"
    (let [attr-src "image.jpg"
          attr-alt "fail"
          attr-class "myclass"
          return (stylefy/use-style style-box
                                    {:src attr-src
                                     :alt attr-alt
                                     :class attr-class})]
      (is (= (:src return) attr-src))
      (is (= (:alt return) attr-alt))
      (is (= "_stylefy_1149735588 myclass" (:class return)))))

  (testing "Use style with HTML attributes, class is vector"
    (let [attr-src "image.jpg"
          attr-alt "fail"
          attr-class ["myclass1" "myclass2"]
          return (stylefy/use-style style-box
                                    {:src attr-src
                                     :alt attr-alt
                                     :class attr-class})]
      (is (= (:src return) attr-src))
      (is (= (:alt return) attr-alt))
      (is (= "_stylefy_1149735588 myclass1 myclass2" (:class return)))))

  (testing "Use style with HTML attributes and additional class names (string) attached to it"
    (let [attr-src "image.jpg"
          attr-alt "fail"
          return (stylefy/use-style (assoc style-box
                                      ::stylefy/with-classes "hello world")
                                    {:src attr-src
                                     :class "default"
                                     :alt attr-alt})]
      (is (= (:src return) attr-src))
      (is (= (:alt return) attr-alt))
      (is (= "_stylefy_-594685217 default hello world" (:class return)))))

  (testing "Use style with HTML attributes and additional class name (keyword) attached to it"
    (let [attr-src "image.jpg"
          attr-alt "fail"
          return (stylefy/use-style (assoc style-box
                                      ::stylefy/with-classes :hello)
                                    {:src attr-src
                                     :class "default"
                                     :alt attr-alt})]
      (is (= (:src return) attr-src))
      (is (= (:alt return) attr-alt))
      (is (= "_stylefy_1638123288 default hello" (:class return)))))

  (testing "Use style with additional class names (vector) attached to it"
    (let [attr-src "image.jpg"
          attr-alt "fail"
          return (stylefy/use-style (assoc style-box
                                      ::stylefy/with-classes ["additional" :classname])
                                    {:src attr-src
                                     :alt attr-alt})]
      (is (= (:src return) attr-src))
      (is (= (:alt return) attr-alt))
      (is (= "_stylefy_1989766565 additional classname" (:class return)))))

  (testing "Use style with HTML attributes, class name and additional class name attached to it"
    (let [attr-src "image.jpg"
          attr-alt "fail"
          return (stylefy/use-style (assoc style-box
                                      ::stylefy/with-classes ["hello" :world])
                                    {:src attr-src
                                     :class [:default "thing"]
                                     :alt attr-alt})]
      (is (= (:src return) attr-src))
      (is (= (:alt return) attr-alt))
      (is (= "_stylefy_1161193281 default thing hello world" (:class return)))))

  (testing "Use style with additional HTML attribute :style definition"
    (try
      (stylefy/use-style {:color "blue"} {:style {:color "red"}}) ; No point here!
      (is false "Error was not thrown")
      (catch js/Error _e
        (is true "Error was thrown as expected")))))

; Invalid styles

(testing "Use garbage style: number"
  (try
    (stylefy/use-style 123)
    (is false "Error was not thrown")
    (catch js/Error _e
      (is true "Error was thrown as expected"))))

(testing "Use garbage style: string"
  (try
    (stylefy/use-style "foo")
    (is false "Error was not thrown")
    (catch js/Error _e
      (is true "Error was thrown as expected"))))

; Garden types

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

; use-sub-style

(deftest use-sub-style
  (testing "Use sub-style"
    (let [return (stylefy/use-sub-style style-box :sub-box)]
      (is (string? (:class return)))))

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
      (catch js/Error _e
        (is true "Error was thrown as expected"))))

  (testing "Use garbage style: string"
    (try
      (stylefy/use-sub-style {} "foo" :foo)
      (is false "Error was not thrown")
      (catch js/Error _e
        (is true "Error was thrown as expected"))))

  (testing "Use sub-style with class name"
    (let [return (stylefy/use-sub-style style-box :sub-box {:class ["dummy"]})]
      (is (string? (:class return)))
      (is (str/includes? (:class return) "dummy"))))

  (testing "Use sub-style with class name along with additional classes"
    (let [return (stylefy/use-sub-style (assoc-in style-box
                                                  [::stylefy/sub-styles :sub-box ::stylefy/with-classes]
                                                  ["additional"])
                                        :sub-box {:class ["dummy"]})]
      (is (string? (:class return)))
      (is (str/includes? (:class return) "additional"))
      (is (str/includes? (:class return) "dummy"))))

  (testing "Use sub-style with additional HTML attribute :style definition"
    (try
      (stylefy/use-sub-style style-box :sub-box {:style {:color "red"}})
      (is false "Error was not thrown")
      (catch js/Error _e
        (is true "Error was thrown as expected"))))

  (testing "Use sub-style with HTML attributes"
    (let [attr-src "image.jpg"
          attr-alt "fail"
          attr-class "myclass"
          return (stylefy/use-sub-style style-box :sub-box
                                        {:src attr-src
                                         :alt attr-alt
                                         :class attr-class})]
      (is (= (:src return) attr-src))
      (is (= (:alt return) attr-alt))
      (is (string? (:class return)))
      (is (str/includes? (:class return) "_stylefy_")) ; Prefix for auto-generated class
      (is (str/includes? (:class return) "myclass"))))

  (testing "Use sub-style with :class vector"
    (let [attr-src "image.jpg"
          attr-alt "fail"
          attr-class ["myclass" "myclass2"]
          return (stylefy/use-sub-style style-box :sub-box
                                        {:src attr-src
                                         :alt attr-alt
                                         :class attr-class})]
      (is (= (:src return) attr-src))
      (is (= (:alt return) attr-alt))
      (is (string? (:class return)))
      (is (str/includes? (:class return) "_stylefy_")) ; Prefix for auto-generated class
      (is (str/includes? (:class return) "myclass myclass2"))))

  (testing "Use sub-style that does not exist: returns nil"
    (let [return (stylefy/use-sub-style style-box :foo)]
      (is (nil? return)))))

; sub-style

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
      (catch js/Error _e
        (is true "Error was thrown as expected")))))

; DOM

(deftest dom-update-is-requested
  (let [dom-update-requested? (atom false)]
    (with-redefs [dom/request-asynchronous-dom-update #(reset! dom-update-requested? true)]
      (is (nil? (stylefy/init)))
      (stylefy/use-style {:color "red"})
      (is (true? @dom-update-requested?)))))

; prepare-styles

(deftest prepare-styles
  (testing "Return value"
    (is (nil? (stylefy/prepare-styles [{:foo :bar} nil {:foo :bar}]))))

  (testing "Good argument"
    (try
      (stylefy/prepare-styles [{:foo :bar} nil {:foo :bar}])
      (is true "Error was not thrown as expected")
      (catch js/Error _e
        (is false "Error was thrown"))))

  (testing "Good empty argument"
    (try
      (stylefy/prepare-styles [])
      (is true "Error was not thrown as expected")
      (catch js/Error _e
        (is false "Error was thrown"))))

  (testing "Bad argument: map"
    (try
      (stylefy/prepare-styles {:foo :bar})
      (is false "Expected an error to be thrown.")
      (catch js/Error _e
        (is true "Error was thrown as expected")))))

; prepare-style

(deftest prepare-style
  (let [style {:background-color :red}]
    (testing "Return value"
      (is (= (stylefy/prepare-style style) style)))

    (testing "Good argument"
      (try
        (is (= (stylefy/prepare-style style) style))
        (is true "Error was not thrown as expected")
        (catch js/Error _e
          (is false "Error was thrown"))))

    (testing "Good nil argument"
      (try
        (is (nil? (stylefy/prepare-style nil)))
        (is true "Error was not thrown as expected")
        (catch js/Error _e
          (is false "Error was thrown"))))

    (testing "Bad argument: vector of styles"
      (try
        (stylefy/prepare-style [style style])
        (is false "Expected an error to be thrown.")
        (catch js/Error _e
          (is true "Error was thrown as expected"))))))
