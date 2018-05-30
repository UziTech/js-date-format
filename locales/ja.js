/* languages from http://momentjs.com */
Date.locales["ja"] = {
	month_names: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
	month_names_short: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
	day_names: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
	day_names_short: "日_月_火_水_木_金_土".split("_"),
	meridiem: function (hour, minute, isLower, isShort) {
		if (hour < 12) {
			return "午前";
		} else {
			return "午後";
		}
	},
	date_suffix: function (date) {
		return "";
	}
};
