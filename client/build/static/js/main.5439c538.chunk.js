(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports={panel:"Ingredient_panel__3AOsF",outOfStock:"Ingredient_outOfStock__3uiwX",selected:"Ingredient_selected__1BQH3",image:"Ingredient_image__1dW71"}},15:function(e,t,n){e.exports={menu_container:"Menu_menu_container__3-PgW",submit:"Menu_submit__2MbnJ",order_num_panel:"Menu_order_num_panel__1tvXF",order_num:"Menu_order_num__3EiRb"}},18:function(e,t,n){e.exports={order_panel:"Order_order_panel__1LPcT",order_items:"Order_order_items__3W1yG",total:"Order_total__31fxZ"}},20:function(e,t,n){e.exports={start:"Start_start__C9Pnz",start_btn:"Start_start_btn__1xCW1"}},21:function(e,t,n){e.exports={name:"Item_name__3a8Gj",image:"Item_image__1li23"}},22:function(e,t,n){e.exports={cancel_btn:"ItemWrapper_cancel_btn__187wi",submit_btn:"ItemWrapper_submit_btn__1jhmw"}},23:function(e,t,n){e.exports={menu_btn:"IngredientWrapper_menu_btn__2krYy"}},36:function(e,t,n){e.exports=n(78)},53:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(34),c=n.n(o),i=n(2),l=n(3),s=n(5),u=n(4),m=n(6),d=n(81),p=n(83),h=n(82),f=n(80),g=n(20),b=n.n(g),v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"".concat(b.a.start," row m-0")},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h1",{className:"display-1"},"Sandwich Store"),r.a.createElement(f.a,{to:"/menu"},r.a.createElement("div",{className:"".concat(b.a.start_btn," shadow-sm mt-3")},"Start")),r.a.createElement(f.a,{to:"/admin"},r.a.createElement("button",null,"New user test"))))}}]),t}(a.Component),E=n(21),y=n.n(E),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"".concat(y.a.name," media m-2 shadow ").concat(this.props.isInStock),onClick:this.props.onClick},r.a.createElement("img",{className:y.a.image,src:this.props.imgSrc,alt:this.props.name+" sandwich"}),r.a.createElement("div",{className:"media-body"},r.a.createElement("h1",null,this.props.name),r.a.createElement("h3",null,"$"+this.props.price))))}}]),t}(a.Component),k=n(22),_=n.n(k),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4 text-center"},"Sandwiches"),r.a.createElement("div",{className:"p-2"},r.a.createElement("div",{className:"row"},this.props.children),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement(f.a,{to:"/"},r.a.createElement("div",{className:"".concat(_.a.cancel_btn," text-center mr-3 p-1")},r.a.createElement("h2",{className:"align-middle"},"Cancel Order")))),r.a.createElement("div",{className:"col-8"},r.a.createElement("div",{className:"".concat(_.a.submit_btn," text-center mr-3 p-1 ").concat(this.props.buttonDisplay),onClick:this.props.onClick},r.a.createElement("h2",{className:"align-middle"},"Submit Order"))))))}}]),t}(a.Component),N=n(14),S=n.n(N),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"".concat(S.a.panel," m-3 shadow text-center ").concat(this.props.isInStock," ").concat(this.props.isselected),onClick:this.props.onClick},r.a.createElement("img",{className:S.a.image,src:this.props.imgSrc,alt:this.props.name}),r.a.createElement("h2",null,this.props.name),r.a.createElement("p",null,r.a.createElement("b",null,"Out of stock"))))}}]),t}(a.Component),w=n(23),C=n.n(w),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"m-3 text-center display-4"},"Choose Your Ingredients"),r.a.createElement("div",{className:"p-2"},r.a.createElement("div",{className:"row"},this.props.children)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3 offset-3"},r.a.createElement("div",{className:"".concat(C.a.menu_btn," shadow-sm"),onClick:this.props.previous},"Back")),r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"".concat(C.a.menu_btn," shadow-sm"),onClick:this.props.next},"Next"))))}}]),t}(a.Component),P=n(18),D=n.n(P),M=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).bottom=function(){var e=n.orderItems.scrollHeight-n.orderItems.clientHeight;n.orderItems.scrollTop=e>0?e:0},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.bottom()}},{key:"componentDidUpdate",value:function(){this.bottom()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:D.a.order_panel},r.a.createElement("div",{className:D.a.order_items,ref:function(t){e.orderItems=t}},this.props.children),r.a.createElement("h2",{className:"".concat(D.a.total," mr-4")},"Total: ","$"+this.props.total))}}]),t}(a.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("li",null,this.props.name)}}]),t}(a.Component),L=(n(53),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Order-Item clearfix"},r.a.createElement("span",{className:"delete-btn mr-2",onClick:this.props.onClick},r.a.createElement("span",{className:"oi oi-x",title:"x","aria-hidden":"true"})),r.a.createElement("div",{className:"order-item-info"},r.a.createElement("span",{className:"name h5"},r.a.createElement("strong",null,this.props.name+" Sandwich")),r.a.createElement("span",{className:"price h5"},r.a.createElement("strong",null,"$"+this.props.price)),r.a.createElement("ul",null,this.props.children)))}}]),t}(a.Component)),R=n(84),A=n(15),F=n.n(A),W=n(12),B=n.n(W),Y=function(e){function t(e){var n,a=this;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={order:[],timeOver:!1,orderPage:0,total:0,orderNumber:0},n.stockTest=function(e){return e.forEach(function(e){e.stock=1}),e},n.ingredientToggle=function(e){var t=n.state.order.length-1,a=n.state.order[t].ingredients.indexOf(e.name);-1===a?e.stock>0&&(e.stock--,n.addIngredient(e)):(e.stock++,n.removeIngredient(a))},n.addOrderItem=function(e,t){if(t){var a={id:e.id,type:e.type,meat:e.meat,ingredients:[],price:e.price},r=n.props.inventory;a.meat.forEach(function(e){var t=r.find(function(t){return t.name===e.name});t.stock-=e.quantity,console.log(t.name,t.stock)});var o=n.state.total;o+=e.price;var c=n.state.order.slice();c.push(a),n.setState({order:c,total:o}),n.nextPage()}},n.deleteSandwich=function(e){var t=n.props.inventory,a=n.state.order[e],r=a.meat,o=a.ingredients;r.forEach(function(e){var n=t.find(function(t){return t.name===e.name});n.stock+=e.quantity,console.log(n.name,n.stock)}),o.forEach(function(e){var n=t.find(function(t){return t.name===e});n.stock++,console.log(n.name,n.stock)});var c=n.state.order;c.splice(e,1),n.setState({order:c}),(e===n.state.order.length-1&&n.state.orderPage<4||0===c.length)&&n.setState({orderPage:0})},n.addIngredient=function(e){var t=n.state.order.slice();t[n.state.order.length-1].ingredients.push(e.name),n.setState({order:t})},n.removeIngredient=function(e){var t=n.state.order.slice();t[n.state.order.length-1].ingredients.splice(e,1),n.setState({order:t})},n.deleteIngredient=function(e,t){var a=n.state.order[t].ingredients.indexOf(e),r=n.state.order.slice();r[t].ingredients.splice(a,1),n.setState({order:r})},n.calculateTotal=function(){var e=0;return n.state.order.forEach(function(t){e+=t.price}),e.toFixed(2)},n.nextPage=function(){if(3!==n.state.orderPage){var e=n.state.orderPage;e++,n.setState({orderPage:e})}else n.setState({orderPage:0})},n.previousPage=function(){var e=n.state.orderPage;if(1===e){var t=n.state.order.length-1;n.deleteSandwich(t)}e--,n.setState({orderPage:e})},n.moreFood=function(){n.setState({orderPage:0})},n.reset=function(){n.setState({order:[],orderPage:0})},n.checkout=function(){var e=n.state.order;B.a.post("/api/order",e).then(function(e){console.log(e),n.setState({orderPage:5,orderNumber:e.data.orderNumber}),n.props.getMenuData(function(){}),setTimeout(function(){n.setState({timeOver:!0})},5e3)}).catch(function(e){console.log(e)})},n.sandwichStock=function(e){var t=!0;return e.forEach(function(e){var a=n.props.inventory.find(function(t){return t.name===e.name});e.quantity>a.stock&&(t=!1)}),t},n.nameToImgSrc=function(e){var t=e;return t="./images/"+(t=t.replace(" ","_"))+"_200x120.png"},n.orderNumber=function(){return Math.floor(100*Math.random())+1},n.pageRender=function(){var e;switch(n.state.orderPage){case 0:return r.a.createElement(j,{buttonDisplay:0===n.state.order.length?"d-none":"",onClick:n.checkout},n.props.menuData.sandwiches.map(function(e){var t=n.sandwichStock(e.meat);return r.a.createElement(O,{key:e.type,name:e.type,price:e.price,isInStock:!0===t?"inStock":S.a.outOfStock,imgSrc:n.nameToImgSrc(e.type),onClick:function(){return n.addOrderItem(e,t)}})}));case 1:return e=n.props.inventory.filter(function(e){return"sauce"===e.type}),r.a.createElement(a.ingredientsRender,{ingredients:e});case 2:return e=n.props.inventory.filter(function(e){return"cheese"===e.type}),r.a.createElement(a.ingredientsRender,{ingredients:e});case 3:return e=n.props.inventory.filter(function(e){return"veggies"===e.type}),r.a.createElement(a.ingredientsRender,{ingredients:e});case 5:return r.a.createElement("div",{className:"".concat(F.a.submit," text-center")},r.a.createElement("h1",{className:"display-3 mb-5"},"Thank You!"),r.a.createElement("div",{className:"".concat(F.a.order_num_panel," shadow p-3")},r.a.createElement("h1",null,"Your order number is:"),r.a.createElement("h1",{className:"".concat(F.a.order_num," display-3")},"#"+n.state.orderNumber)));default:return r.a.createElement("div",null,r.a.createElement("p",null,"Something Went Wrong!"),r.a.createElement("button",{onClick:n.reset},"Return"))}},n.ingredientsRender=function(e){return r.a.createElement(x,{next:n.nextPage,previous:n.previousPage},e.ingredients.map(function(e){var t=n.state.order[n.state.order.length-1].ingredients;return r.a.createElement(I,{key:e.name,name:e.name,imgSrc:n.nameToImgSrc(e.name),isInStock:e.stock>0?"inStock":S.a.outOfStock,isselected:t.indexOf(e.name)>-1?S.a.selected:"",onClick:function(){return n.ingredientToggle(e)}})}))},n.orderID=0,n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return!0===this.state.timeOver?r.a.createElement(R.a,{to:"/"}):r.a.createElement("div",{className:"row justify-content-start"},r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:F.a.menu_container},r.a.createElement(this.pageRender,null))),r.a.createElement(M,{total:this.calculateTotal(),back:this.previousPage},this.state.order.map(function(t,n){var a=t.ingredients;return r.a.createElement(L,{name:t.type,key:t.type+n,price:t.price.toFixed(2),onClick:function(){return e.deleteSandwich(n)}},a.map(function(t){return r.a.createElement(T,{key:t,name:t,onClick:function(){return e.deleteIngredient(t.name,n)}})}))})))}}]),t}(a.Component),q=n(35),z=n(11),H={isAuthenticated:!1,login:function(e){return console.log("Authorize state: true"),this.isAuthenticated=!0,e()},logout:function(e){return this.isAuthenticated=!1,e()}},J=function(e){function t(e){var n,a=this;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={username:"",pin:"",counter:0,allowSubmit:!0},n.cloneInventory=function(e){return e.map(function(e){var t=Object.assign({},e);return t.newStock=e.stock,t})},n.login=function(){console.log("Attempting to authorize"),H.login(function(){n.setState(function(){return{counter:1}})})},n.logOut=function(e){e.preventDefault(),B.a.post("/user/logout").then(function(e){H.logout(function(){n.setState(function(){return{counter:2}})})}).catch(function(e){return console.log(e)})},n.LoginButton=function(){return""===n.state.username||""===n.state.pin?r.a.createElement("button",{type:"button",className:"btn btn-secondary btn-lg",disabled:!0},"Submit"):r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")},n.InventoryButton=function(){return!0===n.state.allowSubmit?r.a.createElement("button",{onClick:n.handleInventorySubmit,className:"btn btn-primary btn-lg btn-block"},"Submit"):r.a.createElement("button",{type:"button",className:"btn btn-secondary btn-lg btn-block",disabled:!0},"Submit")},n.LoginForm=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("form",{onSubmit:n.handleLoginSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"username"),r.a.createElement("input",{type:"text",name:"username",value:n.state.username,className:"form-control",onChange:n.handleInputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"pin"),r.a.createElement("input",{type:"text",name:"pin",value:n.state.pin,className:"form-control",onChange:n.handleInputChange})),r.a.createElement(a.LoginButton,null))))},n.ControlPanel=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row block pt-3 pb-3"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",{className:"float-left"},"Control Panel"),r.a.createElement("button",{onClick:n.logOut,className:"btn btn-primary float-right"},"Log Out"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Inventory"),r.a.createElement("div",{style:{height:"600px",overflowY:"scroll"}},r.a.createElement("table",{className:"table table-sm table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Ingredient"),r.a.createElement("th",{scope:"col"},"Type"),r.a.createElement("th",{scope:"col"},"Current Stock"),r.a.createElement("th",{scope:"col"},"New Stock"))),r.a.createElement("tbody",null,n.props.inventory.map(function(e,t){return r.a.createElement("tr",{key:e.name},r.a.createElement("th",{scope:"row"},e.name),r.a.createElement("td",null,e.type),r.a.createElement("td",null,e.stock),r.a.createElement("td",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement("input",{className:"form-control form-control-sm",name:e.name,value:e.newStock,type:"number",min:"0",max:"999",onChange:n.props.handleInventoryChange,style:{width:"70px"}}))))})))),r.a.createElement(a.InventoryButton,null)))))},n.handleInputChange=n.handleInputChange.bind(Object(z.a)(Object(z.a)(n))),n.handleLoginSubmit=n.handleLoginSubmit.bind(Object(z.a)(Object(z.a)(n))),n.handleInventorySubmit=n.handleInventorySubmit.bind(Object(z.a)(Object(z.a)(n))),n.logOut=n.logOut.bind(Object(z.a)(Object(z.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;B.a.get("/user/").then(function(t){console.log(t.data.user),t.data.user&&e.login()}).catch(function(e){return console.log(e)})}},{key:"handleInputChange",value:function(e){var t=e.target,n=t.value,a=t.name;this.setState(Object(q.a)({},a,n))}},{key:"handleLoginSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.state.username,this.state.pin),B.a.post("/user/login",{username:this.state.username,password:this.state.pin}).then(function(e){console.log(e),t.login(),t.setState({username:"",pin:""})}).catch(function(e){return console.log(e)})}},{key:"handleInventorySubmit",value:function(e){var t=this;e.preventDefault();var n=this.props.inventory;B.a.post("/api/inventory",{inventory:n}).then(function(e){console.log(e.data.message),200===e.status&&t.props.getMenuData(function(){console.log("Data update complete")})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return!1===H.isAuthenticated?r.a.createElement(this.LoginForm,null):r.a.createElement(this.ControlPanel,null)}}]),t}(a.Component),$=(n(76),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={data:null,inventory:[],counter:0},n.getMenuData=function(e){return B.a.get("/api/menu").then(function(e){console.log("Menu Data:",e.data);var t=n.cloneIngredients(e.data.ingredients);n.setState({data:e.data,inventory:t}),console.log("Inventory:",n.state.inventory)}).catch(function(e){return console.log(e)}),e()},n.cloneIngredients=function(e){return e.map(function(e){var t=Object.assign({},e);return t.newStock=e.stock,t})},n.menuRender=function(e){return n.state.data?r.a.createElement(Y,Object.assign({},e,{menuData:n.state.data,inventory:n.state.inventory,getMenuData:function(e){return n.getMenuData(e)}})):r.a.createElement("h1",null,"Loading ....")},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getMenuData(function(){}),B.a.get("/api/test").then(function(e){console.log(e.data,"hello")}).catch(function(e){return console.log(e)})}},{key:"handleInventoryChange",value:function(e){var t=e.target,n=t.value,a=t.name,r=this.state.inventory;r.forEach(function(e){e.name===a&&(e.newStock=n)}),this.setState({inventory:r})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{basename:""},r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:v}),r.a.createElement(h.a,{exact:!0,path:"/admin",render:function(t){return r.a.createElement(J,Object.assign({},t,{inventory:e.state.inventory,getMenuData:function(t){return e.getMenuData(t)},handleInventoryChange:function(t){return e.handleInventoryChange(t)}}))}}),r.a.createElement(h.a,{exact:!0,path:"/menu",render:function(t){return e.menuRender(t)}})))}}]),t}(a.Component));c.a.render(r.a.createElement($,null),document.getElementById("root"))}},[[36,2,1]]]);
//# sourceMappingURL=main.5439c538.chunk.js.map