(defproject stylefy "1.13.1"
  :description "Library for styling UI components"
  :url "https://github.com/Jarzka/stylefy"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [prismatic/dommy "1.1.0"]
                 [reagent "0.7.0"]
                 [garden "1.3.6"]
                 [org.clojure/core.async "0.3.443"]]
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-doo "0.1.7"]
            [lein-codox "0.10.6"]]
  :profiles {:dev {:dependencies [[clj-chrome-devtools "20180310"]]}}
  :codox {:language :clojurescript
          :output-path "doc"
          :source-paths ["src"]}
  :cljsbuild {:builds [{:id "test"
                        :source-paths ["src" "test"]
                        :compiler {:output-to "target/cljs/test/test.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:output-to "stylefy.js"
                                   :optimizations :advanced}}]})
