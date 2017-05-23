(ns stylefy.examples.grid
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]]))

(def grid-style {::stylefy/sub-styles
                 {:thead {:background-color "#66AA66"}
                  :table {:border-collapse "collapse"}
                  :row-even {:background-color "#DDDDDD"
                             ::stylefy/mode {:hover {:background-color "#BBBBBB"}}}
                  :row-odd {:background-color "#EEEEEE"
                            ::stylefy/mode {:hover {:background-color "#BBBBBB"}}}
                  :cell {:padding "5px"}}})

(defn grid [options schema data]
  [:div (use-style grid-style)
   [:table (use-sub-style grid-style :table)
    [:thead (use-sub-style grid-style :thead)
     [:tr
      (map-indexed
        (fn [column-index s]
          ^{:key column-index}
          [:th (use-sub-style grid-style :cell)
           (:title s)])
        schema)]]
    [:tbody
     (map-indexed
       (fn [data-index data-item]
         ^{:key data-index}
         [:tr (use-sub-style grid-style (if (= (rem data-index 2) 0)
                                          :row-even
                                          :row-odd))
          (map-indexed
            (fn [column-index s]
              ^{:key column-index}
              [:td (use-sub-style grid-style :cell)
               ((:name s) data-item)])
            schema)])
       data)]]])