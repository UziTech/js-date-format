/* languages from http://momentjs.com */
Date.locales["pt-br"] = {
	month_names: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
	month_names_short: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
	day_names: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
	day_names_short: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
	date_suffix: function (date) {
		return "º";
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
