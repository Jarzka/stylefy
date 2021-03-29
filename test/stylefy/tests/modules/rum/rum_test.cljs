(ns stylefy.tests.modules.rum.rum-test
  (:require [cljs.test :as test :refer-macros [deftest is testing]]
            [stylefy.core :as stylefy]
            [stylefy.rum.dom :as stylefy-rum-dom]))

(deftest dom-update-is-requested
  (let [dom-update-requested? (atom false)]
    (with-redefs [stylefy-rum-dom/request-asynchronous-dom-update #(reset! dom-update-requested? true)]
                 (is (nil? (stylefy/init {:dom stylefy-rum-dom/->RumDom})))
                 (stylefy/use-style {:color "red"})
                 (is (true? @dom-update-requested?)))))
