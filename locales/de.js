/* languages from http://momentjs.com */
Date.locales["de"] = {
	month_names: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
	month_names_short: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
	day_names: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
	day_names_short: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
	date_suffix: function (date) {
		return ".";
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
