(ns stylefy.examples.grid
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]]
            [stylefy.examples.styles :as styles]))

(def grid-style {;; Default style uses Flexbox as fallback
                 :display "flex"
                 :flex-direction "row"
                 :flex-wrap "wrap"
                 :.stylefy/media {{:max-width styles/phone-width}
                                  {:display "block"}}
                 ;; Use CSS Grid style if it is supported by the browser
                 ;; If the browser does not support CSS Grid or feature queries at all, this
                 ;; block is simply ignored.
                 ::stylefy/supports {"display: grid"
                                     {:display "grid"
                                      :grid-template-columns "1fr 1fr 1fr"
                                      ;; Make CSS Grid responsive
                                      ::stylefy/media {{:max-width styles/phone-width}
                                                       {:grid-template-columns "1fr"}}}}})

(defn create-box-style [color]
  {:background-color color
   :width "33.333%"
   :height "200px"
   ::stylefy/supports {"display: grid"
                       ;; Element width is well managed by grid.
                       {:width "auto"}}})

(defn grid []
  [:div (use-style grid-style)
   [:div (use-style (create-box-style "#000000"))]
   [:div (use-style (create-box-style "#AA0000"))]
   [:div (use-style (create-box-style "#00AA00"))]
   [:div (use-style (create-box-style "#0000AA"))]
   [:div (use-style (create-box-style "#00AAAA"))]
   [:div (use-style (create-box-style "#AAAA00"))]
   [:div (use-style (create-box-style "#AA00AA"))]])