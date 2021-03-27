goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38401 = arguments.length;
var i__4731__auto___38402 = (0);
while(true){
if((i__4731__auto___38402 < len__4730__auto___38401)){
args__4736__auto__.push((arguments[i__4731__auto___38402]));

var G__38403 = (i__4731__auto___38402 + (1));
i__4731__auto___38402 = G__38403;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38106){
var G__38107 = cljs.core.first(seq38106);
var seq38106__$1 = cljs.core.next(seq38106);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38107,seq38106__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38109 = cljs.core.seq(sources);
var chunk__38110 = null;
var count__38111 = (0);
var i__38112 = (0);
while(true){
if((i__38112 < count__38111)){
var map__38144 = chunk__38110.cljs$core$IIndexed$_nth$arity$2(null,i__38112);
var map__38144__$1 = (((((!((map__38144 == null))))?(((((map__38144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38144):map__38144);
var src = map__38144__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38144__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38144__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38144__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38144__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e38149){var e_38406 = e38149;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38406);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38406.message)].join('')));
}

var G__38409 = seq__38109;
var G__38410 = chunk__38110;
var G__38411 = count__38111;
var G__38412 = (i__38112 + (1));
seq__38109 = G__38409;
chunk__38110 = G__38410;
count__38111 = G__38411;
i__38112 = G__38412;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38109);
if(temp__5735__auto__){
var seq__38109__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38109__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38109__$1);
var G__38413 = cljs.core.chunk_rest(seq__38109__$1);
var G__38414 = c__4550__auto__;
var G__38415 = cljs.core.count(c__4550__auto__);
var G__38416 = (0);
seq__38109 = G__38413;
chunk__38110 = G__38414;
count__38111 = G__38415;
i__38112 = G__38416;
continue;
} else {
var map__38152 = cljs.core.first(seq__38109__$1);
var map__38152__$1 = (((((!((map__38152 == null))))?(((((map__38152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38152):map__38152);
var src = map__38152__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38152__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38152__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38152__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38152__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e38158){var e_38420 = e38158;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38420);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38420.message)].join('')));
}

var G__38421 = cljs.core.next(seq__38109__$1);
var G__38422 = null;
var G__38423 = (0);
var G__38424 = (0);
seq__38109 = G__38421;
chunk__38110 = G__38422;
count__38111 = G__38423;
i__38112 = G__38424;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38171 = cljs.core.seq(js_requires);
var chunk__38172 = null;
var count__38173 = (0);
var i__38174 = (0);
while(true){
if((i__38174 < count__38173)){
var js_ns = chunk__38172.cljs$core$IIndexed$_nth$arity$2(null,i__38174);
var require_str_38426 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38426);


var G__38427 = seq__38171;
var G__38428 = chunk__38172;
var G__38429 = count__38173;
var G__38430 = (i__38174 + (1));
seq__38171 = G__38427;
chunk__38172 = G__38428;
count__38173 = G__38429;
i__38174 = G__38430;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38171);
if(temp__5735__auto__){
var seq__38171__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38171__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38171__$1);
var G__38431 = cljs.core.chunk_rest(seq__38171__$1);
var G__38432 = c__4550__auto__;
var G__38433 = cljs.core.count(c__4550__auto__);
var G__38434 = (0);
seq__38171 = G__38431;
chunk__38172 = G__38432;
count__38173 = G__38433;
i__38174 = G__38434;
continue;
} else {
var js_ns = cljs.core.first(seq__38171__$1);
var require_str_38435 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38435);


var G__38436 = cljs.core.next(seq__38171__$1);
var G__38437 = null;
var G__38438 = (0);
var G__38439 = (0);
seq__38171 = G__38436;
chunk__38172 = G__38437;
count__38173 = G__38438;
i__38174 = G__38439;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__38196 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__38196) : callback.call(null,G__38196));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__38206){
var map__38207 = p__38206;
var map__38207__$1 = (((((!((map__38207 == null))))?(((((map__38207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38207):map__38207);
var msg = map__38207__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38207__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38207__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38211(s__38212){
return (new cljs.core.LazySeq(null,(function (){
var s__38212__$1 = s__38212;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38212__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__38217 = cljs.core.first(xs__6292__auto__);
var map__38217__$1 = (((((!((map__38217 == null))))?(((((map__38217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38217):map__38217);
var src = map__38217__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38217__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38217__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__38212__$1,map__38217,map__38217__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38207,map__38207__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38211_$_iter__38213(s__38214){
return (new cljs.core.LazySeq(null,((function (s__38212__$1,map__38217,map__38217__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38207,map__38207__$1,msg,info,reload_info){
return (function (){
var s__38214__$1 = s__38214;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38214__$1);
if(temp__5735__auto____$1){
var s__38214__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38214__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38214__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38216 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38215 = (0);
while(true){
if((i__38215 < size__4522__auto__)){
var warning = cljs.core._nth(c__4521__auto__,i__38215);
cljs.core.chunk_append(b__38216,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38443 = (i__38215 + (1));
i__38215 = G__38443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38216),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38211_$_iter__38213(cljs.core.chunk_rest(s__38214__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38216),null);
}
} else {
var warning = cljs.core.first(s__38214__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38211_$_iter__38213(cljs.core.rest(s__38214__$2)));
}
} else {
return null;
}
break;
}
});})(s__38212__$1,map__38217,map__38217__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38207,map__38207__$1,msg,info,reload_info))
,null,null));
});})(s__38212__$1,map__38217,map__38217__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38207,map__38207__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38211(cljs.core.rest(s__38212__$1)));
} else {
var G__38445 = cljs.core.rest(s__38212__$1);
s__38212__$1 = G__38445;
continue;
}
} else {
var G__38447 = cljs.core.rest(s__38212__$1);
s__38212__$1 = G__38447;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__38224_38449 = cljs.core.seq(warnings);
var chunk__38225_38450 = null;
var count__38226_38451 = (0);
var i__38227_38452 = (0);
while(true){
if((i__38227_38452 < count__38226_38451)){
var map__38272_38453 = chunk__38225_38450.cljs$core$IIndexed$_nth$arity$2(null,i__38227_38452);
var map__38272_38454__$1 = (((((!((map__38272_38453 == null))))?(((((map__38272_38453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38272_38453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38272_38453):map__38272_38453);
var w_38455 = map__38272_38454__$1;
var msg_38456__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38272_38454__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38272_38454__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38272_38454__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38272_38454__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38459)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38457),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38458),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38456__$1)].join(''));


var G__38460 = seq__38224_38449;
var G__38461 = chunk__38225_38450;
var G__38462 = count__38226_38451;
var G__38463 = (i__38227_38452 + (1));
seq__38224_38449 = G__38460;
chunk__38225_38450 = G__38461;
count__38226_38451 = G__38462;
i__38227_38452 = G__38463;
continue;
} else {
var temp__5735__auto___38464 = cljs.core.seq(seq__38224_38449);
if(temp__5735__auto___38464){
var seq__38224_38465__$1 = temp__5735__auto___38464;
if(cljs.core.chunked_seq_QMARK_(seq__38224_38465__$1)){
var c__4550__auto___38466 = cljs.core.chunk_first(seq__38224_38465__$1);
var G__38467 = cljs.core.chunk_rest(seq__38224_38465__$1);
var G__38468 = c__4550__auto___38466;
var G__38469 = cljs.core.count(c__4550__auto___38466);
var G__38470 = (0);
seq__38224_38449 = G__38467;
chunk__38225_38450 = G__38468;
count__38226_38451 = G__38469;
i__38227_38452 = G__38470;
continue;
} else {
var map__38274_38471 = cljs.core.first(seq__38224_38465__$1);
var map__38274_38472__$1 = (((((!((map__38274_38471 == null))))?(((((map__38274_38471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38274_38471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38274_38471):map__38274_38471);
var w_38473 = map__38274_38472__$1;
var msg_38474__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38274_38472__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38274_38472__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38274_38472__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38274_38472__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38477)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38475),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38476),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38474__$1)].join(''));


var G__38478 = cljs.core.next(seq__38224_38465__$1);
var G__38479 = null;
var G__38480 = (0);
var G__38481 = (0);
seq__38224_38449 = G__38478;
chunk__38225_38450 = G__38479;
count__38226_38451 = G__38480;
i__38227_38452 = G__38481;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__38204_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38204_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__38276){
var map__38277 = p__38276;
var map__38277__$1 = (((((!((map__38277 == null))))?(((((map__38277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38277):map__38277);
var msg = map__38277__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38277__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__38279 = cljs.core.seq(updates);
var chunk__38281 = null;
var count__38282 = (0);
var i__38283 = (0);
while(true){
if((i__38283 < count__38282)){
var path = chunk__38281.cljs$core$IIndexed$_nth$arity$2(null,i__38283);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38314_38482 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38317_38483 = null;
var count__38318_38484 = (0);
var i__38319_38485 = (0);
while(true){
if((i__38319_38485 < count__38318_38484)){
var node_38487 = chunk__38317_38483.cljs$core$IIndexed$_nth$arity$2(null,i__38319_38485);
var path_match_38489 = shadow.cljs.devtools.client.browser.match_paths(node_38487.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38489)){
var new_link_38490 = (function (){var G__38326 = node_38487.cloneNode(true);
G__38326.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38489),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38326;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38489], 0));

goog.dom.insertSiblingAfter(new_link_38490,node_38487);

goog.dom.removeNode(node_38487);


var G__38492 = seq__38314_38482;
var G__38493 = chunk__38317_38483;
var G__38494 = count__38318_38484;
var G__38495 = (i__38319_38485 + (1));
seq__38314_38482 = G__38492;
chunk__38317_38483 = G__38493;
count__38318_38484 = G__38494;
i__38319_38485 = G__38495;
continue;
} else {
var G__38496 = seq__38314_38482;
var G__38497 = chunk__38317_38483;
var G__38498 = count__38318_38484;
var G__38499 = (i__38319_38485 + (1));
seq__38314_38482 = G__38496;
chunk__38317_38483 = G__38497;
count__38318_38484 = G__38498;
i__38319_38485 = G__38499;
continue;
}
} else {
var temp__5735__auto___38500 = cljs.core.seq(seq__38314_38482);
if(temp__5735__auto___38500){
var seq__38314_38501__$1 = temp__5735__auto___38500;
if(cljs.core.chunked_seq_QMARK_(seq__38314_38501__$1)){
var c__4550__auto___38502 = cljs.core.chunk_first(seq__38314_38501__$1);
var G__38503 = cljs.core.chunk_rest(seq__38314_38501__$1);
var G__38504 = c__4550__auto___38502;
var G__38505 = cljs.core.count(c__4550__auto___38502);
var G__38506 = (0);
seq__38314_38482 = G__38503;
chunk__38317_38483 = G__38504;
count__38318_38484 = G__38505;
i__38319_38485 = G__38506;
continue;
} else {
var node_38508 = cljs.core.first(seq__38314_38501__$1);
var path_match_38509 = shadow.cljs.devtools.client.browser.match_paths(node_38508.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38509)){
var new_link_38511 = (function (){var G__38329 = node_38508.cloneNode(true);
G__38329.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38509),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38329;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38509], 0));

goog.dom.insertSiblingAfter(new_link_38511,node_38508);

goog.dom.removeNode(node_38508);


var G__38512 = cljs.core.next(seq__38314_38501__$1);
var G__38513 = null;
var G__38514 = (0);
var G__38515 = (0);
seq__38314_38482 = G__38512;
chunk__38317_38483 = G__38513;
count__38318_38484 = G__38514;
i__38319_38485 = G__38515;
continue;
} else {
var G__38516 = cljs.core.next(seq__38314_38501__$1);
var G__38517 = null;
var G__38518 = (0);
var G__38519 = (0);
seq__38314_38482 = G__38516;
chunk__38317_38483 = G__38517;
count__38318_38484 = G__38518;
i__38319_38485 = G__38519;
continue;
}
}
} else {
}
}
break;
}


var G__38520 = seq__38279;
var G__38521 = chunk__38281;
var G__38522 = count__38282;
var G__38523 = (i__38283 + (1));
seq__38279 = G__38520;
chunk__38281 = G__38521;
count__38282 = G__38522;
i__38283 = G__38523;
continue;
} else {
var G__38524 = seq__38279;
var G__38525 = chunk__38281;
var G__38526 = count__38282;
var G__38527 = (i__38283 + (1));
seq__38279 = G__38524;
chunk__38281 = G__38525;
count__38282 = G__38526;
i__38283 = G__38527;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38279);
if(temp__5735__auto__){
var seq__38279__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38279__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38279__$1);
var G__38528 = cljs.core.chunk_rest(seq__38279__$1);
var G__38529 = c__4550__auto__;
var G__38530 = cljs.core.count(c__4550__auto__);
var G__38531 = (0);
seq__38279 = G__38528;
chunk__38281 = G__38529;
count__38282 = G__38530;
i__38283 = G__38531;
continue;
} else {
var path = cljs.core.first(seq__38279__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38330_38532 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38333_38533 = null;
var count__38334_38534 = (0);
var i__38335_38535 = (0);
while(true){
if((i__38335_38535 < count__38334_38534)){
var node_38536 = chunk__38333_38533.cljs$core$IIndexed$_nth$arity$2(null,i__38335_38535);
var path_match_38537 = shadow.cljs.devtools.client.browser.match_paths(node_38536.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38537)){
var new_link_38538 = (function (){var G__38340 = node_38536.cloneNode(true);
G__38340.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38537),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38340;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38537], 0));

goog.dom.insertSiblingAfter(new_link_38538,node_38536);

goog.dom.removeNode(node_38536);


var G__38539 = seq__38330_38532;
var G__38540 = chunk__38333_38533;
var G__38541 = count__38334_38534;
var G__38542 = (i__38335_38535 + (1));
seq__38330_38532 = G__38539;
chunk__38333_38533 = G__38540;
count__38334_38534 = G__38541;
i__38335_38535 = G__38542;
continue;
} else {
var G__38543 = seq__38330_38532;
var G__38544 = chunk__38333_38533;
var G__38545 = count__38334_38534;
var G__38546 = (i__38335_38535 + (1));
seq__38330_38532 = G__38543;
chunk__38333_38533 = G__38544;
count__38334_38534 = G__38545;
i__38335_38535 = G__38546;
continue;
}
} else {
var temp__5735__auto___38547__$1 = cljs.core.seq(seq__38330_38532);
if(temp__5735__auto___38547__$1){
var seq__38330_38548__$1 = temp__5735__auto___38547__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38330_38548__$1)){
var c__4550__auto___38549 = cljs.core.chunk_first(seq__38330_38548__$1);
var G__38550 = cljs.core.chunk_rest(seq__38330_38548__$1);
var G__38551 = c__4550__auto___38549;
var G__38552 = cljs.core.count(c__4550__auto___38549);
var G__38553 = (0);
seq__38330_38532 = G__38550;
chunk__38333_38533 = G__38551;
count__38334_38534 = G__38552;
i__38335_38535 = G__38553;
continue;
} else {
var node_38554 = cljs.core.first(seq__38330_38548__$1);
var path_match_38555 = shadow.cljs.devtools.client.browser.match_paths(node_38554.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38555)){
var new_link_38556 = (function (){var G__38341 = node_38554.cloneNode(true);
G__38341.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38555),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38341;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38555], 0));

goog.dom.insertSiblingAfter(new_link_38556,node_38554);

goog.dom.removeNode(node_38554);


var G__38557 = cljs.core.next(seq__38330_38548__$1);
var G__38558 = null;
var G__38559 = (0);
var G__38560 = (0);
seq__38330_38532 = G__38557;
chunk__38333_38533 = G__38558;
count__38334_38534 = G__38559;
i__38335_38535 = G__38560;
continue;
} else {
var G__38561 = cljs.core.next(seq__38330_38548__$1);
var G__38562 = null;
var G__38563 = (0);
var G__38564 = (0);
seq__38330_38532 = G__38561;
chunk__38333_38533 = G__38562;
count__38334_38534 = G__38563;
i__38335_38535 = G__38564;
continue;
}
}
} else {
}
}
break;
}


var G__38565 = cljs.core.next(seq__38279__$1);
var G__38566 = null;
var G__38567 = (0);
var G__38568 = (0);
seq__38279 = G__38565;
chunk__38281 = G__38566;
count__38282 = G__38567;
i__38283 = G__38568;
continue;
} else {
var G__38569 = cljs.core.next(seq__38279__$1);
var G__38570 = null;
var G__38571 = (0);
var G__38572 = (0);
seq__38279 = G__38569;
chunk__38281 = G__38570;
count__38282 = G__38571;
i__38283 = G__38572;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__38344){
var map__38345 = p__38344;
var map__38345__$1 = (((((!((map__38345 == null))))?(((((map__38345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38345):map__38345);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38345__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38345__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__38349,done){
var map__38350 = p__38349;
var map__38350__$1 = (((((!((map__38350 == null))))?(((((map__38350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38350):map__38350);
var msg = map__38350__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38350__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38350__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38350__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38350__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38352){
var map__38353 = p__38352;
var map__38353__$1 = (((((!((map__38353 == null))))?(((((map__38353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38353):map__38353);
var src = map__38353__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38353__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4109__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4109__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e38366){var e = e38366;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__38367,done){
var map__38368 = p__38367;
var map__38368__$1 = (((((!((map__38368 == null))))?(((((map__38368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38368):map__38368);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38368__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38368__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__38372){
var map__38373 = p__38372;
var map__38373__$1 = (((((!((map__38373 == null))))?(((((map__38373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38373):map__38373);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38373__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38373__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__38378,done){
var map__38380 = p__38378;
var map__38380__$1 = (((((!((map__38380 == null))))?(((((map__38380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38380):map__38380);
var msg = map__38380__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38380__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__38383_38581 = type;
var G__38383_38582__$1 = (((G__38383_38581 instanceof cljs.core.Keyword))?G__38383_38581.fqn:null);
switch (G__38383_38582__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__38390 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__38390.cljs$core$IFn$_invoke$arity$1 ? fexpr__38390.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__38390.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4120__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e38396){var e = e38396;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___38596 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___38596)){
var s_38597 = temp__5735__auto___38596;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_38597.onclose = (function (e){
return null;
}));

s_38597.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4109__auto__ = goog.global.document;
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4109__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
