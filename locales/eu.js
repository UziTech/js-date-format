/* languages from http://momentjs.com */
Date.locales["eu"] = {
	month_names: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
	month_names_short: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
	day_names: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
	day_names_short: "ig._al._ar._az._og._ol._lr.".split("_"),
	date_suffix: function (date) {
		return ".";
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
