/* languages from http://momentjs.com */
Date.locales["sq"] = {
	month_names: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
	month_names_short: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
	day_names: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
	day_names_short: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
	meridiem: function (hour, minute, isLower, isShort) {
		return hour < 12 ? 'PD' : 'MD';
	},
	date_suffix: function (date) {
		return ".";
	}
};
