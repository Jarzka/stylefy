(defproject stylefy "0.3"
  :description "Library for styling UI components"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.542"]
                 [prismatic/dommy "1.1.0"]
                 [reagent "0.6.0"]
                 [garden "1.3.2"]]
  :plugins [[lein-cljsbuild "1.1.2"]
            [lein-doo "0.1.7"]
            [lein-codox "0.10.3"]]
  :codox {:source-paths ["src"]}
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