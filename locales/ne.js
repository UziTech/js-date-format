/* languages from http://momentjs.com */
Date.locales["ne"] = {
	month_names: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split("_"),
	month_names_short: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split("_"),
	day_names: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split("_"),
	day_names_short: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split("_"),
	meridiem: function (hour, minute, isLower, isShort) {
		if (hour < 3) {
			return "राती";
		} else if (hour < 10) {
			return "बिहान";
		} else if (hour < 15) {
			return "दिउँसो";
		} else if (hour < 18) {
			return "बेलुका";
		} else if (hour < 20) {
			return "साँझ";
		} else {
			return "राती";
		}
	},
	date_suffix: function (date) {
		return "";
	}
};
