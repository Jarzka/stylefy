(defproject stylefy/rum "3.0.0"
  :description "RumDOM for stylefy"
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.11.132"]
                 [prismatic/dommy "1.1.0"]
                 [rum "0.12.11"]
                 [org.clojure/core.async "1.6.681"]]
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
