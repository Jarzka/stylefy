(ns stylefy.examples.main
  (:require
    [garden.units :as gu]
    [garden.color :as gc]
    [rum.core :as rum]
    [cljs.core.async :refer [<! timeout]]
    [stylefy.core :as stylefy :refer [use-style sub-style use-sub-style]]
    [stylefy.cache :as stylefy-cache]
    [stylefy.rum.dom :as stylefy-rum-dom])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [garden.def :refer [defcssfn]]))

(rum/defc main < rum/reactive []
  [:div (use-style {:color "green"})
   "Rum is running!"])

(defn ^:export start []
  (stylefy/init {:use-caching? false  ; TODO For testing...
                 :dom (stylefy-rum-dom/->RumDom)
                 ;:multi-instance {:base-node nil
                 ;                 :instance-id "example"}
                 :use-custom-class-prefix? true
                 :cache-options {:expires (* 1 60 60 24 7)}
                 :global-vendor-prefixes {::stylefy/vendors ["webkit" "moz" "o"]
                                          ::stylefy/auto-prefix #{:border-radius}}})
  (rum/mount (main) (.getElementById js/document "app")))
