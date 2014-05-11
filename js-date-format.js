/**
 * js-date-format (js-date-format.js)
 * v1.0
 * (c) Tony Brix (tonybrix.info) - 2014.
 * https://github.com/UziTech/js-date-format
 * 
 * MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
 * NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function(){
"use strict"

  Date.prototype.setLocale = function(lang) {
    if(lang && lang in Date.locales){
      this.locale = lang;
    }
  };

  Date.prototype.getLocale = function() {
    return this.locale;
  };
  
  Date.prototype.getMonthName = function() {
    this.locale = this.locale || "en";
    return Date.locales[this.locale].month_names[this.getMonth()];
  };

  Date.prototype.getMonthNameShort = function() {
    this.locale = this.locale || "en";
    return Date.locales[this.locale].month_names_short[this.getMonth()];
  };

  Date.prototype.getDayName = function() {
    this.locale = this.locale || "en";
    return Date.locales[this.locale].day_names[this.getDay()];
  };

  Date.prototype.getDayNameShort = function() {
    this.locale = this.locale || "en";
    return Date.locales[this.locale].day_names_short[this.getDay()];
  };
  
  Date.locales = {
    en: {
      month_names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      month_names_short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      day_names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      day_names_short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      day_suffix: function(day){
        var day10 = Math.floor(day / 10);
        var day1 = day % 10;
        if(day10 == 1 || day1 > 3 || day1 == 0) {
          return "th";
        } else if(day1 == 1) {
          return "st";
        } else if(day1 == 2) {
          return "nd";
        } else if(day1 == 3) {
          return "rd";
        } else {
          return false;
        }
      }
    }
  };
  
  Date.prototype.format = function(formatString){

    var addPadding = function(value, length){
      var negative = ((value < 0)? "-" : "");
      var zeros = "0";
      for(var i = 2; i < length; i++) {
        zeros += "0";
      }
      return negative + (zeros + Math.abs(value).toString()).slice(-length);
    };

		var year = this.getFullYear();
		var month = this.getMonth() + 1;
		var day = this.getDate();
		var hour = this.getHours();
    var hour12 = ((hour > 12)? hour - 12 : ((hour < 1)? 12 : hour));
		var minute = this.getMinutes();
		var second = this.getSeconds();
		var millisecond = this.getMilliseconds();
		var decisecond = Math.floor(millisecond / 100);
		var centisecond = Math.floor(millisecond / 10);
    var offsetHour = Math.floor(-this.getTimezoneOffset() / 60);
		var offsetMinutes = -this.getTimezoneOffset() % 60;
    var monthName = this.getMonthName();
    var monthNameShort = this.getMonthNameShort();
    var dayName = this.getDayName();
    var dayNameShort = this.getDayNameShort();
    var daySuffix = Date.locales[this.locale].day_suffix(day);
    
    var replacements = {
      YYYY: year,
  		YY: year - 2000,
  		MMMM: monthName,
  		MMM: monthNameShort,
  		MM: addPadding(month, 2),
  		M: month,
  		DDDD: dayName,
  		DDD: dayNameShort,
  		DD: addPadding(day, 2),
  		D: day,
      S: daySuffix,
  		HH: addPadding(hour, 2),
  		H: hour,
  		hh: addPadding(hour12, 2),
  		h: hour12,
  		mm: addPadding(minute, 2),
  		m: minute,
  		ss: addPadding(second, 2),
  		s: second,
  		fff: addPadding(millisecond, 3),
  		ff: addPadding(centisecond, 2),
  		f: decisecond,
  		zzzz: addPadding(offsetHour, 2) + ":" + addPadding(offsetMinutes, 2),
  		zzz: offsetHour + ":" + addPadding(offsetMinutes, 2),
  		zz: addPadding(offsetHour, 2),
  		z: offsetHour,
  		tt: (hour >= 12? "pm" : "am"),
  		TT: (hour >= 12? "PM" : "AM")
    };
    
    
    var formats = new Array();
    while(formatString.length > 0) {
      if(formatString[0] == "\"") {
        var temp = /"[^"]*"/m.exec(formatString);
        if(temp == null) {
          formats.push(formatString.substring(1));
          formatString = "";
        } else {
          temp = temp[0].substring(1, temp[0].length - 1);
          formats.push(temp);
          formatString = formatString.substring(temp.length + 2);
        }
      } else if(formatString[0] == "'") {
        var temp = /'[^']*'/m.exec(formatString);
        if(temp == null) {
          formats.push(formatString.substring(1));
          formatString = "";
        } else {
          temp = temp[0].substring(1, temp[0].length - 1);
          formats.push(temp);
          formatString = formatString.substring(temp.length + 2);
        }
      } else if(formatString[0] == "\\") {
        if(formatString.length > 1) {
          formats.push(formatString.substring(1, 2));
          formatString = formatString.substring(2);
        } else {
          formats.push("\\");
          formatString = "";
        }
      } else {
        var foundMatch = false;
        for(var i = formatString.length; i > 0; i--) {
          if(formatString.substring(0, i) in replacements) {
            formats.push(replacements[formatString.substring(0, i)]);
            formatString = formatString.substring(i);
            foundMatch = true;
            break;
          }
        }
        if(!foundMatch) {
          formats.push(formatString[0]);
          formatString = formatString.substring(1);
        }
      }
    }
    
    return formats.join("");
  };
})();
