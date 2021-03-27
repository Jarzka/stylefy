goog.provide('daiquiri.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
daiquiri.util.valid_key_QMARK_ = (function daiquiri$util$valid_key_QMARK_(k){
return (((k instanceof cljs.core.Keyword)) || (typeof k === 'string') || ((k instanceof cljs.core.Symbol)));
});
daiquiri.util._camel_case = (function daiquiri$util$_camel_case(k){
if(typeof k === 'string'){
return k;
} else {
var vec__26965 = cljs.core.name(k).split("-");
var seq__26966 = cljs.core.seq(vec__26965);
var first__26967 = cljs.core.first(seq__26966);
var seq__26966__$1 = cljs.core.next(seq__26966);
var first_word = first__26967;
var words = seq__26966__$1;
if(((cljs.core.empty_QMARK_(words)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("aria",first_word)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("data",first_word)))){
return k;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words),first_word)));
}
}
});
daiquiri.util.attrs_cache = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv.
 *   Does not convert string attributes.
 */
daiquiri.util.camel_case = (function daiquiri$util$camel_case(k){
if(daiquiri.util.valid_key_QMARK_(k)){
var or__4120__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(daiquiri.util.attrs_cache),k);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var kk = daiquiri.util._camel_case(k);
daiquiri.util.attrs_cache.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(daiquiri.util.attrs_cache.cljs$core$IDeref$_deref$arity$1(null),k,kk));

return kk;
}
} else {
return k;
}
});
daiquiri.util.camel_case_keys_STAR_ = (function daiquiri$util$camel_case_keys_STAR_(m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (p1__27006_SHARP_,p2__27007_SHARP_,p3__27008_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__27006_SHARP_,daiquiri.util.camel_case(p2__27007_SHARP_),p3__27008_SHARP_);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
});
/**
 * Recursively transforms all map keys into camel case.
 */
daiquiri.util.camel_case_keys = (function daiquiri$util$camel_case_keys(m){
if(cljs.core.map_QMARK_(m)){
var m__$1 = cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (p1__27028_SHARP_,p2__27029_SHARP_,p3__27030_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__27028_SHARP_,daiquiri.util.camel_case(p2__27029_SHARP_),p3__27030_SHARP_);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
var G__27042 = m__$1;
if(cljs.core.map_QMARK_(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(m__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__27042,new cljs.core.Keyword(null,"style","style",-496642736),daiquiri.util.camel_case_keys);
} else {
return G__27042;
}
} else {
return m;
}
});
/**
 * Returns true if `tag` is the fragment tag "*" or "<>", otherwise false.
 */
daiquiri.util.fragment_QMARK_ = (function daiquiri$util$fragment_QMARK_(tag){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(tag),"*")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(tag),"<>")));
});
/**
 * Return true if `x` is an HTML element. True when `x` is a vector
 *   and the first element is a keyword, e.g. `[:div]` or `[:div [:span "x"]`.
 */
daiquiri.util.element_QMARK_ = (function daiquiri$util$element_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && ((cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,(0),null) instanceof cljs.core.Keyword)));
});
/**
 * Converts all HTML attributes to their DOM equivalents.
 */
daiquiri.util.html_to_dom_attrs = (function daiquiri$util$html_to_dom_attrs(attrs){
return clojure.set.rename_keys(daiquiri.util.camel_case_keys(attrs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720)], null));
});
/**
 * Join the `classes` with a whitespace.
 */
daiquiri.util.join_classes = (function daiquiri$util$join_classes(classes){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (x){
if(typeof x === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return cljs.core.seq(x);
}
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_)),classes));
});

//# sourceMappingURL=daiquiri.util.js.map
