/* languages from http://momentjs.com */
Date.locales["ms-my"] = {
	month_names: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
	month_names_short: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
	day_names: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
	day_names_short: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
	meridiem: function (hour, minute, isLower) {
		if (hour < 11) {
			return 'pagi';
		} else if (hour < 15) {
			return 'tengahari';
		} else if (hour < 19) {
			return 'petang';
		} else {
			return 'malam';
		}
	},
	date_suffix: function (date) {
		return "";
	}
};
