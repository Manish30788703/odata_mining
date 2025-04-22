sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (Controller) => {
    "use strict";
  
    return Controller.extend("app.manishk42.controller.basecontroller", {
        onInit() {
        },
        getRouter:function(){
          return this.getOwnerComponent().getRouter()
        
        },
        getModel:function(){
          return this.getOwnerComponent().getModel()

        }
    });
  });