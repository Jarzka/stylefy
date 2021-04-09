(defproject stylefy-ssr-examples "1.0-SNAPSHOT"
  :description "stylefy SSR examples"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [prismatic/dommy "1.1.0"]
                 [hiccup "1.0.5"]
                 [garden "1.3.6"]
                 [org.clojure/core.async "0.3.443"]]
  :repl-options {:init-ns stylefy.examples.ssr.main
                 :port 1339
                 :timeout 120000}
  :source-paths ["src/clj"
                 "src/cljc"

                 "../../src/clj"
                 "../../src/cljc"])
