(ns stylefy.chrome-test
  (:require  [clojure.test :refer [deftest]]
             [clj-chrome-devtools.cljs.test :refer [build-and-test]]))


(deftest chrome-test
  (build-and-test "test"
                  '[stylefy.tests.core-test
                    stylefy.tests.style-hash-test
                    stylefy.tests.conversion-test]))
