(defproject stylefy-examples "1.0-SNAPSHOT"
  :description "stylefy Reagent examples"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.520"]
                 [prismatic/dommy "1.1.0"]
                 [hiccup "1.0.5"]
                 [garden "1.3.6"]
                 [reagent "0.6.0"]
                 [org.clojure/core.async "0.3.443"]
                 [com.andrewmcveigh/cljs-time "0.5.0"]]
  :repl-options {:init-ns stylefy.examples.main
                 :port 1339
                 :timeout 120000}
  :source-paths ["src/clj"
                 "src/cljs"
                 "src/cljc"

                 "../../src/clj"
                 "../../src/cljs"
                 "../../src/cljc"

                 "../../modules/stylefy-reagent/src/cljs"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/clj"
                                       "src/cljs"
                                       "../src/cljc"
                                       "../src/cljs"]
                        :compiler {:output-to "resources/public/js/stylefy.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "prod"
                        :source-paths ["src" "../src"]
                        :compiler {:output-to "resources/public/js/stylefy.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :advanced}}]})
