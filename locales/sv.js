/* languages from http://momentjs.com */
Date.locales["sv"] = {
	month_names: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
	month_names_short: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
	day_names: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
	day_names_short: "sön_mån_tis_ons_tor_fre_lör".split("_"),
	date_suffix: function (number) {
		var b = number % 10,
			output = (~~(number % 100 / 10) === 1) ? 'e' :
			(b === 1) ? 'a' :
			(b === 2) ? 'a' :
			(b === 3) ? 'e' : 'e';
		return output;
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
