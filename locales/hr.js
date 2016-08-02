/* languages from http://momentjs.com */
Date.locales["hr"] = {
	month_names: "sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),
	month_names_short: "sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
	day_names: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
	day_names_short: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
	date_suffix: function () {
		return '.';
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
