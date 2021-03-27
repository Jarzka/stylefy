goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29207 = arguments.length;
switch (G__29207) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29212 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29212 = (function (f,blockable,meta29213){
this.f = f;
this.blockable = blockable;
this.meta29213 = meta29213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29214,meta29213__$1){
var self__ = this;
var _29214__$1 = this;
return (new cljs.core.async.t_cljs$core$async29212(self__.f,self__.blockable,meta29213__$1));
}));

(cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29214){
var self__ = this;
var _29214__$1 = this;
return self__.meta29213;
}));

(cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29213","meta29213",815080954,null)], null);
}));

(cljs.core.async.t_cljs$core$async29212.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29212");

(cljs.core.async.t_cljs$core$async29212.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async29212");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29212.
 */
cljs.core.async.__GT_t_cljs$core$async29212 = (function cljs$core$async$__GT_t_cljs$core$async29212(f__$1,blockable__$1,meta29213){
return (new cljs.core.async.t_cljs$core$async29212(f__$1,blockable__$1,meta29213));
});

}

return (new cljs.core.async.t_cljs$core$async29212(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29238 = arguments.length;
switch (G__29238) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29253 = arguments.length;
switch (G__29253) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29262 = arguments.length;
switch (G__29262) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33379 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33379) : fn1.call(null,val_33379));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33379) : fn1.call(null,val_33379));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29264 = arguments.length;
switch (G__29264) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___33381 = n;
var x_33382 = (0);
while(true){
if((x_33382 < n__4607__auto___33381)){
(a[x_33382] = x_33382);

var G__33383 = (x_33382 + (1));
x_33382 = G__33383;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29277 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29277 = (function (flag,meta29278){
this.flag = flag;
this.meta29278 = meta29278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29279,meta29278__$1){
var self__ = this;
var _29279__$1 = this;
return (new cljs.core.async.t_cljs$core$async29277(self__.flag,meta29278__$1));
}));

(cljs.core.async.t_cljs$core$async29277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29279){
var self__ = this;
var _29279__$1 = this;
return self__.meta29278;
}));

(cljs.core.async.t_cljs$core$async29277.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29277.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29277.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29277.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29278","meta29278",-1045891578,null)], null);
}));

(cljs.core.async.t_cljs$core$async29277.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29277");

(cljs.core.async.t_cljs$core$async29277.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async29277");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29277.
 */
cljs.core.async.__GT_t_cljs$core$async29277 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29277(flag__$1,meta29278){
return (new cljs.core.async.t_cljs$core$async29277(flag__$1,meta29278));
});

}

return (new cljs.core.async.t_cljs$core$async29277(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29292 = (function (flag,cb,meta29293){
this.flag = flag;
this.cb = cb;
this.meta29293 = meta29293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29294,meta29293__$1){
var self__ = this;
var _29294__$1 = this;
return (new cljs.core.async.t_cljs$core$async29292(self__.flag,self__.cb,meta29293__$1));
}));

(cljs.core.async.t_cljs$core$async29292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29294){
var self__ = this;
var _29294__$1 = this;
return self__.meta29293;
}));

(cljs.core.async.t_cljs$core$async29292.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29292.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29292.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29292.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29293","meta29293",1929695669,null)], null);
}));

(cljs.core.async.t_cljs$core$async29292.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29292");

(cljs.core.async.t_cljs$core$async29292.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async29292");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29292.
 */
cljs.core.async.__GT_t_cljs$core$async29292 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29292(flag__$1,cb__$1,meta29293){
return (new cljs.core.async.t_cljs$core$async29292(flag__$1,cb__$1,meta29293));
});

}

return (new cljs.core.async.t_cljs$core$async29292(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29329_SHARP_){
var G__29345 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29329_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29345) : fret.call(null,G__29345));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29330_SHARP_){
var G__29348 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29330_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29348) : fret.call(null,G__29348));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4120__auto__ = wport;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33444 = (i + (1));
i = G__33444;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4120__auto__ = ret;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4109__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4109__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4109__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33447 = arguments.length;
var i__4731__auto___33449 = (0);
while(true){
if((i__4731__auto___33449 < len__4730__auto___33447)){
args__4736__auto__.push((arguments[i__4731__auto___33449]));

var G__33450 = (i__4731__auto___33449 + (1));
i__4731__auto___33449 = G__33450;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29358){
var map__29360 = p__29358;
var map__29360__$1 = (((((!((map__29360 == null))))?(((((map__29360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29360):map__29360);
var opts = map__29360__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29354){
var G__29355 = cljs.core.first(seq29354);
var seq29354__$1 = cljs.core.next(seq29354);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29355,seq29354__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29372 = arguments.length;
switch (G__29372) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29073__auto___33458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_29429){
var state_val_29430 = (state_29429[(1)]);
if((state_val_29430 === (7))){
var inst_29425 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
var statearr_29435_33460 = state_29429__$1;
(statearr_29435_33460[(2)] = inst_29425);

(statearr_29435_33460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (1))){
var state_29429__$1 = state_29429;
var statearr_29436_33462 = state_29429__$1;
(statearr_29436_33462[(2)] = null);

(statearr_29436_33462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (4))){
var inst_29402 = (state_29429[(7)]);
var inst_29402__$1 = (state_29429[(2)]);
var inst_29404 = (inst_29402__$1 == null);
var state_29429__$1 = (function (){var statearr_29441 = state_29429;
(statearr_29441[(7)] = inst_29402__$1);

return statearr_29441;
})();
if(cljs.core.truth_(inst_29404)){
var statearr_29442_33471 = state_29429__$1;
(statearr_29442_33471[(1)] = (5));

} else {
var statearr_29443_33472 = state_29429__$1;
(statearr_29443_33472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (13))){
var state_29429__$1 = state_29429;
var statearr_29445_33477 = state_29429__$1;
(statearr_29445_33477[(2)] = null);

(statearr_29445_33477[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (6))){
var inst_29402 = (state_29429[(7)]);
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29429__$1,(11),to,inst_29402);
} else {
if((state_val_29430 === (3))){
var inst_29427 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29429__$1,inst_29427);
} else {
if((state_val_29430 === (12))){
var state_29429__$1 = state_29429;
var statearr_29454_33478 = state_29429__$1;
(statearr_29454_33478[(2)] = null);

(statearr_29454_33478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (2))){
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29429__$1,(4),from);
} else {
if((state_val_29430 === (11))){
var inst_29418 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
if(cljs.core.truth_(inst_29418)){
var statearr_29455_33479 = state_29429__$1;
(statearr_29455_33479[(1)] = (12));

} else {
var statearr_29459_33481 = state_29429__$1;
(statearr_29459_33481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (9))){
var state_29429__$1 = state_29429;
var statearr_29461_33482 = state_29429__$1;
(statearr_29461_33482[(2)] = null);

(statearr_29461_33482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (5))){
var state_29429__$1 = state_29429;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29467_33483 = state_29429__$1;
(statearr_29467_33483[(1)] = (8));

} else {
var statearr_29472_33484 = state_29429__$1;
(statearr_29472_33484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (14))){
var inst_29423 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
var statearr_29473_33488 = state_29429__$1;
(statearr_29473_33488[(2)] = inst_29423);

(statearr_29473_33488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (10))){
var inst_29414 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
var statearr_29475_33489 = state_29429__$1;
(statearr_29475_33489[(2)] = inst_29414);

(statearr_29475_33489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (8))){
var inst_29411 = cljs.core.async.close_BANG_(to);
var state_29429__$1 = state_29429;
var statearr_29476_33490 = state_29429__$1;
(statearr_29476_33490[(2)] = inst_29411);

(statearr_29476_33490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28557__auto__ = null;
var cljs$core$async$state_machine__28557__auto____0 = (function (){
var statearr_29483 = [null,null,null,null,null,null,null,null];
(statearr_29483[(0)] = cljs$core$async$state_machine__28557__auto__);

(statearr_29483[(1)] = (1));

return statearr_29483;
});
var cljs$core$async$state_machine__28557__auto____1 = (function (state_29429){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_29429);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e29484){var ex__28560__auto__ = e29484;
var statearr_29487_33524 = state_29429;
(statearr_29487_33524[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_29429[(4)]))){
var statearr_29488_33525 = state_29429;
(statearr_29488_33525[(1)] = cljs.core.first((state_29429[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33526 = state_29429;
state_29429 = G__33526;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$state_machine__28557__auto__ = function(state_29429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28557__auto____1.call(this,state_29429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28557__auto____0;
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28557__auto____1;
return cljs$core$async$state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_29490 = f__29074__auto__();
(statearr_29490[(6)] = c__29073__auto___33458);

return statearr_29490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29512){
var vec__29517 = p__29512;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29517,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29517,(1),null);
var job = vec__29517;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29073__auto___33529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_29525){
var state_val_29526 = (state_29525[(1)]);
if((state_val_29526 === (1))){
var state_29525__$1 = state_29525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29525__$1,(2),res,v);
} else {
if((state_val_29526 === (2))){
var inst_29522 = (state_29525[(2)]);
var inst_29523 = cljs.core.async.close_BANG_(res);
var state_29525__$1 = (function (){var statearr_29531 = state_29525;
(statearr_29531[(7)] = inst_29522);

return statearr_29531;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29525__$1,inst_29523);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____0 = (function (){
var statearr_29539 = [null,null,null,null,null,null,null,null];
(statearr_29539[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__);

(statearr_29539[(1)] = (1));

return statearr_29539;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____1 = (function (state_29525){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_29525);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e29540){var ex__28560__auto__ = e29540;
var statearr_29541_33531 = state_29525;
(statearr_29541_33531[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_29525[(4)]))){
var statearr_29542_33533 = state_29525;
(statearr_29542_33533[(1)] = cljs.core.first((state_29525[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33534 = state_29525;
state_29525 = G__33534;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__ = function(state_29525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____1.call(this,state_29525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_29546 = f__29074__auto__();
(statearr_29546[(6)] = c__29073__auto___33529);

return statearr_29546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29555){
var vec__29557 = p__29555;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29557,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29557,(1),null);
var job = vec__29557;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4607__auto___33536 = n;
var __33538 = (0);
while(true){
if((__33538 < n__4607__auto___33536)){
var G__29561_33541 = type;
var G__29561_33542__$1 = (((G__29561_33541 instanceof cljs.core.Keyword))?G__29561_33541.fqn:null);
switch (G__29561_33542__$1) {
case "compute":
var c__29073__auto___33544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33538,c__29073__auto___33544,G__29561_33541,G__29561_33542__$1,n__4607__auto___33536,jobs,results,process,async){
return (function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = ((function (__33538,c__29073__auto___33544,G__29561_33541,G__29561_33542__$1,n__4607__auto___33536,jobs,results,process,async){
return (function (state_29576){
var state_val_29577 = (state_29576[(1)]);
if((state_val_29577 === (1))){
var state_29576__$1 = state_29576;
var statearr_29583_33546 = state_29576__$1;
(statearr_29583_33546[(2)] = null);

(statearr_29583_33546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (2))){
var state_29576__$1 = state_29576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29576__$1,(4),jobs);
} else {
if((state_val_29577 === (3))){
var inst_29574 = (state_29576[(2)]);
var state_29576__$1 = state_29576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29576__$1,inst_29574);
} else {
if((state_val_29577 === (4))){
var inst_29566 = (state_29576[(2)]);
var inst_29567 = process(inst_29566);
var state_29576__$1 = state_29576;
if(cljs.core.truth_(inst_29567)){
var statearr_29590_33548 = state_29576__$1;
(statearr_29590_33548[(1)] = (5));

} else {
var statearr_29596_33549 = state_29576__$1;
(statearr_29596_33549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (5))){
var state_29576__$1 = state_29576;
var statearr_29597_33551 = state_29576__$1;
(statearr_29597_33551[(2)] = null);

(statearr_29597_33551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (6))){
var state_29576__$1 = state_29576;
var statearr_29599_33554 = state_29576__$1;
(statearr_29599_33554[(2)] = null);

(statearr_29599_33554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (7))){
var inst_29572 = (state_29576[(2)]);
var state_29576__$1 = state_29576;
var statearr_29602_33556 = state_29576__$1;
(statearr_29602_33556[(2)] = inst_29572);

(statearr_29602_33556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33538,c__29073__auto___33544,G__29561_33541,G__29561_33542__$1,n__4607__auto___33536,jobs,results,process,async))
;
return ((function (__33538,switch__28556__auto__,c__29073__auto___33544,G__29561_33541,G__29561_33542__$1,n__4607__auto___33536,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____0 = (function (){
var statearr_29603 = [null,null,null,null,null,null,null];
(statearr_29603[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__);

(statearr_29603[(1)] = (1));

return statearr_29603;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____1 = (function (state_29576){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_29576);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e29605){var ex__28560__auto__ = e29605;
var statearr_29606_33558 = state_29576;
(statearr_29606_33558[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_29576[(4)]))){
var statearr_29607_33559 = state_29576;
(statearr_29607_33559[(1)] = cljs.core.first((state_29576[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33561 = state_29576;
state_29576 = G__33561;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__ = function(state_29576){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____1.call(this,state_29576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__;
})()
;})(__33538,switch__28556__auto__,c__29073__auto___33544,G__29561_33541,G__29561_33542__$1,n__4607__auto___33536,jobs,results,process,async))
})();
var state__29075__auto__ = (function (){var statearr_29610 = f__29074__auto__();
(statearr_29610[(6)] = c__29073__auto___33544);

return statearr_29610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
});})(__33538,c__29073__auto___33544,G__29561_33541,G__29561_33542__$1,n__4607__auto___33536,jobs,results,process,async))
);


break;
case "async":
var c__29073__auto___33563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33538,c__29073__auto___33563,G__29561_33541,G__29561_33542__$1,n__4607__auto___33536,jobs,results,process,async){
return (function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = ((function (__33538,c__29073__auto___33563,G__29561_33541,G__29561_33542__$1,n__4607__auto___33536,jobs,results,process,async){
return (function (state_29631){
var state_val_29632 = (state_29631[(1)]);
if((state_val_29632 === (1))){
var state_29631__$1 = state_29631;
var statearr_29638_33567 = state_29631__$1;
(statearr_29638_33567[(2)] = null);

(statearr_29638_33567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (2))){
var state_29631__$1 = state_29631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29631__$1,(4),jobs);
} else {
if((state_val_29632 === (3))){
var inst_29629 = (state_29631[(2)]);
var state_29631__$1 = state_29631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29631__$1,inst_29629);
} else {
if((state_val_29632 === (4))){
var inst_29620 = (state_29631[(2)]);
var inst_29621 = async(inst_29620);
var state_29631__$1 = state_29631;
if(cljs.core.truth_(inst_29621)){
var statearr_29646_33570 = state_29631__$1;
(statearr_29646_33570[(1)] = (5));

} else {
var statearr_29647_33571 = state_29631__$1;
(statearr_29647_33571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (5))){
var state_29631__$1 = state_29631;
var statearr_29650_33572 = state_29631__$1;
(statearr_29650_33572[(2)] = null);

(statearr_29650_33572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (6))){
var state_29631__$1 = state_29631;
var statearr_29653_33573 = state_29631__$1;
(statearr_29653_33573[(2)] = null);

(statearr_29653_33573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (7))){
var inst_29627 = (state_29631[(2)]);
var state_29631__$1 = state_29631;
var statearr_29655_33574 = state_29631__$1;
(statearr_29655_33574[(2)] = inst_29627);

(statearr_29655_33574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33538,c__29073__auto___33563,G__29561_33541,G__29561_33542__$1,n__4607__auto___33536,jobs,results,process,async))
;
return ((function (__33538,switch__28556__auto__,c__29073__auto___33563,G__29561_33541,G__29561_33542__$1,n__4607__auto___33536,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____0 = (function (){
var statearr_29657 = [null,null,null,null,null,null,null];
(statearr_29657[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__);

(statearr_29657[(1)] = (1));

return statearr_29657;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____1 = (function (state_29631){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_29631);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e29662){var ex__28560__auto__ = e29662;
var statearr_29663_33575 = state_29631;
(statearr_29663_33575[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_29631[(4)]))){
var statearr_29667_33576 = state_29631;
(statearr_29667_33576[(1)] = cljs.core.first((state_29631[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33577 = state_29631;
state_29631 = G__33577;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__ = function(state_29631){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____1.call(this,state_29631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__;
})()
;})(__33538,switch__28556__auto__,c__29073__auto___33563,G__29561_33541,G__29561_33542__$1,n__4607__auto___33536,jobs,results,process,async))
})();
var state__29075__auto__ = (function (){var statearr_29672 = f__29074__auto__();
(statearr_29672[(6)] = c__29073__auto___33563);

return statearr_29672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
});})(__33538,c__29073__auto___33563,G__29561_33541,G__29561_33542__$1,n__4607__auto___33536,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29561_33542__$1)].join('')));

}

var G__33578 = (__33538 + (1));
__33538 = G__33578;
continue;
} else {
}
break;
}

var c__29073__auto___33603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_29698){
var state_val_29699 = (state_29698[(1)]);
if((state_val_29699 === (7))){
var inst_29691 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
var statearr_29764_33606 = state_29698__$1;
(statearr_29764_33606[(2)] = inst_29691);

(statearr_29764_33606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (1))){
var state_29698__$1 = state_29698;
var statearr_29765_33607 = state_29698__$1;
(statearr_29765_33607[(2)] = null);

(statearr_29765_33607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (4))){
var inst_29676 = (state_29698[(7)]);
var inst_29676__$1 = (state_29698[(2)]);
var inst_29677 = (inst_29676__$1 == null);
var state_29698__$1 = (function (){var statearr_29779 = state_29698;
(statearr_29779[(7)] = inst_29676__$1);

return statearr_29779;
})();
if(cljs.core.truth_(inst_29677)){
var statearr_29780_33608 = state_29698__$1;
(statearr_29780_33608[(1)] = (5));

} else {
var statearr_29781_33613 = state_29698__$1;
(statearr_29781_33613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (6))){
var inst_29676 = (state_29698[(7)]);
var inst_29681 = (state_29698[(8)]);
var inst_29681__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29682 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29683 = [inst_29676,inst_29681__$1];
var inst_29684 = (new cljs.core.PersistentVector(null,2,(5),inst_29682,inst_29683,null));
var state_29698__$1 = (function (){var statearr_29786 = state_29698;
(statearr_29786[(8)] = inst_29681__$1);

return statearr_29786;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29698__$1,(8),jobs,inst_29684);
} else {
if((state_val_29699 === (3))){
var inst_29693 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29698__$1,inst_29693);
} else {
if((state_val_29699 === (2))){
var state_29698__$1 = state_29698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29698__$1,(4),from);
} else {
if((state_val_29699 === (9))){
var inst_29688 = (state_29698[(2)]);
var state_29698__$1 = (function (){var statearr_29793 = state_29698;
(statearr_29793[(9)] = inst_29688);

return statearr_29793;
})();
var statearr_29794_33617 = state_29698__$1;
(statearr_29794_33617[(2)] = null);

(statearr_29794_33617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (5))){
var inst_29679 = cljs.core.async.close_BANG_(jobs);
var state_29698__$1 = state_29698;
var statearr_29796_33619 = state_29698__$1;
(statearr_29796_33619[(2)] = inst_29679);

(statearr_29796_33619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (8))){
var inst_29681 = (state_29698[(8)]);
var inst_29686 = (state_29698[(2)]);
var state_29698__$1 = (function (){var statearr_29802 = state_29698;
(statearr_29802[(10)] = inst_29686);

return statearr_29802;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29698__$1,(9),results,inst_29681);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____0 = (function (){
var statearr_29806 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29806[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__);

(statearr_29806[(1)] = (1));

return statearr_29806;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____1 = (function (state_29698){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_29698);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e29808){var ex__28560__auto__ = e29808;
var statearr_29809_33629 = state_29698;
(statearr_29809_33629[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_29698[(4)]))){
var statearr_29840_33630 = state_29698;
(statearr_29840_33630[(1)] = cljs.core.first((state_29698[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33631 = state_29698;
state_29698 = G__33631;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__ = function(state_29698){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____1.call(this,state_29698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_29845 = f__29074__auto__();
(statearr_29845[(6)] = c__29073__auto___33603);

return statearr_29845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));


var c__29073__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_29961){
var state_val_29962 = (state_29961[(1)]);
if((state_val_29962 === (7))){
var inst_29953 = (state_29961[(2)]);
var state_29961__$1 = state_29961;
var statearr_29970_33632 = state_29961__$1;
(statearr_29970_33632[(2)] = inst_29953);

(statearr_29970_33632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (20))){
var state_29961__$1 = state_29961;
var statearr_29977_33633 = state_29961__$1;
(statearr_29977_33633[(2)] = null);

(statearr_29977_33633[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (1))){
var state_29961__$1 = state_29961;
var statearr_29979_33634 = state_29961__$1;
(statearr_29979_33634[(2)] = null);

(statearr_29979_33634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (4))){
var inst_29852 = (state_29961[(7)]);
var inst_29852__$1 = (state_29961[(2)]);
var inst_29853 = (inst_29852__$1 == null);
var state_29961__$1 = (function (){var statearr_30005 = state_29961;
(statearr_30005[(7)] = inst_29852__$1);

return statearr_30005;
})();
if(cljs.core.truth_(inst_29853)){
var statearr_30009_33635 = state_29961__$1;
(statearr_30009_33635[(1)] = (5));

} else {
var statearr_30010_33636 = state_29961__$1;
(statearr_30010_33636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (15))){
var inst_29873 = (state_29961[(8)]);
var state_29961__$1 = state_29961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29961__$1,(18),to,inst_29873);
} else {
if((state_val_29962 === (21))){
var inst_29947 = (state_29961[(2)]);
var state_29961__$1 = state_29961;
var statearr_30024_33637 = state_29961__$1;
(statearr_30024_33637[(2)] = inst_29947);

(statearr_30024_33637[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (13))){
var inst_29950 = (state_29961[(2)]);
var state_29961__$1 = (function (){var statearr_30026 = state_29961;
(statearr_30026[(9)] = inst_29950);

return statearr_30026;
})();
var statearr_30029_33638 = state_29961__$1;
(statearr_30029_33638[(2)] = null);

(statearr_30029_33638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (6))){
var inst_29852 = (state_29961[(7)]);
var state_29961__$1 = state_29961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29961__$1,(11),inst_29852);
} else {
if((state_val_29962 === (17))){
var inst_29883 = (state_29961[(2)]);
var state_29961__$1 = state_29961;
if(cljs.core.truth_(inst_29883)){
var statearr_30041_33639 = state_29961__$1;
(statearr_30041_33639[(1)] = (19));

} else {
var statearr_30042_33642 = state_29961__$1;
(statearr_30042_33642[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (3))){
var inst_29959 = (state_29961[(2)]);
var state_29961__$1 = state_29961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29961__$1,inst_29959);
} else {
if((state_val_29962 === (12))){
var inst_29867 = (state_29961[(10)]);
var state_29961__$1 = state_29961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29961__$1,(14),inst_29867);
} else {
if((state_val_29962 === (2))){
var state_29961__$1 = state_29961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29961__$1,(4),results);
} else {
if((state_val_29962 === (19))){
var state_29961__$1 = state_29961;
var statearr_30045_33645 = state_29961__$1;
(statearr_30045_33645[(2)] = null);

(statearr_30045_33645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (11))){
var inst_29867 = (state_29961[(2)]);
var state_29961__$1 = (function (){var statearr_30047 = state_29961;
(statearr_30047[(10)] = inst_29867);

return statearr_30047;
})();
var statearr_30049_33646 = state_29961__$1;
(statearr_30049_33646[(2)] = null);

(statearr_30049_33646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (9))){
var state_29961__$1 = state_29961;
var statearr_30052_33647 = state_29961__$1;
(statearr_30052_33647[(2)] = null);

(statearr_30052_33647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (5))){
var state_29961__$1 = state_29961;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30053_33648 = state_29961__$1;
(statearr_30053_33648[(1)] = (8));

} else {
var statearr_30054_33649 = state_29961__$1;
(statearr_30054_33649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (14))){
var inst_29873 = (state_29961[(8)]);
var inst_29873__$1 = (state_29961[(2)]);
var inst_29876 = (inst_29873__$1 == null);
var inst_29877 = cljs.core.not(inst_29876);
var state_29961__$1 = (function (){var statearr_30058 = state_29961;
(statearr_30058[(8)] = inst_29873__$1);

return statearr_30058;
})();
if(inst_29877){
var statearr_30060_33650 = state_29961__$1;
(statearr_30060_33650[(1)] = (15));

} else {
var statearr_30061_33651 = state_29961__$1;
(statearr_30061_33651[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (16))){
var state_29961__$1 = state_29961;
var statearr_30062_33653 = state_29961__$1;
(statearr_30062_33653[(2)] = false);

(statearr_30062_33653[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (10))){
var inst_29863 = (state_29961[(2)]);
var state_29961__$1 = state_29961;
var statearr_30063_33656 = state_29961__$1;
(statearr_30063_33656[(2)] = inst_29863);

(statearr_30063_33656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (18))){
var inst_29880 = (state_29961[(2)]);
var state_29961__$1 = state_29961;
var statearr_30064_33663 = state_29961__$1;
(statearr_30064_33663[(2)] = inst_29880);

(statearr_30064_33663[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (8))){
var inst_29859 = cljs.core.async.close_BANG_(to);
var state_29961__$1 = state_29961;
var statearr_30065_33664 = state_29961__$1;
(statearr_30065_33664[(2)] = inst_29859);

(statearr_30065_33664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____0 = (function (){
var statearr_30068 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30068[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__);

(statearr_30068[(1)] = (1));

return statearr_30068;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____1 = (function (state_29961){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_29961);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e30069){var ex__28560__auto__ = e30069;
var statearr_30073_33667 = state_29961;
(statearr_30073_33667[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_29961[(4)]))){
var statearr_30074_33668 = state_29961;
(statearr_30074_33668[(1)] = cljs.core.first((state_29961[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33670 = state_29961;
state_29961 = G__33670;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__ = function(state_29961){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____1.call(this,state_29961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28557__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_30077 = f__29074__auto__();
(statearr_30077[(6)] = c__29073__auto__);

return statearr_30077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));

return c__29073__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30080 = arguments.length;
switch (G__30080) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30091 = arguments.length;
switch (G__30091) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30110 = arguments.length;
switch (G__30110) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29073__auto___33691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_30142){
var state_val_30143 = (state_30142[(1)]);
if((state_val_30143 === (7))){
var inst_30136 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30151_33695 = state_30142__$1;
(statearr_30151_33695[(2)] = inst_30136);

(statearr_30151_33695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (1))){
var state_30142__$1 = state_30142;
var statearr_30152_33696 = state_30142__$1;
(statearr_30152_33696[(2)] = null);

(statearr_30152_33696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (4))){
var inst_30115 = (state_30142[(7)]);
var inst_30115__$1 = (state_30142[(2)]);
var inst_30118 = (inst_30115__$1 == null);
var state_30142__$1 = (function (){var statearr_30153 = state_30142;
(statearr_30153[(7)] = inst_30115__$1);

return statearr_30153;
})();
if(cljs.core.truth_(inst_30118)){
var statearr_30154_33698 = state_30142__$1;
(statearr_30154_33698[(1)] = (5));

} else {
var statearr_30155_33699 = state_30142__$1;
(statearr_30155_33699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (13))){
var state_30142__$1 = state_30142;
var statearr_30158_33700 = state_30142__$1;
(statearr_30158_33700[(2)] = null);

(statearr_30158_33700[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (6))){
var inst_30115 = (state_30142[(7)]);
var inst_30123 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30115) : p.call(null,inst_30115));
var state_30142__$1 = state_30142;
if(cljs.core.truth_(inst_30123)){
var statearr_30159_33715 = state_30142__$1;
(statearr_30159_33715[(1)] = (9));

} else {
var statearr_30160_33718 = state_30142__$1;
(statearr_30160_33718[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (3))){
var inst_30138 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30142__$1,inst_30138);
} else {
if((state_val_30143 === (12))){
var state_30142__$1 = state_30142;
var statearr_30163_33723 = state_30142__$1;
(statearr_30163_33723[(2)] = null);

(statearr_30163_33723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (2))){
var state_30142__$1 = state_30142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30142__$1,(4),ch);
} else {
if((state_val_30143 === (11))){
var inst_30115 = (state_30142[(7)]);
var inst_30127 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30142__$1,(8),inst_30127,inst_30115);
} else {
if((state_val_30143 === (9))){
var state_30142__$1 = state_30142;
var statearr_30167_33727 = state_30142__$1;
(statearr_30167_33727[(2)] = tc);

(statearr_30167_33727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (5))){
var inst_30120 = cljs.core.async.close_BANG_(tc);
var inst_30121 = cljs.core.async.close_BANG_(fc);
var state_30142__$1 = (function (){var statearr_30169 = state_30142;
(statearr_30169[(8)] = inst_30120);

return statearr_30169;
})();
var statearr_30170_33729 = state_30142__$1;
(statearr_30170_33729[(2)] = inst_30121);

(statearr_30170_33729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (14))){
var inst_30134 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30171_33730 = state_30142__$1;
(statearr_30171_33730[(2)] = inst_30134);

(statearr_30171_33730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (10))){
var state_30142__$1 = state_30142;
var statearr_30174_33731 = state_30142__$1;
(statearr_30174_33731[(2)] = fc);

(statearr_30174_33731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (8))){
var inst_30129 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
if(cljs.core.truth_(inst_30129)){
var statearr_30175_33732 = state_30142__$1;
(statearr_30175_33732[(1)] = (12));

} else {
var statearr_30176_33733 = state_30142__$1;
(statearr_30176_33733[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28557__auto__ = null;
var cljs$core$async$state_machine__28557__auto____0 = (function (){
var statearr_30177 = [null,null,null,null,null,null,null,null,null];
(statearr_30177[(0)] = cljs$core$async$state_machine__28557__auto__);

(statearr_30177[(1)] = (1));

return statearr_30177;
});
var cljs$core$async$state_machine__28557__auto____1 = (function (state_30142){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_30142);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e30178){var ex__28560__auto__ = e30178;
var statearr_30185_33739 = state_30142;
(statearr_30185_33739[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_30142[(4)]))){
var statearr_30186_33740 = state_30142;
(statearr_30186_33740[(1)] = cljs.core.first((state_30142[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33741 = state_30142;
state_30142 = G__33741;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$state_machine__28557__auto__ = function(state_30142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28557__auto____1.call(this,state_30142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28557__auto____0;
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28557__auto____1;
return cljs$core$async$state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_30190 = f__29074__auto__();
(statearr_30190[(6)] = c__29073__auto___33691);

return statearr_30190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29073__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_30217){
var state_val_30218 = (state_30217[(1)]);
if((state_val_30218 === (7))){
var inst_30212 = (state_30217[(2)]);
var state_30217__$1 = state_30217;
var statearr_30226_33744 = state_30217__$1;
(statearr_30226_33744[(2)] = inst_30212);

(statearr_30226_33744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (1))){
var inst_30194 = init;
var inst_30195 = inst_30194;
var state_30217__$1 = (function (){var statearr_30227 = state_30217;
(statearr_30227[(7)] = inst_30195);

return statearr_30227;
})();
var statearr_30229_33745 = state_30217__$1;
(statearr_30229_33745[(2)] = null);

(statearr_30229_33745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (4))){
var inst_30198 = (state_30217[(8)]);
var inst_30198__$1 = (state_30217[(2)]);
var inst_30200 = (inst_30198__$1 == null);
var state_30217__$1 = (function (){var statearr_30232 = state_30217;
(statearr_30232[(8)] = inst_30198__$1);

return statearr_30232;
})();
if(cljs.core.truth_(inst_30200)){
var statearr_30233_33746 = state_30217__$1;
(statearr_30233_33746[(1)] = (5));

} else {
var statearr_30234_33747 = state_30217__$1;
(statearr_30234_33747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (6))){
var inst_30198 = (state_30217[(8)]);
var inst_30203 = (state_30217[(9)]);
var inst_30195 = (state_30217[(7)]);
var inst_30203__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30195,inst_30198) : f.call(null,inst_30195,inst_30198));
var inst_30204 = cljs.core.reduced_QMARK_(inst_30203__$1);
var state_30217__$1 = (function (){var statearr_30235 = state_30217;
(statearr_30235[(9)] = inst_30203__$1);

return statearr_30235;
})();
if(inst_30204){
var statearr_30236_33749 = state_30217__$1;
(statearr_30236_33749[(1)] = (8));

} else {
var statearr_30237_33750 = state_30217__$1;
(statearr_30237_33750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (3))){
var inst_30214 = (state_30217[(2)]);
var state_30217__$1 = state_30217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30217__$1,inst_30214);
} else {
if((state_val_30218 === (2))){
var state_30217__$1 = state_30217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30217__$1,(4),ch);
} else {
if((state_val_30218 === (9))){
var inst_30203 = (state_30217[(9)]);
var inst_30195 = inst_30203;
var state_30217__$1 = (function (){var statearr_30238 = state_30217;
(statearr_30238[(7)] = inst_30195);

return statearr_30238;
})();
var statearr_30239_33751 = state_30217__$1;
(statearr_30239_33751[(2)] = null);

(statearr_30239_33751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (5))){
var inst_30195 = (state_30217[(7)]);
var state_30217__$1 = state_30217;
var statearr_30244_33752 = state_30217__$1;
(statearr_30244_33752[(2)] = inst_30195);

(statearr_30244_33752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (10))){
var inst_30210 = (state_30217[(2)]);
var state_30217__$1 = state_30217;
var statearr_30246_33753 = state_30217__$1;
(statearr_30246_33753[(2)] = inst_30210);

(statearr_30246_33753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (8))){
var inst_30203 = (state_30217[(9)]);
var inst_30206 = cljs.core.deref(inst_30203);
var state_30217__$1 = state_30217;
var statearr_30249_33757 = state_30217__$1;
(statearr_30249_33757[(2)] = inst_30206);

(statearr_30249_33757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28557__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28557__auto____0 = (function (){
var statearr_30250 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30250[(0)] = cljs$core$async$reduce_$_state_machine__28557__auto__);

(statearr_30250[(1)] = (1));

return statearr_30250;
});
var cljs$core$async$reduce_$_state_machine__28557__auto____1 = (function (state_30217){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_30217);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e30253){var ex__28560__auto__ = e30253;
var statearr_30254_33791 = state_30217;
(statearr_30254_33791[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_30217[(4)]))){
var statearr_30255_33792 = state_30217;
(statearr_30255_33792[(1)] = cljs.core.first((state_30217[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33799 = state_30217;
state_30217 = G__33799;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28557__auto__ = function(state_30217){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28557__auto____1.call(this,state_30217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28557__auto____0;
cljs$core$async$reduce_$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28557__auto____1;
return cljs$core$async$reduce_$_state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_30256 = f__29074__auto__();
(statearr_30256[(6)] = c__29073__auto__);

return statearr_30256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));

return c__29073__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29073__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_30267){
var state_val_30268 = (state_30267[(1)]);
if((state_val_30268 === (1))){
var inst_30262 = cljs.core.async.reduce(f__$1,init,ch);
var state_30267__$1 = state_30267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30267__$1,(2),inst_30262);
} else {
if((state_val_30268 === (2))){
var inst_30264 = (state_30267[(2)]);
var inst_30265 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30264) : f__$1.call(null,inst_30264));
var state_30267__$1 = state_30267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30267__$1,inst_30265);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28557__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28557__auto____0 = (function (){
var statearr_30277 = [null,null,null,null,null,null,null];
(statearr_30277[(0)] = cljs$core$async$transduce_$_state_machine__28557__auto__);

(statearr_30277[(1)] = (1));

return statearr_30277;
});
var cljs$core$async$transduce_$_state_machine__28557__auto____1 = (function (state_30267){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_30267);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e30278){var ex__28560__auto__ = e30278;
var statearr_30279_33830 = state_30267;
(statearr_30279_33830[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_30267[(4)]))){
var statearr_30281_33831 = state_30267;
(statearr_30281_33831[(1)] = cljs.core.first((state_30267[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33832 = state_30267;
state_30267 = G__33832;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28557__auto__ = function(state_30267){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28557__auto____1.call(this,state_30267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28557__auto____0;
cljs$core$async$transduce_$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28557__auto____1;
return cljs$core$async$transduce_$_state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_30282 = f__29074__auto__();
(statearr_30282[(6)] = c__29073__auto__);

return statearr_30282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));

return c__29073__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30289 = arguments.length;
switch (G__30289) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29073__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_30317){
var state_val_30318 = (state_30317[(1)]);
if((state_val_30318 === (7))){
var inst_30299 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
var statearr_30323_33848 = state_30317__$1;
(statearr_30323_33848[(2)] = inst_30299);

(statearr_30323_33848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (1))){
var inst_30291 = cljs.core.seq(coll);
var inst_30292 = inst_30291;
var state_30317__$1 = (function (){var statearr_30325 = state_30317;
(statearr_30325[(7)] = inst_30292);

return statearr_30325;
})();
var statearr_30326_33849 = state_30317__$1;
(statearr_30326_33849[(2)] = null);

(statearr_30326_33849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (4))){
var inst_30292 = (state_30317[(7)]);
var inst_30297 = cljs.core.first(inst_30292);
var state_30317__$1 = state_30317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30317__$1,(7),ch,inst_30297);
} else {
if((state_val_30318 === (13))){
var inst_30311 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
var statearr_30329_33852 = state_30317__$1;
(statearr_30329_33852[(2)] = inst_30311);

(statearr_30329_33852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (6))){
var inst_30302 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
if(cljs.core.truth_(inst_30302)){
var statearr_30331_33853 = state_30317__$1;
(statearr_30331_33853[(1)] = (8));

} else {
var statearr_30332_33854 = state_30317__$1;
(statearr_30332_33854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (3))){
var inst_30315 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30317__$1,inst_30315);
} else {
if((state_val_30318 === (12))){
var state_30317__$1 = state_30317;
var statearr_30333_33855 = state_30317__$1;
(statearr_30333_33855[(2)] = null);

(statearr_30333_33855[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (2))){
var inst_30292 = (state_30317[(7)]);
var state_30317__$1 = state_30317;
if(cljs.core.truth_(inst_30292)){
var statearr_30336_33856 = state_30317__$1;
(statearr_30336_33856[(1)] = (4));

} else {
var statearr_30337_33857 = state_30317__$1;
(statearr_30337_33857[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (11))){
var inst_30308 = cljs.core.async.close_BANG_(ch);
var state_30317__$1 = state_30317;
var statearr_30339_33860 = state_30317__$1;
(statearr_30339_33860[(2)] = inst_30308);

(statearr_30339_33860[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (9))){
var state_30317__$1 = state_30317;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30345_33862 = state_30317__$1;
(statearr_30345_33862[(1)] = (11));

} else {
var statearr_30346_33865 = state_30317__$1;
(statearr_30346_33865[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (5))){
var inst_30292 = (state_30317[(7)]);
var state_30317__$1 = state_30317;
var statearr_30348_33867 = state_30317__$1;
(statearr_30348_33867[(2)] = inst_30292);

(statearr_30348_33867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (10))){
var inst_30313 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
var statearr_30351_33870 = state_30317__$1;
(statearr_30351_33870[(2)] = inst_30313);

(statearr_30351_33870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (8))){
var inst_30292 = (state_30317[(7)]);
var inst_30304 = cljs.core.next(inst_30292);
var inst_30292__$1 = inst_30304;
var state_30317__$1 = (function (){var statearr_30352 = state_30317;
(statearr_30352[(7)] = inst_30292__$1);

return statearr_30352;
})();
var statearr_30355_33872 = state_30317__$1;
(statearr_30355_33872[(2)] = null);

(statearr_30355_33872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28557__auto__ = null;
var cljs$core$async$state_machine__28557__auto____0 = (function (){
var statearr_30359 = [null,null,null,null,null,null,null,null];
(statearr_30359[(0)] = cljs$core$async$state_machine__28557__auto__);

(statearr_30359[(1)] = (1));

return statearr_30359;
});
var cljs$core$async$state_machine__28557__auto____1 = (function (state_30317){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_30317);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e30362){var ex__28560__auto__ = e30362;
var statearr_30363_33890 = state_30317;
(statearr_30363_33890[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_30317[(4)]))){
var statearr_30365_33891 = state_30317;
(statearr_30365_33891[(1)] = cljs.core.first((state_30317[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33894 = state_30317;
state_30317 = G__33894;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$state_machine__28557__auto__ = function(state_30317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28557__auto____1.call(this,state_30317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28557__auto____0;
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28557__auto____1;
return cljs$core$async$state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_30369 = f__29074__auto__();
(statearr_30369[(6)] = c__29073__auto__);

return statearr_30369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));

return c__29073__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33895 = (function (_){
var x__4422__auto__ = (((_ == null))?null:_);
var m__4423__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4423__auto__.call(null,_));
} else {
var m__4420__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4420__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33895(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33897 = (function (m,ch,close_QMARK_){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4423__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4420__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33897(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33905 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33905(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33911 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33911(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30409 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30409 = (function (ch,cs,meta30410){
this.ch = ch;
this.cs = cs;
this.meta30410 = meta30410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30411,meta30410__$1){
var self__ = this;
var _30411__$1 = this;
return (new cljs.core.async.t_cljs$core$async30409(self__.ch,self__.cs,meta30410__$1));
}));

(cljs.core.async.t_cljs$core$async30409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30411){
var self__ = this;
var _30411__$1 = this;
return self__.meta30410;
}));

(cljs.core.async.t_cljs$core$async30409.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30409.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30409.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30409.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30409.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30409.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30410","meta30410",-359861658,null)], null);
}));

(cljs.core.async.t_cljs$core$async30409.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30409");

(cljs.core.async.t_cljs$core$async30409.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async30409");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30409.
 */
cljs.core.async.__GT_t_cljs$core$async30409 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30409(ch__$1,cs__$1,meta30410){
return (new cljs.core.async.t_cljs$core$async30409(ch__$1,cs__$1,meta30410));
});

}

return (new cljs.core.async.t_cljs$core$async30409(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29073__auto___33924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_30735){
var state_val_30737 = (state_30735[(1)]);
if((state_val_30737 === (7))){
var inst_30725 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30738_33925 = state_30735__$1;
(statearr_30738_33925[(2)] = inst_30725);

(statearr_30738_33925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (20))){
var inst_30510 = (state_30735[(7)]);
var inst_30527 = cljs.core.first(inst_30510);
var inst_30528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30527,(0),null);
var inst_30529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30527,(1),null);
var state_30735__$1 = (function (){var statearr_30743 = state_30735;
(statearr_30743[(8)] = inst_30528);

return statearr_30743;
})();
if(cljs.core.truth_(inst_30529)){
var statearr_30744_33930 = state_30735__$1;
(statearr_30744_33930[(1)] = (22));

} else {
var statearr_30745_33931 = state_30735__$1;
(statearr_30745_33931[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (27))){
var inst_30473 = (state_30735[(9)]);
var inst_30632 = (state_30735[(10)]);
var inst_30651 = (state_30735[(11)]);
var inst_30630 = (state_30735[(12)]);
var inst_30651__$1 = cljs.core._nth(inst_30630,inst_30632);
var inst_30652 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30651__$1,inst_30473,done);
var state_30735__$1 = (function (){var statearr_30746 = state_30735;
(statearr_30746[(11)] = inst_30651__$1);

return statearr_30746;
})();
if(cljs.core.truth_(inst_30652)){
var statearr_30747_33932 = state_30735__$1;
(statearr_30747_33932[(1)] = (30));

} else {
var statearr_30750_33934 = state_30735__$1;
(statearr_30750_33934[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (1))){
var state_30735__$1 = state_30735;
var statearr_30751_33942 = state_30735__$1;
(statearr_30751_33942[(2)] = null);

(statearr_30751_33942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (24))){
var inst_30510 = (state_30735[(7)]);
var inst_30600 = (state_30735[(2)]);
var inst_30605 = cljs.core.next(inst_30510);
var inst_30483 = inst_30605;
var inst_30484 = null;
var inst_30485 = (0);
var inst_30486 = (0);
var state_30735__$1 = (function (){var statearr_30753 = state_30735;
(statearr_30753[(13)] = inst_30485);

(statearr_30753[(14)] = inst_30483);

(statearr_30753[(15)] = inst_30484);

(statearr_30753[(16)] = inst_30486);

(statearr_30753[(17)] = inst_30600);

return statearr_30753;
})();
var statearr_30754_33944 = state_30735__$1;
(statearr_30754_33944[(2)] = null);

(statearr_30754_33944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (39))){
var state_30735__$1 = state_30735;
var statearr_30765_33945 = state_30735__$1;
(statearr_30765_33945[(2)] = null);

(statearr_30765_33945[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (4))){
var inst_30473 = (state_30735[(9)]);
var inst_30473__$1 = (state_30735[(2)]);
var inst_30475 = (inst_30473__$1 == null);
var state_30735__$1 = (function (){var statearr_30767 = state_30735;
(statearr_30767[(9)] = inst_30473__$1);

return statearr_30767;
})();
if(cljs.core.truth_(inst_30475)){
var statearr_30768_33950 = state_30735__$1;
(statearr_30768_33950[(1)] = (5));

} else {
var statearr_30769_33952 = state_30735__$1;
(statearr_30769_33952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (15))){
var inst_30485 = (state_30735[(13)]);
var inst_30483 = (state_30735[(14)]);
var inst_30484 = (state_30735[(15)]);
var inst_30486 = (state_30735[(16)]);
var inst_30505 = (state_30735[(2)]);
var inst_30506 = (inst_30486 + (1));
var tmp30756 = inst_30485;
var tmp30758 = inst_30483;
var tmp30759 = inst_30484;
var inst_30483__$1 = tmp30758;
var inst_30484__$1 = tmp30759;
var inst_30485__$1 = tmp30756;
var inst_30486__$1 = inst_30506;
var state_30735__$1 = (function (){var statearr_30771 = state_30735;
(statearr_30771[(13)] = inst_30485__$1);

(statearr_30771[(14)] = inst_30483__$1);

(statearr_30771[(15)] = inst_30484__$1);

(statearr_30771[(18)] = inst_30505);

(statearr_30771[(16)] = inst_30486__$1);

return statearr_30771;
})();
var statearr_30773_33957 = state_30735__$1;
(statearr_30773_33957[(2)] = null);

(statearr_30773_33957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (21))){
var inst_30608 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30778_33958 = state_30735__$1;
(statearr_30778_33958[(2)] = inst_30608);

(statearr_30778_33958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (31))){
var inst_30651 = (state_30735[(11)]);
var inst_30655 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30651);
var state_30735__$1 = state_30735;
var statearr_30781_33962 = state_30735__$1;
(statearr_30781_33962[(2)] = inst_30655);

(statearr_30781_33962[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (32))){
var inst_30632 = (state_30735[(10)]);
var inst_30630 = (state_30735[(12)]);
var inst_30629 = (state_30735[(19)]);
var inst_30631 = (state_30735[(20)]);
var inst_30658 = (state_30735[(2)]);
var inst_30662 = (inst_30632 + (1));
var tmp30774 = inst_30630;
var tmp30775 = inst_30629;
var tmp30776 = inst_30631;
var inst_30629__$1 = tmp30775;
var inst_30630__$1 = tmp30774;
var inst_30631__$1 = tmp30776;
var inst_30632__$1 = inst_30662;
var state_30735__$1 = (function (){var statearr_30783 = state_30735;
(statearr_30783[(10)] = inst_30632__$1);

(statearr_30783[(12)] = inst_30630__$1);

(statearr_30783[(19)] = inst_30629__$1);

(statearr_30783[(21)] = inst_30658);

(statearr_30783[(20)] = inst_30631__$1);

return statearr_30783;
})();
var statearr_30784_33966 = state_30735__$1;
(statearr_30784_33966[(2)] = null);

(statearr_30784_33966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (40))){
var inst_30698 = (state_30735[(22)]);
var inst_30702 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30698);
var state_30735__$1 = state_30735;
var statearr_30785_33967 = state_30735__$1;
(statearr_30785_33967[(2)] = inst_30702);

(statearr_30785_33967[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (33))){
var inst_30665 = (state_30735[(23)]);
var inst_30687 = cljs.core.chunked_seq_QMARK_(inst_30665);
var state_30735__$1 = state_30735;
if(inst_30687){
var statearr_30786_33971 = state_30735__$1;
(statearr_30786_33971[(1)] = (36));

} else {
var statearr_30787_33972 = state_30735__$1;
(statearr_30787_33972[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (13))){
var inst_30498 = (state_30735[(24)]);
var inst_30502 = cljs.core.async.close_BANG_(inst_30498);
var state_30735__$1 = state_30735;
var statearr_30791_33974 = state_30735__$1;
(statearr_30791_33974[(2)] = inst_30502);

(statearr_30791_33974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (22))){
var inst_30528 = (state_30735[(8)]);
var inst_30532 = cljs.core.async.close_BANG_(inst_30528);
var state_30735__$1 = state_30735;
var statearr_30792_33976 = state_30735__$1;
(statearr_30792_33976[(2)] = inst_30532);

(statearr_30792_33976[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (36))){
var inst_30665 = (state_30735[(23)]);
var inst_30693 = cljs.core.chunk_first(inst_30665);
var inst_30694 = cljs.core.chunk_rest(inst_30665);
var inst_30695 = cljs.core.count(inst_30693);
var inst_30629 = inst_30694;
var inst_30630 = inst_30693;
var inst_30631 = inst_30695;
var inst_30632 = (0);
var state_30735__$1 = (function (){var statearr_30796 = state_30735;
(statearr_30796[(10)] = inst_30632);

(statearr_30796[(12)] = inst_30630);

(statearr_30796[(19)] = inst_30629);

(statearr_30796[(20)] = inst_30631);

return statearr_30796;
})();
var statearr_30799_33981 = state_30735__$1;
(statearr_30799_33981[(2)] = null);

(statearr_30799_33981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (41))){
var inst_30665 = (state_30735[(23)]);
var inst_30704 = (state_30735[(2)]);
var inst_30705 = cljs.core.next(inst_30665);
var inst_30629 = inst_30705;
var inst_30630 = null;
var inst_30631 = (0);
var inst_30632 = (0);
var state_30735__$1 = (function (){var statearr_30800 = state_30735;
(statearr_30800[(10)] = inst_30632);

(statearr_30800[(12)] = inst_30630);

(statearr_30800[(25)] = inst_30704);

(statearr_30800[(19)] = inst_30629);

(statearr_30800[(20)] = inst_30631);

return statearr_30800;
})();
var statearr_30803_33986 = state_30735__$1;
(statearr_30803_33986[(2)] = null);

(statearr_30803_33986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (43))){
var state_30735__$1 = state_30735;
var statearr_30804_33990 = state_30735__$1;
(statearr_30804_33990[(2)] = null);

(statearr_30804_33990[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (29))){
var inst_30713 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30805_33991 = state_30735__$1;
(statearr_30805_33991[(2)] = inst_30713);

(statearr_30805_33991[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (44))){
var inst_30722 = (state_30735[(2)]);
var state_30735__$1 = (function (){var statearr_30810 = state_30735;
(statearr_30810[(26)] = inst_30722);

return statearr_30810;
})();
var statearr_30811_33992 = state_30735__$1;
(statearr_30811_33992[(2)] = null);

(statearr_30811_33992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (6))){
var inst_30619 = (state_30735[(27)]);
var inst_30618 = cljs.core.deref(cs);
var inst_30619__$1 = cljs.core.keys(inst_30618);
var inst_30621 = cljs.core.count(inst_30619__$1);
var inst_30622 = cljs.core.reset_BANG_(dctr,inst_30621);
var inst_30628 = cljs.core.seq(inst_30619__$1);
var inst_30629 = inst_30628;
var inst_30630 = null;
var inst_30631 = (0);
var inst_30632 = (0);
var state_30735__$1 = (function (){var statearr_30815 = state_30735;
(statearr_30815[(27)] = inst_30619__$1);

(statearr_30815[(10)] = inst_30632);

(statearr_30815[(12)] = inst_30630);

(statearr_30815[(19)] = inst_30629);

(statearr_30815[(20)] = inst_30631);

(statearr_30815[(28)] = inst_30622);

return statearr_30815;
})();
var statearr_30816_33997 = state_30735__$1;
(statearr_30816_33997[(2)] = null);

(statearr_30816_33997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (28))){
var inst_30629 = (state_30735[(19)]);
var inst_30665 = (state_30735[(23)]);
var inst_30665__$1 = cljs.core.seq(inst_30629);
var state_30735__$1 = (function (){var statearr_30820 = state_30735;
(statearr_30820[(23)] = inst_30665__$1);

return statearr_30820;
})();
if(inst_30665__$1){
var statearr_30821_34000 = state_30735__$1;
(statearr_30821_34000[(1)] = (33));

} else {
var statearr_30822_34001 = state_30735__$1;
(statearr_30822_34001[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (25))){
var inst_30632 = (state_30735[(10)]);
var inst_30631 = (state_30735[(20)]);
var inst_30634 = (inst_30632 < inst_30631);
var inst_30635 = inst_30634;
var state_30735__$1 = state_30735;
if(cljs.core.truth_(inst_30635)){
var statearr_30823_34006 = state_30735__$1;
(statearr_30823_34006[(1)] = (27));

} else {
var statearr_30824_34007 = state_30735__$1;
(statearr_30824_34007[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (34))){
var state_30735__$1 = state_30735;
var statearr_30830_34008 = state_30735__$1;
(statearr_30830_34008[(2)] = null);

(statearr_30830_34008[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (17))){
var state_30735__$1 = state_30735;
var statearr_30835_34010 = state_30735__$1;
(statearr_30835_34010[(2)] = null);

(statearr_30835_34010[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (3))){
var inst_30727 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30735__$1,inst_30727);
} else {
if((state_val_30737 === (12))){
var inst_30613 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30837_34014 = state_30735__$1;
(statearr_30837_34014[(2)] = inst_30613);

(statearr_30837_34014[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (2))){
var state_30735__$1 = state_30735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30735__$1,(4),ch);
} else {
if((state_val_30737 === (23))){
var state_30735__$1 = state_30735;
var statearr_30838_34016 = state_30735__$1;
(statearr_30838_34016[(2)] = null);

(statearr_30838_34016[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (35))){
var inst_30711 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30841_34018 = state_30735__$1;
(statearr_30841_34018[(2)] = inst_30711);

(statearr_30841_34018[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (19))){
var inst_30510 = (state_30735[(7)]);
var inst_30516 = cljs.core.chunk_first(inst_30510);
var inst_30517 = cljs.core.chunk_rest(inst_30510);
var inst_30518 = cljs.core.count(inst_30516);
var inst_30483 = inst_30517;
var inst_30484 = inst_30516;
var inst_30485 = inst_30518;
var inst_30486 = (0);
var state_30735__$1 = (function (){var statearr_30849 = state_30735;
(statearr_30849[(13)] = inst_30485);

(statearr_30849[(14)] = inst_30483);

(statearr_30849[(15)] = inst_30484);

(statearr_30849[(16)] = inst_30486);

return statearr_30849;
})();
var statearr_30850_34023 = state_30735__$1;
(statearr_30850_34023[(2)] = null);

(statearr_30850_34023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (11))){
var inst_30483 = (state_30735[(14)]);
var inst_30510 = (state_30735[(7)]);
var inst_30510__$1 = cljs.core.seq(inst_30483);
var state_30735__$1 = (function (){var statearr_30855 = state_30735;
(statearr_30855[(7)] = inst_30510__$1);

return statearr_30855;
})();
if(inst_30510__$1){
var statearr_30856_34027 = state_30735__$1;
(statearr_30856_34027[(1)] = (16));

} else {
var statearr_30860_34029 = state_30735__$1;
(statearr_30860_34029[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (9))){
var inst_30615 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30861_34030 = state_30735__$1;
(statearr_30861_34030[(2)] = inst_30615);

(statearr_30861_34030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (5))){
var inst_30481 = cljs.core.deref(cs);
var inst_30482 = cljs.core.seq(inst_30481);
var inst_30483 = inst_30482;
var inst_30484 = null;
var inst_30485 = (0);
var inst_30486 = (0);
var state_30735__$1 = (function (){var statearr_30866 = state_30735;
(statearr_30866[(13)] = inst_30485);

(statearr_30866[(14)] = inst_30483);

(statearr_30866[(15)] = inst_30484);

(statearr_30866[(16)] = inst_30486);

return statearr_30866;
})();
var statearr_30867_34034 = state_30735__$1;
(statearr_30867_34034[(2)] = null);

(statearr_30867_34034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (14))){
var state_30735__$1 = state_30735;
var statearr_30871_34038 = state_30735__$1;
(statearr_30871_34038[(2)] = null);

(statearr_30871_34038[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (45))){
var inst_30719 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30879_34039 = state_30735__$1;
(statearr_30879_34039[(2)] = inst_30719);

(statearr_30879_34039[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (26))){
var inst_30619 = (state_30735[(27)]);
var inst_30715 = (state_30735[(2)]);
var inst_30716 = cljs.core.seq(inst_30619);
var state_30735__$1 = (function (){var statearr_30880 = state_30735;
(statearr_30880[(29)] = inst_30715);

return statearr_30880;
})();
if(inst_30716){
var statearr_30881_34041 = state_30735__$1;
(statearr_30881_34041[(1)] = (42));

} else {
var statearr_30882_34042 = state_30735__$1;
(statearr_30882_34042[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (16))){
var inst_30510 = (state_30735[(7)]);
var inst_30512 = cljs.core.chunked_seq_QMARK_(inst_30510);
var state_30735__$1 = state_30735;
if(inst_30512){
var statearr_30883_34043 = state_30735__$1;
(statearr_30883_34043[(1)] = (19));

} else {
var statearr_30884_34044 = state_30735__$1;
(statearr_30884_34044[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (38))){
var inst_30708 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30885_34045 = state_30735__$1;
(statearr_30885_34045[(2)] = inst_30708);

(statearr_30885_34045[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (30))){
var state_30735__$1 = state_30735;
var statearr_30886_34047 = state_30735__$1;
(statearr_30886_34047[(2)] = null);

(statearr_30886_34047[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (10))){
var inst_30484 = (state_30735[(15)]);
var inst_30486 = (state_30735[(16)]);
var inst_30497 = cljs.core._nth(inst_30484,inst_30486);
var inst_30498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30497,(0),null);
var inst_30499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30497,(1),null);
var state_30735__$1 = (function (){var statearr_30887 = state_30735;
(statearr_30887[(24)] = inst_30498);

return statearr_30887;
})();
if(cljs.core.truth_(inst_30499)){
var statearr_30888_34048 = state_30735__$1;
(statearr_30888_34048[(1)] = (13));

} else {
var statearr_30889_34049 = state_30735__$1;
(statearr_30889_34049[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (18))){
var inst_30611 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30890_34051 = state_30735__$1;
(statearr_30890_34051[(2)] = inst_30611);

(statearr_30890_34051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (42))){
var state_30735__$1 = state_30735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30735__$1,(45),dchan);
} else {
if((state_val_30737 === (37))){
var inst_30473 = (state_30735[(9)]);
var inst_30698 = (state_30735[(22)]);
var inst_30665 = (state_30735[(23)]);
var inst_30698__$1 = cljs.core.first(inst_30665);
var inst_30699 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30698__$1,inst_30473,done);
var state_30735__$1 = (function (){var statearr_30891 = state_30735;
(statearr_30891[(22)] = inst_30698__$1);

return statearr_30891;
})();
if(cljs.core.truth_(inst_30699)){
var statearr_30892_34052 = state_30735__$1;
(statearr_30892_34052[(1)] = (39));

} else {
var statearr_30893_34053 = state_30735__$1;
(statearr_30893_34053[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (8))){
var inst_30485 = (state_30735[(13)]);
var inst_30486 = (state_30735[(16)]);
var inst_30489 = (inst_30486 < inst_30485);
var inst_30490 = inst_30489;
var state_30735__$1 = state_30735;
if(cljs.core.truth_(inst_30490)){
var statearr_30894_34054 = state_30735__$1;
(statearr_30894_34054[(1)] = (10));

} else {
var statearr_30895_34055 = state_30735__$1;
(statearr_30895_34055[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28557__auto__ = null;
var cljs$core$async$mult_$_state_machine__28557__auto____0 = (function (){
var statearr_30897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30897[(0)] = cljs$core$async$mult_$_state_machine__28557__auto__);

(statearr_30897[(1)] = (1));

return statearr_30897;
});
var cljs$core$async$mult_$_state_machine__28557__auto____1 = (function (state_30735){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_30735);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e30900){var ex__28560__auto__ = e30900;
var statearr_30903_34057 = state_30735;
(statearr_30903_34057[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_30735[(4)]))){
var statearr_30904_34058 = state_30735;
(statearr_30904_34058[(1)] = cljs.core.first((state_30735[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34059 = state_30735;
state_30735 = G__34059;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28557__auto__ = function(state_30735){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28557__auto____1.call(this,state_30735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28557__auto____0;
cljs$core$async$mult_$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28557__auto____1;
return cljs$core$async$mult_$_state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_30907 = f__29074__auto__();
(statearr_30907[(6)] = c__29073__auto___33924);

return statearr_30907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30990 = arguments.length;
switch (G__30990) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34067 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34067(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34069 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34069(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34074 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34074(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34075 = (function (m,state_map){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4423__auto__.call(null,m,state_map));
} else {
var m__4420__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4420__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34075(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34076 = (function (m,mode){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4423__auto__.call(null,m,mode));
} else {
var m__4420__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4420__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34076(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34084 = arguments.length;
var i__4731__auto___34085 = (0);
while(true){
if((i__4731__auto___34085 < len__4730__auto___34084)){
args__4736__auto__.push((arguments[i__4731__auto___34085]));

var G__34086 = (i__4731__auto___34085 + (1));
i__4731__auto___34085 = G__34086;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31068){
var map__31069 = p__31068;
var map__31069__$1 = (((((!((map__31069 == null))))?(((((map__31069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31069):map__31069);
var opts = map__31069__$1;
var statearr_31074_34089 = state;
(statearr_31074_34089[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31076_34092 = state;
(statearr_31076_34092[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31078_34093 = state;
(statearr_31078_34093[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31048){
var G__31050 = cljs.core.first(seq31048);
var seq31048__$1 = cljs.core.next(seq31048);
var G__31051 = cljs.core.first(seq31048__$1);
var seq31048__$2 = cljs.core.next(seq31048__$1);
var G__31054 = cljs.core.first(seq31048__$2);
var seq31048__$3 = cljs.core.next(seq31048__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31050,G__31051,G__31054,seq31048__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31091 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31091 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31092){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31092 = meta31092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31093,meta31092__$1){
var self__ = this;
var _31093__$1 = this;
return (new cljs.core.async.t_cljs$core$async31091(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31092__$1));
}));

(cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31093){
var self__ = this;
var _31093__$1 = this;
return self__.meta31092;
}));

(cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31092","meta31092",1949327782,null)], null);
}));

(cljs.core.async.t_cljs$core$async31091.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31091");

(cljs.core.async.t_cljs$core$async31091.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async31091");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31091.
 */
cljs.core.async.__GT_t_cljs$core$async31091 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31091(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31092){
return (new cljs.core.async.t_cljs$core$async31091(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31092));
});

}

return (new cljs.core.async.t_cljs$core$async31091(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29073__auto___34114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_31243){
var state_val_31244 = (state_31243[(1)]);
if((state_val_31244 === (7))){
var inst_31150 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31247_34115 = state_31243__$1;
(statearr_31247_34115[(2)] = inst_31150);

(statearr_31247_34115[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (20))){
var inst_31163 = (state_31243[(7)]);
var state_31243__$1 = state_31243;
var statearr_31248_34116 = state_31243__$1;
(statearr_31248_34116[(2)] = inst_31163);

(statearr_31248_34116[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (27))){
var state_31243__$1 = state_31243;
var statearr_31249_34117 = state_31243__$1;
(statearr_31249_34117[(2)] = null);

(statearr_31249_34117[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (1))){
var inst_31134 = (state_31243[(8)]);
var inst_31134__$1 = calc_state();
var inst_31137 = (inst_31134__$1 == null);
var inst_31138 = cljs.core.not(inst_31137);
var state_31243__$1 = (function (){var statearr_31250 = state_31243;
(statearr_31250[(8)] = inst_31134__$1);

return statearr_31250;
})();
if(inst_31138){
var statearr_31251_34118 = state_31243__$1;
(statearr_31251_34118[(1)] = (2));

} else {
var statearr_31252_34119 = state_31243__$1;
(statearr_31252_34119[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (24))){
var inst_31198 = (state_31243[(9)]);
var inst_31188 = (state_31243[(10)]);
var inst_31216 = (state_31243[(11)]);
var inst_31216__$1 = (inst_31188.cljs$core$IFn$_invoke$arity$1 ? inst_31188.cljs$core$IFn$_invoke$arity$1(inst_31198) : inst_31188.call(null,inst_31198));
var state_31243__$1 = (function (){var statearr_31253 = state_31243;
(statearr_31253[(11)] = inst_31216__$1);

return statearr_31253;
})();
if(cljs.core.truth_(inst_31216__$1)){
var statearr_31254_34126 = state_31243__$1;
(statearr_31254_34126[(1)] = (29));

} else {
var statearr_31255_34127 = state_31243__$1;
(statearr_31255_34127[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (4))){
var inst_31153 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
if(cljs.core.truth_(inst_31153)){
var statearr_31256_34128 = state_31243__$1;
(statearr_31256_34128[(1)] = (8));

} else {
var statearr_31258_34129 = state_31243__$1;
(statearr_31258_34129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (15))){
var inst_31182 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
if(cljs.core.truth_(inst_31182)){
var statearr_31260_34130 = state_31243__$1;
(statearr_31260_34130[(1)] = (19));

} else {
var statearr_31262_34131 = state_31243__$1;
(statearr_31262_34131[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (21))){
var inst_31187 = (state_31243[(12)]);
var inst_31187__$1 = (state_31243[(2)]);
var inst_31188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31187__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31187__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31187__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31243__$1 = (function (){var statearr_31263 = state_31243;
(statearr_31263[(12)] = inst_31187__$1);

(statearr_31263[(10)] = inst_31188);

(statearr_31263[(13)] = inst_31189);

return statearr_31263;
})();
return cljs.core.async.ioc_alts_BANG_(state_31243__$1,(22),inst_31190);
} else {
if((state_val_31244 === (31))){
var inst_31225 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
if(cljs.core.truth_(inst_31225)){
var statearr_31269_34132 = state_31243__$1;
(statearr_31269_34132[(1)] = (32));

} else {
var statearr_31270_34133 = state_31243__$1;
(statearr_31270_34133[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (32))){
var inst_31197 = (state_31243[(14)]);
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31243__$1,(35),out,inst_31197);
} else {
if((state_val_31244 === (33))){
var inst_31187 = (state_31243[(12)]);
var inst_31163 = inst_31187;
var state_31243__$1 = (function (){var statearr_31312 = state_31243;
(statearr_31312[(7)] = inst_31163);

return statearr_31312;
})();
var statearr_31313_34140 = state_31243__$1;
(statearr_31313_34140[(2)] = null);

(statearr_31313_34140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (13))){
var inst_31163 = (state_31243[(7)]);
var inst_31171 = inst_31163.cljs$lang$protocol_mask$partition0$;
var inst_31172 = (inst_31171 & (64));
var inst_31173 = inst_31163.cljs$core$ISeq$;
var inst_31174 = (cljs.core.PROTOCOL_SENTINEL === inst_31173);
var inst_31175 = ((inst_31172) || (inst_31174));
var state_31243__$1 = state_31243;
if(cljs.core.truth_(inst_31175)){
var statearr_31316_34141 = state_31243__$1;
(statearr_31316_34141[(1)] = (16));

} else {
var statearr_31318_34142 = state_31243__$1;
(statearr_31318_34142[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (22))){
var inst_31198 = (state_31243[(9)]);
var inst_31197 = (state_31243[(14)]);
var inst_31195 = (state_31243[(2)]);
var inst_31197__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31195,(0),null);
var inst_31198__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31195,(1),null);
var inst_31202 = (inst_31197__$1 == null);
var inst_31203 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31198__$1,change);
var inst_31204 = ((inst_31202) || (inst_31203));
var state_31243__$1 = (function (){var statearr_31321 = state_31243;
(statearr_31321[(9)] = inst_31198__$1);

(statearr_31321[(14)] = inst_31197__$1);

return statearr_31321;
})();
if(cljs.core.truth_(inst_31204)){
var statearr_31322_34143 = state_31243__$1;
(statearr_31322_34143[(1)] = (23));

} else {
var statearr_31323_34144 = state_31243__$1;
(statearr_31323_34144[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (36))){
var inst_31187 = (state_31243[(12)]);
var inst_31163 = inst_31187;
var state_31243__$1 = (function (){var statearr_31324 = state_31243;
(statearr_31324[(7)] = inst_31163);

return statearr_31324;
})();
var statearr_31326_34145 = state_31243__$1;
(statearr_31326_34145[(2)] = null);

(statearr_31326_34145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (29))){
var inst_31216 = (state_31243[(11)]);
var state_31243__$1 = state_31243;
var statearr_31332_34146 = state_31243__$1;
(statearr_31332_34146[(2)] = inst_31216);

(statearr_31332_34146[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (6))){
var state_31243__$1 = state_31243;
var statearr_31336_34147 = state_31243__$1;
(statearr_31336_34147[(2)] = false);

(statearr_31336_34147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (28))){
var inst_31211 = (state_31243[(2)]);
var inst_31213 = calc_state();
var inst_31163 = inst_31213;
var state_31243__$1 = (function (){var statearr_31344 = state_31243;
(statearr_31344[(15)] = inst_31211);

(statearr_31344[(7)] = inst_31163);

return statearr_31344;
})();
var statearr_31346_34148 = state_31243__$1;
(statearr_31346_34148[(2)] = null);

(statearr_31346_34148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (25))){
var inst_31239 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31352_34149 = state_31243__$1;
(statearr_31352_34149[(2)] = inst_31239);

(statearr_31352_34149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (34))){
var inst_31237 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31358_34150 = state_31243__$1;
(statearr_31358_34150[(2)] = inst_31237);

(statearr_31358_34150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (17))){
var state_31243__$1 = state_31243;
var statearr_31362_34151 = state_31243__$1;
(statearr_31362_34151[(2)] = false);

(statearr_31362_34151[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (3))){
var state_31243__$1 = state_31243;
var statearr_31366_34152 = state_31243__$1;
(statearr_31366_34152[(2)] = false);

(statearr_31366_34152[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (12))){
var inst_31241 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31243__$1,inst_31241);
} else {
if((state_val_31244 === (2))){
var inst_31134 = (state_31243[(8)]);
var inst_31141 = inst_31134.cljs$lang$protocol_mask$partition0$;
var inst_31142 = (inst_31141 & (64));
var inst_31143 = inst_31134.cljs$core$ISeq$;
var inst_31144 = (cljs.core.PROTOCOL_SENTINEL === inst_31143);
var inst_31145 = ((inst_31142) || (inst_31144));
var state_31243__$1 = state_31243;
if(cljs.core.truth_(inst_31145)){
var statearr_31387_34155 = state_31243__$1;
(statearr_31387_34155[(1)] = (5));

} else {
var statearr_31388_34156 = state_31243__$1;
(statearr_31388_34156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (23))){
var inst_31197 = (state_31243[(14)]);
var inst_31206 = (inst_31197 == null);
var state_31243__$1 = state_31243;
if(cljs.core.truth_(inst_31206)){
var statearr_31391_34160 = state_31243__$1;
(statearr_31391_34160[(1)] = (26));

} else {
var statearr_31392_34161 = state_31243__$1;
(statearr_31392_34161[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (35))){
var inst_31228 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
if(cljs.core.truth_(inst_31228)){
var statearr_31394_34163 = state_31243__$1;
(statearr_31394_34163[(1)] = (36));

} else {
var statearr_31395_34164 = state_31243__$1;
(statearr_31395_34164[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (19))){
var inst_31163 = (state_31243[(7)]);
var inst_31184 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31163);
var state_31243__$1 = state_31243;
var statearr_31400_34165 = state_31243__$1;
(statearr_31400_34165[(2)] = inst_31184);

(statearr_31400_34165[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (11))){
var inst_31163 = (state_31243[(7)]);
var inst_31167 = (inst_31163 == null);
var inst_31168 = cljs.core.not(inst_31167);
var state_31243__$1 = state_31243;
if(inst_31168){
var statearr_31403_34166 = state_31243__$1;
(statearr_31403_34166[(1)] = (13));

} else {
var statearr_31404_34168 = state_31243__$1;
(statearr_31404_34168[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (9))){
var inst_31134 = (state_31243[(8)]);
var state_31243__$1 = state_31243;
var statearr_31406_34169 = state_31243__$1;
(statearr_31406_34169[(2)] = inst_31134);

(statearr_31406_34169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (5))){
var state_31243__$1 = state_31243;
var statearr_31407_34174 = state_31243__$1;
(statearr_31407_34174[(2)] = true);

(statearr_31407_34174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (14))){
var state_31243__$1 = state_31243;
var statearr_31408_34175 = state_31243__$1;
(statearr_31408_34175[(2)] = false);

(statearr_31408_34175[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (26))){
var inst_31198 = (state_31243[(9)]);
var inst_31208 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31198);
var state_31243__$1 = state_31243;
var statearr_31412_34178 = state_31243__$1;
(statearr_31412_34178[(2)] = inst_31208);

(statearr_31412_34178[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (16))){
var state_31243__$1 = state_31243;
var statearr_31413_34180 = state_31243__$1;
(statearr_31413_34180[(2)] = true);

(statearr_31413_34180[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (38))){
var inst_31233 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31414_34182 = state_31243__$1;
(statearr_31414_34182[(2)] = inst_31233);

(statearr_31414_34182[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (30))){
var inst_31198 = (state_31243[(9)]);
var inst_31188 = (state_31243[(10)]);
var inst_31189 = (state_31243[(13)]);
var inst_31220 = cljs.core.empty_QMARK_(inst_31188);
var inst_31221 = (inst_31189.cljs$core$IFn$_invoke$arity$1 ? inst_31189.cljs$core$IFn$_invoke$arity$1(inst_31198) : inst_31189.call(null,inst_31198));
var inst_31222 = cljs.core.not(inst_31221);
var inst_31223 = ((inst_31220) && (inst_31222));
var state_31243__$1 = state_31243;
var statearr_31417_34183 = state_31243__$1;
(statearr_31417_34183[(2)] = inst_31223);

(statearr_31417_34183[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (10))){
var inst_31134 = (state_31243[(8)]);
var inst_31158 = (state_31243[(2)]);
var inst_31160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31158,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31158,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31158,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31163 = inst_31134;
var state_31243__$1 = (function (){var statearr_31419 = state_31243;
(statearr_31419[(16)] = inst_31162);

(statearr_31419[(17)] = inst_31160);

(statearr_31419[(7)] = inst_31163);

(statearr_31419[(18)] = inst_31161);

return statearr_31419;
})();
var statearr_31420_34184 = state_31243__$1;
(statearr_31420_34184[(2)] = null);

(statearr_31420_34184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (18))){
var inst_31179 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31421_34185 = state_31243__$1;
(statearr_31421_34185[(2)] = inst_31179);

(statearr_31421_34185[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (37))){
var state_31243__$1 = state_31243;
var statearr_31423_34186 = state_31243__$1;
(statearr_31423_34186[(2)] = null);

(statearr_31423_34186[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (8))){
var inst_31134 = (state_31243[(8)]);
var inst_31155 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31134);
var state_31243__$1 = state_31243;
var statearr_31429_34188 = state_31243__$1;
(statearr_31429_34188[(2)] = inst_31155);

(statearr_31429_34188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__28557__auto__ = null;
var cljs$core$async$mix_$_state_machine__28557__auto____0 = (function (){
var statearr_31430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31430[(0)] = cljs$core$async$mix_$_state_machine__28557__auto__);

(statearr_31430[(1)] = (1));

return statearr_31430;
});
var cljs$core$async$mix_$_state_machine__28557__auto____1 = (function (state_31243){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_31243);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e31431){var ex__28560__auto__ = e31431;
var statearr_31432_34191 = state_31243;
(statearr_31432_34191[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_31243[(4)]))){
var statearr_31433_34192 = state_31243;
(statearr_31433_34192[(1)] = cljs.core.first((state_31243[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34194 = state_31243;
state_31243 = G__34194;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28557__auto__ = function(state_31243){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28557__auto____1.call(this,state_31243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28557__auto____0;
cljs$core$async$mix_$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28557__auto____1;
return cljs$core$async$mix_$_state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_31434 = f__29074__auto__();
(statearr_31434[(6)] = c__29073__auto___34114);

return statearr_31434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34196 = (function (p,v,ch,close_QMARK_){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4423__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4420__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34196(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34199 = (function (p,v,ch){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4423__auto__.call(null,p,v,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4420__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34199(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34200 = (function() {
var G__34201 = null;
var G__34201__1 = (function (p){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4423__auto__.call(null,p));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4420__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34201__2 = (function (p,v){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4423__auto__.call(null,p,v));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4420__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34201 = function(p,v){
switch(arguments.length){
case 1:
return G__34201__1.call(this,p);
case 2:
return G__34201__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34201.cljs$core$IFn$_invoke$arity$1 = G__34201__1;
G__34201.cljs$core$IFn$_invoke$arity$2 = G__34201__2;
return G__34201;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31505 = arguments.length;
switch (G__31505) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34200(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34200(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31512 = arguments.length;
switch (G__31512) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4120__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31509_SHARP_){
if(cljs.core.truth_((p1__31509_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31509_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31509_SHARP_.call(null,topic)))){
return p1__31509_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31509_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31518 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31518 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31519){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31519 = meta31519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31520,meta31519__$1){
var self__ = this;
var _31520__$1 = this;
return (new cljs.core.async.t_cljs$core$async31518(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31519__$1));
}));

(cljs.core.async.t_cljs$core$async31518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31520){
var self__ = this;
var _31520__$1 = this;
return self__.meta31519;
}));

(cljs.core.async.t_cljs$core$async31518.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31518.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31518.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31518.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31518.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31518.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31518.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31519","meta31519",1196958079,null)], null);
}));

(cljs.core.async.t_cljs$core$async31518.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31518");

(cljs.core.async.t_cljs$core$async31518.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async31518");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31518.
 */
cljs.core.async.__GT_t_cljs$core$async31518 = (function cljs$core$async$__GT_t_cljs$core$async31518(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31519){
return (new cljs.core.async.t_cljs$core$async31518(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31519));
});

}

return (new cljs.core.async.t_cljs$core$async31518(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29073__auto___34211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_31620){
var state_val_31621 = (state_31620[(1)]);
if((state_val_31621 === (7))){
var inst_31613 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31622_34212 = state_31620__$1;
(statearr_31622_34212[(2)] = inst_31613);

(statearr_31622_34212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (20))){
var state_31620__$1 = state_31620;
var statearr_31623_34213 = state_31620__$1;
(statearr_31623_34213[(2)] = null);

(statearr_31623_34213[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (1))){
var state_31620__$1 = state_31620;
var statearr_31624_34214 = state_31620__$1;
(statearr_31624_34214[(2)] = null);

(statearr_31624_34214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (24))){
var inst_31595 = (state_31620[(7)]);
var inst_31605 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31595);
var state_31620__$1 = state_31620;
var statearr_31637_34216 = state_31620__$1;
(statearr_31637_34216[(2)] = inst_31605);

(statearr_31637_34216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (4))){
var inst_31547 = (state_31620[(8)]);
var inst_31547__$1 = (state_31620[(2)]);
var inst_31548 = (inst_31547__$1 == null);
var state_31620__$1 = (function (){var statearr_31638 = state_31620;
(statearr_31638[(8)] = inst_31547__$1);

return statearr_31638;
})();
if(cljs.core.truth_(inst_31548)){
var statearr_31639_34218 = state_31620__$1;
(statearr_31639_34218[(1)] = (5));

} else {
var statearr_31640_34219 = state_31620__$1;
(statearr_31640_34219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (15))){
var inst_31589 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31641_34220 = state_31620__$1;
(statearr_31641_34220[(2)] = inst_31589);

(statearr_31641_34220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (21))){
var inst_31610 = (state_31620[(2)]);
var state_31620__$1 = (function (){var statearr_31642 = state_31620;
(statearr_31642[(9)] = inst_31610);

return statearr_31642;
})();
var statearr_31644_34221 = state_31620__$1;
(statearr_31644_34221[(2)] = null);

(statearr_31644_34221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (13))){
var inst_31571 = (state_31620[(10)]);
var inst_31573 = cljs.core.chunked_seq_QMARK_(inst_31571);
var state_31620__$1 = state_31620;
if(inst_31573){
var statearr_31645_34222 = state_31620__$1;
(statearr_31645_34222[(1)] = (16));

} else {
var statearr_31646_34227 = state_31620__$1;
(statearr_31646_34227[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (22))){
var inst_31602 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
if(cljs.core.truth_(inst_31602)){
var statearr_31651_34228 = state_31620__$1;
(statearr_31651_34228[(1)] = (23));

} else {
var statearr_31652_34229 = state_31620__$1;
(statearr_31652_34229[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (6))){
var inst_31547 = (state_31620[(8)]);
var inst_31595 = (state_31620[(7)]);
var inst_31598 = (state_31620[(11)]);
var inst_31595__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31547) : topic_fn.call(null,inst_31547));
var inst_31597 = cljs.core.deref(mults);
var inst_31598__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31597,inst_31595__$1);
var state_31620__$1 = (function (){var statearr_31656 = state_31620;
(statearr_31656[(7)] = inst_31595__$1);

(statearr_31656[(11)] = inst_31598__$1);

return statearr_31656;
})();
if(cljs.core.truth_(inst_31598__$1)){
var statearr_31657_34233 = state_31620__$1;
(statearr_31657_34233[(1)] = (19));

} else {
var statearr_31658_34236 = state_31620__$1;
(statearr_31658_34236[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (25))){
var inst_31607 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31659_34238 = state_31620__$1;
(statearr_31659_34238[(2)] = inst_31607);

(statearr_31659_34238[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (17))){
var inst_31571 = (state_31620[(10)]);
var inst_31580 = cljs.core.first(inst_31571);
var inst_31581 = cljs.core.async.muxch_STAR_(inst_31580);
var inst_31582 = cljs.core.async.close_BANG_(inst_31581);
var inst_31583 = cljs.core.next(inst_31571);
var inst_31557 = inst_31583;
var inst_31558 = null;
var inst_31559 = (0);
var inst_31560 = (0);
var state_31620__$1 = (function (){var statearr_31660 = state_31620;
(statearr_31660[(12)] = inst_31557);

(statearr_31660[(13)] = inst_31582);

(statearr_31660[(14)] = inst_31558);

(statearr_31660[(15)] = inst_31559);

(statearr_31660[(16)] = inst_31560);

return statearr_31660;
})();
var statearr_31661_34249 = state_31620__$1;
(statearr_31661_34249[(2)] = null);

(statearr_31661_34249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (3))){
var inst_31615 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31620__$1,inst_31615);
} else {
if((state_val_31621 === (12))){
var inst_31591 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31663_34254 = state_31620__$1;
(statearr_31663_34254[(2)] = inst_31591);

(statearr_31663_34254[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (2))){
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31620__$1,(4),ch);
} else {
if((state_val_31621 === (23))){
var state_31620__$1 = state_31620;
var statearr_31665_34259 = state_31620__$1;
(statearr_31665_34259[(2)] = null);

(statearr_31665_34259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (19))){
var inst_31547 = (state_31620[(8)]);
var inst_31598 = (state_31620[(11)]);
var inst_31600 = cljs.core.async.muxch_STAR_(inst_31598);
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31620__$1,(22),inst_31600,inst_31547);
} else {
if((state_val_31621 === (11))){
var inst_31557 = (state_31620[(12)]);
var inst_31571 = (state_31620[(10)]);
var inst_31571__$1 = cljs.core.seq(inst_31557);
var state_31620__$1 = (function (){var statearr_31680 = state_31620;
(statearr_31680[(10)] = inst_31571__$1);

return statearr_31680;
})();
if(inst_31571__$1){
var statearr_31681_34274 = state_31620__$1;
(statearr_31681_34274[(1)] = (13));

} else {
var statearr_31682_34278 = state_31620__$1;
(statearr_31682_34278[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (9))){
var inst_31593 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31683_34279 = state_31620__$1;
(statearr_31683_34279[(2)] = inst_31593);

(statearr_31683_34279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (5))){
var inst_31554 = cljs.core.deref(mults);
var inst_31555 = cljs.core.vals(inst_31554);
var inst_31556 = cljs.core.seq(inst_31555);
var inst_31557 = inst_31556;
var inst_31558 = null;
var inst_31559 = (0);
var inst_31560 = (0);
var state_31620__$1 = (function (){var statearr_31684 = state_31620;
(statearr_31684[(12)] = inst_31557);

(statearr_31684[(14)] = inst_31558);

(statearr_31684[(15)] = inst_31559);

(statearr_31684[(16)] = inst_31560);

return statearr_31684;
})();
var statearr_31685_34280 = state_31620__$1;
(statearr_31685_34280[(2)] = null);

(statearr_31685_34280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (14))){
var state_31620__$1 = state_31620;
var statearr_31689_34281 = state_31620__$1;
(statearr_31689_34281[(2)] = null);

(statearr_31689_34281[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (16))){
var inst_31571 = (state_31620[(10)]);
var inst_31575 = cljs.core.chunk_first(inst_31571);
var inst_31576 = cljs.core.chunk_rest(inst_31571);
var inst_31577 = cljs.core.count(inst_31575);
var inst_31557 = inst_31576;
var inst_31558 = inst_31575;
var inst_31559 = inst_31577;
var inst_31560 = (0);
var state_31620__$1 = (function (){var statearr_31690 = state_31620;
(statearr_31690[(12)] = inst_31557);

(statearr_31690[(14)] = inst_31558);

(statearr_31690[(15)] = inst_31559);

(statearr_31690[(16)] = inst_31560);

return statearr_31690;
})();
var statearr_31691_34286 = state_31620__$1;
(statearr_31691_34286[(2)] = null);

(statearr_31691_34286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (10))){
var inst_31557 = (state_31620[(12)]);
var inst_31558 = (state_31620[(14)]);
var inst_31559 = (state_31620[(15)]);
var inst_31560 = (state_31620[(16)]);
var inst_31565 = cljs.core._nth(inst_31558,inst_31560);
var inst_31566 = cljs.core.async.muxch_STAR_(inst_31565);
var inst_31567 = cljs.core.async.close_BANG_(inst_31566);
var inst_31568 = (inst_31560 + (1));
var tmp31686 = inst_31557;
var tmp31687 = inst_31558;
var tmp31688 = inst_31559;
var inst_31557__$1 = tmp31686;
var inst_31558__$1 = tmp31687;
var inst_31559__$1 = tmp31688;
var inst_31560__$1 = inst_31568;
var state_31620__$1 = (function (){var statearr_31694 = state_31620;
(statearr_31694[(12)] = inst_31557__$1);

(statearr_31694[(17)] = inst_31567);

(statearr_31694[(14)] = inst_31558__$1);

(statearr_31694[(15)] = inst_31559__$1);

(statearr_31694[(16)] = inst_31560__$1);

return statearr_31694;
})();
var statearr_31696_34287 = state_31620__$1;
(statearr_31696_34287[(2)] = null);

(statearr_31696_34287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (18))){
var inst_31586 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31698_34288 = state_31620__$1;
(statearr_31698_34288[(2)] = inst_31586);

(statearr_31698_34288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (8))){
var inst_31559 = (state_31620[(15)]);
var inst_31560 = (state_31620[(16)]);
var inst_31562 = (inst_31560 < inst_31559);
var inst_31563 = inst_31562;
var state_31620__$1 = state_31620;
if(cljs.core.truth_(inst_31563)){
var statearr_31699_34289 = state_31620__$1;
(statearr_31699_34289[(1)] = (10));

} else {
var statearr_31700_34290 = state_31620__$1;
(statearr_31700_34290[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28557__auto__ = null;
var cljs$core$async$state_machine__28557__auto____0 = (function (){
var statearr_31703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31703[(0)] = cljs$core$async$state_machine__28557__auto__);

(statearr_31703[(1)] = (1));

return statearr_31703;
});
var cljs$core$async$state_machine__28557__auto____1 = (function (state_31620){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_31620);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e31704){var ex__28560__auto__ = e31704;
var statearr_31705_34296 = state_31620;
(statearr_31705_34296[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_31620[(4)]))){
var statearr_31706_34297 = state_31620;
(statearr_31706_34297[(1)] = cljs.core.first((state_31620[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34298 = state_31620;
state_31620 = G__34298;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$state_machine__28557__auto__ = function(state_31620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28557__auto____1.call(this,state_31620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28557__auto____0;
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28557__auto____1;
return cljs$core$async$state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_31707 = f__29074__auto__();
(statearr_31707[(6)] = c__29073__auto___34211);

return statearr_31707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31715 = arguments.length;
switch (G__31715) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31732 = arguments.length;
switch (G__31732) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31745 = arguments.length;
switch (G__31745) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29073__auto___34308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_31806){
var state_val_31807 = (state_31806[(1)]);
if((state_val_31807 === (7))){
var state_31806__$1 = state_31806;
var statearr_31809_34313 = state_31806__$1;
(statearr_31809_34313[(2)] = null);

(statearr_31809_34313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31807 === (1))){
var state_31806__$1 = state_31806;
var statearr_31810_34316 = state_31806__$1;
(statearr_31810_34316[(2)] = null);

(statearr_31810_34316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31807 === (4))){
var inst_31754 = (state_31806[(7)]);
var inst_31753 = (state_31806[(8)]);
var inst_31756 = (inst_31754 < inst_31753);
var state_31806__$1 = state_31806;
if(cljs.core.truth_(inst_31756)){
var statearr_31812_34319 = state_31806__$1;
(statearr_31812_34319[(1)] = (6));

} else {
var statearr_31813_34321 = state_31806__$1;
(statearr_31813_34321[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31807 === (15))){
var inst_31788 = (state_31806[(9)]);
var inst_31793 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31788);
var state_31806__$1 = state_31806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31806__$1,(17),out,inst_31793);
} else {
if((state_val_31807 === (13))){
var inst_31788 = (state_31806[(9)]);
var inst_31788__$1 = (state_31806[(2)]);
var inst_31789 = cljs.core.some(cljs.core.nil_QMARK_,inst_31788__$1);
var state_31806__$1 = (function (){var statearr_31814 = state_31806;
(statearr_31814[(9)] = inst_31788__$1);

return statearr_31814;
})();
if(cljs.core.truth_(inst_31789)){
var statearr_31815_34323 = state_31806__$1;
(statearr_31815_34323[(1)] = (14));

} else {
var statearr_31816_34324 = state_31806__$1;
(statearr_31816_34324[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31807 === (6))){
var state_31806__$1 = state_31806;
var statearr_31825_34325 = state_31806__$1;
(statearr_31825_34325[(2)] = null);

(statearr_31825_34325[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31807 === (17))){
var inst_31795 = (state_31806[(2)]);
var state_31806__$1 = (function (){var statearr_31846 = state_31806;
(statearr_31846[(10)] = inst_31795);

return statearr_31846;
})();
var statearr_31850_34328 = state_31806__$1;
(statearr_31850_34328[(2)] = null);

(statearr_31850_34328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31807 === (3))){
var inst_31800 = (state_31806[(2)]);
var state_31806__$1 = state_31806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31806__$1,inst_31800);
} else {
if((state_val_31807 === (12))){
var _ = (function (){var statearr_31851 = state_31806;
(statearr_31851[(4)] = cljs.core.rest((state_31806[(4)])));

return statearr_31851;
})();
var state_31806__$1 = state_31806;
var ex31828 = (state_31806__$1[(2)]);
var statearr_31853_34339 = state_31806__$1;
(statearr_31853_34339[(5)] = ex31828);


if((ex31828 instanceof Object)){
var statearr_31854_34340 = state_31806__$1;
(statearr_31854_34340[(1)] = (11));

(statearr_31854_34340[(5)] = null);

} else {
throw ex31828;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31807 === (2))){
var inst_31752 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31753 = cnt;
var inst_31754 = (0);
var state_31806__$1 = (function (){var statearr_31859 = state_31806;
(statearr_31859[(11)] = inst_31752);

(statearr_31859[(7)] = inst_31754);

(statearr_31859[(8)] = inst_31753);

return statearr_31859;
})();
var statearr_31861_34341 = state_31806__$1;
(statearr_31861_34341[(2)] = null);

(statearr_31861_34341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31807 === (11))){
var inst_31767 = (state_31806[(2)]);
var inst_31768 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31806__$1 = (function (){var statearr_31864 = state_31806;
(statearr_31864[(12)] = inst_31767);

return statearr_31864;
})();
var statearr_31865_34342 = state_31806__$1;
(statearr_31865_34342[(2)] = inst_31768);

(statearr_31865_34342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31807 === (9))){
var inst_31754 = (state_31806[(7)]);
var _ = (function (){var statearr_31867 = state_31806;
(statearr_31867[(4)] = cljs.core.cons((12),(state_31806[(4)])));

return statearr_31867;
})();
var inst_31774 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31754) : chs__$1.call(null,inst_31754));
var inst_31775 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31754) : done.call(null,inst_31754));
var inst_31776 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31774,inst_31775);
var ___$1 = (function (){var statearr_31868 = state_31806;
(statearr_31868[(4)] = cljs.core.rest((state_31806[(4)])));

return statearr_31868;
})();
var state_31806__$1 = state_31806;
var statearr_31870_34344 = state_31806__$1;
(statearr_31870_34344[(2)] = inst_31776);

(statearr_31870_34344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31807 === (5))){
var inst_31786 = (state_31806[(2)]);
var state_31806__$1 = (function (){var statearr_31871 = state_31806;
(statearr_31871[(13)] = inst_31786);

return statearr_31871;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31806__$1,(13),dchan);
} else {
if((state_val_31807 === (14))){
var inst_31791 = cljs.core.async.close_BANG_(out);
var state_31806__$1 = state_31806;
var statearr_31876_34345 = state_31806__$1;
(statearr_31876_34345[(2)] = inst_31791);

(statearr_31876_34345[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31807 === (16))){
var inst_31798 = (state_31806[(2)]);
var state_31806__$1 = state_31806;
var statearr_31880_34350 = state_31806__$1;
(statearr_31880_34350[(2)] = inst_31798);

(statearr_31880_34350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31807 === (10))){
var inst_31754 = (state_31806[(7)]);
var inst_31779 = (state_31806[(2)]);
var inst_31780 = (inst_31754 + (1));
var inst_31754__$1 = inst_31780;
var state_31806__$1 = (function (){var statearr_31881 = state_31806;
(statearr_31881[(14)] = inst_31779);

(statearr_31881[(7)] = inst_31754__$1);

return statearr_31881;
})();
var statearr_31882_34351 = state_31806__$1;
(statearr_31882_34351[(2)] = null);

(statearr_31882_34351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31807 === (8))){
var inst_31784 = (state_31806[(2)]);
var state_31806__$1 = state_31806;
var statearr_31883_34352 = state_31806__$1;
(statearr_31883_34352[(2)] = inst_31784);

(statearr_31883_34352[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28557__auto__ = null;
var cljs$core$async$state_machine__28557__auto____0 = (function (){
var statearr_31884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31884[(0)] = cljs$core$async$state_machine__28557__auto__);

(statearr_31884[(1)] = (1));

return statearr_31884;
});
var cljs$core$async$state_machine__28557__auto____1 = (function (state_31806){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_31806);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e31885){var ex__28560__auto__ = e31885;
var statearr_31886_34353 = state_31806;
(statearr_31886_34353[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_31806[(4)]))){
var statearr_31887_34354 = state_31806;
(statearr_31887_34354[(1)] = cljs.core.first((state_31806[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34358 = state_31806;
state_31806 = G__34358;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$state_machine__28557__auto__ = function(state_31806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28557__auto____1.call(this,state_31806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28557__auto____0;
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28557__auto____1;
return cljs$core$async$state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_31888 = f__29074__auto__();
(statearr_31888[(6)] = c__29073__auto___34308);

return statearr_31888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31902 = arguments.length;
switch (G__31902) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29073__auto___34362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_31991){
var state_val_31992 = (state_31991[(1)]);
if((state_val_31992 === (7))){
var inst_31969 = (state_31991[(7)]);
var inst_31968 = (state_31991[(8)]);
var inst_31968__$1 = (state_31991[(2)]);
var inst_31969__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31968__$1,(0),null);
var inst_31970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31968__$1,(1),null);
var inst_31971 = (inst_31969__$1 == null);
var state_31991__$1 = (function (){var statearr_32000 = state_31991;
(statearr_32000[(7)] = inst_31969__$1);

(statearr_32000[(8)] = inst_31968__$1);

(statearr_32000[(9)] = inst_31970);

return statearr_32000;
})();
if(cljs.core.truth_(inst_31971)){
var statearr_32001_34366 = state_31991__$1;
(statearr_32001_34366[(1)] = (8));

} else {
var statearr_32002_34367 = state_31991__$1;
(statearr_32002_34367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (1))){
var inst_31957 = cljs.core.vec(chs);
var inst_31958 = inst_31957;
var state_31991__$1 = (function (){var statearr_32004 = state_31991;
(statearr_32004[(10)] = inst_31958);

return statearr_32004;
})();
var statearr_32006_34368 = state_31991__$1;
(statearr_32006_34368[(2)] = null);

(statearr_32006_34368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (4))){
var inst_31958 = (state_31991[(10)]);
var state_31991__$1 = state_31991;
return cljs.core.async.ioc_alts_BANG_(state_31991__$1,(7),inst_31958);
} else {
if((state_val_31992 === (6))){
var inst_31987 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32008_34369 = state_31991__$1;
(statearr_32008_34369[(2)] = inst_31987);

(statearr_32008_34369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (3))){
var inst_31989 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31991__$1,inst_31989);
} else {
if((state_val_31992 === (2))){
var inst_31958 = (state_31991[(10)]);
var inst_31961 = cljs.core.count(inst_31958);
var inst_31962 = (inst_31961 > (0));
var state_31991__$1 = state_31991;
if(cljs.core.truth_(inst_31962)){
var statearr_32014_34370 = state_31991__$1;
(statearr_32014_34370[(1)] = (4));

} else {
var statearr_32021_34371 = state_31991__$1;
(statearr_32021_34371[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (11))){
var inst_31958 = (state_31991[(10)]);
var inst_31980 = (state_31991[(2)]);
var tmp32011 = inst_31958;
var inst_31958__$1 = tmp32011;
var state_31991__$1 = (function (){var statearr_32023 = state_31991;
(statearr_32023[(10)] = inst_31958__$1);

(statearr_32023[(11)] = inst_31980);

return statearr_32023;
})();
var statearr_32024_34372 = state_31991__$1;
(statearr_32024_34372[(2)] = null);

(statearr_32024_34372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (9))){
var inst_31969 = (state_31991[(7)]);
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31991__$1,(11),out,inst_31969);
} else {
if((state_val_31992 === (5))){
var inst_31985 = cljs.core.async.close_BANG_(out);
var state_31991__$1 = state_31991;
var statearr_32030_34373 = state_31991__$1;
(statearr_32030_34373[(2)] = inst_31985);

(statearr_32030_34373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (10))){
var inst_31983 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32036_34375 = state_31991__$1;
(statearr_32036_34375[(2)] = inst_31983);

(statearr_32036_34375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (8))){
var inst_31958 = (state_31991[(10)]);
var inst_31969 = (state_31991[(7)]);
var inst_31968 = (state_31991[(8)]);
var inst_31970 = (state_31991[(9)]);
var inst_31975 = (function (){var cs = inst_31958;
var vec__31964 = inst_31968;
var v = inst_31969;
var c = inst_31970;
return (function (p1__31900_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31900_SHARP_);
});
})();
var inst_31976 = cljs.core.filterv(inst_31975,inst_31958);
var inst_31958__$1 = inst_31976;
var state_31991__$1 = (function (){var statearr_32045 = state_31991;
(statearr_32045[(10)] = inst_31958__$1);

return statearr_32045;
})();
var statearr_32047_34376 = state_31991__$1;
(statearr_32047_34376[(2)] = null);

(statearr_32047_34376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28557__auto__ = null;
var cljs$core$async$state_machine__28557__auto____0 = (function (){
var statearr_32069 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32069[(0)] = cljs$core$async$state_machine__28557__auto__);

(statearr_32069[(1)] = (1));

return statearr_32069;
});
var cljs$core$async$state_machine__28557__auto____1 = (function (state_31991){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_31991);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e32070){var ex__28560__auto__ = e32070;
var statearr_32074_34377 = state_31991;
(statearr_32074_34377[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_31991[(4)]))){
var statearr_32075_34378 = state_31991;
(statearr_32075_34378[(1)] = cljs.core.first((state_31991[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34383 = state_31991;
state_31991 = G__34383;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$state_machine__28557__auto__ = function(state_31991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28557__auto____1.call(this,state_31991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28557__auto____0;
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28557__auto____1;
return cljs$core$async$state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_32076 = f__29074__auto__();
(statearr_32076[(6)] = c__29073__auto___34362);

return statearr_32076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32084 = arguments.length;
switch (G__32084) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29073__auto___34386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_32124){
var state_val_32125 = (state_32124[(1)]);
if((state_val_32125 === (7))){
var inst_32104 = (state_32124[(7)]);
var inst_32104__$1 = (state_32124[(2)]);
var inst_32105 = (inst_32104__$1 == null);
var inst_32106 = cljs.core.not(inst_32105);
var state_32124__$1 = (function (){var statearr_32130 = state_32124;
(statearr_32130[(7)] = inst_32104__$1);

return statearr_32130;
})();
if(inst_32106){
var statearr_32131_34387 = state_32124__$1;
(statearr_32131_34387[(1)] = (8));

} else {
var statearr_32132_34389 = state_32124__$1;
(statearr_32132_34389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (1))){
var inst_32097 = (0);
var state_32124__$1 = (function (){var statearr_32133 = state_32124;
(statearr_32133[(8)] = inst_32097);

return statearr_32133;
})();
var statearr_32134_34391 = state_32124__$1;
(statearr_32134_34391[(2)] = null);

(statearr_32134_34391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (4))){
var state_32124__$1 = state_32124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32124__$1,(7),ch);
} else {
if((state_val_32125 === (6))){
var inst_32118 = (state_32124[(2)]);
var state_32124__$1 = state_32124;
var statearr_32141_34393 = state_32124__$1;
(statearr_32141_34393[(2)] = inst_32118);

(statearr_32141_34393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (3))){
var inst_32120 = (state_32124[(2)]);
var inst_32121 = cljs.core.async.close_BANG_(out);
var state_32124__$1 = (function (){var statearr_32143 = state_32124;
(statearr_32143[(9)] = inst_32120);

return statearr_32143;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32124__$1,inst_32121);
} else {
if((state_val_32125 === (2))){
var inst_32097 = (state_32124[(8)]);
var inst_32101 = (inst_32097 < n);
var state_32124__$1 = state_32124;
if(cljs.core.truth_(inst_32101)){
var statearr_32144_34398 = state_32124__$1;
(statearr_32144_34398[(1)] = (4));

} else {
var statearr_32145_34399 = state_32124__$1;
(statearr_32145_34399[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (11))){
var inst_32097 = (state_32124[(8)]);
var inst_32110 = (state_32124[(2)]);
var inst_32111 = (inst_32097 + (1));
var inst_32097__$1 = inst_32111;
var state_32124__$1 = (function (){var statearr_32146 = state_32124;
(statearr_32146[(8)] = inst_32097__$1);

(statearr_32146[(10)] = inst_32110);

return statearr_32146;
})();
var statearr_32147_34400 = state_32124__$1;
(statearr_32147_34400[(2)] = null);

(statearr_32147_34400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (9))){
var state_32124__$1 = state_32124;
var statearr_32148_34401 = state_32124__$1;
(statearr_32148_34401[(2)] = null);

(statearr_32148_34401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (5))){
var state_32124__$1 = state_32124;
var statearr_32155_34402 = state_32124__$1;
(statearr_32155_34402[(2)] = null);

(statearr_32155_34402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (10))){
var inst_32115 = (state_32124[(2)]);
var state_32124__$1 = state_32124;
var statearr_32156_34403 = state_32124__$1;
(statearr_32156_34403[(2)] = inst_32115);

(statearr_32156_34403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (8))){
var inst_32104 = (state_32124[(7)]);
var state_32124__$1 = state_32124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32124__$1,(11),out,inst_32104);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28557__auto__ = null;
var cljs$core$async$state_machine__28557__auto____0 = (function (){
var statearr_32161 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32161[(0)] = cljs$core$async$state_machine__28557__auto__);

(statearr_32161[(1)] = (1));

return statearr_32161;
});
var cljs$core$async$state_machine__28557__auto____1 = (function (state_32124){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_32124);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e32164){var ex__28560__auto__ = e32164;
var statearr_32165_34404 = state_32124;
(statearr_32165_34404[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_32124[(4)]))){
var statearr_32166_34405 = state_32124;
(statearr_32166_34405[(1)] = cljs.core.first((state_32124[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34409 = state_32124;
state_32124 = G__34409;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$state_machine__28557__auto__ = function(state_32124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28557__auto____1.call(this,state_32124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28557__auto____0;
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28557__auto____1;
return cljs$core$async$state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_32167 = f__29074__auto__();
(statearr_32167[(6)] = c__29073__auto___34386);

return statearr_32167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32170 = (function (f,ch,meta32171){
this.f = f;
this.ch = ch;
this.meta32171 = meta32171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32172,meta32171__$1){
var self__ = this;
var _32172__$1 = this;
return (new cljs.core.async.t_cljs$core$async32170(self__.f,self__.ch,meta32171__$1));
}));

(cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32172){
var self__ = this;
var _32172__$1 = this;
return self__.meta32171;
}));

(cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32212 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32212 = (function (f,ch,meta32171,_,fn1,meta32213){
this.f = f;
this.ch = ch;
this.meta32171 = meta32171;
this._ = _;
this.fn1 = fn1;
this.meta32213 = meta32213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32214,meta32213__$1){
var self__ = this;
var _32214__$1 = this;
return (new cljs.core.async.t_cljs$core$async32212(self__.f,self__.ch,self__.meta32171,self__._,self__.fn1,meta32213__$1));
}));

(cljs.core.async.t_cljs$core$async32212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32214){
var self__ = this;
var _32214__$1 = this;
return self__.meta32213;
}));

(cljs.core.async.t_cljs$core$async32212.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32212.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32169_SHARP_){
var G__32228 = (((p1__32169_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32169_SHARP_) : self__.f.call(null,p1__32169_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32228) : f1.call(null,G__32228));
});
}));

(cljs.core.async.t_cljs$core$async32212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32171","meta32171",-2081140524,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32170","cljs.core.async/t_cljs$core$async32170",-2126121456,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32213","meta32213",-1448138725,null)], null);
}));

(cljs.core.async.t_cljs$core$async32212.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32212");

(cljs.core.async.t_cljs$core$async32212.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async32212");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32212.
 */
cljs.core.async.__GT_t_cljs$core$async32212 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32212(f__$1,ch__$1,meta32171__$1,___$2,fn1__$1,meta32213){
return (new cljs.core.async.t_cljs$core$async32212(f__$1,ch__$1,meta32171__$1,___$2,fn1__$1,meta32213));
});

}

return (new cljs.core.async.t_cljs$core$async32212(self__.f,self__.ch,self__.meta32171,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4109__auto__ = ret;
if(cljs.core.truth_(and__4109__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4109__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32262 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32262) : self__.f.call(null,G__32262));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32171","meta32171",-2081140524,null)], null);
}));

(cljs.core.async.t_cljs$core$async32170.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32170");

(cljs.core.async.t_cljs$core$async32170.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async32170");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32170.
 */
cljs.core.async.__GT_t_cljs$core$async32170 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32170(f__$1,ch__$1,meta32171){
return (new cljs.core.async.t_cljs$core$async32170(f__$1,ch__$1,meta32171));
});

}

return (new cljs.core.async.t_cljs$core$async32170(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32283 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32283 = (function (f,ch,meta32284){
this.f = f;
this.ch = ch;
this.meta32284 = meta32284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32285,meta32284__$1){
var self__ = this;
var _32285__$1 = this;
return (new cljs.core.async.t_cljs$core$async32283(self__.f,self__.ch,meta32284__$1));
}));

(cljs.core.async.t_cljs$core$async32283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32285){
var self__ = this;
var _32285__$1 = this;
return self__.meta32284;
}));

(cljs.core.async.t_cljs$core$async32283.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32283.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32283.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32283.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32283.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32283.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32284","meta32284",1666748611,null)], null);
}));

(cljs.core.async.t_cljs$core$async32283.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32283");

(cljs.core.async.t_cljs$core$async32283.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async32283");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32283.
 */
cljs.core.async.__GT_t_cljs$core$async32283 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32283(f__$1,ch__$1,meta32284){
return (new cljs.core.async.t_cljs$core$async32283(f__$1,ch__$1,meta32284));
});

}

return (new cljs.core.async.t_cljs$core$async32283(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32310 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32310 = (function (p,ch,meta32311){
this.p = p;
this.ch = ch;
this.meta32311 = meta32311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32312,meta32311__$1){
var self__ = this;
var _32312__$1 = this;
return (new cljs.core.async.t_cljs$core$async32310(self__.p,self__.ch,meta32311__$1));
}));

(cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32312){
var self__ = this;
var _32312__$1 = this;
return self__.meta32311;
}));

(cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32311","meta32311",529177708,null)], null);
}));

(cljs.core.async.t_cljs$core$async32310.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32310");

(cljs.core.async.t_cljs$core$async32310.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async32310");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32310.
 */
cljs.core.async.__GT_t_cljs$core$async32310 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32310(p__$1,ch__$1,meta32311){
return (new cljs.core.async.t_cljs$core$async32310(p__$1,ch__$1,meta32311));
});

}

return (new cljs.core.async.t_cljs$core$async32310(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32338 = arguments.length;
switch (G__32338) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29073__auto___34457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_32376){
var state_val_32377 = (state_32376[(1)]);
if((state_val_32377 === (7))){
var inst_32372 = (state_32376[(2)]);
var state_32376__$1 = state_32376;
var statearr_32380_34459 = state_32376__$1;
(statearr_32380_34459[(2)] = inst_32372);

(statearr_32380_34459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32377 === (1))){
var state_32376__$1 = state_32376;
var statearr_32381_34460 = state_32376__$1;
(statearr_32381_34460[(2)] = null);

(statearr_32381_34460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32377 === (4))){
var inst_32358 = (state_32376[(7)]);
var inst_32358__$1 = (state_32376[(2)]);
var inst_32359 = (inst_32358__$1 == null);
var state_32376__$1 = (function (){var statearr_32382 = state_32376;
(statearr_32382[(7)] = inst_32358__$1);

return statearr_32382;
})();
if(cljs.core.truth_(inst_32359)){
var statearr_32383_34461 = state_32376__$1;
(statearr_32383_34461[(1)] = (5));

} else {
var statearr_32384_34462 = state_32376__$1;
(statearr_32384_34462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32377 === (6))){
var inst_32358 = (state_32376[(7)]);
var inst_32363 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32358) : p.call(null,inst_32358));
var state_32376__$1 = state_32376;
if(cljs.core.truth_(inst_32363)){
var statearr_32385_34463 = state_32376__$1;
(statearr_32385_34463[(1)] = (8));

} else {
var statearr_32386_34464 = state_32376__$1;
(statearr_32386_34464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32377 === (3))){
var inst_32374 = (state_32376[(2)]);
var state_32376__$1 = state_32376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32376__$1,inst_32374);
} else {
if((state_val_32377 === (2))){
var state_32376__$1 = state_32376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32376__$1,(4),ch);
} else {
if((state_val_32377 === (11))){
var inst_32366 = (state_32376[(2)]);
var state_32376__$1 = state_32376;
var statearr_32387_34467 = state_32376__$1;
(statearr_32387_34467[(2)] = inst_32366);

(statearr_32387_34467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32377 === (9))){
var state_32376__$1 = state_32376;
var statearr_32388_34468 = state_32376__$1;
(statearr_32388_34468[(2)] = null);

(statearr_32388_34468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32377 === (5))){
var inst_32361 = cljs.core.async.close_BANG_(out);
var state_32376__$1 = state_32376;
var statearr_32389_34469 = state_32376__$1;
(statearr_32389_34469[(2)] = inst_32361);

(statearr_32389_34469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32377 === (10))){
var inst_32369 = (state_32376[(2)]);
var state_32376__$1 = (function (){var statearr_32390 = state_32376;
(statearr_32390[(8)] = inst_32369);

return statearr_32390;
})();
var statearr_32391_34472 = state_32376__$1;
(statearr_32391_34472[(2)] = null);

(statearr_32391_34472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32377 === (8))){
var inst_32358 = (state_32376[(7)]);
var state_32376__$1 = state_32376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32376__$1,(11),out,inst_32358);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28557__auto__ = null;
var cljs$core$async$state_machine__28557__auto____0 = (function (){
var statearr_32392 = [null,null,null,null,null,null,null,null,null];
(statearr_32392[(0)] = cljs$core$async$state_machine__28557__auto__);

(statearr_32392[(1)] = (1));

return statearr_32392;
});
var cljs$core$async$state_machine__28557__auto____1 = (function (state_32376){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_32376);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e32394){var ex__28560__auto__ = e32394;
var statearr_32395_34479 = state_32376;
(statearr_32395_34479[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_32376[(4)]))){
var statearr_32396_34480 = state_32376;
(statearr_32396_34480[(1)] = cljs.core.first((state_32376[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34481 = state_32376;
state_32376 = G__34481;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$state_machine__28557__auto__ = function(state_32376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28557__auto____1.call(this,state_32376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28557__auto____0;
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28557__auto____1;
return cljs$core$async$state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_32400 = f__29074__auto__();
(statearr_32400[(6)] = c__29073__auto___34457);

return statearr_32400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32406 = arguments.length;
switch (G__32406) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29073__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_32488){
var state_val_32491 = (state_32488[(1)]);
if((state_val_32491 === (7))){
var inst_32482 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32512_34489 = state_32488__$1;
(statearr_32512_34489[(2)] = inst_32482);

(statearr_32512_34489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (20))){
var inst_32446 = (state_32488[(7)]);
var inst_32463 = (state_32488[(2)]);
var inst_32464 = cljs.core.next(inst_32446);
var inst_32426 = inst_32464;
var inst_32427 = null;
var inst_32428 = (0);
var inst_32429 = (0);
var state_32488__$1 = (function (){var statearr_32514 = state_32488;
(statearr_32514[(8)] = inst_32426);

(statearr_32514[(9)] = inst_32428);

(statearr_32514[(10)] = inst_32427);

(statearr_32514[(11)] = inst_32463);

(statearr_32514[(12)] = inst_32429);

return statearr_32514;
})();
var statearr_32516_34490 = state_32488__$1;
(statearr_32516_34490[(2)] = null);

(statearr_32516_34490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (1))){
var state_32488__$1 = state_32488;
var statearr_32520_34491 = state_32488__$1;
(statearr_32520_34491[(2)] = null);

(statearr_32520_34491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (4))){
var inst_32411 = (state_32488[(13)]);
var inst_32411__$1 = (state_32488[(2)]);
var inst_32412 = (inst_32411__$1 == null);
var state_32488__$1 = (function (){var statearr_32522 = state_32488;
(statearr_32522[(13)] = inst_32411__$1);

return statearr_32522;
})();
if(cljs.core.truth_(inst_32412)){
var statearr_32525_34492 = state_32488__$1;
(statearr_32525_34492[(1)] = (5));

} else {
var statearr_32526_34493 = state_32488__$1;
(statearr_32526_34493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (15))){
var state_32488__$1 = state_32488;
var statearr_32530_34494 = state_32488__$1;
(statearr_32530_34494[(2)] = null);

(statearr_32530_34494[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (21))){
var state_32488__$1 = state_32488;
var statearr_32531_34495 = state_32488__$1;
(statearr_32531_34495[(2)] = null);

(statearr_32531_34495[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (13))){
var inst_32426 = (state_32488[(8)]);
var inst_32428 = (state_32488[(9)]);
var inst_32427 = (state_32488[(10)]);
var inst_32429 = (state_32488[(12)]);
var inst_32440 = (state_32488[(2)]);
var inst_32443 = (inst_32429 + (1));
var tmp32527 = inst_32426;
var tmp32528 = inst_32428;
var tmp32529 = inst_32427;
var inst_32426__$1 = tmp32527;
var inst_32427__$1 = tmp32529;
var inst_32428__$1 = tmp32528;
var inst_32429__$1 = inst_32443;
var state_32488__$1 = (function (){var statearr_32613 = state_32488;
(statearr_32613[(8)] = inst_32426__$1);

(statearr_32613[(9)] = inst_32428__$1);

(statearr_32613[(14)] = inst_32440);

(statearr_32613[(10)] = inst_32427__$1);

(statearr_32613[(12)] = inst_32429__$1);

return statearr_32613;
})();
var statearr_32615_34496 = state_32488__$1;
(statearr_32615_34496[(2)] = null);

(statearr_32615_34496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (22))){
var state_32488__$1 = state_32488;
var statearr_32639_34497 = state_32488__$1;
(statearr_32639_34497[(2)] = null);

(statearr_32639_34497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (6))){
var inst_32411 = (state_32488[(13)]);
var inst_32424 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32411) : f.call(null,inst_32411));
var inst_32425 = cljs.core.seq(inst_32424);
var inst_32426 = inst_32425;
var inst_32427 = null;
var inst_32428 = (0);
var inst_32429 = (0);
var state_32488__$1 = (function (){var statearr_32647 = state_32488;
(statearr_32647[(8)] = inst_32426);

(statearr_32647[(9)] = inst_32428);

(statearr_32647[(10)] = inst_32427);

(statearr_32647[(12)] = inst_32429);

return statearr_32647;
})();
var statearr_32649_34498 = state_32488__$1;
(statearr_32649_34498[(2)] = null);

(statearr_32649_34498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (17))){
var inst_32446 = (state_32488[(7)]);
var inst_32456 = cljs.core.chunk_first(inst_32446);
var inst_32457 = cljs.core.chunk_rest(inst_32446);
var inst_32458 = cljs.core.count(inst_32456);
var inst_32426 = inst_32457;
var inst_32427 = inst_32456;
var inst_32428 = inst_32458;
var inst_32429 = (0);
var state_32488__$1 = (function (){var statearr_32653 = state_32488;
(statearr_32653[(8)] = inst_32426);

(statearr_32653[(9)] = inst_32428);

(statearr_32653[(10)] = inst_32427);

(statearr_32653[(12)] = inst_32429);

return statearr_32653;
})();
var statearr_32655_34499 = state_32488__$1;
(statearr_32655_34499[(2)] = null);

(statearr_32655_34499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (3))){
var inst_32484 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32488__$1,inst_32484);
} else {
if((state_val_32491 === (12))){
var inst_32472 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32660_34500 = state_32488__$1;
(statearr_32660_34500[(2)] = inst_32472);

(statearr_32660_34500[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (2))){
var state_32488__$1 = state_32488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32488__$1,(4),in$);
} else {
if((state_val_32491 === (23))){
var inst_32480 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32663_34501 = state_32488__$1;
(statearr_32663_34501[(2)] = inst_32480);

(statearr_32663_34501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (19))){
var inst_32467 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32665_34505 = state_32488__$1;
(statearr_32665_34505[(2)] = inst_32467);

(statearr_32665_34505[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (11))){
var inst_32426 = (state_32488[(8)]);
var inst_32446 = (state_32488[(7)]);
var inst_32446__$1 = cljs.core.seq(inst_32426);
var state_32488__$1 = (function (){var statearr_32666 = state_32488;
(statearr_32666[(7)] = inst_32446__$1);

return statearr_32666;
})();
if(inst_32446__$1){
var statearr_32669_34510 = state_32488__$1;
(statearr_32669_34510[(1)] = (14));

} else {
var statearr_32672_34511 = state_32488__$1;
(statearr_32672_34511[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (9))){
var inst_32474 = (state_32488[(2)]);
var inst_32475 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32488__$1 = (function (){var statearr_32676 = state_32488;
(statearr_32676[(15)] = inst_32474);

return statearr_32676;
})();
if(cljs.core.truth_(inst_32475)){
var statearr_32677_34515 = state_32488__$1;
(statearr_32677_34515[(1)] = (21));

} else {
var statearr_32679_34516 = state_32488__$1;
(statearr_32679_34516[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (5))){
var inst_32414 = cljs.core.async.close_BANG_(out);
var state_32488__$1 = state_32488;
var statearr_32680_34520 = state_32488__$1;
(statearr_32680_34520[(2)] = inst_32414);

(statearr_32680_34520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (14))){
var inst_32446 = (state_32488[(7)]);
var inst_32454 = cljs.core.chunked_seq_QMARK_(inst_32446);
var state_32488__$1 = state_32488;
if(inst_32454){
var statearr_32684_34523 = state_32488__$1;
(statearr_32684_34523[(1)] = (17));

} else {
var statearr_32685_34542 = state_32488__$1;
(statearr_32685_34542[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (16))){
var inst_32470 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32688_34543 = state_32488__$1;
(statearr_32688_34543[(2)] = inst_32470);

(statearr_32688_34543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (10))){
var inst_32427 = (state_32488[(10)]);
var inst_32429 = (state_32488[(12)]);
var inst_32438 = cljs.core._nth(inst_32427,inst_32429);
var state_32488__$1 = state_32488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32488__$1,(13),out,inst_32438);
} else {
if((state_val_32491 === (18))){
var inst_32446 = (state_32488[(7)]);
var inst_32461 = cljs.core.first(inst_32446);
var state_32488__$1 = state_32488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32488__$1,(20),out,inst_32461);
} else {
if((state_val_32491 === (8))){
var inst_32428 = (state_32488[(9)]);
var inst_32429 = (state_32488[(12)]);
var inst_32435 = (inst_32429 < inst_32428);
var inst_32436 = inst_32435;
var state_32488__$1 = state_32488;
if(cljs.core.truth_(inst_32436)){
var statearr_32697_34544 = state_32488__$1;
(statearr_32697_34544[(1)] = (10));

} else {
var statearr_32699_34545 = state_32488__$1;
(statearr_32699_34545[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28557__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28557__auto____0 = (function (){
var statearr_32705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32705[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28557__auto__);

(statearr_32705[(1)] = (1));

return statearr_32705;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28557__auto____1 = (function (state_32488){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_32488);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e32708){var ex__28560__auto__ = e32708;
var statearr_32710_34546 = state_32488;
(statearr_32710_34546[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_32488[(4)]))){
var statearr_32714_34547 = state_32488;
(statearr_32714_34547[(1)] = cljs.core.first((state_32488[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34548 = state_32488;
state_32488 = G__34548;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28557__auto__ = function(state_32488){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28557__auto____1.call(this,state_32488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28557__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28557__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_32721 = f__29074__auto__();
(statearr_32721[(6)] = c__29073__auto__);

return statearr_32721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));

return c__29073__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32735 = arguments.length;
switch (G__32735) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32754 = arguments.length;
switch (G__32754) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32761 = arguments.length;
switch (G__32761) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29073__auto___34574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_32804){
var state_val_32805 = (state_32804[(1)]);
if((state_val_32805 === (7))){
var inst_32799 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32810_34575 = state_32804__$1;
(statearr_32810_34575[(2)] = inst_32799);

(statearr_32810_34575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (1))){
var inst_32776 = null;
var state_32804__$1 = (function (){var statearr_32811 = state_32804;
(statearr_32811[(7)] = inst_32776);

return statearr_32811;
})();
var statearr_32812_34582 = state_32804__$1;
(statearr_32812_34582[(2)] = null);

(statearr_32812_34582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (4))){
var inst_32779 = (state_32804[(8)]);
var inst_32779__$1 = (state_32804[(2)]);
var inst_32785 = (inst_32779__$1 == null);
var inst_32786 = cljs.core.not(inst_32785);
var state_32804__$1 = (function (){var statearr_32813 = state_32804;
(statearr_32813[(8)] = inst_32779__$1);

return statearr_32813;
})();
if(inst_32786){
var statearr_32814_34583 = state_32804__$1;
(statearr_32814_34583[(1)] = (5));

} else {
var statearr_32815_34584 = state_32804__$1;
(statearr_32815_34584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (6))){
var state_32804__$1 = state_32804;
var statearr_32819_34585 = state_32804__$1;
(statearr_32819_34585[(2)] = null);

(statearr_32819_34585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (3))){
var inst_32801 = (state_32804[(2)]);
var inst_32802 = cljs.core.async.close_BANG_(out);
var state_32804__$1 = (function (){var statearr_32830 = state_32804;
(statearr_32830[(9)] = inst_32801);

return statearr_32830;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32804__$1,inst_32802);
} else {
if((state_val_32805 === (2))){
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32804__$1,(4),ch);
} else {
if((state_val_32805 === (11))){
var inst_32779 = (state_32804[(8)]);
var inst_32793 = (state_32804[(2)]);
var inst_32776 = inst_32779;
var state_32804__$1 = (function (){var statearr_32835 = state_32804;
(statearr_32835[(10)] = inst_32793);

(statearr_32835[(7)] = inst_32776);

return statearr_32835;
})();
var statearr_32836_34589 = state_32804__$1;
(statearr_32836_34589[(2)] = null);

(statearr_32836_34589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (9))){
var inst_32779 = (state_32804[(8)]);
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32804__$1,(11),out,inst_32779);
} else {
if((state_val_32805 === (5))){
var inst_32776 = (state_32804[(7)]);
var inst_32779 = (state_32804[(8)]);
var inst_32788 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32779,inst_32776);
var state_32804__$1 = state_32804;
if(inst_32788){
var statearr_32845_34590 = state_32804__$1;
(statearr_32845_34590[(1)] = (8));

} else {
var statearr_32846_34591 = state_32804__$1;
(statearr_32846_34591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (10))){
var inst_32796 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32849_34592 = state_32804__$1;
(statearr_32849_34592[(2)] = inst_32796);

(statearr_32849_34592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (8))){
var inst_32776 = (state_32804[(7)]);
var tmp32841 = inst_32776;
var inst_32776__$1 = tmp32841;
var state_32804__$1 = (function (){var statearr_32855 = state_32804;
(statearr_32855[(7)] = inst_32776__$1);

return statearr_32855;
})();
var statearr_32858_34593 = state_32804__$1;
(statearr_32858_34593[(2)] = null);

(statearr_32858_34593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28557__auto__ = null;
var cljs$core$async$state_machine__28557__auto____0 = (function (){
var statearr_32860 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32860[(0)] = cljs$core$async$state_machine__28557__auto__);

(statearr_32860[(1)] = (1));

return statearr_32860;
});
var cljs$core$async$state_machine__28557__auto____1 = (function (state_32804){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_32804);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e32861){var ex__28560__auto__ = e32861;
var statearr_32863_34600 = state_32804;
(statearr_32863_34600[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_32804[(4)]))){
var statearr_32865_34601 = state_32804;
(statearr_32865_34601[(1)] = cljs.core.first((state_32804[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34602 = state_32804;
state_32804 = G__34602;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$state_machine__28557__auto__ = function(state_32804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28557__auto____1.call(this,state_32804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28557__auto____0;
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28557__auto____1;
return cljs$core$async$state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_32870 = f__29074__auto__();
(statearr_32870[(6)] = c__29073__auto___34574);

return statearr_32870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32883 = arguments.length;
switch (G__32883) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29073__auto___34606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_33004){
var state_val_33005 = (state_33004[(1)]);
if((state_val_33005 === (7))){
var inst_32997 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
var statearr_33010_34607 = state_33004__$1;
(statearr_33010_34607[(2)] = inst_32997);

(statearr_33010_34607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (1))){
var inst_32900 = (new Array(n));
var inst_32901 = inst_32900;
var inst_32902 = (0);
var state_33004__$1 = (function (){var statearr_33012 = state_33004;
(statearr_33012[(7)] = inst_32902);

(statearr_33012[(8)] = inst_32901);

return statearr_33012;
})();
var statearr_33013_34608 = state_33004__$1;
(statearr_33013_34608[(2)] = null);

(statearr_33013_34608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (4))){
var inst_32964 = (state_33004[(9)]);
var inst_32964__$1 = (state_33004[(2)]);
var inst_32966 = (inst_32964__$1 == null);
var inst_32968 = cljs.core.not(inst_32966);
var state_33004__$1 = (function (){var statearr_33014 = state_33004;
(statearr_33014[(9)] = inst_32964__$1);

return statearr_33014;
})();
if(inst_32968){
var statearr_33015_34609 = state_33004__$1;
(statearr_33015_34609[(1)] = (5));

} else {
var statearr_33016_34610 = state_33004__$1;
(statearr_33016_34610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (15))){
var inst_32991 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
var statearr_33017_34611 = state_33004__$1;
(statearr_33017_34611[(2)] = inst_32991);

(statearr_33017_34611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (13))){
var state_33004__$1 = state_33004;
var statearr_33018_34612 = state_33004__$1;
(statearr_33018_34612[(2)] = null);

(statearr_33018_34612[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (6))){
var inst_32902 = (state_33004[(7)]);
var inst_32987 = (inst_32902 > (0));
var state_33004__$1 = state_33004;
if(cljs.core.truth_(inst_32987)){
var statearr_33019_34613 = state_33004__$1;
(statearr_33019_34613[(1)] = (12));

} else {
var statearr_33020_34614 = state_33004__$1;
(statearr_33020_34614[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (3))){
var inst_32999 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33004__$1,inst_32999);
} else {
if((state_val_33005 === (12))){
var inst_32901 = (state_33004[(8)]);
var inst_32989 = cljs.core.vec(inst_32901);
var state_33004__$1 = state_33004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33004__$1,(15),out,inst_32989);
} else {
if((state_val_33005 === (2))){
var state_33004__$1 = state_33004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33004__$1,(4),ch);
} else {
if((state_val_33005 === (11))){
var inst_32979 = (state_33004[(2)]);
var inst_32980 = (new Array(n));
var inst_32901 = inst_32980;
var inst_32902 = (0);
var state_33004__$1 = (function (){var statearr_33021 = state_33004;
(statearr_33021[(10)] = inst_32979);

(statearr_33021[(7)] = inst_32902);

(statearr_33021[(8)] = inst_32901);

return statearr_33021;
})();
var statearr_33022_34621 = state_33004__$1;
(statearr_33022_34621[(2)] = null);

(statearr_33022_34621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (9))){
var inst_32901 = (state_33004[(8)]);
var inst_32977 = cljs.core.vec(inst_32901);
var state_33004__$1 = state_33004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33004__$1,(11),out,inst_32977);
} else {
if((state_val_33005 === (5))){
var inst_32964 = (state_33004[(9)]);
var inst_32902 = (state_33004[(7)]);
var inst_32972 = (state_33004[(11)]);
var inst_32901 = (state_33004[(8)]);
var inst_32971 = (inst_32901[inst_32902] = inst_32964);
var inst_32972__$1 = (inst_32902 + (1));
var inst_32973 = (inst_32972__$1 < n);
var state_33004__$1 = (function (){var statearr_33066 = state_33004;
(statearr_33066[(12)] = inst_32971);

(statearr_33066[(11)] = inst_32972__$1);

return statearr_33066;
})();
if(cljs.core.truth_(inst_32973)){
var statearr_33067_34622 = state_33004__$1;
(statearr_33067_34622[(1)] = (8));

} else {
var statearr_33068_34623 = state_33004__$1;
(statearr_33068_34623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (14))){
var inst_32994 = (state_33004[(2)]);
var inst_32995 = cljs.core.async.close_BANG_(out);
var state_33004__$1 = (function (){var statearr_33070 = state_33004;
(statearr_33070[(13)] = inst_32994);

return statearr_33070;
})();
var statearr_33071_34624 = state_33004__$1;
(statearr_33071_34624[(2)] = inst_32995);

(statearr_33071_34624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (10))){
var inst_32983 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
var statearr_33073_34625 = state_33004__$1;
(statearr_33073_34625[(2)] = inst_32983);

(statearr_33073_34625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (8))){
var inst_32972 = (state_33004[(11)]);
var inst_32901 = (state_33004[(8)]);
var tmp33069 = inst_32901;
var inst_32901__$1 = tmp33069;
var inst_32902 = inst_32972;
var state_33004__$1 = (function (){var statearr_33075 = state_33004;
(statearr_33075[(7)] = inst_32902);

(statearr_33075[(8)] = inst_32901__$1);

return statearr_33075;
})();
var statearr_33078_34626 = state_33004__$1;
(statearr_33078_34626[(2)] = null);

(statearr_33078_34626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28557__auto__ = null;
var cljs$core$async$state_machine__28557__auto____0 = (function (){
var statearr_33081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33081[(0)] = cljs$core$async$state_machine__28557__auto__);

(statearr_33081[(1)] = (1));

return statearr_33081;
});
var cljs$core$async$state_machine__28557__auto____1 = (function (state_33004){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_33004);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e33084){var ex__28560__auto__ = e33084;
var statearr_33087_34627 = state_33004;
(statearr_33087_34627[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_33004[(4)]))){
var statearr_33093_34628 = state_33004;
(statearr_33093_34628[(1)] = cljs.core.first((state_33004[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34629 = state_33004;
state_33004 = G__34629;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$state_machine__28557__auto__ = function(state_33004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28557__auto____1.call(this,state_33004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28557__auto____0;
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28557__auto____1;
return cljs$core$async$state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_33099 = f__29074__auto__();
(statearr_33099[(6)] = c__29073__auto___34606);

return statearr_33099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33112 = arguments.length;
switch (G__33112) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29073__auto___34633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29074__auto__ = (function (){var switch__28556__auto__ = (function (state_33176){
var state_val_33177 = (state_33176[(1)]);
if((state_val_33177 === (7))){
var inst_33172 = (state_33176[(2)]);
var state_33176__$1 = state_33176;
var statearr_33179_34634 = state_33176__$1;
(statearr_33179_34634[(2)] = inst_33172);

(statearr_33179_34634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (1))){
var inst_33128 = [];
var inst_33129 = inst_33128;
var inst_33130 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33176__$1 = (function (){var statearr_33181 = state_33176;
(statearr_33181[(7)] = inst_33130);

(statearr_33181[(8)] = inst_33129);

return statearr_33181;
})();
var statearr_33182_34635 = state_33176__$1;
(statearr_33182_34635[(2)] = null);

(statearr_33182_34635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (4))){
var inst_33133 = (state_33176[(9)]);
var inst_33133__$1 = (state_33176[(2)]);
var inst_33134 = (inst_33133__$1 == null);
var inst_33135 = cljs.core.not(inst_33134);
var state_33176__$1 = (function (){var statearr_33183 = state_33176;
(statearr_33183[(9)] = inst_33133__$1);

return statearr_33183;
})();
if(inst_33135){
var statearr_33184_34636 = state_33176__$1;
(statearr_33184_34636[(1)] = (5));

} else {
var statearr_33185_34637 = state_33176__$1;
(statearr_33185_34637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (15))){
var inst_33166 = (state_33176[(2)]);
var state_33176__$1 = state_33176;
var statearr_33190_34638 = state_33176__$1;
(statearr_33190_34638[(2)] = inst_33166);

(statearr_33190_34638[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (13))){
var state_33176__$1 = state_33176;
var statearr_33197_34640 = state_33176__$1;
(statearr_33197_34640[(2)] = null);

(statearr_33197_34640[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (6))){
var inst_33129 = (state_33176[(8)]);
var inst_33161 = inst_33129.length;
var inst_33162 = (inst_33161 > (0));
var state_33176__$1 = state_33176;
if(cljs.core.truth_(inst_33162)){
var statearr_33209_34642 = state_33176__$1;
(statearr_33209_34642[(1)] = (12));

} else {
var statearr_33210_34643 = state_33176__$1;
(statearr_33210_34643[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (3))){
var inst_33174 = (state_33176[(2)]);
var state_33176__$1 = state_33176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33176__$1,inst_33174);
} else {
if((state_val_33177 === (12))){
var inst_33129 = (state_33176[(8)]);
var inst_33164 = cljs.core.vec(inst_33129);
var state_33176__$1 = state_33176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33176__$1,(15),out,inst_33164);
} else {
if((state_val_33177 === (2))){
var state_33176__$1 = state_33176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33176__$1,(4),ch);
} else {
if((state_val_33177 === (11))){
var inst_33133 = (state_33176[(9)]);
var inst_33138 = (state_33176[(10)]);
var inst_33151 = (state_33176[(2)]);
var inst_33153 = [];
var inst_33154 = inst_33153.push(inst_33133);
var inst_33129 = inst_33153;
var inst_33130 = inst_33138;
var state_33176__$1 = (function (){var statearr_33253 = state_33176;
(statearr_33253[(11)] = inst_33154);

(statearr_33253[(12)] = inst_33151);

(statearr_33253[(7)] = inst_33130);

(statearr_33253[(8)] = inst_33129);

return statearr_33253;
})();
var statearr_33255_34647 = state_33176__$1;
(statearr_33255_34647[(2)] = null);

(statearr_33255_34647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (9))){
var inst_33129 = (state_33176[(8)]);
var inst_33148 = cljs.core.vec(inst_33129);
var state_33176__$1 = state_33176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33176__$1,(11),out,inst_33148);
} else {
if((state_val_33177 === (5))){
var inst_33133 = (state_33176[(9)]);
var inst_33138 = (state_33176[(10)]);
var inst_33130 = (state_33176[(7)]);
var inst_33138__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33133) : f.call(null,inst_33133));
var inst_33140 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33138__$1,inst_33130);
var inst_33141 = cljs.core.keyword_identical_QMARK_(inst_33130,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33142 = ((inst_33140) || (inst_33141));
var state_33176__$1 = (function (){var statearr_33266 = state_33176;
(statearr_33266[(10)] = inst_33138__$1);

return statearr_33266;
})();
if(cljs.core.truth_(inst_33142)){
var statearr_33267_34651 = state_33176__$1;
(statearr_33267_34651[(1)] = (8));

} else {
var statearr_33269_34655 = state_33176__$1;
(statearr_33269_34655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (14))){
var inst_33169 = (state_33176[(2)]);
var inst_33170 = cljs.core.async.close_BANG_(out);
var state_33176__$1 = (function (){var statearr_33275 = state_33176;
(statearr_33275[(13)] = inst_33169);

return statearr_33275;
})();
var statearr_33278_34660 = state_33176__$1;
(statearr_33278_34660[(2)] = inst_33170);

(statearr_33278_34660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (10))){
var inst_33157 = (state_33176[(2)]);
var state_33176__$1 = state_33176;
var statearr_33283_34661 = state_33176__$1;
(statearr_33283_34661[(2)] = inst_33157);

(statearr_33283_34661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (8))){
var inst_33133 = (state_33176[(9)]);
var inst_33138 = (state_33176[(10)]);
var inst_33129 = (state_33176[(8)]);
var inst_33144 = inst_33129.push(inst_33133);
var tmp33271 = inst_33129;
var inst_33129__$1 = tmp33271;
var inst_33130 = inst_33138;
var state_33176__$1 = (function (){var statearr_33294 = state_33176;
(statearr_33294[(14)] = inst_33144);

(statearr_33294[(7)] = inst_33130);

(statearr_33294[(8)] = inst_33129__$1);

return statearr_33294;
})();
var statearr_33299_34666 = state_33176__$1;
(statearr_33299_34666[(2)] = null);

(statearr_33299_34666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28557__auto__ = null;
var cljs$core$async$state_machine__28557__auto____0 = (function (){
var statearr_33311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33311[(0)] = cljs$core$async$state_machine__28557__auto__);

(statearr_33311[(1)] = (1));

return statearr_33311;
});
var cljs$core$async$state_machine__28557__auto____1 = (function (state_33176){
while(true){
var ret_value__28558__auto__ = (function (){try{while(true){
var result__28559__auto__ = switch__28556__auto__(state_33176);
if(cljs.core.keyword_identical_QMARK_(result__28559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28559__auto__;
}
break;
}
}catch (e33315){var ex__28560__auto__ = e33315;
var statearr_33317_34672 = state_33176;
(statearr_33317_34672[(2)] = ex__28560__auto__);


if(cljs.core.seq((state_33176[(4)]))){
var statearr_33322_34673 = state_33176;
(statearr_33322_34673[(1)] = cljs.core.first((state_33176[(4)])));

} else {
throw ex__28560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34674 = state_33176;
state_33176 = G__34674;
continue;
} else {
return ret_value__28558__auto__;
}
break;
}
});
cljs$core$async$state_machine__28557__auto__ = function(state_33176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28557__auto____1.call(this,state_33176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28557__auto____0;
cljs$core$async$state_machine__28557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28557__auto____1;
return cljs$core$async$state_machine__28557__auto__;
})()
})();
var state__29075__auto__ = (function (){var statearr_33331 = f__29074__auto__();
(statearr_33331[(6)] = c__29073__auto___34633);

return statearr_33331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29075__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
