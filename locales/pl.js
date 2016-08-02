/* languages from http://momentjs.com */
Date.locales["pl"] = {
	month_names: "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
	month_names_short: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
	day_names: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
	day_names_short: "nie_pon_wt_śr_czw_pt_sb".split("_"),
	date_suffix: function (date) {
		return ".";
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
