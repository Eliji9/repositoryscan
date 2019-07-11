/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"scan1/scan1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});