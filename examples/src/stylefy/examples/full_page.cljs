(ns stylefy.examples.full-page
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]]))

(def phone-width "514px")

(def header {:display :flex
             :flex-direction :column
             :background-image "url(images/background.jpg)"
             :background-size "100%"
             :text-transform "uppercase"
             :color "white"
             :text-align :center
             :justify-content :center
             :align-self :center
             :height "400px"
             ::stylefy/sub-styles
             {:infinity {:font-size "150px"
                         :margin-top "-0.4em"
                         :margin-bottom "-0.4em"
                         ::stylefy/media {{:max-width phone-width} {:font-size "75px"}}}
              :h1 {:font-size "80px"
                   ::stylefy/media {{:max-width phone-width} {:font-size "40px"}}}
              :h2 {:font-size "40px"
                   :letter-spacing "0.5em"
                   ::stylefy/media {{:max-width phone-width} {:font-size "20px"}}}}})

(def bs-row-overrides {:margin-right 0
                       :margin-left 0})

(def main {:margin-top "5px"
           :margin-bottom "15px"})

(def main-content {:border-right "1px solid black"
                   :padding "15px"})

(def aside {:padding "10px"})

(def clearfix {::stylefy/mode {:after {:clear "both"
                                       :content "." ;
                                       :display "block"
                                       :height 0
                                       :line-height 0
                                       :visibility "hidden"}}})

(def footer {:background-color "#BBBBBB"
             :padding "5px"
             :text-align :center})

(def meme {:width "100%"
           :margin-top "1em"
           :margin-bottom "1em"})

(defn full-page []
  [:div
   [:header (use-style header)
    [:h1 (use-sub-style header :infinity) "∞"]
    [:h1 (use-sub-style header :h1) "Full Page Style"]
    [:h1 (use-sub-style header :h2) "by stylefy"]]
   [:div.row (use-style (merge bs-row-overrides clearfix))
    [:div.main.col-sm-8 (use-style main)
     [:div (use-style main-content)
      [:article
       [:h1 "Lorem ipsum 1"]
       [:p "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"]]
      [:article
       [:h1 "Lorem ipsum 2"]
       [:p "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"]]
      [:article
       [:h1 "Lorem ipsum 3"]
       [:p "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"]]]]
    [:aside.col-sm-4
     [:img (merge
             (use-style meme)
             {:src "images/meme.png"})]
     [:p "At least if you use stylefy ;)"]]]
   [:footer (use-style footer)
    "Pretty much useless footer"]])