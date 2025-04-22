sap.ui.define([
    "./basecontroller",
    "sap/m/MessageBox"
   
], (basecontroller,MessageBox) => {
    "use strict";

    return basecontroller.extend("app.manishk42.controller.createview", {
        onInit() {
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
              let that=this
                oModel.create(entity,payLoad,{
                    success:function(){
                        MessageBox.success("record created",{
                            onClose:function(){
                                var oRouter=that.getRouter()
                oRouter.navTo("RouteAdminview")
                oCarrId.setValue("")
                oConnId.setValue("")
                oFld.setValue("")
                oBk.setValue("")
                oOrd.setValue("")
                            }
                        
                    })
                    
    
                    },
                    error:function(){
                        MessageBox.error("record failed")
                    }
                })
    
    
            
    
        }
    });
});