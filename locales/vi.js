/* languages from http://momentjs.com */
Date.locales["vi"] = {
	month_names: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
	month_names_short: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
	day_names: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
	day_names_short: "CN_T2_T3_T4_T5_T6_T7".split("_"),
	date_suffix: function (date) {
		return "";
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
