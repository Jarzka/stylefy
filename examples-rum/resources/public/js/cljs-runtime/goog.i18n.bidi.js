goog.provide("goog.i18n.bidi");
goog.provide("goog.i18n.bidi.Dir");
goog.provide("goog.i18n.bidi.DirectionalString");
goog.provide("goog.i18n.bidi.Format");
/** @define {boolean} */ goog.i18n.bidi.FORCE_RTL = goog.define("goog.i18n.bidi.FORCE_RTL", false);
/** @type {boolean} */ goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || (goog.LOCALE.substring(0, 2).toLowerCase() == "ar" || goog.LOCALE.substring(0, 2).toLowerCase() == "fa" || goog.LOCALE.substring(0, 2).toLowerCase() == "he" || goog.LOCALE.substring(0, 2).toLowerCase() == "iw" || goog.LOCALE.substring(0, 2).toLowerCase() == "ps" || goog.LOCALE.substring(0, 2).toLowerCase() == "sd" || goog.LOCALE.substring(0, 2).toLowerCase() == "ug" || goog.LOCALE.substring(0, 2).toLowerCase() == "ur" || goog.LOCALE.substring(0, 
2).toLowerCase() == "yi") && (goog.LOCALE.length == 2 || goog.LOCALE.substring(2, 3) == "-" || goog.LOCALE.substring(2, 3) == "_") || goog.LOCALE.length >= 3 && goog.LOCALE.substring(0, 3).toLowerCase() == "ckb" && (goog.LOCALE.length == 3 || goog.LOCALE.substring(3, 4) == "-" || goog.LOCALE.substring(3, 4) == "_") || goog.LOCALE.length >= 7 && ((goog.LOCALE.substring(2, 3) == "-" || goog.LOCALE.substring(2, 3) == "_") && (goog.LOCALE.substring(3, 7).toLowerCase() == "adlm" || goog.LOCALE.substring(3, 
7).toLowerCase() == "arab" || goog.LOCALE.substring(3, 7).toLowerCase() == "hebr" || goog.LOCALE.substring(3, 7).toLowerCase() == "nkoo" || goog.LOCALE.substring(3, 7).toLowerCase() == "rohg" || goog.LOCALE.substring(3, 7).toLowerCase() == "thaa")) || goog.LOCALE.length >= 8 && ((goog.LOCALE.substring(3, 4) == "-" || goog.LOCALE.substring(3, 4) == "_") && (goog.LOCALE.substring(4, 8).toLowerCase() == "adlm" || goog.LOCALE.substring(4, 8).toLowerCase() == "arab" || goog.LOCALE.substring(4, 8).toLowerCase() == 
"hebr" || goog.LOCALE.substring(4, 8).toLowerCase() == "nkoo" || goog.LOCALE.substring(4, 8).toLowerCase() == "rohg" || goog.LOCALE.substring(4, 8).toLowerCase() == "thaa"));
/** @enum {string} */ goog.i18n.bidi.Format = {LRE:"‪", RLE:"‫", PDF:"‬", LRM:"‎", RLM:"‏"};
/** @enum {number} */ goog.i18n.bidi.Dir = {LTR:1, RTL:-1, NEUTRAL:0};
/** @type {string} */ goog.i18n.bidi.RIGHT = "right";
/** @type {string} */ goog.i18n.bidi.LEFT = "left";
/** @type {string} */ goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT;
/** @type {string} */ goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
/**
 * @param {(goog.i18n.bidi.Dir|number|boolean|null)} givenDir
 * @param {boolean=} opt_noNeutral
 * @return {?goog.i18n.bidi.Dir}
 */
goog.i18n.bidi.toDir = function(givenDir, opt_noNeutral) {
  if (typeof givenDir == "number") {
    return givenDir > 0 ? goog.i18n.bidi.Dir.LTR : givenDir < 0 ? goog.i18n.bidi.Dir.RTL : opt_noNeutral ? null : goog.i18n.bidi.Dir.NEUTRAL;
  } else {
    if (givenDir == null) {
      return null;
    } else {
      return givenDir ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
    }
  }
};
/** @private @type {string} */ goog.i18n.bidi.ltrChars_ = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ऀ-῿" + "‎Ⰰ-\ud801\ud804-\ud839\ud83c-\udbff" + "豈-﬜︀-﹯﻽-￿";
/** @private @type {string} */ goog.i18n.bidi.rtlChars_ = "֑-ۯۺ-ࣿ‏\ud802-\ud803\ud83a-\ud83b" + "יִ-﷿ﹰ-ﻼ";
/** @private @type {RegExp} */ goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
/**
 * @private
 * @param {string} str
 * @param {boolean=} opt_isStripNeeded
 * @return {string}
 */
goog.i18n.bidi.stripHtmlIfNeeded_ = function(str, opt_isStripNeeded) {
  return opt_isStripNeeded ? str.replace(goog.i18n.bidi.htmlSkipReg_, "") : str;
};
/** @private @type {RegExp} */ goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]");
/** @private @type {RegExp} */ goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]");
/**
 * @param {string} str
 * @param {boolean=} opt_isHtml
 * @return {boolean}
 */
goog.i18n.bidi.hasAnyRtl = function(str, opt_isHtml) {
  return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
};
/**
 * @param {string} str
 * @return {boolean}
 * @deprecated Use hasAnyRtl.
 */
goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;
/**
 * @param {string} str
 * @param {boolean=} opt_isHtml
 * @return {boolean}
 */
goog.i18n.bidi.hasAnyLtr = function(str, opt_isHtml) {
  return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
};
/** @private @type {RegExp} */ goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]");
/** @private @type {RegExp} */ goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]");
/**
 * @param {string} str
 * @return {boolean}
 */
goog.i18n.bidi.isRtlChar = function(str) {
  return goog.i18n.bidi.rtlRe_.test(str);
};
/**
 * @param {string} str
 * @return {boolean}
 */
goog.i18n.bidi.isLtrChar = function(str) {
  return goog.i18n.bidi.ltrRe_.test(str);
};
/**
 * @param {string} str
 * @return {boolean}
 */
goog.i18n.bidi.isNeutralChar = function(str) {
  return !goog.i18n.bidi.isLtrChar(str) && !goog.i18n.bidi.isRtlChar(str);
};
/** @private @type {RegExp} */ goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]");
/** @private @type {RegExp} */ goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]");
/**
 * @param {string} str
 * @param {boolean=} opt_isHtml
 * @return {boolean}
 */
goog.i18n.bidi.startsWithRtl = function(str, opt_isHtml) {
  return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
};
/**
 * @param {string} str
 * @param {boolean=} opt_isHtml
 * @return {boolean}
 * @deprecated Use startsWithRtl.
 */
goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;
/**
 * @param {string} str
 * @param {boolean=} opt_isHtml
 * @return {boolean}
 */
goog.i18n.bidi.startsWithLtr = function(str, opt_isHtml) {
  return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
};
/**
 * @param {string} str
 * @param {boolean=} opt_isHtml
 * @return {boolean}
 * @deprecated Use startsWithLtr.
 */
goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;
/** @private @type {RegExp} */ goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
/**
 * @param {string} str
 * @param {boolean=} opt_isHtml
 * @return {boolean}
 */
goog.i18n.bidi.isNeutralText = function(str, opt_isHtml) {
  str = goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml);
  return goog.i18n.bidi.isRequiredLtrRe_.test(str) || !goog.i18n.bidi.hasAnyLtr(str) && !goog.i18n.bidi.hasAnyRtl(str);
};
/** @private @type {RegExp} */ goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]" + "[^" + goog.i18n.bidi.rtlChars_ + "]*$");
/** @private @type {RegExp} */ goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]" + "[^" + goog.i18n.bidi.ltrChars_ + "]*$");
/**
 * @param {string} str
 * @param {boolean=} opt_isHtml
 * @return {boolean}
 */
goog.i18n.bidi.endsWithLtr = function(str, opt_isHtml) {
  return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
};
/**
 * @param {string} str
 * @param {boolean=} opt_isHtml
 * @return {boolean}
 * @deprecated Use endsWithLtr.
 */
goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;
/**
 * @param {string} str
 * @param {boolean=} opt_isHtml
 * @return {boolean}
 */
goog.i18n.bidi.endsWithRtl = function(str, opt_isHtml) {
  return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
};
/**
 * @param {string} str
 * @param {boolean=} opt_isHtml
 * @return {boolean}
 * @deprecated Use endsWithRtl.
 */
goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;
/** @private @type {!RegExp} */ goog.i18n.bidi.rtlLocalesRe_ = new RegExp("^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|" + ".*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))" + "(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)", "i");
/**
 * @param {string} lang
 * @return {boolean}
 */
goog.i18n.bidi.isRtlLanguage = function(lang) {
  return goog.i18n.bidi.rtlLocalesRe_.test(lang);
};
/** @private @type {RegExp} */ goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
/**
 * @param {string} s
 * @param {boolean=} opt_isRtlContext
 * @return {string}
 */
goog.i18n.bidi.guardBracketInText = function(s, opt_isRtlContext) {
  /** @const */ var useRtl = opt_isRtlContext === undefined ? goog.i18n.bidi.hasAnyRtl(s) : opt_isRtlContext;
  /** @const */ var mark = useRtl ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM;
  return s.replace(goog.i18n.bidi.bracketGuardTextRe_, mark + "$\x26" + mark);
};
/**
 * @param {string} html
 * @return {string}
 */
goog.i18n.bidi.enforceRtlInHtml = function(html) {
  if (html.charAt(0) == "\x3c") {
    return html.replace(/<\w+/, "$\x26 dir\x3drtl");
  }
  return "\n\x3cspan dir\x3drtl\x3e" + html + "\x3c/span\x3e";
};
/**
 * @param {string} text
 * @return {string}
 */
goog.i18n.bidi.enforceRtlInText = function(text) {
  return goog.i18n.bidi.Format.RLE + text + goog.i18n.bidi.Format.PDF;
};
/**
 * @param {string} html
 * @return {string}
 */
goog.i18n.bidi.enforceLtrInHtml = function(html) {
  if (html.charAt(0) == "\x3c") {
    return html.replace(/<\w+/, "$\x26 dir\x3dltr");
  }
  return "\n\x3cspan dir\x3dltr\x3e" + html + "\x3c/span\x3e";
};
/**
 * @param {string} text
 * @return {string}
 */
goog.i18n.bidi.enforceLtrInText = function(text) {
  return goog.i18n.bidi.Format.LRE + text + goog.i18n.bidi.Format.PDF;
};
/** @private @type {RegExp} */ goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
/** @private @type {RegExp} */ goog.i18n.bidi.leftRe_ = /left/gi;
/** @private @type {RegExp} */ goog.i18n.bidi.rightRe_ = /right/gi;
/** @private @type {RegExp} */ goog.i18n.bidi.tempRe_ = /%%%%/g;
/**
 * @param {string} cssStr
 * @return {string}
 */
goog.i18n.bidi.mirrorCSS = function(cssStr) {
  return cssStr.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
};
/** @private @type {RegExp} */ goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
/** @private @type {RegExp} */ goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
/**
 * @param {string} str
 * @return {string}
 */
goog.i18n.bidi.normalizeHebrewQuote = function(str) {
  return str.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1״").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1׳");
};
/** @private @type {RegExp} */ goog.i18n.bidi.wordSeparatorRe_ = /\s+/;
/** @private @type {RegExp} */ goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;
/** @private @type {number} */ goog.i18n.bidi.rtlDetectionThreshold_ = 0.40;
/**
 * @param {string} str
 * @param {boolean=} opt_isHtml
 * @return {goog.i18n.bidi.Dir}
 */
goog.i18n.bidi.estimateDirection = function(str, opt_isHtml) {
  var rtlCount = 0;
  var totalCount = 0;
  var hasWeaklyLtr = false;
  /** @const */ var tokens = goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml).split(goog.i18n.bidi.wordSeparatorRe_);
  for (var i = 0; i < tokens.length; i++) {
    /** @const */ var token = tokens[i];
    if (goog.i18n.bidi.startsWithRtl(token)) {
      rtlCount++;
      totalCount++;
    } else {
      if (goog.i18n.bidi.isRequiredLtrRe_.test(token)) {
        hasWeaklyLtr = true;
      } else {
        if (goog.i18n.bidi.hasAnyLtr(token)) {
          totalCount++;
        } else {
          if (goog.i18n.bidi.hasNumeralsRe_.test(token)) {
            hasWeaklyLtr = true;
          }
        }
      }
    }
  }
  return totalCount == 0 ? hasWeaklyLtr ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : rtlCount / totalCount > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
};
/**
 * @param {string} str
 * @param {boolean=} opt_isHtml
 * @return {boolean}
 */
goog.i18n.bidi.detectRtlDirectionality = function(str, opt_isHtml) {
  return goog.i18n.bidi.estimateDirection(str, opt_isHtml) == goog.i18n.bidi.Dir.RTL;
};
/**
 * @param {Element} element
 * @param {(goog.i18n.bidi.Dir|number|boolean|null)} dir
 */
goog.i18n.bidi.setElementDirAndAlign = function(element, dir) {
  if (element) {
    /** @const */ var htmlElement = /** @type {!HTMLElement} */ (element);
    dir = goog.i18n.bidi.toDir(dir);
    if (dir) {
      htmlElement.style.textAlign = dir == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
      htmlElement.dir = dir == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr";
    }
  }
};
/**
 * @param {!Element} element
 * @param {string} text
 */
goog.i18n.bidi.setElementDirByTextDirectionality = function(element, text) {
  /** @const */ var htmlElement = /** @type {!HTMLElement} */ (element);
  switch(goog.i18n.bidi.estimateDirection(text)) {
    case goog.i18n.bidi.Dir.LTR:
      htmlElement.dir = "ltr";
      break;
    case goog.i18n.bidi.Dir.RTL:
      htmlElement.dir = "rtl";
      break;
    default:
      htmlElement.removeAttribute("dir");
  }
};
/** @interface */ goog.i18n.bidi.DirectionalString = function() {
};
/** @type {boolean} */ goog.i18n.bidi.DirectionalString.prototype.implementsGoogI18nBidiDirectionalString;
/**
 * @return {?goog.i18n.bidi.Dir}
 */
goog.i18n.bidi.DirectionalString.prototype.getDirection;

//# sourceMappingURL=goog.i18n.bidi.js.map
