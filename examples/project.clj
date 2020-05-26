(defproject stylefy-examples "1.0-SNAPSHOT"
  :description "Stylefy Examples"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.520"]
                 [org.clojure/tools.logging "1.1.0"]
                 [prismatic/dommy "1.1.0"]
                 [hiccup "1.0.5"]
                 [garden "1.3.6"]
                 [reagent "0.6.0"]
                 [org.clojure/core.async "0.3.443"]
                 [com.andrewmcveigh/cljs-time "0.5.0"]
                 [figwheel "0.5.18"]]
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.18"]]
  :repl-options {:init-ns stylefy.examples.main
                 :port 1339
                 :timeout 120000}
  :source-paths ["src/clj"
                 "src/cljc"
                 "../src/clj"
                 "../src/cljc"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/clj"
                                       "src/cljs"
                                       "../src/clj"
                                       "../src/cljc"
                                       "../src/cljs"]
                        :figwheel {:on-jsload "stylefy.examples.main/start"}
                        :compiler {:output-to "resources/public/js/dev/stylefy.js"
                                   :output-dir "resources/public/js/dev/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "prod"
                        :source-paths ["src" "../src"]
                        :compiler {:output-to "resources/public/js/stylefy.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :advanced}}]})