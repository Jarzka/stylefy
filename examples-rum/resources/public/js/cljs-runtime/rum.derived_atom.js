goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__26962 = arguments.length;
switch (G__26962) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__27005 = opts;
var map__27005__$1 = (((((!((map__27005 == null))))?(((((map__27005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27005):map__27005);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27005__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27005__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__27027 = cljs.core.count(refs);
switch (G__27027) {
case (1):
var vec__27031 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27031,(0),null);
return (function (){
var G__27035 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27035) : f.call(null,G__27035));
});

break;
case (2):
var vec__27039 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27039,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27039,(1),null);
return (function (){
var G__27043 = cljs.core.deref(a);
var G__27044 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27043,G__27044) : f.call(null,G__27043,G__27044));
});

break;
case (3):
var vec__27045 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27045,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27045,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27045,(2),null);
return (function (){
var G__27050 = cljs.core.deref(a);
var G__27051 = cljs.core.deref(b);
var G__27052 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27050,G__27051,G__27052) : f.call(null,G__27050,G__27051,G__27052));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__27056 = ref;
cljs.core.reset_BANG_(G__27056,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__27056;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
}));
var seq__27063_27092 = cljs.core.seq(refs);
var chunk__27064_27093 = null;
var count__27065_27094 = (0);
var i__27066_27095 = (0);
while(true){
if((i__27066_27095 < count__27065_27094)){
var ref_27098__$1 = chunk__27064_27093.cljs$core$IIndexed$_nth$arity$2(null,i__27066_27095);
cljs.core.add_watch(ref_27098__$1,key,watch);


var G__27099 = seq__27063_27092;
var G__27100 = chunk__27064_27093;
var G__27101 = count__27065_27094;
var G__27102 = (i__27066_27095 + (1));
seq__27063_27092 = G__27099;
chunk__27064_27093 = G__27100;
count__27065_27094 = G__27101;
i__27066_27095 = G__27102;
continue;
} else {
var temp__5735__auto___27105 = cljs.core.seq(seq__27063_27092);
if(temp__5735__auto___27105){
var seq__27063_27106__$1 = temp__5735__auto___27105;
if(cljs.core.chunked_seq_QMARK_(seq__27063_27106__$1)){
var c__4550__auto___27107 = cljs.core.chunk_first(seq__27063_27106__$1);
var G__27108 = cljs.core.chunk_rest(seq__27063_27106__$1);
var G__27109 = c__4550__auto___27107;
var G__27110 = cljs.core.count(c__4550__auto___27107);
var G__27111 = (0);
seq__27063_27092 = G__27108;
chunk__27064_27093 = G__27109;
count__27065_27094 = G__27110;
i__27066_27095 = G__27111;
continue;
} else {
var ref_27112__$1 = cljs.core.first(seq__27063_27106__$1);
cljs.core.add_watch(ref_27112__$1,key,watch);


var G__27114 = cljs.core.next(seq__27063_27106__$1);
var G__27115 = null;
var G__27116 = (0);
var G__27117 = (0);
seq__27063_27092 = G__27114;
chunk__27064_27093 = G__27115;
count__27065_27094 = G__27116;
i__27066_27095 = G__27117;
continue;
}
} else {
}
}
break;
}

return sink;
}));

(rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=rum.derived_atom.js.map
