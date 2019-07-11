sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/ui/core/Fragment",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("scan1.scan1.controller.View1", {
		
		button: function ()	
		   {
			// var that = this;
			var code = "";
				    cordova.plugins.barcodeScanner.scan( function (result) 
				    {
			     	MessageBox.alert("Barcode scanning result:\n" + "Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" + "Cancelled: " + result.cancelled+"\n","");
			        code = result.text;
			        // that.getView().byId("bar").setValue(code);
			        // that.onSearch();
			    	} );
			}
	});
});