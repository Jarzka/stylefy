goog.provide("goog.labs.userAgent.platform");
goog.require("goog.labs.userAgent.util");
goog.require("goog.string");
/**
 * @return {boolean}
 */
goog.labs.userAgent.platform.isAndroid = function() {
  return goog.labs.userAgent.util.matchUserAgent("Android");
};
/**
 * @return {boolean}
 */
goog.labs.userAgent.platform.isIpod = function() {
  return goog.labs.userAgent.util.matchUserAgent("iPod");
};
/**
 * @return {boolean}
 */
goog.labs.userAgent.platform.isIphone = function() {
  return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad");
};
/**
 * @return {boolean}
 */
goog.labs.userAgent.platform.isIpad = function() {
  return goog.labs.userAgent.util.matchUserAgent("iPad");
};
/**
 * @return {boolean}
 */
goog.labs.userAgent.platform.isIos = function() {
  return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod();
};
/**
 * @return {boolean}
 */
goog.labs.userAgent.platform.isMacintosh = function() {
  return goog.labs.userAgent.util.matchUserAgent("Macintosh");
};
/**
 * @return {boolean}
 */
goog.labs.userAgent.platform.isLinux = function() {
  return goog.labs.userAgent.util.matchUserAgent("Linux");
};
/**
 * @return {boolean}
 */
goog.labs.userAgent.platform.isWindows = function() {
  return goog.labs.userAgent.util.matchUserAgent("Windows");
};
/**
 * @return {boolean}
 */
goog.labs.userAgent.platform.isChromeOS = function() {
  return goog.labs.userAgent.util.matchUserAgent("CrOS");
};
/**
 * @return {boolean}
 */
goog.labs.userAgent.platform.isChromecast = function() {
  return goog.labs.userAgent.util.matchUserAgent("CrKey");
};
/**
 * @return {boolean}
 */
goog.labs.userAgent.platform.isKaiOS = function() {
  return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS");
};
/**
 * @return {boolean}
 */
goog.labs.userAgent.platform.isGo2Phone = function() {
  return goog.labs.userAgent.util.matchUserAgentIgnoreCase("GAFP");
};
/**
 * @return {string}
 */
goog.labs.userAgent.platform.getVersion = function() {
  var userAgentString = goog.labs.userAgent.util.getUserAgent();
  var version = "", re;
  if (goog.labs.userAgent.platform.isWindows()) {
    re = /Windows (?:NT|Phone) ([0-9.]+)/;
    var match = re.exec(userAgentString);
    if (match) {
      version = match[1];
    } else {
      version = "0.0";
    }
  } else {
    if (goog.labs.userAgent.platform.isIos()) {
      re = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/;
      var match = re.exec(userAgentString);
      version = match && match[1].replace(/_/g, ".");
    } else {
      if (goog.labs.userAgent.platform.isMacintosh()) {
        re = /Mac OS X ([0-9_.]+)/;
        var match = re.exec(userAgentString);
        version = match ? match[1].replace(/_/g, ".") : "10";
      } else {
        if (goog.labs.userAgent.platform.isKaiOS()) {
          re = /(?:KaiOS)\/(\S+)/i;
          var match = re.exec(userAgentString);
          version = match && match[1];
        } else {
          if (goog.labs.userAgent.platform.isAndroid()) {
            re = /Android\s+([^\);]+)(\)|;)/;
            var match = re.exec(userAgentString);
            version = match && match[1];
          } else {
            if (goog.labs.userAgent.platform.isChromeOS()) {
              re = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/;
              var match = re.exec(userAgentString);
              version = match && match[1];
            }
          }
        }
      }
    }
  }
  return version || "";
};
/**
 * @param {(string|number)} version
 * @return {boolean}
 */
goog.labs.userAgent.platform.isVersionOrHigher = function(version) {
  return goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), version) >= 0;
};

//# sourceMappingURL=goog.labs.useragent.platform.js.map
