/* languages from http://momentjs.com */
Date.locales["el"] = {
	month_names: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
	month_names_short: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
	day_names: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
	day_names_short: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
	date_suffix: function (date) {
		return "η";
	},
	meridiem: function (hour, minute, isLower, isShort) {
		if (hour > 11) {
			return isLower ? 'μμ' : 'ΜΜ';
		} else {
			return isLower ? 'πμ' : 'ΠΜ';
		}
	}
};
