goog.provide("goog.math.Coordinate");
goog.require("goog.math");
/**
 * @struct
 * @constructor
 * @param {number=} opt_x
 * @param {number=} opt_y
 */
goog.math.Coordinate = function(opt_x, opt_y) {
  /** @type {number} */ this.x = opt_x !== undefined ? opt_x : 0;
  /** @type {number} */ this.y = opt_y !== undefined ? opt_y : 0;
};
/**
 * @return {!goog.math.Coordinate}
 */
goog.math.Coordinate.prototype.clone = function() {
  return new goog.math.Coordinate(this.x, this.y);
};
if (goog.DEBUG) {
  /**
   * @return {string}
   * @override
   */
  goog.math.Coordinate.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ")";
  };
}
/**
 * @param {*} other
 * @return {boolean}
 */
goog.math.Coordinate.prototype.equals = function(other) {
  return other instanceof goog.math.Coordinate && goog.math.Coordinate.equals(this, other);
};
/**
 * @param {goog.math.Coordinate} a
 * @param {goog.math.Coordinate} b
 * @return {boolean}
 */
goog.math.Coordinate.equals = function(a, b) {
  if (a == b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  return a.x == b.x && a.y == b.y;
};
/**
 * @param {!goog.math.Coordinate} a
 * @param {!goog.math.Coordinate} b
 * @return {number}
 */
goog.math.Coordinate.distance = function(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
};
/**
 * @param {!goog.math.Coordinate} a
 * @return {number}
 */
goog.math.Coordinate.magnitude = function(a) {
  return Math.sqrt(a.x * a.x + a.y * a.y);
};
/**
 * @param {!goog.math.Coordinate} a
 * @return {number}
 */
goog.math.Coordinate.azimuth = function(a) {
  return goog.math.angle(0, 0, a.x, a.y);
};
/**
 * @param {!goog.math.Coordinate} a
 * @param {!goog.math.Coordinate} b
 * @return {number}
 */
goog.math.Coordinate.squaredDistance = function(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return dx * dx + dy * dy;
};
/**
 * @param {!goog.math.Coordinate} a
 * @param {!goog.math.Coordinate} b
 * @return {!goog.math.Coordinate}
 */
goog.math.Coordinate.difference = function(a, b) {
  return new goog.math.Coordinate(a.x - b.x, a.y - b.y);
};
/**
 * @param {!goog.math.Coordinate} a
 * @param {!goog.math.Coordinate} b
 * @return {!goog.math.Coordinate}
 */
goog.math.Coordinate.sum = function(a, b) {
  return new goog.math.Coordinate(a.x + b.x, a.y + b.y);
};
/**
 * @return {!goog.math.Coordinate}
 */
goog.math.Coordinate.prototype.ceil = function() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this;
};
/**
 * @return {!goog.math.Coordinate}
 */
goog.math.Coordinate.prototype.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this;
};
/**
 * @return {!goog.math.Coordinate}
 */
goog.math.Coordinate.prototype.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this;
};
/**
 * @param {(number|goog.math.Coordinate)} tx
 * @param {number=} opt_ty
 * @return {!goog.math.Coordinate}
 */
goog.math.Coordinate.prototype.translate = function(tx, opt_ty) {
  if (tx instanceof goog.math.Coordinate) {
    this.x += tx.x;
    this.y += tx.y;
  } else {
    this.x += Number(tx);
    if (typeof opt_ty === "number") {
      this.y += opt_ty;
    }
  }
  return this;
};
/**
 * @param {number} sx
 * @param {number=} opt_sy
 * @return {!goog.math.Coordinate}
 */
goog.math.Coordinate.prototype.scale = function(sx, opt_sy) {
  var sy = typeof opt_sy === "number" ? opt_sy : sx;
  this.x *= sx;
  this.y *= sy;
  return this;
};
/**
 * @param {number} radians
 * @param {!goog.math.Coordinate=} opt_center
 */
goog.math.Coordinate.prototype.rotateRadians = function(radians, opt_center) {
  var center = opt_center || new goog.math.Coordinate(0, 0);
  var x = this.x;
  var y = this.y;
  var cos = Math.cos(radians);
  var sin = Math.sin(radians);
  this.x = (x - center.x) * cos - (y - center.y) * sin + center.x;
  this.y = (x - center.x) * sin + (y - center.y) * cos + center.y;
};
/**
 * @param {number} degrees
 * @param {!goog.math.Coordinate=} opt_center
 */
goog.math.Coordinate.prototype.rotateDegrees = function(degrees, opt_center) {
  this.rotateRadians(goog.math.toRadians(degrees), opt_center);
};

//# sourceMappingURL=goog.math.coordinate.js.map
