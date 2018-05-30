/* languages from http://momentjs.com */
Date.locales["zh-cn"] = {
	month_names: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
	month_names_short: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
	day_names: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
	day_names_short: "周日_周一_周二_周三_周四_周五_周六".split("_"),
	meridiem: function (hour, minute, isLower, isShort) {
		var hm = hour * 100 + minute;
		if (hm < 600) {
			return "凌晨";
		} else if (hm < 900) {
			return "早上";
		} else if (hm < 1130) {
			return "上午";
		} else if (hm < 1230) {
			return "中午";
		} else if (hm < 1800) {
			return "下午";
		} else {
			return "晚上";
		}
	},
	date_suffix: function (number, period) {
		return number + "日";

	}
};
