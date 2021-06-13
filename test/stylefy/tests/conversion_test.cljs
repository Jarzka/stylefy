(ns stylefy.tests.conversion-test
  (:require [cljs.test :as test :refer-macros [deftest is testing]]
            [stylefy.core :as stylefy]
            [stylefy.impl.hashing :as hashing]
            [garden.stylesheet :refer [at-media at-supports]]
            [garden.units :as gu]
            [garden.color :as gc]
            [stylefy.impl.conversion :as conversion]
            [clojure.string :as str])
  (:require-macros [garden.def :refer [defcssfn]]))

; Basic tests

(def simple-style {:padding "25px"
                   :background-color "#BBBBBB"
                   :border "1px solid black"})

(deftest simple-style->css
  (is (= (conversion/style->css {:props simple-style :hash (hashing/hash-style simple-style)}
                                {:pretty-print? false})
         "._stylefy_878532438{padding:25px;background-color:#BBBBBB;border:1px solid black}")))

; Vendor prefixes

(def clickable {:cursor :pointer})

(def autoprefix-style (merge {:border "1px solid black"
                              :border-radius "5px"
                              ::stylefy/vendors ["webkit" "moz" "o"]
                              ::stylefy/auto-prefix #{:border-radius}}
                             clickable))

(deftest autoprefixed-style->css
  (is (= (conversion/style->css {:props autoprefix-style :hash (hashing/hash-style autoprefix-style)}
                                {:pretty-print? false})
         "._stylefy_-216657570{border:1px solid black;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-o-border-radius:5px;cursor:pointer}")))

; Modes

(def style-with-mode {::stylefy/mode {:hover {:background-color "#AAAAAA"}}})
(def style-with-mode-double-colon {::stylefy/mode {"::-webkit-progress-bar" {:-webkit-appearance "none"}}})
(def style-with-incorrect-mode-start {::stylefy/mode {"-webkit-progress-bar" {:-webkit-appearance "none"}}})
(def style-with-multiple-modes-in-map {:background-color "white"
                                       ::stylefy/mode {:hover {:background-color "#AAAAAA"}
                                                       :active {:background-color "#FFFFFF"}
                                                       "::before" {:content "Hello"}}})
(def style-with-multiple-modes-in-vector {:background-color "white"
                                          ::stylefy/mode [[:hover {:background-color "#AAAAAA"}]
                                                          [:active {:background-color "#FFFFFF"}]
                                                          ["::before" {:content "Hello"}]]})
(def style-with-multiple-modes-in-vector-different-order {:background-color "white"
                                                          ::stylefy/mode [["::before" {:content "Hello"}]
                                                                          [:hover {:background-color "#ffedcf"}]
                                                                          [:active {:background-color "blue" :color "white"}]]})
(deftest mode->css
  (is (= (conversion/style->css {:props style-with-mode :hash (hashing/hash-style style-with-mode)}
                                {:pretty-print? false})
         "._stylefy_-2110434399{}._stylefy_-2110434399:hover{background-color:#AAAAAA}")))

(deftest mode-double-colon->css
  (is (= (conversion/style->css {:props style-with-mode-double-colon :hash (hashing/hash-style style-with-mode-double-colon)}
                                {:pretty-print? false})
         "._stylefy_-1391954833{}._stylefy_-1391954833::-webkit-progress-bar{-webkit-appearance:none}")))

(deftest incorrect-mode-start->css
  (try
    (conversion/style->css {:props style-with-incorrect-mode-start :hash (hashing/hash-style style-with-incorrect-mode-start)}
                           {:pretty-print? false})
    (is false "Error was not thrown")
    (catch js/Error e
      (is true "Error was thrown as expected"))))

(deftest multiple-modes-in-map->css
  (is (= (conversion/style->css {:props style-with-multiple-modes-in-map :hash (hashing/hash-style style-with-multiple-modes-in-map)}
                                {:pretty-print? false})
         "._stylefy_-1666363255{background-color:white}._stylefy_-1666363255:hover{background-color:#AAAAAA}._stylefy_-1666363255:active{background-color:#FFFFFF}._stylefy_-1666363255::before{content:Hello}")))

(deftest multiple-modes-in-vector->css
  (is (= (conversion/style->css {:props style-with-multiple-modes-in-vector :hash (hashing/hash-style style-with-multiple-modes-in-vector)}
                                {:pretty-print? false})
         "._stylefy_-1983611204{background-color:white}._stylefy_-1983611204:hover{background-color:#AAAAAA}._stylefy_-1983611204:active{background-color:#FFFFFF}._stylefy_-1983611204::before{content:Hello}")))

(deftest map-and-vector-mode->same-css-props
  (is (= (conversion/style->css {:props style-with-multiple-modes-in-map :hash "same_hash_for_testing_purposes"}
                                {:pretty-print? false})
         (conversion/style->css {:props style-with-multiple-modes-in-vector :hash "same_hash_for_testing_purposes"}
                                {:pretty-print? false}))))

(deftest multiple-modes-in-vector-different-order->css
  (is (= (conversion/style->css {:props style-with-multiple-modes-in-vector-different-order :hash (hashing/hash-style style-with-multiple-modes-in-vector-different-order)}
                                {:pretty-print? false})
         "._stylefy_899322923{background-color:white}._stylefy_899322923::before{content:Hello}._stylefy_899322923:hover{background-color:#ffedcf}._stylefy_899322923:active{background-color:blue;color:white}")))

; Media queries

(def responsive-style {:background-color "red"
                       :border-radius "10px"
                       ::stylefy/vendors ["webkit" "moz" "o"]
                       ::stylefy/auto-prefix #{:border-radius}
                       ::stylefy/mode {:hover {:background-color "white"}}
                       ::stylefy/media {{:max-width "500px"}
                                        {:background-color "blue"
                                         :border-radius "5px"
                                         ::stylefy/mode {:hover {:background-color "grey"}}
                                         ::stylefy/vendors ["webkit" "moz" "o"]
                                         ::stylefy/auto-prefix #{:border-radius}}}})

(deftest responsive-style->css
  (is (= (conversion/style->css {:props responsive-style :hash (hashing/hash-style responsive-style)}
                                {:pretty-print? false})
         "._stylefy_628215496{background-color:red;border-radius:10px;-webkit-border-radius:10px;-moz-border-radius:10px;-o-border-radius:10px}._stylefy_628215496:hover{background-color:white}@media(max-width:500px){._stylefy_628215496{background-color:blue;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-o-border-radius:5px}._stylefy_628215496:hover{background-color:grey}}")))

; Feature queries

(def grid-layout-with-fallback-map-syntax {:display "flex"
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
                                             ; Make CSS Grid responsive
                                             ::stylefy/media {{:max-width "500px"}
                                                              {:grid-template-columns "1fr"
                                                               ::stylefy/mode {:hover
                                                                               {:background-color "grey"}}}}}}})

(def grid-layout-with-fallback-vector-syntax {:display "flex"
                                              :flex-direction "row"
                                              :flex-wrap "wrap"
                                              ::stylefy/mode {:hover {:background-color "white"}}
                                              ::stylefy/media {{:max-width "500px"}
                                                               {:display "block"}}
                                              ::stylefy/supports [["display: grid"
                                                                   {:display "grid"
                                                                    :grid-template-columns "1fr 1fr 1fr"
                                                                    ::stylefy/mode {:hover {:background-color "#111111"}}
                                                                    ; Make CSS Grid responsive
                                                                    ::stylefy/media {{:max-width "500px"}
                                                                                     {:grid-template-columns "1fr"
                                                                                      ::stylefy/mode {:hover
                                                                                                      {:background-color "grey"}}}}}]]})

(def supports-with-many-stylefy-features {::stylefy/supports [["display: grid"
                                                               {:color :green
                                                                ::stylefy/mode [[:hover {:color :blue}]]
                                                                ::stylefy/scope [[:.scope {:color :yellow
                                                                                           ::stylefy/manual [[:.child-in-scope {:color :red}]]}]]
                                                                ::stylefy/manual [[:.child {:color :purple}]]}]]})

(deftest supports->css
  (testing "Map syntax"
    (is (= (conversion/style->css {:props grid-layout-with-fallback-map-syntax
                                   :hash (hashing/hash-style grid-layout-with-fallback-map-syntax)}
                                  {:pretty-print? false})
           "._stylefy_-782791788{display:flex;flex-direction:row;flex-wrap:wrap}._stylefy_-782791788:hover{background-color:white}@media(max-width:500px){._stylefy_-782791788{display:block}}@supports (display: grid) {._stylefy_-782791788{display:grid;grid-template-columns:1fr 1fr 1fr}._stylefy_-782791788:hover{background-color:#111111}@media(max-width:500px){._stylefy_-782791788{grid-template-columns:1fr}._stylefy_-782791788:hover{background-color:grey}}}")))

  (testing "Vector syntax"
    (is (= (conversion/style->css {:props grid-layout-with-fallback-vector-syntax
                                   :hash (hashing/hash-style grid-layout-with-fallback-vector-syntax)}
                                  {:pretty-print? false})
           "._stylefy_-683353920{display:flex;flex-direction:row;flex-wrap:wrap}._stylefy_-683353920:hover{background-color:white}@media(max-width:500px){._stylefy_-683353920{display:block}}@supports (display: grid) {._stylefy_-683353920{display:grid;grid-template-columns:1fr 1fr 1fr}._stylefy_-683353920:hover{background-color:#111111}@media(max-width:500px){._stylefy_-683353920{grid-template-columns:1fr}._stylefy_-683353920:hover{background-color:grey}}}"))

    (testing "Rules are rendered in the right order"
      (let [style {::stylefy/supports [["display: grid"
                                        {:color "green"}]
                                       ["display: flex"
                                        {:color "blue"}]]}]
        (is (= (conversion/style->css {:props style
                                       :hash (hashing/hash-style style)}
                                      {:pretty-print? false})
               "._stylefy_-1712366838{}@supports (display: grid) {._stylefy_-1712366838{color:green}}@supports (display: flex) {._stylefy_-1712366838{color:blue}}")))

      (let [style {::stylefy/supports [["display: flex"
                                        {:color "blue"}]
                                       ["display: grid"
                                        {:color "green"}]]}]
        (is (= (conversion/style->css {:props style
                                       :hash (hashing/hash-style style)}
                                      {:pretty-print? false})
               "._stylefy_-2028302377{}@supports (display: flex) {._stylefy_-2028302377{color:blue}}@supports (display: grid) {._stylefy_-2028302377{color:green}}")))))

  (testing "Same output with both syntaxes (excluding hash)"
    (is (= (conversion/style->css {:props grid-layout-with-fallback-map-syntax
                                   :hash "test"}
                                  {:pretty-print? false})
           (conversion/style->css {:props grid-layout-with-fallback-vector-syntax
                                   :hash "test"}
                                  {:pretty-print? false}))))

  (testing "Other stylefy features also work in the supports query"
    (is (= (conversion/style->css {:props supports-with-many-stylefy-features
                                   :hash (hashing/hash-style supports-with-many-stylefy-features)}
                                  {:pretty-print? false})
           "._stylefy_1494431776{}@supports (display: grid) {._stylefy_1494431776{color:green}._stylefy_1494431776:hover{color:blue}.scope ._stylefy_1494431776{color:yellow}.scope ._stylefy_1494431776 .child-in-scope{color:red}._stylefy_1494431776 .child{color:purple}}"))))

(deftest custom-selector
  (let [style {:color "red"}]
    (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)
                                   :custom-selector "code"}
                                  {:pretty-print? false})
           "code{color:red}"))))

; Garden units

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
                                   :hash (hashing/hash-style simple-style-with-garden-px-unit)}
                                  {:pretty-print? false})
           "._stylefy_1894794598{margin-top:50px}"))
    (is (= (conversion/style->css {:props style-with-rem-and-rgb
                                   :hash (hashing/hash-style style-with-rem-and-rgb)}
                                  {:pretty-print? false})
           "._stylefy_943569046{margin-top:3rem;color:#ff0000}"))
    (is (= (conversion/style->css {:props style-with-pc-rem-rgb-url
                                   :hash (hashing/hash-style style-with-pc-rem-rgb-url)}
                                  {:pretty-print? false})
           "._stylefy_-1057883472{padding:1rem;width:50pc;height:25rem;color:#ffffff;background-image:url(images/background.jpg)}"))))

; Manual mode

(deftest manual-mode
  (testing "Simple manual mode map"
    (let [style {::stylefy/manual [[:p {:color :red}]
                                   [:main [:article [:.title {:color :black}]]]]}]
      (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)} {:pretty-print? false})
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
      (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)} {:pretty-print? false})
             "._stylefy_640089058{width:500px;height:200px;padding:33px;margin-bottom:10px;background-color:#55AA55}._stylefy_640089058:hover{background-color:#99DD99}@media(max-width:550px){._stylefy_640089058{width:200px}._stylefy_640089058:hover{background-color:#336633}}._stylefy_640089058:hover .innerbox{background-color:#999999}._stylefy_640089058:hover .innerbox:hover{background-color:#EEEEEE}@media(max-width:550px){._stylefy_640089058:hover .innerbox{background-color:#666666}._stylefy_640089058:hover .innerbox:hover{background-color:#111111}}"))))

  (testing "Manual mode with string-based selector"
    (let [style {:color :red
                 ::stylefy/manual [["> .box:hover" {:color "black"}]]}]
      (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)} {:pretty-print? false})
             "._stylefy_696232348{color:red}._stylefy_696232348 > .box:hover{color:black}"))))

  (testing "Manual mode with nested at-supports and at-media"
    (let [style {:color "red"
                 ::stylefy/manual [(at-supports {:display "grid"}
                                                (at-media {:max-width "50rem"}
                                                          [:& {:color "green"}]))]}]
      (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)} {:pretty-print? false})
             "._stylefy_239824967{color:red}@supports(display:grid){@media(max-width:50rem){._stylefy_239824967{color:green}}}")))))

; Scoped styles

(deftest scoped-styles
  (testing "Base style + scoped style"
    (let [style {:font-weight :bold
                 ::stylefy/scope [[:.scoped-box {:color "red"}]]}]
      (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)} {:pretty-print? false})
             "._stylefy_83835414{font-weight:bold}.scoped-box ._stylefy_83835414{color:red}"))))

  (testing "Scoped style only"
    (let [style {::stylefy/scope [[:.scoped-box {:color "red"}]]}]
      (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)} {:pretty-print? false})
             "._stylefy_14606206{}.scoped-box ._stylefy_14606206{color:red}"))))

  (testing "Base style + scoped style with string selector"
    (let [style {:font-weight :bold
                 ::stylefy/scope [[".scoped-box > .child-box" {:color "red"}]]}]
      (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)} {:pretty-print? false})
             "._stylefy_673165582{font-weight:bold}.scoped-box > .child-box ._stylefy_673165582{color:red}"))))

  (testing "Base style + multiple deeply nested scoped styles"
    (let [style {:color :purple
                 ::stylefy/scope [[:.hello [:.world ["> .scoped-box" [:&:hover {:color "red"}]]]]
                                  [:main [".box:first-child" [:.scoped-box {:color "blue"}
                                                              [:&:hover {:color "yellow"}]]]]]}]
      (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)} {:pretty-print? false})
             "._stylefy_1991797270{color:purple}.hello .world > .scoped-box:hover ._stylefy_1991797270{color:red}main .box:first-child .scoped-box ._stylefy_1991797270{color:blue}main .box:first-child .scoped-box:hover ._stylefy_1991797270{color:yellow}"))))

  (testing "Scoped style with multiple branches"
    (let [style {::stylefy/scope [[:h1 :h2 {:font-weight "normal"}
                                   [:strong :b {:font-weight "bold"}]]
                                  [:.hello [:.world {:color :red}]]]}]
      (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)} {:pretty-print? false})
             "._stylefy_-822863575{}h1 ._stylefy_-822863575,h2 ._stylefy_-822863575{font-weight:normal}h1 strong ._stylefy_-822863575,h1 b ._stylefy_-822863575,h2 strong ._stylefy_-822863575,h2 b ._stylefy_-822863575{font-weight:bold}.hello .world ._stylefy_-822863575{color:red}"))))

  (testing "Base style including vendor prefixes + scoped style -> vendor prefixes also used in scoped style map"
    (let [style {:font-weight :bold
                 ::stylefy/vendors ["webkit" "moz"]
                 ::stylefy/auto-prefix #{:color :font-weight}
                 ::stylefy/scope [[:.scoped-box {:color "red"}]]}]
      (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)} {:pretty-print? false})
             "._stylefy_-1580996801{font-weight:bold;-webkit-font-weight:bold;-moz-font-weight:bold}.scoped-box ._stylefy_-1580996801{color:red;-webkit-color:red;-moz-color:red}"))))

  (testing "Base style + scoped style including vendor prefixes -> prefixes are not applied since these must be defined in the parent style map"
    (let [style {:font-weight :bold
                 ::stylefy/scope [[:.scoped-box {:color "red"
                                                 ::stylefy/vendors ["webkit" "moz"]
                                                 ::stylefy/auto-prefix #{:color :font-weight}}]]}]
      (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)} {:pretty-print? false})
             "._stylefy_965416274{font-weight:bold}.scoped-box ._stylefy_965416274{color:red}"))))

  (testing "Base style + scoped style with pseudoclass selector"
    (let [style {:font-weight :bold
                 ::stylefy/scope [[:.scoped-box {:color "red"}
                                   [:&:hover {:color "yellow"}]]]}]
      (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)} {:pretty-print? false})
             "._stylefy_-826201154{font-weight:bold}.scoped-box ._stylefy_-826201154{color:red}.scoped-box:hover ._stylefy_-826201154{color:yellow}"))))

  (testing "Base style + scoped style with mode and manual mode"
    (let [style {:font-weight :bold
                 ::stylefy/scope [[:.scoped-box {:color "red"
                                                 ::stylefy/mode {:hover {:color "yellow"}}
                                                 ::stylefy/manual [[:.green-text-in-scoped-box {:color "green"}]]}]]}]
      (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)} {:pretty-print? false})
             "._stylefy_-617868976{font-weight:bold}.scoped-box ._stylefy_-617868976{color:red}.scoped-box ._stylefy_-617868976:hover{color:yellow}.scoped-box ._stylefy_-617868976 .green-text-in-scoped-box{color:green}"))))

  (testing "Base style + scoped style with mode and manual mode with manual media query"
    (let [style {:font-weight :bold
                 ::stylefy/scope [[:.scoped-box {:color "red"
                                                 ::stylefy/mode {:hover {:color "yellow"}}
                                                 ::stylefy/manual [[:.green-text-in-scoped-box {:color "green"}]
                                                                   (at-media {:max-width "500px"} [:.green-text-in-scoped-box {:color "purple"}])]}]]}]
      (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)} {:pretty-print? false})
             "._stylefy_-2000417315{font-weight:bold}.scoped-box ._stylefy_-2000417315{color:red}.scoped-box ._stylefy_-2000417315:hover{color:yellow}.scoped-box ._stylefy_-2000417315 .green-text-in-scoped-box{color:green}@media(max-width:500px){.scoped-box ._stylefy_-2000417315 .green-text-in-scoped-box{color:purple}}"))))

  (testing "Base style + scoped style with mode and manual mode. Base style also has a media query with scoping rules."
    (let [style {:font-weight :bold
                 ::stylefy/scope [[:.scoped-box {:color "red"
                                                 ::stylefy/mode {:hover {:color "yellow"}}
                                                 ::stylefy/manual [[:.special-text-in-scoped-box {:color "green"}]]}]]
                 ::stylefy/media {{:max-width "500px"}
                                  {::stylefy/scope [[:.scoped-box {::stylefy/manual [[:.special-text-in-scoped-box {:color "purple"}]]}]]}}}]
      (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)} {:pretty-print? false})
             "._stylefy_-1583604889{font-weight:bold}.scoped-box ._stylefy_-1583604889{color:red}.scoped-box ._stylefy_-1583604889:hover{color:yellow}.scoped-box ._stylefy_-1583604889 .special-text-in-scoped-box{color:green}@media(max-width:500px){._stylefy_-1583604889{}}@media(max-width:500px){.scoped-box ._stylefy_-1583604889{}.scoped-box ._stylefy_-1583604889 .special-text-in-scoped-box{color:purple}}"))))

  (testing "Base style + scoped style with media query."
    (let [style {:color "white"
                 ::stylefy/scope [[:.scoped-box {:color "blue"}]
                                  [:.scoped-box (at-media {:max-width "50rem"} [:& {:color "purple"}])]
                                  [:.os-win [:.scoped-box (at-media {:max-width "50rem"} [:& {:color "red"}])]]]}]
      (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)} {:pretty-print? false})
             "._stylefy_1934034165{color:white}.scoped-box ._stylefy_1934034165{color:blue}@media(max-width:50rem){.scoped-box ._stylefy_1934034165{color:purple}}@media(max-width:50rem){.os-win .scoped-box ._stylefy_1934034165{color:red}}"))))

  (testing "Base style + scoped style with feature and media query."
    (let [style {:color "white"
                 ::stylefy/scope [[:.scoped-box (at-supports {:display :grid} [:& {:color "blue"}])]
                                  [:.scoped-box (at-supports {:display :grid} (at-media {:max-width "50rem"} [:& {:color "purple"}]))]
                                  [:.os-win [:.scoped-box (at-supports {:display :grid} (at-media {:max-width "50rem"} [:& {:color "red"}]))]]]}]
      (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)} {:pretty-print? false})
             "._stylefy_-1973826168{color:white}@supports(display:grid){.scoped-box ._stylefy_-1973826168{color:blue}}@supports(display:grid){@media(max-width:50rem){.scoped-box ._stylefy_-1973826168{color:purple}}}@supports(display:grid){@media(max-width:50rem){.os-win .scoped-box ._stylefy_-1973826168{color:red}}}"))))

  (testing "Scoped style inside media query still takes vendor prefixes from parent style map"
    (let [style {::stylefy/media {{:max-width "500px"}
                                  {::stylefy/vendors ["webkit" "moz"]
                                   ::stylefy/auto-prefix #{:color}
                                   ::stylefy/scope [[:.scoped-box {:color "purple"}]]}}}]
      (is (= (conversion/style->css {:props style :hash (hashing/hash-style style)} {:pretty-print? false})
             "._stylefy_-839716516{}@media(max-width:500px){._stylefy_-839716516{}}@media(max-width:500px){.scoped-box ._stylefy_-839716516{color:purple;-webkit-color:purple;-moz-color:purple}}")))))
