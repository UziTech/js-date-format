/* languages from http://momentjs.com */
Date.locales["it"] = {
	month_names: "Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split("_"),
	month_names_short: "Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),
	day_names: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
	day_names_short: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
	date_suffix: function () {
		return 'º';
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
