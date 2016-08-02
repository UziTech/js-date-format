/* languages from http://momentjs.com */
Date.locales["bs"] = {
	month_names: "januar_februar_mart_april_maj_juni_juli_avgust_septembar_oktobar_novembar_decembar".split("_"),
	month_names_short: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
	day_names: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
	day_names_short: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
	date_suffix: function (date) {
		return ".";
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
