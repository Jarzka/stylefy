goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4120__auto__ = elem.textContent;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__35633 = arguments.length;
switch (G__35633) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__35691 = arguments.length;
switch (G__35691) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__35700 = arguments.length;
switch (G__35700) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__35698_SHARP_){
return (!((p1__35698_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37009 = arguments.length;
var i__4731__auto___37010 = (0);
while(true){
if((i__4731__auto___37010 < len__4730__auto___37009)){
args__4736__auto__.push((arguments[i__4731__auto___37010]));

var G__37011 = (i__4731__auto___37010 + (1));
i__4731__auto___37010 = G__37011;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__35741_37012 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__35742_37013 = null;
var count__35743_37014 = (0);
var i__35744_37015 = (0);
while(true){
if((i__35744_37015 < count__35743_37014)){
var vec__35753_37016 = chunk__35742_37013.cljs$core$IIndexed$_nth$arity$2(null,i__35744_37015);
var k_37017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35753_37016,(0),null);
var v_37018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35753_37016,(1),null);
style.setProperty(dommy.utils.as_str(k_37017),v_37018);


var G__37019 = seq__35741_37012;
var G__37020 = chunk__35742_37013;
var G__37021 = count__35743_37014;
var G__37022 = (i__35744_37015 + (1));
seq__35741_37012 = G__37019;
chunk__35742_37013 = G__37020;
count__35743_37014 = G__37021;
i__35744_37015 = G__37022;
continue;
} else {
var temp__5735__auto___37023 = cljs.core.seq(seq__35741_37012);
if(temp__5735__auto___37023){
var seq__35741_37024__$1 = temp__5735__auto___37023;
if(cljs.core.chunked_seq_QMARK_(seq__35741_37024__$1)){
var c__4550__auto___37025 = cljs.core.chunk_first(seq__35741_37024__$1);
var G__37026 = cljs.core.chunk_rest(seq__35741_37024__$1);
var G__37027 = c__4550__auto___37025;
var G__37028 = cljs.core.count(c__4550__auto___37025);
var G__37029 = (0);
seq__35741_37012 = G__37026;
chunk__35742_37013 = G__37027;
count__35743_37014 = G__37028;
i__35744_37015 = G__37029;
continue;
} else {
var vec__35760_37030 = cljs.core.first(seq__35741_37024__$1);
var k_37031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35760_37030,(0),null);
var v_37032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35760_37030,(1),null);
style.setProperty(dommy.utils.as_str(k_37031),v_37032);


var G__37033 = cljs.core.next(seq__35741_37024__$1);
var G__37034 = null;
var G__37035 = (0);
var G__37036 = (0);
seq__35741_37012 = G__37033;
chunk__35742_37013 = G__37034;
count__35743_37014 = G__37035;
i__35744_37015 = G__37036;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq35726){
var G__35727 = cljs.core.first(seq35726);
var seq35726__$1 = cljs.core.next(seq35726);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35727,seq35726__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37041 = arguments.length;
var i__4731__auto___37042 = (0);
while(true){
if((i__4731__auto___37042 < len__4730__auto___37041)){
args__4736__auto__.push((arguments[i__4731__auto___37042]));

var G__37044 = (i__4731__auto___37042 + (1));
i__4731__auto___37042 = G__37044;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__35811_37045 = cljs.core.seq(keywords);
var chunk__35812_37046 = null;
var count__35813_37047 = (0);
var i__35814_37048 = (0);
while(true){
if((i__35814_37048 < count__35813_37047)){
var kw_37051 = chunk__35812_37046.cljs$core$IIndexed$_nth$arity$2(null,i__35814_37048);
style.removeProperty(dommy.utils.as_str(kw_37051));


var G__37054 = seq__35811_37045;
var G__37055 = chunk__35812_37046;
var G__37056 = count__35813_37047;
var G__37057 = (i__35814_37048 + (1));
seq__35811_37045 = G__37054;
chunk__35812_37046 = G__37055;
count__35813_37047 = G__37056;
i__35814_37048 = G__37057;
continue;
} else {
var temp__5735__auto___37058 = cljs.core.seq(seq__35811_37045);
if(temp__5735__auto___37058){
var seq__35811_37059__$1 = temp__5735__auto___37058;
if(cljs.core.chunked_seq_QMARK_(seq__35811_37059__$1)){
var c__4550__auto___37061 = cljs.core.chunk_first(seq__35811_37059__$1);
var G__37062 = cljs.core.chunk_rest(seq__35811_37059__$1);
var G__37063 = c__4550__auto___37061;
var G__37064 = cljs.core.count(c__4550__auto___37061);
var G__37065 = (0);
seq__35811_37045 = G__37062;
chunk__35812_37046 = G__37063;
count__35813_37047 = G__37064;
i__35814_37048 = G__37065;
continue;
} else {
var kw_37067 = cljs.core.first(seq__35811_37059__$1);
style.removeProperty(dommy.utils.as_str(kw_37067));


var G__37068 = cljs.core.next(seq__35811_37059__$1);
var G__37069 = null;
var G__37070 = (0);
var G__37071 = (0);
seq__35811_37045 = G__37068;
chunk__35812_37046 = G__37069;
count__35813_37047 = G__37070;
i__35814_37048 = G__37071;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq35765){
var G__35767 = cljs.core.first(seq35765);
var seq35765__$1 = cljs.core.next(seq35765);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35767,seq35765__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37076 = arguments.length;
var i__4731__auto___37077 = (0);
while(true){
if((i__4731__auto___37077 < len__4730__auto___37076)){
args__4736__auto__.push((arguments[i__4731__auto___37077]));

var G__37082 = (i__4731__auto___37077 + (1));
i__4731__auto___37077 = G__37082;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__35850_37090 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__35851_37091 = null;
var count__35852_37092 = (0);
var i__35853_37093 = (0);
while(true){
if((i__35853_37093 < count__35852_37092)){
var vec__35864_37100 = chunk__35851_37091.cljs$core$IIndexed$_nth$arity$2(null,i__35853_37093);
var k_37101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35864_37100,(0),null);
var v_37102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35864_37100,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37101,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37102),"px"].join('')], 0));


var G__37108 = seq__35850_37090;
var G__37109 = chunk__35851_37091;
var G__37110 = count__35852_37092;
var G__37111 = (i__35853_37093 + (1));
seq__35850_37090 = G__37108;
chunk__35851_37091 = G__37109;
count__35852_37092 = G__37110;
i__35853_37093 = G__37111;
continue;
} else {
var temp__5735__auto___37113 = cljs.core.seq(seq__35850_37090);
if(temp__5735__auto___37113){
var seq__35850_37115__$1 = temp__5735__auto___37113;
if(cljs.core.chunked_seq_QMARK_(seq__35850_37115__$1)){
var c__4550__auto___37117 = cljs.core.chunk_first(seq__35850_37115__$1);
var G__37118 = cljs.core.chunk_rest(seq__35850_37115__$1);
var G__37119 = c__4550__auto___37117;
var G__37120 = cljs.core.count(c__4550__auto___37117);
var G__37121 = (0);
seq__35850_37090 = G__37118;
chunk__35851_37091 = G__37119;
count__35852_37092 = G__37120;
i__35853_37093 = G__37121;
continue;
} else {
var vec__35873_37126 = cljs.core.first(seq__35850_37115__$1);
var k_37127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35873_37126,(0),null);
var v_37128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35873_37126,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37127,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37128),"px"].join('')], 0));


var G__37140 = cljs.core.next(seq__35850_37115__$1);
var G__37141 = null;
var G__37142 = (0);
var G__37143 = (0);
seq__35850_37090 = G__37140;
chunk__35851_37091 = G__37141;
count__35852_37092 = G__37142;
i__35853_37093 = G__37143;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq35832){
var G__35833 = cljs.core.first(seq35832);
var seq35832__$1 = cljs.core.next(seq35832);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35833,seq35832__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__35892 = arguments.length;
switch (G__35892) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37149 = arguments.length;
var i__4731__auto___37150 = (0);
while(true){
if((i__4731__auto___37150 < len__4730__auto___37149)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37150]));

var G__37151 = (i__4731__auto___37150 + (1));
i__4731__auto___37150 = G__37151;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__35943 = elem;
(G__35943[k__$1] = v);

return G__35943;
} else {
var G__35944 = elem;
G__35944.setAttribute(k__$1,v);

return G__35944;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__35945_37164 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__35946_37165 = null;
var count__35947_37166 = (0);
var i__35948_37167 = (0);
while(true){
if((i__35948_37167 < count__35947_37166)){
var vec__35959_37168 = chunk__35946_37165.cljs$core$IIndexed$_nth$arity$2(null,i__35948_37167);
var k_37169__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35959_37168,(0),null);
var v_37170__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35959_37168,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_37169__$1,v_37170__$1);


var G__37171 = seq__35945_37164;
var G__37173 = chunk__35946_37165;
var G__37174 = count__35947_37166;
var G__37175 = (i__35948_37167 + (1));
seq__35945_37164 = G__37171;
chunk__35946_37165 = G__37173;
count__35947_37166 = G__37174;
i__35948_37167 = G__37175;
continue;
} else {
var temp__5735__auto___37176 = cljs.core.seq(seq__35945_37164);
if(temp__5735__auto___37176){
var seq__35945_37177__$1 = temp__5735__auto___37176;
if(cljs.core.chunked_seq_QMARK_(seq__35945_37177__$1)){
var c__4550__auto___37179 = cljs.core.chunk_first(seq__35945_37177__$1);
var G__37181 = cljs.core.chunk_rest(seq__35945_37177__$1);
var G__37182 = c__4550__auto___37179;
var G__37183 = cljs.core.count(c__4550__auto___37179);
var G__37184 = (0);
seq__35945_37164 = G__37181;
chunk__35946_37165 = G__37182;
count__35947_37166 = G__37183;
i__35948_37167 = G__37184;
continue;
} else {
var vec__35962_37185 = cljs.core.first(seq__35945_37177__$1);
var k_37186__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962_37185,(0),null);
var v_37187__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962_37185,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_37186__$1,v_37187__$1);


var G__37188 = cljs.core.next(seq__35945_37177__$1);
var G__37189 = null;
var G__37190 = (0);
var G__37191 = (0);
seq__35945_37164 = G__37188;
chunk__35946_37165 = G__37189;
count__35947_37166 = G__37190;
i__35948_37167 = G__37191;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq35882){
var G__35886 = cljs.core.first(seq35882);
var seq35882__$1 = cljs.core.next(seq35882);
var G__35890 = cljs.core.first(seq35882__$1);
var seq35882__$2 = cljs.core.next(seq35882__$1);
var G__35891 = cljs.core.first(seq35882__$2);
var seq35882__$3 = cljs.core.next(seq35882__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35886,G__35890,G__35891,seq35882__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__35973 = arguments.length;
switch (G__35973) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37203 = arguments.length;
var i__4731__auto___37204 = (0);
while(true){
if((i__4731__auto___37204 < len__4730__auto___37203)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37204]));

var G__37205 = (i__4731__auto___37204 + (1));
i__4731__auto___37204 = G__37205;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_37206__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__35995 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__35995.cljs$core$IFn$_invoke$arity$1 ? fexpr__35995.cljs$core$IFn$_invoke$arity$1(k_37206__$1) : fexpr__35995.call(null,k_37206__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_37206__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__35996_37208 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__35997_37209 = null;
var count__35998_37210 = (0);
var i__35999_37211 = (0);
while(true){
if((i__35999_37211 < count__35998_37210)){
var k_37212__$1 = chunk__35997_37209.cljs$core$IIndexed$_nth$arity$2(null,i__35999_37211);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_37212__$1);


var G__37213 = seq__35996_37208;
var G__37214 = chunk__35997_37209;
var G__37215 = count__35998_37210;
var G__37216 = (i__35999_37211 + (1));
seq__35996_37208 = G__37213;
chunk__35997_37209 = G__37214;
count__35998_37210 = G__37215;
i__35999_37211 = G__37216;
continue;
} else {
var temp__5735__auto___37220 = cljs.core.seq(seq__35996_37208);
if(temp__5735__auto___37220){
var seq__35996_37221__$1 = temp__5735__auto___37220;
if(cljs.core.chunked_seq_QMARK_(seq__35996_37221__$1)){
var c__4550__auto___37222 = cljs.core.chunk_first(seq__35996_37221__$1);
var G__37223 = cljs.core.chunk_rest(seq__35996_37221__$1);
var G__37224 = c__4550__auto___37222;
var G__37225 = cljs.core.count(c__4550__auto___37222);
var G__37226 = (0);
seq__35996_37208 = G__37223;
chunk__35997_37209 = G__37224;
count__35998_37210 = G__37225;
i__35999_37211 = G__37226;
continue;
} else {
var k_37227__$1 = cljs.core.first(seq__35996_37221__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_37227__$1);


var G__37228 = cljs.core.next(seq__35996_37221__$1);
var G__37229 = null;
var G__37230 = (0);
var G__37231 = (0);
seq__35996_37208 = G__37228;
chunk__35997_37209 = G__37229;
count__35998_37210 = G__37230;
i__35999_37211 = G__37231;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq35970){
var G__35971 = cljs.core.first(seq35970);
var seq35970__$1 = cljs.core.next(seq35970);
var G__35972 = cljs.core.first(seq35970__$1);
var seq35970__$2 = cljs.core.next(seq35970__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35971,G__35972,seq35970__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__36070 = arguments.length;
switch (G__36070) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__36081 = arguments.length;
switch (G__36081) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37243 = arguments.length;
var i__4731__auto___37244 = (0);
while(true){
if((i__4731__auto___37244 < len__4730__auto___37243)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37244]));

var G__37245 = (i__4731__auto___37244 + (1));
i__4731__auto___37244 = G__37245;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___37248 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37248)){
var class_list_37249 = temp__5733__auto___37248;
var seq__36083_37250 = cljs.core.seq(classes__$1);
var chunk__36084_37251 = null;
var count__36085_37252 = (0);
var i__36086_37253 = (0);
while(true){
if((i__36086_37253 < count__36085_37252)){
var c_37254 = chunk__36084_37251.cljs$core$IIndexed$_nth$arity$2(null,i__36086_37253);
class_list_37249.add(c_37254);


var G__37255 = seq__36083_37250;
var G__37256 = chunk__36084_37251;
var G__37257 = count__36085_37252;
var G__37258 = (i__36086_37253 + (1));
seq__36083_37250 = G__37255;
chunk__36084_37251 = G__37256;
count__36085_37252 = G__37257;
i__36086_37253 = G__37258;
continue;
} else {
var temp__5735__auto___37259 = cljs.core.seq(seq__36083_37250);
if(temp__5735__auto___37259){
var seq__36083_37260__$1 = temp__5735__auto___37259;
if(cljs.core.chunked_seq_QMARK_(seq__36083_37260__$1)){
var c__4550__auto___37261 = cljs.core.chunk_first(seq__36083_37260__$1);
var G__37262 = cljs.core.chunk_rest(seq__36083_37260__$1);
var G__37263 = c__4550__auto___37261;
var G__37264 = cljs.core.count(c__4550__auto___37261);
var G__37265 = (0);
seq__36083_37250 = G__37262;
chunk__36084_37251 = G__37263;
count__36085_37252 = G__37264;
i__36086_37253 = G__37265;
continue;
} else {
var c_37269 = cljs.core.first(seq__36083_37260__$1);
class_list_37249.add(c_37269);


var G__37270 = cljs.core.next(seq__36083_37260__$1);
var G__37271 = null;
var G__37272 = (0);
var G__37273 = (0);
seq__36083_37250 = G__37270;
chunk__36084_37251 = G__37271;
count__36085_37252 = G__37272;
i__36086_37253 = G__37273;
continue;
}
} else {
}
}
break;
}
} else {
var seq__36099_37274 = cljs.core.seq(classes__$1);
var chunk__36100_37275 = null;
var count__36101_37276 = (0);
var i__36102_37277 = (0);
while(true){
if((i__36102_37277 < count__36101_37276)){
var c_37278 = chunk__36100_37275.cljs$core$IIndexed$_nth$arity$2(null,i__36102_37277);
var class_name_37282 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37282,c_37278))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37282 === ""))?c_37278:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37282)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37278)].join('')));
}


var G__37320 = seq__36099_37274;
var G__37321 = chunk__36100_37275;
var G__37322 = count__36101_37276;
var G__37323 = (i__36102_37277 + (1));
seq__36099_37274 = G__37320;
chunk__36100_37275 = G__37321;
count__36101_37276 = G__37322;
i__36102_37277 = G__37323;
continue;
} else {
var temp__5735__auto___37324 = cljs.core.seq(seq__36099_37274);
if(temp__5735__auto___37324){
var seq__36099_37325__$1 = temp__5735__auto___37324;
if(cljs.core.chunked_seq_QMARK_(seq__36099_37325__$1)){
var c__4550__auto___37326 = cljs.core.chunk_first(seq__36099_37325__$1);
var G__37327 = cljs.core.chunk_rest(seq__36099_37325__$1);
var G__37328 = c__4550__auto___37326;
var G__37329 = cljs.core.count(c__4550__auto___37326);
var G__37330 = (0);
seq__36099_37274 = G__37327;
chunk__36100_37275 = G__37328;
count__36101_37276 = G__37329;
i__36102_37277 = G__37330;
continue;
} else {
var c_37331 = cljs.core.first(seq__36099_37325__$1);
var class_name_37332 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37332,c_37331))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37332 === ""))?c_37331:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37332)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37331)].join('')));
}


var G__37334 = cljs.core.next(seq__36099_37325__$1);
var G__37335 = null;
var G__37336 = (0);
var G__37337 = (0);
seq__36099_37274 = G__37334;
chunk__36100_37275 = G__37335;
count__36101_37276 = G__37336;
i__36102_37277 = G__37337;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__36116_37341 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__36117_37342 = null;
var count__36118_37343 = (0);
var i__36119_37344 = (0);
while(true){
if((i__36119_37344 < count__36118_37343)){
var c_37348 = chunk__36117_37342.cljs$core$IIndexed$_nth$arity$2(null,i__36119_37344);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37348);


var G__37349 = seq__36116_37341;
var G__37350 = chunk__36117_37342;
var G__37351 = count__36118_37343;
var G__37352 = (i__36119_37344 + (1));
seq__36116_37341 = G__37349;
chunk__36117_37342 = G__37350;
count__36118_37343 = G__37351;
i__36119_37344 = G__37352;
continue;
} else {
var temp__5735__auto___37353 = cljs.core.seq(seq__36116_37341);
if(temp__5735__auto___37353){
var seq__36116_37354__$1 = temp__5735__auto___37353;
if(cljs.core.chunked_seq_QMARK_(seq__36116_37354__$1)){
var c__4550__auto___37355 = cljs.core.chunk_first(seq__36116_37354__$1);
var G__37356 = cljs.core.chunk_rest(seq__36116_37354__$1);
var G__37357 = c__4550__auto___37355;
var G__37358 = cljs.core.count(c__4550__auto___37355);
var G__37359 = (0);
seq__36116_37341 = G__37356;
chunk__36117_37342 = G__37357;
count__36118_37343 = G__37358;
i__36119_37344 = G__37359;
continue;
} else {
var c_37360 = cljs.core.first(seq__36116_37354__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37360);


var G__37361 = cljs.core.next(seq__36116_37354__$1);
var G__37362 = null;
var G__37363 = (0);
var G__37364 = (0);
seq__36116_37341 = G__37361;
chunk__36117_37342 = G__37362;
count__36118_37343 = G__37363;
i__36119_37344 = G__37364;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq36078){
var G__36079 = cljs.core.first(seq36078);
var seq36078__$1 = cljs.core.next(seq36078);
var G__36080 = cljs.core.first(seq36078__$1);
var seq36078__$2 = cljs.core.next(seq36078__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36079,G__36080,seq36078__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__36136 = arguments.length;
switch (G__36136) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37366 = arguments.length;
var i__4731__auto___37367 = (0);
while(true){
if((i__4731__auto___37367 < len__4730__auto___37366)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37367]));

var G__37368 = (i__4731__auto___37367 + (1));
i__4731__auto___37367 = G__37368;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___37369 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37369)){
var class_list_37370 = temp__5733__auto___37369;
class_list_37370.remove(c__$1);
} else {
var class_name_37371 = dommy.core.class$(elem);
var new_class_name_37372 = dommy.utils.remove_class_str(class_name_37371,c__$1);
if((class_name_37371 === new_class_name_37372)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_37372);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__36151 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__36152 = null;
var count__36153 = (0);
var i__36154 = (0);
while(true){
if((i__36154 < count__36153)){
var c = chunk__36152.cljs$core$IIndexed$_nth$arity$2(null,i__36154);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37379 = seq__36151;
var G__37380 = chunk__36152;
var G__37381 = count__36153;
var G__37382 = (i__36154 + (1));
seq__36151 = G__37379;
chunk__36152 = G__37380;
count__36153 = G__37381;
i__36154 = G__37382;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36151);
if(temp__5735__auto__){
var seq__36151__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36151__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36151__$1);
var G__37386 = cljs.core.chunk_rest(seq__36151__$1);
var G__37387 = c__4550__auto__;
var G__37388 = cljs.core.count(c__4550__auto__);
var G__37389 = (0);
seq__36151 = G__37386;
chunk__36152 = G__37387;
count__36153 = G__37388;
i__36154 = G__37389;
continue;
} else {
var c = cljs.core.first(seq__36151__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37393 = cljs.core.next(seq__36151__$1);
var G__37394 = null;
var G__37395 = (0);
var G__37396 = (0);
seq__36151 = G__37393;
chunk__36152 = G__37394;
count__36153 = G__37395;
i__36154 = G__37396;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq36132){
var G__36133 = cljs.core.first(seq36132);
var seq36132__$1 = cljs.core.next(seq36132);
var G__36134 = cljs.core.first(seq36132__$1);
var seq36132__$2 = cljs.core.next(seq36132__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36133,G__36134,seq36132__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__36168 = arguments.length;
switch (G__36168) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___37398 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37398)){
var class_list_37399 = temp__5733__auto___37398;
class_list_37399.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__36176 = arguments.length;
switch (G__36176) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__36189 = arguments.length;
switch (G__36189) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__36201 = arguments.length;
switch (G__36201) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37406 = arguments.length;
var i__4731__auto___37407 = (0);
while(true){
if((i__4731__auto___37407 < len__4730__auto___37406)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37407]));

var G__37408 = (i__4731__auto___37407 + (1));
i__4731__auto___37407 = G__37408;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__36212 = parent;
G__36212.appendChild(child);

return G__36212;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__36218_37444 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__36219_37445 = null;
var count__36220_37446 = (0);
var i__36221_37447 = (0);
while(true){
if((i__36221_37447 < count__36220_37446)){
var c_37448 = chunk__36219_37445.cljs$core$IIndexed$_nth$arity$2(null,i__36221_37447);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37448);


var G__37449 = seq__36218_37444;
var G__37450 = chunk__36219_37445;
var G__37451 = count__36220_37446;
var G__37452 = (i__36221_37447 + (1));
seq__36218_37444 = G__37449;
chunk__36219_37445 = G__37450;
count__36220_37446 = G__37451;
i__36221_37447 = G__37452;
continue;
} else {
var temp__5735__auto___37453 = cljs.core.seq(seq__36218_37444);
if(temp__5735__auto___37453){
var seq__36218_37454__$1 = temp__5735__auto___37453;
if(cljs.core.chunked_seq_QMARK_(seq__36218_37454__$1)){
var c__4550__auto___37455 = cljs.core.chunk_first(seq__36218_37454__$1);
var G__37456 = cljs.core.chunk_rest(seq__36218_37454__$1);
var G__37457 = c__4550__auto___37455;
var G__37458 = cljs.core.count(c__4550__auto___37455);
var G__37459 = (0);
seq__36218_37444 = G__37456;
chunk__36219_37445 = G__37457;
count__36220_37446 = G__37458;
i__36221_37447 = G__37459;
continue;
} else {
var c_37460 = cljs.core.first(seq__36218_37454__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37460);


var G__37461 = cljs.core.next(seq__36218_37454__$1);
var G__37462 = null;
var G__37463 = (0);
var G__37464 = (0);
seq__36218_37444 = G__37461;
chunk__36219_37445 = G__37462;
count__36220_37446 = G__37463;
i__36221_37447 = G__37464;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq36198){
var G__36199 = cljs.core.first(seq36198);
var seq36198__$1 = cljs.core.next(seq36198);
var G__36200 = cljs.core.first(seq36198__$1);
var seq36198__$2 = cljs.core.next(seq36198__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36199,G__36200,seq36198__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__36263 = arguments.length;
switch (G__36263) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37469 = arguments.length;
var i__4731__auto___37470 = (0);
while(true){
if((i__4731__auto___37470 < len__4730__auto___37469)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37470]));

var G__37471 = (i__4731__auto___37470 + (1));
i__4731__auto___37470 = G__37471;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__36269 = parent;
G__36269.insertBefore(child,parent.firstChild);

return G__36269;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__36270_37473 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__36271_37474 = null;
var count__36272_37475 = (0);
var i__36273_37476 = (0);
while(true){
if((i__36273_37476 < count__36272_37475)){
var c_37477 = chunk__36271_37474.cljs$core$IIndexed$_nth$arity$2(null,i__36273_37476);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37477);


var G__37478 = seq__36270_37473;
var G__37479 = chunk__36271_37474;
var G__37480 = count__36272_37475;
var G__37481 = (i__36273_37476 + (1));
seq__36270_37473 = G__37478;
chunk__36271_37474 = G__37479;
count__36272_37475 = G__37480;
i__36273_37476 = G__37481;
continue;
} else {
var temp__5735__auto___37482 = cljs.core.seq(seq__36270_37473);
if(temp__5735__auto___37482){
var seq__36270_37483__$1 = temp__5735__auto___37482;
if(cljs.core.chunked_seq_QMARK_(seq__36270_37483__$1)){
var c__4550__auto___37484 = cljs.core.chunk_first(seq__36270_37483__$1);
var G__37485 = cljs.core.chunk_rest(seq__36270_37483__$1);
var G__37486 = c__4550__auto___37484;
var G__37487 = cljs.core.count(c__4550__auto___37484);
var G__37488 = (0);
seq__36270_37473 = G__37485;
chunk__36271_37474 = G__37486;
count__36272_37475 = G__37487;
i__36273_37476 = G__37488;
continue;
} else {
var c_37489 = cljs.core.first(seq__36270_37483__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37489);


var G__37490 = cljs.core.next(seq__36270_37483__$1);
var G__37491 = null;
var G__37492 = (0);
var G__37493 = (0);
seq__36270_37473 = G__37490;
chunk__36271_37474 = G__37491;
count__36272_37475 = G__37492;
i__36273_37476 = G__37493;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq36260){
var G__36261 = cljs.core.first(seq36260);
var seq36260__$1 = cljs.core.next(seq36260);
var G__36262 = cljs.core.first(seq36260__$1);
var seq36260__$2 = cljs.core.next(seq36260__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36261,G__36262,seq36260__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___37494 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___37494)){
var next_37495 = temp__5733__auto___37494;
dommy.core.insert_before_BANG_(elem,next_37495);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__36312 = arguments.length;
switch (G__36312) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__36320 = p;
G__36320.removeChild(elem);

return G__36320;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36331){
var vec__36332 = p__36331;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36332,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36332,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4120__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4109__auto__ = related_target;
if(cljs.core.truth_(and__4109__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4109__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4109__auto__ = selected_target;
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4109__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4120__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37499 = arguments.length;
var i__4731__auto___37500 = (0);
while(true){
if((i__4731__auto___37500 < len__4730__auto___37499)){
args__4736__auto__.push((arguments[i__4731__auto___37500]));

var G__37501 = (i__4731__auto___37500 + (1));
i__4731__auto___37500 = G__37501;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq36360){
var G__36361 = cljs.core.first(seq36360);
var seq36360__$1 = cljs.core.next(seq36360);
var G__36362 = cljs.core.first(seq36360__$1);
var seq36360__$2 = cljs.core.next(seq36360__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36361,G__36362,seq36360__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37503 = arguments.length;
var i__4731__auto___37505 = (0);
while(true){
if((i__4731__auto___37505 < len__4730__auto___37503)){
args__4736__auto__.push((arguments[i__4731__auto___37505]));

var G__37507 = (i__4731__auto___37505 + (1));
i__4731__auto___37505 = G__37507;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36456_37511 = dommy.core.elem_and_selector(elem_sel);
var elem_37512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36456_37511,(0),null);
var selector_37513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36456_37511,(1),null);
var seq__36464_37515 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36471_37516 = null;
var count__36472_37517 = (0);
var i__36473_37518 = (0);
while(true){
if((i__36473_37518 < count__36472_37517)){
var vec__36636_37519 = chunk__36471_37516.cljs$core$IIndexed$_nth$arity$2(null,i__36473_37518);
var orig_type_37520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36636_37519,(0),null);
var f_37521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36636_37519,(1),null);
var seq__36474_37522 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37520,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37520,cljs.core.identity])));
var chunk__36476_37523 = null;
var count__36477_37524 = (0);
var i__36478_37525 = (0);
while(true){
if((i__36478_37525 < count__36477_37524)){
var vec__36660_37526 = chunk__36476_37523.cljs$core$IIndexed$_nth$arity$2(null,i__36478_37525);
var actual_type_37527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36660_37526,(0),null);
var factory_37528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36660_37526,(1),null);
var canonical_f_37529 = (function (){var G__36668 = (factory_37528.cljs$core$IFn$_invoke$arity$1 ? factory_37528.cljs$core$IFn$_invoke$arity$1(f_37521) : factory_37528.call(null,f_37521));
var fexpr__36667 = (cljs.core.truth_(selector_37513)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37512,selector_37513):cljs.core.identity);
return (fexpr__36667.cljs$core$IFn$_invoke$arity$1 ? fexpr__36667.cljs$core$IFn$_invoke$arity$1(G__36668) : fexpr__36667.call(null,G__36668));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37512,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37513,actual_type_37527,f_37521], null),canonical_f_37529], 0));

if(cljs.core.truth_(elem_37512.addEventListener)){
elem_37512.addEventListener(cljs.core.name(actual_type_37527),canonical_f_37529);
} else {
elem_37512.attachEvent(cljs.core.name(actual_type_37527),canonical_f_37529);
}


var G__37532 = seq__36474_37522;
var G__37533 = chunk__36476_37523;
var G__37534 = count__36477_37524;
var G__37535 = (i__36478_37525 + (1));
seq__36474_37522 = G__37532;
chunk__36476_37523 = G__37533;
count__36477_37524 = G__37534;
i__36478_37525 = G__37535;
continue;
} else {
var temp__5735__auto___37538 = cljs.core.seq(seq__36474_37522);
if(temp__5735__auto___37538){
var seq__36474_37539__$1 = temp__5735__auto___37538;
if(cljs.core.chunked_seq_QMARK_(seq__36474_37539__$1)){
var c__4550__auto___37540 = cljs.core.chunk_first(seq__36474_37539__$1);
var G__37541 = cljs.core.chunk_rest(seq__36474_37539__$1);
var G__37542 = c__4550__auto___37540;
var G__37543 = cljs.core.count(c__4550__auto___37540);
var G__37544 = (0);
seq__36474_37522 = G__37541;
chunk__36476_37523 = G__37542;
count__36477_37524 = G__37543;
i__36478_37525 = G__37544;
continue;
} else {
var vec__36674_37545 = cljs.core.first(seq__36474_37539__$1);
var actual_type_37546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36674_37545,(0),null);
var factory_37547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36674_37545,(1),null);
var canonical_f_37548 = (function (){var G__36679 = (factory_37547.cljs$core$IFn$_invoke$arity$1 ? factory_37547.cljs$core$IFn$_invoke$arity$1(f_37521) : factory_37547.call(null,f_37521));
var fexpr__36678 = (cljs.core.truth_(selector_37513)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37512,selector_37513):cljs.core.identity);
return (fexpr__36678.cljs$core$IFn$_invoke$arity$1 ? fexpr__36678.cljs$core$IFn$_invoke$arity$1(G__36679) : fexpr__36678.call(null,G__36679));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37512,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37513,actual_type_37546,f_37521], null),canonical_f_37548], 0));

if(cljs.core.truth_(elem_37512.addEventListener)){
elem_37512.addEventListener(cljs.core.name(actual_type_37546),canonical_f_37548);
} else {
elem_37512.attachEvent(cljs.core.name(actual_type_37546),canonical_f_37548);
}


var G__37551 = cljs.core.next(seq__36474_37539__$1);
var G__37552 = null;
var G__37553 = (0);
var G__37554 = (0);
seq__36474_37522 = G__37551;
chunk__36476_37523 = G__37552;
count__36477_37524 = G__37553;
i__36478_37525 = G__37554;
continue;
}
} else {
}
}
break;
}

var G__37555 = seq__36464_37515;
var G__37556 = chunk__36471_37516;
var G__37557 = count__36472_37517;
var G__37558 = (i__36473_37518 + (1));
seq__36464_37515 = G__37555;
chunk__36471_37516 = G__37556;
count__36472_37517 = G__37557;
i__36473_37518 = G__37558;
continue;
} else {
var temp__5735__auto___37559 = cljs.core.seq(seq__36464_37515);
if(temp__5735__auto___37559){
var seq__36464_37560__$1 = temp__5735__auto___37559;
if(cljs.core.chunked_seq_QMARK_(seq__36464_37560__$1)){
var c__4550__auto___37562 = cljs.core.chunk_first(seq__36464_37560__$1);
var G__37563 = cljs.core.chunk_rest(seq__36464_37560__$1);
var G__37564 = c__4550__auto___37562;
var G__37565 = cljs.core.count(c__4550__auto___37562);
var G__37566 = (0);
seq__36464_37515 = G__37563;
chunk__36471_37516 = G__37564;
count__36472_37517 = G__37565;
i__36473_37518 = G__37566;
continue;
} else {
var vec__36683_37569 = cljs.core.first(seq__36464_37560__$1);
var orig_type_37570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36683_37569,(0),null);
var f_37571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36683_37569,(1),null);
var seq__36465_37573 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37570,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37570,cljs.core.identity])));
var chunk__36467_37574 = null;
var count__36468_37575 = (0);
var i__36469_37576 = (0);
while(true){
if((i__36469_37576 < count__36468_37575)){
var vec__36708_37577 = chunk__36467_37574.cljs$core$IIndexed$_nth$arity$2(null,i__36469_37576);
var actual_type_37579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36708_37577,(0),null);
var factory_37580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36708_37577,(1),null);
var canonical_f_37606 = (function (){var G__36712 = (factory_37580.cljs$core$IFn$_invoke$arity$1 ? factory_37580.cljs$core$IFn$_invoke$arity$1(f_37571) : factory_37580.call(null,f_37571));
var fexpr__36711 = (cljs.core.truth_(selector_37513)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37512,selector_37513):cljs.core.identity);
return (fexpr__36711.cljs$core$IFn$_invoke$arity$1 ? fexpr__36711.cljs$core$IFn$_invoke$arity$1(G__36712) : fexpr__36711.call(null,G__36712));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37512,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37513,actual_type_37579,f_37571], null),canonical_f_37606], 0));

if(cljs.core.truth_(elem_37512.addEventListener)){
elem_37512.addEventListener(cljs.core.name(actual_type_37579),canonical_f_37606);
} else {
elem_37512.attachEvent(cljs.core.name(actual_type_37579),canonical_f_37606);
}


var G__37608 = seq__36465_37573;
var G__37609 = chunk__36467_37574;
var G__37610 = count__36468_37575;
var G__37611 = (i__36469_37576 + (1));
seq__36465_37573 = G__37608;
chunk__36467_37574 = G__37609;
count__36468_37575 = G__37610;
i__36469_37576 = G__37611;
continue;
} else {
var temp__5735__auto___37612__$1 = cljs.core.seq(seq__36465_37573);
if(temp__5735__auto___37612__$1){
var seq__36465_37613__$1 = temp__5735__auto___37612__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36465_37613__$1)){
var c__4550__auto___37616 = cljs.core.chunk_first(seq__36465_37613__$1);
var G__37618 = cljs.core.chunk_rest(seq__36465_37613__$1);
var G__37619 = c__4550__auto___37616;
var G__37620 = cljs.core.count(c__4550__auto___37616);
var G__37621 = (0);
seq__36465_37573 = G__37618;
chunk__36467_37574 = G__37619;
count__36468_37575 = G__37620;
i__36469_37576 = G__37621;
continue;
} else {
var vec__36713_37622 = cljs.core.first(seq__36465_37613__$1);
var actual_type_37623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36713_37622,(0),null);
var factory_37624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36713_37622,(1),null);
var canonical_f_37625 = (function (){var G__36717 = (factory_37624.cljs$core$IFn$_invoke$arity$1 ? factory_37624.cljs$core$IFn$_invoke$arity$1(f_37571) : factory_37624.call(null,f_37571));
var fexpr__36716 = (cljs.core.truth_(selector_37513)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37512,selector_37513):cljs.core.identity);
return (fexpr__36716.cljs$core$IFn$_invoke$arity$1 ? fexpr__36716.cljs$core$IFn$_invoke$arity$1(G__36717) : fexpr__36716.call(null,G__36717));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37512,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37513,actual_type_37623,f_37571], null),canonical_f_37625], 0));

if(cljs.core.truth_(elem_37512.addEventListener)){
elem_37512.addEventListener(cljs.core.name(actual_type_37623),canonical_f_37625);
} else {
elem_37512.attachEvent(cljs.core.name(actual_type_37623),canonical_f_37625);
}


var G__37626 = cljs.core.next(seq__36465_37613__$1);
var G__37627 = null;
var G__37628 = (0);
var G__37629 = (0);
seq__36465_37573 = G__37626;
chunk__36467_37574 = G__37627;
count__36468_37575 = G__37628;
i__36469_37576 = G__37629;
continue;
}
} else {
}
}
break;
}

var G__37632 = cljs.core.next(seq__36464_37560__$1);
var G__37633 = null;
var G__37634 = (0);
var G__37635 = (0);
seq__36464_37515 = G__37632;
chunk__36471_37516 = G__37633;
count__36472_37517 = G__37634;
i__36473_37518 = G__37635;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq36430){
var G__36431 = cljs.core.first(seq36430);
var seq36430__$1 = cljs.core.next(seq36430);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36431,seq36430__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37637 = arguments.length;
var i__4731__auto___37638 = (0);
while(true){
if((i__4731__auto___37638 < len__4730__auto___37637)){
args__4736__auto__.push((arguments[i__4731__auto___37638]));

var G__37644 = (i__4731__auto___37638 + (1));
i__4731__auto___37638 = G__37644;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36727_37646 = dommy.core.elem_and_selector(elem_sel);
var elem_37647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36727_37646,(0),null);
var selector_37648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36727_37646,(1),null);
var seq__36730_37649 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36737_37650 = null;
var count__36738_37651 = (0);
var i__36739_37652 = (0);
while(true){
if((i__36739_37652 < count__36738_37651)){
var vec__36856_37653 = chunk__36737_37650.cljs$core$IIndexed$_nth$arity$2(null,i__36739_37652);
var orig_type_37654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36856_37653,(0),null);
var f_37655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36856_37653,(1),null);
var seq__36740_37657 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37654,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37654,cljs.core.identity])));
var chunk__36742_37658 = null;
var count__36743_37659 = (0);
var i__36744_37660 = (0);
while(true){
if((i__36744_37660 < count__36743_37659)){
var vec__36888_37662 = chunk__36742_37658.cljs$core$IIndexed$_nth$arity$2(null,i__36744_37660);
var actual_type_37663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36888_37662,(0),null);
var __37664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36888_37662,(1),null);
var keys_37665 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37648,actual_type_37663,f_37655], null);
var canonical_f_37666 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37647),keys_37665);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37647,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37665], 0));

if(cljs.core.truth_(elem_37647.removeEventListener)){
elem_37647.removeEventListener(cljs.core.name(actual_type_37663),canonical_f_37666);
} else {
elem_37647.detachEvent(cljs.core.name(actual_type_37663),canonical_f_37666);
}


var G__37673 = seq__36740_37657;
var G__37674 = chunk__36742_37658;
var G__37675 = count__36743_37659;
var G__37676 = (i__36744_37660 + (1));
seq__36740_37657 = G__37673;
chunk__36742_37658 = G__37674;
count__36743_37659 = G__37675;
i__36744_37660 = G__37676;
continue;
} else {
var temp__5735__auto___37677 = cljs.core.seq(seq__36740_37657);
if(temp__5735__auto___37677){
var seq__36740_37678__$1 = temp__5735__auto___37677;
if(cljs.core.chunked_seq_QMARK_(seq__36740_37678__$1)){
var c__4550__auto___37679 = cljs.core.chunk_first(seq__36740_37678__$1);
var G__37681 = cljs.core.chunk_rest(seq__36740_37678__$1);
var G__37682 = c__4550__auto___37679;
var G__37683 = cljs.core.count(c__4550__auto___37679);
var G__37684 = (0);
seq__36740_37657 = G__37681;
chunk__36742_37658 = G__37682;
count__36743_37659 = G__37683;
i__36744_37660 = G__37684;
continue;
} else {
var vec__36891_37687 = cljs.core.first(seq__36740_37678__$1);
var actual_type_37688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36891_37687,(0),null);
var __37689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36891_37687,(1),null);
var keys_37690 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37648,actual_type_37688,f_37655], null);
var canonical_f_37691 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37647),keys_37690);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37647,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37690], 0));

if(cljs.core.truth_(elem_37647.removeEventListener)){
elem_37647.removeEventListener(cljs.core.name(actual_type_37688),canonical_f_37691);
} else {
elem_37647.detachEvent(cljs.core.name(actual_type_37688),canonical_f_37691);
}


var G__37692 = cljs.core.next(seq__36740_37678__$1);
var G__37693 = null;
var G__37694 = (0);
var G__37695 = (0);
seq__36740_37657 = G__37692;
chunk__36742_37658 = G__37693;
count__36743_37659 = G__37694;
i__36744_37660 = G__37695;
continue;
}
} else {
}
}
break;
}

var G__37700 = seq__36730_37649;
var G__37701 = chunk__36737_37650;
var G__37702 = count__36738_37651;
var G__37703 = (i__36739_37652 + (1));
seq__36730_37649 = G__37700;
chunk__36737_37650 = G__37701;
count__36738_37651 = G__37702;
i__36739_37652 = G__37703;
continue;
} else {
var temp__5735__auto___37706 = cljs.core.seq(seq__36730_37649);
if(temp__5735__auto___37706){
var seq__36730_37708__$1 = temp__5735__auto___37706;
if(cljs.core.chunked_seq_QMARK_(seq__36730_37708__$1)){
var c__4550__auto___37710 = cljs.core.chunk_first(seq__36730_37708__$1);
var G__37711 = cljs.core.chunk_rest(seq__36730_37708__$1);
var G__37712 = c__4550__auto___37710;
var G__37713 = cljs.core.count(c__4550__auto___37710);
var G__37714 = (0);
seq__36730_37649 = G__37711;
chunk__36737_37650 = G__37712;
count__36738_37651 = G__37713;
i__36739_37652 = G__37714;
continue;
} else {
var vec__36897_37715 = cljs.core.first(seq__36730_37708__$1);
var orig_type_37716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36897_37715,(0),null);
var f_37717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36897_37715,(1),null);
var seq__36731_37723 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37716,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37716,cljs.core.identity])));
var chunk__36733_37724 = null;
var count__36734_37725 = (0);
var i__36735_37726 = (0);
while(true){
if((i__36735_37726 < count__36734_37725)){
var vec__36925_37727 = chunk__36733_37724.cljs$core$IIndexed$_nth$arity$2(null,i__36735_37726);
var actual_type_37728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36925_37727,(0),null);
var __37729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36925_37727,(1),null);
var keys_37731 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37648,actual_type_37728,f_37717], null);
var canonical_f_37732 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37647),keys_37731);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37647,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37731], 0));

if(cljs.core.truth_(elem_37647.removeEventListener)){
elem_37647.removeEventListener(cljs.core.name(actual_type_37728),canonical_f_37732);
} else {
elem_37647.detachEvent(cljs.core.name(actual_type_37728),canonical_f_37732);
}


var G__37740 = seq__36731_37723;
var G__37741 = chunk__36733_37724;
var G__37742 = count__36734_37725;
var G__37743 = (i__36735_37726 + (1));
seq__36731_37723 = G__37740;
chunk__36733_37724 = G__37741;
count__36734_37725 = G__37742;
i__36735_37726 = G__37743;
continue;
} else {
var temp__5735__auto___37745__$1 = cljs.core.seq(seq__36731_37723);
if(temp__5735__auto___37745__$1){
var seq__36731_37746__$1 = temp__5735__auto___37745__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36731_37746__$1)){
var c__4550__auto___37747 = cljs.core.chunk_first(seq__36731_37746__$1);
var G__37748 = cljs.core.chunk_rest(seq__36731_37746__$1);
var G__37749 = c__4550__auto___37747;
var G__37750 = cljs.core.count(c__4550__auto___37747);
var G__37751 = (0);
seq__36731_37723 = G__37748;
chunk__36733_37724 = G__37749;
count__36734_37725 = G__37750;
i__36735_37726 = G__37751;
continue;
} else {
var vec__36932_37752 = cljs.core.first(seq__36731_37746__$1);
var actual_type_37753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36932_37752,(0),null);
var __37754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36932_37752,(1),null);
var keys_37755 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37648,actual_type_37753,f_37717], null);
var canonical_f_37756 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37647),keys_37755);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37647,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37755], 0));

if(cljs.core.truth_(elem_37647.removeEventListener)){
elem_37647.removeEventListener(cljs.core.name(actual_type_37753),canonical_f_37756);
} else {
elem_37647.detachEvent(cljs.core.name(actual_type_37753),canonical_f_37756);
}


var G__37757 = cljs.core.next(seq__36731_37746__$1);
var G__37758 = null;
var G__37759 = (0);
var G__37760 = (0);
seq__36731_37723 = G__37757;
chunk__36733_37724 = G__37758;
count__36734_37725 = G__37759;
i__36735_37726 = G__37760;
continue;
}
} else {
}
}
break;
}

var G__37763 = cljs.core.next(seq__36730_37708__$1);
var G__37764 = null;
var G__37765 = (0);
var G__37766 = (0);
seq__36730_37649 = G__37763;
chunk__36737_37650 = G__37764;
count__36738_37651 = G__37765;
i__36739_37652 = G__37766;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq36724){
var G__36725 = cljs.core.first(seq36724);
var seq36724__$1 = cljs.core.next(seq36724);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36725,seq36724__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37793 = arguments.length;
var i__4731__auto___37797 = (0);
while(true){
if((i__4731__auto___37797 < len__4730__auto___37793)){
args__4736__auto__.push((arguments[i__4731__auto___37797]));

var G__37804 = (i__4731__auto___37797 + (1));
i__4731__auto___37797 = G__37804;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36941_37813 = dommy.core.elem_and_selector(elem_sel);
var elem_37814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36941_37813,(0),null);
var selector_37815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36941_37813,(1),null);
var seq__36944_37816 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36945_37817 = null;
var count__36946_37818 = (0);
var i__36947_37819 = (0);
while(true){
if((i__36947_37819 < count__36946_37818)){
var vec__36958_37820 = chunk__36945_37817.cljs$core$IIndexed$_nth$arity$2(null,i__36947_37819);
var type_37821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36958_37820,(0),null);
var f_37822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36958_37820,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37821,((function (seq__36944_37816,chunk__36945_37817,count__36946_37818,i__36947_37819,vec__36958_37820,type_37821,f_37822,vec__36941_37813,elem_37814,selector_37815){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37821,dommy$core$this_fn], 0));

return (f_37822.cljs$core$IFn$_invoke$arity$1 ? f_37822.cljs$core$IFn$_invoke$arity$1(e) : f_37822.call(null,e));
});})(seq__36944_37816,chunk__36945_37817,count__36946_37818,i__36947_37819,vec__36958_37820,type_37821,f_37822,vec__36941_37813,elem_37814,selector_37815))
], 0));


var G__37828 = seq__36944_37816;
var G__37829 = chunk__36945_37817;
var G__37830 = count__36946_37818;
var G__37831 = (i__36947_37819 + (1));
seq__36944_37816 = G__37828;
chunk__36945_37817 = G__37829;
count__36946_37818 = G__37830;
i__36947_37819 = G__37831;
continue;
} else {
var temp__5735__auto___37833 = cljs.core.seq(seq__36944_37816);
if(temp__5735__auto___37833){
var seq__36944_37834__$1 = temp__5735__auto___37833;
if(cljs.core.chunked_seq_QMARK_(seq__36944_37834__$1)){
var c__4550__auto___37835 = cljs.core.chunk_first(seq__36944_37834__$1);
var G__37837 = cljs.core.chunk_rest(seq__36944_37834__$1);
var G__37838 = c__4550__auto___37835;
var G__37839 = cljs.core.count(c__4550__auto___37835);
var G__37840 = (0);
seq__36944_37816 = G__37837;
chunk__36945_37817 = G__37838;
count__36946_37818 = G__37839;
i__36947_37819 = G__37840;
continue;
} else {
var vec__36963_37841 = cljs.core.first(seq__36944_37834__$1);
var type_37842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36963_37841,(0),null);
var f_37843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36963_37841,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37842,((function (seq__36944_37816,chunk__36945_37817,count__36946_37818,i__36947_37819,vec__36963_37841,type_37842,f_37843,seq__36944_37834__$1,temp__5735__auto___37833,vec__36941_37813,elem_37814,selector_37815){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37842,dommy$core$this_fn], 0));

return (f_37843.cljs$core$IFn$_invoke$arity$1 ? f_37843.cljs$core$IFn$_invoke$arity$1(e) : f_37843.call(null,e));
});})(seq__36944_37816,chunk__36945_37817,count__36946_37818,i__36947_37819,vec__36963_37841,type_37842,f_37843,seq__36944_37834__$1,temp__5735__auto___37833,vec__36941_37813,elem_37814,selector_37815))
], 0));


var G__37848 = cljs.core.next(seq__36944_37834__$1);
var G__37849 = null;
var G__37850 = (0);
var G__37851 = (0);
seq__36944_37816 = G__37848;
chunk__36945_37817 = G__37849;
count__36946_37818 = G__37850;
i__36947_37819 = G__37851;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq36935){
var G__36936 = cljs.core.first(seq36935);
var seq36935__$1 = cljs.core.next(seq36935);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36936,seq36935__$1);
}));


//# sourceMappingURL=dommy.core.js.map
