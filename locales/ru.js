/* languages from http://momentjs.com */
Date.locales["ru"] = {
	month_names: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
	month_names_short: 'янв_фев_мар_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
	day_names: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
	day_names_short: "вс_пн_вт_ср_чт_пт_сб".split("_"),
	meridiem: function (hour, minute, isLower) {
		if (hour < 4) {
			return "ночи";
		} else if (hour < 12) {
			return "утра";
		} else if (hour < 17) {
			return "дня";
		} else {
			return "вечера";
		}
	},
	date_suffix: function (date) {
		return '-го';
	}
};
