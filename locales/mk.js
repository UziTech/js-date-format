/* languages from http://momentjs.com */
Date.locales["mk"] = {
	month_names: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
	month_names_short: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
	day_names: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
	day_names_short: "нед_пон_вто_сре_чет_пет_саб".split("_"),
	date_suffix: function (date) {
		var lastDigit = date % 10,
			last2Digits = date % 100;
		if (date === 0) {
			return '-ев';
		} else if (last2Digits === 0) {
			return '-ен';
		} else if (last2Digits > 10 && last2Digits < 20) {
			return '-ти';
		} else if (lastDigit === 1) {
			return '-ви';
		} else if (lastDigit === 2) {
			return '-ри';
		} else if (lastDigit === 7 || lastDigit === 8) {
			return '-ми';
		} else {
			return '-ти';
		}
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
