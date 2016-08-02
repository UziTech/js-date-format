/* languages from http://momentjs.com */
Date.locales["eo"] = {
	month_names: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
	month_names_short: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
	day_names: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
	day_names_short: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
	date_suffix: function (date) {
		return "a";
	},
	meridiem: function (hour, minute, isLower) {
		if (hour < 12) {
			return isLower ? 'a.t.m.' : 'A.T.M.';
		} else {
			return isLower ? 'p.t.m.' : 'P.T.M.';
		}
	}
};
