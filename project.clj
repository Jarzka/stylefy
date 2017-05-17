(defproject stylefy "0.1-alpha1"
  :description "Library for styling UI components"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.542"]]
  :plugins [[lein-cljsbuild "1.1.2"]
            [garden "1.3.2"]
            [lein-doo "0.1.7"]]
  :cljsbuild {:builds [{:id "test"
                        :source-paths ["src" "test/cljs"]
                        :compiler {:output-to "target/cljs/test/test.js"
                                   :output-dir "target/cljs/test"
                                   :optimizations :none
                                   :pretty-print true
                                   :source-map true
                                   :main stylefy.runner}}
                       {:id "prod"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "stylefy.js"
                                   :optimizations :advanced}}]})