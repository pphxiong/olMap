(function(e){function t(t){for(var r,c,o=t[0],s=t[1],l=t[2],d=0,p=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"0f87":function(e,t,n){e.exports=n.p+"img/icon2.ad92c332.svg"},1462:function(e,t,n){e.exports=n.p+"img/icon7.1433d49c.svg"},"237d":function(e,t,n){"use strict";var r=n("9eea"),a=n.n(r);a.a},"23b8":function(e,t,n){"use strict";var r=n("ddb5"),a=n.n(r);a.a},"31d4":function(e,t,n){e.exports=n.p+"img/icon1.b18aedc8.svg"},"4a19":function(e,t,n){e.exports=n.p+"img/icon3.949fbd16.svg"},"4d95":function(e,t,n){"use strict";var r=n("d81c"),a=n.n(r);a.a},"53f1":function(e,t,n){e.exports=n.p+"img/icon5.06901ee7.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld")],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("ol-map")],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mapbox"},[r("div",{ref:"map",style:{width:e.width,height:e.height},attrs:{id:"map"}},[r("div",{staticClass:"tool-container"},[r("div",{staticClass:"t_close"}),r("ul",[r("li",{on:{click:function(t){return e.changeType("Point")}}},[e._m(0)]),r("li",{on:{click:function(t){return e.changeType("Hand")}}},[e._m(1)]),r("Popover",{scopedSlots:e._u([{key:"button",fn:function(){return[r("li",[r("div",{staticClass:"icon",attrs:{title:"切换地图"}},[r("img",{attrs:{src:n("4a19")}})])])]},proxy:!0},{key:"content",fn:function(){return[r("ul",{staticClass:"maplist"},[r("li",{on:{click:function(t){return e.changeMap(e.GOOGLEADRESS)}}},[e._v("谷歌地图")]),r("li",{on:{click:function(t){return e.changeMap(e.GAODEADRESS)}}},[e._v("高德地图")]),r("li",{on:{click:function(t){return e.changeMap(e.OPENSTREETADRESS)}}},[e._v("OpenStreet地图")]),r("li",{on:{click:function(t){return e.changeMap(e.ARCGISADRESS)}}},[e._v("ArcGIS地图")])])]},proxy:!0}])}),r("li",{on:{click:e.clearPic}},[e._m(2)]),r("li",{on:{click:e.clearboard}},[e._m(3)]),r("li",{directives:[{name:"show",rawName:"v-show",value:!e.isFull,expression:"!isFull"}],on:{click:function(t){return e.fullScreen(!1)}}},[e._m(4)]),r("li",{directives:[{name:"show",rawName:"v-show",value:e.isFull,expression:"isFull"}],on:{click:function(t){return e.fullScreen(!0)}}},[e._m(5)])],1)])])])},l=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"icon",attrs:{title:"定点"}},[r("img",{attrs:{src:n("31d4")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"icon",attrs:{title:"画笔"}},[r("img",{attrs:{src:n("0f87")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"icon",attrs:{title:"撤销上一次绘图"}},[r("img",{attrs:{src:n("53f1")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"icon",attrs:{title:"清空绘图"}},[r("img",{attrs:{src:n("92a0")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"icon",attrs:{title:"全屏"}},[r("img",{attrs:{src:n("9ec7")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"icon",attrs:{title:"缩屏"}},[r("img",{attrs:{src:n("1462")}})])}],u=(n("d81d"),n("cb29"),n("caad"),n("2532"),n("5530")),d=n("d4ec"),p=n("bee2"),f=n("257e"),h=n("262e"),m=n("2caf"),v=n("ade3"),y=(n("5bc0"),n("a2c7")),g=n("5eee"),w=n("83a6"),b=n("6c77"),S=n("8682"),_=n("ce2c"),x=n("3e6b"),O=n("480c"),C=n("5831"),E=n("d0e9"),k=n("2ef1"),j=n("5043"),P=new C["a"],D=new x["a"]({source:P}),A=new O["a"]({source:new E["a"]}),F=new O["a"]({source:new k["a"]({url:"https://mt0.google.cn/vt/lyrs=m&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}"})}),M=new O["a"]({source:new j["a"]({url:"https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer"})}),R=new O["a"]({source:new k["a"]({url:"https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"})}),T={0:A,1:F,2:M,3:R},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[T[e],D];return t},L=function(e){D.setZIndex(e)},z={x:114.064839,y:22.548857,zoom:15,VectorDraw:P,VectorDrawLayer:D,streetmap:$,setDrawVectorIndex:L},G=z,I=n("ac29"),H=n("21bc"),V=function(e){Object(h["a"])(n,e);var t=Object(m["a"])(n);function n(e){var r;return Object(d["a"])(this,n),r=t.call(this,{target:e,logo:!1,controls:H["a"]({attribution:!1,rotate:!1,zoom:!1}),layers:G.streetmap(),view:new y["a"]({projection:"EPSG:4326",center:[G.x,G.y],zoom:G.zoom}),interactions:G.interact}),Object(v["a"])(Object(f["a"])(r),"data",{draw:null,drawType:["Point","LineString","LinearRing","Polygon","MultiPoint","MultiLineString","MultiPolygon","GeometryCollection","Circle","Hand"],mapcode:1}),r}return Object(p["a"])(n,[{key:"changeDrawType",value:function(e){var t=e.type,n=e.style,r=void 0===n?{fill:{color:"rgba(0, 255, 255, 0.2)"},stroke:{color:"#ffcc33",width:2},image:{radius:7,fill:new w["a"]({color:"#ffcc33"})}}:n,a=e.argobj;this.data.drawType.includes(t)?(this.data.draw&&this.removeInteraction(this.data.draw),this.data.draw=new I["a"](Object(u["a"])({source:G.VectorDraw,type:"Hand"===t?"LineString":t,style:new b["c"]({fill:new w["a"](r.fill),stroke:new S["a"](r.stroke),image:new _["a"](r.image)}),freehand:"Hand"===t,snapTolerance:50},a)),this.addInteraction(this.data.draw)):console.error("传入了不符合规范的绘图类型")}},{key:"clearLastDraw",value:function(){if(this.data.draw){var e=function(){var e=G.VectorDraw.getFeatures();0!==e.length&&G.VectorDraw.removeFeature(e[e.length-1])};this.data.draw.finishCoordinate_?(this.data.draw.removeLastPoint(),this.data.draw.finishCoordinate_||e()):e()}}},{key:"clearboard",value:function(){this.data.draw&&G.VectorDraw.clear()}},{key:"changeMap",value:function(e){if(this.data.mapcode!==e){this.data.mapcode=e;var t=0;this.removeLayer(this.getLayers().item(t)),this.addLayer(G.streetmap(e)[0]),this.getLayers().array_.reverse()}}},{key:"clearPic",value:function(){}},{key:"fullScreen",value:function(e,t){if(t){var n=document.exitFullscreen||document.msExitFullscreen||document.mozCancelFullScreen||document.webkitCancelFullScreen;if("undefined"!==typeof n&&n)n.call(document);else if("undefined"!==typeof window.ActiveXObject){var r=new ActiveXObject("WScript.Shell");null!=r&&r.SendKeys("{F11}")}}else{var a=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;if("undefined"!==typeof a&&a)a.call(e);else if("undefined"!==typeof window.ActiveXObject){var i=new ActiveXObject("WScript.Shell");null!=i&&i.SendKeys("{F11}")}}}}]),n}(g["a"]),q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{mouseenter:e.showContent,mouseleave:e.closeContent}},[n("div",[e._t("button")],2),n("div",{ref:"content",staticClass:"popover",style:e.style,on:{mouseenter:e.showContent,mouseleave:e.closeContent}},[n("div",{staticClass:"popover_content"},[n("div",{staticClass:"popper_arrow",style:e.arrowstyle}),e._t("content")],2)])])},N=[],W={name:"Popover",data:function(){return{style:{left:"200px",top:"300px",display:"none"},arrowstyle:{left:"40px",top:"5px"}}},mounted:function(){var e=this;this.appendSuccess||this.$nextTick((function(){var t=document.querySelector("body");t.append?t.append(e.$refs.content):t.appendChild(e.$refs.content)}))},methods:{showContent:function(){this.style.display="block",this.style.left=this.$el.getBoundingClientRect().left-24+"px";var e=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;this.style.top=this.$el.getBoundingClientRect().top+e+"px"},closeContent:function(){this.style.display="none"}}},X=W,B=(n("237d"),n("2877")),J=Object(B["a"])(X,q,N,!1,null,null,null),K=J.exports,Y=3,Z=1,Q=0,U=2,ee={name:"OLMap",components:{Popover:K},props:{width:{type:String,default:"480px"},height:{type:String,default:"480px"}},data:function(){return{GOOGLEADRESS:Z,GAODEADRESS:Y,ARCGISADRESS:U,OPENSTREETADRESS:Q,isFull:!1}},mounted:function(){this.createMap(this.$refs.map)},methods:{createMap:function(e){this.map=new V(e)},changeType:function(e){this.map.changeDrawType({type:e})},changeMap:function(e){this.map.changeMap(e)},clearPic:function(){this.map.clearLastDraw()},clearboard:function(){this.map.clearboard()},fullScreen:function(e){var t=this.map.fullScreen(this.$refs.map,e);!1!==t&&(this.isFull=!this.isFull)}}},te=ee,ne=(n("23b8"),Object(B["a"])(te,s,l,!1,null,"20183ab5",null)),re=ne.exports,ae={name:"HelloWorld",components:{olMap:re},props:{msg:String}},ie=ae,ce=(n("4d95"),Object(B["a"])(ie,c,o,!1,null,"0e8a86bf",null)),oe=ce.exports,se={name:"App",components:{HelloWorld:oe}},le=se,ue=(n("034f"),Object(B["a"])(le,a,i,!1,null,null,null)),de=ue.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(de)}}).$mount("#app")},"85ec":function(e,t,n){},"92a0":function(e,t,n){e.exports=n.p+"img/icon4.50da9af9.svg"},"9ec7":function(e,t,n){e.exports=n.p+"img/icon6.fca2d9c8.svg"},"9eea":function(e,t,n){},d81c:function(e,t,n){},ddb5:function(e,t,n){}});
//# sourceMappingURL=app.435933e5.js.map