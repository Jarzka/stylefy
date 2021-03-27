goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35382 = arguments.length;
var i__4731__auto___35383 = (0);
while(true){
if((i__4731__auto___35383 < len__4730__auto___35382)){
args__4736__auto__.push((arguments[i__4731__auto___35383]));

var G__35384 = (i__4731__auto___35383 + (1));
i__4731__auto___35383 = G__35384;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__35385__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__35385 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__35386__i = 0, G__35386__a = new Array(arguments.length -  0);
while (G__35386__i < G__35386__a.length) {G__35386__a[G__35386__i] = arguments[G__35386__i + 0]; ++G__35386__i;}
  children = new cljs.core.IndexedSeq(G__35386__a,0,null);
} 
return G__35385__delegate.call(this,children);};
G__35385.cljs$lang$maxFixedArity = 0;
G__35385.cljs$lang$applyTo = (function (arglist__35387){
var children = cljs.core.seq(arglist__35387);
return G__35385__delegate(children);
});
G__35385.cljs$core$IFn$_invoke$arity$variadic = G__35385__delegate;
return G__35385;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq35344){
var G__35345 = cljs.core.first(seq35344);
var seq35344__$1 = cljs.core.next(seq35344);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35345,seq35344__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__35390__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__35390 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35391__i = 0, G__35391__a = new Array(arguments.length -  0);
while (G__35391__i < G__35391__a.length) {G__35391__a[G__35391__i] = arguments[G__35391__i + 0]; ++G__35391__i;}
  args = new cljs.core.IndexedSeq(G__35391__a,0,null);
} 
return G__35390__delegate.call(this,args);};
G__35390.cljs$lang$maxFixedArity = 0;
G__35390.cljs$lang$applyTo = (function (arglist__35392){
var args = cljs.core.seq(arglist__35392);
return G__35390__delegate(args);
});
G__35390.cljs$core$IFn$_invoke$arity$variadic = G__35390__delegate;
return G__35390;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35393 = arguments.length;
var i__4731__auto___35394 = (0);
while(true){
if((i__4731__auto___35394 < len__4730__auto___35393)){
args__4736__auto__.push((arguments[i__4731__auto___35394]));

var G__35398 = (i__4731__auto___35394 + (1));
i__4731__auto___35394 = G__35398;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq35353){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35353));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__35357 = arguments.length;
switch (G__35357) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___35400 = arguments.length;
var i__4731__auto___35401 = (0);
while(true){
if((i__4731__auto___35401 < len__4730__auto___35400)){
args_arr__4751__auto__.push((arguments[i__4731__auto___35401]));

var G__35402 = (i__4731__auto___35401 + (1));
i__4731__auto___35401 = G__35402;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq35355){
var G__35356 = cljs.core.first(seq35355);
var seq35355__$1 = cljs.core.next(seq35355);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35356,seq35355__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35403 = arguments.length;
var i__4731__auto___35404 = (0);
while(true){
if((i__4731__auto___35404 < len__4730__auto___35403)){
args__4736__auto__.push((arguments[i__4731__auto___35404]));

var G__35405 = (i__4731__auto___35404 + (1));
i__4731__auto___35404 = G__35405;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq35365){
var G__35366 = cljs.core.first(seq35365);
var seq35365__$1 = cljs.core.next(seq35365);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35366,seq35365__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35407 = arguments.length;
var i__4731__auto___35408 = (0);
while(true){
if((i__4731__auto___35408 < len__4730__auto___35407)){
args__4736__auto__.push((arguments[i__4731__auto___35408]));

var G__35409 = (i__4731__auto___35408 + (1));
i__4731__auto___35408 = G__35409;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq35367){
var G__35368 = cljs.core.first(seq35367);
var seq35367__$1 = cljs.core.next(seq35367);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35368,seq35367__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35411 = arguments.length;
var i__4731__auto___35414 = (0);
while(true){
if((i__4731__auto___35414 < len__4730__auto___35411)){
args__4736__auto__.push((arguments[i__4731__auto___35414]));

var G__35418 = (i__4731__auto___35414 + (1));
i__4731__auto___35414 = G__35418;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq35374){
var G__35375 = cljs.core.first(seq35374);
var seq35374__$1 = cljs.core.next(seq35374);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35375,seq35374__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=garden.stylesheet.js.map
