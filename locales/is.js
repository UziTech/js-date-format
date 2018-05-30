/* languages from http://momentjs.com */
Date.locales["is"] = {
	month_names: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
	month_names_short: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
	day_names: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
	day_names_short: "sun_mán_þri_mið_fim_fös_lau".split("_"),
	date_suffix: function () {
		return '.';
	},
	meridiem: function (hour, minute, isLower, isShort) {
		return "";
	}
};
