/* languages from http://momentjs.com */
Date.locales["ml"] = {
	month_names: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split("_"),
	month_names_short: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split("_"),
	day_names: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split("_"),
	day_names_short: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split("_"),
	meridiem: function (hour, minute, isLower) {
		if (hour < 4) {
			return "രാത്രി";
		} else if (hour < 12) {
			return "രാവിലെ";
		} else if (hour < 17) {
			return "ഉച്ച കഴിഞ്ഞ്";
		} else if (hour < 20) {
			return "വൈകുന്നേരം";
		} else {
			return "രാത്രി";
		}
	},
	date_suffix: function (date) {
		return "";
	}
};
