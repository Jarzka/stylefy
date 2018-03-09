(ns stylefy.examples.full-page
  (:require [reagent.core :as r]
            [cljs-time.core :as t]
            [cljs.core.async :refer [<! timeout]]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(def phone-width "514px")
(def tablet "770px")

(def header {:display :flex
             :flex-direction :column
             :background-color "rgb(3, 84, 114)" ; Fallback
             :background-image "url(images/background.jpg)"
             :background-size "100%"
             :text-transform "uppercase"
             :color "white"
             :padding "15px"
             :text-align :center
             :justify-content :center
             :align-self :center
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
                   :padding "15px"
                   ::stylefy/media {{:max-width tablet} {:border-right "none"}}})

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

(def lorem "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum")

(def clock-body {:position :relative
                 :border "4px solid rgb(3, 84, 114)"
                 :background-color "#EEEEEE"
                 :border-radius "100%"
                 :width "200px"
                 :height "200px"
                 :margin-left "auto"
                 :margin-right "auto"})

(defn clock-hand [type time-value]
  (let [second-to-deg #(str "rotate(" (- (* (/ % 60) 360) 90) "deg)")
        minute-to-deg second-to-deg
        hour-to-deg #(str "rotate(" (- (* (/ % 24) 360) 90) "deg)")]
    {:position :relative
     :top "50%"
     :left "50%"
     :width (case type :second "90px"
                       :minute "90px"
                       :hour "40px")
     :height (case type :second "2px"
                        :minute "4px"
                        :hour "6px")
     :background-color (case type :second "red"
                                  :minute "black"
                                  :hour "black")
     :transform-origin "top left"
     :transform (case type :second (second-to-deg time-value)
                           :minute (minute-to-deg time-value)
                           :hour (hour-to-deg time-value))}))

(defn clock []
  (let [time (r/atom (t/now))
        updating? (atom true)]
    (r/create-class
      {:component-will-mount #(go-loop []
                                       (<! (timeout 1000))
                                       (when @updating?
                                         (reset! time (t/now))
                                         (recur)))
       :component-will-unmount #(reset! updating? false)
       :render
       (fn []
         [:div (use-style clock-body)
          ;; Clock hands should not use stylefy, because clock-hand will generate
          ;; many different styles; we do not want to create a new CSS class from each different result.
          ;; In this case, inline style is a better option.
          [:div {:style (clock-hand :second (t/second @time))}]
          [:div {:style (clock-hand :minute (t/minute @time))}]
          [:div {:style (clock-hand :hour (t/hour @time))}]])})))

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
       [:p lorem]]
      [:article
       [:h1 "CSS Clock"]
       [clock]]
      [:article
       [:h1 "Lorem ipsum 3"]
       [:p lorem]
       [:div (use-style {:color "red" :margin-right "5px"} {:class "text-left text-uppercase"})
        "Text left uppercase"]
       [:div (use-style {:color "red" :margin-right "5px"} {:class "text-uppercase text-center"})
        "Text center uppercase"]
       [:div (use-style {:color "red" :margin-right "5px"} {:class ["text-right" "text-uppercase"]})
        "Text right uppercase"]]]]
    [:aside.col-sm-4
     [:img (merge
             (use-style meme)
             {:src "images/meme.jpg"})]]]
   [:footer (use-style footer)
    "Pretty much useless footer"]])