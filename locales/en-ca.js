/* languages from http://momentjs.com */
Date.locales["en-ca"] = {
	month_names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	month_names_short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	day_names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	day_names_short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	date_suffix: function (date) {
		var day10 = ~~(date % 100 / 10);
		var day1 = date % 10;
		if (day10 === 1) {
			return "th";
		} else if (day1 === 1) {
			return "st";
		} else if (day1 === 2) {
			return "nd";
		} else if (day1 === 3) {
			return "rd";
		} else {
			return "th";
		}
	},
	meridiem: function (hour, minute, isLower) {
		if (hour < 12) {
			return isLower ? "am" : "AM";
		} else {
			return isLower ? "pm" : "PM";
		}
	}
};
