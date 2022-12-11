"use strict";(self.webpackChunkzhen_fe2=self.webpackChunkzhen_fe2||[]).push([[76],{2076:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var n=r(8216),a=r(7294),l=r(4806),o=r(6550),i=(r(7814),r(9478));function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,o,i=[],s=!0,c=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=l.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const u=(0,l.ZP)((function(e){e.profile;var t=e.updateProfile,r=e.intl,n=s((0,a.useState)(!0),2),l=n[0],o=n[1],c=s((0,a.useState)(""),2),u=c[0],m=c[1],d=s((0,a.useState)(""),2),f=d[0],p=d[1],v=s((0,a.useState)(""),2),g=v[0],b=v[1],h=s((0,a.useState)(""),2),y=h[0],_=h[1],x=((0,i.v0)(),function(e,t){return r.formatMessage({id:e,defaultMessage:t})}),E={member_login:x("vip.member_login","會員登入"),member_register:x("vip.member_register","會員註冊"),forgot_your_password:x("vip.forgot_your_password","忘記密碼了嗎"),reset_password:x("vip.reset_password","重設密碼"),email_address:x("vip.email_address","電子郵件"),password:x("vip.password","密碼"),sign_in:x("vip.sign_in","登入"),not_have_member:x("vip.not_have_member","尚未擁有會員嗎"),is_there_already_account:x("vip.is_there_already_account","已經有帳號了"),register:x("vip.register","註冊"),email_already_in_use:x("vip.email_already_in_use","電子信箱已被使用"),user_not_found:x("vip.user_not_found","帳號不存在")};return(0,a.useEffect)((function(){m(""),p("")}),[l]),a.createElement(a.Fragment,null,a.createElement("div",{className:"min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"},a.createElement("div",{className:"sm:mx-auto sm:w-full sm:max-w-md"},a.createElement("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900"},l?E.member_login:E.register)),a.createElement("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},a.createElement("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},a.createElement("form",{className:"space-y-6",onSubmit:function(e){e.stopPropagation(),e.preventDefault(),l?function(){var e=(0,i.v0)();(0,i.e5)(e,u,f).then((function(e){var r=e.user;t(r)})).catch((function(e){console.error(e);var t=e.code;e.message,_(t)}))}():function(){var e=(0,i.v0)();(0,i.Xb)(e,u,f).then((function(e){var t=e.user,r={url:"".concat(window.location.origin,"?").concat(t.email)};console.log("user",t),(0,i.w$)(t,r).then((function(e){return console.log("res",e)})).catch((function(e){return console.log("error",e)}))})).catch((function(e){var t=e.code;e.message,b(t)}))}()}},a.createElement("div",null,a.createElement("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700"},E.email_address),a.createElement("div",{className:"mt-1"},a.createElement("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,pattern:"^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:E.email_address,value:u,onChange:function(e){return m(e.target.value)}}),a.createElement("div",{className:"ml-1 text-red-400"},a.createElement("span",null),"auth/email-already-in-use"===g?E.email_already_in_use:g,a.createElement("span",null,"auth/user-not-found"===y?E.user_not_found:y)))),a.createElement("div",null,a.createElement("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700"},E.password),a.createElement("div",{className:"mt-1"},a.createElement("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:E.password,value:f,onChange:function(e){return p(e.target.value)}}))),a.createElement("div",null,a.createElement("button",{className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},l?E.sign_in:E.register)),a.createElement("div",{className:"flex items-center flex-col"},l?a.createElement("div",{className:"text-sm mb-2"},a.createElement("span",null,E.forgot_your_password),a.createElement("span",{className:"mr-2"},"?"),a.createElement("a",{href:"#",className:"font-medium text-indigo-600 hover:text-indigo-500"},E.reset_password)):null,a.createElement("div",{className:"text-sm"},a.createElement("span",null,l?E.not_have_member:E.is_there_already_account),a.createElement("span",{className:"mr-2"},"?"),a.createElement("span",{className:"font-medium text-indigo-600 cursor-pointer hover:text-indigo-500",onClick:function(e){return o(!l)}},l?E.register:E.sign_in))))))))}));var m=r(7125);const d=(0,n.$j)((function(e){return{profile:e.profile}}),(function(e){return{updateProfile:function(t){return e((0,m.L)(t))}}}))(u);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,o,i=[],s=!0,c=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=l.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const v=(0,l.ZP)((function(e){var t=e.updateProfile,r=e.push,n=e.intl,l=window.location.pathname,o=l.slice(l.lastIndexOf("/")),s=f((0,a.useState)(o),2),c=s[0],u=s[1],m=function(e,t){return n.formatMessage({id:e,defaultMessage:t})},d={order:m("vip.order","訂單"),address:m("vip.address","地址"),account_detail:m("vip.account_detail","帳戶詳細資料"),log_out:m("vip.log_out","登出")};return a.createElement("ul",{role:"list",className:"left mr-0 w-60 divide-y divide-gray-200 border-t border-b select-none sm:mr-8"},a.createElement("li",{className:"text-lg px-6 py-2 lg:py-6 ".concat("/orders"===c?"text-black":"cursor-pointer text-blue-500 hover:text-blue-700"),onClick:function(e){u("/orders"),r("/vip/orders")}},d.order),a.createElement("li",{className:"text-lg px-6 py-2 lg:py-6 ".concat("/edit-address"===c?"text-black":"cursor-pointer text-blue-500 hover:text-blue-700"),onClick:function(e){u("/edit-address"),r("/vip/edit-address")}},d.address),a.createElement("li",{className:"text-lg px-6 py-2 lg:py-6 ".concat("/edit-account"===c?"text-black":"cursor-pointer text-blue-500 hover:text-blue-700"),onClick:function(e){u("/edit-account"),r("/vip/edit-account")}},d.account_detail),a.createElement("li",{className:"text-lg px-6 py-2 lg:py-6 cursor-pointer text-blue-500 hover:text-blue-700",onClick:function(){var e=(0,i.v0)();(0,i.w7)(e).then((function(){t({})})).catch((function(e){console.error(e)}))}},d.log_out))}));var g=r(5982);const b=(0,n.$j)((function(e){return{profile:e.profile}}),(function(e){return{updateProfile:function(t){return e((0,m.L)(t))},push:function(t,r){return e((0,g.VF)(t,r))}}}))(v);var h=r(6142),y=a.lazy((function(){return Promise.all([r.e(54),r.e(810)]).then(r.bind(r,8810))})),_=a.lazy((function(){return Promise.all([r.e(54),r.e(70)]).then(r.bind(r,3070))})),x=a.lazy((function(){return r.e(362).then(r.bind(r,8362))})),E=a.lazy((function(){return r.e(372).then(r.bind(r,8372))}));const w=(0,l.ZP)((function(e){var t,r,n=e.profile,l=(e.updateProfile,e.push,e.intl),i={member_area:(t="vip.member_area",r="會員專區",l.formatMessage({id:t,defaultMessage:r}))};return a.createElement("div",{className:"p-12 container"},n.email?a.createElement("div",null,a.createElement("div",{className:"text-3xl font-bold w-full px-6 pb-4 lg:pb-8"},i.member_area),a.createElement("div",{className:"flex"},a.createElement(b,null),a.createElement(a.Suspense,{fallback:a.createElement(h.Z,null)},a.createElement(o.rs,null,a.createElement(o.AW,{path:"/vip/edit-account",render:function(e){return a.createElement(y,e)}}),a.createElement(o.AW,{path:"/vip/edit-address",render:function(e){return a.createElement(_,e)}}),a.createElement(o.AW,{path:"/vip/orders",render:function(e){return a.createElement(x,e)}}),a.createElement(o.AW,{path:"/vip",render:function(e){return a.createElement(E,e)}}))))):a.createElement(d,null))}));const N=(0,n.$j)((function(e){return{profile:e.profile}}),(function(e){return{updateProfile:function(t){return e((0,m.L)(t))},push:function(t,r){return e((0,g.VF)(t,r))}}}))(w)}}]);