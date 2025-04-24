sap.ui.define([
    "./basecontroller",
    "../validate/validate",
    "sap/m/MessageBox"
   
], (basecontroller,validate,MessageBox) => {
    "use strict";

    return basecontroller.extend("app.manishk42.controller.createview", {
        onInit() {
            let oView = this.getView();
            let fieldIds = ["idLoc", "idDesc", "idMin", "idRep"];
            fieldIds.forEach(fieldId => {
            oView.byId(fieldId).attachChange(this.onSetNone, this);
            });
        },
 
        onToMining: function(){
            var oRouter=this.getOwnerComponent().getRouter()
            oRouter.navTo("RouteAdminview")
        },

        onSubmit:function(){
          

                //payload
                let oLocId=this.getView().byId("idLoc")
                let oDesc=this.getView().byId("idDesc")
               
                let oMin=this.getView().byId("idMin")
                let oRep=this.getView().byId("idRep")
    
                let sLocId=oLocId.getValue()
                //sCarrId=sCarrId.toUpperCase()
                let sDesc=oDesc.getValue()
               
                let sMin=oMin.getValue()
                let sRep=oRep.getValue()
    
                // let vDate=new Date(sFld).getTime()
    
                // let fDate="\/Date("+vDate+")\/"
                let fields = [
                    {id:"idLoc", value:sLocId},
                    {id:"idDesc", value:sDesc},
                    {id:"idMin", value:sMin},
                    {id:"idRep", value:sRep}
                 ]
     
                 let validationResult = validate.validateFields(fields);
                 if (validationResult !== true) {
                    validationResult.forEach(fieldId => {
                        this.getView().byId(fieldId).setValueState("Error");
                    });
                    return;
                }

                let payLoad={
                    "LocationId":sLocId,
                
                    "LocDesc":sDesc,
                    "Mineral":sMin,
                    "Report":sRep
                }
    
    
    
                //get the model
                    let oModel=this.getOwnerComponent().getModel()
                    
                //get entity
                let entity="/dataminingSet"
    
             
                //method
              var that=this
                oModel.create(entity,payLoad,{
                    success:function(){
                        MessageBox.success("record created",{
                            onClose:function(){
                                that._clearFields();
                                var oRouter=that.getOwnerComponent().getRouter()
                 oRouter.navTo("RouteAdminview")
                // oCarrId.setValue("")
                // oConnId.setValue("")
                // oFld.setValue("")
                // oBk.setValue("")
                // oOrd.setValue("")
                            }.bind(this)
                        
                    })
                    
    
                    },
                    error:function(){
                        MessageBox.error("record failed")
                    }
                })
    
    
            
    
        }
    });
});