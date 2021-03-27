goog.provide("goog.math");
goog.require("goog.array");
goog.require("goog.asserts");
/**
 * @param {number} a
 * @return {number}
 */
goog.math.randomInt = function(a) {
  return Math.floor(Math.random() * a);
};
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
goog.math.uniformRandom = function(a, b) {
  return a + Math.random() * (b - a);
};
/**
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
goog.math.clamp = function(value, min, max) {
  return Math.min(Math.max(value, min), max);
};
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
goog.math.modulo = function(a, b) {
  var r = a % b;
  return r * b < 0 ? r + b : r;
};
/**
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
goog.math.lerp = function(a, b, x) {
  return a + x * (b - a);
};
/**
 * @param {number} a
 * @param {number} b
 * @param {number=} opt_tolerance
 * @return {boolean}
 */
goog.math.nearlyEquals = function(a, b, opt_tolerance) {
  return Math.abs(a - b) <= (opt_tolerance || 0.000001);
};
/**
 * @param {number} angle
 * @return {number}
 */
goog.math.standardAngle = function(angle) {
  return goog.math.modulo(angle, 360);
};
/**
 * @param {number} angle
 * @return {number}
 */
goog.math.standardAngleInRadians = function(angle) {
  return goog.math.modulo(angle, 2 * Math.PI);
};
/**
 * @param {number} angleDegrees
 * @return {number}
 */
goog.math.toRadians = function(angleDegrees) {
  return angleDegrees * Math.PI / 180;
};
/**
 * @param {number} angleRadians
 * @return {number}
 */
goog.math.toDegrees = function(angleRadians) {
  return angleRadians * 180 / Math.PI;
};
/**
 * @param {number} degrees
 * @param {number} radius
 * @return {number}
 */
goog.math.angleDx = function(degrees, radius) {
  return radius * Math.cos(goog.math.toRadians(degrees));
};
/**
 * @param {number} degrees
 * @param {number} radius
 * @return {number}
 */
goog.math.angleDy = function(degrees, radius) {
  return radius * Math.sin(goog.math.toRadians(degrees));
};
/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
goog.math.angle = function(x1, y1, x2, y2) {
  return goog.math.standardAngle(goog.math.toDegrees(Math.atan2(y2 - y1, x2 - x1)));
};
/**
 * @param {number} startAngle
 * @param {number} endAngle
 * @return {number}
 */
goog.math.angleDifference = function(startAngle, endAngle) {
  var d = goog.math.standardAngle(endAngle) - goog.math.standardAngle(startAngle);
  if (d > 180) {
    d = d - 360;
  } else {
    if (d <= -180) {
      d = 360 + d;
    }
  }
  return d;
};
/**
 * @param {number} x
 * @return {number}
 */
goog.math.sign = function(x) {
  if (x > 0) {
    return 1;
  }
  if (x < 0) {
    return -1;
  }
  return x;
};
/**
 * @param {IArrayLike<S>} array1
 * @param {IArrayLike<T>} array2
 * @param {Function=} opt_compareFn
 * @param {Function=} opt_collectorFn
 * @return {!Array<(S|T)>}
 * @template S
 * @template T
 */
goog.math.longestCommonSubsequence = function(array1, array2, opt_compareFn, opt_collectorFn) {
  var compare = opt_compareFn || function(a, b) {
    return a == b;
  };
  var collect = opt_collectorFn || function(i1, i2) {
    return array1[i1];
  };
  var length1 = array1.length;
  var length2 = array2.length;
  var arr = [];
  for (var i = 0; i < length1 + 1; i++) {
    arr[i] = [];
    arr[i][0] = 0;
  }
  for (var j = 0; j < length2 + 1; j++) {
    arr[0][j] = 0;
  }
  for (i = 1; i <= length1; i++) {
    for (j = 1; j <= length2; j++) {
      if (compare(array1[i - 1], array2[j - 1])) {
        arr[i][j] = arr[i - 1][j - 1] + 1;
      } else {
        arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
      }
    }
  }
  var result = [];
  var i = length1, j = length2;
  while (i > 0 && j > 0) {
    if (compare(array1[i - 1], array2[j - 1])) {
      result.unshift(collect(i - 1, j - 1));
      i--;
      j--;
    } else {
      if (arr[i - 1][j] > arr[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  }
  return result;
};
/**
 * @param {...number} var_args
 * @return {number}
 */
goog.math.sum = function(var_args) {
  return (/** @type {number} */ (goog.array.reduce(arguments, function(sum, value) {
    return sum + value;
  }, 0)));
};
/**
 * @param {...number} var_args
 * @return {number}
 */
goog.math.average = function(var_args) {
  return goog.math.sum.apply(null, arguments) / arguments.length;
};
/**
 * @param {...number} var_args
 * @return {number}
 */
goog.math.sampleVariance = function(var_args) {
  var sampleSize = arguments.length;
  if (sampleSize < 2) {
    return 0;
  }
  var mean = goog.math.average.apply(null, arguments);
  var variance = goog.math.sum.apply(null, goog.array.map(arguments, function(val) {
    return Math.pow(val - mean, 2);
  })) / (sampleSize - 1);
  return variance;
};
/**
 * @param {...number} var_args
 * @return {number}
 */
goog.math.standardDeviation = function(var_args) {
  return Math.sqrt(goog.math.sampleVariance.apply(null, arguments));
};
/**
 * @param {number} num
 * @return {boolean}
 */
goog.math.isInt = function(num) {
  return isFinite(num) && num % 1 == 0;
};
/**
 * @param {number} num
 * @return {boolean}
 * @deprecated Use {@link isFinite} instead.
 */
goog.math.isFiniteNumber = function(num) {
  return isFinite(num);
};
/**
 * @param {number} num
 * @return {boolean}
 */
goog.math.isNegativeZero = function(num) {
  return num == 0 && 1 / num < 0;
};
/**
 * @param {number} num
 * @return {number}
 */
goog.math.log10Floor = function(num) {
  if (num > 0) {
    var x = Math.round(Math.log(num) * Math.LOG10E);
    return x - (parseFloat("1e" + x) > num ? 1 : 0);
  }
  return num == 0 ? -Infinity : NaN;
};
/**
 * @param {number} num
 * @param {number=} opt_epsilon
 * @return {number}
 */
goog.math.safeFloor = function(num, opt_epsilon) {
  goog.asserts.assert(opt_epsilon === undefined || opt_epsilon > 0);
  return Math.floor(num + (opt_epsilon || 2e-15));
};
/**
 * @param {number} num
 * @param {number=} opt_epsilon
 * @return {number}
 */
goog.math.safeCeil = function(num, opt_epsilon) {
  goog.asserts.assert(opt_epsilon === undefined || opt_epsilon > 0);
  return Math.ceil(num - (opt_epsilon || 2e-15));
};

//# sourceMappingURL=goog.math.math.js.map
