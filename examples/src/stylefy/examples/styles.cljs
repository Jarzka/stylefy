(ns stylefy.examples.styles
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy]))

(def phone-width "414px")

(stylefy/keyframes "simple-animation"
                   [:0%
                    {:background-color "red"}]
                   [:100%
                    {:background-color "blue"}])

(stylefy/font-face {:font-family "open_sans"
                    :src "url('../fonts/OpenSans-Regular-webfont.woff') format('woff')"
                    :font-weight "normal"
                    :font-style "normal"})

;; Custom named classes can be created, but should only be used when working with
;; other libraries / frameworks. Normally there is no need to create custom classes
;; when using stylefy.
(stylefy/class "background-transition"
               {:transition "background-color 1s"})

(def general-styles {:font-family "open_sans"})
(def root {:margin "10px"})
(def clickable {:cursor :pointer})

(def generic-container {:padding "25px"
                        :background-color "#BBBBBB"
                        :border "1px solid black"})

(def generic-button (merge {:border "1px solid black"
                            :background-color "#888888"
                            :border-radius "5px"
                            :color "white"
                            :text-align :center
                            :font-size "1.2em"
                            :padding "5px"
                            :width "150px"
                            :height "38px"
                            :margin-right "5px"
                            :margin-bottom "5px"
                            ::stylefy/vendors ["webkit" "moz" "o"]
                            ::stylefy/auto-prefix #{:border-radius}
                            ::stylefy/mode {:hover {:background-color "#AAAAAA"}}}
                           clickable))

(def primary-button (merge generic-button {:background-color "rgb(88, 121, 193)"
                                           ::stylefy/mode {:hover {:background-color "rgb(98, 131, 213)"}}}))

(def secondary-button (merge generic-button {:background-color "rgb(88, 121, 152)"
                                             ::stylefy/mode {:hover {:background-color "rgb(98, 131, 172)"}}}))

(def simple-box {:border "1px solid black"
                 :background-color "#FFDDDD"
                 :text-align :center
                 :padding "5px"
                 :width "150px"
                 :height "150px"})

(def stateful-component {:on (merge generic-container
                                    {:background-color "#22FF22"
                                     :border-radius "10px"
                                     ::stylefy/media {{:max-width phone-width}
                                                      {:border-radius 0}}})
                         :off (merge
                                generic-container
                                {:background-color "#333333"
                                 :border-radius "10px"
                                 :color "white"
                                 ::stylefy/media {{:max-width phone-width}
                                                  {:border-radius 0}}})})

(def boostrap-navbar-overrides {:background-color "#DDDDDD"
                                ::stylefy/class-prefix "bootstrap-override"
                                ::stylefy/sub-styles {:link {:font-weight "bold"}}})

(def boostrap-navbar {:background-color "#DDDDDD"
                      ::stylefy/sub-styles {:link {:font-weight "bold"}}
                      ::stylefy/with-classes ["nav" "nav-pills"]})

(def column {:padding "5px"
             :color "white"})

(def responsive-layout
  {:display :flex
   :flex-direction :row
   ::stylefy/sub-styles
   {:column1 (merge column
                    {:background-color "#AA0000"
                     :flex 1})
    :column2 (merge column
                    {:background-color "#00AA00"
                     :flex 2})
    :column3 (merge column
                    {:background-color "#0000AA"
                     :flex 1
                     ;; sub-styles can also contain sub-styles
                     ::stylefy/sub-styles {:text {:color "red"}}
                     ::stylefy/media {{:max-width phone-width} {:background-color "#000000"}}})}
   ::stylefy/media {{:max-width phone-width} {:display :block}}})

(def animated-box (merge simple-box
                         {:animation-name "simple-animation"
                          :animation-duration "3s"
                          :animation-iteration-count "infinite"}))