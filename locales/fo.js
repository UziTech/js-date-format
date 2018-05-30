/* languages from http://momentjs.com */
Date.locales["fo"] = {
	month_names: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
	month_names_short: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
	day_names: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
	day_names_short: "sun_mán_týs_mik_hós_frí_ley".split("_"),
	date_suffix: function () {
		return '.';
	},
	meridiem: function (hour, minute, isLower, isShort) {
		return "";
	}
};
