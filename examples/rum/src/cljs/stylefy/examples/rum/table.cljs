(ns stylefy.examples.rum.table
  (:require [rum.core :as rum]
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

(rum/defc table < rum/reactive [options schema data]
  [:div (use-style table-style)
   [:table (use-sub-style table-style :table)
    [:thead (use-sub-style table-style :thead)
     [:tr
      (doall
        (map-indexed
          (fn [column-index s]
            [:th (merge {:key column-index} (use-sub-style table-style :cell))
             (:title s)])
          schema))]]
    [:tbody
     (doall
       (map-indexed
         (fn [data-index data-item]
           [:tr (merge {:key data-index}
                       (use-sub-style table-style (if (= (rem data-index 2) 0)
                                                    :row-even
                                                    :row-odd)))
            (doall (map-indexed
                     (fn [column-index s]
                       [:td (merge {:key column-index} (use-sub-style table-style :cell))
                        ((:name s) data-item)])
                     schema))])
         data))]]])