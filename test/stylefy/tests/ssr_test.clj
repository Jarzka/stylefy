(ns stylefy.tests.ssr-test
  (:require [clojure.test :refer :all]
            [hiccup.core :refer :all]
            [stylefy.core :as stylefy :refer [use-style]]
            [clojure.string :as str]))

; Style definitions for SSR tests:

(def phone-width "414px")

(def css-props {:border "1px solid black"
                :background-color "#FFDDDD"
                :text-align :center
                :padding "5px"
                :width "150px"
                :height "150px"})

(def style-box (merge css-props
                      {:stylefy.core/mode {:hover {:background-color "red"}
                                           :after {:clear "both"
                                                   :content "'.'"
                                                   :display "block"
                                                   :height 0
                                                   :line-height 0
                                                   :visibility "hidden"}}
                       :stylefy.core/vendors #{"moz"}
                       :stylefy.core/auto-prefix #{:border-radius}
                       :stylefy.core/sub-styles {:sub-box {:border "1px solid black"}}
                       ::stylefy/media {{:max-width phone-width}
                                        {:display "block"}}
                       ;; Use CSS Grid style if it is supported by the browser.
                       ;; If the browser does not support CSS Grid or feature queries at all, this
                       ;; block is simply ignored.
                       ::stylefy/supports {"display: grid"
                                           {:display "grid"
                                            :grid-template-columns "1fr 1fr 1fr"
                                            ;; Make CSS Grid responsive
                                            ::stylefy/media {{:max-width phone-width}
                                                             {:grid-template-columns "1fr"}}}}}))

; HTML

(defn sub-component [message]
  [:span (use-style {:color :red}) message])

(defn example-component []
  [:html
   [:head
    [:title "Example"]

    [:meta {:content "width=device-width, initial-scale=1, maximum-scale=1", :name "viewport"}]
    [:meta {:charset "utf-8"}]

    [:style {:id "_stylefy-server-styles_"} "_stylefy-server-styles-content_"]
    [:style {:id "_stylefy-constant-styles_"}]
    [:style {:id "_stylefy-styles_"}]]
   [:body (use-style style-box)
    [:div (sub-component "Example text is red")]]
   [:script {:src "/js/main.js"}]])

; Query

(defn init-stylefy []
  (stylefy/init))

(defn index-query []
  (stylefy/query-with-styles
    (fn [] (html (example-component)))))

(deftest query-with-styles
  (init-stylefy)
  (let [result (index-query)]
    (is (str/includes? result "<html>"))
    (is (str/includes? result "<style id=\"_stylefy-server-styles_\">"))
    (is (str/includes? result "_stylefy_-1381757477"))
    (is (str/includes? result "._stylefy_-1381757477:hover"))
    (is (str/includes? result "._stylefy_-1381757477:after"))
    (is (str/includes? result "@media (max-width: 414px"))
    (is (str/includes? result "supports (display: grid)"))
    (is (str/includes? result "<body class=\"_stylefy_-1381757477\">"))
    (is (str/includes? result "<span class=\"_stylefy_1606470837\">Example text is red</span>"))))