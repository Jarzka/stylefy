goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__33220__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__33220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33221__i = 0, G__33221__a = new Array(arguments.length -  0);
while (G__33221__i < G__33221__a.length) {G__33221__a[G__33221__i] = arguments[G__33221__i + 0]; ++G__33221__i;}
  args = new cljs.core.IndexedSeq(G__33221__a,0,null);
} 
return G__33220__delegate.call(this,args);};
G__33220.cljs$lang$maxFixedArity = 0;
G__33220.cljs$lang$applyTo = (function (arglist__33222){
var args = cljs.core.seq(arglist__33222);
return G__33220__delegate(args);
});
G__33220.cljs$core$IFn$_invoke$arity$variadic = G__33220__delegate;
return G__33220;
})()
);

(o.error = (function() { 
var G__33223__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__33223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33224__i = 0, G__33224__a = new Array(arguments.length -  0);
while (G__33224__i < G__33224__a.length) {G__33224__a[G__33224__i] = arguments[G__33224__i + 0]; ++G__33224__i;}
  args = new cljs.core.IndexedSeq(G__33224__a,0,null);
} 
return G__33223__delegate.call(this,args);};
G__33223.cljs$lang$maxFixedArity = 0;
G__33223.cljs$lang$applyTo = (function (arglist__33225){
var args = cljs.core.seq(arglist__33225);
return G__33223__delegate(args);
});
G__33223.cljs$core$IFn$_invoke$arity$variadic = G__33223__delegate;
return G__33223;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
