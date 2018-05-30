/* languages from http://momentjs.com */
Date.locales["ka"] = {
	month_names: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
	month_names_short: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
	day_names: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
	day_names_short: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
	date_suffix: function (date) {
		if (date === 0) {
			return "";
		}

		if (date === 1) {
			return "-ლი";
		}

		if ((date < 20) || (date <= 100 && (date % 20 === 0)) || (date % 100 === 0)) {
			return "მე-";
		}

		return "-ე";
	},
	meridiem: function (hour, minute, isLower, isShort) {
		return "";
	}
};
