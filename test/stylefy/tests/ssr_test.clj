(ns stylefy.tests.ssr-test
  (:require [clojure.test :refer :all]
            [hiccup.core :refer :all]
            [garden.color :as gc]
            [garden.units :as gu]
            [garden.stylesheet :refer [at-media]]
            [stylefy.core :as stylefy :refer [use-style]]
            [clojure.string :as str]))

; Style definitions for SSR tests:

(def phone-width "414px")

(def css-props {:border "1px solid black"
                :background-color "#FFDDDD"
                :text-align :center
                :padding "5px"
                :width "150px"
                :color (gc/rgb 123 123 123)
                :height (gu/px 666)})

(def style-box (merge css-props
                      {:stylefy.core/mode {:hover {:background-color "red"}
                                           :after {:clear "both"
                                                   :content "'.'"
                                                   :display "block"
                                                   :height 0
                                                   :line-height 0
                                                   :visibility "hidden"}}
                       :stylefy.core/vendors #{"moz"}
                       :stylefy.core/auto-prefix #{:border-radius}
                       :stylefy.core/sub-styles {:sub-box {:border "1px solid black"}}
                       ::stylefy/media {{:max-width phone-width}
                                        {:display "block"}}
                       ::stylefy/supports {"display: grid"
                                           {:display "grid"
                                            :grid-template-columns "1fr 1fr 1fr"
                                            ;; Make CSS Grid responsive
                                            ::stylefy/media {{:max-width phone-width}
                                                             {:grid-template-columns "1fr"}}}}
                       ::stylefy/manual [[:&:hover [:.innerbox
                                                    {:background-color "#999999"}
                                                    [:&:hover {:background-color "#EEEEEE"}]]]
                                         (at-media {:max-width phone-width}
                                                   [:&:hover [:.innerbox
                                                              {:background-color "#666666"}
                                                              [:&:hover {:background-color "#111111"}]]])]}))

; HTML

(defn sub-component [message]
  [:span (use-style {:color :red}) message])

(defn example-component []
  [:html
   [:head
    [:title "Example"]

    [:meta {:content "width=device-width, initial-scale=1, maximum-scale=1", :name "viewport"}]
    [:meta {:charset "utf-8"}]

    [:style {:id "_stylefy-server-styles_"} "_stylefy-server-styles-content_"]
    [:style {:id "_stylefy-constant-styles_"}]
    [:style {:id "_stylefy-styles_"}]]
   [:body (use-style style-box)
    [:div (sub-component "Example text is red")]]
   [:script {:src "/js/main.js"}]])

; Query

(defn init-stylefy []
  (stylefy/init))

(defn constant-styles []
  (stylefy/keyframes "simple-animation"
                     [:from
                      {:opacity 0}]
                     [:to
                      {:opacity 1}])

  (stylefy/font-face {:font-family "open_sans"
                      :src "url('../fonts/OpenSans-Regular-webfont.woff') format('woff')"
                      :font-weight "normal"
                      :font-style "normal"})

  (stylefy/tag "code"
               {:background-color "lightyellow"})

  (stylefy/class "enter-transition"
                 {:transition "background-color 2s"}))

(defn index-query []

  (stylefy/query-with-styles
    (fn []
      (constant-styles)
      (html (example-component)))))

(deftest query-with-styles
  (init-stylefy)

  (testing "Query with no styles (no use-style calls)"
    (is (= "" (stylefy/query-with-styles (fn [] "")))))

  (testing "HTML with styles"
    (let [result (index-query)]
      ; HTML document is rendered
      (is (str/includes? result "<html>"))
      ; Font-faces are rendered
      (is (str/includes? result "font-family: open_sans;"))
      ; Keyframes are rendered
      (is (str/includes? result "@keyframes simple-animation"))
      ; Tags selectors are rendered
      (is (str/includes? result "background-color: lightyellow;"))
      ; Transitions are rendered
      (is (str/includes? result "transition: background-color 2s;"))
      ; Styles are rendered
      (is (str/includes? result "<style id=\"_stylefy-server-styles_\">"))
      ; Garden units are rendered
      (is (str/includes? result "height: 666px;"))
      (is (str/includes? result "color: #7b7b7b;"))
      ; Placeholder is NOT rendered
      (is (not (str/includes? result "_stylefy-server-styles-content_")))
      ; Base style is rendered
      (is (str/includes? result "._stylefy_-348110113"))
      ; Modes are rendered
      (is (str/includes? result "._stylefy_-348110113:hover"))
      (is (str/includes? result "._stylefy_-348110113:after"))
      ; Media query is rendered
      (is (str/includes? result "@media (max-width: 414px"))
      ; Feature query is rendered
      (is (str/includes? result "supports (display: grid)"))
      ; Manual mode is rendered
      (is (str/includes? result "._stylefy_-348110113:hover .innerbox:hover"))
      ; Body is rendered
      (is (str/includes? result "<body class=\"_stylefy_-348110113\">"))
      ; Sub-component is rendered
      (is (str/includes? result "<span class=\"_stylefy_1606470837\">Example text is red</span>")))))