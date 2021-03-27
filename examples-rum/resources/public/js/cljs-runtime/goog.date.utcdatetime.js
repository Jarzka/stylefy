goog.provide("goog.date.UtcDateTime");
goog.require("goog.date");
goog.require("goog.date.Date");
goog.require("goog.date.DateTime");
goog.require("goog.date.Interval");
/**
 * @struct
 * @constructor
 * @extends {goog.date.DateTime}
 * @param {(number|goog.date.DateLike)=} opt_year
 * @param {number=} opt_month
 * @param {number=} opt_date
 * @param {number=} opt_hours
 * @param {number=} opt_minutes
 * @param {number=} opt_seconds
 * @param {number=} opt_milliseconds
 */
goog.date.UtcDateTime = function(opt_year, opt_month, opt_date, opt_hours, opt_minutes, opt_seconds, opt_milliseconds) {
  var timestamp;
  if (typeof opt_year === "number") {
    timestamp = Date.UTC(opt_year, opt_month || 0, opt_date || 1, opt_hours || 0, opt_minutes || 0, opt_seconds || 0, opt_milliseconds || 0);
  } else {
    timestamp = opt_year ? opt_year.getTime() : goog.now();
  }
  /** @override */ this.date = new Date(timestamp);
};
goog.inherits(goog.date.UtcDateTime, goog.date.DateTime);
/**
 * @param {number} timestamp
 * @return {!goog.date.UtcDateTime}
 */
goog.date.UtcDateTime.fromTimestamp = function(timestamp) {
  var date = new goog.date.UtcDateTime;
  date.setTime(timestamp);
  return date;
};
/**
 * @param {string} formatted
 * @return {goog.date.UtcDateTime}
 */
goog.date.UtcDateTime.fromIsoString = function(formatted) {
  var ret = new goog.date.UtcDateTime(2000);
  return goog.date.setIso8601DateTime(ret, formatted) ? ret : null;
};
/**
 * @return {!goog.date.UtcDateTime}
 * @override
 */
goog.date.UtcDateTime.prototype.clone = function() {
  var date = new goog.date.UtcDateTime(this.date);
  date.setFirstDayOfWeek(this.getFirstDayOfWeek());
  date.setFirstWeekCutOffDay(this.getFirstWeekCutOffDay());
  return date;
};
/** @override */ goog.date.UtcDateTime.prototype.add = function(interval) {
  if (interval.years || interval.months) {
    var yearsMonths = new goog.date.Interval(interval.years, interval.months);
    goog.date.Date.prototype.add.call(this, yearsMonths);
  }
  var daysAndTimeMillis = 1000 * (interval.seconds + 60 * (interval.minutes + 60 * (interval.hours + 24 * interval.days)));
  this.date = new Date(this.date.getTime() + daysAndTimeMillis);
};
/** @override */ goog.date.UtcDateTime.prototype.getTimezoneOffset = function() {
  return 0;
};
/** @override */ goog.date.UtcDateTime.prototype.getFullYear = goog.date.DateTime.prototype.getUTCFullYear;
/** @override */ goog.date.UtcDateTime.prototype.getMonth = goog.date.DateTime.prototype.getUTCMonth;
/** @override */ goog.date.UtcDateTime.prototype.getDate = goog.date.DateTime.prototype.getUTCDate;
/** @override */ goog.date.UtcDateTime.prototype.getHours = goog.date.DateTime.prototype.getUTCHours;
/** @override */ goog.date.UtcDateTime.prototype.getMinutes = goog.date.DateTime.prototype.getUTCMinutes;
/** @override */ goog.date.UtcDateTime.prototype.getSeconds = goog.date.DateTime.prototype.getUTCSeconds;
/** @override */ goog.date.UtcDateTime.prototype.getMilliseconds = goog.date.DateTime.prototype.getUTCMilliseconds;
/** @override */ goog.date.UtcDateTime.prototype.getDay = goog.date.DateTime.prototype.getUTCDay;
/** @override */ goog.date.UtcDateTime.prototype.setFullYear = goog.date.DateTime.prototype.setUTCFullYear;
/** @override */ goog.date.UtcDateTime.prototype.setMonth = goog.date.DateTime.prototype.setUTCMonth;
/** @override */ goog.date.UtcDateTime.prototype.setDate = goog.date.DateTime.prototype.setUTCDate;
/** @override */ goog.date.UtcDateTime.prototype.setHours = goog.date.DateTime.prototype.setUTCHours;
/** @override */ goog.date.UtcDateTime.prototype.setMinutes = goog.date.DateTime.prototype.setUTCMinutes;
/** @override */ goog.date.UtcDateTime.prototype.setSeconds = goog.date.DateTime.prototype.setUTCSeconds;
/** @override */ goog.date.UtcDateTime.prototype.setMilliseconds = goog.date.DateTime.prototype.setUTCMilliseconds;

//# sourceMappingURL=goog.date.utcdatetime.js.map
