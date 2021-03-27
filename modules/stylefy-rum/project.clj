(defproject stylefy-rum "3.0-SNAPSHOT"
  :description "RumDOM for stylefy"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.520"]
                 [prismatic/dommy "1.1.0"]
                 [rum "0.12.4"]
                 [org.clojure/core.async "0.3.443"]]
  :source-paths ["src/cljs"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/stylefy-rum.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "prod"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/stylefy-rum.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :advanced}}]})
