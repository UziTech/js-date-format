/* languages from http://momentjs.com */
Date.locales["hi"] = {
	month_names: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split("_"),
	month_names_short: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split("_"),
	day_names: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split("_"),
	day_names_short: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split("_"),
	meridiem: function (hour, minute, isLower, isShort) {
		if (hour < 4) {
			return "रात";
		} else if (hour < 10) {
			return "सुबह";
		} else if (hour < 17) {
			return "दोपहर";
		} else if (hour < 20) {
			return "शाम";
		} else {
			return "रात";
		}
	},
	date_suffix: function (date) {
		return "";
	}
};
