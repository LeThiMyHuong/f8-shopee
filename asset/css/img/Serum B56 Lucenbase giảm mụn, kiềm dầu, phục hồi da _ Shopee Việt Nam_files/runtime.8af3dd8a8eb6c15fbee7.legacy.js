!function(){"use strict";var e,t,r,n,o={},c={};function a(e){if(c[e])return c[e].exports;var t=c[e]={exports:{}};return o[e].call(t.exports,t,t.exports,a),t.exports}a.m=o,a.x=function(){},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},a.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);a.r(o);var c={};e=e||[null,t({}),t([]),t(t)];for(var u=2&n&&r;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){c[e]=function(){return r[e]}}));return c.default=function(){return r},a.d(o,c),o},a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,r){return a.f[r](e,t),t}),[]))},a.u=function(e){return"voucher/"+e+"."+{23:"ae9b03fc7255d59e6f6f",31:"fb533d1322b8fcef1a4c",127:"1e1fd7c7480b0c0c4444",162:"7588e5da9d73e985d8b6",175:"4afd750c2d9ec5afae5b",510:"e576a7149fb183990c6b",550:"4572a8882d2332d3622c",552:"b8c1158b973b5986d583",609:"611749eab90a9aadedfa",710:"cd60e9a2d24d92ea8f01",792:"f24b876a4c3ca8dea7c7",837:"9b43f791e36ffc110430",854:"c5295d9a42e1c6da00d0",926:"e004a581bd9cc9ae8ae9",928:"aea563e2ff56742c8787"}[e]+".legacy.js"},a.miniCssF=function(e){return"voucher/"+({80:"pcmall-voucherwallet",323:"pcmall-recommendcartvoucherspc",455:"pcmall-sellervoucher",518:"pcmall-pcpagevoucherdetail",556:"pcmall-productshopvouchers",607:"pcmall-voucherwalletmodalpc",614:"pcmall-sellervoucherlist",673:"pcmall-recommendshopvoucherlistpc",732:"pcmall-voucherproductfocusedui",951:"pcmall-productshopvoucher",978:"pcmall-voucherwalletvoucherpreview"}[e]||e)+"."+{80:"2903d1cc6861fabe664b",323:"3232d80aa3fe476a07c3",455:"a1f8815814ff1a1dd47e",518:"5a1b232eb8c0e4e0c191",556:"4576ecf35d9fb63d3f5e",573:"cb102a50aa2dc5dcc489",607:"72bf35e337a11ef4e71b",614:"d69ed509063e5b48e64d",673:"6c61ab17fc82935c3aae",732:"003b84430a67929ea5c8",951:"bbdeebe407b5235efb9f",978:"af5a46254e1aeaf8525e"}[e]+".legacy.css"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},n="@shopee/voucher-pc:",a.l=function(e,t,o,c){if(r[e])r[e].push(t);else{var u,f;if(void 0!==o)for(var l=document.getElementsByTagName("script"),i=0;i<l.length;i++){var d=l[i];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){u=d;break}}u||(f=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.setAttribute("data-webpack",n+o),u.src=e),r[e]=[t];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},s=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),f&&document.head.appendChild(u)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},self["mfeStartuppcmall-pcpagevoucherdetail"]=function(){var e=a.x;a.x=function(){var t=self.mfeModules=self.mfeModules||[];(t.s=t.s||[]).push(["pcmall-pcpagevoucherdetail",a]),e&&e(),a.x=function(){}}},a.p="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/",function(){var e={666:0},t=[];a.f.j=function(t,r){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(r,o){n=e[t]=[r,o]}));r.push(n[2]=o);var c=a.p+a.u(t),u=new Error;a.l(c,(function(r){if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",u.name="ChunkLoadError",u.type=o,u.request=c,n[1](u)}}),"chunk-"+t,t)}};var r=function(){},n=function(n,o){for(var c,u,f=o[0],l=o[1],i=o[2],d=o[3],p=0,s=[];p<f.length;p++)u=f[p],a.o(e,u)&&e[u]&&s.push(e[u][0]),e[u]=0;for(c in l)a.o(l,c)&&(a.m[c]=l[c]);for(i&&i(a),n&&n(o);s.length;)s.shift()();return d&&t.push.apply(t,d),r()},o=self.wpJsonpPcmallPcpagevoucherdetail=self.wpJsonpPcmallPcpagevoucherdetail||[];function c(){for(var r,n=0;n<t.length;n++){for(var o=t[n],c=!0,u=1;u<o.length;u++){var f=o[u];0!==e[f]&&(c=!1)}c&&(t.splice(n--,1),r=a(a.s=o[0]))}return 0===t.length&&(a.x(),a.x=function(){}),r}o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o));var u=a.x;a.x=function(){return a.x=u||function(){},(r=c)()}}(),a.x()}();
//# sourceMappingURL=https://sourcemap.webfe.shopee.io/pcmall-voucher/_/runtime.8af3dd8a8eb6c15fbee7.legacy.js.map