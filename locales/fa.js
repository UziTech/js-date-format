/* languages from http://momentjs.com */
Date.locales["fa"] = {
	month_names: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	month_names_short: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	day_names: 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
	day_names_short: 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
	meridiem: function (hour, minute, isLower) {
		if (hour < 12) {
			return "قبل از ظهر";
		} else {
			return "بعد از ظهر";
		}
	},
	date_suffix: function (date) {
		return 'م';
	}
};
