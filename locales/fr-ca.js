/* languages from http://momentjs.com */
Date.locales["fr-ca"] = {
	month_names: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
	month_names_short: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
	day_names: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
	day_names_short: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
	date_suffix: function (date) {
		return (date === 1 ? 'er' : '');
	},
	meridiem: function (hour, minute, isLower) {
		return "";
	}
};
