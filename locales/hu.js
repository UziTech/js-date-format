/* languages from http://momentjs.com */
Date.locales["hu"] = {
	month_names: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
	month_names_short: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
	day_names: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
	day_names_short: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
	meridiem: function (hour, minute, isLower, isShort) {
		if (hour < 12) {
			return isLower === true ? 'de' : 'DE';
		} else {
			return isLower === true ? 'du' : 'DU';
		}
	},
	date_suffix: function () {
		return '.';
	}
};
