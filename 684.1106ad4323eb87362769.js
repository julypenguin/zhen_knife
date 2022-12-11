"use strict";(self.webpackChunkzhen_fe2=self.webpackChunkzhen_fe2||[]).push([[684],{1684:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var r=a(8216),n=a(7294),l=a(6445),s=a(2106);const c=JSON.parse('{"T":"購物車","t":"shopping_cart"}');var i=a(531),o=a(8293),m=a(9218),u=a(4406),d=a(9889);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){y(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t,a){return(t=function(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===f(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,l,s,c=[],i=!0,o=!1;try{if(l=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;i=!1}else for(;!(i=(r=l.call(a)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){o=!0,n=e}finally{try{if(!i&&null!=a.return&&(s=a.return(),Object(s)!==s))return}finally{if(o)throw n}}return c}}(e,t)||x(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){if(e){if("string"==typeof e)return E(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?E(e,t):void 0}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}const v=function(e){var t=e.cart,a=e.updateCart,r=e.push,f=h((0,n.useState)({}),2),p=f[0],y=f[1],x=h((0,n.useState)(!1),2),E=x[0],v=x[1],N=h((0,n.useState)(!0),2),w=N[0],j=(N[1],t.filter((function(e,t){return 0===t})).reduce((function(e,t){return[].concat(b(e),b(t.detail.relation))}),[])),_=function(e){return function(r){if(t[e])if(!r||r<=0){var n=t.filter((function(t,a){return a!==e}));localStorage.setItem("cart",JSON.stringify(n)),a(n)}else{var l=t.map((function(t,a){return a!==e?t:g(g({},t),{},{buyCount:r})}));localStorage.setItem("cart",JSON.stringify(l)),a(l)}}},S=function(e){var a=t.reduce((function(e,t){var a=Number(t.price);return isNaN(a)?e:e+a*t.buyCount}),0),r=a+0;switch(e){case 1:return n.createElement("span",null,n.createElement("span",{className:"mr-1"},"NT$"),(0,u.x)(a));case 2:return n.createElement(s.Z,{id:"shoppingCart.free_transportation",defaultMessage:"免運"});case 3:return n.createElement("span",null,n.createElement("span",{className:"mr-1"},"NT$"),(0,u.x)(r));default:return 0}},C=function(){v(!1)},O=function(){v(!0)};return n.createElement("div",{className:"bg-white"},n.createElement("main",{className:"max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8"},n.createElement("h1",{className:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},n.createElement(s.Z,{id:"shoppingCart.".concat(c.t),defaultMessage:c.T})),t.length?n.createElement("form",{className:"mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16"},n.createElement("section",{"aria-labelledby":"cart-heading",className:"lg:col-span-7"},n.createElement("h2",{id:"cart-heading",className:"sr-only"},"Items in your shopping cart"),n.createElement("ul",{role:"list",className:"border-t border-b border-gray-200 divide-y divide-gray-200"},t.map((function(e,t){return n.createElement("li",{key:e.cat_sid,className:"flex py-6 sm:py-10"},n.createElement("div",{className:"flex-shrink-0"},n.createElement(o.Z,{img:e.intl_id,alt:e.name,className:"w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"})),n.createElement("div",{className:"ml-4 flex-1 flex flex-col justify-between sm:ml-6"},n.createElement("div",{className:"relative pr-9 sm:grid sm:grid-cols-5 sm:gap-x-6 sm:pr-0"},n.createElement("div",{className:"col-span-4"},n.createElement("div",{className:"flex justify-between"},n.createElement("h3",{className:"text-sm"},n.createElement("a",{href:"/shop/detail/".concat(e.intl_id),className:"font-medium text-gray-700 hover:text-gray-800"},e.name))),n.createElement("div",{className:"mt-4"},n.createElement("span",{className:"text-sm font-medium text-gray-900 mr-1"},"NT $"),n.createElement("span",{className:"text-sm font-medium text-gray-900"},(0,u.x)(e.price)))),n.createElement("div",{className:"mt-4 sm:mt-0 sm:pr-9"},n.createElement("label",{htmlFor:"quantity-".concat(t),className:"sr-only"},"Quantity, ",e.name),n.createElement("div",{className:"absolute top-0 right-0"},n.createElement("button",{type:"button",className:"-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500",onClick:function(){y(g(g({},e),{},{productIdx:t})),O()}},n.createElement("span",{className:"sr-only"},"Remove"),n.createElement(l.Z,{className:"h-5 w-5","aria-hidden":"true"}))))),n.createElement("div",{className:"mt-4 flex text-sm text-gray-700 space-x-2"},n.createElement(m.Z,{defaultCount:e.buyCount,handleCount:_(t),handleRemove:function(){y(g(g({},e),{},{productIdx:t})),O()}}))))})))),n.createElement("section",{"aria-labelledby":"summary-heading",className:"mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"},n.createElement("h2",{id:"summary-heading",className:"text-lg font-medium text-gray-900"},n.createElement(s.Z,{id:"shoppingCart.order_summary",defaultMessage:"購物車總計"})),n.createElement("dl",{className:"mt-6 space-y-4"},n.createElement("div",{className:"flex items-center justify-between"},n.createElement("dt",{className:"text-base text-gray-600"},n.createElement(s.Z,{id:"shoppingCart.subtotal",defaultMessage:"小計"})),n.createElement("dd",{className:"text-sm font-medium text-gray-900"},S(1))),n.createElement("div",{className:"border-t border-gray-200 pt-4 flex items-center justify-between"},n.createElement("dt",{className:"flex items-center text-sm text-gray-600"},n.createElement("span",null,n.createElement(s.Z,{id:"shoppingCart.shipping_estimate",defaultMessage:"運費"}))),n.createElement("dd",{className:"text-sm font-medium text-gray-900"},S(2))),n.createElement("div",{className:"border-t border-gray-200 pt-4 flex items-center justify-between"},n.createElement("dt",{className:"text-base font-medium text-gray-900"},n.createElement(s.Z,{id:"shoppingCart.order_total",defaultMessage:"總計"})),n.createElement("dd",{className:"text-base font-medium text-gray-900"},S(3)))),n.createElement("div",{className:"mt-6"},n.createElement("button",{type:"submit",className:"w-full border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50  ".concat(w?"bg-indigo-200":"bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"),disabled:w,title:"目前無結帳功能"},n.createElement(s.Z,{id:"shoppingCart.checkout",defaultMessage:"前往結帳"}))))):n.createElement("div",{className:"mt-12"},n.createElement("div",{className:"mb-12 bg-blue-600 text-white px-8 py-6 border-l-8 border-blue-800 text-lg"},n.createElement(s.Z,{id:"shoppingCart.no_products_in_your_shopping_cart",defaultMessage:"您的購物車裡還沒有任何商品。"})),n.createElement("div",null,n.createElement("button",{className:"bg-gray-500 text-white px-4 py-3 hover:bg-gray-600 rounded cursor-pointer",onClick:function(){return r("/shop")}},n.createElement(s.Z,{id:"shoppingCart.back_to_the_store",defaultMessage:"回到商店"})))),j.length?n.createElement("section",{"aria-labelledby":"related-heading",className:"mt-24"},n.createElement("h2",{id:"related-heading",className:"text-lg font-medium text-gray-900"},n.createElement(s.Z,{id:"shoppingCart.you_may_also_like",defaultMessage:"你可能會喜歡"}),"…"),n.createElement("div",{className:"mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"},j.map((function(e){return n.createElement("div",{key:e.intl_id,className:"group relative"},n.createElement("div",{className:"w-full min-h-56 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-56 lg:aspect-none"},n.createElement(o.Z,{img:e,className:"w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"})),n.createElement("div",{className:"mt-4 flex justify-between"},n.createElement("div",null,n.createElement("h3",{className:"text-sm text-gray-700"},n.createElement("a",{href:"/shop/detail/".concat(e)},n.createElement("span",{"aria-hidden":"true",className:"absolute inset-0"}),n.createElement(s.Z,{id:"shop.products.".concat(e),defaultMessage:i[e].name}))))),n.createElement("div",{className:""},n.createElement("span",{className:"mr-1 text-sm font-medium text-gray-900"},"NT $"),n.createElement("span",{className:"text-sm font-medium text-gray-900"},(0,u.x)(i[e].price))))})))):null),n.createElement(d.Z,{show:E,onHide:C},n.createElement("div",{className:""},n.createElement("div",{className:"mb-8"},n.createElement("span",{className:"mr-4"},n.createElement(s.Z,{id:"shoppingCart.are_you_sure_you_want_to_remove",defaultMessage:"是否確定要移除"})),n.createElement("span",null,p.name)),n.createElement("div",{className:"flex justify-end"},n.createElement("button",{className:"rounded-md bg-gray-600 bg-opacity-90 px-4 py-2 mr-2  text-sm font-medium text-white hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",onClick:C},n.createElement(s.Z,{id:"global.cancel",defaultMessage:"取消"})),n.createElement("button",{className:"rounded-md bg-blue-600 bg-opacity-90 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",onClick:function(){_(p.productIdx)(0),y({}),v(!1)}},n.createElement(s.Z,{id:"global.ok",defaultMessage:"確定"}))))))};var N=a(5982),w=a(2371);const j=(0,r.$j)((function(e){return{cart:e.cart}}),(function(e){return{updateCart:function(t){return e((0,w.H)(t))},push:function(t,a){return e((0,N.VF)(t,a))}}}))(v)}}]);