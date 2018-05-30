/* languages from http://momentjs.com */
Date.locales["uk"] = {
	month_names: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
	month_names_short: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
	day_names: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
	day_names_short: "нд_пн_вт_ср_чт_пт_сб".split("_"),
	date_suffix: function (date) {
		return "-го";
	},
	meridiem: function (hour, minute, isLower, isShort) {
		if (hour < 4) {
			return "ночі";
		} else if (hour < 12) {
			return "ранку";
		} else if (hour < 17) {
			return "дня";
		} else {
			return "вечора";
		}
	}
};
