(function(e){function t(t){for(var r,a,s=t[0],u=t[1],o=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,o||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},i={app:0},c=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0dba459f":"a8be60dd"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0dba459f":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0dba459f":"55aec628"}[e]+".css",i=u.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var o=c[s],l=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===r||l===i))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){o=f[s],l=o.getAttribute("data-href");if(l===r||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=c);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var f=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}i[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var f=0;f<o.length;f++)t(o[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1479:function(e,t,n){"use strict";n("f12d")},"26e3":function(e,t,n){},"2d89":function(e,t,n){},"2e43":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("d4ec"),a=n("bee2"),i=function(){function e(t){Object(r["a"])(this,e),this.identifier=t.identifier||null,this.content=t.content||"",this.hours=t.hours||1}return Object(a["a"])(e,[{key:"getIdentifier",value:function(){return this.identifier}},{key:"getContent",value:function(){return this.content}},{key:"getHours",value:function(){return this.hours}}],[{key:"getNormalizer",value:function(){return{normalize:function(e){return{identifier:e.getIdentifier(),content:e.getContent(),hours:e.getHours()}},denormalize:function(t){return new e(t)}}}}]),e}()},"48ff":function(e,t,n){"use strict";n("26e3")},5793:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u}));var r=n("d4ec"),a=n("bee2"),i=(n("ac1f"),n("466d"),new(function(){function e(){Object(r["a"])(this,e),this.listeners={}}return Object(a["a"])(e,[{key:"register",value:function(e,t){return this.unregister(e),this.listeners[e]=function(e){t.match(e)&&(e.preventDefault(),t.callAction())},document.addEventListener("keydown",this.listeners[e]),this}},{key:"unregister",value:function(e){return this.listeners[e]?(document.removeEventListener("keydown",this.listeners[e]),this):this}}]),e}()),n("b85c")),c=n("2909"),s=(n("fb6a"),n("99af"),new(function(){function e(){var t=this;Object(r["a"])(this,e),this.packs=[],document.addEventListener("keydown",(function(e){return t.handler(e)}))}return Object(a["a"])(e,[{key:"getCurrentPack",value:function(){return this.packs.slice().reverse()[0]||[]}},{key:"set",value:function(e){return this.packs=[e],this}},{key:"push",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?(this.packs.push([].concat(Object(c["a"])(this.getCurrentPack()),Object(c["a"])(e))),this):(this.packs.push(e),this)}},{key:"pop",value:function(){return this.packs.pop(),this}},{key:"handler",value:function(e){var t,n=Object(i["a"])(this.getCurrentPack().slice().reverse());try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.match(e))return e.preventDefault(),void r.callAction()}}catch(a){n.e(a)}finally{n.f()}}}]),e}())),u=function(){function e(t){Object(r["a"])(this,e),this.ctrl=t.ctrl||!1,this.key=t.key,this.label=t.label||"No-Label",this.action=t.action}return Object(a["a"])(e,[{key:"isCtrl",value:function(){return this.ctrl}},{key:"getKey",value:function(){return this.key}},{key:"getLabel",value:function(){return this.label}},{key:"getAction",value:function(){return this.action}},{key:"callAction",value:function(){return this.action()}},{key:"match",value:function(t){return this.getKey()===t.key&&this.isCtrl()===e.isCtrlKeyEvent(t)}}],[{key:"ctrlS",value:function(t){return new e({ctrl:!0,key:"s",action:t})}},{key:"escape",value:function(t){return new e({key:"Escape",action:t})}},{key:"delete",value:function(t){return new e({key:"Delete",action:t})}},{key:"isCtrlKeyEvent",value:function(e){return window.navigator.platform.match("Mac")?e.metaKey:e.ctrlKey}}]),e}()},"5b10":function(e,t,n){},"7f19":function(e,t,n){"use strict";var r=n("7a23"),a={class:"the-card"},i={key:0,class:"the-card-title"},c={class:"the-card-content"};function s(e,t,n,s,u,o){return Object(r["t"])(),Object(r["f"])("div",a,[e.title?(Object(r["t"])(),Object(r["f"])("div",i,[Object(r["g"])("h2",null,Object(r["E"])(e.title),1)])):Object(r["e"])("",!0),Object(r["g"])("div",c,[Object(r["A"])(e.$slots,"default",{},void 0,!0)])])}var u=Object(r["i"])({props:{title:{type:String}}}),o=(n("1479"),n("6b0d")),l=n.n(o);const f=l()(u,[["render",s],["__scopeId","data-v-4078a343"]]);t["a"]=f},"8ccc":function(e,t,n){"use strict";n("99af");var r=n("7a23");function a(e,t,n,a,i,c){return Object(r["t"])(),Object(r["f"])("button",{ref:"buttonReference",class:Object(r["o"])(["the-button","".concat(e.type," ").concat(e.size)])},Object(r["E"])(e.label),3)}var i=Object(r["i"])({props:{label:{type:String},type:{type:String,default:"default"},size:{type:String,default:""},autoFocus:{type:Boolean,default:!1}},setup:function(e){var t=Object(r["y"])(null);return Object(r["r"])((function(){var n=t.value;e.autoFocus&&n&&n.focus()})),{buttonReference:t}}}),c=(n("f6ea"),n("6b0d")),s=n.n(c);const u=s()(i,[["render",a],["__scopeId","data-v-092e8406"]]);t["a"]=u},"985b":function(e,t,n){"use strict";n("f824")},a553:function(e,t,n){},ba8c:function(e,t,n){},c7dd:function(e,t,n){"use strict";n("2d89")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container mt-30"};function i(e,t,n,i,c,s){var u=Object(r["B"])("router-view"),o=Object(r["B"])("modals");return Object(r["t"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",a,[Object(r["h"])(u)]),Object(r["h"])(o)],64)}var c={key:0,class:"modals"},s={class:"modals-content"};function u(e,t,n,a,i,u){return e.services.modalService.getModals().length?(Object(r["t"])(),Object(r["f"])("div",c,[Object(r["g"])("div",s,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(e.services.modalService.getModals(),(function(e){return Object(r["t"])(),Object(r["d"])(Object(r["C"])(e.component),Object(r["m"])(e.properties,Object(r["F"])(e.listeners),{key:e,class:"modal"}),null,16)})),128))])])):Object(r["e"])("",!0)}var o=n("d4ec"),l=n("bee2"),f=new(function(){function e(){Object(o["a"])(this,e),this.modals=[]}return Object(l["a"])(e,[{key:"open",value:function(e){var t=this;e.component=Object(r["D"])(e.component.default),e.listeners=e.listeners||{},e.listeners.close=function(){return t.pop()},this.modals.push(e)}},{key:"pop",value:function(){this.modals.pop()}},{key:"getModals",value:function(){return this.modals}}]),e}()),d=Object(r["i"])({setup:function(){var e=Object(r["x"])({modalService:f});return{services:e}}}),h=(n("c7dd"),n("6b0d")),b=n.n(h);const p=b()(d,[["render",u],["__scopeId","data-v-c91fb420"]]);var v=p,m=n("2e43"),g=n("3835"),O=n("1da1"),j=(n("96cf"),n("d9e2"),n("d81d"),n("4de4"),n("d3b7"),n("e9c4"),function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"identifier";Object(o["a"])(this,e),this.data={},this.dirty=!1,this.handle=t,this.mainKey=r,this.normalizers=n}return Object(l["a"])(e,[{key:"load",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.handle.getFile();case 2:return e.next=4,e.sent.text();case 4:t=e.sent,this.data=t?JSON.parse(t):{};case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getHandle",value:function(){return this.handle}},{key:"isDirty",value:function(){return this.dirty}},{key:"create",value:function(e,t){if(t[this.mainKey])throw new Error("Cannot create a row with identifier");var n=this.normalizers[e].normalize||this.getDefaultNormalizer().normalize;return t.identifier=Date.now(),this.data[e]=this.data[e]||[],this.data[e].push(n(t)),this.dirty=!0,this}},{key:"update",value:function(e,t){var n=this.data[e]||[],r=this.normalizers[e].normalize||this.getDefaultNormalizer().normalize,a=r(t);if(!a.identifier)throw new Error("Cannot update because no identifier present.");return this.data[e]=n.map((function(e){return e.identifier===a.identifier?a:e})),this.dirty=!0,this}},{key:"delete",value:function(e,t){var n=this.data[e]||[],r=this.normalizers[e].normalize||this.getDefaultNormalizer().normalize,a=r(t);return this.data[e]=n.filter((function(e){return e.identifier!==a.identifier})),this.dirty=!0,this}},{key:"all",value:function(e){var t=this;return(this.data[e]||[]).map((function(n){var r=t.normalizers[e].denormalize||function(e){return e};return r(n)}))}},{key:"saveAll",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.handle.createWritable();case 2:return t=e.sent,e.next=5,t.write(JSON.stringify(this.data));case 5:return e.next=7,t.close();case 7:this.dirty=!1;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"requestPermission",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.handle.requestPermission({mode:"readwrite"}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"hasPermission",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.handle.queryPermission({mode:"readwrite"});case 2:return e.t0=e.sent,e.abrupt("return","granted"===e.t0);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getDefaultNormalizer",value:function(){return{normalize:function(e){return e},denormalize:function(e){return e}}}}]),e}()),y=n("33c6"),k=window,w=[{description:"Database",accept:{"text/plain":[".logs.app"]}}],x=new y["a"]("file-store-handle");x.version(1).stores({handle:"++id,&name"});var R=x.table("handle"),D=new(function(){function e(){Object(o["a"])(this,e),this.databases={},this.normalizers={}}return Object(l["a"])(e,[{key:"pickAndRegisterDatabase",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"default",e.next=3,k.showOpenFilePicker({types:w});case 3:if(n=e.sent,r=Object(g["a"])(n,1),a=r[0],a){e.next=8;break}throw new Error("No file picked");case 8:return e.abrupt("return",this.registerDatabase(a,t));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"createAndRegisterDatabase",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"default",e.next=3,k.showSaveFilePicker({types:w});case 3:if(n=e.sent,n){e.next=6;break}throw new Error("No file picked");case 6:return e.abrupt("return",this.registerDatabase(n,t));case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"pickFromSessionAndRegisterDatabase",value:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(){var n,r,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"default",t.next=3,e.getLastHandle(n);case 3:if(r=t.sent,r){t.next=6;break}throw new Error("No file was stored in session");case 6:return t.abrupt("return",this.registerDatabase(r,n));case 7:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()},{key:"registerDatabase",value:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(n){var r,a,i=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:"default",a=new j(n,this.normalizers[r]||{}),t.next=4,a.hasPermission();case 4:if(t.sent){t.next=7;break}return t.next=7,a.requestPermission();case 7:return t.next=9,a.load();case 9:return this.databases[r]=a,t.next=12,e.storeAsLastHandle(r,n);case 12:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}()},{key:"unregisterDatabase",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=n.length>0&&void 0!==n[0]?n[0]:"default",this.databases[t]&&delete this.databases[t];case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"isDatabaseRegistered",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return!!this.databases[e]}},{key:"getDatabase",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=this.databases[e];if(!t)throw new Error("Database ".concat(e," is not registered"));return t}},{key:"registerSerializer",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";return this.normalizers[n]=this.normalizers[n]||{},this.normalizers[n][e]=t,this}},{key:"isDatabaseStored",value:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(){var n,r=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:"default",t.next=3,e.getLastHandle(n);case 3:return t.abrupt("return",!!t.sent);case 4:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}()}],[{key:"getLastHandle",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"default",e.next=3,R.where("name").equals(t).first();case 3:return n=e.sent,e.abrupt("return",n?n.handle:null);case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"storeAsLastHandle",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"default",n=r.length>1?r[1]:void 0,e.next=4,R.where("name").equals(t).delete();case 4:return e.next=6,R.add({name:t,handle:n});case 6:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),e}()),S={components:{Modals:v},data:function(){return{fileStore:D}},mounted:function(){D.registerSerializer("log",m["a"].getNormalizer())}};n("985b");const C=b()(S,[["render",i]]);var z=C,E=n("6c02");function L(e,t,n,a,i,c){var s=Object(r["B"])("the-status-bar"),u=Object(r["B"])("the-database-picker"),o=Object(r["B"])("the-logs");return Object(r["t"])(),Object(r["f"])("div",null,[e.services.fileStore.isDatabaseRegistered()?(Object(r["t"])(),Object(r["d"])(s,{key:0,class:"mb-30"})):Object(r["e"])("",!0),e.services.fileStore.isDatabaseRegistered()?(Object(r["t"])(),Object(r["d"])(o,{key:2})):(Object(r["t"])(),Object(r["d"])(u,{key:1}))])}var A={key:0,class:"the-database-picker"},P=Object(r["g"])("p",null,"You have 2 options: Pick an existing database or create a new one.",-1),_={class:"mt-10"};function B(e,t,n,a,i,c){var s=Object(r["B"])("the-button"),u=Object(r["B"])("card");return e.state.loading?Object(r["e"])("",!0):(Object(r["t"])(),Object(r["f"])("div",A,[Object(r["h"])(u,{title:"Choose"},{default:Object(r["I"])((function(){return[P,Object(r["g"])("div",_,[e.state.isDatabaseStored?(Object(r["t"])(),Object(r["d"])(s,{key:0,label:"Continue session",onClick:e.pickLastDatabase,type:"primary","auto-focus":!0},null,8,["onClick"])):Object(r["e"])("",!0),Object(r["h"])(s,{label:"Pick database",onClick:e.pickDatabase,"auto-focus":!e.state.isDatabaseStored,type:"primary"},null,8,["onClick","auto-focus"]),Object(r["h"])(s,{label:"Create database",onClick:e.createDatabase},null,8,["onClick"])])]})),_:1})]))}var N=n("7f19"),T=n("8ccc"),H=Object(r["i"])({components:{TheButton:T["a"],Card:N["a"]},props:{reload:{type:Boolean}},setup:function(){var e=Object(r["x"])({fileStore:D}),t=Object(r["x"])({loading:!0,isDatabaseStored:!1});return Object(r["r"])(Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.isDatabaseStored();case 2:t.isDatabaseStored=e.sent,t.loading=!1;case 4:case"end":return e.stop()}}),e)})))),{state:t,createDatabase:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fileStore.createAndRegisterDatabase();case 2:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}(),pickDatabase:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fileStore.pickAndRegisterDatabase();case 2:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}(),pickLastDatabase:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fileStore.pickFromSessionAndRegisterDatabase();case 2:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}()}}});const I=b()(H,[["render",B]]);var F=I,K={class:"logs"},M={class:"mb-10"},q={class:"list"};function J(e,t,n,a,i,c){var s=Object(r["B"])("the-button");return Object(r["t"])(),Object(r["f"])("div",K,[Object(r["g"])("div",M,[Object(r["h"])(s,{label:"Add (a)",onClick:e.methods.addLog},null,8,["onClick"])]),Object(r["g"])("div",q,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(e.logs,(function(t){return Object(r["t"])(),Object(r["f"])("div",{key:t.getIdentifier(),class:"log"},[Object(r["h"])(s,{label:"Delete",class:"float-right",size:"sm",onClick:function(n){return e.methods.deleteLog(t)}},null,8,["onClick"]),Object(r["h"])(s,{label:"Edit",class:"float-right",size:"sm",onClick:function(n){return e.methods.editLog(t)}},null,8,["onClick"]),Object(r["g"])("span",null,Object(r["E"])(t.getHours())+"h ",1),Object(r["g"])("strong",null,Object(r["E"])(t.getContent()),1)])})),128))])])}n("3ca3"),n("ddb0"),n("fb6a");var U=n("5793"),W=Object(r["i"])({components:{TheButton:T["a"]},setup:function(){var e=Object(r["x"])({modalService:f,fileStore:D,database:D.getDatabase()}),t={save:function(){return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.database.saveAll();case 2:case"end":return t.stop()}}),t)})))()},addLog:function(){return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=e.modalService,t.next=3,n.e("chunk-0dba459f").then(n.bind(null,"5ce2"));case 3:t.t1=t.sent,t.t2={commit:function(t){return Object(O["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.database.create("log",t);case 2:e.modalService.pop();case 3:case"end":return n.stop()}}),n)})))()}},t.t3={component:t.t1,listeners:t.t2},t.t0.open.call(t.t0,t.t3);case 7:case"end":return t.stop()}}),t)})))()},editLog:function(t){return Object(O["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.t0=e.modalService,r.next=3,n.e("chunk-0dba459f").then(n.bind(null,"5ce2"));case 3:r.t1=r.sent,r.t2={log:t},r.t3={commit:function(t){return Object(O["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.database.update("log",t);case 2:e.modalService.pop();case 3:case"end":return n.stop()}}),n)})))()}},r.t4={component:r.t1,properties:r.t2,listeners:r.t3},r.t0.open.call(r.t0,r.t4);case 8:case"end":return r.stop()}}),r)})))()},deleteLog:function(t){return Object(O["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.database.delete("log",t);case 2:case"end":return n.stop()}}),n)})))()}};return Object(r["r"])((function(){U["b"].push([new U["a"]({label:"Save",key:"s",action:function(){return t.save()}}),new U["a"]({label:"Add",key:"a",action:function(){return t.addLog()}}),new U["a"]({label:"Delete Last",key:"Delete",action:function(){var t=e.database.all("log").slice().reverse()[0];t&&e.database.delete("log",t)}}),new U["a"]({label:"Logout",key:"Escape",action:function(){return e.fileStore.unregisterDatabase()}})])})),Object(r["s"])((function(){U["b"].pop()})),{services:e,methods:t,logs:Object(r["b"])((function(){return e.database.all("log")}))}}});n("48ff");const Y=b()(W,[["render",J],["__scopeId","data-v-1bccefae"]]);var $=Y,G=function(e){return Object(r["w"])("data-v-313fcd75"),e=e(),Object(r["u"])(),e},Q=G((function(){return Object(r["g"])("span",null,"✓ All todos saved",-1)})),V={key:1};function X(e,t,n,a,i,c){var s=Object(r["B"])("the-button");return Object(r["t"])(),Object(r["f"])("div",{class:Object(r["o"])(["the-status-bar",{dirty:e.services.database.isDirty()}])},[Object(r["h"])(s,{label:"Logout (Escape)",size:"sm",class:"float-right",onClick:t[0]||(t[0]=function(t){return e.services.fileStore.unregisterDatabase()})}),e.services.database.isDirty()?(Object(r["t"])(),Object(r["d"])(s,{key:0,class:"float-right",size:"sm",type:"danger",label:"Save (s)",onClick:e.save},null,8,["onClick"])):Object(r["e"])("",!0),Q,e.services.database.isDirty()?(Object(r["t"])(),Object(r["f"])("span",V," Please save your changes ")):Object(r["e"])("",!0)],2)}var Z=Object(r["i"])({components:{TheButton:T["a"]},setup:function(){var e=Object(r["x"])({fileStore:D,database:D.getDatabase()});return{services:e,save:function(){return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.database.saveAll();case 2:case"end":return t.stop()}}),t)})))()}}}});n("d826");const ee=b()(Z,[["render",X],["__scopeId","data-v-313fcd75"]]);var te=ee,ne=Object(r["i"])({components:{TheStatusBar:te,TheLogs:$,TheDatabasePicker:F},setup:function(){var e=Object(r["x"])({fileStore:D});return{services:e}}});n("d55c");const re=b()(ne,[["render",L],["__scopeId","data-v-3adb3a13"]]);var ae=re,ie=[{path:"/",name:"Home",component:ae}],ce=Object(E["a"])({history:Object(E["b"])("/"),routes:ie}),se=ce;n("ba8c");Object(r["c"])(z).use(se).mount("#app")},d55c:function(e,t,n){"use strict";n("5b10")},d826:function(e,t,n){"use strict";n("f1fe")},f12d:function(e,t,n){},f1fe:function(e,t,n){},f6ea:function(e,t,n){"use strict";n("a553")},f824:function(e,t,n){}});
//# sourceMappingURL=app.f421b6cd.js.map