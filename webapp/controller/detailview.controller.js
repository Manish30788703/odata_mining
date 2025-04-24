sap.ui.define([
    "./basecontroller"
], (BaseController) => {
    "use strict";

    return BaseController.extend("app.manishk42.controller.detailview", {
        onInit() {
            // let oRouter=this.getRouter()
            // oRouter.attachRoutePatternMatched(this.onRouteMatched,this)
            let oRouter = this.getOwnerComponent().getRouter();
            oRouter.attachRoutePatternMatched(this.onRouteMatched, this);
            let oRoute = oRouter.getRoute("Routedetailview");
            oRoute.attachPatternMatched(this._onPatternMatched, this);
        },
        _onPatternMatched: function () {
            this._getData();
        },

        _getData: function () {
            let enititySet = `/dataminingSet`;
            let oModel = this.getOwnerComponent().getModel();
            oModel.read(enititySet, {
                success: (oData, response) => {
                    var oModelData = new sap.ui.model.json.JSONModel(oData.results);
                    this.getView().setModel(oModelData, "MiningModel");
                },
                error: () => { }
            })
        },


        onRouteMatched: function (oEvent) {
            this.index = oEvent.getParameter("arguments").indexdetail

            let sPath = "MiningModel>/" + this.index
            let oView = this.getView()
            oView.bindElement(sPath)

        },

        onEdit: function () {
            let oRouter = this.getRouter()
            oRouter.navTo("Routeupdateview", {
                indexupdate: this.index
            })
        }

    });
});