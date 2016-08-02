/* languages from http://momentjs.com */
Date.locales["nb"] = {
	month_names: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
	month_names_short: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
	day_names: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
	day_names_short: "sø._ma._ti._on._to._fr._lø.".split("_"),
	date_suffix: function (date) {
		return ".";
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
