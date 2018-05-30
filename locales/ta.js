/* languages from http://momentjs.com */
Date.locales["ta"] = {
	month_names: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split("_"),
	month_names_short: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split("_"),
	day_names: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split("_"),
	day_names_short: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split("_"),
	date_suffix: function (date) {
		return 'வது';
	},
	meridiem: function (hour, minute, isLower, isShort) {
		if (hour >= 6 && hour <= 10) {
			return " காலை";
		} else if (hour >= 10 && hour <= 14) {
			return " நண்பகல்";
		} else if (hour >= 14 && hour <= 18) {
			return " எற்பாடு";
		} else if (hour >= 18 && hour <= 20) {
			return " மாலை";
		} else if (hour >= 20 && hour <= 24) {
			return " இரவு";
		} else if (hour >= 0 && hour <= 6) {
			return " வைகறை";
		}
	}
};
