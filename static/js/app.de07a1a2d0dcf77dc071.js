webpackJsonp([7,6],[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var o=n(65),s=i(o),r=n(64),a=i(r),u=n(41),c=i(u);n(40);var l=n(3),d=n(17),f=i(d),h=n(18),p=i(h),m=n(42),v=i(m),_=n(19),b=i(_);s["default"].use(a["default"]),s["default"].use(c["default"]),(0,f["default"])(c["default"].Validator),s["default"].use(p["default"]);var g=new a["default"]({mode:"history",routes:b["default"]});g.beforeEach(function(e,t,n){(0,l.isAllowed)(e.meta.role)?n():n("restrict")}),new s["default"]({el:"#app",router:g,render:function(e){return e(v["default"])}}).$mount("#app")},,,function(e,t){"use strict";function n(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}return decodeURIComponent(escape("undefined"==typeof window?atob(t):window.atob(t)))}function i(e){var t=e.split(".");if(3!==t.length)throw new Error("JWT must have 3 parts");var i=n(t[1]);if(!i)throw new Error("Cannot decode the token");return JSON.parse(i)}function o(e){var t;if(t=i(e),"undefined"==typeof t.exp)return null;var n=new Date(0);return n.setUTCSeconds(t.exp),n}function s(){if(window.localStorage.id_token){var e=o(window.localStorage.id_token),t=0;return null!==e&&!(e.valueOf()>(new Date).valueOf()+1e3*t)}return!0}function r(e){window.localStorage.id_token=e}function a(){return window.localStorage.id_token?i(window.localStorage.id_token):{user:{role:d["public"]}}}function u(){window.localStorage.clear()}function c(){return null!==a()}function l(e){return a().user.role===e||e===d["public"]}Object.defineProperty(t,"__esModule",{value:!0}),t.isTokenExpired=s,t.login=r,t.getUser=a,t.logout=u,t.isAuth=c,t.isAllowed=l;var d=t.Roles={"public":"Public",admin:"Admin",customer:"Customer",courier:"Courier"}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{menuItems:[],isMenu:!1,isLoggedIn:!1,user:{}}},created:function(){var e=this;this.$isTokenExpired()?(this.user={},this.isLoggedIn=!1,this.setMenu()):(this.user=this.$getUser().user,this.isLoggedIn=!0,this.setMenu(this.user.role)),this.$root.$on("onLogin",function(t){switch(e.user=e.$getUser().user,e.isLoggedIn=!0,e.setMenu(e.user.role),e.user.role){case e.Roles.admin:e.$router.push("admin.areas");break;case e.Roles.customer:e.$router.push({name:"customer.products"});break;case e.Roles.courier:e.$router.push("courier.areas")}})},destroyed:function(){this.$root.$off("onLogin")},methods:{onMenu:function(){this.isMenu?(this.$refs.sidebar.hide(),this.isMenu=!1):(this.$refs.sidebar.show(),this.isMenu=!0)},setMenu:function(e){switch(e){case this.Roles.admin:this.menuItems=[{name:"customers",link:"/admin/customers",label:"Customers",icon:"shopping-cart"},{name:"products",link:"/admin/products",label:"Products",icon:"shopping-cart"},{name:"billing",link:"/admin/billing",label:"Billing",icon:"shopping-cart"},{name:"invoices",link:"/admin/invoices",label:"Invoices",icon:"shopping-cart"}];break;case this.Roles.customer:this.menuItems=[{name:"subscriptions",link:"/customer/subscriptions",label:"Subscriptions",icon:"unhide"},{name:"products",link:"/customer/products",label:"Products",icon:"barcode"},{name:"requestions",link:"/customer/requisitions",label:"Requestions",icon:"payment"},{name:"invoices",link:"/customer/invoices",label:"Invoices",icon:"shop"},{name:"settings",link:"/customer/settings",label:"Settings",icon:"setting"}];break;case this.Roles.courier:this.menuItems=[{name:"arealist",link:"/courier/areas",label:"Area List",icon:"shopping-cart"},{name:"customerlist",link:"/courier/customers/all",label:"Customer List",icon:"shopping-cart"}];break;default:this.menuItems=[{name:"",link:"/",label:"Home",icon:"home"},{name:"signup",link:"/signup",label:"Create free account",icon:"verified-user"},{name:"Sigin",link:"/login",label:"Login",icon:"exit-to-app"}]}},onSignout:function(){this.$logout(),this.user={},this.isLoggedIn=!1,this.setMenu(),this.$router.push("/login")}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"message",data:function(){return{hide:!0,type:"info",icon:"",text:"",info:!0,warning:!1,success:!1,error:!1}},methods:{show:function(){var e=this;this.hide=!1,setTimeout(function(){e.hide=!0},3e3)},hide:function(){this.hide=!0},setType:function(e){switch(this.info=!1,this.warning=!1,this.success=!1,this.error=!1,e){case"info":this.info=!0,this.icon="info circle";break;case"warning":this.warning=!0,this.icon="warning sign";break;case"success":this.success=!0,this.icon="hand peace";break;case"error":this.error=!0,this.icon="help circle"}},setText:function(e){this.text=e}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{size:{type:String,"default":"small"},type:{type:String,"default":""},closeable:{type:Boolean,"default":!0}},data:function(){return{id:"modal_"+Math.random(),showBackDrop:!1,showModal:!1}},mounted:function(){document.body.classList.add("dimmable")},methods:{clickContent:function(e){e.stopPropagation()},open:function(){var e=this;this.showBackDrop=!0,document.body.classList.add("dimmed"),setTimeout(function(){e.showModal=!0,setTimeout(function(){e.$el.firstChild.style.top=(document.body.offsetHeight-e.$el.firstChild.offsetHeight)/2+"px"})})},close:function(){var e=this;this.showModal=!1,setTimeout(function(){e.showBackDrop=!1,document.body.classList.remove("dimmed")},30)},closeModal:function(){this.closeable&&this.close()}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"sidebar",created:function(){var e=this;document.addEventListener("click",function(){e.onDocClick()})},destroyed:function(){var e=this;document.removeEventListener("click",function(){e.onDocClick()})},data:function(){return{isMenu:!1}},methods:{onDocClick:function(){this.isMenu&&this.hide()},show:function(){this.isMenu=!0},hide:function(){this.isMenu=!1}}}},,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{}},methods:{}}},,,,,,function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(!e.ok)throw Error(e.statusText);return e}function s(e){return e.json()}function r(e,t){var n=new Headers;return n.append("Content-Type","application/json"),n.append("Accept","application/json"),t&&!(0,c.isTokenExpired)()&&n.append("Authorization","Bearer "+(0,c.getToken)()),fetch(d["default"].apiEndpoint,{method:"POST",headers:n,body:(0,u["default"])(e)}).then(o).then(s)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(20),u=i(a);t["default"]=r;var c=n(3),l=n(16),d=i(l)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={apiEndpoint:"http://localhost:5000/actions",imagesUrl:"http://localhost:8080/images/"};t["default"]=n},function(e,t){"use strict";function n(e){e.extend("password",{getMessage:function(e){return e+" must have 6 to 15 characters and contain 1 uppercase letter and 1 digit."},validate:function(e){return/^(?=.*[A-Z])(?=.*[0-9])(?=.{6,15}$)/.test(e)}}),e.extend("loginname",{getMessage:function(e){return e+" must have 6 to 20 characters.Can contain A-Z, a-z and 0-9."},validate:function(e){return/^[a-zA-Z0-9]{6,20}$/.test(e)}}),e.extend("terms",{getMessage:function(e){return"You must agree with terms and conditions."},validate:function(e){return e}})}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(43),s=i(o),r=n(44),a=i(r),u=n(45),c=i(u),l=n(3),d=n(15),f=i(d),h={};h.install=function(e,t){e.myGlobalMethod=function(){console.log("Global")},e.directive("my-directive",{bind:function(e,t,n,i){}}),e.component("message",s["default"]),e.component("modal",a["default"]),e.component("sidebar",c["default"]),e.mixin({data:function(){return{Roles:l.Roles}},created:function(){}}),e.prototype.$server={},e.prototype.$server.rpc=f["default"],e.prototype.$getUser=l.getUser,e.prototype.$login=l.login,e.prototype.$logout=l.logout,e.prototype.$isAuth=l.isAuth,e.prototype.$isAllowed=l.isAllowed,e.prototype.$isTokenExpired=l.isTokenExpired},t["default"]=h},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(47),s=i(o),r=n(3);t["default"]=[{path:"/",name:"home",component:s["default"],meta:{role:r.Roles["public"]}},{path:"/login",name:"login",component:function(e){return n.e(4,function(t){var n=[t(48)];e.apply(null,n)}.bind(this))},meta:{role:r.Roles["public"]}},{path:"/signup",name:"signup",component:function(e){return n.e(3,function(t){var n=[t(49)];e.apply(null,n)}.bind(this))},meta:{role:r.Roles["public"]}},{path:"/thankyou",name:"thankyou",component:function(e){return n.e(2,function(t){var n=[t(50)];e.apply(null,n)}.bind(this))},meta:{role:r.Roles["public"]}},{path:"/restrict",name:"restrict",component:function(e){return n.e(0,function(t){var n=[t(52)];e.apply(null,n)}.bind(this))},meta:{role:r.Roles["public"]}},{path:"/customer/products",name:"customer.products",component:function(e){return n.e(5,function(t){var n=[t(46)];e.apply(null,n)}.bind(this))},meta:{role:r.Roles.customer}},{path:"*",name:"notfount",component:function(e){return n.e(1,function(t){var n=[t(51)];e.apply(null,n)}.bind(this))},meta:{role:r.Roles["public"]}}]},,,,,,,,,,function(e,t){},,,function(e,t){},function(e,t){},,function(e,t){},,function(e,t){},,,function(e,t){},,function(e,t,n){var i,o;n(29),i=n(4);var s=n(53);o=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(o=i=i["default"]),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,e.exports=i},function(e,t,n){var i,o;n(32),i=n(5);var s=n(56);o=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(o=i=i["default"]),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-2",e.exports=i},function(e,t,n){var i,o;n(33),i=n(6);var s=n(57);o=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(o=i=i["default"]),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,e.exports=i},function(e,t,n){var i,o;n(35),i=n(7);var s=n(59);o=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(o=i=i["default"]),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-5",e.exports=i},,function(e,t,n){var i,o;n(37),i=n(9);var s=n(61);o=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(o=i=i["default"]),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-7",e.exports=i},,,,,,function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"ui container",attrs:{id:"app"}},[_h("section",{staticClass:"ui equal width padded grid",attrs:{id:"header"}},[_h("div",{staticClass:"row toolbar"},[_h("div",{staticClass:"column"},[_h("a",{on:{click:function(e){$router.push("/")}}},[_m(0)])," ",_h("button",{staticClass:"ui circular basic icon button menubtn",on:{click:function(e){e.stopPropagation(),onMenu(e)}}},[_m(1)," ",_m(2)])])," ",_h("div",{staticClass:"right aligned column"},[isLoggedIn?_h("div",[_h("button",{staticClass:"ui blue button",on:{click:onSignout}},["Sign Out"])]):_h("div",[_h("span",["Already a customer? "])," ",_h("button",{staticClass:"ui blue button",on:{click:function(e){$router.push("/login")}}},["Login"])])," "])])])," ",_h("section",{staticClass:"ui grid",attrs:{id:"contents"}},[_h("div",{staticClass:"sixteen wide column"},[_h("sidebar",{ref:"sidebar"},[_h("div",{staticClass:"ui inverted vertical menu"},[_l(menuItems,function(e){return _h("a",{staticClass:"item",attrs:{name:e.name},on:{click:function(t){$router.push(e.link)}}},[_h("i",{staticClass:"icon","class":[e.icon]})," "+_s(e.label)+"\n          "])})])])," ",_h("transition",{attrs:{name:"fade",mode:"out-in"}},[_h("router-view")])])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"logo"},["Restock",_h("i",{staticClass:"registered icon"})])},function(){with(this)return _h("i",{staticClass:"content icon"})},function(){with(this)return _h("span",["Menu"])}]}},,,function(module,exports){module.exports={render:function(){with(this)return _h("transition",{attrs:{name:"fade"}},[_h("div",{directives:[{name:"show",value:!hide,expression:"!hide"}],staticClass:"ui small message","class":{info:info,warning:warning,success:success,error:error},attrs:{style:"width: 100%; position: fixed; text-align:center; border-radius:0;"}},[_h("i",{staticClass:"icon big","class":[icon]}),_h("span",[_s(text)])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("transition",{attrs:{name:"fade"}},[showBackDrop?_h("div",{staticClass:"ui dimmer modals page",style:{visibility:showBackDrop?"visible":"hidden",opacity:showBackDrop?"1":"0"},attrs:{style:"display: block !important"},on:{click:function(e){closeModal()}}},[_h("transition",{attrs:{name:"scale"}},[_h("div",{directives:[{name:"show",value:showModal,expression:"showModal"}],staticClass:"ui modal active visibility","class":[size,type],attrs:{id:id},on:{click:function(e){clickContent(e)}}},[_t("default")])])]):_e()])},staticRenderFns:[]}},,function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"sidebar","class":{togglebar:!isMenu}},[_t("default")])},staticRenderFns:[]}},,function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"ui padded grid"},[_h("section",{staticClass:"row intro"},[_h("div",{staticClass:"column"},[_m(0)," ",_m(1)," ",_h("button",{staticClass:"ui inverted large circular button",on:{click:function(e){$router.push("signup")}}},["Create Free Account"])])])," ",_m(2)," ",_m(3)," ",_m(4)])},staticRenderFns:[function(){with(this)return _h("h1",["Inventory Management on Autopilot"])},function(){with(this)return _h("p",["Restock is a dedicated subscription based office supplies service from Officeware."])},function(){with(this)return _h("section",{staticClass:"row common features"},[_h("div",{staticClass:"column"},[_h("h2",{staticClass:"centertext"},["Features"])," ",_h("div",{staticClass:"divider"})," ",_h("ul",[_h("li",{},["Subscribe products, suspend or cancel subscriptions."])," ",_h("li",{},["Requisitions and invoice management."])," ",_h("li",{},["Order placement on minimum stock level."])," ",_h("li",{},["Free shipping on all orders."])," ",_h("li",{},["Retail & Wholesale pricing."])," ",_h("li",{},["Special Discount on payment within due date."])])])])},function(){with(this)return _h("section",{staticClass:"row working common"},[_h("div",{staticClass:"column"},[_h("h2",{staticClass:"centertext"},["How It Works"])," ",_h("div",{staticClass:"divider"})," ",_h("ul",{staticClass:"horizontal layout wrap"},[_h("li",["Create your free account."])," ",_h("li",["Subscribe products you reqularly use."])," ",_h("li",["Define Min & restock level for your subscriptions."])," ",_h("li",["Manage staff requisitions."])," ",_h("li",["Order will be placed based on minimum level."])," ",_h("li",["Pay invoices within due date to avail discounts."])])])])},function(){with(this)return _h("section",{staticClass:"row footer"},[_h("div",{staticClass:"column"},[_h("p",["An Officeware Company - All rights reserved"])])])}]}}]);
//# sourceMappingURL=app.de07a1a2d0dcf77dc071.js.map