(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48f4ecb2"],{2017:function(e,t,o){"use strict";var s=o("b12d"),r=o.n(s);r.a},"336c":function(e,t,o){e.exports=o.p+"admin/img/back.f805a5d2.png"},6947:function(e,t,o){},"9ed6":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login-container"},[o("div",{staticClass:"login-content"},[e._m(0),e._v(" "),o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[e._v("登录")])]),e._v(" "),o("el-form-item",{attrs:{prop:"username"}},[o("el-input",{ref:"username",attrs:{placeholder:"用户名",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),o("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"密码",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:[function(t){return e.checkCapslock(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}]},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1)],1),e._v(" "),o("el-button",{staticStyle:{width:"100%","margin-bottom":"60px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")]),e._v(" "),o("div",{staticStyle:{position:"relative"}},[o("div",{staticClass:"tips"},[o("span",[e._v("深圳市牛小顿科技有限公司")])])])],1)],1)])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"logo-card"},[s("img",{staticClass:"logo-card-back",attrs:{src:o("336c")}}),e._v(" "),s("img",{staticClass:"logo-card-img",attrs:{src:o("cf05")}})])}],n=(o("ac6a"),o("456d"),o("61f7")),a={name:"Login",data:function(){var e=function(e,t,o){Object(n["d"])(t)?o():o(new Error("Please enter the correct user name"))},t=function(e,t,o){t.length<4?o(new Error("The password can not be less than 6 digits")):o()};return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},methods:{checkCapslock:function(e){var t=e.key;this.capsTooltip=t&&1===t.length&&t>="A"&&t<="Z"},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/",query:e.otherQuery}),e.loading=!1})).catch((function(){e.loading=!1}))}))},getOtherQuery:function(e){return Object.keys(e).reduce((function(t,o){return"redirect"!==o&&(t[o]=e[o]),t}),{})}}},i=a,c=(o("2017"),o("dfef"),o("2877")),l=Object(c["a"])(i,s,r,!1,null,"2aaa9604",null);t["default"]=l.exports},b12d:function(e,t,o){},dfef:function(e,t,o){"use strict";var s=o("6947"),r=o.n(s);r.a}}]);