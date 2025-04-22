sap.ui.define([
    "./basecontroller",
    "sap/m/MessageBox"
   
], (basecontroller,MessageBox) => {
    "use strict";

    return basecontroller.extend("app.manishk42.controller.adminview", {
        onInit() {
            this._getData();
        },

        onCreate:function(){
            var oRouter = this.getRouter();
                oRouter.navTo("RouteCreateview");
        },

        onDelete:function(oEvent){
            let oContext=oEvent.getSource().getBindingContext("MiningModel").getObject()
             MessageBox.confirm("are you sure you want to delete",{
                   onClose:(choice)=>{
                        if(choice==='OK'){
                           this._onDeleteCall(oContext)
  
                 }
  
             }
             })
         },
         _onDeleteCall: function(parm) {
             let key1 = parm.LocationId;
            
            
             let oModel = this.getModel();
          
             let entity = `/dataminingSet('${key1}')`;
  
             oModel.remove(entity, {
                 success: (resp) => {
                     MessageBox.success("Record Deleted",{
                         onClose: function(){
                             this.onInit()
                         }.bind(this)
                     });
                 },
                 error: (err) => {
                     MessageBox.error("Deletion Failed");
                 }
             });
         },
         _getData:function(){
            let oModel=this.getModel()
            let entity="/dataminingSet"
            oModel.read(entity,{
                success:(odata,resp)=>{

                    let JModel=this.getOwnerComponent().getModel("MiningModel")
                    JModel.setData(odata.results)
                    // let oModelJs=new sap.ui.model.json.JSONModel(odata)
                    // this.getView().setModel(oModelJs,"MiningModel")
                    
                },
                error:(error)=>{
                    console.log(error)
                }
            })
        },

        onRowSelection:function(oEvent){
            let oItem=oEvent.getParameter("listItem")
            let oContext=oItem.getBindingContextPath("MiningModel")
            let aItems=oContext.split("/")
            let index=aItems[aItems.length-1]
            let oRouter=this.getRouter()
            oRouter.navTo("Routedetailview",{
                indexdetail:index
            })

        }
    });
});