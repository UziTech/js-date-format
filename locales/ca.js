/* languages from http://momentjs.com */
Date.locales["ca"] = {
	month_names: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
	month_names_short: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
	day_names: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
	day_names_short: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
	date_suffix: function (date) {
		return "º";
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
