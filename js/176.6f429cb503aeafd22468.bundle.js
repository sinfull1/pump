(self.webpackChunkcreator_gopayment=self.webpackChunkcreator_gopayment||[]).push([[176],{3347:(e,t,a)=>{"use strict";a.r(t)},3624:function(e,t,a){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=r(a(9669)),n=a(9404),u=r(a(9669)),s={post:{Authorization:"Bearer "+localStorage.getItem("user"),"Access-Control-Allow-Origin":"*"},get:{Authorization:"Bearer "+localStorage.getItem("user"),"Access-Control-Allow-Origin":"*"}};t.default=new function(){this.callAPI=function(e){var t={url:e.url,headers:s,data:e.data,method:e.method,timeout:3e3,responseType:"json",validateStatus:function(e){return 401==e&&(localStorage.removeItem("name"),localStorage.removeItem("user"),n.history.push("/home"),window.location.reload()),!0},cancelToken:new u.default.CancelToken((function(e){}))};return l.default(t)}}},965:function(e,t,a){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return l(t,e),t},u=this&&this.__read||function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var r,l,n=a.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(r=n.next()).done;)u.push(r.value)}catch(e){l={error:e}}finally{try{r&&!r.done&&(a=n.return)&&a.call(n)}finally{if(l)throw l.error}}return u},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(a(1375)),i=a(2812),c=s(a(3912)),d=a(1250),f=s(a(9169)),p=s(a(4115)),m=s(a(202)),h=s(a(3141)),y=s(a(6366));a(5677);var b=s(a(8674)),g=i.withStyles({root:{"& label.Mui-focused":{color:"#ff9800"},"& .MuiInputBase-root":{color:"#ff9800"},"& .MuiFormLabel-root":{color:"#ff9800"},"& .MuiInput-underline:after":{borderBottomColor:"#ff9800"},"& .MuiInput-underline:before":{borderBottomColor:"#ff9800"},"& .MuiInput-underline:focus":{borderBottomColor:"#ff9800"},"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderBottomColor:"#ff9800"}}}})(y.default),v=i.makeStyles((function(e){return{select:{color:"#ff9800","&:before":{borderColor:"#ff9800"},"&:after":{borderColor:"#ff9800"}},icon:{fill:"#ff9800"},root:{"& > *":{margin:e.spacing(1)}},menuItem:{color:"#453f3b"},formControl:{margin:e.spacing(1),minWidth:120},inputLabel:{color:"#ff9800"},button:{backgroundColor:"#453f3b",width:"230px",color:"#ff9800","&:hover":{backgroundColor:"#ff9800",color:"#453f3b"}},"& MuiInputBase-input":{display:"flex",flexWrap:"wrap",color:"#ff9800"}}}));t.default=function(e){var t,a=v(),r=d.useDispatch(),l=u(o.useState(e.data?e.data.fuel:""),2),n=l[0],s=l[1],i=d.useSelector((function(e){return e.fuel.fuelDetails})),y=d.useSelector((function(e){return e.fuel.message})),E=u(o.useState(e.data?e.data.ireading:null),2),_=E[0],S=E[1],D=u(o.useState(e.data?e.data.ereading:null),2),w=D[0],P=D[1],O=u(o.useState(e.data?e.data.rate:null),2),M=O[0],A=O[1],T=u(o.useState(e.data?e.data.credit:null),2),F=T[0],k=T[1],I=u(o.useState(e.data?e.data.upi:null),2),x=I[0],N=I[1],C=u(o.useState(e.data?e.data.cash:null),2),L=C[0],V=C[1],R=u(o.useState(e.data?e.data.nozzle:1),2),j=R[0],z=R[1],U=u(o.default.useState(e.data?(e.data.saledate,t=e.data.saledate[1]<10?"0"+e.data.saledate[1]:""+e.data.saledate[1],e.data.saledate[0]+"-"+t+"-"+e.data.saledate[2]+"T10:30"):"2021-05-30T10:30"),2),B=U[0],G=U[1],H=u(o.useState(!1),2),W=H[0],Q=H[1];return o.default.createElement("div",null,o.default.createElement("div",{className:"d-flex flex-column"},o.default.createElement("div",{className:"flex-row"},W?o.default.createElement(b.default,null):null,o.default.createElement("p",{style:{color:"#81A140"}},y)),o.default.createElement("form",{noValidate:!0},o.default.createElement(g,{id:"datetime-local",label:"Select Date",type:"datetime-local",onChange:function(e){G(e.target.value)},InputLabelProps:{shrink:!0}})),o.default.createElement(m.default,{className:a.formControl},o.default.createElement(f.default,{style:{color:"#ff9800"}},"Fuel Type"),o.default.createElement(h.default,{className:a.select,inputProps:{classes:{icon:a.icon}},style:{width:"200px"},value:n,onChange:function(e){e.preventDefault(),r({type:"MESSAGE",message:""}),s(e.target.value)}},o.default.createElement(p.default,{className:a.menuItem,value:"PETROL"},"PETROL"),o.default.createElement(p.default,{className:a.menuItem,value:"DIESEL"},"DIESEL"))),o.default.createElement(m.default,{className:a.formControl},o.default.createElement(f.default,{style:{color:"#ff9800"}},"Nozzle Number"),o.default.createElement(h.default,{className:a.select,inputProps:{classes:{icon:a.icon}},style:{width:"200px"},value:j,onChange:function(e){z(e.target.value)}},o.default.createElement(p.default,{className:a.menuItem,value:"1"},"1"),o.default.createElement(p.default,{className:a.menuItem,value:"2"},"2"),o.default.createElement(p.default,{className:a.menuItem,value:"3"},"3"),o.default.createElement(p.default,{className:a.menuItem,value:"4"},"4"))),o.default.createElement("div",{className:"d-flex flex-column",style:{borderColor:"#ff9800"}},e.data?null:o.default.createElement(c.default,{variant:"contained",className:a.button,onClick:function(e){var t=i.filter((function(e){return e.nozzle==j})).sort((function(e,t){return t.created-e.created})),a=t&&t[0]&&t[0].ereading?t[0].ereading:"";S(a)}},"Add Last Reading"),o.default.createElement("form",{style:{margin:"10px",paddingLeft:"4px"}},o.default.createElement(g,{onChange:function(e){S(e.target.value)},type:"number",value:_})),o.default.createElement("form",{style:{margin:"10px",paddingLeft:"4px"}},o.default.createElement(g,{label:"Enter End Reading",onChange:function(e){P(e.target.value)},type:"number",defaultValue:w})),o.default.createElement("form",{style:{margin:"10px",paddingLeft:"4px"}},o.default.createElement(g,{label:"Rate",onChange:function(e){A(e.target.value)},type:"number",defaultValue:M})),o.default.createElement("form",{style:{margin:"10px",paddingLeft:"4px"}},o.default.createElement(g,{label:"Credit Card Payment",onChange:function(e){k(e.target.value)},type:"number",defaultValue:F})),o.default.createElement("form",{style:{margin:"10px",paddingLeft:"4px"}},o.default.createElement(g,{label:"Upi/Wallet Payment",onChange:function(e){N(e.target.value)},type:"number",defaultValue:x})),o.default.createElement("form",{style:{margin:"10px",paddingLeft:"4px"}},o.default.createElement(g,{label:"Cash Payment",onChange:function(e){V(e.target.value)},type:"number",defaultValue:L})),o.default.createElement(c.default,{variant:"contained",className:a.button,onClick:function(t){if(Q(!0),!n)return r({type:"MESSAGE",message:"Please select fuel type !"}),void Q(!1);var a,l={fuel:n,ireading:parseFloat(_),ereading:parseFloat(w),rate:parseFloat(M),credit:parseFloat(F),cash:parseFloat(L),saledate:B,updator:"SID",creator:"SID",name:"TIGER PUMP",nozzle:j,created:null,updated:null,upi:parseFloat(x)};e.data?(l.id=e.data.id,a={type:"FUEL_UPDATE",payload:l}):a={type:"FUEL_ORDER",payload:l},r(a),Q(!1)}},e.data?"Update Sale Entry":"Save Sale Entry"))))}},330:function(e,t,a){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return l(t,e),t},u=this&&this.__read||function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var r,l,n=a.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(r=n.next()).done;)u.push(r.value)}catch(e){l={error:e}}finally{try{r&&!r.done&&(a=n.return)&&a.call(n)}finally{if(l)throw l.error}}return u},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(a(1375)),i=a(2812),c=s(a(753)),d=s(a(2329)),f=s(a(3697)),p=s(a(3570)),m=s(a(9423)),h=s(a(671)),y=s(a(7613)),b=a(1250),g=s(a(7999)),v=s(a(8428)),E=s(a(9067)),_=s(a(6544)),S=s(a(8514)),D=s(a(965)),w=i.makeStyles((function(e){return{root:{width:"100%",overflowX:"auto"},table:{minWidth:700},tablecell:{fontSize:"12pt"},margin:{},paper:{position:"absolute",width:300,backgroundColor:"#282828",border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function P(){return{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}t.default=function(){var e=w(),t=u(o.useState(P),1)[0],a=b.useSelector((function(e){return e.fuel.fuelDetails})),r=b.useSelector((function(e){return e.fuel.message})),l=u(o.useState(!1),2),n=l[0],s=l[1],i=b.useDispatch();o.useEffect((function(){i({type:"GET_SALES"})}),[]);var O=a?a.map((function(e){return{id:e.id,fuel:e.fuel,ireading:e.ireading,ereading:e.ereading,rate:e.rate,credit:e.credit,cash:e.cash,saledate:e.saledate,creator:e.creator,name:e.name,nozzle:e.nozzle,upi:e.upi}})):[],M=function(){s(!1),i({type:"GET_SALES"})};return o.default.createElement(o.default.Fragment,null,o.default.createElement("p",{style:{color:"#81A140"}},r),o.default.createElement(p.default,{component:y.default},o.default.createElement(c.default,{className:e.table,"aria-label":"simple table"},o.default.createElement(m.default,null,o.default.createElement(h.default,{className:e.tablecell},o.default.createElement(f.default,{className:e.tablecell},"Action"),o.default.createElement(f.default,{className:e.tablecell},"Date"),o.default.createElement(f.default,{className:e.tablecell},"Item"),o.default.createElement(f.default,{className:e.tablecell},"Nozzle"),o.default.createElement(f.default,{className:e.tablecell,align:"right"},"Sales"),o.default.createElement(f.default,{className:e.tablecell,align:"right"},"Collections"),o.default.createElement(f.default,{className:e.tablecell,align:"right"},"Quantity"),o.default.createElement(f.default,{className:e.tablecell,align:"right"},"Shortfall"))),o.default.createElement(d.default,null,O?O.map((function(a){return o.default.createElement(h.default,{className:e.tablecell},o.default.createElement(f.default,{className:e.tablecell,component:"th",scope:"row"},o.default.createElement(_.default,{title:"Delete"},o.default.createElement(g.default,{"aria-label":"delete",className:e.margin,onClick:function(e){var t;t=a.id,i({type:"DELETE_SALE",id:t})}},o.default.createElement(v.default,{fontSize:"small"}))),o.default.createElement(S.default,{open:n,onClose:M,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},function(a){return o.default.createElement("div",{style:t,className:e.paper},o.default.createElement("h2",{id:"simple-modal-title",style:{color:"#ff9800"}},"Edit Sale Entry"),o.default.createElement(D.default,{data:a}))}(a)),o.default.createElement(_.default,{title:"Edit"},o.default.createElement(g.default,{"aria-label":"edit",className:e.margin,onClick:function(e){s(!0)}},o.default.createElement(E.default,{fontSize:"small"})))),o.default.createElement(f.default,{className:e.tablecell,component:"th",scope:"row"},a.saledate),o.default.createElement(f.default,{className:e.tablecell,component:"th",scope:"row"},a.fuel),o.default.createElement(f.default,{className:e.tablecell,component:"th",scope:"row"},a.nozzle),o.default.createElement(f.default,{className:e.tablecell,align:"right"},"Rs.",((parseFloat(a.ereading)-parseFloat(a.ireading))*parseFloat(a.rate)).toFixed(2)),o.default.createElement(f.default,{className:e.tablecell,align:"right"},"Rs.",(parseFloat(a.credit)+parseFloat(a.upi)+parseFloat(a.cash)).toFixed(2)),o.default.createElement(f.default,{className:e.tablecell,align:"right"},(parseFloat(a.ereading)-parseFloat(a.ireading)).toFixed(2)+" Ltrs."),o.default.createElement(f.default,{className:e.tablecell,align:"right"},"Rs.",(parseFloat(a.credit)+parseFloat(a.upi)+parseFloat(a.cash)-(parseFloat(a.ereading)-parseFloat(a.ireading))*parseFloat(a.rate)).toFixed(2)))})):null))))}},9404:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.history=void 0;var r=a(71);t.history=r.createBrowserHistory()},9583:function(e,t,a){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=a(31),u=l(a(5720));t.default=function(e){return void 0===e&&(e={}),n.combineReducers(r(r({},e),{fuel:u.default}))}},395:function(e,t,a){"use strict";var r=this&&this.__generator||function(e,t){var a,r,l,n,u={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(n){return function(s){return function(n){if(a)throw new TypeError("Generator is already executing.");for(;u;)try{if(a=1,r&&(l=2&n[0]?r.return:n[0]?r.throw||((l=r.return)&&l.call(r),0):r.next)&&!(l=l.call(r,n[1])).done)return l;switch(r=0,l&&(n=[2&n[0],l.value]),n[0]){case 0:case 1:l=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,r=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(!((l=(l=u.trys).length>0&&l[l.length-1])||6!==n[0]&&2!==n[0])){u=0;continue}if(3===n[0]&&(!l||n[1]>l[0]&&n[1]<l[3])){u.label=n[1];break}if(6===n[0]&&u.label<l[1]){u.label=l[1],l=n;break}if(l&&u.label<l[2]){u.label=l[2],u.ops.push(n);break}l[2]&&u.ops.pop(),u.trys.pop();continue}n=t.call(e,u)}catch(e){n=[6,e],r=0}finally{a=l=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,s])}}},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.setBuyDetailValue=t.setAmountValue=t.setTotalValue=t.setPriceValue=t.setDetailValue=t.getTravel=void 0;var n=a(4857),u=a(6735),s=l(a(3624)),o=a(2241);t.getTravel=function(e){return r(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,4]),[4,n.call((function(){return s.default.callAPI({url:o.API_URL+"/getTravel",method:"POST",data:{origin,destination,travelDate:new Date(travelDate)}})}))];case 1:return e.sent().status,[3,4];case 2:return e.sent(),[4,n.put({type:"TODO_FETCH_FAILED"})];case 3:return e.sent(),[3,4];case 4:return[2]}}))},t.setDetailValue=function(){var e;return r(this,(function(t){switch(t.label){case 0:return[4,n.take("SET_DETAIL")];case 1:return e=t.sent(),[4,n.put(u.setDetail(e.payload))];case 2:return t.sent(),[3,0];case 3:return[2]}}))},t.setPriceValue=function(){var e;return r(this,(function(t){switch(t.label){case 0:return[4,n.take("SET_PRICE")];case 1:return e=t.sent(),[4,n.put(u.setPrice(e.payload))];case 2:return t.sent(),[3,0];case 3:return[2]}}))},t.setTotalValue=function(){var e;return r(this,(function(t){switch(t.label){case 0:return[4,n.take("SET_TOTAL")];case 1:return e=t.sent(),[4,n.put(u.setTotal(e.payload))];case 2:return t.sent(),[3,0];case 3:return[2]}}))},t.setAmountValue=function(){var e;return r(this,(function(t){switch(t.label){case 0:return[4,n.take("SET_AMOUNT")];case 1:return e=t.sent(),[4,n.put(u.setAmount(e.payload))];case 2:return t.sent(),[3,0];case 3:return[2]}}))},t.setBuyDetailValue=function(){var e;return r(this,(function(t){switch(t.label){case 0:return[4,n.take("SET_BUY_DETAIL")];case 1:return e=t.sent(),[4,n.put(u.setBuyDetail(e.payload))];case 2:return t.sent(),[3,0];case 3:return[2]}}))}},3751:function(e,t,a){"use strict";var r=this&&this.__generator||function(e,t){var a,r,l,n,u={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(n){return function(s){return function(n){if(a)throw new TypeError("Generator is already executing.");for(;u;)try{if(a=1,r&&(l=2&n[0]?r.return:n[0]?r.throw||((l=r.return)&&l.call(r),0):r.next)&&!(l=l.call(r,n[1])).done)return l;switch(r=0,l&&(n=[2&n[0],l.value]),n[0]){case 0:case 1:l=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,r=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(!((l=(l=u.trys).length>0&&l[l.length-1])||6!==n[0]&&2!==n[0])){u=0;continue}if(3===n[0]&&(!l||n[1]>l[0]&&n[1]<l[3])){u.label=n[1];break}if(6===n[0]&&u.label<l[1]){u.label=l[1],l=n;break}if(l&&u.label<l[2]){u.label=l[2],u.ops.push(n);break}l[2]&&u.ops.pop(),u.trys.pop();continue}n=t.call(e,u)}catch(e){n=[6,e],r=0}finally{a=l=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,s])}}},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.setMessageValue=t.getAllSales=t.updateFuelDetailsValue=t.addFuelDetailsValue=t.getDeleteSale=t.updateSales=t.deleteSales=t.getSales=t.setSale=void 0;var n=a(4857),u=a(5720),s=l(a(3624));function o(e){return r(this,(function(t){switch(t.label){case 0:return t.trys.push([0,6,,8]),[4,n.call((function(){return s.default.callAPI({url:"https://www.gopaychain.in/sale",method:"POST",data:e.payload})}))];case 1:return 200!=t.sent().status?[3,3]:[4,n.put(u.setMessage("Succesfully Saved"))];case 2:return t.sent(),[3,5];case 3:return[4,n.put(u.setMessage("Error in Saving"))];case 4:t.sent(),t.label=5;case 5:return[3,8];case 6:return t.sent(),[4,n.put(u.setMessage("Error in Saving"))];case 7:return t.sent(),[3,8];case 8:return[2]}}))}function i(e){var t;return r(this,(function(e){switch(e.label){case 0:return e.trys.push([0,6,,8]),[4,n.call((function(){return s.default.callAPI({url:"https://www.gopaychain.in/sales",method:"GET"})}))];case 1:return 200!=(t=e.sent()).status?[3,3]:[4,n.put(u.addFuelDetails(t.data))];case 2:return e.sent(),[3,5];case 3:return[4,n.put(u.setMessage("Error in Getting sale"))];case 4:e.sent(),e.label=5;case 5:return[3,8];case 6:return e.sent(),[4,n.put(u.setMessage("Error in Getting Sales"))];case 7:return e.sent(),[3,8];case 8:return[2]}}))}function c(e){return r(this,(function(t){switch(t.label){case 0:return t.trys.push([0,7,,9]),[4,n.call((function(){return s.default.callAPI({url:"https://www.gopaychain.in/delete/sale/"+e.id,method:"GET"})}))];case 1:return 200!=t.sent().status?[3,4]:[4,n.put(u.setMessage("Deleted Sale Id "+e.id))];case 2:return t.sent(),[4,n.put(u.removeFuelDetails(e))];case 3:return t.sent(),[3,6];case 4:return[4,n.put(u.setMessage("Error in Deleting sale"))];case 5:t.sent(),t.label=6;case 6:return[3,9];case 7:return t.sent(),[4,n.put(u.setMessage("Error in Deleting Sales"))];case 8:return t.sent(),[3,9];case 9:return[2]}}))}function d(e){return r(this,(function(t){switch(t.label){case 0:return t.trys.push([0,6,,8]),[4,n.call((function(){return s.default.callAPI({url:"https://www.gopaychain.in/update/sale",method:"POST",data:e.payload})}))];case 1:return 200!=t.sent().status?[3,3]:[4,n.put(u.setMessage("Update Sale Id "+e.payload.id))];case 2:return t.sent(),[3,5];case 3:return[4,n.put(u.setMessage("Error in Deleting sale"))];case 4:t.sent(),t.label=5;case 5:return[3,8];case 6:return t.sent(),[4,n.put(u.setMessage("Error in Deleting Sales"))];case 7:return t.sent(),[3,8];case 8:return[2]}}))}t.setSale=o,t.getSales=i,t.deleteSales=c,t.updateSales=d,t.getDeleteSale=function(){var e;return r(this,(function(t){switch(t.label){case 0:return[4,n.take("DELETE_SALE")];case 1:return e=t.sent(),[4,n.fork(c,e)];case 2:return t.sent(),[3,0];case 3:return[2]}}))},t.addFuelDetailsValue=function(){var e;return r(this,(function(t){switch(t.label){case 0:return[4,n.take("FUEL_ORDER")];case 1:return e=t.sent(),[4,n.fork(o,e)];case 2:return t.sent(),[3,0];case 3:return[2]}}))},t.updateFuelDetailsValue=function(){var e;return r(this,(function(t){switch(t.label){case 0:return[4,n.take("FUEL_UPDATE")];case 1:return e=t.sent(),[4,n.fork(d,e)];case 2:return t.sent(),[3,0];case 3:return[2]}}))},t.getAllSales=function(){var e;return r(this,(function(t){switch(t.label){case 0:return[4,n.take("GET_SALES")];case 1:return e=t.sent(),[4,n.fork(i,e)];case 2:return t.sent(),[3,0];case 3:return[2]}}))},t.setMessageValue=function(){var e;return r(this,(function(t){switch(t.label){case 0:return[4,n.take("MESSAGE")];case 1:return e=t.sent(),[4,n.put(u.setMessage(e))];case 2:return t.sent(),[3,0];case 3:return[2]}}))}},8632:function(e,t,a){"use strict";var r=this&&this.__generator||function(e,t){var a,r,l,n,u={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(n){return function(s){return function(n){if(a)throw new TypeError("Generator is already executing.");for(;u;)try{if(a=1,r&&(l=2&n[0]?r.return:n[0]?r.throw||((l=r.return)&&l.call(r),0):r.next)&&!(l=l.call(r,n[1])).done)return l;switch(r=0,l&&(n=[2&n[0],l.value]),n[0]){case 0:case 1:l=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,r=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(!((l=(l=u.trys).length>0&&l[l.length-1])||6!==n[0]&&2!==n[0])){u=0;continue}if(3===n[0]&&(!l||n[1]>l[0]&&n[1]<l[3])){u.label=n[1];break}if(6===n[0]&&u.label<l[1]){u.label=l[1],l=n;break}if(l&&u.label<l[2]){u.label=l[2],u.ops.push(n);break}l[2]&&u.ops.pop(),u.trys.pop();continue}n=t.call(e,u)}catch(e){n=[6,e],r=0}finally{a=l=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.updateOrderDetailsValue=t.addOrderDetailsValue=void 0;var l=a(4857),n=a(1929);t.addOrderDetailsValue=function(){var e;return r(this,(function(t){switch(t.label){case 0:return[4,l.take("ADD_ORDER")];case 1:return e=t.sent(),[4,l.put(n.addOrderDetails(e.payload))];case 2:return t.sent(),[3,0];case 3:return[2]}}))},t.updateOrderDetailsValue=function(){var e;return r(this,(function(t){switch(t.label){case 0:return[4,l.take("UPDATE_ORDER")];case 1:return e=t.sent(),[4,l.put(n.updateOrderDetails(e.payload))];case 2:return t.sent(),[3,0];case 3:return[2]}}))}},7451:function(e,t,a){"use strict";var r=this&&this.__generator||function(e,t){var a,r,l,n,u={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(n){return function(s){return function(n){if(a)throw new TypeError("Generator is already executing.");for(;u;)try{if(a=1,r&&(l=2&n[0]?r.return:n[0]?r.throw||((l=r.return)&&l.call(r),0):r.next)&&!(l=l.call(r,n[1])).done)return l;switch(r=0,l&&(n=[2&n[0],l.value]),n[0]){case 0:case 1:l=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,r=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(!((l=(l=u.trys).length>0&&l[l.length-1])||6!==n[0]&&2!==n[0])){u=0;continue}if(3===n[0]&&(!l||n[1]>l[0]&&n[1]<l[3])){u.label=n[1];break}if(6===n[0]&&u.label<l[1]){u.label=l[1],l=n;break}if(l&&u.label<l[2]){u.label=l[2],u.ops.push(n);break}l[2]&&u.ops.pop(),u.trys.pop();continue}n=t.call(e,u)}catch(e){n=[6,e],r=0}finally{a=l=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,s])}}},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.publish=void 0;var n=a(4857),u=l(a(3624)),s=a(2241),o=a(395),i=a(3751),c=a(8632);t.publish=function(e){var t,a;return r(this,(function(r){switch(r.label){case 0:t=e.payload.id,r.label=1;case 1:return r.trys.push([1,3,,5]),[4,n.call((function(){return u.default.callAPI({url:s.API_URL+"/publish?message="+t+"&user="+localStorage.getItem("name"),method:"GET",data:{}})}))];case 2:return"Success"===(a=r.sent()).data&&200==a.status&&console.log("published sucesfully"),[3,5];case 3:return r.sent(),[4,n.put({type:"TODO_FETCH_FAILED"})];case 4:return r.sent(),[3,5];case 5:return[2]}}))},t.default=function(){return r(this,(function(e){switch(e.label){case 0:return[4,n.all([o.setDetailValue(),o.setAmountValue(),o.setPriceValue(),o.setTotalValue(),c.addOrderDetailsValue(),i.addFuelDetailsValue(),i.setMessageValue(),i.getAllSales(),i.getDeleteSale(),i.updateFuelDetailsValue()])];case 1:return e.sent(),[2]}}))}},2241:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AUTH_API_URL=t.API_URL=void 0,t.API_URL="https://www.gopaychain.in",t.AUTH_API_URL="https://www.gopaychain.in"},6735:(e,t,a)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.setBuyDetail=t.setDetail=t.setTotal=t.setPrice=t.setAmount=void 0;var l=a(31).createSlice({name:"creator",initialState:{price:70,amount:0,total:0,buyPrice:0,buyAmount:0},reducers:{setPrice:function(e,t){e.price=t.payload.price,e.total=parseFloat((t.payload.price*e.amount).toFixed(2))},setAmount:function(e,t){e.amount=t.payload.amount},setTotal:function(e,t){e.total=t.payload.total},setBuyDetail:function(e,t){e.buyAmount=t.payload.buyAmount,e.buyPrice=t.payload.buyPrice},setDetail:function(e,t){e.price=t.payload.price?t.payload.price:e.price,e.total=t.payload.total?t.payload.price:e.total,e.amount=t.payload.amount?t.payload.amount:e.amount}}});t.setAmount=(r=l.actions).setAmount,t.setPrice=r.setPrice,t.setTotal=r.setTotal,t.setDetail=r.setDetail,t.setBuyDetail=r.setBuyDetail,t.default=l.reducer},5720:(e,t,a)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.removeFuelDetails=t.setMessage=t.addFuelDetails=void 0;var l=a(31).createSlice({name:"fuel",initialState:{fuelDetails:[],message:""},reducers:{addFuelDetails:function(e,t){e.fuelDetails=t.payload},setMessage:function(e,t){var a=void 0!==t.payload.message?t.payload.message:t.payload;e.message=a},removeFuelDetails:function(e,t){e.fuelDetails=e.fuelDetails.filter((function(e){return e.id!==t.payload.id}))}}});t.addFuelDetails=(r=l.actions).addFuelDetails,t.setMessage=r.setMessage,t.removeFuelDetails=r.removeFuelDetails,t.default=l.reducer},1929:(e,t,a)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.updateOrderDetails=t.addOrderDetails=void 0;var l=a(31).createSlice({name:"order",initialState:{orderDetails:[]},reducers:{addOrderDetails:function(e,t){e.orderDetails.push(t.payload)},updateOrderDetails:function(e,t){for(var a=0,r=e.orderDetails.length;a<r;a++)if(e.orderDetails[a].orderId===t.payload.orderId){e.orderDetails[a].orderStatus=t.payload.orderStatus,e.orderDetails[a].updateTime=t.payload.updateTime;break}}}});t.addOrderDetails=(r=l.actions).addOrderDetails,t.updateOrderDetails=r.updateOrderDetails,t.default=l.reducer},9537:function(e,t,a){"use strict";var r=this&&this.__read||function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var r,l,n=a.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(r=n.next()).done;)u.push(r.value)}catch(e){l={error:e}}finally{try{r&&!r.done&&(a=n.return)&&a.call(n)}finally{if(l)throw l.error}}return u},l=this&&this.__spreadArray||function(e,t){for(var a=0,r=t.length,l=e.length;a<r;a++,l++)e[l]=t[a];return e},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=a(31),s=n(a(32)),o=n(a(7451)),i=n(a(4500)),c=n(a(9583)),d=s.default(),f=[d,i.default],p=u.configureStore({reducer:c.default({}),middleware:l(l([],r(u.getDefaultMiddleware({thunk:!1}))),r(f))});d.run(o.default),p.asyncReducers={},p.injectReducer=function(e,t){p.asyncReducers[e]=t,p.replaceReducer(c.default(p.asyncReducers))},t.default=p}}]);