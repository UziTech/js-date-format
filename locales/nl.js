/* languages from http://momentjs.com */
Date.locales["nl"] = {
	month_names: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
	month_names_short: "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
	day_names: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
	day_names_short: "zo._ma._di._wo._do._vr._za.".split("_"),
	date_suffix: function (date) {
		return ((date === 1 || date === 8 || date >= 20) ? 'ste' : 'de');
	},
	meridiem: function (hour, minute, isLower, isShort) {
		return "";
	}
};
