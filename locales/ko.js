/* languages from http://momentjs.com */
Date.locales["ko"] = {
	month_names: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
	month_names_short: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
	day_names: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
	day_names_short: "일_월_화_수_목_금_토".split("_"),
	date_suffix: function (date) {
		return "일";
	},
	meridiem: function (hour, minute, isLower) {
		return hour < 12 ? '오전' : '오후';
	}
};
