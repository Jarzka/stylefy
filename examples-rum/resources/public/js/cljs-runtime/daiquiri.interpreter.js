goog.provide('daiquiri.interpreter');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('daiquiri.normalize');
goog.require('daiquiri.util');
goog.require('cljsjs.react');
goog.require('goog.object');
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
daiquiri.interpreter.create_element = (function daiquiri$interpreter$create_element(type,attrs,children){
return React.createElement.apply(null,[type,attrs].concat(children));
});
daiquiri.interpreter.component_attributes = (function daiquiri$interpreter$component_attributes(attrs){
var x = daiquiri.util.camel_case_keys_STAR_(attrs);
var m = ({});
var seq__27339_27438 = cljs.core.seq(x);
var chunk__27340_27439 = null;
var count__27341_27440 = (0);
var i__27342_27441 = (0);
while(true){
if((i__27342_27441 < count__27341_27440)){
var vec__27356_27444 = chunk__27340_27439.cljs$core$IIndexed$_nth$arity$2(null,i__27342_27441);
var k_27445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27356_27444,(0),null);
var v_27446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27356_27444,(1),null);
goog.object.set(m,cljs.core.name(k_27445),v_27446);


var G__27451 = seq__27339_27438;
var G__27452 = chunk__27340_27439;
var G__27453 = count__27341_27440;
var G__27454 = (i__27342_27441 + (1));
seq__27339_27438 = G__27451;
chunk__27340_27439 = G__27452;
count__27341_27440 = G__27453;
i__27342_27441 = G__27454;
continue;
} else {
var temp__5735__auto___27456 = cljs.core.seq(seq__27339_27438);
if(temp__5735__auto___27456){
var seq__27339_27457__$1 = temp__5735__auto___27456;
if(cljs.core.chunked_seq_QMARK_(seq__27339_27457__$1)){
var c__4550__auto___27460 = cljs.core.chunk_first(seq__27339_27457__$1);
var G__27461 = cljs.core.chunk_rest(seq__27339_27457__$1);
var G__27462 = c__4550__auto___27460;
var G__27463 = cljs.core.count(c__4550__auto___27460);
var G__27464 = (0);
seq__27339_27438 = G__27461;
chunk__27340_27439 = G__27462;
count__27341_27440 = G__27463;
i__27342_27441 = G__27464;
continue;
} else {
var vec__27363_27467 = cljs.core.first(seq__27339_27457__$1);
var k_27468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27363_27467,(0),null);
var v_27469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27363_27467,(1),null);
goog.object.set(m,cljs.core.name(k_27468),v_27469);


var G__27470 = cljs.core.next(seq__27339_27457__$1);
var G__27471 = null;
var G__27472 = (0);
var G__27473 = (0);
seq__27339_27438 = G__27470;
chunk__27340_27439 = G__27471;
count__27341_27440 = G__27472;
i__27342_27441 = G__27473;
continue;
}
} else {
}
}
break;
}

return m;
});
daiquiri.interpreter.element_attributes = (function daiquiri$interpreter$element_attributes(attrs){
var temp__5735__auto__ = cljs.core.clj__GT_js(daiquiri.util.html_to_dom_attrs(attrs));
if(cljs.core.truth_(temp__5735__auto__)){
var js_attrs = temp__5735__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(clojure.string.blank_QMARK_(class$__$1)){
delete js_attrs["className"];
} else {
(js_attrs.className = class$__$1);
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
daiquiri.interpreter.interpret_seq = (function daiquiri$interpreter$interpret_seq(x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x__$1){
ret.push((daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1 ? daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1(x__$1) : daiquiri.interpreter.interpret.call(null,x__$1)));

return ret;
}),[],x);
});
/**
 * Render an element vector as a HTML element.
 */
daiquiri.interpreter.element = (function daiquiri$interpreter$element(element){
var vec__27378 = daiquiri.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27378,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27378,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27378,(2),null);
return daiquiri.interpreter.create_element(type,daiquiri.interpreter.element_attributes(attrs),daiquiri.interpreter.interpret_seq(content));
});
daiquiri.interpreter.fragment = (function daiquiri$interpreter$fragment(p__27383){
var vec__27384 = p__27383;
var seq__27385 = cljs.core.seq(vec__27384);
var first__27386 = cljs.core.first(seq__27385);
var seq__27385__$1 = cljs.core.next(seq__27385);
var _ = first__27386;
var first__27386__$1 = cljs.core.first(seq__27385__$1);
var seq__27385__$2 = cljs.core.next(seq__27385__$1);
var attrs = first__27386__$1;
var children = seq__27385__$2;
var vec__27388 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27388,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27388,(1),null);
return daiquiri.interpreter.create_element(React.Fragment,attrs__$1,children__$1);
});
daiquiri.interpreter.interop = (function daiquiri$interpreter$interop(p__27400){
var vec__27401 = p__27400;
var seq__27402 = cljs.core.seq(vec__27401);
var first__27403 = cljs.core.first(seq__27402);
var seq__27402__$1 = cljs.core.next(seq__27402);
var _ = first__27403;
var first__27403__$1 = cljs.core.first(seq__27402__$1);
var seq__27402__$2 = cljs.core.next(seq__27402__$1);
var component = first__27403__$1;
var first__27403__$2 = cljs.core.first(seq__27402__$2);
var seq__27402__$3 = cljs.core.next(seq__27402__$2);
var attrs = first__27403__$2;
var children = seq__27402__$3;
var vec__27404 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27404,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27404,(1),null);
return daiquiri.interpreter.create_element(component,attrs__$1,children__$1);
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
daiquiri.interpreter.interpret_vec = (function daiquiri$interpreter$interpret_vec(x){
if(daiquiri.util.fragment_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,(0),null))){
return daiquiri.interpreter.fragment(x);
} else {
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,">",">",-555517146),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,(0),null))){
return daiquiri.interpreter.interop(x);
} else {
if(daiquiri.util.element_QMARK_(x)){
return daiquiri.interpreter.element(x);
} else {
return daiquiri.interpreter.interpret_seq(x);

}
}
}
});
daiquiri.interpreter.interpret = (function daiquiri$interpreter$interpret(v){
if(cljs.core.vector_QMARK_(v)){
return daiquiri.interpreter.interpret_vec(v);
} else {
if(cljs.core.seq_QMARK_(v)){
return daiquiri.interpreter.interpret_seq(v);
} else {
return v;

}
}
});

//# sourceMappingURL=daiquiri.interpreter.js.map
