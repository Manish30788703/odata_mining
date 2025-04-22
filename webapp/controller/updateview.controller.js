sap.ui.define([
    "./basecontroller",
    "sap/m/MessageBox"
   
], (basecontroller,MessageBox) => {
    "use strict";

    return basecontroller.extend("app.manishk42.controller.updateview", {
        onInit() {
            let oRouter=this.getRouter()
            oRouter.attachRoutePatternMatched(this._onMatched,this)
        },

        _onMatched:function(oEvent){
            let index=oEvent.getParameter("arguments").indexupdate
            let spath="MiningModel>/"+index
            let oView=this.getView()
            oView.bindElement(spath)

        },

        onUpdate:function(){
          

                //payload
                let oLocId=this.getView().byId("idlUp")

                let oDesc=this.getView().byId("idUpdes")
               
                let oMin=this.getView().byId("idUpmin")

                let oRep=this.getView().byId("idUprep")
    
                let sLocId=oLocId.getValue()
                //sCarrId=sCarrId.toUpperCase()
                let sDesc=oDesc.getValue()
               
                let sMin=oMin.getValue()
                let sRep=oRep.getValue()
    
                // let vDate=new Date(sFld).getTime()
    
                // let fDate="\/Date("+vDate+")\/"
    
                let payLoad={
                    
                    
                    "LocDesc":sDesc,
                    "Mineral":sMin,
                    "Report":sRep
                }
    
    
    
                //get the model
                    let oModel=this.getOwnerComponent().getModel()
                    
                //get entity

                let entity=`/dataminingSet('${sLocId}')`;
               
    
             
                //method
              let that=this
                oModel.update(entity,payLoad,{
                    success:function(){
                        MessageBox.success("record update",{
                            onClose:function(){
                                var oRouter=that.getRouter()
                oRouter.navTo("RouteAdminview")
               
                
                            }.bind(that)
                        
                    })
                    
    
                    },
                    error:function(){
                        MessageBox.error("record failed")
                    }
                })
    
    
            
    
        }
    });
});