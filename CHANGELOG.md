# 3.0.0-SNAPSHOT

March 29, 2021

- `stylefy.impl.dom`, which handles DOM manipulation when using styles in components, has been (mostly) replaced with an external DOM module. This change makes it possible for stylefy to support multiple different UI libraries / frameworks. Reagent and Rum are supported at the beginning. This change requires that the used DOM module is added as a new dependency and is defined during stylefy initialisation. See migration guide below.
- Namespaced keywords are replaced with unnamespaced when caching CSS. This makes different DOM module implementations easier to work with, and it also reduces the size of the cache by approximately 7%. Unsupported cache versions are cleared automatically, so no actions are required from the users of the library.

**Migration guide from previous versions (frontend only):**

Assuming you are using Reagent, update stylefy version and add `stylefy/reagent` as a new dependency. After that, your dependencies should look something like this:

```
[stylefy "3.0-SNAPSHOT"]
[stylefy/reagent "3.0-SNAPSHOT"]
```

Require `stylefy/reagent` and initialise it together with stylefy:

```cljs
(:require [stylefy.reagent.dom :as stylefy-reagent-dom])

(stylefy/init {:dom (stylefy-reagent-dom/->ReagentDom)})
```

# 2.2.2

March 20, 2021

- Minor refactoring based on clj-kondo findings. No functional changes.

# 2.2.1

June 15, 2020

- Fix Figwheel warning

# 2.2.0

May 31, 2020

- Make sure that `keyframes`, `font-face`, `tag`, `class` and `prepare-styles` always return nil, as the return value was never designed to be used anywhere.

# 2.1.1

May 30, 2020

- Fix tests

# 2.1.0

May 30, 2020

- Adds support for calling `keyframes`, `font-face`, `tag` and `class` on the backend.

# 2.0.0

May 30, 2020

A summary of changes from the RC-versions:

- **BREAKING** Removes the possibility to pass `::stylefy/with-classes` to `use-style` via options map (second argument of `use-style`). If you do this, a warning message is logged and the value is ignored. This feature has been marked as deprecated since version 1.3.0 (2018). If you have used `::stylefy/with-classes` in options map, you can easily replace it with `:class`. Notice that passing `::stylefy/with-classes` via style map (first argument of `use-style`) is still perfectly valid, this change is only related to the options map.
- `:class` in HTML attributes and `:stylefy.core/with-classes` in style map now support additional syntax: you can pass a string, a keyword or a vector of strings or keywords. You can also pass a vector of both keywords and strings if you wish. `nil` is also accepted and it will be ignored. Discussion: https://github.com/Jarzka/stylefy/issues/44
- Adds basic support for Server-Side Rendering (SSR). This means that we can now use `use-style` on the backend, when generating Hiccup code. This new feature does not affect how you use stylefy on the frontend. If you don't need SSR, you can simply omit it by doing nothing.

# 2.0.0-rc.2

May 30, 2020

- `:class` in HTML attributes and `:stylefy.core/with-classes` in style map now support additional syntax: you can pass a string, a keyword or a vector of strings or keywords. You can also pass a vector of both keywords and strings if you wish. `nil` is also accepted and it will be ignored. Discussion: https://github.com/Jarzka/stylefy/issues/44
- Fix a bug: modes did not work in SSR.

# 2.0.0-rc.1

May 26, 2020

- **BREAKING** Removes the possibility to pass `::stylefy/with-classes` to `use-style` via options map (second argument of `use-style`). If you do this, a warning message is logged and the value is ignored. This feature has been marked as deprecated since version 1.3.0 (2018). If you have used `::stylefy/with-classes` in options map, you can easily replace it with `:class`. Notice that passing `::stylefy/with-classes` via style map (first argument of `use-style`) is still perfectly valid, this change is only related to the options map.
- Adds basic support for Server-Side Rendering (SSR). This means that we can now use `use-style` in the backend, when generating Hiccup code. This new feature does not affect how you use stylefy in the frontend. If you don't need SSR, you can simply omit it by doing nothing.

# 1.14.1

Mar 25, 2020

- Fix a bug: style maps with Garden units were sometimes hashed incorrectly (thanks to @frankitox for reporting this: https://github.com/Jarzka/stylefy/issues/21#issuecomment-603589989)
- Minor refactoring

If you have used stylefy's auto-generated class names in tests, you can expect the values of those tests to change.

# 1.14.0

Aug 17, 2019

- Adds support for defining modes in vector format (because the order of CSS pseudoelements is sometimes important)

The project also got a new logo with this release.

# 1.13.3

May 15, 2019

- Fix incorrect version number

# 1.13.2

May 15, 2019

- Fix compile error in 1.13.1

# 1.13.1

May 11, 2019

- Prevents the developer from entering duplicate keyframe identifiers into the DOM by mistake (PR). Thanks @iterati.

# 1.13.0

May 9, 2019

- DOM node for storing constant styles is not touched if new styles are not being added. Even touching the node can have font flickering effect on some browsers in certain situations.
- Adds a new core API function: prepare-style.

This is ultimately the same thing as prepare-styles, but it takes only one style map as a parameter and returns it. This makes it easy to prepare a style along with use-style:

    [:div (use-style (prepare-style style))]

I want to remind that just as with prepare-styles, the need for using prepare-style is rare, but when it's needed, it's now a bit easier to use if the render function needs only one or two style maps to be prepared. If there are multiple style maps that need to be prepared, it is recommended to call prepare-styles instead.

- Updating DOM during prepare-styles has been heavily optimised

Previously DOM was updated after every single sub-style preparation. Now the update is done only after the whole style map has been prepared, and only if the style map does not already exist in the DOM.

# 1.12.0

Feb 25, 2019

- Adds support for Garden custom CSS function macro defcssfn. See discussion: #34
- Updates Garden to the latest version (1.3.2 --> 1.3.6). See Garden changelog here: https://github.com/noprompt/garden/blob/master/ChangeLog.md

# 1.11.1

Jan 25, 2019

- Fix compile warning

# 1.11.0

- Implemented support for manual mode, which makes it possible to style child components with custom CSS selectors. It is recommended to use manual mode only for corner cases, i.e. when regular sub-styles cannot produce the desired end result. An example of this is a case when we want to easily change the style of a child component when the parent is being hovered. Manual mode can also be used to style 3rd party components that do not take style parameters. To avoid possible hassle, stylefy's special keywords do not work in manual mode and styles written in manual mode are scoped inside the element in which you use the style.
- Log a warning when attempted to initialise stylefy more than once.
- Log a warning when attempted to use an incorrect mode with spaces.
- Fix bug: Modes were not working correctly inside feature query

# 1.10.1

Nov 21, 2018

- Fixed compile warnings.

# 1.10.0

Oct 17, 2018

- Improves performance especially in large applications: Previously all components were re-rendered when the "CSS in DOM" state of some stylefy style was changed. Now component is re-rendered only if the "CSS in DOM" state of a style, which is used in the component, has changed.

# 1.9.0

Sep 30, 2018

- Adds multi-instance support.

# 1.8.0

Sep 12, 2018

- Reduces RAM & local storage usage by approximately 50% by keeping only the compiled CSS in memory, not the whole style map.
- Makes it possible to define custom class prefix (for debugging and testing purposes)

# 1.7.0

Jul 16, 2018

- Removes the need for requestAnimationFrame. DOM is now updated asynchronously, immediately after new CSS code is generated.
- Sets caching on by default. The default expiration time is 7 days.

# 1.6.0

Jul 10, 2018

- Pseudo classes and pseudo elements that require double colon syntax are now supported. If you need double colon syntax, define the name of the mode as string. For example: "::-webkit-progress-bar"

# 1.5.1

May 20, 2018

- A warning message is logged if trying to use use-style without calling stylefy/init first when the application starts.

# 1.5.0

May 6, 2018

- stylefy/class and stylefy/tag now support custom stylefy definitions (modes, media queries, supports queries)
- Minor code refactoring inside the library

# 1.4.2

Apr 27, 2018

- Style conversion is now approximately 7% faster when not using media or feature queries.

# 1.4.1

Apr 20, 2018

- HTML attributes are now returned when calling use-style with an empty style map
- Style maps with different garden units are now treated structurally different and thus produce different hash values (= CSS class selector)

# 1.4.0

Mar 25, 2018

- `::with-classes` can now be used inside a style map definition.

# 1.3.0

Mar 9, 2018

- use-style function now accepts HTML attributes as the second parameter. This means that there is no need to merge the return value of use-style and HTML attributes anymore. This change is backwards compatible, so merging still works as expected.
- Updated deps (Clojure, ClojureScript & Reagent)
- stylefy now uses clj-chrome-devtools for running tests

Previously, the second parameter of use-style was an options map, containing only one keyword `::stylefy/with-classes`. This feature is now deprecated, but works. If you want to provide additional classes to use-style, you should use the regular HTML :class attribute.

# 1.2.0

Dec 15, 2017

- Added support for globally defined vendor prefixes
- Added support for style caching using HTML5 local storage.

See readme for more info.

# 1.1.0

Nov 3, 2017

- Inline style map does not contain stylefy's namespaced keywords anymore(these were useless, only style properties can be used)
- Inline style map handles Garden's units and colors correctly by converting them to CSS strings
- New feature: Call stylefy/tag to reset the default style of a specific tag (like body)

# 1.0.1

Oct 9, 2017

- Styles containing feature queries are not returned as inline styles.

# 1.0.0

Sep 29, 2017

Now that all major CSS features are supported, it's time to release version 1.0!

- Added support for CSS feature queries (@supports). Media queries, modes and vendor prefixes inside @supports blocks are also supported. See README.md for examples.
- Added support for using vendor prefixes and modes in media queries
- Garden option {:pretty-print? false} is now supported in media queries (this change can only be seen in tests).

As always, all changes should be backwards compatible.

# 0.7.3

Jun 26, 2017

- prepare-styles now prepares all sub-styles recursively

# 0.7.2

Jun 20, 2017

- Adds support for deeper sub-style nesting by introducing a new core function: sub-style. See README & examples for information.

Thanks to @lllShamanlll for this idea!

# 0.7.1

Jun 4, 2017

- Makes sure prepare-styles also prepares sub-styles of the given styles

# 0.7

Jun 4, 2017

- Removes public reagent atoms: keyframes-in-dom? and font-faces-in-dom?. After init function was changed to add keyframes and font-faces into the DOM immediately, the values of these atoms were basically always true.
- Adds a new public API function prepare-styles. Calling this function asks stylefy to convert the styles to CSS and add them into the DOM immediately. Calling this function on :component-will-mount can be useful if a component is going to use styles with specific modes or media queries that cannot be present as inline style, and the component should not be hidden for the small period of time when the styles are prepared to be added into the DOM.

It's good to keep in mind that most of the time prepare-styles is not needed but calling use-style should be enough.

# 0.6.5

Jun 2, 2017

- stylefy/init immediately converts all font-faces, keyframes and custom classes in to CSS and adds the generated code in to DOM.

Previously, calling stylefy/init started requesting an animation frame to do the same process. However, it is useful to generate CSS code immediately so that font-faces, keyframes and custom classes are ready in the DOM before the first component is rendered.

# 0.6.4

Jun 2, 2017

- Makes it possible to define custom classes with custom names.

Useful when working with 3rd party libraries / frameworks. use-style should still be used when ever possible.

# 0.6.3

May 23, 2017

- Return component style as inline style if the style definition contains hover state

Normally, when a style definition constains modes, the component is hidden until the generated CSS has been added to DOM. However, :hover mode does not change the initial state of the component, so it can be rendered with inline style until DOM is ready and class can be used.

# 0.6.2

May 23, 2017

- Fixed invalid error logging

# 0.6.1

May 22, 2017

- When returning invisible component, also return the given style properties

This helps the component to take all the space it's going to need

# 0.6

May 22, 2017

- Uses a separate style tag for font-faces and keyframes.

This change was made because some browsers (Chrome) lose the font-face declaration when the style tag is updated. Since font-face and keyframes are not going to change, we keep them in a separate style tag which is not going to change.

# 0.5.5

May 22, 2017

- If style definition contains media queries or modes, {:visibility "hidden"} is returned.

This change has been made, because media queries and modes cannot be used in inline styles, so the components are probably going to be rendered incorrectly. It is better to hide them for the few milliseconds until DOM is ready.

# 0.5.2

May 22, 2017

- Added two new public Reagent atoms to core (font-faces-in-dom? & keyframes-in-dom?). This makes it possible to render components only when all font-faces and keyframes are added into DOM.

For example, IE11 requires that animation is present in DOM before it can be correctly used in a component.

# 0.5.1

May 22, 2017

- DOM is updated immidiately after font-faces or keyframes are defined

# 0.5

- Adds support for @font-face and @Keyframes

# 0.4.4

May 22, 2017

- If use-style is called with nil or an empty style definition, nil value is returned (previsouly js/Error was thrown)
- If sub-style is not found from the style map, warning is logged (previously was error)
- Added lots of tests


# 0.4.3

May 21, 2017

- Minor fixes in function documentations
- Fixes production build source path url


# 0.4.2

May 21, 2017

- Fixes bug: media definitions were also used as CSS properties


# 0.4.1

May 21, 2017

- Removes useless logging


# 0.4

May 21, 2017

- Adds support for media queries


# 0.3.1

May 21, 2017

- Adds support for vendor prefixes


# 0.3

May 21, 2017

- Adds support for modes. Modes make it possible to define how your style behaves when, for example, a mouse cursor is on top of an element using the style
- Drops (theoretical) support for other UI frameworks and Reagent.


# 0.2.3

May 20, 2017

- Adds support for using 3rd party class names in UI components (= provides support for using BS classes with stylefy)



# 0.2.2

May 20, 2017

- Massive performance boost by using requestAnimationFrame to update the DOM. This helps to update the DOM once when multiple new CSS classes are defined.
- stylefy/use-style returns the given props as inline style until the DOM has been updated and CSS classes can be used.
- stylefy/init must be called to boostrap the library.


#  0.2.1
  
May 20, 2017
  
- Minor performance improvements


#  0.2
  
May 19, 2017
  
- Removed style function, use-styles function generates the given style if not created already

# 0.1.1

May 19, 2017

- Minor changes in the internal implementation
- New stress test example

# 0.1

May 19, 2017

- First release
