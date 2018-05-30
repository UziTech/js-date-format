/* languages from http://momentjs.com */
Date.locales["cs"] = {
	month_names: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
	month_names_short: "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
	day_names: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
	day_names_short: "ne_po_út_st_čt_pá_so".split("_"),
	date_suffix: function (date) {
		return ".";
	},
	meridiem: function (hour, minute, isLower, isShort) {
		return "";
	}
};
