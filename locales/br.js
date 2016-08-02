/* languages from http://momentjs.com */
Date.locales["br"] = {
	month_names: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
	month_names_short: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
	day_names: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
	day_names_short: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
	date_suffix: function (date) {
		return (date === 1) ? 'añ' : 'vet';
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
