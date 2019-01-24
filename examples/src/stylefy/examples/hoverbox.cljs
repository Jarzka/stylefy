(ns stylefy.examples.hoverbox
  (:require [reagent.core :as r]
            [garden.stylesheet :refer [at-media]]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]]))

(def mobile-media-query {:max-width "550px"})

(def hoverbox-style
  {:width "500px"
   :height "200px"
   :padding "33px"
   :margin-bottom "10px"
   :background-color "#55AA55"
   ::stylefy/class-prefix "seppo"
   ::stylefy/mode {:hover {:background-color "#99DD99"}}
   ::stylefy/sub-styles {:innerbox {:width "100%"
                                    :height "100%"
                                    :background-color "#444444"}}
   ;; Manual mode is a powerful way to define styles for child components when you absolutely need to write
   ;; custom CSS selectors. However, great power comes with a great responsibility.
   ;; Since manual style definitions rely on Garden syntax, stylefy's special keyword definitions are not supported.
   ;; You are pretty much on your own here. Manual styling should be an exception rather than a rule.
   ::stylefy/manual [[:&:hover [:.innerbox
                                {:background-color "#999999"}
                                [:&:hover {:background-color "#EEEEEE"}]]]
                     (at-media mobile-media-query [:&:hover [:.innerbox
                                                             {:background-color "#666666"}
                                                             [:&:hover {:background-color "#111111"}]]])]
   ::stylefy/media {mobile-media-query
                    {:width "200px"
                     ::stylefy/mode {:hover {:background-color "#336633"}}}}})

(defn hoverbox []
  [:div (use-style hoverbox-style)
   [:div.innerbox (use-sub-style hoverbox-style :innerbox)]])