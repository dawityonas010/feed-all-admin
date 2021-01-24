webpackJsonp([1],{0:function(t,e){},"7zck":function(t,e){},F1JL:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{id:"app"}},[e("router-view",{attrs:{app:""}})],1)},staticRenderFns:[]};var n=a("VU/8")({name:"app"},s,!1,function(t){a("YpgA")},null,null).exports,o=a("/ocq"),r=a("qVsQ"),l={name:"Panel",data:()=>({navActive:!0,nav:[{title:"Dashboard",route:"/dashboard",icon:"fa-bar-chart"},{title:"Introduction",route:"/intro",icon:"fa-comment-o"},{title:"Client (Service Providers)",route:"/services",icon:"fa-bell-o"},{title:"People (Donees)",route:"/peoples",icon:"fa-users"},{title:"Transactions",route:"/reviews",icon:"fa-exchange"}]}),methods:{firebaseLogout(){r.a.auth().signOut().then(()=>{}).catch(function(t){})},toggleNav(){this.navActive=!this.navActive},goTo(t){z.push(t)}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Panel"}},[a("v-app",[a("v-toolbar",{attrs:{app:"",color:"#083110",dark:""}},[a("v-toolbar-side-icon",{on:{click:t.toggleNav}},[a("v-icon",[t._v("fa-bars")])],1),t._v(" "),a("v-toolbar-title",[t._v("FeedAll Admin")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:t.firebaseLogout}},[a("v-icon",{staticClass:"right",attrs:{icon:""}},[t._v("fa-sign-out")])],1)],1),t._v(" "),a("v-content",{staticClass:"bg",attrs:{app:""}},[a("router-view")],1),t._v(" "),a("v-navigation-drawer",{attrs:{app:"",light:"",fixed:""},model:{value:t.navActive,callback:function(e){t.navActive=e},expression:"navActive"}},[a("div",{staticClass:"black-logo"},[t._v(" ")]),t._v(" "),a("v-divider"),t._v(" "),a("v-list",{staticClass:"pt-0",attrs:{dense:""}},t._l(t.nav,function(e){return a("v-list-tile",{key:e.title,staticClass:"list__tile--link",on:{click:function(a){t.goTo(e.route)}}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}))],1),t._v(" "),a("v-footer",{attrs:{app:"",color:"teal"}})],1)],1)},staticRenderFns:[]};var v=a("VU/8")(l,c,!1,function(t){a("OU9P")},"data-v-43bc5da1",null).exports,d={name:"Dashboard",data:()=>({})},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Dashboard"}},[a("v-container",{staticClass:"bg",attrs:{fluid:""}},[a("div",{staticClass:"flex-wrapper white--text"},[a("div",{staticClass:"box",attrs:{id:"left"}},[a("div",{staticClass:"box__header"},[a("h3",{staticClass:"box__header-title"},[t._v("today's stats")])]),t._v(" "),a("div",{staticClass:"box__body"},[a("div",{staticClass:"stats stats--main"},[a("div",{staticClass:"stats__amount"},[t._v("5")]),t._v(" "),a("div",{staticClass:"stats__caption"},[t._v("new registrations")]),t._v(" "),a("div",{staticClass:"stats__change"},[a("div",{staticClass:"stats__value stats__value--positive"},[t._v("+6%")]),t._v(" "),a("div",{staticClass:"stats__period"},[t._v("this week")])])]),t._v(" "),a("div",{staticClass:"stats"},[a("div",{staticClass:"stats__amount"},[t._v("354")]),t._v(" "),a("div",{staticClass:"stats__caption"},[t._v("plates served")]),t._v(" "),a("div",{staticClass:"stats__change"},[a("div",{staticClass:"stats__value"},[t._v("+3")]),t._v(" "),a("div",{staticClass:"stats__period"},[t._v("this week")])])]),t._v(" "),a("div",{staticClass:"stats"},[a("div",{staticClass:"stats__amount"},[t._v("23")]),t._v(" "),a("div",{staticClass:"stats__caption"},[t._v("paid clients")]),t._v(" "),a("div",{staticClass:"stats__change"},[a("div",{staticClass:"stats__value stats__value--negative"},[t._v("-12%")]),t._v(" "),a("div",{staticClass:"stats__period"},[t._v("this week")])])]),t._v(" "),a("div",{staticClass:"stats"},[a("div",{staticClass:"stats__amount"},[t._v("15")]),t._v(" "),a("div",{staticClass:"stats__caption"},[t._v("unpaid clients")]),t._v(" "),a("div",{staticClass:"stats__change"},[a("div",{staticClass:"stats__value"},[t._v("+78")]),t._v(" "),a("div",{staticClass:"stats__period"},[t._v("this week")])])])])]),t._v(" "),a("div",{staticClass:"box",attrs:{id:"right"}},[a("div",{staticClass:"box__header"},[a("h3",{staticClass:"box__header-title"},[t._v("All time stats")])]),t._v(" "),a("div",{staticClass:"box__body"},[a("div",{staticClass:"stats stats--main"},[a("div",{staticClass:"stats__amount"},[t._v("12698")]),t._v(" "),a("div",{staticClass:"stats__caption"},[t._v("plates served")]),t._v(" "),a("div",{staticClass:"stats__change"},[a("div",{staticClass:"stats__value stats__value--positive"},[t._v("+6%")]),t._v(" "),a("div",{staticClass:"stats__period"},[t._v("all time")])]),t._v(" "),a("div",{staticClass:"stats"},[a("div",{staticClass:"stats__amount"},[t._v("6302")]),t._v(" "),a("div",{staticClass:"stats__caption"},[t._v("peoples")]),t._v(" "),a("div",{staticClass:"stats__change"},[a("div",{staticClass:"stats__value"},[t._v("+78")]),t._v(" "),a("div",{staticClass:"stats__period"},[t._v("all time")])])]),t._v(" "),a("div",{staticClass:"stats"},[a("div",{staticClass:"stats__amount"},[t._v("268")]),t._v(" "),a("div",{staticClass:"stats__caption"},[t._v("client food centers")]),t._v(" "),a("div",{staticClass:"stats__change"},[a("div",{staticClass:"stats__value"},[t._v("+3")]),t._v(" "),a("div",{staticClass:"stats__period"},[t._v("all time")])])])]),t._v(" "),a("div",{staticClass:"stats"},[a("div",{staticClass:"stats__amount"},[t._v("87359")]),t._v(" "),a("div",{staticClass:"stats__caption"},[t._v("visitors")]),t._v(" "),a("div",{staticClass:"stats__change"},[a("div",{staticClass:"stats__value stats__value--negative"},[t._v("-12%")]),t._v(" "),a("div",{staticClass:"stats__period"},[t._v("all time")])])])])])])])],1)},staticRenderFns:[]};var h=a("VU/8")(d,u,!1,function(t){a("znzv")},"data-v-6bc7b362",null).exports,p=a("yVvJ"),_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Transactions"}},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{md11:"",xs12:""}},[a("v-card",[a("v-card-title",{staticClass:"headline brown darken-2 white--text"},[t._v("Transactions")]),t._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.tableHeaders,items:t.transactions,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.enitiy_name))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.amount))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.payment_system))]),t._v(" "),a("td",{staticClass:"text-xs-right"})]}}])})],1)],1)],1)],1),t._v(" "),a("v-btn",{attrs:{color:"brown darken-2",dark:"",fixed:"",bottom:"",right:"",fab:""},nativeOn:{click:function(e){e.stopPropagation(),t.newTransactionDialog=!t.newTransactionDialog}}},[a("v-icon",[t._v("fa-plus")])],1),t._v(" "),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.newTransactionDialog,callback:function(e){t.newTransactionDialog=e},expression:"newTransactionDialog"}},[a("v-card",[a("v-card-title",[t.editOn?a("span",{staticClass:"headline"},[t._v("Edit transaction")]):a("span",{staticClass:"headline"},[t._v("Create New transaction")])]),t._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-form",{ref:"transactionForm",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{name:"enitiy_name",label:"enitiy_name",required:"",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.createNewTransaction.enitiy_name,callback:function(e){t.$set(t.createNewTransaction,"enitiy_name",e)},expression:"createNewTransaction.enitiy_name"}}),t._v(" "),a("v-text-field",{attrs:{textarea:"",name:"payment_sysytem",label:"payment_sysytem",required:"",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.createNewTransaction.payment_system,callback:function(e){t.$set(t.createNewTransaction,"payment_system",e)},expression:"createNewTransaction.payment_system"}}),t._v(" "),a("v-text-field",{attrs:{type:"number",name:"amount",label:"amount",required:"",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.createNewTransaction.amount,callback:function(e){t.$set(t.createNewTransaction,"amount",e)},expression:"createNewTransaction.amount"}})],1)],1)],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.resetNewTransaction()}}},[t._v("Cancel")]),t._v(" "),t.editOn?a("v-btn",{attrs:{color:"teal darken-1",flat:"",disabled:!t.valid},nativeOn:{click:function(e){t.updateTransaction()}}},[t._v("Submit")]):a("v-btn",{attrs:{color:"teal darken-1",flat:"",disabled:!t.valid},nativeOn:{click:function(e){t.CreateNewTransaction()}}},[t._v("Submit")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var m=function(t){a("Pm8H")},f=a("VU/8")(p.a,_,!1,m,"data-v-3af40717",null).exports;a("3VHS");const w=r.a.firestore(),g=r.a.storage().ref();g.child("home");var b={name:"Gallery",data:()=>({valid:!0,photosToUpload:[],homePhotos:[],postPhotos:[],tableHeaders:[{text:"preview",value:"url"},{text:"Position",value:"position"},{text:"name",value:"name"},{text:"path",value:"path"},{text:"options",value:"options",sortable:!1}],selectedPath:"",folders:[{text:"Gallery",value:"homePhotos"},{text:"Reviews",value:"postPhotos"}],uploadProgress:null,uploadOn:!1,previewOn:!1,photoPreview:null,uploadDialog:!1,previewDialog:!1,positionDialog:!1,currentPhoto:{id:null,name:null,path:null,url:null,position:null}}),methods:{listPhotos(){this.homePhotos=[],this.postPhotos=[],w.collection("homePhotos").orderBy("position").get().then(t=>{t.forEach(t=>{const e={id:t.id,name:t.data().name,path:t.data().path,url:t.data().url,position:t.data().position};this.homePhotos.push(e)})})},processFiles(t){this.photosToUpload=t.target.files},uploadPhotos(){this.uploadOn=!0;const t="homePhotos";Array.from(this.photosToUpload).forEach(e=>{var a=g.child(t+"/"+e.name).put(e);a.on("state_changed",function(t){this.uploadProgress=parseInt(t.bytesTransferred/t.totalBytes*100),console.log("Upload is "+this.uploadProgress+"% done")},t=>{},()=>{console.log("snapshot",a.snapshot);var i={url:a.snapshot.downloadURL,path:t+"/"+e.name,name:e.name};w.collection(t).add(i).then(t=>{this.listPhotos(),console.log("Document written with ID: ",t.id)}).catch(t=>{console.error("Error adding document: ",t)})}),this.uploadOn=!1,this.uploadDialog=!1,this.photosToUpload=[]})},cancelUpload(){this.uploadDialog=!1,this.photosToUpload=[]},positionPhoto(t,e){const a=w.collection(e).doc(t.id);a.set({id:t.id,name:t.name,path:t.path,url:t.url,position:t.position}).then(t=>{this.cancelPosition()}).catch(()=>{console.error("Error editing document: ",error)})},cancelPosition(){this.positionDialog=!1,this.currentPhoto={id:null,name:null,path:null,url:null,position:null}},startPosition(t){this.positionDialog=!0,this.currentPhoto=t},deletePhoto(t,e){if(confirm("Are you sure?")){var a=g.child(t.path);a.delete().then(function(){}).catch(function(t){}),w.collection(e).doc(t.id).delete().then(t=>{this.listPhotos(),console.log("Document successfully deleted!")}).catch(t=>{console.error("Error removing document: ",t)})}},openPreview(){this.previewDialog=!0},closePreview(){this.previewDialog=!1}},created(){this.listPhotos()}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Gallery"}},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{md11:"",xs12:""}},[a("v-card",[a("v-card-title",{staticClass:"headline brown darken-2 white--text"},[t._v("Gallery")]),t._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.tableHeaders,items:t.homePhotos,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[a("img",{staticClass:"preview pointer",attrs:{src:e.item.url},on:{click:function(e){t.openPreview()}}})]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.position))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.name))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.path))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[a("v-btn",{attrs:{icon:""},on:{click:function(a){t.startPosition(e.item)}}},[a("v-icon",[t._v("fa-pencil")])],1),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(a){t.deletePhoto(e.item,"homePhotos")}}},[a("v-icon",[t._v("fa-times")])],1)],1)]}}])})],1)],1)],1)],1),t._v(" "),a("v-btn",{attrs:{color:"brown darken-2",dark:"",fixed:"",bottom:"",right:"",fab:""},nativeOn:{click:function(e){e.stopPropagation(),t.uploadDialog=!t.uploadDialog}}},[a("v-icon",[t._v("fa-upload")])],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-dialog",{attrs:{"max-width":"768px"},model:{value:t.previewDialog,callback:function(e){t.previewDialog=e},expression:"previewDialog"}},[a("v-card",{staticClass:"text-xs-center"},[a("v-carousel",{attrs:{"hide-delimiters":""}},t._l(t.homePhotos,function(t,e){return a("v-carousel-item",{key:e,staticClass:"fit",attrs:{src:t.url}})})),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},nativeOn:{click:function(e){t.closePreview()}}},[t._v("Close")])],1)],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.uploadDialog,callback:function(e){t.uploadDialog=e},expression:"uploadDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Photo Upload")])]),t._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("form",[a("input",{attrs:{type:"file",multiple:"",accept:"image/*",required:""},on:{change:function(e){t.processFiles(e)}}})])])],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.cancelUpload()}}},[t._v("Close")]),t._v(" "),a("v-btn",{attrs:{color:"teal darken-1",flat:""},nativeOn:{click:function(e){t.uploadPhotos()}}},[t._v("Upload")])],1)],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.positionDialog,callback:function(e){t.positionDialog=e},expression:"positionDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Position Photo")])]),t._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{name:"position",label:"Position",id:"position",type:"number",required:""},model:{value:t.currentPhoto.position,callback:function(e){t.$set(t.currentPhoto,"position",e)},expression:"currentPhoto.position"}})],1)],1)],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.cancelPosition()}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{color:"teal darken-1",flat:"",disabled:!t.valid},nativeOn:{click:function(e){t.positionPhoto(t.currentPhoto,"homePhotos")}}},[t._v("Submit")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var y=a("VU/8")(b,x,!1,function(t){a("Vaxo")},"data-v-c36fa488",null).exports;const C=r.a.firestore();var P={name:"ServiceProviders",data:()=>({newServiceDialog:!1,serviceFormValid:!0,newService:{id:null,icon:null,name:null,location:null,position:null},tableHeaders:[{text:"Name",value:"name"},{text:"Location",value:"location"},{text:"Paid",value:"paid"},{text:"Unpaid",value:"Unpaid"}],serviceProviders:[],serviceProvidersLoading:!1,editOn:!1}),methods:{listServiceProviders(){this.serviceProvidersLoading=!0,this.serviceProviders=[],C.collection("clients").get().then(t=>{t.forEach(t=>{const e={id:t.id,name:t.data().name,location:t.data().location,paid:t.data().paid,unpaid:t.data().unpaid};this.serviceProviders.push(e)})}),this.serviceProvidersLoading=!1},createNewService(){this.newService.icon&&this.newService.name&&this.newService.location&&this.newService.position&&C.collection("clients").add({paid:this.newService.paid,title:this.newService.name,location:this.newService.location,position:this.newService.position}).then(t=>{this.listServiceProviders(),this.resetNewService(),this.newServiceDialog=!1}).catch(t=>console.log(err))},resetNewService(){this.newService={id:null,icon:null,name:null,location:null,position:null},this.editOn=!1,this.newServiceDialog=!1,this.$refs.serviceForm.reset()},startEdit(t){this.newService={id:t.id,icon:t.icon,name:t.name,location:t.location,position:t.position},this.editOn=!0,this.newServiceDialog=!0},updateService(){if(!(this.newService.icon&&this.newService.name&&this.newService.location&&this.newService.position))return;const t=C.collection("clients").doc(this.newService.id);t.set({name:this.newService.name,location:this.newService.location,paid:this.newService.paid,unpaid:this.newService.unpaid}).then(t=>{this.listServiceProviders(),console.log("Document successfully written!",t),this.resetNewService()}).catch(()=>{console.error("Error writing document: ",error)})},deleteService(t){if(confirm("You are about to make payment. Are you sure?")){C.collection("balance").doc("amount").update({amount:100201});const e=C.collection("clients").doc(t.id);e.update({paid:t.paid+t.unpaid}),e.update({unpaid:0}).then(t=>{this.listServiceProviders(),console.log("Payment made!")}).catch(t=>{console.error("Error making payment : ",t)})}}},created(){this.listServiceProviders()}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"ServiceProviders"}},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{md11:"",xs12:""}},[a("v-card",[a("v-card-title",{staticClass:"headline brown darken-2 white--text"},[t._v("ServiceProviders")]),t._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.tableHeaders,items:t.serviceProviders,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.name))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.location))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.paid))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.unpaid))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[a("v-btn",{attrs:{icon:""},on:{click:function(a){t.deleteService(e.item)}}},[a("v-icon",[t._v("fa-money")]),a("i",[t._v(" Pay")])],1)],1)]}}])})],1)],1)],1)],1),t._v(" "),a("v-btn",{attrs:{color:"brown darken-2",dark:"",fixed:"",bottom:"",right:"",fab:""},nativeOn:{click:function(e){e.stopPropagation(),t.newServiceDialog=!t.newServiceDialog}}},[a("v-icon",[t._v("fa-plus")])],1),t._v(" "),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.newServiceDialog,callback:function(e){t.newServiceDialog=e},expression:"newServiceDialog"}},[a("v-card",[a("v-card-title",[t.editOn?a("span",{staticClass:"headline"},[t._v("Edit Service")]):a("span",{staticClass:"headline"},[t._v("Create New Service")])]),t._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-form",{ref:"serviceForm",attrs:{"lazy-validation":""},model:{value:t.serviceFormValid,callback:function(e){t.serviceFormValid=e},expression:"serviceFormValid"}},[a("v-text-field",{attrs:{name:"icon",label:"icon",required:"",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.newService.icon,callback:function(e){t.$set(t.newService,"icon",e)},expression:"newService.icon"}}),t._v(" "),a("v-text-field",{attrs:{name:"name",label:"name",required:"",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.newService.name,callback:function(e){t.$set(t.newService,"name",e)},expression:"newService.name"}}),t._v(" "),a("v-text-field",{attrs:{textarea:"",name:"location",label:"location",required:"",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.newService.location,callback:function(e){t.$set(t.newService,"location",e)},expression:"newService.location"}})],1)],1)],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.resetNewService()}}},[t._v("Cancel")]),t._v(" "),t.editOn?a("v-btn",{attrs:{color:"teal darken-1",flat:"",disabled:!t.serviceFormValid},nativeOn:{click:function(e){t.updateService()}}},[t._v("Submit")]):a("v-btn",{attrs:{color:"teal darken-1",flat:"",disabled:!t.serviceFormValid},nativeOn:{click:function(e){t.createNewService()}}},[t._v("Submit")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var D=a("VU/8")(P,k,!1,function(t){a("js4n")},"data-v-54107832",null).exports;const R=r.a.firestore(),S=r.a.storage().ref();var I={name:"people",data:()=>({newReviewDialog:!1,valid:!0,newReview:{id:null,picture:null,name:null,cardnumber:null,level:null,profilePhoto:null},tableHeaders:[{text:"Icon",value:"picture"},{text:"level",value:"level"},{text:"Name",value:"name"},{text:"Card Number",value:"cardnumber"}],reviews:[],reviewsLoading:!1,editOn:!1}),methods:{listReviews(){this.reviewsLoading=!0,this.reviews=[],R.collection("people").get().then(t=>{t.forEach(t=>{const e={id:t.id,picture:t.data().picture,profilePath:t.data().profilePath,name:t.data().name,cardnumber:t.data().cardnumber,level:t.data().level};this.reviews.push(e)})}),this.reviewsLoading=!1},resetNewReview(){this.newReview={id:null,picture:null,name:null,cardnumber:null,level:null,profilePhoto:null},this.editOn=!1,this.newReviewDialog=!1,this.$refs.reviewForm.reset();var t=document.getElementById("photoUploadInput");t.value=t.defaultValue},startEdit(t){this.newReview={id:t.id,picture:t.picture,profilePath:t.profilePath,name:t.name,cardnumber:t.cardnumber,level:t.level},this.editOn=!0,this.newReviewDialog=!0},updateReview(){if(this.newReview.name&&this.newReview.cardnumber&&this.newReview.level)if(this.newReview.profilePhoto)this.deletePhoto(this.newReview.profilePath),Array.from(this.newReview.profilePhoto).forEach(t=>{var e=S.child("profilePhotos/"+this.newReview.name).put(t);e.on("state_changed",function(t){var e=parseInt(t.bytesTransferred/t.totalBytes*100);console.log("Upload is "+e+"% done")},t=>{console.log(t)},()=>{var t=e.snapshot.downloadURL,a=e.snapshot.metadata.fullPath;R.collection("people").doc(this.newReview.id).set({name:this.newReview.name,cardnumber:this.newReview.cardnumber,level:this.newReview.level,picture:t,profilePath:a}).then(t=>{this.listReviews(),console.log("Document successfully written!",t),this.resetNewReview()}).catch(()=>{console.error("Error writing document: ",error)})})});else{R.collection("people").doc(this.newReview.id).set({name:this.newReview.name,cardnumber:this.newReview.cardnumber,level:this.newReview.level,picture:this.newReview.picture,profilePath:this.newReview.profilePath}).then(t=>{this.listReviews(),console.log("Document successfully written!",t),this.resetNewReview()}).catch(()=>{console.error("Error writing document: ",error)})}},deletePhoto(t){var e=S.child(t);e.delete().then(function(){console.log("image deleted")}).catch(function(t){console.log("error",t)})},deleteReview(t){confirm("Are you sure?")&&(this.deletePhoto(t.profilePath),R.collection("people").doc(t.id).delete().then(t=>{this.listReviews(),console.log("Document successfully deleted!")}).catch(t=>{console.error("Error removing document: ",t)}))},processFiles(t){this.newReview.profilePhoto=t.target.files},createNewReview(){const t="profilePhotos";Array.from(this.newReview.profilePhoto).forEach(e=>{console.log("review",this.newReview);var a=S.child(t+"/"+this.newReview.name).put(e);a.on("state_changed",function(t){var e=parseInt(t.bytesTransferred/t.totalBytes*100);console.log("Upload is "+e+"% done")},t=>{console.log(t)},()=>{var t=a.snapshot.downloadURL,e=a.snapshot.metadata.fullPath;R.collection("people").add({picture:t,profilePath:e,name:this.newReview.name,cardnumber:this.newReview.cardnumber,level:this.newReview.level}).then(t=>{this.listReviews(),this.resetNewReview(),this.newReviewDialog=!1}).catch(t=>console.log(err))})})}},created(){this.listReviews()}},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Reviews"}},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{md11:"",xs12:""}},[a("v-card",[a("v-card-title",{staticClass:"headline brown darken-2 white--text"},[t._v("People (Donees)")]),t._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.tableHeaders,items:t.reviews,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-right"},[a("img",{staticClass:"profile-preview",attrs:{src:e.item.picture}})]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.level))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.name))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.cardnumber))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[a("v-btn",{attrs:{icon:""},on:{click:function(a){t.startEdit(e.item)}}},[a("v-icon",[t._v("fa-pencil")])],1),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(a){t.deleteReview(e.item)}}},[a("v-icon",[t._v("fa-times")])],1)],1)]}}])})],1)],1)],1)],1),t._v(" "),a("v-btn",{attrs:{color:"brown darken-2",dark:"",fixed:"",bottom:"",right:"",fab:""},nativeOn:{click:function(e){e.stopPropagation(),t.newReviewDialog=!t.newReviewDialog}}},[a("v-icon",[t._v("fa-plus")])],1),t._v(" "),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.newReviewDialog,callback:function(e){t.newReviewDialog=e},expression:"newReviewDialog"}},[a("v-card",[a("v-card-title",[t.editOn?a("span",{staticClass:"headline"},[t._v("Edit Review")]):a("span",{staticClass:"headline"},[t._v("Create New Review")])]),t._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-form",{ref:"reviewForm",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{name:"name",label:"name",required:"",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.newReview.name,callback:function(e){t.$set(t.newReview,"name",e)},expression:"newReview.name"}}),t._v(" "),a("v-text-field",{attrs:{textarea:"",name:"cardnumber",label:"cardnumber",required:"",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.newReview.cardnumber,callback:function(e){t.$set(t.newReview,"cardnumber",e)},expression:"newReview.cardnumber"}}),t._v(" "),a("v-text-field",{attrs:{type:"number",name:"level",label:"level",required:"",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.newReview.level,callback:function(e){t.$set(t.newReview,"level",e)},expression:"newReview.level"}}),t._v(" "),a("input",{attrs:{id:"photoUploadInput",name:"photo",type:"file",accept:"image/*",required:""},on:{change:function(e){t.processFiles(e)}}})],1)],1)],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.resetNewReview()}}},[t._v("Cancel")]),t._v(" "),t.editOn?a("v-btn",{attrs:{color:"teal darken-1",flat:"",disabled:!t.valid},nativeOn:{click:function(e){t.updateReview()}}},[t._v("Submit")]):a("v-btn",{attrs:{color:"teal darken-1",flat:"",disabled:!t.valid},nativeOn:{click:function(e){t.createNewReview()}}},[t._v("Submit")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var T=a("VU/8")(I,E,!1,function(t){a("qsvJ")},"data-v-c444a74a",null).exports,O={name:"Login",data:()=>({email:null,password:null}),methods:{firebaseLogin(){r.a.auth().signInWithEmailAndPassword(this.email,this.password).then(t=>{z.push("/panel")}).catch(t=>{var e=t.code,a=t.message;console.log("error code:",e,"error message",a)})}}},N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Login"}},[a("v-app",[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{flex:"","align-center":"","justify-center":""}},[a("v-flex",{attrs:{md3:"",xs11:""}},[a("form",{on:{submit:function(e){e.preventDefault(),t.firebaseLogin(e)}}},[a("v-card",[a("v-toolbar",{staticClass:"teal"},[a("div",{staticClass:"stretch headline white--text text-xs-center"},[t._v("FeedAll Admin")])]),t._v(" "),a("v-card-text",[a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("v-text-field",{attrs:{color:"teal",name:"email",type:"text",label:"Email",id:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("v-text-field",{attrs:{color:"teal",name:"password",type:"password",label:"Password",id:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1),t._v(" "),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{dark:"",color:"teal",type:"submit"}},[t._v("LOGIN")])],1)],1)],1)])],1)],1)],1)],1)},staticRenderFns:[]};var U=a("VU/8")(O,N,!1,function(t){a("YTFj")},"data-v-0c23df3c",null).exports;const q=r.a.firestore();var A={name:"Intro",data:()=>({formValid:!0,intro:{id:null,title:null,body:null},editingIntro:{id:null,title:null,body:null},editIntroDialog:!1}),methods:{getIntro(){q.collection("intro").get().then(t=>{t.forEach(t=>{const e={id:t.id,title:t.data().title,body:t.data().body};this.intro=e})})},startEdit(){this.editingIntro.id=this.intro.id,this.editingIntro.title=this.intro.title,this.editingIntro.body=this.intro.body,this.editIntroDialog=!0},cancelEdit(){this.editIntroDialog=!1,this.$refs.form.reset()},updateIntro(){const t=q.collection("intro").doc(this.editingIntro.id);t.set({title:this.editingIntro.title,body:this.editingIntro.body}).then(t=>{this.getIntro(),console.log("Document successfully written!",t),this.cancelEdit()}).catch(()=>{console.error("Error writing document: ",error),this.cancelEdit()})}},created(){this.getIntro()}},V={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Intro"}},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{md6:"",xs12:""}},[a("v-card",[a("v-card-title",{staticClass:"headline brown darken-2 white--text"},[t._v("Introduction")]),t._v(" "),a("v-card-text",[a("h3",[t._v(t._s(t.intro.title))]),t._v(" "),a("v-spacer"),t._v(" "),a("p",[t._v(t._s(t.intro.body))])],1)],1)],1)],1)],1),t._v(" "),a("v-btn",{attrs:{color:"brown darken-2",dark:"",fixed:"",bottom:"",right:"",fab:""},on:{click:t.startEdit}},[a("v-icon",[t._v("fa-pencil")])],1),t._v(" "),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.editIntroDialog,callback:function(e){t.editIntroDialog=e},expression:"editIntroDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Editing Introduction")])]),t._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[a("v-text-field",{attrs:{name:"title",label:"title",required:"",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.editingIntro.title,callback:function(e){t.$set(t.editingIntro,"title",e)},expression:"editingIntro.title"}}),t._v(" "),a("v-text-field",{attrs:{textarea:"",name:"body",label:"body",required:"",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.editingIntro.body,callback:function(e){t.$set(t.editingIntro,"body",e)},expression:"editingIntro.body"}})],1)],1)],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.cancelEdit(e)}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{color:"teal darken-1",flat:"",disabled:!t.formValid},nativeOn:{click:function(e){t.updateIntro(e)}}},[t._v("Submit")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var F=a("VU/8")(A,V,!1,function(t){a("F1JL")},"data-v-7d6c0360",null).exports;const L=r.a.firestore(),B=r.a.storage().ref();var $={name:"IntroBg",data:()=>({formValid:!0,uploadDialog:!1,introBg:{id:null,url:null,path:null},newPhoto:null}),methods:{getIntroBg(){L.collection("introBg").get().then(t=>{t.forEach(t=>{const e={id:t.id,url:t.data().url,path:t.data().path};this.introBg=e})})},uploadPhotos(){const t="introBg",e=this.introBg.id;this.introBg.path&&this.deletePhoto(this.introBg.path),Array.from(this.newPhoto).forEach(a=>{var i=B.child(t+"/"+e).put(a);i.on("state_changed",function(t){},t=>{console.log("upload unsuccessful")},()=>{var a=i.snapshot.downloadURL,s=i.snapshot.metadata.fullPath;L.collection(t).doc(e).set({url:a,path:s}).then(t=>{console.log("Document successfully written!",t),this.getIntroBg()}).catch(()=>{console.error("Error writing document: ",error)})})})},cancelUpload(){var t=document.getElementById("photoUploadInput");t.value=t.defaultValue,this.uploadDialog=!1,this.newPhoto=null,this.$refs.form.reset()},processFiles(t){this.newPhoto=t.target.files},deletePhoto(t){var e=B.child(t);e.delete().then(function(){}).catch(function(t){console.log("error",t)})}},created(){this.getIntroBg()}},j={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"IntroBg"}},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{md6:"",xs12:""}},[a("v-card",[a("v-card-title",{staticClass:"headline brown darken-2 white--text"},[t._v("Picture")]),t._v(" "),a("v-card-text",{staticClass:"text-xs-center"},[a("img",{staticClass:"fit",attrs:{src:t.introBg.url}})])],1)],1)],1)],1),t._v(" "),a("v-btn",{attrs:{color:"brown darken-2",dark:"",fixed:"",bottom:"",right:"",fab:""},nativeOn:{click:function(e){e.stopPropagation(),t.uploadDialog=!t.uploadDialog}}},[a("v-icon",[t._v("fa-upload")])],1),t._v(" "),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.uploadDialog,callback:function(e){t.uploadDialog=e},expression:"uploadDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Photo Upload")])]),t._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-form",{ref:"form",model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[a("input",{attrs:{id:"photoUploadInput",type:"file",accept:"image/*",required:""},on:{change:function(e){t.processFiles(e)}}})])],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.cancelUpload()}}},[t._v("Close")]),t._v(" "),a("v-btn",{attrs:{color:"teal darken-1",flat:"",disabled:!t.newPhoto},nativeOn:{click:function(e){t.uploadPhotos()}}},[t._v("Upload")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var M=a("VU/8")($,j,!1,function(t){a("qo+O")},"data-v-e89906ba",null).exports;i.a.use(o.a);const H=new o.a({routes:[{path:"*",redirect:"/panel",meta:{requiresAuth:!0}},{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:U},{path:"/panel",component:v,children:[{path:"/",component:h},{path:"/peoples",component:T},{path:"/reviews",component:f},{path:"/gallery",component:y},{path:"/services",component:D},{path:"/intro",component:F},{path:"/introbg",component:M}],meta:{requiresAuth:!0}}]});H.beforeEach((t,e,a)=>{const i=r.a.auth().currentUser,s=t.matched.some(t=>t.meta.requiresAuth);s&&!i?a("login"):!s&&i?a("panel"):a()});var z=H,J=a("8+8L"),W=a("3EgV"),G=a.n(W);a("7zck");i.a.config.productionTip=!1,i.a.use(J.a),i.a.use(G.a),new i.a({el:"#app",router:z,created(){r.a.auth().onAuthStateChanged(t=>{t||z.push("/")})},template:"<App/>",components:{App:n}})},OU9P:function(t,e){},Pm8H:function(t,e){},Vaxo:function(t,e){},YTFj:function(t,e){},YpgA:function(t,e){},js4n:function(t,e){},qVsQ:function(t,e,a){"use strict";var i=a("Sazm");const s=a.n(i).a.initializeApp({apiKey:"AIzaSyCGR3q2AfLGL0pMue6k5JeVtmC6Ry7uY0Q",authDomain:"feedall.firebaseapp.com",databaseURL:"https://feedall-default-rtdb.firebaseio.com",projectId:"feedall",storageBucket:"feedall.appspot.com",messagingSenderId:"842961100519",appId:"1:842961100519:web:7437c07e719906e907cc42"});e.a=s},"qo+O":function(t,e){},qsvJ:function(t,e){},yVvJ:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__firebaseInit__=__webpack_require__("qVsQ"),__WEBPACK_IMPORTED_MODULE_1_firebase_firestore__=__webpack_require__("3VHS"),__WEBPACK_IMPORTED_MODULE_1_firebase_firestore___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_firestore__);const db=__WEBPACK_IMPORTED_MODULE_0__firebaseInit__.a.firestore(),storageRef=__WEBPACK_IMPORTED_MODULE_0__firebaseInit__.a.storage().ref();__webpack_exports__.a={name:"Transactions",data:()=>({newTransactionDialog:!1,valid:!0,createNewTransaction:{enitiy_name:null,payment_type:null,amount:null},tableHeaders:[{text:"Name",value:"enitiy_name"},{text:"Amount",value:"amount"},{text:"Payment system",value:"payment_system"}],transactions:[],transactionsLoading:!1,editOn:!1}),methods:{listTransactions(){this.transactionsLoading=!0,this.transactions=[],db.collection("transactions").get().then(t=>{t.forEach(t=>{const e={enitiy_name:t.data().enitiy_name,amount:t.data().amount,payment_system:3==t.data().payment_system?"SMS Mobile Donation":"Bank Donation"};this.transactions.push(e)})}),this.transactionsLoading=!1},resetNewTransaction(){this.createNewTransaction={enitiy_name:null,payment_type:null,amount:null},this.editOn=!1,this.newTransactionDialog=!1,this.$refs.transactionForm.reset()},startEdit(t){this.createNewTransaction={enitiy_name:null,payment_type:null,amount:null},this.editOn=!0,this.newTransactionDialog=!0},updateTransaction(){if(!this.createNewTransaction.enitiy_name||!this.createNewTransaction.payment||!this.createNewTransaction.amount)return;const t=db.collection("transactions").doc(this.createNewTransaction.id);t.set({enitiy_name:this.createNewTransaction.enitiy_name,payment_type:this.createNewTransaction.payment_system,amount:this.createNewTransaction.amount}).then(t=>{this.listTransactions(),console.log("Document successfully written!",t),this.resetNewTransaction()}).catch(()=>{console.error("Error writing document: ",error)})},deleteTransaction(t){confirm("Are you sure?")&&db.collection("transactions").doc(t.id).delete().then(t=>{this.listTransactions(),console.log("Document successfully deleted!")}).catch(t=>{console.error("Error removing document: ",t)})},processFiles(t){this.createNewTransaction.profilePhoto=t.target.files},CreateNewTransaction(){db.collection("transactions").add({enitiy_name:this.createNewTransaction.enitiy_name,payment_type:eval(this.createNewTransaction.payment_system),amount:eval(this.createNewTransaction.amount)}).then(t=>{this.listTransactions(),this.resetNewTransaction(),this.newTransactionDialog=!1}).catch(t=>console.log(err))}},created(){this.listTransactions()}}},znzv:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e90cf638e2884675eb97.js.map