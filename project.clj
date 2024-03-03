(defproject stylefy "3.2.0"
  :description "Library for styling UI components"
  :url "https://github.com/Jarzka/stylefy"
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.11.132"]
                 [prismatic/dommy "1.1.0"]
                 [garden "1.3.10"]
                 [org.clojure/core.async "1.6.681"]]
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-doo "0.1.7"]
            [lein-codox "0.10.6"]
            [lein-ancient "1.0.0-RC4-SNAPSHOT"]]
  :codox {:language :clojurescript
          :output-path "doc"
          :source-paths ["src"]}
  :source-paths ["src/clj" "src/cljc" "src/cljs"]
  :cljsbuild {:builds [{:id "test"
                        :source-paths ["src/cljs" "src/cljc" "src/clj" "test"]
                        :compiler {:output-to "target/cljs/test/test.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}
                       {:id "prod"
                        :source-paths ["src/cljs" "src/cljc" "src/clj"]
                        :compiler {:output-to "stylefy.js"
                                   :optimizations :advanced}}]})
