/*! For license information please see 70.b644801fbc5a0836a5a8.js.LICENSE.txt */
"use strict";(self.webpackChunkzhen_fe2=self.webpackChunkzhen_fe2||[]).push([[70],{3070:(t,e,r)=>{r.r(e),r.d(e,{default:()=>g});var n=r(8216),o=r(7294),a=r(2106),i=r(4806),c=r(4051),s=r(9889);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function u(){u=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new S(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var m={};function p(){}function h(){}function y(){}var v={};s(v,a,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(j([])));b&&b!==e&&r.call(b,a)&&(v=b);var w=y.prototype=p.prototype=Object.create(v);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,a,i,c){var s=d(t[n],t,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==l(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return o("throw",t,i,c)}))}c(s.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=N(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=d(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function N(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,N(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:h,configurable:!0}),h.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(x.prototype),s(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(w),s(w,c,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},t}function f(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){f(a,n,o,i,c,"next",t)}function c(t){f(a,n,o,i,c,"throw",t)}i(void 0)}))}}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],s=!0,l=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);s=!0);}catch(t){l=!0,o=t}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const h=(0,i.ZP)((function(t){var e=t.profile,r=t.db,n=t.intl,i=m((0,o.useState)(""),2),l=i[0],f=i[1],p=m((0,o.useState)(""),2),h=p[0],y=p[1],v=m((0,o.useState)(""),2),g=v[0],b=v[1],w=m((0,o.useState)(""),2),_=w[0],x=w[1],E=m((0,o.useState)(""),2),N=E[0],L=E[1],k=m((0,o.useState)(!1),2),S=k[0],j=k[1],O=m((0,o.useState)(!1),2),C=O[0],P=O[1],F=function(){var t=d(u().mark((function t(){var n,o,a,i,s,l,d,m;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(0,c.JU)(r,"".concat(e.email),"address"),t.next=3,(0,c.QT)(n);case 3:(o=t.sent).exists()?(a=o.data(),i=a.country,s=a.street,l=a.city,d=a.region,m=a.postalCode,f(i||""),y(s||""),b(l||""),x(d||""),L(m||"")):console.log("No such document!");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),I=function(){var t=d(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.pl)((0,c.JU)(r,"".concat(e.email),"address"),{country:l,street:h,city:g,region:_,postalCode:N});case 3:return t.next=5,j(!0);case 5:t.next=12;break;case 7:t.prev=7,t.t0=t.catch(0),j(!0),P(!0),console.error("Error address adding document: ",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),A=function(t,e){return n.formatMessage({id:t,defaultMessage:e})},G={address_below_will_be_used_auto_but_you_can_change:A("vip.address_below_will_be_used_auto_but_you_can_change","下列的地址將會在您結帳時自動使用，但您還是可以在結帳時修改成其它地址"),billing_address:A("vip.billing_address","帳單地址"),first_name:A("vip.first_name","名子"),last_name:A("vip.last_name","姓氏"),email:A("vip.email","電子郵件"),country:A("vip.country","國家"),street_address:A("vip.street_address","街道地址"),city:A("vip.city","城市"),state_province:A("vip.state_province","州/省"),ZIP_postal_code:A("vip.ZIP_postal_code","郵遞區號"),cancel:A("global.cancel","取消"),save:A("global.save","儲存")};return(0,o.useEffect)((function(){F()}),[]),o.createElement("div",{className:"w-8/12"},o.createElement("div",{className:"py-4 text-xl"},G.billing_address),o.createElement("div",{className:"mb-4"},G.address_below_will_be_used_auto_but_you_can_change),o.createElement("form",{className:"space-y-6",onSubmit:function(t){t.stopPropagation(),t.preventDefault(),I()}},o.createElement("div",{className:"mt-5 md:col-span-2 md:mt-0"},o.createElement("div",{className:"grid grid-cols-6 gap-6"},o.createElement("div",{className:"col-span-6 sm:col-span-3"},o.createElement("label",{htmlFor:"country",className:"block text-sm font-medium text-gray-700"},G.country),o.createElement("input",{type:"text",name:"country",id:"country",autoComplete:"country",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",placeholder:G.country,value:l,onChange:function(t){f(t.target.value)}})),o.createElement("div",{className:"col-span-6"},o.createElement("label",{htmlFor:"street-address",className:"block text-sm font-medium text-gray-700"},G.street_address),o.createElement("input",{type:"text",name:"street-address",id:"street-address",autoComplete:"street-address",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",placeholder:G.street_address,value:h,onChange:function(t){y(t.target.value)}})),o.createElement("div",{className:"col-span-6 sm:col-span-6 lg:col-span-2"},o.createElement("label",{htmlFor:"city",className:"block text-sm font-medium text-gray-700"},G.city),o.createElement("input",{type:"text",name:"city",id:"city",autoComplete:"address-level2",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",placeholder:G.city,value:g,onChange:function(t){b(t.target.value)}})),o.createElement("div",{className:"col-span-6 sm:col-span-3 lg:col-span-2"},o.createElement("label",{htmlFor:"region",className:"block text-sm font-medium text-gray-700"},G.state_province),o.createElement("input",{type:"text",name:"region",id:"region",autoComplete:"address-level1",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",placeholder:G.state_province,value:_,onChange:function(t){x(t.target.value)}})),o.createElement("div",{className:"col-span-6 sm:col-span-3 lg:col-span-2"},o.createElement("label",{htmlFor:"postal-code",className:"block text-sm font-medium text-gray-700"},G.ZIP_postal_code),o.createElement("input",{type:"text",name:"postal-code",id:"postal-code",autoComplete:"postal-code",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",placeholder:G.ZIP_postal_code,value:N,onChange:function(t){L(t.target.value)}})))),o.createElement("div",{className:"flex justify-end"},o.createElement("button",{type:"submit",className:"ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:I},G.save))),o.createElement(s.Z,{show:S,onHide:function(){j(!1),P(!1)}},C?o.createElement(a.Z,{id:"global.result.update_fail",defaultMessage:"修改失敗"}):o.createElement(a.Z,{id:"global.result.update_success",defaultMessage:"修改成功"})))}));var y=r(7125),v=r(5982);const g=(0,n.$j)((function(t){return{profile:t.profile,db:t.firebase.db}}),(function(t){return{updateProfile:function(e){return t((0,y.L)(e))},push:function(e,r){return t((0,v.VF)(e,r))}}}))(h)}}]);