(ns stylefy.tests.conversion-test
  (:require [cljs.test :as test :refer-macros [deftest is testing]]
            [stylefy.core :as stylefy]
            [stylefy.impl.styles :as styles]
            [garden.stylesheet :refer [at-media]]
            [garden.units :as gu]
            [garden.color :as gc]
            [stylefy.impl.conversion :as conversion]
            [clojure.string :as str])
  (:require-macros [garden.def :refer [defcssfn]]))

(def simple-style {:padding "25px"
                   :background-color "#BBBBBB"
                   :border "1px solid black"})

(deftest simple-style->css
  (is (= (conversion/style->css {:props simple-style :hash (styles/hash-style simple-style)}
                                {:pretty-print? false})
         "._stylefy_878532438{padding:25px;background-color:#BBBBBB;border:1px solid black}")))

(def clickable {:cursor :pointer})

(def autoprefix-style (merge {:border "1px solid black"
                              :border-radius "5px"
                              ::stylefy/vendors ["webkit" "moz" "o"]
                              ::stylefy/auto-prefix #{:border-radius}}
                             clickable))

(deftest autoprefixed-style->css
  (is (= (conversion/style->css {:props autoprefix-style :hash (styles/hash-style autoprefix-style)}
                                {:pretty-print? false})
         "._stylefy_-216657570{border:1px solid black;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-o-border-radius:5px;cursor:pointer}")))

(def style-mode {::stylefy/mode {:hover {:background-color "#AAAAAA"}}})
(def style-mode-double-colon {::stylefy/mode {"::-webkit-progress-bar" {:-webkit-appearance "none"}}})
(def style-incorrect-mode {::stylefy/mode {"-webkit-progress-bar" {:-webkit-appearance "none"}}})

(deftest mode-style->css
  (is (= (conversion/style->css {:props style-mode :hash (styles/hash-style style-mode)}
                                {:pretty-print? false})
         "._stylefy_-2110434399{}._stylefy_-2110434399:hover{background-color:#AAAAAA}")))

(deftest mode-style-double-colon->css
  (is (= (conversion/style->css {:props style-mode-double-colon :hash (styles/hash-style style-mode-double-colon)}
                                {:pretty-print? false})
         "._stylefy_-1391954833{}._stylefy_-1391954833::-webkit-progress-bar{-webkit-appearance:none}")))

(deftest incorrect-mode->css
  (try
    (conversion/style->css {:props style-incorrect-mode :hash (styles/hash-style style-incorrect-mode)}
                           {:pretty-print? false})
    (is false "Error was not thrown")
    (catch js/Error e
      (is true "Error was thrown as expected"))))

(def responsive-style {:background-color "red"
                       :border-radius "10px"
                       ::stylefy/vendors ["webkit" "moz" "o"]
                       ::stylefy/mode {:hover {:background-color "white"}}
                       ::stylefy/auto-prefix #{:border-radius}
                       ::stylefy/media {{:max-width "500px"}
                                        {:background-color "blue"
                                         :border-radius "5px"
                                         ::stylefy/mode {:hover {:background-color "grey"}}
                                         ::stylefy/vendors ["webkit" "moz" "o"]
                                         ::stylefy/auto-prefix #{:border-radius}}}})

(deftest responsive-style->css
  (is (= (conversion/style->css {:props responsive-style :hash (styles/hash-style responsive-style)}
                                {:pretty-print? false})
         "._stylefy_628215496{background-color:red;border-radius:10px;-webkit-border-radius:10px;-moz-border-radius:10px;-o-border-radius:10px}._stylefy_628215496:hover{background-color:white}@media(max-width:500px){._stylefy_628215496{background-color:blue;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-o-border-radius:5px}._stylefy_628215496:hover{background-color:grey}}")))


(def grid-layout-with-fallback {:display "flex"
                                :flex-direction "row"
                                :flex-wrap "wrap"
                                ::stylefy/mode {:hover {:background-color "white"}}
                                ::stylefy/media {{:max-width "500px"}
                                                 {:display "block"}}
                                ::stylefy/supports
                                {"display: grid"
                                 {:display "grid"
                                  :grid-template-columns "1fr 1fr 1fr"
                                  ::stylefy/mode {:hover {:background-color "#111111"}}
                                  ;; Make CSS Grid responsive
                                  ::stylefy/media {{:max-width "500px"}
                                                   {:grid-template-columns "1fr"
                                                    ::stylefy/mode {:hover
                                                                    {:background-color "grey"}}}}}}})

(deftest supports->css
  (is (= (conversion/style->css {:props grid-layout-with-fallback
                                 :hash (styles/hash-style grid-layout-with-fallback)}
                                {:pretty-print? false})
         "._stylefy_-782791788{display:flex;flex-direction:row;flex-wrap:wrap}._stylefy_-782791788:hover{background-color:white}@media(max-width:500px){._stylefy_-782791788{display:block}}@supports (display: grid) {._stylefy_-782791788{display:grid;grid-template-columns:1fr 1fr 1fr}._stylefy_-782791788:hover{background-color:#111111}@media(max-width:500px){._stylefy_-782791788{grid-template-columns:1fr}._stylefy_-782791788:hover{background-color:grey}}}")))

(deftest custom-selector
  (let [style {:color "red"}]
    (is (= (conversion/style->css {:props style :hash (styles/hash-style style)
                                   :custom-selector "code"}
                                  {:pretty-print? false})
           "code{color:red}"))))

(defcssfn url)

(deftest garden-units
  (let [simple-style-with-garden-px-unit {:margin-top (gu/px 50)}
        style-with-rem-and-rgb {:margin-top (gu/rem 3)
                                :color (gc/rgb 255 0 0)}
        style-with-pc-rem-rgb-url {:padding "1rem"
                                   :width (gu/pc 50)
                                   :height (gu/rem 25)
                                   :color (gc/rgb 255 255 255)
                                   :background-image (url "images/background.jpg")}]
    (is (= (conversion/style->css {:props simple-style-with-garden-px-unit
                                   :hash (styles/hash-style simple-style-with-garden-px-unit)}
                                  {:pretty-print? false})
           "._stylefy_1894794598{margin-top:50px}"))
    (is (= (conversion/style->css {:props style-with-rem-and-rgb
                                   :hash (styles/hash-style style-with-rem-and-rgb)}
                                  {:pretty-print? false})
           "._stylefy_943569046{margin-top:3rem;color:#ff0000}"))
    (is (= (conversion/style->css {:props style-with-pc-rem-rgb-url
                                   :hash (styles/hash-style style-with-pc-rem-rgb-url)}
                                  {:pretty-print? false})
           "._stylefy_-1057883472{padding:1rem;width:50pc;height:25rem;color:#ffffff;background-image:url(images/background.jpg)}"))))

(deftest manual-mode
  (testing "Simple manual mode map"
    (let [style {::stylefy/manual [[:p {:color :red}]
                                   [:main [:article [:.title {:color :black}]]]]}]
      (is (= (conversion/style->css {:props style :hash (styles/hash-style style)} {:pretty-print? false})
             "._stylefy_353473522{}._stylefy_353473522 p{color:red}._stylefy_353473522 main article .title{color:black}"))))

  (testing "Complex manual mode selector"
    (let [media-query {:max-width "550px"}
         style {:width "500px"
                :height "200px"
                :padding "33px"
                :margin-bottom "10px"
                :background-color "#55AA55"
                ::stylefy/class-prefix "seppo"
                ::stylefy/mode {:hover {:background-color "#99DD99"}}
                ::stylefy/sub-styles {:innerbox {:width "100%"
                                                 :height "100%"
                                                 :background-color "#444444"}}
                ::stylefy/manual [[:&:hover [:.innerbox
                                             {:background-color "#999999"}
                                             [:&:hover {:background-color "#EEEEEE"}]]]
                                  (at-media media-query [:&:hover [:.innerbox
                                                                   {:background-color "#666666"}
                                                                   [:&:hover {:background-color "#111111"}]]])]
                ::stylefy/media {media-query
                                 {:width "200px"
                                  ::stylefy/mode {:hover {:background-color "#336633"}}}}}]
     (is (= (conversion/style->css {:props style :hash (styles/hash-style style)} {:pretty-print? false})
            "._stylefy_640089058{width:500px;height:200px;padding:33px;margin-bottom:10px;background-color:#55AA55}._stylefy_640089058:hover{background-color:#99DD99}@media(max-width:550px){._stylefy_640089058{width:200px}._stylefy_640089058:hover{background-color:#336633}}._stylefy_640089058:hover .innerbox{background-color:#999999}._stylefy_640089058:hover .innerbox:hover{background-color:#EEEEEE}@media(max-width:550px){._stylefy_640089058:hover .innerbox{background-color:#666666}._stylefy_640089058:hover .innerbox:hover{background-color:#111111}}")))))