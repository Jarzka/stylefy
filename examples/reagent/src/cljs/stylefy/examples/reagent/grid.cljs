(ns stylefy.examples.reagent.grid
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]]
            [stylefy.examples.reagent.styles :as styles]))

; Map syntax

(def grid-style-map-syntax {; Default style uses Flexbox as fallback
                            :display "flex"
                            :flex-direction "row"
                            :flex-wrap "wrap"
                            :margin-bottom "1rem"
                            ::stylefy/media {{:max-width styles/phone-width}
                                             {:display "block"}}
                            ; Use CSS Grid style if it is supported by the browser.
                            ; If the browser does not support CSS Grid or feature queries at all, this
                            ; block is simply ignored.
                            ::stylefy/supports {"display: grid"
                                                {:display "grid"
                                                 :grid-template-columns "1fr 1fr 1fr"
                                                 ; Make CSS Grid responsive
                                                 ::stylefy/media {{:max-width styles/phone-width}
                                                                  {:grid-template-columns "1fr"}}}}})

(defn create-box-style-map-syntax [color]
  {:background-color color
   :width "33.333%"
   :height "200px"
   ::stylefy/media {{:max-width styles/phone-width}
                    {:width "100%"}}
   ::stylefy/supports {"display: grid"
                       ; Element width is always well managed by grid.
                       {:width "auto"}}})

(defn grid-map-syntax []
  [:<>
   [:h3 "Map syntax"]
   [:div (use-style grid-style-map-syntax)
    [:div (use-style (create-box-style-map-syntax "#000000"))]
    [:div (use-style (create-box-style-map-syntax "#AA0000"))]
    [:div (use-style (create-box-style-map-syntax "#00AA00"))]
    [:div (use-style (create-box-style-map-syntax "#0000AA"))]
    [:div (use-style (create-box-style-map-syntax "#00AAAA"))]
    [:div (use-style (create-box-style-map-syntax "#AAAA00"))]
    [:div (use-style (create-box-style-map-syntax "#AA00AA"))]]])

; Vector syntax

(def grid-style-vector-syntax {; Default style uses Flexbox as fallback
                               :display "flex"
                               :flex-direction "row"
                               :flex-wrap "wrap"
                               :margin-bottom "1rem"
                               ::stylefy/media {{:max-width styles/phone-width}
                                                {:display "block"}}
                               ; Use CSS Grid style if it is supported by the browser.
                               ; If the browser does not support CSS Grid or feature queries at all, this
                               ; block is simply ignored.
                               ::stylefy/supports [["display: grid"
                                                    {:display "grid"
                                                     :grid-template-columns "1fr 1fr 1fr"
                                                     ; Make CSS Grid responsive
                                                     ::stylefy/media {{:max-width styles/phone-width}
                                                                      {:grid-template-columns "1fr"}}}]]})

(defn create-box-style-vector-syntax [color]
  {:background-color color
   :width "33.333%"
   :height "200px"
   ::stylefy/media {{:max-width styles/phone-width}
                    {:width "100%"}}
   ::stylefy/supports [["display: grid"
                        ; Element width is always well managed by grid.
                        {:width "auto"}]]})

(defn grid-vector-syntax []
  [:<>
   [:h3 "Vector syntax"]
   [:div (use-style grid-style-vector-syntax)

    [:div (use-style (create-box-style-vector-syntax "#000000"))]
    [:div (use-style (create-box-style-vector-syntax "#AA0000"))]
    [:div (use-style (create-box-style-vector-syntax "#00AA00"))]
    [:div (use-style (create-box-style-vector-syntax "#0000AA"))]
    [:div (use-style (create-box-style-vector-syntax "#00AAAA"))]
    [:div (use-style (create-box-style-vector-syntax "#AAAA00"))]
    [:div (use-style (create-box-style-vector-syntax "#AA00AA"))]]])