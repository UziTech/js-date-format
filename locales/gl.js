/* languages from http://momentjs.com */
Date.locales["gl"] = {
	month_names: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
	month_names_short: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
	day_names: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
	day_names_short: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
	date_suffix: function (date) {
		return 'º';
	},
	meridiem: function (hour, minute, isLower, isShort) {
		return "";
	}
};
