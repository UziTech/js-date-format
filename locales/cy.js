/* languages from http://momentjs.com */
Date.locales["cy"] = {
	month_names: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
	month_names_short: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
	day_names: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
	day_names_short: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
	date_suffix: function (date) {
		var b = date,
			output = '',
			lookup = [
		'', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
		'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
	];

		if (b > 20) {
			if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
				output = 'fed'; // not 30ain, 70ain or 90ain
			} else {
				output = 'ain';
			}
		} else if (b > 0) {
			output = lookup[b];
		}

		return output;
	},
	meridiem: function (hour, minute, isLower, isShort) {
		return "";
	}
};
