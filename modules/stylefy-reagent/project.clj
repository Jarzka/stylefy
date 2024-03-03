(defproject stylefy/reagent "3.0.0"
  :description "ReagentDOM for stylefy"
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.11.132"]
                 [prismatic/dommy "1.1.0"]
                 [reagent "1.2.0"]
                 [org.clojure/core.async "1.6.681"]]
  :plugins [[lein-ancient "1.0.0-RC4-SNAPSHOT"]]
  :source-paths ["src/cljs"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/stylefy-reagent.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "prod"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/stylefy-reagent.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :advanced}}]})
