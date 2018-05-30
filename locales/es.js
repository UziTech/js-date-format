/* languages from http://momentjs.com */
Date.locales["es"] = {
	month_names: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
	month_names_short: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
	day_names: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
	day_names_short: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
	date_suffix: function (date) {
		return "º";
	},
	meridiem: function (hour, minute, isLower, isShort) {
		return "";
	}
};
