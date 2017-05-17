(defproject stylefy-examples "0.1"
  :description "Stylefy Examples"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.542"]
                 [figwheel "0.5.4-7"]
                 [reagent "0.6.0-rc"]]
  :plugins [[lein-cljsbuild "1.1.2"]
            [lein-figwheel "0.5.4-7"]]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src" "../src"]
                        :figwheel {:on-jsload "stylefy.examples.main/start"}
                        :compiler {:output-to "resources/public/js/compiled/stylefy.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :optimizations :none
                                   :source-map true}}]})