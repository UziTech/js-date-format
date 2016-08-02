/* languages from http://momentjs.com */
Date.locales["he"] = {
	month_names: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
	month_names_short: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
	day_names: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
	day_names_short: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
	date_suffix: function (date) {
		return "";
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
