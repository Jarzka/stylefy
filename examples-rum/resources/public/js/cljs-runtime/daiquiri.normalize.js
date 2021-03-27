goog.provide('daiquiri.normalize');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('daiquiri.util');
daiquiri.normalize.class_name = (function daiquiri$normalize$class_name(x){
if(typeof x === 'string'){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name(x);
} else {
return x;

}
}
});
/**
 * Returns true if `x` is a map lookup form, otherwise false.
 */
daiquiri.normalize.map_lookup_QMARK_ = (function daiquiri$normalize$map_lookup_QMARK_(x){
return ((cljs.core.list_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)));
});
/**
 * Normalize `class` into a vector of classes.
 */
daiquiri.normalize.normalize_class = (function daiquiri$normalize$normalize_class(class$){
if((class$ == null)){
return null;
} else {
if(daiquiri.normalize.map_lookup_QMARK_(class$)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if(cljs.core.list_QMARK_(class$)){
if((cljs.core.first(class$) instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(daiquiri.normalize.class_name,class$);
}
} else {
if((class$ instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if(typeof class$ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if((class$ instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.normalize.class_name(class$)], null);
} else {
if(((((cljs.core.set_QMARK_(class$)) || (cljs.core.sequential_QMARK_(class$)))) && (cljs.core.every_QMARK_((function (p1__27248_SHARP_){
return (((p1__27248_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__27248_SHARP_ === 'string'));
}),class$)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(daiquiri.normalize.class_name,class$);
} else {
if(((cljs.core.set_QMARK_(class$)) || (cljs.core.sequential_QMARK_(class$)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(daiquiri.normalize.class_name,class$);
} else {
return class$;

}
}
}
}
}
}
}
}
});
/**
 * Normalize the `attrs` of an element.
 */
daiquiri.normalize.attributes = (function daiquiri$normalize$attributes(attrs){
var G__27268 = attrs;
if(cljs.core.truth_(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__27268,new cljs.core.Keyword(null,"class","class",-2030961996),daiquiri.normalize.normalize_class);
} else {
return G__27268;
}
});
/**
 * Like clojure.core/merge but concatenate :class entries.
 */
daiquiri.normalize.merge_with_class = (function daiquiri$normalize$merge_with_class(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27329 = arguments.length;
var i__4731__auto___27330 = (0);
while(true){
if((i__4731__auto___27330 < len__4730__auto___27329)){
args__4736__auto__.push((arguments[i__4731__auto___27330]));

var G__27331 = (i__4731__auto___27330 + (1));
i__4731__auto___27330 = G__27331;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var maps__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(daiquiri.normalize.attributes,maps);
var classes = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([maps__$1], 0));
if(cljs.core.seq(maps__$1)){
var G__27282 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,maps__$1);
if((!(cljs.core.empty_QMARK_(classes)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27282,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.vec(classes));
} else {
return G__27282;
}
} else {
return null;
}
}));

(daiquiri.normalize.merge_with_class.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(daiquiri.normalize.merge_with_class.cljs$lang$applyTo = (function (seq27269){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27269));
}));

/**
 * Strip the # and . characters from the beginning of `s`.
 */
daiquiri.normalize.strip_css = (function daiquiri$normalize$strip_css(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(s,/^[.#]/,"");
} else {
return null;
}
});
/**
 * Match `s` as a CSS tag and return a vector of tag name, CSS id and
 *   CSS classes.
 */
daiquiri.normalize.match_tag = (function daiquiri$normalize$match_tag(s){
var matches = cljs.core.re_seq(/[#.]?[^#.]+/,cljs.core.name(s));
var vec__27301 = ((cljs.core.empty_QMARK_(matches))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't match CSS tag: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),s], null))})():((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null),cljs.core.ffirst(matches)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(matches),cljs.core.rest(matches)], null)
));
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27301,(0),null);
var names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27301,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,daiquiri.normalize.strip_css(cljs.core.some((function (p1__27295_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(p1__27295_SHARP_))){
return p1__27295_SHARP_;
} else {
return null;
}
}),names)),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__27296_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.first(p1__27296_SHARP_))){
return daiquiri.normalize.strip_css(p1__27296_SHARP_);
} else {
return null;
}
})),names)], null);
});
/**
 * Normalize the children of a HTML element.
 */
daiquiri.normalize.children = (function daiquiri$normalize$children(x){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(((x == null))?cljs.core.List.EMPTY:((typeof x === 'string')?(new cljs.core.List(null,x,null,(1),null)):((daiquiri.util.element_QMARK_(x))?(new cljs.core.List(null,x,null,(1),null)):((((cljs.core.list_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Symbol))))?(new cljs.core.List(null,x,null,(1),null)):((cljs.core.list_QMARK_(x))?x:((((cljs.core.sequential_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(1))) && (cljs.core.sequential_QMARK_(cljs.core.first(x))) && ((!(typeof cljs.core.first(x) === 'string'))) && ((!(daiquiri.util.element_QMARK_(cljs.core.first(x)))))))?(function (){var G__27320 = cljs.core.first(x);
return (daiquiri.normalize.children.cljs$core$IFn$_invoke$arity$1 ? daiquiri.normalize.children.cljs$core$IFn$_invoke$arity$1(G__27320) : daiquiri.normalize.children.call(null,G__27320));
})():((cljs.core.sequential_QMARK_(x))?x:(new cljs.core.List(null,x,null,(1),null))
))))))));
});
/**
 * Returns true if `x` are the attributes of an HTML element,
 *   otherwise false.
 */
daiquiri.normalize.attrs_QMARK_ = (function daiquiri$normalize$attrs_QMARK_(x){
return cljs.core.map_QMARK_(x);
});
/**
 * Ensure an element vector is of the form [tag-name attrs content].
 */
daiquiri.normalize.element = (function daiquiri$normalize$element(p__27321){
var vec__27322 = p__27321;
var seq__27323 = cljs.core.seq(vec__27322);
var first__27324 = cljs.core.first(seq__27323);
var seq__27323__$1 = cljs.core.next(seq__27323);
var tag = first__27324;
var content = seq__27323__$1;
if((((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," is not a valid element name."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"content","content",15833224),content], null));
}

var vec__27325 = daiquiri.normalize.match_tag(tag);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27325,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27325,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27325,(2),null);
var tag_attrs = (function (){var G__27328 = cljs.core.PersistentArrayMap.EMPTY;
var G__27328__$1 = (((!(cljs.core.empty_QMARK_(id))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27328,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__27328);
if((!(cljs.core.empty_QMARK_(class$)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27328__$1,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
} else {
return G__27328__$1;
}
})();
var map_attrs = cljs.core.first(content);
if(daiquiri.normalize.attrs_QMARK_(map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_attrs,map_attrs], 0)),daiquiri.normalize.children(cljs.core.next(content))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,daiquiri.normalize.attributes(tag_attrs),daiquiri.normalize.children(content)], null);
}
});

//# sourceMappingURL=daiquiri.normalize.js.map
