/* languages from http://momentjs.com */
Date.locales["bg"] = {
	month_names: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
	month_names_short: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
	day_names: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
	day_names_short: "нед_пон_вто_сря_чет_пет_съб".split("_"),
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
	meridiem: function (hour, minute, isLower, isShort) {
		return "";
	}
};
