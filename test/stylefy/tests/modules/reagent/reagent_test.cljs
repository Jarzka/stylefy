(ns stylefy.tests.modules.reagent.reagent-test
  (:require [cljs.test :as test :refer-macros [deftest is testing]]
            [stylefy.core :as stylefy]
            [stylefy.reagent.dom :as stylefy-reagent-dom]))

(deftest dom-update-is-requested
  (let [dom-update-requested? (atom false)]
    (with-redefs [stylefy-reagent-dom/request-asynchronous-dom-update #(reset! dom-update-requested? true)]
                 (is (nil? (stylefy/init {:dom stylefy-reagent-dom/->ReagentDom})))
                 (stylefy/use-style {:color "red"})
                 (is (true? @dom-update-requested?)))))
