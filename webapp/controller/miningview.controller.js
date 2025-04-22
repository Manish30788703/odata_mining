sap.ui.define([
    "./basecontroller",
    "sap/ui/core/Fragment",
    "sap/m/MessageToast"
    
], (basecontroller,Fragment,MessageToast) => {
    "use strict";

    return basecontroller.extend("app.manishk42.controller.miningview", {
        onInit() {
        },
        onUserLogin: function() {
            if (!this.userDialog) {
                this.userDialog = Fragment.load({
                    fragmentName: "app.manishk42.fragments.userlogin",
                    controller: this
                }).then(function(oDialog) {
                    this.getView().addDependent(oDialog);
                    oDialog.open();
                    return oDialog;
                }.bind(this));
            } else {
                this.userDialog.then(function(oDialog) {
                    oDialog.open();
                });
            }
        },

        onCancel: function() {
            sap.ui.getCore().byId("loginDialog").close();
        },

        onLogin: function() {
            var oUser = sap.ui.getCore().byId("idName");
            var oPwd = sap.ui.getCore().byId("idPwd");

            var sUser = oUser.getValue();
            var sPwd = oPwd.getValue();

            if (!sUser || !sPwd) {
                MessageToast.show("Enter username and password");
                return;
            }
            if (sUser === "manish" && sPwd === "123") {
                MessageToast.show("Login success");
                var oRouter = this.getRouter();
                oRouter.navTo("RouteUserview");
            } else {
                MessageToast.show("Login failed");
            }
            oUser.setValue("");
            oPwd.setValue("");
        },
        onAdminLogin: function() {
            if (!this.adminDialog) {
                this.adminDialog = Fragment.load({
                    fragmentName: "app.manishk42.fragments.adminlogin",
                    controller: this
                }).then(function(oDialog) {
                    this.getView().addDependent(oDialog);
                    oDialog.open();
                    return oDialog;
                }.bind(this));
            } else {
                this.adminDialog.then(function(oDialog) {
                    oDialog.open();
                });
            }
        },

        onAdLogin: function() {
            var oUser = sap.ui.getCore().byId("idadName");
            var oPwd = sap.ui.getCore().byId("idadPwd");

            var sUser = oUser.getValue();
            var sPwd = oPwd.getValue();

            if (!sUser || !sPwd) {
                MessageToast.show("Enter username and password");
                return;
            }
            if (sUser === "manishkumar" && sPwd === "3078") {
                MessageToast.show("Login success");
                var oRouter = this.getRouter();
                oRouter.navTo("RouteAdminview");
            } else {
                MessageToast.show("Login failed");
            }
            oUser.setValue("");
            oPwd.setValue("");
        },

        onAdCancel: function() {
            sap.ui.getCore().byId("adloginDialog").close();
        }


    });
});