/* languages from http://momentjs.com */
Date.locales["tr"] = {
	month_names: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
	month_names_short: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
	day_names: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
	day_names_short: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
	date_suffix: function (number) {
		if (number === 0) { // special case for zero
			return number + "'ıncı";
		}
		var a = number % 10,
			b = number % 100 - a,
			c = number >= 100 ? 100 : null;

		return (suffixes[a] || suffixes[b] || suffixes[c]);
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
