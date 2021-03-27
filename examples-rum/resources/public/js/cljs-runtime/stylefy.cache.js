goog.provide('stylefy.cache');
goog.require('cljs.core');
goog.require('stylefy.impl.cache');
goog.require('stylefy.impl.dom');
stylefy.cache.clear = (function stylefy$cache$clear(){
return stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
});

//# sourceMappingURL=stylefy.cache.js.map
