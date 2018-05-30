/* languages from http://momentjs.com */
Date.locales["th"] = {
	month_names: "มกราคม_กุม� าพันธ์_มีนาคม_เมษายน_พฤษ� าคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
	month_names_short: "มกรา_กุม� า_มีนา_เมษา_พฤษ� า_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
	day_names: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
	day_names_short: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
	meridiem: function (hour, minute, isLower, isShort) {
		if (hour < 12) {
			return "ก่อนเที่ยง";
		} else {
			return "หลังเที่ยง";
		}
	},
	date_suffix: function (date) {
		return "";
	}
};
