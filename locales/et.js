/* languages from http://momentjs.com */
Date.locales["et"] = {
	month_names: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
	month_names_short: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
	day_names: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
	day_names_short: "P_E_T_K_N_R_L".split("_"),
	date_suffix: function (date) {
		return ".";
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
