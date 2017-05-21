(ns stylefy.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [stylefy.tests.core-test :as core]))

(doo-tests 'stylefy.tests.core-test)
