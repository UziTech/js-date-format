/* languages from http://momentjs.com */
Date.locales["cv"] = {
	month_names: "кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав".split("_"),
	month_names_short: "кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш".split("_"),
	day_names: "вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун".split("_"),
	day_names_short: "выр_тун_ытл_юн_кĕç_эрн_шăм".split("_"),
	date_suffix: function (date) {
		return "-мĕш";
	},
	meridiem: function (hour, minute, isLower, isShort) {
		return "";
	}
};
