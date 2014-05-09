(function(){
'use strict'
  Date.prototype.format = function(formatString){
    
    var addPadding = function(value){
      return ("0" + value).slice(-2);
    };

		var year = this.getFullYear();
		var month = this.getMonth() + 1;
		var day = this.getDate();
		var hour = this.getHours();
		var minute = this.getMinutes();
		var second = this.getSeconds();
		var millisecond = this.getMilliseconds();
		var decisecond = millisecond % 100;
		var centisecond = millisecond % 10;
		var timezone = this.getTimezoneOffset() / 60;

		return formatString.replace(/YYYY/gi, year)
  		.replace(/YY/g, year - 2000)
  		.replace(/MM/g, addPadding(month))
  		.replace(/M/g, month)
  		.replace(/DD/g, addPadding(day))
  		.replace(/D/g, day)
  		.replace(/HH/g, addPadding(hour))
  		.replace(/H/g, hour)
  		.replace(/hh/g, (hour > 12? addPadding(hour - 12) : (hour < 1? 12 : addPadding(hour))))
  		.replace(/h/g, (hour > 12? hour - 12 : (hour < 1? 12 : hour)))
  		.replace(/mm/g, addPadding(minute))
  		.replace(/m/g, minute)
  		.replace(/ss/g, addPadding(second))
  		.replace(/s/g, second)
  		.replace(/fff/g, addPadding(millisecond))
  		.replace(/ff/g, addPadding(centisecond))
  		.replace(/f/g, addPadding(decisecond))
  		.replace(/tt/g, (hour >= 12? "pm" : "am"))
  		.replace(/TT/g, (hour >= 12? "PM" : "AM"));
  };
})();
