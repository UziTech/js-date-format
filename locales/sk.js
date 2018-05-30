/* languages from http://momentjs.com */
Date.locales["sk"] = {
	month_names: "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
	month_names_short: "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),
	day_names: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
	day_names_short: "ne_po_ut_st_št_pi_so".split("_"),
	date_suffix: function (date) {
		return ".";
	},
	meridiem: function (hour, minute, isLower, isShort) {
		return "";
	}
};
