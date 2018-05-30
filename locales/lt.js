/* languages from http://momentjs.com */
Date.locales["lt"] = {
	month_names: "sausio_vasario_kovo_balandžio_gegužės_biržėlio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
	month_names_short: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
	day_names: "pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis_sekmadienis".split("_"),
	day_names_short: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
	date_suffix: function (date) {
		return "-oji";
	},
	meridiem: function (hour, minute, isLower, isShort) {
		return "";
	}
};
