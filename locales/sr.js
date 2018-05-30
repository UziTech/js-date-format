/* languages from http://momentjs.com */
Date.locales["sr"] = {
	month_names: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
	month_names_short: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
	day_names: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
	day_names_short: ['ned.', 'pon.', 'uto.', 'sre.', 'čet.', 'pet.', 'sub.'],
	date_suffix: function (date) {
		return ".";
	},
	meridiem: function (hour, minute, isLower, isShort) {
		return "";
	}
};
