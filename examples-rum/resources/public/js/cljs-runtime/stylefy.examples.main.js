goog.provide('stylefy.examples.main');
goog.require('cljs.core');
goog.require('garden.units');
goog.require('garden.color');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('stylefy.core');
goog.require('stylefy.cache');
goog.require('stylefy.rum.dom');
stylefy.examples.main.main = rum.core.lazy_build(rum.core.build_defc,(function (){
var attrs28942 = stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs28942))?daiquiri.interpreter.element_attributes(attrs28942):null),((cljs.core.map_QMARK_(attrs28942))?["Rum is running!"]:[daiquiri.interpreter.interpret(attrs28942),"Rum is running!"]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"stylefy.examples.main/main");
stylefy.examples.main.start = (function stylefy$examples$main$start(){
stylefy.core.init.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"use-caching?","use-caching?",427588313),false,new cljs.core.Keyword(null,"dom","dom",-1236537922),stylefy.rum.dom.__GT_RumDom(),new cljs.core.Keyword(null,"use-custom-class-prefix?","use-custom-class-prefix?",-1156349118),true,new cljs.core.Keyword(null,"cache-options","cache-options",1443503739),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expires","expires",1393008816),(((((1) * (60)) * (60)) * (24)) * (7))], null),new cljs.core.Keyword(null,"global-vendor-prefixes","global-vendor-prefixes",882986417),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webkit","moz","o"], null),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),null], null), null)], null)], null));

return rum.core.mount(stylefy.examples.main.main(),document.getElementById("app"));
});
goog.exportSymbol('stylefy.examples.main.start', stylefy.examples.main.start);

//# sourceMappingURL=stylefy.examples.main.js.map
