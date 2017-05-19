(ns stylefy.examples.main
  (:require [reagent.core :as r]
            [stylefy.examples.styles :as styles]
            [cljs.core.async :refer [<! timeout]]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn- button-style-by-type [type]
  (case type
    :primary styles/primary-button
    :secondary styles/secondary-button
    styles/generic-button))

(defn- button
  ([text] (button text #() nil))
  ([text action-fn type]
   [:div (merge (use-style (button-style-by-type type))
                {:on-click action-fn})
    text]))

(defn- button-container []
  [:div (use-style styles/generic-container)
   [button "Hello World!"]
   [button "Primary" #() :primary]
   [button "Secondary" #() :secondary]])

(defn stuff-box []
  [:div (use-style styles/stuff-box)
   [:p "This container contains multiple elements, like texts and lists."]
   [:div (use-sub-style styles/stuff-box :box)]
   [:ul (use-sub-style styles/stuff-box :list)
    [:li "List element 1"]
    [:li "List element 2"]
    [:li "List element 3"]]])

(defn stateful-component []
  (let [switch #(if (= :on %) :off :on)
        state (r/atom :on)]
    (fn []
      [:div (use-style (@state styles/stateful-component))
       (if (= @state :on)
         [:p "The component's current state is ON"]
         [:p "The component's current state is ON"])
       [button "Switch" #(reset! state (switch @state)) :primary]])))

(defn- stress-test-item [index]
  (fn [style]
    [:div style index]))

(defn- create-random-style [index]
  {:padding "5px"
   :width (str index "%")
   :height "30px"
   :margin-bottom "5px"
   :background-color (str "#"
                          (rand-int 10)
                          (rand-int 10)
                          (rand-int 10)
                          (rand-int 10)
                          (rand-int 10)
                          (rand-int 10))})

(defn stress-test []
  (let [state (r/atom :hidden)
        styles (mapv create-random-style (range 0 100))]
    (fn []
      [:div (use-style styles/generic-container)

       (if (= @state :visible)
         (map-indexed (fn [index component]
                        ^{:key index}
                        [component (use-style (get styles index))])
                      (map stress-test-item (range 0 100)))
         [button
          (if (= @state :generating)
            "Generating..."
            "Generate")
          #(when (not= @state :generating)
             (go (reset! state :generating)
                 (<! (timeout 10))
                 (reset! state :visible)))
          :primary])])))

(defn- examples []
  [:div
   [:h1 "Generic button"]
   [:p "Just a simple styled button to begin with."]
   [button "Generic button"]

   [:h1 "Different type of buttons in a container"]
   [:p "Styled by merging styles"]
   [button-container]

   [:h1 "Component with multiple sub elements"]
   [:p "Styled by using sub-styles"]
   [stuff-box]

   [:h1 "Component with internal state"]
   [:p "This component contains a different style in different states. The styles are generated and inserted into DOM on-demand."]
   [stateful-component]

   [:h1 "Stress test"]
   [:p "Styles are added into DOM on-demand, when components using them are mounted for the first time. Click the button below to dunamically generate 100 components with uniquer styles"]
   [stress-test]])

(defn start []
  (r/render examples (.getElementById js/document "app")))