(ns stylefy.examples.table
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]]))

(def table-style {:margin-bottom "1rem"
                  ::stylefy/sub-styles
                  {:thead {:background-color "#66AA66"}
                   :table {:border-collapse "collapse"}
                   :row-even {:background-color "#DDDDDD"
                              ::stylefy/mode {:hover {:background-color "#BBBBBB"}}}
                   :row-odd {:background-color "#EEEEEE"
                             ::stylefy/mode {:hover {:background-color "#BBBBBB"}}}
                   :cell {:padding "5px"}}})

(defn table [options schema data]
  [:div (use-style table-style)
   [:table (use-sub-style table-style :table)
    [:thead (use-sub-style table-style :thead)
     [:tr
      (doall
        (map-indexed
          (fn [column-index s]
            ^{:key column-index}
            [:th (use-sub-style table-style :cell)
             (:title s)])
          schema))]]
    [:tbody
     (doall
       (map-indexed
         (fn [data-index data-item]
           ^{:key data-index}
           [:tr (use-sub-style table-style (if (= (rem data-index 2) 0)
                                            :row-even
                                            :row-odd))
            (doall (map-indexed
                     (fn [column-index s]
                       ^{:key column-index}
                       [:td (use-sub-style table-style :cell)
                        ((:name s) data-item)])
                     schema))])
         data))]]])