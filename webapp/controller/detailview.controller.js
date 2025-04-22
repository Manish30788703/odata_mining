sap.ui.define([
    "./basecontroller"
  ], (BaseController) => {
    "use strict";
  
    return BaseController.extend("app.manishk42.controller.detailview", {
        onInit() {
            let oRouter=this.getRouter()
            oRouter.attachRoutePatternMatched(this.onRouteMatched,this)
        },

        onRouteMatched:function(oEvent){
            this.index=oEvent.getParameter("arguments").indexdetail
            let sPath="MiningModel>/"+this.index
            let oView=this.getView()
            oView.bindElement(sPath)

        },
    
        onEdit:function(){
            let oRouter=this.getRouter()
            oRouter.navTo("Routeupdateview",{
                indexupdate:this.index
            })
        }

    });
  });