/**
 * @suppress {checkPrototypalTypes}
 */
goog.provide("goog.date");
goog.provide("goog.date.Date");
goog.provide("goog.date.DateTime");
goog.provide("goog.date.Interval");
goog.provide("goog.date.month");
goog.provide("goog.date.weekDay");
goog.require("goog.asserts");
/**
 * @suppress {extraRequire}
 */
goog.require("goog.date.DateLike");
goog.require("goog.i18n.DateTimeSymbols");
goog.require("goog.string");
/** @enum {number} */ goog.date.weekDay = {MON:0, TUE:1, WED:2, THU:3, FRI:4, SAT:5, SUN:6};
/** @enum {number} */ goog.date.month = {JAN:0, FEB:1, MAR:2, APR:3, MAY:4, JUN:5, JUL:6, AUG:7, SEP:8, OCT:9, NOV:10, DEC:11};
/**
 * @param {string} monthName
 * @param {number} yearNum
 * @return {string}
 * @deprecated Use goog.i18n.DateTimeFormat with goog.i18n.DateTimeFormat.Format.YEAR_MONTH_ABBR or goog.i18n.DateTimeFormat.Format.YEAR_MONTH_FULL.
 */
goog.date.formatMonthAndYear = function(monthName, yearNum) {
  /**
   * @desc Month/year format given the month name and the numeric year.
   */
  var MSG_MONTH_AND_YEAR = goog.getMsg("{$monthName} {$yearNum}", {"monthName":monthName, "yearNum":String(yearNum)});
  return MSG_MONTH_AND_YEAR;
};
/** @private @type {RegExp} */ goog.date.splitDateStringRegex_ = new RegExp("^(\\d{4})(?:(?:-?(\\d{2})(?:-?(\\d{2}))?)|" + "(?:-?(\\d{3}))|(?:-?W(\\d{2})(?:-?([1-7]))?))?$");
/** @private @type {RegExp} */ goog.date.splitTimeStringRegex_ = /^(\d{2})(?::?(\d{2})(?::?(\d{2})(\.\d+)?)?)?$/;
/** @private @type {RegExp} */ goog.date.splitTimezoneStringRegex_ = /Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/;
/** @private @type {RegExp} */ goog.date.splitDurationRegex_ = new RegExp("^(-)?P(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)D)?" + "(T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$");
/** @type {number} */ goog.date.MS_PER_DAY = 24 * 60 * 60 * 1000;
/**
 * @param {number} year
 * @return {boolean}
 */
goog.date.isLeapYear = function(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
};
/**
 * @param {number} year
 * @return {boolean}
 */
goog.date.isLongIsoYear = function(year) {
  var n = 5 * year + 12 - 4 * (Math.floor(year / 100) - Math.floor(year / 400));
  n += Math.floor((year - 100) / 400) - Math.floor((year - 102) / 400);
  n += Math.floor((year - 200) / 400) - Math.floor((year - 199) / 400);
  return n % 28 < 5;
};
/**
 * @param {number} year
 * @param {number} month
 * @return {number}
 */
goog.date.getNumberOfDaysInMonth = function(year, month) {
  switch(month) {
    case goog.date.month.FEB:
      return goog.date.isLeapYear(year) ? 29 : 28;
    case goog.date.month.JUN:
    case goog.date.month.SEP:
    case goog.date.month.NOV:
    case goog.date.month.APR:
      return 30;
  }
  return 31;
};
/**
 * @param {goog.date.DateLike} date
 * @param {goog.date.DateLike=} opt_now
 * @return {boolean}
 */
goog.date.isSameDay = function(date, opt_now) {
  var now = opt_now || new Date(goog.now());
  return date.getDate() == now.getDate() && goog.date.isSameMonth(date, now);
};
/**
 * @param {goog.date.DateLike} date
 * @param {goog.date.DateLike=} opt_now
 * @return {boolean}
 */
goog.date.isSameMonth = function(date, opt_now) {
  var now = opt_now || new Date(goog.now());
  return date.getMonth() == now.getMonth() && goog.date.isSameYear(date, now);
};
/**
 * @param {goog.date.DateLike} date
 * @param {goog.date.DateLike=} opt_now
 * @return {boolean}
 */
goog.date.isSameYear = function(date, opt_now) {
  var now = opt_now || new Date(goog.now());
  return date.getFullYear() == now.getFullYear();
};
/**
 * @private
 * @param {number} year
 * @param {number} month
 * @param {number} date
 * @param {number=} opt_weekDay
 * @param {number=} opt_firstDayOfWeek
 * @return {number}
 */
goog.date.getCutOffSameWeek_ = function(year, month, date, opt_weekDay, opt_firstDayOfWeek) {
  var d = new Date(year, month, date);
  var cutoff = opt_weekDay !== undefined ? opt_weekDay : goog.date.weekDay.THU;
  var firstday = opt_firstDayOfWeek || goog.date.weekDay.MON;
  var isoday = (d.getDay() + 6) % 7;
  var daypos = (isoday - firstday + 7) % 7;
  var cutoffpos = (cutoff - firstday + 7) % 7;
  return d.valueOf() + (cutoffpos - daypos) * goog.date.MS_PER_DAY;
};
/**
 * @param {number} year
 * @param {number} month
 * @param {number} date
 * @param {number=} opt_weekDay
 * @param {number=} opt_firstDayOfWeek
 * @return {number}
 */
goog.date.getWeekNumber = function(year, month, date, opt_weekDay, opt_firstDayOfWeek) {
  var cutoffSameWeek = goog.date.getCutOffSameWeek_(year, month, date, opt_weekDay, opt_firstDayOfWeek);
  var jan1 = (new Date((new Date(cutoffSameWeek)).getFullYear(), 0, 1)).valueOf();
  return Math.floor(Math.round((cutoffSameWeek - jan1) / goog.date.MS_PER_DAY) / 7) + 1;
};
/**
 * @param {number} year
 * @param {number} month
 * @param {number} date
 * @param {number=} opt_weekDay
 * @param {number=} opt_firstDayOfWeek
 * @return {number}
 */
goog.date.getYearOfWeek = function(year, month, date, opt_weekDay, opt_firstDayOfWeek) {
  var cutoffSameWeek = goog.date.getCutOffSameWeek_(year, month, date, opt_weekDay, opt_firstDayOfWeek);
  return (new Date(cutoffSameWeek)).getFullYear();
};
/**
 * @param {T} date1
 * @param {S} date2
 * @return {(T|S)}
 * @template T
 * @template S
 */
goog.date.min = function(date1, date2) {
  return date1 < date2 ? date1 : date2;
};
/**
 * @param {T} date1
 * @param {S} date2
 * @return {(T|S)}
 * @template T
 * @template S
 */
goog.date.max = function(date1, date2) {
  return date1 > date2 ? date1 : date2;
};
/**
 * @param {!goog.date.DateTime} dateTime
 * @param {string} formatted
 * @return {boolean}
 */
goog.date.setIso8601DateTime = function(dateTime, formatted) {
  formatted = goog.string.trim(formatted);
  var delim = formatted.indexOf("T") == -1 ? " " : "T";
  var parts = formatted.split(delim);
  return goog.date.setIso8601DateOnly_(dateTime, parts[0]) && (parts.length < 2 || goog.date.setIso8601TimeOnly_(dateTime, parts[1]));
};
/**
 * @private
 * @param {!goog.date.Date} d
 * @param {string} formatted
 * @return {boolean}
 */
goog.date.setIso8601DateOnly_ = function(d, formatted) {
  var parts = formatted.match(goog.date.splitDateStringRegex_);
  if (!parts) {
    return false;
  }
  var year = Number(parts[1]);
  var month = Number(parts[2]);
  var date = Number(parts[3]);
  var dayOfYear = Number(parts[4]);
  var week = Number(parts[5]);
  var dayOfWeek = Number(parts[6]) || 1;
  d.setFullYear(year);
  if (dayOfYear) {
    d.setDate(1);
    d.setMonth(0);
    var offset = dayOfYear - 1;
    d.add(new goog.date.Interval(goog.date.Interval.DAYS, offset));
  } else {
    if (week) {
      goog.date.setDateFromIso8601Week_(d, week, dayOfWeek);
    } else {
      if (month) {
        d.setDate(1);
        d.setMonth(month - 1);
      }
      if (date) {
        d.setDate(date);
      }
    }
  }
  return true;
};
/**
 * @private
 * @param {!goog.date.Date} d
 * @param {number} week
 * @param {number} dayOfWeek
 */
goog.date.setDateFromIso8601Week_ = function(d, week, dayOfWeek) {
  d.setMonth(0);
  d.setDate(1);
  var jsDay = d.getDay();
  var jan1WeekDay = jsDay || 7;
  var THURSDAY = 4;
  if (jan1WeekDay <= THURSDAY) {
    var startDelta = 1 - jan1WeekDay;
  } else {
    startDelta = 8 - jan1WeekDay;
  }
  var absoluteDays = Number(dayOfWeek) + 7 * (Number(week) - 1);
  var delta = startDelta + absoluteDays - 1;
  var interval = new goog.date.Interval(goog.date.Interval.DAYS, delta);
  d.add(interval);
};
/**
 * @private
 * @param {!goog.date.DateTime} d
 * @param {string} formatted
 * @return {boolean}
 */
goog.date.setIso8601TimeOnly_ = function(d, formatted) {
  var timezoneParts = formatted.match(goog.date.splitTimezoneStringRegex_);
  var offsetMinutes;
  var formattedTime;
  if (timezoneParts) {
    formattedTime = formatted.substring(0, formatted.length - timezoneParts[0].length);
    if (timezoneParts[0] === "Z") {
      offsetMinutes = 0;
    } else {
      offsetMinutes = Number(timezoneParts[2]) * 60 + Number(timezoneParts[3]);
      offsetMinutes *= timezoneParts[1] == "-" ? 1 : -1;
    }
  } else {
    formattedTime = formatted;
  }
  var timeParts = formattedTime.match(goog.date.splitTimeStringRegex_);
  if (!timeParts) {
    return false;
  }
  if (timezoneParts) {
    goog.asserts.assertNumber(offsetMinutes);
    var year = d.getYear();
    var month = d.getMonth();
    var day = d.getDate();
    var hour = Number(timeParts[1]);
    var minute = Number(timeParts[2]) || 0;
    var second = Number(timeParts[3]) || 0;
    var millisecond = timeParts[4] ? Number(timeParts[4]) * 1000 : 0;
    var utc = Date.UTC(year, month, day, hour, minute, second, millisecond);
    d.setTime(utc + offsetMinutes * 60000);
  } else {
    d.setHours(Number(timeParts[1]));
    d.setMinutes(Number(timeParts[2]) || 0);
    d.setSeconds(Number(timeParts[3]) || 0);
    d.setMilliseconds(timeParts[4] ? Number(timeParts[4]) * 1000 : 0);
  }
  return true;
};
/**
 * @final
 * @struct
 * @constructor
 * @param {(number|string)=} opt_years
 * @param {number=} opt_months
 * @param {number=} opt_days
 * @param {number=} opt_hours
 * @param {number=} opt_minutes
 * @param {number=} opt_seconds
 */
goog.date.Interval = function(opt_years, opt_months, opt_days, opt_hours, opt_minutes, opt_seconds) {
  if (typeof opt_years === "string") {
    var type = opt_years;
    var interval = /** @type {number} */ (opt_months);
    /** @type {number} */ this.years = type == goog.date.Interval.YEARS ? interval : 0;
    /** @type {number} */ this.months = type == goog.date.Interval.MONTHS ? interval : 0;
    /** @type {number} */ this.days = type == goog.date.Interval.DAYS ? interval : 0;
    /** @type {number} */ this.hours = type == goog.date.Interval.HOURS ? interval : 0;
    /** @type {number} */ this.minutes = type == goog.date.Interval.MINUTES ? interval : 0;
    /** @type {number} */ this.seconds = type == goog.date.Interval.SECONDS ? interval : 0;
  } else {
    this.years = /** @type {number} */ (opt_years) || 0;
    this.months = opt_months || 0;
    this.days = opt_days || 0;
    this.hours = opt_hours || 0;
    this.minutes = opt_minutes || 0;
    this.seconds = opt_seconds || 0;
  }
};
/**
 * @param {string} duration
 * @return {goog.date.Interval}
 */
goog.date.Interval.fromIsoString = function(duration) {
  var parts = duration.match(goog.date.splitDurationRegex_);
  if (!parts) {
    return null;
  }
  var timeEmpty = !(parts[6] || parts[7] || parts[8]);
  var dateTimeEmpty = timeEmpty && !(parts[2] || parts[3] || parts[4]);
  if (dateTimeEmpty || timeEmpty && parts[5]) {
    return null;
  }
  var negative = parts[1];
  var years = parseInt(parts[2], 10) || 0;
  var months = parseInt(parts[3], 10) || 0;
  var days = parseInt(parts[4], 10) || 0;
  var hours = parseInt(parts[6], 10) || 0;
  var minutes = parseInt(parts[7], 10) || 0;
  var seconds = parseFloat(parts[8]) || 0;
  return negative ? new goog.date.Interval(-years, -months, -days, -hours, -minutes, -seconds) : new goog.date.Interval(years, months, days, hours, minutes, seconds);
};
/**
 * @param {boolean=} opt_verbose
 * @return {?string}
 */
goog.date.Interval.prototype.toIsoString = function(opt_verbose) {
  var minField = Math.min(this.years, this.months, this.days, this.hours, this.minutes, this.seconds);
  var maxField = Math.max(this.years, this.months, this.days, this.hours, this.minutes, this.seconds);
  if (minField < 0 && maxField > 0) {
    return null;
  }
  if (!opt_verbose && minField == 0 && maxField == 0) {
    return "PT0S";
  }
  var res = [];
  if (minField < 0) {
    res.push("-");
  }
  res.push("P");
  if (this.years || opt_verbose) {
    res.push(Math.abs(this.years) + "Y");
  }
  if (this.months || opt_verbose) {
    res.push(Math.abs(this.months) + "M");
  }
  if (this.days || opt_verbose) {
    res.push(Math.abs(this.days) + "D");
  }
  if (this.hours || this.minutes || this.seconds || opt_verbose) {
    res.push("T");
    if (this.hours || opt_verbose) {
      res.push(Math.abs(this.hours) + "H");
    }
    if (this.minutes || opt_verbose) {
      res.push(Math.abs(this.minutes) + "M");
    }
    if (this.seconds || opt_verbose) {
      res.push(Math.abs(this.seconds) + "S");
    }
  }
  return res.join("");
};
/**
 * @param {goog.date.Interval} other
 * @return {boolean}
 */
goog.date.Interval.prototype.equals = function(other) {
  return other.years == this.years && other.months == this.months && other.days == this.days && other.hours == this.hours && other.minutes == this.minutes && other.seconds == this.seconds;
};
/**
 * @return {!goog.date.Interval}
 */
goog.date.Interval.prototype.clone = function() {
  return new goog.date.Interval(this.years, this.months, this.days, this.hours, this.minutes, this.seconds);
};
/** @type {string} */ goog.date.Interval.YEARS = "y";
/** @type {string} */ goog.date.Interval.MONTHS = "m";
/** @type {string} */ goog.date.Interval.DAYS = "d";
/** @type {string} */ goog.date.Interval.HOURS = "h";
/** @type {string} */ goog.date.Interval.MINUTES = "n";
/** @type {string} */ goog.date.Interval.SECONDS = "s";
/**
 * @return {boolean}
 */
goog.date.Interval.prototype.isZero = function() {
  return this.years == 0 && this.months == 0 && this.days == 0 && this.hours == 0 && this.minutes == 0 && this.seconds == 0;
};
/**
 * @return {!goog.date.Interval}
 */
goog.date.Interval.prototype.getInverse = function() {
  return this.times(-1);
};
/**
 * @param {number} n
 * @return {!goog.date.Interval}
 */
goog.date.Interval.prototype.times = function(n) {
  return new goog.date.Interval(this.years * n, this.months * n, this.days * n, this.hours * n, this.minutes * n, this.seconds * n);
};
/**
 * @return {number}
 */
goog.date.Interval.prototype.getTotalSeconds = function() {
  goog.asserts.assert(this.years == 0 && this.months == 0);
  return ((this.days * 24 + this.hours) * 60 + this.minutes) * 60 + this.seconds;
};
/**
 * @param {goog.date.Interval} interval
 */
goog.date.Interval.prototype.add = function(interval) {
  this.years += interval.years;
  this.months += interval.months;
  this.days += interval.days;
  this.hours += interval.hours;
  this.minutes += interval.minutes;
  this.seconds += interval.seconds;
};
/**
 * @struct
 * @constructor
 * @param {(number|goog.date.DateLike)=} opt_year
 * @param {number=} opt_month
 * @param {number=} opt_date
 */
goog.date.Date = function(opt_year, opt_month, opt_date) {
  /** @protected @type {!Date} */ this.date;
  if (typeof opt_year === "number") {
    this.date = this.buildDate_(opt_year, opt_month || 0, opt_date || 1);
    this.maybeFixDst_(opt_date || 1);
  } else {
    if (goog.isObject(opt_year)) {
      this.date = this.buildDate_(opt_year.getFullYear(), opt_year.getMonth(), opt_year.getDate());
      this.maybeFixDst_(opt_year.getDate());
    } else {
      this.date = new Date(goog.now());
      var expectedDate = this.date.getDate();
      this.date.setHours(0);
      this.date.setMinutes(0);
      this.date.setSeconds(0);
      this.date.setMilliseconds(0);
      this.maybeFixDst_(expectedDate);
    }
  }
};
/**
 * @private
 * @param {number} fullYear
 * @param {number} month
 * @param {number} date
 * @return {!Date}
 */
goog.date.Date.prototype.buildDate_ = function(fullYear, month, date) {
  var d = new Date(fullYear, month, date);
  if (fullYear >= 0 && fullYear < 100) {
    d.setFullYear(d.getFullYear() - 1900);
  }
  return d;
};
/** @private @type {number} */ goog.date.Date.prototype.firstDayOfWeek_ = goog.i18n.DateTimeSymbols.FIRSTDAYOFWEEK;
/** @private @type {number} */ goog.date.Date.prototype.firstWeekCutOffDay_ = goog.i18n.DateTimeSymbols.FIRSTWEEKCUTOFFDAY;
/**
 * @return {!goog.date.Date}
 */
goog.date.Date.prototype.clone = function() {
  var date = new goog.date.Date(this.date);
  date.firstDayOfWeek_ = this.firstDayOfWeek_;
  date.firstWeekCutOffDay_ = this.firstWeekCutOffDay_;
  return date;
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getFullYear = function() {
  return this.date.getFullYear();
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getYear = function() {
  return this.getFullYear();
};
/**
 * @return {goog.date.month}
 */
goog.date.Date.prototype.getMonth = function() {
  return (/** @type {goog.date.month} */ (this.date.getMonth()));
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getDate = function() {
  return this.date.getDate();
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getTime = function() {
  return this.date.getTime();
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getDay = function() {
  return this.date.getDay();
};
/**
 * @return {goog.date.weekDay}
 */
goog.date.Date.prototype.getIsoWeekday = function() {
  return (/** @type {goog.date.weekDay} */ ((this.getDay() + 6) % 7));
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getWeekday = function() {
  return (this.getIsoWeekday() - this.firstDayOfWeek_ + 7) % 7;
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getUTCFullYear = function() {
  return this.date.getUTCFullYear();
};
/**
 * @return {goog.date.month}
 */
goog.date.Date.prototype.getUTCMonth = function() {
  return (/** @type {goog.date.month} */ (this.date.getUTCMonth()));
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getUTCDate = function() {
  return this.date.getUTCDate();
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getUTCDay = function() {
  return this.date.getDay();
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getUTCHours = function() {
  return this.date.getUTCHours();
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getUTCMinutes = function() {
  return this.date.getUTCMinutes();
};
/**
 * @return {goog.date.weekDay}
 */
goog.date.Date.prototype.getUTCIsoWeekday = function() {
  return (/** @type {goog.date.weekDay} */ ((this.date.getUTCDay() + 6) % 7));
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getUTCWeekday = function() {
  return (this.getUTCIsoWeekday() - this.firstDayOfWeek_ + 7) % 7;
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getFirstDayOfWeek = function() {
  return this.firstDayOfWeek_;
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getFirstWeekCutOffDay = function() {
  return this.firstWeekCutOffDay_;
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getNumberOfDaysInMonth = function() {
  return goog.date.getNumberOfDaysInMonth(this.getFullYear(), this.getMonth());
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getWeekNumber = function() {
  return goog.date.getWeekNumber(this.getFullYear(), this.getMonth(), this.getDate(), this.firstWeekCutOffDay_, this.firstDayOfWeek_);
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getYearOfWeek = function() {
  return goog.date.getYearOfWeek(this.getFullYear(), this.getMonth(), this.getDate(), this.firstWeekCutOffDay_, this.firstDayOfWeek_);
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getDayOfYear = function() {
  var dayOfYear = this.getDate();
  var year = this.getFullYear();
  for (var m = this.getMonth() - 1; m >= 0; m--) {
    dayOfYear += goog.date.getNumberOfDaysInMonth(year, m);
  }
  return dayOfYear;
};
/**
 * @return {number}
 */
goog.date.Date.prototype.getTimezoneOffset = function() {
  return this.date.getTimezoneOffset();
};
/**
 * @return {string}
 */
goog.date.Date.prototype.getTimezoneOffsetString = function() {
  var tz;
  var offset = this.getTimezoneOffset();
  if (offset == 0) {
    tz = "Z";
  } else {
    var n = Math.abs(offset) / 60;
    var h = Math.floor(n);
    var m = (n - h) * 60;
    tz = (offset > 0 ? "-" : "+") + goog.string.padNumber(h, 2) + ":" + goog.string.padNumber(m, 2);
  }
  return tz;
};
/**
 * @param {goog.date.Date} date
 */
goog.date.Date.prototype.set = function(date) {
  this.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
};
/**
 * @param {number} year
 */
goog.date.Date.prototype.setFullYear = function(year) {
  this.date.setFullYear(year);
};
/**
 * @param {number} year
 */
goog.date.Date.prototype.setYear = function(year) {
  this.setFullYear(year);
};
/**
 * @param {number} month
 */
goog.date.Date.prototype.setMonth = function(month) {
  this.date.setMonth(month);
};
/**
 * @param {number} date
 */
goog.date.Date.prototype.setDate = function(date) {
  this.date.setDate(date);
};
/**
 * @param {number} ms
 */
goog.date.Date.prototype.setTime = function(ms) {
  this.date.setTime(ms);
};
/**
 * @param {number} year
 */
goog.date.Date.prototype.setUTCFullYear = function(year) {
  this.date.setUTCFullYear(year);
};
/**
 * @param {number} month
 */
goog.date.Date.prototype.setUTCMonth = function(month) {
  this.date.setUTCMonth(month);
};
/**
 * @param {number} date
 */
goog.date.Date.prototype.setUTCDate = function(date) {
  this.date.setUTCDate(date);
};
/**
 * @param {number} day
 */
goog.date.Date.prototype.setFirstDayOfWeek = function(day) {
  this.firstDayOfWeek_ = day;
};
/**
 * @param {number} day
 */
goog.date.Date.prototype.setFirstWeekCutOffDay = function(day) {
  this.firstWeekCutOffDay_ = day;
};
/**
 * @param {goog.date.Interval} interval
 */
goog.date.Date.prototype.add = function(interval) {
  if (interval.years || interval.months) {
    var month = this.getMonth() + interval.months + interval.years * 12;
    var year = this.getYear() + Math.floor(month / 12);
    month %= 12;
    if (month < 0) {
      month += 12;
    }
    var daysInTargetMonth = goog.date.getNumberOfDaysInMonth(year, month);
    var date = Math.min(daysInTargetMonth, this.getDate());
    this.setDate(1);
    this.setFullYear(year);
    this.setMonth(month);
    this.setDate(date);
  }
  if (interval.days) {
    var noon = new Date(this.getYear(), this.getMonth(), this.getDate(), 12);
    var result = new Date(noon.getTime() + interval.days * 86400000);
    this.setDate(1);
    this.setFullYear(result.getFullYear());
    this.setMonth(result.getMonth());
    this.setDate(result.getDate());
    this.maybeFixDst_(result.getDate());
  }
};
/**
 * @param {boolean=} opt_verbose
 * @param {boolean=} opt_tz
 * @return {string}
 */
goog.date.Date.prototype.toIsoString = function(opt_verbose, opt_tz) {
  var str = [this.getFullYear(), goog.string.padNumber(this.getMonth() + 1, 2), goog.string.padNumber(this.getDate(), 2)];
  return str.join(opt_verbose ? "-" : "") + (opt_tz ? this.getTimezoneOffsetString() : "");
};
/**
 * @param {boolean=} opt_verbose
 * @param {boolean=} opt_tz
 * @return {string}
 */
goog.date.Date.prototype.toUTCIsoString = function(opt_verbose, opt_tz) {
  var str = [this.getUTCFullYear(), goog.string.padNumber(this.getUTCMonth() + 1, 2), goog.string.padNumber(this.getUTCDate(), 2)];
  return str.join(opt_verbose ? "-" : "") + (opt_tz ? "Z" : "");
};
/**
 * @param {goog.date.Date} other
 * @return {boolean}
 */
goog.date.Date.prototype.equals = function(other) {
  return !!(other && this.getYear() == other.getYear() && this.getMonth() == other.getMonth() && this.getDate() == other.getDate());
};
/**
 * @return {string}
 * @override
 */
goog.date.Date.prototype.toString = function() {
  return this.toIsoString();
};
/**
 * @private
 * @param {number} expected
 */
goog.date.Date.prototype.maybeFixDst_ = function(expected) {
  if (this.getDate() != expected) {
    var dir = this.getDate() < expected ? 1 : -1;
    this.date.setUTCHours(this.date.getUTCHours() + dir);
  }
};
/**
 * @return {number}
 * @override
 */
goog.date.Date.prototype.valueOf = function() {
  return this.date.valueOf();
};
/**
 * @param {!goog.date.DateLike} date1
 * @param {!goog.date.DateLike} date2
 * @return {number}
 */
goog.date.Date.compare = function(date1, date2) {
  return date1.getTime() - date2.getTime();
};
/**
 * @param {string} formatted
 * @return {?goog.date.Date}
 */
goog.date.Date.fromIsoString = function(formatted) {
  var ret = new goog.date.Date(2000);
  return goog.date.setIso8601DateOnly_(ret, formatted) ? ret : null;
};
/**
 * @struct
 * @constructor
 * @extends {goog.date.Date}
 * @param {(number|{getTime:?}|null)=} opt_year
 * @param {number=} opt_month
 * @param {number=} opt_date
 * @param {number=} opt_hours
 * @param {number=} opt_minutes
 * @param {number=} opt_seconds
 * @param {number=} opt_milliseconds
 */
goog.date.DateTime = function(opt_year, opt_month, opt_date, opt_hours, opt_minutes, opt_seconds, opt_milliseconds) {
  if (typeof opt_year === "number") {
    /** @override */ this.date = new Date(opt_year, opt_month || 0, opt_date || 1, opt_hours || 0, opt_minutes || 0, opt_seconds || 0, opt_milliseconds || 0);
  } else {
    this.date = new Date(opt_year && opt_year.getTime ? opt_year.getTime() : goog.now());
  }
};
goog.inherits(goog.date.DateTime, goog.date.Date);
/**
 * @param {number} timestamp
 * @return {!goog.date.DateTime}
 */
goog.date.DateTime.fromTimestamp = function(timestamp) {
  var date = new goog.date.DateTime;
  date.setTime(timestamp);
  return date;
};
/**
 * @param {string} formatted
 * @return {goog.date.DateTime}
 */
goog.date.DateTime.fromRfc822String = function(formatted) {
  var date = new Date(formatted);
  return !isNaN(date.getTime()) ? new goog.date.DateTime(date) : null;
};
/**
 * @return {number}
 */
goog.date.DateTime.prototype.getHours = function() {
  return this.date.getHours();
};
/**
 * @return {number}
 */
goog.date.DateTime.prototype.getMinutes = function() {
  return this.date.getMinutes();
};
/**
 * @return {number}
 */
goog.date.DateTime.prototype.getSeconds = function() {
  return this.date.getSeconds();
};
/**
 * @return {number}
 */
goog.date.DateTime.prototype.getMilliseconds = function() {
  return this.date.getMilliseconds();
};
/**
 * @return {goog.date.weekDay}
 * @override
 */
goog.date.DateTime.prototype.getUTCDay = function() {
  return (/** @type {goog.date.weekDay} */ (this.date.getUTCDay()));
};
/**
 * @return {number}
 * @override
 */
goog.date.DateTime.prototype.getUTCHours = function() {
  return this.date.getUTCHours();
};
/**
 * @return {number}
 * @override
 */
goog.date.DateTime.prototype.getUTCMinutes = function() {
  return this.date.getUTCMinutes();
};
/**
 * @return {number}
 */
goog.date.DateTime.prototype.getUTCSeconds = function() {
  return this.date.getUTCSeconds();
};
/**
 * @return {number}
 */
goog.date.DateTime.prototype.getUTCMilliseconds = function() {
  return this.date.getUTCMilliseconds();
};
/**
 * @param {number} hours
 */
goog.date.DateTime.prototype.setHours = function(hours) {
  this.date.setHours(hours);
};
/**
 * @param {number} minutes
 */
goog.date.DateTime.prototype.setMinutes = function(minutes) {
  this.date.setMinutes(minutes);
};
/**
 * @param {number} seconds
 */
goog.date.DateTime.prototype.setSeconds = function(seconds) {
  this.date.setSeconds(seconds);
};
/**
 * @param {number} ms
 */
goog.date.DateTime.prototype.setMilliseconds = function(ms) {
  this.date.setMilliseconds(ms);
};
/**
 * @param {number} hours
 */
goog.date.DateTime.prototype.setUTCHours = function(hours) {
  this.date.setUTCHours(hours);
};
/**
 * @param {number} minutes
 */
goog.date.DateTime.prototype.setUTCMinutes = function(minutes) {
  this.date.setUTCMinutes(minutes);
};
/**
 * @param {number} seconds
 */
goog.date.DateTime.prototype.setUTCSeconds = function(seconds) {
  this.date.setUTCSeconds(seconds);
};
/**
 * @param {number} ms
 */
goog.date.DateTime.prototype.setUTCMilliseconds = function(ms) {
  this.date.setUTCMilliseconds(ms);
};
/**
 * @return {boolean}
 */
goog.date.DateTime.prototype.isMidnight = function() {
  return this.getHours() == 0 && this.getMinutes() == 0 && this.getSeconds() == 0 && this.getMilliseconds() == 0;
};
/**
 * @param {goog.date.Interval} interval
 * @override
 */
goog.date.DateTime.prototype.add = function(interval) {
  goog.date.Date.prototype.add.call(this, interval);
  if (interval.hours) {
    this.setUTCHours(this.date.getUTCHours() + interval.hours);
  }
  if (interval.minutes) {
    this.setUTCMinutes(this.date.getUTCMinutes() + interval.minutes);
  }
  if (interval.seconds) {
    this.setUTCSeconds(this.date.getUTCSeconds() + interval.seconds);
  }
};
/**
 * @param {boolean=} opt_verbose
 * @param {boolean=} opt_tz
 * @return {string}
 * @override
 */
goog.date.DateTime.prototype.toIsoString = function(opt_verbose, opt_tz) {
  var dateString = goog.date.Date.prototype.toIsoString.call(this, opt_verbose);
  if (opt_verbose) {
    return dateString + "T" + goog.string.padNumber(this.getHours(), 2) + ":" + goog.string.padNumber(this.getMinutes(), 2) + ":" + goog.string.padNumber(this.getSeconds(), 2) + (opt_tz ? this.getTimezoneOffsetString() : "");
  }
  return dateString + "T" + goog.string.padNumber(this.getHours(), 2) + goog.string.padNumber(this.getMinutes(), 2) + goog.string.padNumber(this.getSeconds(), 2) + (opt_tz ? this.getTimezoneOffsetString() : "");
};
/**
 * @param {boolean=} opt_timezone
 * @return {string}
 */
goog.date.DateTime.prototype.toXmlDateTime = function(opt_timezone) {
  return goog.date.Date.prototype.toIsoString.call(this, true) + "T" + goog.string.padNumber(this.getHours(), 2) + ":" + goog.string.padNumber(this.getMinutes(), 2) + ":" + goog.string.padNumber(this.getSeconds(), 2) + (opt_timezone ? this.getTimezoneOffsetString() : "");
};
/**
 * @param {boolean=} opt_verbose
 * @param {boolean=} opt_tz
 * @return {string}
 * @override
 */
goog.date.DateTime.prototype.toUTCIsoString = function(opt_verbose, opt_tz) {
  var dateStr = goog.date.Date.prototype.toUTCIsoString.call(this, opt_verbose);
  if (opt_verbose) {
    return dateStr + "T" + goog.string.padNumber(this.getUTCHours(), 2) + ":" + goog.string.padNumber(this.getUTCMinutes(), 2) + ":" + goog.string.padNumber(this.getUTCSeconds(), 2) + (opt_tz ? "Z" : "");
  }
  return dateStr + "T" + goog.string.padNumber(this.getUTCHours(), 2) + goog.string.padNumber(this.getUTCMinutes(), 2) + goog.string.padNumber(this.getUTCSeconds(), 2) + (opt_tz ? "Z" : "");
};
/**
 * @return {string}
 */
goog.date.DateTime.prototype.toUTCRfc3339String = function() {
  var date = this.toUTCIsoString(true);
  var millis = this.getUTCMilliseconds();
  return (millis ? date + "." + goog.string.padNumber(millis, 3) : date) + "Z";
};
/**
 * @param {goog.date.Date} other
 * @return {boolean}
 * @override
 */
goog.date.DateTime.prototype.equals = function(other) {
  return this.getTime() == other.getTime();
};
/**
 * @return {string}
 * @override
 */
goog.date.DateTime.prototype.toString = function() {
  return this.toIsoString();
};
/**
 * @param {boolean=} opt_padHours
 * @param {boolean=} opt_showAmPm
 * @param {boolean=} opt_omitZeroMinutes
 * @return {string}
 * @deprecated Use goog.i18n.DateTimeFormat with goog.i18n.DateTimeFormat.Format.FULL_TIME or goog.i18n.DateTimeFormat.Format.LONG_TIME or goog.i18n.DateTimeFormat.Format.MEDIUM_TIME or goog.i18n.DateTimeFormat.Format.SHORT_TIME.
 */
goog.date.DateTime.prototype.toUsTimeString = function(opt_padHours, opt_showAmPm, opt_omitZeroMinutes) {
  var hours = this.getHours();
  if (opt_showAmPm === undefined) {
    opt_showAmPm = true;
  }
  var isPM = hours == 12;
  if (hours > 12) {
    hours -= 12;
    isPM = true;
  }
  if (hours == 0 && opt_showAmPm) {
    hours = 12;
  }
  var label = opt_padHours ? goog.string.padNumber(hours, 2) : String(hours);
  var minutes = this.getMinutes();
  if (!opt_omitZeroMinutes || minutes > 0) {
    label += ":" + goog.string.padNumber(minutes, 2);
  }
  if (opt_showAmPm) {
    label += isPM ? " PM" : " AM";
  }
  return label;
};
/**
 * @param {boolean=} opt_showSeconds
 * @return {string}
 */
goog.date.DateTime.prototype.toIsoTimeString = function(opt_showSeconds) {
  var hours = this.getHours();
  var label = goog.string.padNumber(hours, 2) + ":" + goog.string.padNumber(this.getMinutes(), 2);
  if (opt_showSeconds === undefined || opt_showSeconds) {
    label += ":" + goog.string.padNumber(this.getSeconds(), 2);
  }
  return label;
};
/**
 * @return {!goog.date.DateTime}
 * @override
 */
goog.date.DateTime.prototype.clone = function() {
  var date = new goog.date.DateTime(this.date);
  date.setFirstDayOfWeek(this.getFirstDayOfWeek());
  date.setFirstWeekCutOffDay(this.getFirstWeekCutOffDay());
  return date;
};
/**
 * @param {string} formatted
 * @return {?goog.date.DateTime}
 * @override
 */
goog.date.DateTime.fromIsoString = function(formatted) {
  var ret = new goog.date.DateTime(2000);
  return goog.date.setIso8601DateTime(ret, formatted) ? ret : null;
};

//# sourceMappingURL=goog.date.date.js.map
