goog.provide('cljs_time.internal.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
cljs_time.internal.core.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
cljs_time.internal.core.days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], null);
cljs_time.internal.core.abbreviate = (function cljs_time$internal$core$abbreviate(n,s){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),n);
});
cljs_time.internal.core._EQ_ = (function cljs_time$internal$core$_EQ_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37987 = arguments.length;
var i__4731__auto___37988 = (0);
while(true){
if((i__4731__auto___37988 < len__4730__auto___37987)){
args__4736__auto__.push((arguments[i__4731__auto___37988]));

var G__37989 = (i__4731__auto___37988 + (1));
i__4731__auto___37988 = G__37989;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.every_QMARK_((function (p1__37942_SHARP_){
return (p1__37942_SHARP_ instanceof goog.date.Date);
}),args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37943_SHARP_){
return p1__37943_SHARP_.getTime();
}),args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,args);

}
}));

(cljs_time.internal.core._EQ_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs_time.internal.core._EQ_.cljs$lang$applyTo = (function (seq37944){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37944));
}));

cljs_time.internal.core.leap_year_QMARK_ = (function cljs_time$internal$core$leap_year_QMARK_(y){
if((cljs.core.mod(y,(400)) === (0))){
return true;
} else {
if((cljs.core.mod(y,(100)) === (0))){
return false;
} else {
if((cljs.core.mod(y,(4)) === (0))){
return true;
} else {
return false;

}
}
}
});
cljs_time.internal.core.days_in_month = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
cljs_time.internal.core.corrected_dim = (function cljs_time$internal$core$corrected_dim(month){
var G__37945 = (cljs.core.truth_(cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([month,(1)], 0)))?(11):(month - (1)));
return (cljs_time.internal.core.days_in_month.cljs$core$IFn$_invoke$arity$1 ? cljs_time.internal.core.days_in_month.cljs$core$IFn$_invoke$arity$1(G__37945) : cljs_time.internal.core.days_in_month.call(null,G__37945));
});
cljs_time.internal.core.year_corrected_dim = (function cljs_time$internal$core$year_corrected_dim(year,month){
var G__37946 = cljs_time.internal.core.corrected_dim(month);
if(cljs.core.truth_(((cljs_time.internal.core.leap_year_QMARK_(year))?cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([month,(2)], 0)):false))){
return (G__37946 + (1));
} else {
return G__37946;
}
});
cljs_time.internal.core.valid_date_QMARK_ = (function cljs_time$internal$core$valid_date_QMARK_(p__37947){
var map__37948 = p__37947;
var map__37948__$1 = (((((!((map__37948 == null))))?(((((map__37948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37948):map__37948);
var d = map__37948__$1;
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37948__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37948__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37948__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37948__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37948__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37948__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37948__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var months_QMARK_ = (cljs.core.truth_(months)?((((1) <= months)) && ((months <= (12)))):null);
var dim = (cljs.core.truth_(years)?(function (){var and__4109__auto__ = months;
if(cljs.core.truth_(and__4109__auto__)){
var and__4109__auto____$1 = months_QMARK_;
if(cljs.core.truth_(and__4109__auto____$1)){
return cljs_time.internal.core.year_corrected_dim(years,months);
} else {
return and__4109__auto____$1;
}
} else {
return and__4109__auto__;
}
})():(function (){var and__4109__auto__ = months;
if(cljs.core.truth_(and__4109__auto__)){
var and__4109__auto____$1 = months_QMARK_;
if(cljs.core.truth_(and__4109__auto____$1)){
return cljs_time.internal.core.corrected_dim(months);
} else {
return and__4109__auto____$1;
}
} else {
return and__4109__auto__;
}
})());
var days_QMARK_ = (cljs.core.truth_(days)?(cljs.core.truth_(dim)?((((1) <= days)) && ((days <= dim))):((((1) <= days)) && ((days <= (31))))):null);
var hours_QMARK_ = (cljs.core.truth_(hours)?((((0) <= hours)) && ((hours <= (23)))):null);
var minutes_QMARK_ = (cljs.core.truth_(minutes)?((((0) <= minutes)) && ((minutes <= (59)))):null);
var seconds_QMARK_ = (cljs.core.truth_(seconds)?((((0) <= seconds)) && ((seconds <= (60)))):null);
var millis_QMARK_ = (cljs.core.truth_(millis)?((((0) <= millis)) && ((millis <= (999)))):null);
if(cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [months_QMARK_,days_QMARK_,hours_QMARK_,minutes_QMARK_,seconds_QMARK_,millis_QMARK_], null)))){
return d;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Date is not valid",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid-date","invalid-date",2030506573),new cljs.core.Keyword(null,"date","date",-1463434462),d,new cljs.core.Keyword(null,"errors","errors",-908790718),(function (){var G__37967 = cljs.core.PersistentArrayMap.EMPTY;
var G__37967__$1 = ((months_QMARK_ === false)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37967,new cljs.core.Keyword(null,"months","months",-45571637),months):G__37967);
var G__37967__$2 = ((days_QMARK_ === false)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37967__$1,new cljs.core.Keyword(null,"days","days",-1394072564),days):G__37967__$1);
var G__37967__$3 = ((hours_QMARK_ === false)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37967__$2,new cljs.core.Keyword(null,"hours","hours",58380855),hours):G__37967__$2);
var G__37967__$4 = ((minutes_QMARK_ === false)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37967__$3,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes):G__37967__$3);
var G__37967__$5 = ((seconds_QMARK_ === false)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37967__$4,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds):G__37967__$4);
if(millis_QMARK_ === false){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37967__$5,new cljs.core.Keyword(null,"millis","millis",-1338288387),millis);
} else {
return G__37967__$5;
}
})()], null));
}
});
cljs_time.internal.core.index_of = (function cljs_time$internal$core$index_of(coll,x){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__37974_SHARP_,p2__37973_SHARP_){
if(cljs.core.truth_(cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p2__37973_SHARP_,x], 0)))){
return p1__37974_SHARP_;
} else {
return null;
}
}),coll));
});
/**
 * Formats a string using goog.string.format.
 */
cljs_time.internal.core.format = (function cljs_time$internal$core$format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37998 = arguments.length;
var i__4731__auto___37999 = (0);
while(true){
if((i__4731__auto___37999 < len__4730__auto___37998)){
args__4736__auto__.push((arguments[i__4731__auto___37999]));

var G__38000 = (i__4731__auto___37999 + (1));
i__4731__auto___37999 = G__38000;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if((((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args__$1);
}));

(cljs_time.internal.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_time.internal.core.format.cljs$lang$applyTo = (function (seq37975){
var G__37976 = cljs.core.first(seq37975);
var seq37975__$1 = cljs.core.next(seq37975);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37976,seq37975__$1);
}));

/**
 * Remove the need to pull in gstring/format code in advanced compilation
 */
cljs_time.internal.core.zero_pad = (function cljs_time$internal$core$zero_pad(var_args){
var G__37979 = arguments.length;
switch (G__37979) {
case 1:
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1 = (function (n){
if(((((0) <= n)) && ((n <= (9))))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
}
}));

(cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2 = (function (n,zeros){
if((zeros < (1))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
} else {
return [clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((zeros - ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)).length)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
}
}));

(cljs_time.internal.core.zero_pad.cljs$lang$maxFixedArity = 2);

cljs_time.internal.core.multiplied_by = (function cljs_time$internal$core$multiplied_by(period,scalar){
var scale_fn = (function cljs_time$internal$core$multiplied_by_$_scale_fn(field){
if(cljs.core.truth_(field)){
return (field * scalar);
} else {
return null;
}
});
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(period,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"millis","millis",-1338288387)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seconds","seconds",-445266194)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minutes","minutes",1319166394)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hours","hours",58380855)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"days","days",-1394072564)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weeks","weeks",1844596125)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"months","months",-45571637)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"years","years",-1298579689)], null),scale_fn);
});

//# sourceMappingURL=cljs_time.internal.core.js.map
