/* languages from http://momentjs.com */
Date.locales["id"] = {
	month_names: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
	month_names_short: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
	day_names: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
	day_names_short: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
	meridiem: function (hour, minute, isLower) {
		if (hour < 11) {
			return 'pagi';
		} else if (hour < 15) {
			return 'siang';
		} else if (hour < 19) {
			return 'sore';
		} else {
			return 'malam';
		}
	},
	date_suffix: function (date) {
		return "";
	}
};
