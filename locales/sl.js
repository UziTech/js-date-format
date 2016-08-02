/* languages from http://momentjs.com */
Date.locales["sl"] = {
	month_names: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
	month_names_short: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
	day_names: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
	day_names_short: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
	date_suffix: function (date) {
		return ".";
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
