goog.provide("goog.dom.tags");
goog.require("goog.object");
/** @private @const @type {!Object<string,boolean>} */ goog.dom.tags.VOID_TAGS_ = goog.object.createSet("area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr");
/**
 * @param {string} tagName
 * @return {boolean}
 */
goog.dom.tags.isVoidTag = function(tagName) {
  return goog.dom.tags.VOID_TAGS_[tagName] === true;
};

//# sourceMappingURL=goog.dom.tags.js.map
