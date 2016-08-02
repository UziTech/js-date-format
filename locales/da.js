/* languages from http://momentjs.com */
Date.locales["da"] = {
	month_names: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
	month_names_short: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
	day_names: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
	day_names_short: "søn_man_tir_ons_tor_fre_lør".split("_"),
	date_suffix: function (date) {
		return ".";
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
