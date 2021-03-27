goog.provide("goog.string");
goog.provide("goog.string.Unicode");
goog.require("goog.dom.safe");
goog.require("goog.html.uncheckedconversions");
goog.require("goog.string.Const");
goog.require("goog.string.internal");
/** @define {boolean} */ goog.string.DETECT_DOUBLE_ESCAPING = goog.define("goog.string.DETECT_DOUBLE_ESCAPING", false);
/** @define {boolean} */ goog.string.FORCE_NON_DOM_HTML_UNESCAPING = goog.define("goog.string.FORCE_NON_DOM_HTML_UNESCAPING", false);
/** @enum {string} */ goog.string.Unicode = {NBSP:" "};
/**
 * @param {string} str
 * @param {string} prefix
 * @return {boolean}
 */
goog.string.startsWith = goog.string.internal.startsWith;
/**
 * @param {string} str
 * @param {string} suffix
 * @return {boolean}
 */
goog.string.endsWith = goog.string.internal.endsWith;
/**
 * @param {string} str
 * @param {string} prefix
 * @return {boolean}
 */
goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith;
/**
 * @param {string} str
 * @param {string} suffix
 * @return {boolean}
 */
goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith;
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals;
/**
 * @param {string} str
 * @param {...*} var_args
 * @return {string}
 */
goog.string.subs = function(str, var_args) {
  var splitParts = str.split("%s");
  var returnString = "";
  var subsArguments = Array.prototype.slice.call(arguments, 1);
  while (subsArguments.length && splitParts.length > 1) {
    returnString += splitParts.shift() + subsArguments.shift();
  }
  return returnString + splitParts.join("%s");
};
/**
 * @param {string} str
 * @return {string}
 */
goog.string.collapseWhitespace = function(str) {
  return str.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
/**
 * @param {string} str
 * @return {boolean}
 */
goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace;
/**
 * @param {string} str
 * @return {boolean}
 */
goog.string.isEmptyString = function(str) {
  return str.length == 0;
};
/**
 * @param {string} str
 * @return {boolean}
 * @deprecated Use goog.string.isEmptyOrWhitespace instead.
 */
goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
/**
 * @param {*} str
 * @return {boolean}
 * @deprecated Use goog.string.isEmptyOrWhitespace(goog.string.makeSafe(str)) instead.
 */
goog.string.isEmptyOrWhitespaceSafe = function(str) {
  return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(str));
};
/**
 * @param {*} str
 * @return {boolean}
 * @deprecated Use goog.string.isEmptyOrWhitespace instead.
 */
goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
/**
 * @param {string} str
 * @return {boolean}
 */
goog.string.isBreakingWhitespace = function(str) {
  return !/[^\t\n\r ]/.test(str);
};
/**
 * @param {string} str
 * @return {boolean}
 */
goog.string.isAlpha = function(str) {
  return !/[^a-zA-Z]/.test(str);
};
/**
 * @param {*} str
 * @return {boolean}
 */
goog.string.isNumeric = function(str) {
  return !/[^0-9]/.test(str);
};
/**
 * @param {string} str
 * @return {boolean}
 */
goog.string.isAlphaNumeric = function(str) {
  return !/[^a-zA-Z0-9]/.test(str);
};
/**
 * @param {string} ch
 * @return {boolean}
 */
goog.string.isSpace = function(ch) {
  return ch == " ";
};
/**
 * @param {string} ch
 * @return {boolean}
 */
goog.string.isUnicodeChar = function(ch) {
  return ch.length == 1 && ch >= " " && ch <= "~" || ch >= "" && ch <= "�";
};
/**
 * @param {string} str
 * @return {string}
 */
goog.string.stripNewlines = function(str) {
  return str.replace(/(\r\n|\r|\n)+/g, " ");
};
/**
 * @param {string} str
 * @return {string}
 */
goog.string.canonicalizeNewlines = function(str) {
  return str.replace(/(\r\n|\r|\n)/g, "\n");
};
/**
 * @param {string} str
 * @return {string}
 */
goog.string.normalizeWhitespace = function(str) {
  return str.replace(/\xa0|\s/g, " ");
};
/**
 * @param {string} str
 * @return {string}
 */
goog.string.normalizeSpaces = function(str) {
  return str.replace(/\xa0|[ \t]+/g, " ");
};
/**
 * @param {string} str
 * @return {string}
 */
goog.string.collapseBreakingSpaces = function(str) {
  return str.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
/**
 * @param {string} str
 * @return {string}
 */
goog.string.trim = goog.string.internal.trim;
/**
 * @param {string} str
 * @return {string}
 */
goog.string.trimLeft = function(str) {
  return str.replace(/^[\s\xa0]+/, "");
};
/**
 * @param {string} str
 * @return {string}
 */
goog.string.trimRight = function(str) {
  return str.replace(/[\s\xa0]+$/, "");
};
/**
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare;
/**
 * @private
 * @param {string} str1
 * @param {string} str2
 * @param {!RegExp} tokenizerRegExp
 * @return {number}
 */
goog.string.numberAwareCompare_ = function(str1, str2, tokenizerRegExp) {
  if (str1 == str2) {
    return 0;
  }
  if (!str1) {
    return -1;
  }
  if (!str2) {
    return 1;
  }
  var tokens1 = str1.toLowerCase().match(tokenizerRegExp);
  var tokens2 = str2.toLowerCase().match(tokenizerRegExp);
  var count = Math.min(tokens1.length, tokens2.length);
  for (var i = 0; i < count; i++) {
    var a = tokens1[i];
    var b = tokens2[i];
    if (a != b) {
      var num1 = parseInt(a, 10);
      if (!isNaN(num1)) {
        var num2 = parseInt(b, 10);
        if (!isNaN(num2) && num1 - num2) {
          return num1 - num2;
        }
      }
      return a < b ? -1 : 1;
    }
  }
  if (tokens1.length != tokens2.length) {
    return tokens1.length - tokens2.length;
  }
  return str1 < str2 ? -1 : 1;
};
/**
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
goog.string.intAwareCompare = function(str1, str2) {
  return goog.string.numberAwareCompare_(str1, str2, /\d+|\D+/g);
};
/**
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
goog.string.floatAwareCompare = function(str1, str2) {
  return goog.string.numberAwareCompare_(str1, str2, /\d+|\.\d+|\D+/g);
};
/**
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
goog.string.numerateCompare = goog.string.floatAwareCompare;
/**
 * @param {*} str
 * @return {string}
 */
goog.string.urlEncode = function(str) {
  return encodeURIComponent(String(str));
};
/**
 * @param {string} str
 * @return {string}
 */
goog.string.urlDecode = function(str) {
  return decodeURIComponent(str.replace(/\+/g, " "));
};
/**
 * @param {string} str
 * @param {boolean=} opt_xml
 * @return {string}
 */
goog.string.newLineToBr = goog.string.internal.newLineToBr;
/**
 * @param {string} str
 * @param {boolean=} opt_isLikelyToContainHtmlChars
 * @return {string}
 */
goog.string.htmlEscape = function(str, opt_isLikelyToContainHtmlChars) {
  str = goog.string.internal.htmlEscape(str, opt_isLikelyToContainHtmlChars);
  if (goog.string.DETECT_DOUBLE_ESCAPING) {
    str = str.replace(goog.string.E_RE_, "\x26#101;");
  }
  return str;
};
/** @private @const @type {!RegExp} */ goog.string.E_RE_ = /e/g;
/**
 * @param {string} str
 * @return {string}
 */
goog.string.unescapeEntities = function(str) {
  if (goog.string.contains(str, "\x26")) {
    if (!goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global) {
      return goog.string.unescapeEntitiesUsingDom_(str);
    } else {
      return goog.string.unescapePureXmlEntities_(str);
    }
  }
  return str;
};
/**
 * @param {string} str
 * @param {!Document} document
 * @return {string}
 */
goog.string.unescapeEntitiesWithDocument = function(str, document) {
  if (goog.string.contains(str, "\x26")) {
    return goog.string.unescapeEntitiesUsingDom_(str, document);
  }
  return str;
};
/**
 * @private
 * @param {string} str
 * @param {Document=} opt_document
 * @return {string}
 */
goog.string.unescapeEntitiesUsingDom_ = function(str, opt_document) {
  /** @type {!Object<string,string>} */ var seen = {"\x26amp;":"\x26", "\x26lt;":"\x3c", "\x26gt;":"\x3e", "\x26quot;":'"'};
  /** @type {!Element} */ var div;
  if (opt_document) {
    div = opt_document.createElement("div");
  } else {
    div = goog.global.document.createElement("div");
  }
  return str.replace(goog.string.HTML_ENTITY_PATTERN_, function(s, entity) {
    var value = seen[s];
    if (value) {
      return value;
    }
    if (entity.charAt(0) == "#") {
      var n = Number("0" + entity.substr(1));
      if (!isNaN(n)) {
        value = String.fromCharCode(n);
      }
    }
    if (!value) {
      goog.dom.safe.setInnerHtml(div, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."), s + " "));
      value = div.firstChild.nodeValue.slice(0, -1);
    }
    return seen[s] = value;
  });
};
/**
 * @private
 * @param {string} str
 * @return {string}
 */
goog.string.unescapePureXmlEntities_ = function(str) {
  return str.replace(/&([^;]+);/g, function(s, entity) {
    switch(entity) {
      case "amp":
        return "\x26";
      case "lt":
        return "\x3c";
      case "gt":
        return "\x3e";
      case "quot":
        return '"';
      default:
        if (entity.charAt(0) == "#") {
          var n = Number("0" + entity.substr(1));
          if (!isNaN(n)) {
            return String.fromCharCode(n);
          }
        }
        return s;
    }
  });
};
/** @private @type {!RegExp} */ goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
/**
 * @param {string} str
 * @param {boolean=} opt_xml
 * @return {string}
 */
goog.string.whitespaceEscape = function(str, opt_xml) {
  return goog.string.newLineToBr(str.replace(/  /g, " \x26#160;"), opt_xml);
};
/**
 * @param {string} str
 * @return {string}
 */
goog.string.preserveSpaces = function(str) {
  return str.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
};
/**
 * @param {string} str
 * @param {string} quoteChars
 * @return {string}
 */
goog.string.stripQuotes = function(str, quoteChars) {
  var length = quoteChars.length;
  for (var i = 0; i < length; i++) {
    var quoteChar = length == 1 ? quoteChars : quoteChars.charAt(i);
    if (str.charAt(0) == quoteChar && str.charAt(str.length - 1) == quoteChar) {
      return str.substring(1, str.length - 1);
    }
  }
  return str;
};
/**
 * @param {string} str
 * @param {number} chars
 * @param {boolean=} opt_protectEscapedCharacters
 * @return {string}
 */
goog.string.truncate = function(str, chars, opt_protectEscapedCharacters) {
  if (opt_protectEscapedCharacters) {
    str = goog.string.unescapeEntities(str);
  }
  if (str.length > chars) {
    str = str.substring(0, chars - 3) + "...";
  }
  if (opt_protectEscapedCharacters) {
    str = goog.string.htmlEscape(str);
  }
  return str;
};
/**
 * @param {string} str
 * @param {number} chars
 * @param {boolean=} opt_protectEscapedCharacters
 * @param {number=} opt_trailingChars
 * @return {string}
 */
goog.string.truncateMiddle = function(str, chars, opt_protectEscapedCharacters, opt_trailingChars) {
  if (opt_protectEscapedCharacters) {
    str = goog.string.unescapeEntities(str);
  }
  if (opt_trailingChars && str.length > chars) {
    if (opt_trailingChars > chars) {
      opt_trailingChars = chars;
    }
    var endPoint = str.length - opt_trailingChars;
    var startPoint = chars - opt_trailingChars;
    str = str.substring(0, startPoint) + "..." + str.substring(endPoint);
  } else {
    if (str.length > chars) {
      var half = Math.floor(chars / 2);
      var endPos = str.length - half;
      half += chars % 2;
      str = str.substring(0, half) + "..." + str.substring(endPos);
    }
  }
  if (opt_protectEscapedCharacters) {
    str = goog.string.htmlEscape(str);
  }
  return str;
};
/** @private @type {!Object<string,string>} */ goog.string.specialEscapeChars_ = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\", "\x3c":"\\u003C"};
/** @private @type {!Object<string,string>} */ goog.string.jsEscapeCache_ = {"'":"\\'"};
/**
 * @param {string} s
 * @return {string}
 */
goog.string.quote = function(s) {
  s = String(s);
  var sb = ['"'];
  for (var i = 0; i < s.length; i++) {
    var ch = s.charAt(i);
    var cc = ch.charCodeAt(0);
    sb[i + 1] = goog.string.specialEscapeChars_[ch] || (cc > 31 && cc < 127 ? ch : goog.string.escapeChar(ch));
  }
  sb.push('"');
  return sb.join("");
};
/**
 * @param {string} str
 * @return {string}
 */
goog.string.escapeString = function(str) {
  var sb = [];
  for (var i = 0; i < str.length; i++) {
    sb[i] = goog.string.escapeChar(str.charAt(i));
  }
  return sb.join("");
};
/**
 * @param {string} c
 * @return {string}
 */
goog.string.escapeChar = function(c) {
  if (c in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[c];
  }
  if (c in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[c] = goog.string.specialEscapeChars_[c];
  }
  var rv = c;
  var cc = c.charCodeAt(0);
  if (cc > 31 && cc < 127) {
    rv = c;
  } else {
    if (cc < 256) {
      rv = "\\x";
      if (cc < 16 || cc > 256) {
        rv += "0";
      }
    } else {
      rv = "\\u";
      if (cc < 4096) {
        rv += "0";
      }
    }
    rv += cc.toString(16).toUpperCase();
  }
  return goog.string.jsEscapeCache_[c] = rv;
};
/**
 * @param {string} str
 * @param {string} subString
 * @return {boolean}
 */
goog.string.contains = goog.string.internal.contains;
/**
 * @param {string} str
 * @param {string} subString
 * @return {boolean}
 */
goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains;
/**
 * @param {string} s
 * @param {string} ss
 * @return {number}
 */
goog.string.countOf = function(s, ss) {
  return s && ss ? s.split(ss).length - 1 : 0;
};
/**
 * @param {string} s
 * @param {number} index
 * @param {number} stringLength
 * @return {string}
 */
goog.string.removeAt = function(s, index, stringLength) {
  var resultStr = s;
  if (index >= 0 && index < s.length && stringLength > 0) {
    resultStr = s.substr(0, index) + s.substr(index + stringLength, s.length - index - stringLength);
  }
  return resultStr;
};
/**
 * @param {string} str
 * @param {string} substr
 * @return {string}
 */
goog.string.remove = function(str, substr) {
  return str.replace(substr, "");
};
/**
 * @param {string} s
 * @param {string} ss
 * @return {string}
 */
goog.string.removeAll = function(s, ss) {
  var re = new RegExp(goog.string.regExpEscape(ss), "g");
  return s.replace(re, "");
};
/**
 * @param {string} s
 * @param {string} ss
 * @param {string} replacement
 * @return {string}
 */
goog.string.replaceAll = function(s, ss, replacement) {
  var re = new RegExp(goog.string.regExpEscape(ss), "g");
  return s.replace(re, replacement.replace(/\$/g, "$$$$"));
};
/**
 * @param {*} s
 * @return {string}
 */
goog.string.regExpEscape = function(s) {
  return String(s).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
/**
 * @param {string} string
 * @param {number} length
 * @return {string}
 */
goog.string.repeat = String.prototype.repeat ? function(string, length) {
  return string.repeat(length);
} : function(string, length) {
  return (new Array(length + 1)).join(string);
};
/**
 * @param {number} num
 * @param {number} length
 * @param {number=} opt_precision
 * @return {string}
 */
goog.string.padNumber = function(num, length, opt_precision) {
  var s = opt_precision !== undefined ? num.toFixed(opt_precision) : String(num);
  var index = s.indexOf(".");
  if (index == -1) {
    index = s.length;
  }
  return goog.string.repeat("0", Math.max(0, length - index)) + s;
};
/**
 * @param {*} obj
 * @return {string}
 */
goog.string.makeSafe = function(obj) {
  return obj == null ? "" : String(obj);
};
/**
 * @param {...*} var_args
 * @return {string}
 */
goog.string.buildString = function(var_args) {
  return Array.prototype.join.call(arguments, "");
};
/**
 * @return {string}
 */
goog.string.getRandomString = function() {
  var x = 2147483648;
  return Math.floor(Math.random() * x).toString(36) + Math.abs(Math.floor(Math.random() * x) ^ goog.now()).toString(36);
};
/**
 * @param {(string|number)} version1
 * @param {(string|number)} version2
 * @return {number}
 */
goog.string.compareVersions = goog.string.internal.compareVersions;
/**
 * @param {string} str
 * @return {number}
 */
goog.string.hashCode = function(str) {
  var result = 0;
  for (var i = 0; i < str.length; ++i) {
    result = 31 * result + str.charCodeAt(i) >>> 0;
  }
  return result;
};
/** @private @type {number} */ goog.string.uniqueStringCounter_ = Math.random() * 2147483648 | 0;
/**
 * @return {string}
 */
goog.string.createUniqueString = function() {
  return "goog_" + goog.string.uniqueStringCounter_++;
};
/**
 * @param {string} str
 * @return {number}
 */
goog.string.toNumber = function(str) {
  var num = Number(str);
  if (num == 0 && goog.string.isEmptyOrWhitespace(str)) {
    return NaN;
  }
  return num;
};
/**
 * @param {string} str
 * @return {boolean}
 */
goog.string.isLowerCamelCase = function(str) {
  return /^[a-z]+([A-Z][a-z]*)*$/.test(str);
};
/**
 * @param {string} str
 * @return {boolean}
 */
goog.string.isUpperCamelCase = function(str) {
  return /^([A-Z][a-z]*)+$/.test(str);
};
/**
 * @param {string} str
 * @return {string}
 */
goog.string.toCamelCase = function(str) {
  return String(str).replace(/\-([a-z])/g, function(all, match) {
    return match.toUpperCase();
  });
};
/**
 * @param {string} str
 * @return {string}
 */
goog.string.toSelectorCase = function(str) {
  return String(str).replace(/([A-Z])/g, "-$1").toLowerCase();
};
/**
 * @param {string} str
 * @param {string=} opt_delimiters
 * @return {string}
 */
goog.string.toTitleCase = function(str, opt_delimiters) {
  var delimiters = typeof opt_delimiters === "string" ? goog.string.regExpEscape(opt_delimiters) : "\\s";
  delimiters = delimiters ? "|[" + delimiters + "]+" : "";
  var regexp = new RegExp("(^" + delimiters + ")([a-z])", "g");
  return str.replace(regexp, function(all, p1, p2) {
    return p1 + p2.toUpperCase();
  });
};
/**
 * @param {string} str
 * @return {string}
 */
goog.string.capitalize = function(str) {
  return String(str.charAt(0)).toUpperCase() + String(str.substr(1)).toLowerCase();
};
/**
 * @param {(string|number|null|undefined)} value
 * @return {number}
 */
goog.string.parseInt = function(value) {
  if (isFinite(value)) {
    value = String(value);
  }
  if (typeof value === "string") {
    return /^\s*-?0x/i.test(value) ? parseInt(value, 16) : parseInt(value, 10);
  }
  return NaN;
};
/**
 * @param {string} str
 * @param {string} separator
 * @param {number} limit
 * @return {!Array<string>}
 */
goog.string.splitLimit = function(str, separator, limit) {
  var parts = str.split(separator);
  var returnVal = [];
  while (limit > 0 && parts.length) {
    returnVal.push(parts.shift());
    limit--;
  }
  if (parts.length) {
    returnVal.push(parts.join(separator));
  }
  return returnVal;
};
/**
 * @param {string} str
 * @param {(string|!Array<string>)} separators
 * @return {string}
 */
goog.string.lastComponent = function(str, separators) {
  if (!separators) {
    return str;
  } else {
    if (typeof separators == "string") {
      separators = [separators];
    }
  }
  var lastSeparatorIndex = -1;
  for (var i = 0; i < separators.length; i++) {
    if (separators[i] == "") {
      continue;
    }
    var currentSeparatorIndex = str.lastIndexOf(separators[i]);
    if (currentSeparatorIndex > lastSeparatorIndex) {
      lastSeparatorIndex = currentSeparatorIndex;
    }
  }
  if (lastSeparatorIndex == -1) {
    return str;
  }
  return str.slice(lastSeparatorIndex + 1);
};
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
goog.string.editDistance = function(a, b) {
  var v0 = [];
  var v1 = [];
  if (a == b) {
    return 0;
  }
  if (!a.length || !b.length) {
    return Math.max(a.length, b.length);
  }
  for (var i = 0; i < b.length + 1; i++) {
    v0[i] = i;
  }
  for (var i = 0; i < a.length; i++) {
    v1[0] = i + 1;
    for (var j = 0; j < b.length; j++) {
      var cost = Number(a[i] != b[j]);
      v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
    }
    for (var j = 0; j < v0.length; j++) {
      v0[j] = v1[j];
    }
  }
  return v1[b.length];
};

//# sourceMappingURL=goog.string.string.js.map
