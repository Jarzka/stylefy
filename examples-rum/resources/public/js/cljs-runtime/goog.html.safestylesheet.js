goog.provide("goog.html.SafeStyleSheet");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.html.SafeStyle");
goog.require("goog.object");
goog.require("goog.string.Const");
goog.require("goog.string.TypedString");
goog.require("goog.string.internal");
/**
 * @final
 * @struct
 * @constructor
 * @implements {goog.string.TypedString}
 */
goog.html.SafeStyleSheet = function() {
  /** @private @type {string} */ this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "";
  /** @private @const @type {!Object} */ this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
};
/** @const @override */ goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = true;
/** @private @const @type {!Object} */ goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
/**
 * @param {string} selector
 * @param {(!goog.html.SafeStyle.PropertyMap|!goog.html.SafeStyle)} style
 * @return {!goog.html.SafeStyleSheet}
 * @throws {Error}
 */
goog.html.SafeStyleSheet.createRule = function(selector, style) {
  if (goog.string.internal.contains(selector, "\x3c")) {
    throw new Error("Selector does not allow '\x3c', got: " + selector);
  }
  var selectorToCheck = selector.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
  if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(selectorToCheck)) {
    throw new Error("Selector allows only [-_a-zA-Z0-9#.:* ,\x3e+~[\\]()\x3d^$|] and " + "strings, got: " + selector);
  }
  if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(selectorToCheck)) {
    throw new Error("() and [] in selector must be balanced, got: " + selector);
  }
  if (!(style instanceof goog.html.SafeStyle)) {
    style = goog.html.SafeStyle.create(style);
  }
  var styleSheet = selector + "{" + goog.html.SafeStyle.unwrap(style).replace(/</g, "\\3C ") + "}";
  return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet);
};
/**
 * @private
 * @param {string} s
 * @return {boolean}
 */
goog.html.SafeStyleSheet.hasBalancedBrackets_ = function(s) {
  var brackets = {"(":")", "[":"]"};
  var expectedBrackets = [];
  for (var i = 0; i < s.length; i++) {
    var ch = s[i];
    if (brackets[ch]) {
      expectedBrackets.push(brackets[ch]);
    } else {
      if (goog.object.contains(brackets, ch)) {
        if (expectedBrackets.pop() != ch) {
          return false;
        }
      }
    }
  }
  return expectedBrackets.length == 0;
};
/**
 * @param {...(!goog.html.SafeStyleSheet|!Array<!goog.html.SafeStyleSheet>)} var_args
 * @return {!goog.html.SafeStyleSheet}
 */
goog.html.SafeStyleSheet.concat = function(var_args) {
  var result = "";
  /**
   * @param {(!goog.html.SafeStyleSheet|!Array<!goog.html.SafeStyleSheet>)} argument
   */
  var addArgument = function(argument) {
    if (goog.isArray(argument)) {
      goog.array.forEach(argument, addArgument);
    } else {
      result += goog.html.SafeStyleSheet.unwrap(argument);
    }
  };
  goog.array.forEach(arguments, addArgument);
  return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(result);
};
/**
 * @param {!goog.string.Const} styleSheet
 * @return {!goog.html.SafeStyleSheet}
 */
goog.html.SafeStyleSheet.fromConstant = function(styleSheet) {
  var styleSheetString = goog.string.Const.unwrap(styleSheet);
  if (styleSheetString.length === 0) {
    return goog.html.SafeStyleSheet.EMPTY;
  }
  goog.asserts.assert(!goog.string.internal.contains(styleSheetString, "\x3c"), "Forbidden '\x3c' character in style sheet string: " + styleSheetString);
  return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheetString);
};
/** @override */ goog.html.SafeStyleSheet.prototype.getTypedStringValue = function() {
  return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
};
if (goog.DEBUG) {
  /** @override */ goog.html.SafeStyleSheet.prototype.toString = function() {
    return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}";
  };
}
/**
 * @param {!goog.html.SafeStyleSheet} safeStyleSheet
 * @return {string}
 */
goog.html.SafeStyleSheet.unwrap = function(safeStyleSheet) {
  if (safeStyleSheet instanceof goog.html.SafeStyleSheet && safeStyleSheet.constructor === goog.html.SafeStyleSheet && safeStyleSheet.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) {
    return safeStyleSheet.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
  } else {
    goog.asserts.fail("expected object of type SafeStyleSheet, got '" + safeStyleSheet + "' of type " + goog.typeOf(safeStyleSheet));
    return "type_error:SafeStyleSheet";
  }
};
/**
 * @package
 * @param {string} styleSheet
 * @return {!goog.html.SafeStyleSheet}
 */
goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function(styleSheet) {
  return (new goog.html.SafeStyleSheet).initSecurityPrivateDoNotAccessOrElse_(styleSheet);
};
/**
 * @private
 * @param {string} styleSheet
 * @return {!goog.html.SafeStyleSheet}
 */
goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(styleSheet) {
  this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = styleSheet;
  return this;
};
/** @const @type {!goog.html.SafeStyleSheet} */ goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");

//# sourceMappingURL=goog.html.safestylesheet.js.map
