/* languages from http://momentjs.com */
Date.locales["ro"] = {
	month_names: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
	month_names_short: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
	day_names: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
	day_names_short: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
	date_suffix: function (date) {
		return "";
	},
	meridiem: function (hour, minute, isLower, isShort) {
		return "";
	}
};
