(defproject stylefy/generic-dom "3.0.0"
  :description "Generic DOM for stylefy"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.520"]
                 [prismatic/dommy "1.1.0"]]
  :source-paths ["src/cljs"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/stylefy-generic-dom.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "prod"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/stylefy-generic-dom.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :advanced}}]})
