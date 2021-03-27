goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34677 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34677(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34678 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34678(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33736 = coll;
var G__33737 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33736,G__33737) : shadow.dom.lazy_native_coll_seq.call(null,G__33736,G__33737));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4120__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33808 = arguments.length;
switch (G__33808) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33829 = arguments.length;
switch (G__33829) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33846 = arguments.length;
switch (G__33846) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33863 = arguments.length;
switch (G__33863) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33875 = arguments.length;
switch (G__33875) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33877 = arguments.length;
switch (G__33877) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33879){if((e33879 instanceof Object)){
var e = e33879;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33879;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33906 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33907 = null;
var count__33908 = (0);
var i__33909 = (0);
while(true){
if((i__33909 < count__33908)){
var el = chunk__33907.cljs$core$IIndexed$_nth$arity$2(null,i__33909);
var handler_34710__$1 = ((function (seq__33906,chunk__33907,count__33908,i__33909,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33906,chunk__33907,count__33908,i__33909,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34710__$1);


var G__34711 = seq__33906;
var G__34712 = chunk__33907;
var G__34713 = count__33908;
var G__34714 = (i__33909 + (1));
seq__33906 = G__34711;
chunk__33907 = G__34712;
count__33908 = G__34713;
i__33909 = G__34714;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33906);
if(temp__5735__auto__){
var seq__33906__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33906__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33906__$1);
var G__34715 = cljs.core.chunk_rest(seq__33906__$1);
var G__34716 = c__4550__auto__;
var G__34717 = cljs.core.count(c__4550__auto__);
var G__34718 = (0);
seq__33906 = G__34715;
chunk__33907 = G__34716;
count__33908 = G__34717;
i__33909 = G__34718;
continue;
} else {
var el = cljs.core.first(seq__33906__$1);
var handler_34719__$1 = ((function (seq__33906,chunk__33907,count__33908,i__33909,el,seq__33906__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33906,chunk__33907,count__33908,i__33909,el,seq__33906__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34719__$1);


var G__34720 = cljs.core.next(seq__33906__$1);
var G__34721 = null;
var G__34722 = (0);
var G__34723 = (0);
seq__33906 = G__34720;
chunk__33907 = G__34721;
count__33908 = G__34722;
i__33909 = G__34723;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33927 = arguments.length;
switch (G__33927) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33946 = cljs.core.seq(events);
var chunk__33947 = null;
var count__33948 = (0);
var i__33949 = (0);
while(true){
if((i__33949 < count__33948)){
var vec__33963 = chunk__33947.cljs$core$IIndexed$_nth$arity$2(null,i__33949);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33963,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33963,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34728 = seq__33946;
var G__34729 = chunk__33947;
var G__34730 = count__33948;
var G__34731 = (i__33949 + (1));
seq__33946 = G__34728;
chunk__33947 = G__34729;
count__33948 = G__34730;
i__33949 = G__34731;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33946);
if(temp__5735__auto__){
var seq__33946__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33946__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33946__$1);
var G__34733 = cljs.core.chunk_rest(seq__33946__$1);
var G__34734 = c__4550__auto__;
var G__34735 = cljs.core.count(c__4550__auto__);
var G__34736 = (0);
seq__33946 = G__34733;
chunk__33947 = G__34734;
count__33948 = G__34735;
i__33949 = G__34736;
continue;
} else {
var vec__33968 = cljs.core.first(seq__33946__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33968,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33968,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34738 = cljs.core.next(seq__33946__$1);
var G__34739 = null;
var G__34740 = (0);
var G__34741 = (0);
seq__33946 = G__34738;
chunk__33947 = G__34739;
count__33948 = G__34740;
i__33949 = G__34741;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33977 = cljs.core.seq(styles);
var chunk__33978 = null;
var count__33979 = (0);
var i__33980 = (0);
while(true){
if((i__33980 < count__33979)){
var vec__34003 = chunk__33978.cljs$core$IIndexed$_nth$arity$2(null,i__33980);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34003,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34003,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34745 = seq__33977;
var G__34746 = chunk__33978;
var G__34747 = count__33979;
var G__34748 = (i__33980 + (1));
seq__33977 = G__34745;
chunk__33978 = G__34746;
count__33979 = G__34747;
i__33980 = G__34748;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33977);
if(temp__5735__auto__){
var seq__33977__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33977__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33977__$1);
var G__34749 = cljs.core.chunk_rest(seq__33977__$1);
var G__34750 = c__4550__auto__;
var G__34751 = cljs.core.count(c__4550__auto__);
var G__34752 = (0);
seq__33977 = G__34749;
chunk__33978 = G__34750;
count__33979 = G__34751;
i__33980 = G__34752;
continue;
} else {
var vec__34011 = cljs.core.first(seq__33977__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34011,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34011,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34753 = cljs.core.next(seq__33977__$1);
var G__34754 = null;
var G__34755 = (0);
var G__34756 = (0);
seq__33977 = G__34753;
chunk__33978 = G__34754;
count__33979 = G__34755;
i__33980 = G__34756;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34017_34757 = key;
var G__34017_34758__$1 = (((G__34017_34757 instanceof cljs.core.Keyword))?G__34017_34757.fqn:null);
switch (G__34017_34758__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34760 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4120__auto__ = goog.string.startsWith(ks_34760,"data-");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return goog.string.startsWith(ks_34760,"aria-");
}
})())){
el.setAttribute(ks_34760,value);
} else {
(el[ks_34760] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34060){
var map__34061 = p__34060;
var map__34061__$1 = (((((!((map__34061 == null))))?(((((map__34061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34061):map__34061);
var props = map__34061__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34061__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34064 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34064,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34064,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34064,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34068 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34068,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34068;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34072 = arguments.length;
switch (G__34072) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34079){
var vec__34080 = p__34079;
var seq__34081 = cljs.core.seq(vec__34080);
var first__34082 = cljs.core.first(seq__34081);
var seq__34081__$1 = cljs.core.next(seq__34081);
var nn = first__34082;
var first__34082__$1 = cljs.core.first(seq__34081__$1);
var seq__34081__$2 = cljs.core.next(seq__34081__$1);
var np = first__34082__$1;
var nc = seq__34081__$2;
var node = vec__34080;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34087 = nn;
var G__34088 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34087,G__34088) : create_fn.call(null,G__34087,G__34088));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34090 = nn;
var G__34091 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34090,G__34091) : create_fn.call(null,G__34090,G__34091));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34095 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34095,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34095,(1),null);
var seq__34098_34788 = cljs.core.seq(node_children);
var chunk__34099_34789 = null;
var count__34100_34790 = (0);
var i__34101_34791 = (0);
while(true){
if((i__34101_34791 < count__34100_34790)){
var child_struct_34792 = chunk__34099_34789.cljs$core$IIndexed$_nth$arity$2(null,i__34101_34791);
var children_34793 = shadow.dom.dom_node(child_struct_34792);
if(cljs.core.seq_QMARK_(children_34793)){
var seq__34120_34794 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34793));
var chunk__34122_34795 = null;
var count__34123_34796 = (0);
var i__34124_34797 = (0);
while(true){
if((i__34124_34797 < count__34123_34796)){
var child_34798 = chunk__34122_34795.cljs$core$IIndexed$_nth$arity$2(null,i__34124_34797);
if(cljs.core.truth_(child_34798)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34798);


var G__34799 = seq__34120_34794;
var G__34800 = chunk__34122_34795;
var G__34801 = count__34123_34796;
var G__34802 = (i__34124_34797 + (1));
seq__34120_34794 = G__34799;
chunk__34122_34795 = G__34800;
count__34123_34796 = G__34801;
i__34124_34797 = G__34802;
continue;
} else {
var G__34805 = seq__34120_34794;
var G__34806 = chunk__34122_34795;
var G__34807 = count__34123_34796;
var G__34808 = (i__34124_34797 + (1));
seq__34120_34794 = G__34805;
chunk__34122_34795 = G__34806;
count__34123_34796 = G__34807;
i__34124_34797 = G__34808;
continue;
}
} else {
var temp__5735__auto___34812 = cljs.core.seq(seq__34120_34794);
if(temp__5735__auto___34812){
var seq__34120_34815__$1 = temp__5735__auto___34812;
if(cljs.core.chunked_seq_QMARK_(seq__34120_34815__$1)){
var c__4550__auto___34817 = cljs.core.chunk_first(seq__34120_34815__$1);
var G__34818 = cljs.core.chunk_rest(seq__34120_34815__$1);
var G__34819 = c__4550__auto___34817;
var G__34820 = cljs.core.count(c__4550__auto___34817);
var G__34821 = (0);
seq__34120_34794 = G__34818;
chunk__34122_34795 = G__34819;
count__34123_34796 = G__34820;
i__34124_34797 = G__34821;
continue;
} else {
var child_34822 = cljs.core.first(seq__34120_34815__$1);
if(cljs.core.truth_(child_34822)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34822);


var G__34823 = cljs.core.next(seq__34120_34815__$1);
var G__34824 = null;
var G__34825 = (0);
var G__34826 = (0);
seq__34120_34794 = G__34823;
chunk__34122_34795 = G__34824;
count__34123_34796 = G__34825;
i__34124_34797 = G__34826;
continue;
} else {
var G__34827 = cljs.core.next(seq__34120_34815__$1);
var G__34828 = null;
var G__34829 = (0);
var G__34830 = (0);
seq__34120_34794 = G__34827;
chunk__34122_34795 = G__34828;
count__34123_34796 = G__34829;
i__34124_34797 = G__34830;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34793);
}


var G__34831 = seq__34098_34788;
var G__34832 = chunk__34099_34789;
var G__34833 = count__34100_34790;
var G__34834 = (i__34101_34791 + (1));
seq__34098_34788 = G__34831;
chunk__34099_34789 = G__34832;
count__34100_34790 = G__34833;
i__34101_34791 = G__34834;
continue;
} else {
var temp__5735__auto___34835 = cljs.core.seq(seq__34098_34788);
if(temp__5735__auto___34835){
var seq__34098_34836__$1 = temp__5735__auto___34835;
if(cljs.core.chunked_seq_QMARK_(seq__34098_34836__$1)){
var c__4550__auto___34837 = cljs.core.chunk_first(seq__34098_34836__$1);
var G__34838 = cljs.core.chunk_rest(seq__34098_34836__$1);
var G__34839 = c__4550__auto___34837;
var G__34840 = cljs.core.count(c__4550__auto___34837);
var G__34841 = (0);
seq__34098_34788 = G__34838;
chunk__34099_34789 = G__34839;
count__34100_34790 = G__34840;
i__34101_34791 = G__34841;
continue;
} else {
var child_struct_34842 = cljs.core.first(seq__34098_34836__$1);
var children_34844 = shadow.dom.dom_node(child_struct_34842);
if(cljs.core.seq_QMARK_(children_34844)){
var seq__34134_34845 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34844));
var chunk__34136_34846 = null;
var count__34137_34847 = (0);
var i__34138_34848 = (0);
while(true){
if((i__34138_34848 < count__34137_34847)){
var child_34849 = chunk__34136_34846.cljs$core$IIndexed$_nth$arity$2(null,i__34138_34848);
if(cljs.core.truth_(child_34849)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34849);


var G__34850 = seq__34134_34845;
var G__34851 = chunk__34136_34846;
var G__34852 = count__34137_34847;
var G__34853 = (i__34138_34848 + (1));
seq__34134_34845 = G__34850;
chunk__34136_34846 = G__34851;
count__34137_34847 = G__34852;
i__34138_34848 = G__34853;
continue;
} else {
var G__34854 = seq__34134_34845;
var G__34855 = chunk__34136_34846;
var G__34856 = count__34137_34847;
var G__34857 = (i__34138_34848 + (1));
seq__34134_34845 = G__34854;
chunk__34136_34846 = G__34855;
count__34137_34847 = G__34856;
i__34138_34848 = G__34857;
continue;
}
} else {
var temp__5735__auto___34858__$1 = cljs.core.seq(seq__34134_34845);
if(temp__5735__auto___34858__$1){
var seq__34134_34863__$1 = temp__5735__auto___34858__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34134_34863__$1)){
var c__4550__auto___34864 = cljs.core.chunk_first(seq__34134_34863__$1);
var G__34865 = cljs.core.chunk_rest(seq__34134_34863__$1);
var G__34866 = c__4550__auto___34864;
var G__34867 = cljs.core.count(c__4550__auto___34864);
var G__34868 = (0);
seq__34134_34845 = G__34865;
chunk__34136_34846 = G__34866;
count__34137_34847 = G__34867;
i__34138_34848 = G__34868;
continue;
} else {
var child_34869 = cljs.core.first(seq__34134_34863__$1);
if(cljs.core.truth_(child_34869)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34869);


var G__34870 = cljs.core.next(seq__34134_34863__$1);
var G__34871 = null;
var G__34872 = (0);
var G__34873 = (0);
seq__34134_34845 = G__34870;
chunk__34136_34846 = G__34871;
count__34137_34847 = G__34872;
i__34138_34848 = G__34873;
continue;
} else {
var G__34877 = cljs.core.next(seq__34134_34863__$1);
var G__34878 = null;
var G__34879 = (0);
var G__34880 = (0);
seq__34134_34845 = G__34877;
chunk__34136_34846 = G__34878;
count__34137_34847 = G__34879;
i__34138_34848 = G__34880;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34844);
}


var G__34882 = cljs.core.next(seq__34098_34836__$1);
var G__34883 = null;
var G__34884 = (0);
var G__34885 = (0);
seq__34098_34788 = G__34882;
chunk__34099_34789 = G__34883;
count__34100_34790 = G__34884;
i__34101_34791 = G__34885;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34170 = cljs.core.seq(node);
var chunk__34171 = null;
var count__34172 = (0);
var i__34173 = (0);
while(true){
if((i__34173 < count__34172)){
var n = chunk__34171.cljs$core$IIndexed$_nth$arity$2(null,i__34173);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34893 = seq__34170;
var G__34894 = chunk__34171;
var G__34895 = count__34172;
var G__34896 = (i__34173 + (1));
seq__34170 = G__34893;
chunk__34171 = G__34894;
count__34172 = G__34895;
i__34173 = G__34896;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34170);
if(temp__5735__auto__){
var seq__34170__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34170__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34170__$1);
var G__34897 = cljs.core.chunk_rest(seq__34170__$1);
var G__34898 = c__4550__auto__;
var G__34899 = cljs.core.count(c__4550__auto__);
var G__34900 = (0);
seq__34170 = G__34897;
chunk__34171 = G__34898;
count__34172 = G__34899;
i__34173 = G__34900;
continue;
} else {
var n = cljs.core.first(seq__34170__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34901 = cljs.core.next(seq__34170__$1);
var G__34902 = null;
var G__34903 = (0);
var G__34904 = (0);
seq__34170 = G__34901;
chunk__34171 = G__34902;
count__34172 = G__34903;
i__34173 = G__34904;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34195 = arguments.length;
switch (G__34195) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34198 = arguments.length;
switch (G__34198) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34206 = arguments.length;
switch (G__34206) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4120__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34914 = arguments.length;
var i__4731__auto___34915 = (0);
while(true){
if((i__4731__auto___34915 < len__4730__auto___34914)){
args__4736__auto__.push((arguments[i__4731__auto___34915]));

var G__34916 = (i__4731__auto___34915 + (1));
i__4731__auto___34915 = G__34916;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34223_34917 = cljs.core.seq(nodes);
var chunk__34224_34918 = null;
var count__34225_34919 = (0);
var i__34226_34920 = (0);
while(true){
if((i__34226_34920 < count__34225_34919)){
var node_34921 = chunk__34224_34918.cljs$core$IIndexed$_nth$arity$2(null,i__34226_34920);
fragment.appendChild(shadow.dom._to_dom(node_34921));


var G__34923 = seq__34223_34917;
var G__34924 = chunk__34224_34918;
var G__34925 = count__34225_34919;
var G__34926 = (i__34226_34920 + (1));
seq__34223_34917 = G__34923;
chunk__34224_34918 = G__34924;
count__34225_34919 = G__34925;
i__34226_34920 = G__34926;
continue;
} else {
var temp__5735__auto___34927 = cljs.core.seq(seq__34223_34917);
if(temp__5735__auto___34927){
var seq__34223_34928__$1 = temp__5735__auto___34927;
if(cljs.core.chunked_seq_QMARK_(seq__34223_34928__$1)){
var c__4550__auto___34930 = cljs.core.chunk_first(seq__34223_34928__$1);
var G__34931 = cljs.core.chunk_rest(seq__34223_34928__$1);
var G__34932 = c__4550__auto___34930;
var G__34933 = cljs.core.count(c__4550__auto___34930);
var G__34934 = (0);
seq__34223_34917 = G__34931;
chunk__34224_34918 = G__34932;
count__34225_34919 = G__34933;
i__34226_34920 = G__34934;
continue;
} else {
var node_34935 = cljs.core.first(seq__34223_34928__$1);
fragment.appendChild(shadow.dom._to_dom(node_34935));


var G__34936 = cljs.core.next(seq__34223_34928__$1);
var G__34937 = null;
var G__34938 = (0);
var G__34939 = (0);
seq__34223_34917 = G__34936;
chunk__34224_34918 = G__34937;
count__34225_34919 = G__34938;
i__34226_34920 = G__34939;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34217){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34217));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34242_34947 = cljs.core.seq(scripts);
var chunk__34243_34948 = null;
var count__34244_34949 = (0);
var i__34245_34950 = (0);
while(true){
if((i__34245_34950 < count__34244_34949)){
var vec__34260_34951 = chunk__34243_34948.cljs$core$IIndexed$_nth$arity$2(null,i__34245_34950);
var script_tag_34952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34260_34951,(0),null);
var script_body_34953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34260_34951,(1),null);
eval(script_body_34953);


var G__34956 = seq__34242_34947;
var G__34957 = chunk__34243_34948;
var G__34958 = count__34244_34949;
var G__34959 = (i__34245_34950 + (1));
seq__34242_34947 = G__34956;
chunk__34243_34948 = G__34957;
count__34244_34949 = G__34958;
i__34245_34950 = G__34959;
continue;
} else {
var temp__5735__auto___34962 = cljs.core.seq(seq__34242_34947);
if(temp__5735__auto___34962){
var seq__34242_34963__$1 = temp__5735__auto___34962;
if(cljs.core.chunked_seq_QMARK_(seq__34242_34963__$1)){
var c__4550__auto___34964 = cljs.core.chunk_first(seq__34242_34963__$1);
var G__34965 = cljs.core.chunk_rest(seq__34242_34963__$1);
var G__34966 = c__4550__auto___34964;
var G__34967 = cljs.core.count(c__4550__auto___34964);
var G__34968 = (0);
seq__34242_34947 = G__34965;
chunk__34243_34948 = G__34966;
count__34244_34949 = G__34967;
i__34245_34950 = G__34968;
continue;
} else {
var vec__34275_34969 = cljs.core.first(seq__34242_34963__$1);
var script_tag_34970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34275_34969,(0),null);
var script_body_34971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34275_34969,(1),null);
eval(script_body_34971);


var G__34972 = cljs.core.next(seq__34242_34963__$1);
var G__34973 = null;
var G__34974 = (0);
var G__34975 = (0);
seq__34242_34947 = G__34972;
chunk__34243_34948 = G__34973;
count__34244_34949 = G__34974;
i__34245_34950 = G__34975;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34282){
var vec__34283 = p__34282;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34283,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34283,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34294 = arguments.length;
switch (G__34294) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34309 = cljs.core.seq(style_keys);
var chunk__34310 = null;
var count__34311 = (0);
var i__34312 = (0);
while(true){
if((i__34312 < count__34311)){
var it = chunk__34310.cljs$core$IIndexed$_nth$arity$2(null,i__34312);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34982 = seq__34309;
var G__34983 = chunk__34310;
var G__34984 = count__34311;
var G__34985 = (i__34312 + (1));
seq__34309 = G__34982;
chunk__34310 = G__34983;
count__34311 = G__34984;
i__34312 = G__34985;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34309);
if(temp__5735__auto__){
var seq__34309__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34309__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34309__$1);
var G__34986 = cljs.core.chunk_rest(seq__34309__$1);
var G__34987 = c__4550__auto__;
var G__34988 = cljs.core.count(c__4550__auto__);
var G__34989 = (0);
seq__34309 = G__34986;
chunk__34310 = G__34987;
count__34311 = G__34988;
i__34312 = G__34989;
continue;
} else {
var it = cljs.core.first(seq__34309__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34990 = cljs.core.next(seq__34309__$1);
var G__34991 = null;
var G__34992 = (0);
var G__34993 = (0);
seq__34309 = G__34990;
chunk__34310 = G__34991;
count__34311 = G__34992;
i__34312 = G__34993;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k34330,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__34343 = k34330;
var G__34343__$1 = (((G__34343 instanceof cljs.core.Keyword))?G__34343.fqn:null);
switch (G__34343__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34330,else__4377__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__34346){
var vec__34347 = p__34346;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34347,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34347,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34329){
var self__ = this;
var G__34329__$1 = this;
return (new cljs.core.RecordIter((0),G__34329__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34332,other34333){
var self__ = this;
var this34332__$1 = this;
return (((!((other34333 == null)))) && ((this34332__$1.constructor === other34333.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34332__$1.x,other34333.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34332__$1.y,other34333.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34332__$1.__extmap,other34333.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__34329){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__34363 = cljs.core.keyword_identical_QMARK_;
var expr__34364 = k__4382__auto__;
if(cljs.core.truth_((pred__34363.cljs$core$IFn$_invoke$arity$2 ? pred__34363.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34364) : pred__34363.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34364)))){
return (new shadow.dom.Coordinate(G__34329,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34363.cljs$core$IFn$_invoke$arity$2 ? pred__34363.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34364) : pred__34363.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34364)))){
return (new shadow.dom.Coordinate(self__.x,G__34329,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__34329),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__34329){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34329,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34338){
var extmap__4413__auto__ = (function (){var G__34374 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34338,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34338)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34374);
} else {
return G__34374;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34338),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34338),null,cljs.core.not_empty(extmap__4413__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k34380,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__34388 = k34380;
var G__34388__$1 = (((G__34388 instanceof cljs.core.Keyword))?G__34388.fqn:null);
switch (G__34388__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34380,else__4377__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__34394){
var vec__34395 = p__34394;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34395,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34395,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Size{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34379){
var self__ = this;
var G__34379__$1 = this;
return (new cljs.core.RecordIter((0),G__34379__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34381,other34382){
var self__ = this;
var this34381__$1 = this;
return (((!((other34382 == null)))) && ((this34381__$1.constructor === other34382.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34381__$1.w,other34382.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34381__$1.h,other34382.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34381__$1.__extmap,other34382.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__34379){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__34406 = cljs.core.keyword_identical_QMARK_;
var expr__34407 = k__4382__auto__;
if(cljs.core.truth_((pred__34406.cljs$core$IFn$_invoke$arity$2 ? pred__34406.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34407) : pred__34406.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34407)))){
return (new shadow.dom.Size(G__34379,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34406.cljs$core$IFn$_invoke$arity$2 ? pred__34406.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34407) : pred__34406.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34407)))){
return (new shadow.dom.Size(self__.w,G__34379,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__34379),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__34379){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34379,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34384){
var extmap__4413__auto__ = (function (){var G__34414 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34384,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34384)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34414);
} else {
return G__34414;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34384),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34384),null,cljs.core.not_empty(extmap__4413__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__35029 = (i + (1));
var G__35030 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35029;
ret = G__35030;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34438){
var vec__34439 = p__34438;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34439,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34439,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34448 = arguments.length;
switch (G__34448) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35034 = ps;
var G__35035 = (i + (1));
el__$1 = G__35034;
i = G__35035;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34502 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34502,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34502,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34502,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34506_35048 = cljs.core.seq(props);
var chunk__34507_35049 = null;
var count__34508_35050 = (0);
var i__34509_35051 = (0);
while(true){
if((i__34509_35051 < count__34508_35050)){
var vec__34525_35055 = chunk__34507_35049.cljs$core$IIndexed$_nth$arity$2(null,i__34509_35051);
var k_35056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34525_35055,(0),null);
var v_35057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34525_35055,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35056);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35056),v_35057);


var G__35059 = seq__34506_35048;
var G__35060 = chunk__34507_35049;
var G__35061 = count__34508_35050;
var G__35062 = (i__34509_35051 + (1));
seq__34506_35048 = G__35059;
chunk__34507_35049 = G__35060;
count__34508_35050 = G__35061;
i__34509_35051 = G__35062;
continue;
} else {
var temp__5735__auto___35063 = cljs.core.seq(seq__34506_35048);
if(temp__5735__auto___35063){
var seq__34506_35064__$1 = temp__5735__auto___35063;
if(cljs.core.chunked_seq_QMARK_(seq__34506_35064__$1)){
var c__4550__auto___35100 = cljs.core.chunk_first(seq__34506_35064__$1);
var G__35101 = cljs.core.chunk_rest(seq__34506_35064__$1);
var G__35102 = c__4550__auto___35100;
var G__35103 = cljs.core.count(c__4550__auto___35100);
var G__35104 = (0);
seq__34506_35048 = G__35101;
chunk__34507_35049 = G__35102;
count__34508_35050 = G__35103;
i__34509_35051 = G__35104;
continue;
} else {
var vec__34532_35105 = cljs.core.first(seq__34506_35064__$1);
var k_35106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34532_35105,(0),null);
var v_35107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34532_35105,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35106);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35106),v_35107);


var G__35108 = cljs.core.next(seq__34506_35064__$1);
var G__35109 = null;
var G__35110 = (0);
var G__35111 = (0);
seq__34506_35048 = G__35108;
chunk__34507_35049 = G__35109;
count__34508_35050 = G__35110;
i__34509_35051 = G__35111;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34553 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34553,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34553,(1),null);
var seq__34558_35112 = cljs.core.seq(node_children);
var chunk__34560_35113 = null;
var count__34561_35114 = (0);
var i__34562_35115 = (0);
while(true){
if((i__34562_35115 < count__34561_35114)){
var child_struct_35116 = chunk__34560_35113.cljs$core$IIndexed$_nth$arity$2(null,i__34562_35115);
if((!((child_struct_35116 == null)))){
if(typeof child_struct_35116 === 'string'){
var text_35117 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35117),child_struct_35116].join(''));
} else {
var children_35118 = shadow.dom.svg_node(child_struct_35116);
if(cljs.core.seq_QMARK_(children_35118)){
var seq__34594_35119 = cljs.core.seq(children_35118);
var chunk__34596_35120 = null;
var count__34597_35121 = (0);
var i__34598_35122 = (0);
while(true){
if((i__34598_35122 < count__34597_35121)){
var child_35123 = chunk__34596_35120.cljs$core$IIndexed$_nth$arity$2(null,i__34598_35122);
if(cljs.core.truth_(child_35123)){
node.appendChild(child_35123);


var G__35124 = seq__34594_35119;
var G__35125 = chunk__34596_35120;
var G__35126 = count__34597_35121;
var G__35127 = (i__34598_35122 + (1));
seq__34594_35119 = G__35124;
chunk__34596_35120 = G__35125;
count__34597_35121 = G__35126;
i__34598_35122 = G__35127;
continue;
} else {
var G__35128 = seq__34594_35119;
var G__35129 = chunk__34596_35120;
var G__35130 = count__34597_35121;
var G__35131 = (i__34598_35122 + (1));
seq__34594_35119 = G__35128;
chunk__34596_35120 = G__35129;
count__34597_35121 = G__35130;
i__34598_35122 = G__35131;
continue;
}
} else {
var temp__5735__auto___35132 = cljs.core.seq(seq__34594_35119);
if(temp__5735__auto___35132){
var seq__34594_35133__$1 = temp__5735__auto___35132;
if(cljs.core.chunked_seq_QMARK_(seq__34594_35133__$1)){
var c__4550__auto___35134 = cljs.core.chunk_first(seq__34594_35133__$1);
var G__35135 = cljs.core.chunk_rest(seq__34594_35133__$1);
var G__35136 = c__4550__auto___35134;
var G__35137 = cljs.core.count(c__4550__auto___35134);
var G__35138 = (0);
seq__34594_35119 = G__35135;
chunk__34596_35120 = G__35136;
count__34597_35121 = G__35137;
i__34598_35122 = G__35138;
continue;
} else {
var child_35139 = cljs.core.first(seq__34594_35133__$1);
if(cljs.core.truth_(child_35139)){
node.appendChild(child_35139);


var G__35140 = cljs.core.next(seq__34594_35133__$1);
var G__35141 = null;
var G__35142 = (0);
var G__35143 = (0);
seq__34594_35119 = G__35140;
chunk__34596_35120 = G__35141;
count__34597_35121 = G__35142;
i__34598_35122 = G__35143;
continue;
} else {
var G__35144 = cljs.core.next(seq__34594_35133__$1);
var G__35145 = null;
var G__35146 = (0);
var G__35147 = (0);
seq__34594_35119 = G__35144;
chunk__34596_35120 = G__35145;
count__34597_35121 = G__35146;
i__34598_35122 = G__35147;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35118);
}
}


var G__35148 = seq__34558_35112;
var G__35149 = chunk__34560_35113;
var G__35150 = count__34561_35114;
var G__35151 = (i__34562_35115 + (1));
seq__34558_35112 = G__35148;
chunk__34560_35113 = G__35149;
count__34561_35114 = G__35150;
i__34562_35115 = G__35151;
continue;
} else {
var G__35152 = seq__34558_35112;
var G__35153 = chunk__34560_35113;
var G__35154 = count__34561_35114;
var G__35155 = (i__34562_35115 + (1));
seq__34558_35112 = G__35152;
chunk__34560_35113 = G__35153;
count__34561_35114 = G__35154;
i__34562_35115 = G__35155;
continue;
}
} else {
var temp__5735__auto___35156 = cljs.core.seq(seq__34558_35112);
if(temp__5735__auto___35156){
var seq__34558_35157__$1 = temp__5735__auto___35156;
if(cljs.core.chunked_seq_QMARK_(seq__34558_35157__$1)){
var c__4550__auto___35158 = cljs.core.chunk_first(seq__34558_35157__$1);
var G__35159 = cljs.core.chunk_rest(seq__34558_35157__$1);
var G__35160 = c__4550__auto___35158;
var G__35161 = cljs.core.count(c__4550__auto___35158);
var G__35162 = (0);
seq__34558_35112 = G__35159;
chunk__34560_35113 = G__35160;
count__34561_35114 = G__35161;
i__34562_35115 = G__35162;
continue;
} else {
var child_struct_35163 = cljs.core.first(seq__34558_35157__$1);
if((!((child_struct_35163 == null)))){
if(typeof child_struct_35163 === 'string'){
var text_35164 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35164),child_struct_35163].join(''));
} else {
var children_35166 = shadow.dom.svg_node(child_struct_35163);
if(cljs.core.seq_QMARK_(children_35166)){
var seq__34615_35171 = cljs.core.seq(children_35166);
var chunk__34617_35172 = null;
var count__34618_35173 = (0);
var i__34619_35174 = (0);
while(true){
if((i__34619_35174 < count__34618_35173)){
var child_35175 = chunk__34617_35172.cljs$core$IIndexed$_nth$arity$2(null,i__34619_35174);
if(cljs.core.truth_(child_35175)){
node.appendChild(child_35175);


var G__35176 = seq__34615_35171;
var G__35177 = chunk__34617_35172;
var G__35178 = count__34618_35173;
var G__35179 = (i__34619_35174 + (1));
seq__34615_35171 = G__35176;
chunk__34617_35172 = G__35177;
count__34618_35173 = G__35178;
i__34619_35174 = G__35179;
continue;
} else {
var G__35181 = seq__34615_35171;
var G__35182 = chunk__34617_35172;
var G__35183 = count__34618_35173;
var G__35184 = (i__34619_35174 + (1));
seq__34615_35171 = G__35181;
chunk__34617_35172 = G__35182;
count__34618_35173 = G__35183;
i__34619_35174 = G__35184;
continue;
}
} else {
var temp__5735__auto___35185__$1 = cljs.core.seq(seq__34615_35171);
if(temp__5735__auto___35185__$1){
var seq__34615_35186__$1 = temp__5735__auto___35185__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34615_35186__$1)){
var c__4550__auto___35187 = cljs.core.chunk_first(seq__34615_35186__$1);
var G__35188 = cljs.core.chunk_rest(seq__34615_35186__$1);
var G__35189 = c__4550__auto___35187;
var G__35190 = cljs.core.count(c__4550__auto___35187);
var G__35191 = (0);
seq__34615_35171 = G__35188;
chunk__34617_35172 = G__35189;
count__34618_35173 = G__35190;
i__34619_35174 = G__35191;
continue;
} else {
var child_35192 = cljs.core.first(seq__34615_35186__$1);
if(cljs.core.truth_(child_35192)){
node.appendChild(child_35192);


var G__35194 = cljs.core.next(seq__34615_35186__$1);
var G__35195 = null;
var G__35196 = (0);
var G__35197 = (0);
seq__34615_35171 = G__35194;
chunk__34617_35172 = G__35195;
count__34618_35173 = G__35196;
i__34619_35174 = G__35197;
continue;
} else {
var G__35198 = cljs.core.next(seq__34615_35186__$1);
var G__35199 = null;
var G__35200 = (0);
var G__35201 = (0);
seq__34615_35171 = G__35198;
chunk__34617_35172 = G__35199;
count__34618_35173 = G__35200;
i__34619_35174 = G__35201;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35166);
}
}


var G__35202 = cljs.core.next(seq__34558_35157__$1);
var G__35203 = null;
var G__35204 = (0);
var G__35205 = (0);
seq__34558_35112 = G__35202;
chunk__34560_35113 = G__35203;
count__34561_35114 = G__35204;
i__34562_35115 = G__35205;
continue;
} else {
var G__35206 = cljs.core.next(seq__34558_35157__$1);
var G__35207 = null;
var G__35208 = (0);
var G__35209 = (0);
seq__34558_35112 = G__35206;
chunk__34560_35113 = G__35207;
count__34561_35114 = G__35208;
i__34562_35115 = G__35209;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35256 = arguments.length;
var i__4731__auto___35257 = (0);
while(true){
if((i__4731__auto___35257 < len__4730__auto___35256)){
args__4736__auto__.push((arguments[i__4731__auto___35257]));

var G__35258 = (i__4731__auto___35257 + (1));
i__4731__auto___35257 = G__35258;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34630){
var G__34631 = cljs.core.first(seq34630);
var seq34630__$1 = cljs.core.next(seq34630);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34631,seq34630__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34641 = arguments.length;
switch (G__34641) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4109__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4109__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4109__auto__;
}
})())){
var c__29073__auto___35278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_34654){
var state_val_34656 = (state_34654[(1)]);
if((state_val_34656 === (1))){
var state_34654__$1 = state_34654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34654__$1,(2),once_or_cleanup);
} else {
if((state_val_34656 === (2))){
var inst_34650 = (state_34654[(2)]);
var inst_34652 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34654__$1 = (function (){var statearr_34662 = state_34654;
(statearr_34662[(7)] = inst_34650);

return statearr_34662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34654__$1,inst_34652);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28557__auto__ = null;
var shadow$dom$state_machine__28557__auto____0 = (function (){
var statearr_34665 = [null,null,null,null,null,null,null,null];
(statearr_34665[(0)] = shadow$dom$state_machine__28557__auto__);

(statearr_34665[(1)] = (1));

return statearr_34665;
});
var shadow$dom$state_machine__28557__auto____1 = (function (state_34654){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_34654);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e34667){var ex__28560__auto__ = e34667;
var statearr_34668_35280 = state_34654;
(statearr_34668_35280[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_34654[(4)]))){
var statearr_34669_35285 = state_34654;
(statearr_34669_35285[(1)] = cljs.core.first((state_34654[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35306 = state_34654;
state_34654 = G__35306;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
shadow$dom$state_machine__28557__auto__ = function(state_34654){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28557__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28557__auto____1.call(this,state_34654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28557__auto____0;
shadow$dom$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28557__auto____1;
return shadow$dom$state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_34670 = f__29074__auto__();
(statearr_34670[(6)] = c__29073__auto___35278);

return statearr_34670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
