(ns stylefy.examples.rum.main
  (:require
    [garden.units :as gu]
    [garden.color :as gc]
    [rum.core :as rum]
    [stylefy.examples.rum.styles :as styles]
    [stylefy.examples.rum.table :as table]
    [stylefy.examples.rum.hoverbox :as hoverbox]
    [stylefy.examples.rum.grid :as grid]
    [stylefy.examples.rum.full-page :as full-page]
    [stylefy.examples.rum.custom-tags :as custom-tags]
    [stylefy.rum :as stylefy-rum]
    [cljs.core.async :refer [<! timeout]]
    [stylefy.core :as stylefy :refer [use-style sub-style use-sub-style]]
    [stylefy.cache :as stylefy-cache])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [garden.def :refer [defcssfn]]))

(defn button-style-by-type [type]
  (case type
    :primary styles/primary-button
    :secondary styles/secondary-button
    styles/generic-button))

(rum/defc button < rum/reactive [text & [action-fn type]]
  [:div (use-style (button-style-by-type type)
                   {:on-click action-fn})
   text])

(rum/defc button-container < rum/reactive []
  [:div (use-style styles/generic-container)
   (button "Hello World!")
   (button "Primary" #(.log js/console "Primary button clicked") :primary)
   (button "Secondary" #(.log js/console "Secondary button clicked") :secondary)])

(rum/defcs stateful-component < rum/reactive (rum/local :on :state) [state]
  (let [switch #(if (= :on %) :off :on)]
    ; Make sure the state style is prepared before we use it.
    ; Normally, when use-style is called, it returns the given style as an inline style
    ; until the style is converted to CSS and added into the DOM.
    ; However, the state styles contain media queries, which cannot be
    ; present as inline style, so stylefy would hide the component for a small amount of time
    ; until the styles are added into DOM, which creates a bad flickering effect.
    ; To prevent this from happening, we prepare the state style before we use it.
    [:div (use-style (stylefy/prepare-style ((rum/react (:state state)) styles/stateful-component)))
     (if (= (rum/react (:state state)) :on)
       [:p "The component's current state is ON"]
       [:p "The component's current state is OFF"])
     (button "Switch" #(reset! (:state state) (switch @(:state state))) :primary)]))

(defn stress-test-item [index]
  (fn [style]
    [:div (merge {:key index} style) index]))

(defn create-bar-style [background index max]
  ; Generates unique, but predictable style, so that caching can be tested.
  {:padding "5px"
   :width (str (float (* (/ index max) 100)) "%")
   :height "30px"
   :color "black"
   :z-index index ; Just to make sure every single style is unique
   :margin-bottom "5px"
   :border "1px solid black"
   :background-color background})

(rum/defcs stress-test < rum/reactive
                         (rum/local :hidden :state)
                         (rum/local nil :start-time)
  [state]
  (let [components-count 1000
        styles (mapv #(create-bar-style "grey" % components-count)
                     (range 0 components-count))]
    (.log js/console "Render stress test")
    [:div (use-style styles/generic-container)

     (button
       (case @(:state state)
         :hidden "Generate"
         :generating "Generating..."
         :visible "Hide")
       #(case @(:state state)
          :hidden (go (reset! (:state state) :generating)
                      (<! (timeout 100))
                      (reset! (:start-time state) (.getTime (js/Date.)))
                      (reset! (:state state) :visible))
          :visible (reset! (:state state) :hidden))
       :primary)

     (when (= (rum/react (:state state)) :visible)
       (doall
         (map-indexed (fn [index component]
                        (when (= index (- components-count 1))
                          (.log js/console (str "Generation time: "
                                                (- (.getTime (js/Date.)) @(:start-time state))
                                                " ms.")))

                        (component (use-style (get styles index))))
                      (map stress-test-item (range 0 components-count)))))]))

(rum/defcs add-style-test < rum/reactive (rum/local [] :comps) [state]
  (let [max 100]
    (.log js/console "Render add style test")
    [:div
     (button "Add component"
             (fn []
               (let [style (create-bar-style "#005511" (count @(:comps state)) max)]
                 (when (< (count @(:comps state)) max)
                   (swap! (:comps state) conj
                          (fn []
                            [:div (merge {:key (gensym)} (use-style style))])))))
             :primary)
     (map
       (fn [component]
         (component))
       (rum/react (:comps state)))]))

(rum/defc bs-navbar-item < rum/reactive [index index-atom text]
  [:li (use-style styles/clickable (merge
                                     (when (= @index-atom index)
                                       {:class "active"})
                                     {:role "presentation"
                                      :on-click #(reset! index-atom index)}))
   [:a (use-sub-style styles/boostrap-navbar-overrides :link)
    text]])

(rum/defcs bs-navbar-current-syntax < rum/reactive (rum/local 0 :active-index) [state]
           [:ul.nav.nav-pills (use-style styles/boostrap-navbar-overrides)
            (bs-navbar-item 0 (:active-index state) "A")
            (bs-navbar-item 1 (:active-index state) "B")
            (bs-navbar-item 2 (:active-index state) "C")])

(rum/defcs bs-navbar-alternative-syntax < rum/reactive (rum/local 0 :active-index) [state]
  ; In this example, BS navbar classes are attached into the style map directly.
  [:ul (use-style styles/boostrap-navbar)
   (bs-navbar-item 0 (:active-index state) "Hello")
   (bs-navbar-item 1 (:active-index state) "World!")])

(rum/defc responsive-layout < rum/reactive []
  [:div (use-style styles/responsive-layout)
   ; The easiest way to use a sub-style is to call use-sub-style function:
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
    ; If there are more than one level of sub-style nesting, call sub-style to get
    ; the desired sub-style and use it.
    [:p (use-style (sub-style styles/responsive-layout :column3 :text)) "This is column 3"]
    [:p (use-style (sub-style styles/responsive-layout :column3 :text)) "This is column 3"]]])

(rum/defc animation < rum/reactive []
  [:div (use-style styles/animated-box)])

(rum/defcs fade < rum/reactive (rum/local true :active-state) [state]
  (let [on-style {:background-color (:background-color styles/simple-box)}
        off-style {:background-color "black"}]
    [:div.background-transition (use-style (merge styles/simple-box
                                                  (if (rum/react (:active-state state)) on-style off-style))
                                           {:on-click #(swap! (:active-state state) not)})
     "Click me!"]))

(defcssfn url)

(rum/defc garden-units < rum/reactive []
  [:div
   [:h2 "Garden units"]
   [:p "Garden units should work without problems. Examples:"]
   [:p (use-style {:margin-top (gu/px 50)})
    "Margin top defined with Garden px unit (50px)"]
   [:p (use-style {:margin-top (gu/rem 3)
                   :color (gc/rgb 255 0 0)})
    "Margin top defined with Garden rem unit (3rem) and color with rgb"]
   [:div (use-style {:padding "1rem"
                     :width (gu/pc 50)
                     :height (gu/rem 25)
                     :color (gc/rgb 255 255 255)
                     :background-image (url "images/background.jpg")})
    "Defined with pc unit, height with rem unit, color with rgb, background as a custom defcssfn function."]])

(def background-box-sorted (sorted-map
                             :width "100%"
                             :height "20rem"
                             :font-family "open_sans, Verdana, Helvetica, sans-serif"
                             :color "#eaeaea"
                             :background "url('images/meme.jpg')"
                             :background-repeat "no-repeat"
                             :background-position "center"
                             :background-attachment "fixed"
                             :background-size "cover"
                             :margin 0
                             :padding 0))

(def background-box-no-shorthands {:width "100%"
                                   :height "20rem"
                                   :font-family "open_sans, Verdana, Helvetica, sans-serif"
                                   :color "#eaeaea"
                                   :background-image "url('images/meme.jpg')"
                                   :background-repeat "no-repeat"
                                   :background-position "center"
                                   :background-attachment "fixed"
                                   :background-size "cover"
                                   :margin 0
                                   :padding 0})

(def background-box-incorrect {:font-family "open_sans, Verdana, Helvetica, sans-serif"
                               :color "#121212"
                               :background "url('images/meme.jpg')"
                               :background-repeat "no-repeat"
                               :background-position "center"
                               :background-attachment "fixed"
                               :background-size "cover"
                               :margin 0
                               :padding 0})

; FIXME Port these examples from Reagent to rum
(rum/defc simple-examples < rum/reactive []
  [:div (use-style (merge styles/root
                          styles/general-styles))
   [:h1 "Rum Examples"]
   [:h2 "Generic button"]
   [:p "Just a simple styled button to begin with."]
   (button "Generic button")

   [:h2 "Different type of buttons in a container"]
   [:p "Styled by merging styles"]
   (button-container)

   [:h2 "Modes generate pseudo-classes"]
   [:p (use-style {::stylefy/mode {:before {:content "'This is CSS :before content - '"}
                                   :after {:content "' - This is CSS :after content'"}
                                   :hover {:color "red"}}})
    "This is text content, hover me!"]
   [:p (use-style {::stylefy/mode [[:hover {:background-color "#ffedcf"}]
                                   [:active {:background-color "blue" :color "white"}]]})
    "Another example created with different syntax"]

   [:h2 "Component with multiple sub elements"]
   [:p "Rows are styled by using sub-styles"]
   (table/table
     {:title "Example grid"}
     [{:title "Product" :name :name}
      {:title "ID" :name :id}
      {:title "Price (€/kg)" :name :price}]
     [{:name "Apple" :id 13 :price 1}
      {:name "Orange" :id 35 :price 2}
      {:name "Banana" :id 15 :price 3}])

   [:p "A box in a box, written in manual mode to make hovering the parent brighten the child box style (darken on mobile)"]
   (hoverbox/hoverbox)

   [:h2 "Component with internal state"]
   [:p "This component contains a different style in different states. The styles are generated and inserted into DOM on-demand."]
   (stateful-component)

   [:h2 "Stress test"]
   [:p "Styles are added into the DOM on-demand when they are used for the first time. Clicking the button below generates 1000 different looking components dynamically. The components are first styled with inline styles until the DOM has been updated and we can begin using CSS classes to save memory."]
   (stress-test)

   [:h2 "Stress test 2"]
   [:p "Press the button to dynamically insert more styles into DOM."]
   (add-style-test)

   [:h2 "Boostrap navbar"]
   [:p "You can also assign any classes to elements normally. Here we use Boostrap classes to construct simple navbars. We also override some BS styles."]
   (bs-navbar-current-syntax)
   (bs-navbar-alternative-syntax)

   [:h2 "Simple responsive layout"]
   [:p "stylefy supports media queries out of the box"]
   (responsive-layout)

   [:h2 "Animations"]
   [:p "stylefy also supports keyframes"]
   (animation)

   [:h2 "Custom tag styles"]
   [:p "Custom tag selectors should rarely be necessary, but can be useful for setting styles on base elements, like html or body. This example shows custom styles applied to <code> and <ul> elements."]
   (custom-tags/custom-tags)

   [:h2 "Custom class names"]
   [:p "Normally stylefy handles the conversion from Clojure style maps to unique CSS classes. However, if needed, you can also define your custom named classes. Here we have defined a custom named class for handling animation fades."]
   (fade)

   [:h2 "Feature queries"]
   [:p "The following example is rendered using CSS Grid if supported by the browser. If not, it uses Flexbox fallback as the default style. stylefy also supports media queries inside feature queries!"]
   (grid/grid)

   (garden-units)

   [:h2 "Key order"]
   [:p "If CSS shorthands are used, the order of CSS key properties is important. If we use a regular Clojure map, the order of keys can change in the final CSS output."]
   [:p "This specific style map renders incorrectly (some background properties are defined before the background itself and these are ignored by the browser):"]
   [:div (merge
           (use-style background-box-incorrect)
           {:style {:width "100%" :height "20rem"}})]
   [:p "Workaround is to use a sorted-map (or sorted-map-by):"]
   [:div (use-style background-box-sorted)]
   [:p "Or, probably a better way, not to use shorthand properties:"]
   [:div (use-style background-box-no-shorthands)]
   [:h2 "Caching"]
   [:p "stylefy supports style caching, which means that the generated CSS code is saved into the offline storage and retrieved from there when the page is reloaded. This way, styles once generated do not need to be generated again and the page loads faster. Caching can be turned on manually, and it also needs to be cleared manually."]
   (button "Clear cache" #(stylefy-cache/clear) :primary)])

(rum/defcs top-level < rum/reactive (rum/local 0 :active-tab) [state]
  [:div
   [:ul.nav.nav-pills (use-style styles/boostrap-navbar-overrides)
    (bs-navbar-item 0 (:active-tab state) "Simple examples")
    (bs-navbar-item 1 (:active-tab state) "Full page example")]

   (case (rum/react (:active-tab state))
       0 (simple-examples)
       1 (full-page/full-page))])

(rum/defc main < rum/reactive []
  (top-level))

(defn ^:export start []
  (stylefy/init {:use-caching? true
                 :dom (stylefy-rum/init)
                 ;:multi-instance {:base-node nil
                 ;                 :instance-id "example"}
                 :use-custom-class-prefix? true
                 :cache-options {:expires (* 1 60 60 24 7)}
                 :global-vendor-prefixes {::stylefy/vendors ["webkit" "moz" "o"]
                                          ::stylefy/auto-prefix #{:border-radius}}})
  (rum/mount (main) (.getElementById js/document "app")))
