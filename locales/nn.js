/* languages from http://momentjs.com */
Date.locales["nn"] = {
	month_names: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
	month_names_short: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
	day_names: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
	day_names_short: "sun_mån_tys_ons_tor_fre_lau".split("_"),
	date_suffix: function (date) {
		return ".";
	},
	meridiem: function (hour, minute, isLower, isShort) {
		return "";
	}
};
