/* languages from http://momentjs.com */
Date.locales["hy-am"] = {
	month_names: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_'),
	month_names_short: 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
	day_names: 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
	day_names_short: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
	date_suffix: function (date) {
		return "";
	},
	meridiem: function (hour, minute, isLower, isShort) {
		if (hour < 4) {
			return "գիշերվա";
		} else if (hour < 12) {
			return "առավոտվա";
		} else if (hour < 17) {
			return "ցերեկվա";
		} else {
			return "երեկոյան";
		}
	}
};
