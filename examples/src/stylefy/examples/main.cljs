(ns stylefy.examples.main
  (:require [reagent.core :as r]
            [stylefy.examples.styles :as styles]
            [stylefy.examples.table :as table]
            [stylefy.examples.grid :as grid]
            [stylefy.examples.full-page :as full-page]
            [stylefy.examples.custom-tags :as custom-tags]
            [cljs.core.async :refer [<! timeout]]
            [stylefy.core :as stylefy :refer [use-style sub-style use-sub-style]]
            [stylefy.cache :as stylefy-cache])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn- button-style-by-type [type]
  (case type
    :primary styles/primary-button
    :secondary styles/secondary-button
    styles/generic-button))

(defn- button
  ([text] (button text #() nil))
  ([text action-fn type]
   [:div (use-style (button-style-by-type type)
                    {:on-click action-fn})
    text]))

(defn- button-container []
  [:div (use-style styles/generic-container)
   [button "Hello World!"]
   [button "Primary" #(.log js/console "Primary button clicked") :primary]
   [button "Secondary" #(.log js/console "Secondary button clicked") :secondary]])

(defn stateful-component []
  (let [switch #(if (= :on %) :off :on)
        state (r/atom :on)]
    (r/create-class
      ;; Make sure all state styles are prepared to be used.
      ;; This is not mandatory, stylefy prepares styles on-demand when use-style
      ;; is called and returns the given style as inline style until the style is
      ;; converted to CSS class and added to DOM.
      ;; However, the state styles contain media queries, which cannot be
      ;; present as inline style, so stylefy would hide the component for a small amount of time
      ;; until the styles are added into DOM. We want that all state styles are converted and
      ;; present in the DOM when this component is created, so we prepare the styles first.
      {:component-will-mount #(stylefy/prepare-styles (vals styles/stateful-component))
       :render
       (fn []
         [:div (use-style (@state styles/stateful-component))
          (if (= @state :on)
            [:p "The component's current state is ON"]
            [:p "The component's current state is OFF"])
          [button "Switch" #(reset! state (switch @state)) :primary]])})))

(defn- stress-test-item [index]
  (fn [style]
    [:div style index]))

(defn- last-number [number]
  (subs (str number) (- (count (str number)) 1) (count (str number))))

(defn- create-bar-style [index]
  ;; Generates unique, but predictable style, so that caching can be tested.
  {:padding "5px"
   :width (str (/ index 10) "%")
   :height "30px"
   :color "red"
   :margin-bottom "5px"
   :background-color (str "#"
                          (last-number index)
                          (last-number index)
                          (last-number index)
                          (last-number index)
                          (last-number index)
                          (last-number index))})

(defn stress-test []
  (let [components-count 1000
        state (r/atom :hidden)
        start-time (atom nil)
        styles (mapv create-bar-style (range 0 components-count))]
    (fn []
      [:div (use-style styles/generic-container)

       [button
        (case @state
          :hidden "Generate"
          :generating "Generating..."
          :visible "Hide")
        #(case @state
           :hidden (go (reset! state :generating)
                       (<! (timeout 100))
                       (reset! start-time (.getTime (js/Date.)))
                       (reset! state :visible))
           :visible (reset! state :hidden))
        :primary]

       (when (= @state :visible)
         (map-indexed (fn [index component]
                        (when (= index (- components-count 1))
                          (.log js/console (str "Generation time: "
                                                (- (.getTime (js/Date.)) @start-time)
                                                " ms.")))

                        ^{:key index}
                        [component (use-style (get styles index))])
                      (map stress-test-item (range 0 components-count))))])))

(defn- bs-navbar-item-legacy-syntax [index index-atom text]
  ;; Since version 1.3.0: use-style now supports HTML attributes as the second parameter.
  ;; Thus, merging is not needed and ::stylefy/with-classes can be replaced with :class.
  ;; This example here remains as it is for testing purposes, it has to work
  ;; for ensuring good backwards compatibility.
  [:li (merge (use-style styles/clickable
                         (when (= @index-atom index)
                           {::stylefy/with-classes ["active"]}))
              {:role "presentation"
               :on-click #(reset! index-atom index)})
   [:a (use-sub-style styles/boostrap-navbar-overrides :link)
    text]])

(defn- bs-navbar-legacy-syntax []
  (let [active-index (r/atom 0)]
    (fn []
      [:ul.nav.nav-pills (use-style styles/boostrap-navbar-overrides)
       [bs-navbar-item-legacy-syntax 0 active-index "One"]
       [bs-navbar-item-legacy-syntax 1 active-index "Two"]
       [bs-navbar-item-legacy-syntax 2 active-index "Three"]
       [bs-navbar-item-legacy-syntax 3 active-index "Four"]])))

(defn- bs-navbar-item-current-syntax [index index-atom text]
  [:li (use-style styles/clickable (merge
                                     (when (= @index-atom index)
                                       {:class ["active"]})
                                     {:role "presentation"
                                      :on-click #(reset! index-atom index)}))
   [:a (use-sub-style styles/boostrap-navbar-overrides :link)
    text]])

(defn- bs-navbar-current-syntax []
  (let [active-index (r/atom 0)]
    (fn []
      [:ul.nav.nav-pills (use-style styles/boostrap-navbar-overrides)
       [bs-navbar-item-current-syntax 0 active-index "A"]
       [bs-navbar-item-current-syntax 1 active-index "B"]
       [bs-navbar-item-current-syntax 2 active-index "C"]])))

(defn- bs-navbar-alternative-syntax []
  (let [active-index (r/atom 0)]
    (fn []
      ;; In this example, BS navbar classes are attached into the style map directly.
      [:ul (use-style styles/boostrap-navbar)
       [bs-navbar-item-current-syntax 0 active-index "Hello"]
       [bs-navbar-item-current-syntax 1 active-index "World!"]])))

(defn- responsive-layout []
  [:div (use-style styles/responsive-layout)
   ;; The easiest way to use a sub-style is to call use-sub-style function:
   [:div (use-sub-style styles/responsive-layout :column1)
    [:p "This is column 1"]
    [:p "This is column 1"]
    [:p "This is column 1"]
    [:p "This is column 1"]
    [:p "This is column 1"]]
   [:div (use-sub-style styles/responsive-layout :column2)
    [:p "This is column 2"]
    [:p "This is column 2"]
    [:p "This is column 2"]]
   [:div (use-sub-style styles/responsive-layout :column3)
    ;; If there are more than one level of sub-style nesting, call sub-style to get
    ;; the desired sub-style and use it.
    [:p (use-style (sub-style styles/responsive-layout :column3 :text)) "This is column 3"]
    [:p (use-style (sub-style styles/responsive-layout :column3 :text)) "This is column 3"]]])

(defn animation []
  [:div (use-style styles/animated-box)])

(defn fade []
  (let [on-style {:background-color (:background-color styles/simple-box)}
        off-style {:background-color "black"}
        active-state (r/atom true)]
    (fn []
      [:div.background-transition (use-style (merge styles/simple-box
                                                    (if @active-state on-style off-style))
                                             {:on-click #(swap! active-state not)})
       "Click me!"])))

(defn- simple-examples []
  [:div (use-style (merge styles/root
                          styles/general-styles))
   [:h1 "Generic button"]
   [:p "Just a simple styled button to begin with."]
   [button "Generic button"]

   [:h1 "Different type of buttons in a container"]
   [:p "Styled by merging styles"]
   [button-container]

   [:h1 "Component with multiple sub elements"]
   [:p "Styled by using sub-styles"]
   [table/table
    {:title "Example grid"}
    [{:title "Product" :name :name}
     {:title "ID" :name :id}
     {:title "Price (€/kg)" :name :price}]
    [{:name "Apple" :id 13 :price 1}
     {:name "Orange" :id 35 :price 2}
     {:name "Banana" :id 15 :price 3}]]

   [:h1 "Component with internal state"]
   [:p "This component contains a different style in different states. The styles are generated and inserted into DOM on-demand."]
   [stateful-component]

   [:h1 "Stress test"]
   [:p "Styles are added into the DOM on-demand when they are used for the first time. Clicking the button below generates 1000 different looking components dynamically. The components are first styled with inline styles until the DOM has been updated and we can begin using CSS classes to save memory."]
   [stress-test]

   [:h1 "Boostrap navbar"]
   [:p "You can also assign any classes to elements normally. Here we use Boostrap classes to construct simple navbars. We also override some BS styles."]
   [bs-navbar-legacy-syntax]
   [bs-navbar-current-syntax]
   [bs-navbar-alternative-syntax]

   [:h1 "Simple responsive layout"]
   [:p "stylefy supports media queries out of the box"]
   [responsive-layout]

   [:h1 "Animations"]
   [:p "stylefy also supports keyframes"]
   [animation]

   [:h1 "Custom tag styles"]
   [:p "Custom tag selectors should rarely be necessary, but can be useful for setting styles on base elements, like html or body. This example shows custom styles applied to <code> and <ul> elements."]
   [custom-tags/custom-tags]

   [:h1 "Custom class names"]
   [:p "Normally stylefy handles the conversion from Clojure style maps to unique CSS classes. However, if needed, you can also define your custom named classes. Here we have defined a custom named class for handling animation fades."]
   [fade]

   [:h1 "Feature queries"]
   [:p "The following example is rendered using CSS Grid if supported by the browser. If not, it uses Flexbox fallback as the default style. stylefy also supports media queries inside feature queries!"]
   [grid/grid]

   [:h1 "Caching"]
   [:p "stylefy supports style caching, which means that the generated CSS code is saved into the offline storage and retrieved from there when the page is reloaded. This way, styles once generated do not need to be generated again and the page loads faster. Caching can be turned on manually, and it also needs to be cleared manually."]
   [button "Clear cache" #(stylefy-cache/clear) :primary]])

(defn- top-level []
  (let [active-tab (r/atom 0)]
    (fn []
      [:div
       [:ul.nav.nav-pills (use-style styles/boostrap-navbar-overrides)
        [bs-navbar-item-legacy-syntax 0 active-tab "Simple examples"]
        [bs-navbar-item-legacy-syntax 1 active-tab "Full page example"]]
       (case @active-tab
         0 [simple-examples]
         1 [full-page/full-page])])))

(defn- main []
  [top-level])

(defn ^:export start []
  (stylefy/init {:use-caching? true
                 :cache-options {:expires 60} ; For testing purposes, normally you want to use much higher value.
                 :global-vendor-prefixes {::stylefy/vendors ["webkit" "moz" "o"]
                                          ::stylefy/auto-prefix #{:border-radius}}})
  (custom-tags/custom-tag-styles)
  (r/render main (.getElementById js/document "app")))