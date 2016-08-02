/* languages from http://momentjs.com */
Date.locales["mr"] = {
	month_names: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split("_"),
	month_names_short: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split("_"),
	day_names: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split("_"),
	day_names_short: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split("_"),
	meridiem: function (hour, minute, isLower) {
		if (hour < 4) {
			return "रात्री";
		} else if (hour < 10) {
			return "सकाळी";
		} else if (hour < 17) {
			return "दुपारी";
		} else if (hour < 20) {
			return "सायंकाळी";
		} else {
			return "रात्री";
		}
	},
	date_suffix: function (date) {
		return "";
	}
};
