goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29027){
var map__29028 = p__29027;
var map__29028__$1 = (((((!((map__29028 == null))))?(((((map__29028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29028):map__29028);
var m = map__29028__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29028__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29028__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4120__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29032_29250 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29033_29251 = null;
var count__29034_29252 = (0);
var i__29035_29253 = (0);
while(true){
if((i__29035_29253 < count__29034_29252)){
var f_29254 = chunk__29033_29251.cljs$core$IIndexed$_nth$arity$2(null,i__29035_29253);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29254], 0));


var G__29255 = seq__29032_29250;
var G__29256 = chunk__29033_29251;
var G__29257 = count__29034_29252;
var G__29258 = (i__29035_29253 + (1));
seq__29032_29250 = G__29255;
chunk__29033_29251 = G__29256;
count__29034_29252 = G__29257;
i__29035_29253 = G__29258;
continue;
} else {
var temp__5735__auto___29259 = cljs.core.seq(seq__29032_29250);
if(temp__5735__auto___29259){
var seq__29032_29260__$1 = temp__5735__auto___29259;
if(cljs.core.chunked_seq_QMARK_(seq__29032_29260__$1)){
var c__4550__auto___29261 = cljs.core.chunk_first(seq__29032_29260__$1);
var G__29262 = cljs.core.chunk_rest(seq__29032_29260__$1);
var G__29263 = c__4550__auto___29261;
var G__29264 = cljs.core.count(c__4550__auto___29261);
var G__29265 = (0);
seq__29032_29250 = G__29262;
chunk__29033_29251 = G__29263;
count__29034_29252 = G__29264;
i__29035_29253 = G__29265;
continue;
} else {
var f_29266 = cljs.core.first(seq__29032_29260__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29266], 0));


var G__29267 = cljs.core.next(seq__29032_29260__$1);
var G__29268 = null;
var G__29269 = (0);
var G__29270 = (0);
seq__29032_29250 = G__29267;
chunk__29033_29251 = G__29268;
count__29034_29252 = G__29269;
i__29035_29253 = G__29270;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29271 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4120__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_29271], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_29271)))?cljs.core.second(arglists_29271):arglists_29271)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29039_29272 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29040_29273 = null;
var count__29041_29274 = (0);
var i__29042_29275 = (0);
while(true){
if((i__29042_29275 < count__29041_29274)){
var vec__29055_29276 = chunk__29040_29273.cljs$core$IIndexed$_nth$arity$2(null,i__29042_29275);
var name_29277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29055_29276,(0),null);
var map__29058_29278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29055_29276,(1),null);
var map__29058_29279__$1 = (((((!((map__29058_29278 == null))))?(((((map__29058_29278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29058_29278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29058_29278):map__29058_29278);
var doc_29280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29058_29279__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29058_29279__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_29277], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_29281], 0));

if(cljs.core.truth_(doc_29280)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_29280], 0));
} else {
}


var G__29282 = seq__29039_29272;
var G__29283 = chunk__29040_29273;
var G__29284 = count__29041_29274;
var G__29285 = (i__29042_29275 + (1));
seq__29039_29272 = G__29282;
chunk__29040_29273 = G__29283;
count__29041_29274 = G__29284;
i__29042_29275 = G__29285;
continue;
} else {
var temp__5735__auto___29286 = cljs.core.seq(seq__29039_29272);
if(temp__5735__auto___29286){
var seq__29039_29288__$1 = temp__5735__auto___29286;
if(cljs.core.chunked_seq_QMARK_(seq__29039_29288__$1)){
var c__4550__auto___29289 = cljs.core.chunk_first(seq__29039_29288__$1);
var G__29290 = cljs.core.chunk_rest(seq__29039_29288__$1);
var G__29291 = c__4550__auto___29289;
var G__29292 = cljs.core.count(c__4550__auto___29289);
var G__29293 = (0);
seq__29039_29272 = G__29290;
chunk__29040_29273 = G__29291;
count__29041_29274 = G__29292;
i__29042_29275 = G__29293;
continue;
} else {
var vec__29061_29294 = cljs.core.first(seq__29039_29288__$1);
var name_29295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29061_29294,(0),null);
var map__29064_29296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29061_29294,(1),null);
var map__29064_29297__$1 = (((((!((map__29064_29296 == null))))?(((((map__29064_29296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29064_29296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29064_29296):map__29064_29296);
var doc_29298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29064_29297__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29064_29297__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_29295], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_29299], 0));

if(cljs.core.truth_(doc_29298)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_29298], 0));
} else {
}


var G__29300 = cljs.core.next(seq__29039_29288__$1);
var G__29301 = null;
var G__29302 = (0);
var G__29303 = (0);
seq__29039_29272 = G__29300;
chunk__29040_29273 = G__29301;
count__29041_29274 = G__29302;
i__29042_29275 = G__29303;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__29067 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29068 = null;
var count__29069 = (0);
var i__29070 = (0);
while(true){
if((i__29070 < count__29069)){
var role = chunk__29068.cljs$core$IIndexed$_nth$arity$2(null,i__29070);
var temp__5735__auto___29304__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___29304__$1)){
var spec_29305 = temp__5735__auto___29304__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_29305)], 0));
} else {
}


var G__29306 = seq__29067;
var G__29307 = chunk__29068;
var G__29308 = count__29069;
var G__29309 = (i__29070 + (1));
seq__29067 = G__29306;
chunk__29068 = G__29307;
count__29069 = G__29308;
i__29070 = G__29309;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__29067);
if(temp__5735__auto____$1){
var seq__29067__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__29067__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__29067__$1);
var G__29310 = cljs.core.chunk_rest(seq__29067__$1);
var G__29311 = c__4550__auto__;
var G__29312 = cljs.core.count(c__4550__auto__);
var G__29313 = (0);
seq__29067 = G__29310;
chunk__29068 = G__29311;
count__29069 = G__29312;
i__29070 = G__29313;
continue;
} else {
var role = cljs.core.first(seq__29067__$1);
var temp__5735__auto___29314__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___29314__$2)){
var spec_29315 = temp__5735__auto___29314__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_29315)], 0));
} else {
}


var G__29316 = cljs.core.next(seq__29067__$1);
var G__29317 = null;
var G__29318 = (0);
var G__29319 = (0);
seq__29067 = G__29316;
chunk__29068 = G__29317;
count__29069 = G__29318;
i__29070 = G__29319;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__29320 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__29321 = cljs.core.ex_cause(t);
via = G__29320;
t = G__29321;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__29140 = datafied_throwable;
var map__29140__$1 = (((((!((map__29140 == null))))?(((((map__29140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29140):map__29140);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29140__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29140__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29140__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29144 = cljs.core.last(via);
var map__29144__$1 = (((((!((map__29144 == null))))?(((((map__29144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29144):map__29144);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29144__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29144__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29144__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29145 = data;
var map__29145__$1 = (((((!((map__29145 == null))))?(((((map__29145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29145):map__29145);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29145__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29145__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29145__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29146 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__29146__$1 = (((((!((map__29146 == null))))?(((((map__29146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29146):map__29146);
var top_data = map__29146__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29146__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__29173 = phase;
var G__29173__$1 = (((G__29173 instanceof cljs.core.Keyword))?G__29173.fqn:null);
switch (G__29173__$1) {
case "read-source":
var map__29178 = data;
var map__29178__$1 = (((((!((map__29178 == null))))?(((((map__29178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29178):map__29178);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29178__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29178__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29180 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__29180__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29180,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29180);
var G__29180__$2 = (cljs.core.truth_((function (){var fexpr__29182 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29182.cljs$core$IFn$_invoke$arity$1 ? fexpr__29182.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29182.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29180__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29180__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29180__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29180__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29183 = top_data;
var G__29183__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29183,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29183);
var G__29183__$2 = (cljs.core.truth_((function (){var fexpr__29184 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29184.cljs$core$IFn$_invoke$arity$1 ? fexpr__29184.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29184.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29183__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29183__$1);
var G__29183__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29183__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29183__$2);
var G__29183__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29183__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29183__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29183__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29183__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29186 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29186,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29186,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29186,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29186,(3),null);
var G__29189 = top_data;
var G__29189__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29189,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29189);
var G__29189__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29189__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29189__$1);
var G__29189__$3 = (cljs.core.truth_((function (){var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29189__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29189__$2);
var G__29189__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29189__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29189__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29189__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29189__$4;
}

break;
case "execution":
var vec__29190 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29190,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29190,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29190,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29190,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__29135_SHARP_){
var or__4120__auto__ = (p1__29135_SHARP_ == null);
if(or__4120__auto__){
return or__4120__auto__;
} else {
var fexpr__29195 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29195.cljs$core$IFn$_invoke$arity$1 ? fexpr__29195.cljs$core$IFn$_invoke$arity$1(p1__29135_SHARP_) : fexpr__29195.call(null,p1__29135_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4120__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return line;
}
})();
var G__29197 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29197__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29197,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29197);
var G__29197__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29197__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29197__$1);
var G__29197__$3 = (cljs.core.truth_((function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29197__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29197__$2);
var G__29197__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29197__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29197__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29197__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29197__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29173__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29202){
var map__29203 = p__29202;
var map__29203__$1 = (((((!((map__29203 == null))))?(((((map__29203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29203):map__29203);
var triage_data = map__29203__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29203__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29203__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29203__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29203__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29203__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29203__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29203__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29203__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = source;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = line;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4120__auto__ = class$;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__29205 = phase;
var G__29205__$1 = (((G__29205 instanceof cljs.core.Keyword))?G__29205.fqn:null);
switch (G__29205__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__29206 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__29207 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29208 = loc;
var G__29209 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29210_29330 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29211_29331 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29212_29332 = true;
var _STAR_print_fn_STAR__temp_val__29213_29333 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29212_29332);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29213_29333);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29199_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29199_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29211_29331);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29210_29330);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29206,G__29207,G__29208,G__29209) : format.call(null,G__29206,G__29207,G__29208,G__29209));

break;
case "macroexpansion":
var G__29214 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__29215 = cause_type;
var G__29216 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29217 = loc;
var G__29218 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29214,G__29215,G__29216,G__29217,G__29218) : format.call(null,G__29214,G__29215,G__29216,G__29217,G__29218));

break;
case "compile-syntax-check":
var G__29219 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__29220 = cause_type;
var G__29221 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29222 = loc;
var G__29223 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29219,G__29220,G__29221,G__29222,G__29223) : format.call(null,G__29219,G__29220,G__29221,G__29222,G__29223));

break;
case "compilation":
var G__29228 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__29229 = cause_type;
var G__29230 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29231 = loc;
var G__29232 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29228,G__29229,G__29230,G__29231,G__29232) : format.call(null,G__29228,G__29229,G__29230,G__29231,G__29232));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__29233 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__29234 = symbol;
var G__29235 = loc;
var G__29236 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29237_29335 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29238_29336 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29239_29337 = true;
var _STAR_print_fn_STAR__temp_val__29240_29338 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29239_29337);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29240_29338);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29200_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29200_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29238_29336);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29237_29335);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29233,G__29234,G__29235,G__29236) : format.call(null,G__29233,G__29234,G__29235,G__29236));
} else {
var G__29245 = "Execution error%s at %s(%s).\n%s\n";
var G__29246 = cause_type;
var G__29247 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29248 = loc;
var G__29249 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29245,G__29246,G__29247,G__29248,G__29249) : format.call(null,G__29245,G__29246,G__29247,G__29248,G__29249));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29205__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
