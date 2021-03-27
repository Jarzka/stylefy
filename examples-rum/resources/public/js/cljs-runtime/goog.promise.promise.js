goog.provide("goog.Promise");
goog.require("goog.Thenable");
goog.require("goog.asserts");
goog.require("goog.async.FreeList");
goog.require("goog.async.run");
goog.require("goog.async.throwException");
goog.require("goog.debug.Error");
goog.require("goog.promise.Resolver");
/**
 * @final
 * @struct
 * @constructor
 * @implements {goog.Thenable<TYPE>}
 * @param {function(this:RESOLVER_CONTEXT,function((TYPE|IThenable<TYPE>|Thenable)=),function(*=)):void} resolver
 * @param {RESOLVER_CONTEXT=} opt_context
 * @template TYPE
 * @template RESOLVER_CONTEXT
 */
goog.Promise = function(resolver, opt_context) {
  /** @private @type {goog.Promise.State_} */ this.state_ = goog.Promise.State_.PENDING;
  /** @private @type {*} */ this.result_ = undefined;
  /** @private @type {?goog.Promise} */ this.parent_ = null;
  /** @private @type {?goog.Promise.CallbackEntry_} */ this.callbackEntries_ = null;
  /** @private @type {?goog.Promise.CallbackEntry_} */ this.callbackEntriesTail_ = null;
  /** @private @type {boolean} */ this.executing_ = false;
  if (goog.Promise.UNHANDLED_REJECTION_DELAY > 0) {
    /** @private @type {number} */ this.unhandledRejectionId_ = 0;
  } else {
    if (goog.Promise.UNHANDLED_REJECTION_DELAY == 0) {
      /** @private @type {boolean} */ this.hadUnhandledRejection_ = false;
    }
  }
  if (goog.Promise.LONG_STACK_TRACES) {
    /** @private @type {!Array<string>} */ this.stack_ = [];
    this.addStackTrace_(new Error("created"));
    /** @private @type {number} */ this.currentStep_ = 0;
  }
  if (resolver != goog.nullFunction) {
    try {
      var self = this;
      resolver.call(opt_context, function(value) {
        self.resolve_(goog.Promise.State_.FULFILLED, value);
      }, function(reason) {
        if (goog.DEBUG && !(reason instanceof goog.Promise.CancellationError)) {
          try {
            if (reason instanceof Error) {
              throw reason;
            } else {
              throw new Error("Promise rejected.");
            }
          } catch (e) {
          }
        }
        self.resolve_(goog.Promise.State_.REJECTED, reason);
      });
    } catch (e) {
      this.resolve_(goog.Promise.State_.REJECTED, e);
    }
  }
};
/** @define {boolean} */ goog.Promise.LONG_STACK_TRACES = goog.define("goog.Promise.LONG_STACK_TRACES", false);
/** @define {number} */ goog.Promise.UNHANDLED_REJECTION_DELAY = goog.define("goog.Promise.UNHANDLED_REJECTION_DELAY", 0);
/** @private @enum {number} */ goog.Promise.State_ = {PENDING:0, BLOCKED:1, FULFILLED:2, REJECTED:3};
/** @private @final @struct @constructor */ goog.Promise.CallbackEntry_ = function() {
  /** @type {?goog.Promise} */ this.child = null;
  /** @type {?Function} */ this.onFulfilled = null;
  /** @type {?Function} */ this.onRejected = null;
  /** @type {?} */ this.context = null;
  /** @type {?goog.Promise.CallbackEntry_} */ this.next = null;
  /** @type {boolean} */ this.always = false;
};
goog.Promise.CallbackEntry_.prototype.reset = function() {
  this.child = null;
  this.onFulfilled = null;
  this.onRejected = null;
  this.context = null;
  this.always = false;
};
/** @define {number} */ goog.Promise.DEFAULT_MAX_UNUSED = goog.define("goog.Promise.DEFAULT_MAX_UNUSED", 100);
/** @private @const @type {goog.async.FreeList<!goog.Promise.CallbackEntry_>} */ goog.Promise.freelist_ = new goog.async.FreeList(function() {
  return new goog.Promise.CallbackEntry_;
}, function(item) {
  item.reset();
}, goog.Promise.DEFAULT_MAX_UNUSED);
/**
 * @private
 * @param {Function} onFulfilled
 * @param {Function} onRejected
 * @param {?} context
 * @return {!goog.Promise.CallbackEntry_}
 */
goog.Promise.getCallbackEntry_ = function(onFulfilled, onRejected, context) {
  var entry = goog.Promise.freelist_.get();
  entry.onFulfilled = onFulfilled;
  entry.onRejected = onRejected;
  entry.context = context;
  return entry;
};
/**
 * @private
 * @param {!goog.Promise.CallbackEntry_} entry
 */
goog.Promise.returnEntry_ = function(entry) {
  goog.Promise.freelist_.put(entry);
};
/**
 * @param {VALUE=} opt_value
 * @return {RESULT}
 * @template VALUE
 * @template RESULT := type("goog.Promise",cond(isUnknown(VALUE),unknown(),mapunion(VALUE,V=>cond(isTemplatized(V)&&sub(rawTypeOf(V),"IThenable"),templateTypeOf(V,0),cond(sub(V,"Thenable"),unknown(),V))))) =:
 */
goog.Promise.resolve = function(opt_value) {
  if (opt_value instanceof goog.Promise) {
    return opt_value;
  }
  var promise = new goog.Promise(goog.nullFunction);
  promise.resolve_(goog.Promise.State_.FULFILLED, opt_value);
  return promise;
};
/**
 * @param {*=} opt_reason
 * @return {!goog.Promise}
 */
goog.Promise.reject = function(opt_reason) {
  return new goog.Promise(function(resolve, reject) {
    reject(opt_reason);
  });
};
/**
 * @private
 * @param {?(goog.Thenable<TYPE>|Thenable|TYPE)} value
 * @param {function(TYPE):?} onFulfilled
 * @param {function(*):*} onRejected
 * @template TYPE
 */
goog.Promise.resolveThen_ = function(value, onFulfilled, onRejected) {
  var isThenable = goog.Promise.maybeThen_(value, onFulfilled, onRejected, null);
  if (!isThenable) {
    goog.async.run(goog.partial(onFulfilled, value));
  }
};
/**
 * @param {!Array<?(goog.Promise<TYPE>|goog.Thenable<TYPE>|Thenable|*)>} promises
 * @return {!goog.Promise<TYPE>}
 * @template TYPE
 */
goog.Promise.race = function(promises) {
  return new goog.Promise(function(resolve, reject) {
    if (!promises.length) {
      resolve(undefined);
    }
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];
      goog.Promise.resolveThen_(promise, resolve, reject);
    }
  });
};
/**
 * @param {!Array<?(goog.Promise<TYPE>|goog.Thenable<TYPE>|Thenable|*)>} promises
 * @return {!goog.Promise<!Array<TYPE>>}
 * @template TYPE
 */
goog.Promise.all = function(promises) {
  return new goog.Promise(function(resolve, reject) {
    var toFulfill = promises.length;
    var values = [];
    if (!toFulfill) {
      resolve(values);
      return;
    }
    var onFulfill = function(index, value) {
      toFulfill--;
      values[index] = value;
      if (toFulfill == 0) {
        resolve(values);
      }
    };
    var onReject = function(reason) {
      reject(reason);
    };
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];
      goog.Promise.resolveThen_(promise, goog.partial(onFulfill, i), onReject);
    }
  });
};
/**
 * @param {!Array<?(goog.Promise<TYPE>|goog.Thenable<TYPE>|Thenable|*)>} promises
 * @return {!goog.Promise<!Array<{fulfilled:boolean,value:(TYPE|undefined),reason:(*|undefined)}>>}
 * @template TYPE
 */
goog.Promise.allSettled = function(promises) {
  return new goog.Promise(function(resolve, reject) {
    var toSettle = promises.length;
    var results = [];
    if (!toSettle) {
      resolve(results);
      return;
    }
    var onSettled = function(index, fulfilled, result) {
      toSettle--;
      results[index] = fulfilled ? {fulfilled:true, value:result} : {fulfilled:false, reason:result};
      if (toSettle == 0) {
        resolve(results);
      }
    };
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];
      goog.Promise.resolveThen_(promise, goog.partial(onSettled, i, true), goog.partial(onSettled, i, false));
    }
  });
};
/**
 * @param {!Array<?(goog.Promise<TYPE>|goog.Thenable<TYPE>|Thenable|*)>} promises
 * @return {!goog.Promise<TYPE>}
 * @template TYPE
 */
goog.Promise.firstFulfilled = function(promises) {
  return new goog.Promise(function(resolve, reject) {
    var toReject = promises.length;
    var reasons = [];
    if (!toReject) {
      resolve(undefined);
      return;
    }
    var onFulfill = function(value) {
      resolve(value);
    };
    var onReject = function(index, reason) {
      toReject--;
      reasons[index] = reason;
      if (toReject == 0) {
        reject(reasons);
      }
    };
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];
      goog.Promise.resolveThen_(promise, onFulfill, goog.partial(onReject, i));
    }
  });
};
/**
 * @return {!goog.promise.Resolver<TYPE>}
 * @template TYPE
 */
goog.Promise.withResolver = function() {
  var resolve, reject;
  var promise = new goog.Promise(function(rs, rj) {
    resolve = rs;
    reject = rj;
  });
  return new goog.Promise.Resolver_(promise, resolve, reject);
};
/** @override */ goog.Promise.prototype.then = function(opt_onFulfilled, opt_onRejected, opt_context) {
  if (opt_onFulfilled != null) {
    goog.asserts.assertFunction(opt_onFulfilled, "opt_onFulfilled should be a function.");
  }
  if (opt_onRejected != null) {
    goog.asserts.assertFunction(opt_onRejected, "opt_onRejected should be a function. Did you pass opt_context " + "as the second argument instead of the third?");
  }
  if (goog.Promise.LONG_STACK_TRACES) {
    this.addStackTrace_(new Error("then"));
  }
  return this.addChildPromise_(goog.isFunction(opt_onFulfilled) ? opt_onFulfilled : null, goog.isFunction(opt_onRejected) ? opt_onRejected : null, opt_context);
};
goog.Thenable.addImplementation(goog.Promise);
/**
 * @package
 * @param {?function(this:THIS,TYPE):?=} opt_onFulfilled
 * @param {?function(this:THIS,*):*=} opt_onRejected
 * @param {THIS=} opt_context
 * @template THIS
 */
goog.Promise.prototype.thenVoid = function(opt_onFulfilled, opt_onRejected, opt_context) {
  if (opt_onFulfilled != null) {
    goog.asserts.assertFunction(opt_onFulfilled, "opt_onFulfilled should be a function.");
  }
  if (opt_onRejected != null) {
    goog.asserts.assertFunction(opt_onRejected, "opt_onRejected should be a function. Did you pass opt_context " + "as the second argument instead of the third?");
  }
  if (goog.Promise.LONG_STACK_TRACES) {
    this.addStackTrace_(new Error("then"));
  }
  this.addCallbackEntry_(goog.Promise.getCallbackEntry_(opt_onFulfilled || goog.nullFunction, opt_onRejected || null, opt_context));
};
/**
 * @param {function(this:THIS):void} onSettled
 * @param {THIS=} opt_context
 * @return {!goog.Promise<TYPE>}
 * @template THIS
 */
goog.Promise.prototype.thenAlways = function(onSettled, opt_context) {
  if (goog.Promise.LONG_STACK_TRACES) {
    this.addStackTrace_(new Error("thenAlways"));
  }
  var entry = goog.Promise.getCallbackEntry_(onSettled, onSettled, opt_context);
  entry.always = true;
  this.addCallbackEntry_(entry);
  return this;
};
/**
 * @param {function(this:THIS,*):*} onRejected
 * @param {THIS=} opt_context
 * @return {!goog.Promise}
 * @template THIS
 */
goog.Promise.prototype.thenCatch = function(onRejected, opt_context) {
  if (goog.Promise.LONG_STACK_TRACES) {
    this.addStackTrace_(new Error("thenCatch"));
  }
  return this.addChildPromise_(null, onRejected, opt_context);
};
/**
 * @param {string=} opt_message
 */
goog.Promise.prototype.cancel = function(opt_message) {
  if (this.state_ == goog.Promise.State_.PENDING) {
    var err = new goog.Promise.CancellationError(opt_message);
    goog.async.run(function() {
      this.cancelInternal_(err);
    }, this);
  }
};
/**
 * @private
 * @param {!Error} err
 */
goog.Promise.prototype.cancelInternal_ = function(err) {
  if (this.state_ == goog.Promise.State_.PENDING) {
    if (this.parent_) {
      this.parent_.cancelChild_(this, err);
      this.parent_ = null;
    } else {
      this.resolve_(goog.Promise.State_.REJECTED, err);
    }
  }
};
/**
 * @private
 * @param {!goog.Promise} childPromise
 * @param {!Error} err
 */
goog.Promise.prototype.cancelChild_ = function(childPromise, err) {
  if (!this.callbackEntries_) {
    return;
  }
  var childCount = 0;
  var childEntry = null;
  var beforeChildEntry = null;
  for (var entry = this.callbackEntries_; entry; entry = entry.next) {
    if (!entry.always) {
      childCount++;
      if (entry.child == childPromise) {
        childEntry = entry;
      }
      if (childEntry && childCount > 1) {
        break;
      }
    }
    if (!childEntry) {
      beforeChildEntry = entry;
    }
  }
  if (childEntry) {
    if (this.state_ == goog.Promise.State_.PENDING && childCount == 1) {
      this.cancelInternal_(err);
    } else {
      if (beforeChildEntry) {
        this.removeEntryAfter_(beforeChildEntry);
      } else {
        this.popEntry_();
      }
      this.executeCallback_(childEntry, goog.Promise.State_.REJECTED, err);
    }
  }
};
/**
 * @private
 * @param {goog.Promise.CallbackEntry_} callbackEntry
 */
goog.Promise.prototype.addCallbackEntry_ = function(callbackEntry) {
  if (!this.hasEntry_() && (this.state_ == goog.Promise.State_.FULFILLED || this.state_ == goog.Promise.State_.REJECTED)) {
    this.scheduleCallbacks_();
  }
  this.queueEntry_(callbackEntry);
};
/**
 * @private
 * @param {?function(this:THIS,TYPE):(RESULT|goog.Promise<RESULT>|Thenable)} onFulfilled
 * @param {?function(this:THIS,*):*} onRejected
 * @param {THIS=} opt_context
 * @return {!goog.Promise}
 * @template RESULT
 * @template THIS
 */
goog.Promise.prototype.addChildPromise_ = function(onFulfilled, onRejected, opt_context) {
  /** @type {goog.Promise.CallbackEntry_} */ var callbackEntry = goog.Promise.getCallbackEntry_(null, null, null);
  callbackEntry.child = new goog.Promise(function(resolve, reject) {
    callbackEntry.onFulfilled = onFulfilled ? function(value) {
      try {
        var result = onFulfilled.call(opt_context, value);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    } : resolve;
    callbackEntry.onRejected = onRejected ? function(reason) {
      try {
        var result = onRejected.call(opt_context, reason);
        if (result === undefined && reason instanceof goog.Promise.CancellationError) {
          reject(reason);
        } else {
          resolve(result);
        }
      } catch (err) {
        reject(err);
      }
    } : reject;
  });
  callbackEntry.child.parent_ = this;
  this.addCallbackEntry_(callbackEntry);
  return callbackEntry.child;
};
/**
 * @private
 * @param {TYPE} value
 */
goog.Promise.prototype.unblockAndFulfill_ = function(value) {
  goog.asserts.assert(this.state_ == goog.Promise.State_.BLOCKED);
  this.state_ = goog.Promise.State_.PENDING;
  this.resolve_(goog.Promise.State_.FULFILLED, value);
};
/**
 * @private
 * @param {*} reason
 */
goog.Promise.prototype.unblockAndReject_ = function(reason) {
  goog.asserts.assert(this.state_ == goog.Promise.State_.BLOCKED);
  this.state_ = goog.Promise.State_.PENDING;
  this.resolve_(goog.Promise.State_.REJECTED, reason);
};
/**
 * @private
 * @param {goog.Promise.State_} state
 * @param {*} x
 */
goog.Promise.prototype.resolve_ = function(state, x) {
  if (this.state_ != goog.Promise.State_.PENDING) {
    return;
  }
  if (this === x) {
    state = goog.Promise.State_.REJECTED;
    x = new TypeError("Promise cannot resolve to itself");
  }
  this.state_ = goog.Promise.State_.BLOCKED;
  var isThenable = goog.Promise.maybeThen_(x, this.unblockAndFulfill_, this.unblockAndReject_, this);
  if (isThenable) {
    return;
  }
  this.result_ = x;
  this.state_ = state;
  this.parent_ = null;
  this.scheduleCallbacks_();
  if (state == goog.Promise.State_.REJECTED && !(x instanceof goog.Promise.CancellationError)) {
    goog.Promise.addUnhandledRejection_(this, x);
  }
};
/**
 * @private
 * @param {?} value
 * @param {!Function} onFulfilled
 * @param {!Function} onRejected
 * @param {?} context
 * @return {boolean}
 */
goog.Promise.maybeThen_ = function(value, onFulfilled, onRejected, context) {
  if (value instanceof goog.Promise) {
    value.thenVoid(onFulfilled, onRejected, context);
    return true;
  } else {
    if (goog.Thenable.isImplementedBy(value)) {
      value = /** @type {!goog.Thenable} */ (value);
      value.then(onFulfilled, onRejected, context);
      return true;
    } else {
      if (goog.isObject(value)) {
        try {
          var then = value["then"];
          if (goog.isFunction(then)) {
            goog.Promise.tryThen_(value, then, onFulfilled, onRejected, context);
            return true;
          }
        } catch (e) {
          onRejected.call(context, e);
          return true;
        }
      }
    }
  }
  return false;
};
/**
 * @private
 * @param {Thenable} thenable
 * @param {!Function} then
 * @param {!Function} onFulfilled
 * @param {!Function} onRejected
 * @param {*} context
 */
goog.Promise.tryThen_ = function(thenable, then, onFulfilled, onRejected, context) {
  var called = false;
  var resolve = function(value) {
    if (!called) {
      called = true;
      onFulfilled.call(context, value);
    }
  };
  var reject = function(reason) {
    if (!called) {
      called = true;
      onRejected.call(context, reason);
    }
  };
  try {
    then.call(thenable, resolve, reject);
  } catch (e) {
    reject(e);
  }
};
/** @private */ goog.Promise.prototype.scheduleCallbacks_ = function() {
  if (!this.executing_) {
    this.executing_ = true;
    goog.async.run(this.executeCallbacks_, this);
  }
};
/**
 * @private
 * @return {boolean}
 */
goog.Promise.prototype.hasEntry_ = function() {
  return !!this.callbackEntries_;
};
/**
 * @private
 * @param {goog.Promise.CallbackEntry_} entry
 */
goog.Promise.prototype.queueEntry_ = function(entry) {
  goog.asserts.assert(entry.onFulfilled != null);
  if (this.callbackEntriesTail_) {
    this.callbackEntriesTail_.next = entry;
    this.callbackEntriesTail_ = entry;
  } else {
    this.callbackEntries_ = entry;
    this.callbackEntriesTail_ = entry;
  }
};
/**
 * @private
 * @return {goog.Promise.CallbackEntry_}
 */
goog.Promise.prototype.popEntry_ = function() {
  var entry = null;
  if (this.callbackEntries_) {
    entry = this.callbackEntries_;
    this.callbackEntries_ = entry.next;
    entry.next = null;
  }
  if (!this.callbackEntries_) {
    this.callbackEntriesTail_ = null;
  }
  if (entry != null) {
    goog.asserts.assert(entry.onFulfilled != null);
  }
  return entry;
};
/**
 * @private
 * @param {goog.Promise.CallbackEntry_} previous
 */
goog.Promise.prototype.removeEntryAfter_ = function(previous) {
  goog.asserts.assert(this.callbackEntries_);
  goog.asserts.assert(previous != null);
  if (previous.next == this.callbackEntriesTail_) {
    this.callbackEntriesTail_ = previous;
  }
  previous.next = previous.next.next;
};
/** @private */ goog.Promise.prototype.executeCallbacks_ = function() {
  var entry = null;
  while (entry = this.popEntry_()) {
    if (goog.Promise.LONG_STACK_TRACES) {
      this.currentStep_++;
    }
    this.executeCallback_(entry, this.state_, this.result_);
  }
  this.executing_ = false;
};
/**
 * @private
 * @param {!goog.Promise.CallbackEntry_} callbackEntry
 * @param {goog.Promise.State_} state
 * @param {*} result
 */
goog.Promise.prototype.executeCallback_ = function(callbackEntry, state, result) {
  if (state == goog.Promise.State_.REJECTED && callbackEntry.onRejected && !callbackEntry.always) {
    this.removeUnhandledRejection_();
  }
  if (callbackEntry.child) {
    callbackEntry.child.parent_ = null;
    goog.Promise.invokeCallback_(callbackEntry, state, result);
  } else {
    try {
      callbackEntry.always ? callbackEntry.onFulfilled.call(callbackEntry.context) : goog.Promise.invokeCallback_(callbackEntry, state, result);
    } catch (err) {
      goog.Promise.handleRejection_.call(null, err);
    }
  }
  goog.Promise.returnEntry_(callbackEntry);
};
/**
 * @private
 * @param {!goog.Promise.CallbackEntry_} callbackEntry
 * @param {goog.Promise.State_} state
 * @param {*} result
 */
goog.Promise.invokeCallback_ = function(callbackEntry, state, result) {
  if (state == goog.Promise.State_.FULFILLED) {
    callbackEntry.onFulfilled.call(callbackEntry.context, result);
  } else {
    if (callbackEntry.onRejected) {
      callbackEntry.onRejected.call(callbackEntry.context, result);
    }
  }
};
/**
 * @private
 * @param {!Error} err
 */
goog.Promise.prototype.addStackTrace_ = function(err) {
  if (goog.Promise.LONG_STACK_TRACES && typeof err.stack === "string") {
    var trace = err.stack.split("\n", 4)[3];
    var message = err.message;
    message += Array(11 - message.length).join(" ");
    this.stack_.push(message + trace);
  }
};
/**
 * @private
 * @param {?} err
 */
goog.Promise.prototype.appendLongStack_ = function(err) {
  if (goog.Promise.LONG_STACK_TRACES && err && typeof err.stack === "string" && this.stack_.length) {
    var longTrace = ["Promise trace:"];
    for (var promise = this; promise; promise = promise.parent_) {
      for (var i = this.currentStep_; i >= 0; i--) {
        longTrace.push(promise.stack_[i]);
      }
      longTrace.push("Value: " + "[" + (promise.state_ == goog.Promise.State_.REJECTED ? "REJECTED" : "FULFILLED") + "] " + "\x3c" + String(promise.result_) + "\x3e");
    }
    err.stack += "\n\n" + longTrace.join("\n");
  }
};
/** @private */ goog.Promise.prototype.removeUnhandledRejection_ = function() {
  if (goog.Promise.UNHANDLED_REJECTION_DELAY > 0) {
    for (var p = this; p && p.unhandledRejectionId_; p = p.parent_) {
      goog.global.clearTimeout(p.unhandledRejectionId_);
      p.unhandledRejectionId_ = 0;
    }
  } else {
    if (goog.Promise.UNHANDLED_REJECTION_DELAY == 0) {
      for (var p = this; p && p.hadUnhandledRejection_; p = p.parent_) {
        p.hadUnhandledRejection_ = false;
      }
    }
  }
};
/**
 * @private
 * @param {!goog.Promise} promise
 * @param {*} reason
 */
goog.Promise.addUnhandledRejection_ = function(promise, reason) {
  if (goog.Promise.UNHANDLED_REJECTION_DELAY > 0) {
    promise.unhandledRejectionId_ = goog.global.setTimeout(function() {
      promise.appendLongStack_(reason);
      goog.Promise.handleRejection_.call(null, reason);
    }, goog.Promise.UNHANDLED_REJECTION_DELAY);
  } else {
    if (goog.Promise.UNHANDLED_REJECTION_DELAY == 0) {
      promise.hadUnhandledRejection_ = true;
      goog.async.run(function() {
        if (promise.hadUnhandledRejection_) {
          promise.appendLongStack_(reason);
          goog.Promise.handleRejection_.call(null, reason);
        }
      });
    }
  }
};
/** @private @type {function(*)} */ goog.Promise.handleRejection_ = goog.async.throwException;
/**
 * @param {function(*)} handler
 */
goog.Promise.setUnhandledRejectionHandler = function(handler) {
  goog.Promise.handleRejection_ = handler;
};
/**
 * @final
 * @constructor
 * @extends {goog.debug.Error}
 * @param {string=} opt_message
 */
goog.Promise.CancellationError = function(opt_message) {
  goog.Promise.CancellationError.base(this, "constructor", opt_message);
};
goog.inherits(goog.Promise.CancellationError, goog.debug.Error);
/** @override */ goog.Promise.CancellationError.prototype.name = "cancel";
/**
 * @private
 * @final
 * @struct
 * @constructor
 * @implements {goog.promise.Resolver<TYPE>}
 * @param {!goog.Promise<TYPE>} promise
 * @param {function((TYPE|goog.Promise<TYPE>|Thenable)=)} resolve
 * @param {function(*=):void} reject
 * @template TYPE
 */
goog.Promise.Resolver_ = function(promise, resolve, reject) {
  /** @const */ this.promise = promise;
  /** @const */ this.resolve = resolve;
  /** @const */ this.reject = reject;
};

//# sourceMappingURL=goog.promise.promise.js.map
