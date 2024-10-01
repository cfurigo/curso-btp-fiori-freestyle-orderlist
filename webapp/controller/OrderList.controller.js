sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("orderlist.controller.OrderList", {
        onInit: function () {
            alert("Init");
        },
        onBeforeRendering: function () {
            alert("Before");
        },
        onAfterRendering: function () {
            alert("After");
        },
        onExit: function () {
            alert("Exit")
        },
        onPress: function () {
            alert("Hello World");
        }
    });
});
