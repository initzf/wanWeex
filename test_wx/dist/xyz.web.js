// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=18)}([function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t){e.exports=function(e,t,n,o,r){var i,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(i=e,s=e.default);var a="function"==typeof s?s.options:s;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),o&&(a._scopeId=o);var c;if(r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},a._ssrRegister=c):n&&(c=n),c){var d=a.functional,u=d?a.render:a.beforeCreate;d?a.render=function(e,t){return c.call(t),u(e,t)}:a.beforeCreate=u?[].concat(u,c):[c]}return{esModule:i,exports:s,options:a}}},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=d[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(i(n.parts[r]));d[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function i(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(h)return A;o.parentNode.removeChild(o)}if(v){var i=f++;o=p||(p=r()),t=s.bind(null,o,i,!1),n=s.bind(null,o,i,!0)}else o=r(),t=l.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function s(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function l(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),d={},u=a&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,A=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var r=c(e,t);return o(r),function(t){for(var n=[],i=0;i<r.length;i++){var s=r[i],l=d[s.id];l.refs--,n.push(l)}t?(r=c(e,t),o(r)):r=[];for(var i=0;i<n.length;i++){var l=n[i];if(0===l.refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete d[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=i[0],l=i[1],a=i[2],c=i[3],d={id:e+":"+r,css:l,media:a,sourceMap:c};o[s]?o[s].parts.push(d):n.push(o[s]={id:s,parts:[d]})}return n}},,,function(e,t,n){function o(e){r||n(35)}var r=!1,i=n(1)(n(11),n(30),o,null,null);i.options.__file="F:\\weex\\test_wx\\src\\xyz.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] xyz.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(14);t.default={props:{text:{type:String,default:"确认"},type:{type:String,default:"red"},disabled:{type:Boolean,default:!1},btnStyle:Object,textStyle:Object},computed:{mrBtnStyle:function(){var e=this.type,t=this.disabled,n=this.btnStyle,i=o({},r.STYLE_MAP[e],n);return t?o({},i,{backgroundColor:"rgba(0, 0, 0, 0.1)",borderWidth:0}):i},mrTextStyle:function(){var e=this.type,t=this.disabled,n=this.textStyle,i=o({},r.TEXT_STYLE_MAP[e],n);return t?o({},i,{color:"#FFFFFF"}):i}},methods:{onClicked:function(e){var t=this.type,n=this.disabled;this.$emit("wxcButtonClicked",{e:e,type:t,disabled:n})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(12),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={props:{label:{type:String,default:""},title:{type:String,default:""},desc:{type:String,default:""},link:{type:String,default:""},hasTopBorder:{type:Boolean,default:!1},hasMargin:{type:Boolean,default:!1},hasBottomBorder:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!1},arrowIcon:{type:String,default:"https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png"},hasVerticalIndent:{type:Boolean,default:!0},cellStyle:{type:Object,default:function(){return{}}},autoAccessible:{type:Boolean,default:!0}},methods:{cellClicked:function(e){var t=this.link;this.$emit("wxcCellClicked",{e:e}),t&&r.default.goToH5Page(t,!0)}}}},,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),i=o(r),s=n(13),l=o(s),a=weex.requireModule("modal"),c=weex.requireModule("navigator"),d=weex.requireModule("myModule");t.default={components:{WxcButton:l.default,WxcCell:i.default},data:{logoUrl:"http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png",target:"World",checked:!0},methods:{wxcButtonClicked:function(e){console.log(e),d.startActivity({url:"http://192.168.1.246:8081/dist/test3.js",title:"測試2",action:"TestActivity"})},onchange:function(e){this.checked=e.value,a.toast({message:e.value})}},init:function(){console.log("xyz 在初始化内部变量，并且添加了事件功能后被触发"),c.setNavBarHidden({hidden:1},function(e){console.log("xyz  success："+e)})},created:function(){console.log("xyz 完成数据绑定之后，模板编译之前被触发")},ready:function(){console.log("xyz 模板已经编译并且生成了 Virtual DOM 之后被触发"),this.checked=!0},destroyed:function(){console.log("xyz 在页面被销毁时调用")},onviewappear:function(){console.log("xyz   onviewappear")},onviewdisappear:function(){console.log("xyz    onviewdisappear")}}},function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(25),s=function(e){return e&&e.__esModule?e:{default:e}}(i),l={UrlParser:s.default,_typeof:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isPlainObject:function(e){return"object"===l._typeof(e)},isString:function(e){return"string"==typeof e},isNonEmptyArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e&&e.length>0&&Array.isArray(e)&&void 0!==e},isObject:function(e){return e&&"object"===(void 0===e?"undefined":r(e))&&!Array.isArray(e)},isEmptyObject:function(e){return 0===Object.keys(e).length&&e.constructor===Object},decodeIconFont:function(e){var t=/&#x[a-z]\d{3,4};?/;return t.test(e)?e.replace(new RegExp(t,"g"),function(e){var t=e.replace(/&#x/,"0x").replace(/;$/,"");return String.fromCharCode(t)}):e},mergeDeep:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(!n.length)return e;var i=n.shift();if(l.isObject(e)&&l.isObject(i))for(var s in i)l.isObject(i[s])?(e[s]||Object.assign(e,o({},s,{})),l.mergeDeep(e[s],i[s])):Object.assign(e,o({},s,i[s]));return l.mergeDeep.apply(l,[e].concat(n))},appendProtocol:function(e){if(/^\/\//.test(e)){return"http"+(/^https:/.test(weex.config.bundleUrl)?"s":"")+":"+e}return e},encodeURLParams:function(e){return new s.default(e,!0).toString()},goToH5Page:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=weex.requireModule("navigator"),r=new l.UrlParser(e,!0),i=l.appendProtocol(r.toString());o.push({url:l.encodeURLParams(i),animated:t.toString()},n)},env:{isTaobao:function(){return/(tb|taobao|淘宝)/i.test(weex.config.env.appName)},isTrip:function(){return"LX"===weex.config.env.appName},isBoat:function(){var e=weex.config.env.appName;return"Boat"===e||"BoatPlayground"===e},isWeb:function(){var e=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":r(window))&&"web"===e.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var e=weex.config.env.deviceHeight;return l.env.isWeb()?void 0!==("undefined"==typeof window?"undefined":r(window))&&window.screen&&window.screen.width&&window.screen.height&&375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10):l.env.isIOS()&&2436===e},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},isAlipay:function(){return"AP"===weex.config.env.appName},isTmall:function(){return/(tm|tmall|天猫)/i.test(weex.config.env.appName)},isAliWeex:function(){return l.env.isTmall()||l.env.isTrip()||l.env.isTaobao()},supportsEB:function(){var e=weex.config.env.weexVersion||"0",t=l.compareVersion(e,"0.10.1.4")&&(l.env.isIOS()||l.env.isAndroid()),n=weex.requireModule("expressionBinding");return n&&n.enableBinding&&t},supportsEBForAndroid:function(){return l.env.isAndroid()&&l.env.supportsEB()},supportsEBForIos:function(){return l.env.isIOS()&&l.env.supportsEB()},getPageHeight:function(){var e=weex.config.env,t=l.env.isWeb()?0:l.env.isIPhoneX()?176:132;return e.deviceHeight/e.deviceWidth*750-t}},compareVersion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.0.0",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.0.0";if(e===t)return!0;for(var n=e.split("."),o=t.split("."),r=Math.max(n.length,o.length),i=0;i<r;i++){var s=~~o[i],l=~~n[i];if(s<l)return!0;if(s>l)return!1}return!1},arrayChunk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=[];return e&&e.length>0&&(n=e.map(function(n,o){return o%t==0?e.slice(o,o+t):null}).filter(function(e){return e})),n},truncateString:function(e,t){for(var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=0,r="",i="",s=/[^\x00-\xff]/g,l=e.replace(s,"**").length,a=0;a<l&&(i=e.charAt(a).toString(),null!==i.match(s)?o+=2:o++,!(o>t));a++)r+=i;return n&&l>t&&(r+="..."),r}};t.default=l},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(27);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.STYLE_MAP={red:{backgroundColor:"#FF5000"},yellow:{backgroundColor:"#FFC900"},normal:{backgroundColor:"#FFFFFF",borderColor:"#A5A5A5",borderWidth:"1px"},highlight:{backgroundColor:"#FFFFFF",borderColor:"#EE9900",borderWidth:"1px"}},t.TEXT_STYLE_MAP={taobao:{color:"#FFFFFF"},fliggy:{color:"#3D3D3D"},normal:{color:"#3D3D3D"},highlight:{color:"#EE9900"}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(28);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}})},,,function(e,t,n){"use strict";var o=n(6);o.el="#root",new Vue(o)},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.wxc-cell[data-v-2e0409a6] {\n  height: 100px;\n  flex-direction: row;\n  align-items: center;\n  padding-left: 24px;\n  padding-right: 24px;\n  background-color: #ffffff;\n}\n.cell-margin[data-v-2e0409a6] {\n  margin-bottom: 24px;\n}\n.cell-title[data-v-2e0409a6] {\n  flex: 1;\n}\n.cell-indent[data-v-2e0409a6] {\n  padding-bottom: 30px;\n  padding-top: 30px;\n}\n.has-desc[data-v-2e0409a6] {\n  padding-bottom: 18px;\n  padding-top: 18px;\n}\n.cell-top-border[data-v-2e0409a6] {\n  border-top-color: #e2e2e2;\n  border-top-width: 1px;\n}\n.cell-bottom-border[data-v-2e0409a6] {\n  border-bottom-color: #e2e2e2;\n  border-bottom-width: 1px;\n}\n.cell-label-text[data-v-2e0409a6] {\n  font-size: 30px;\n  color: #666666;\n  width: 188px;\n  margin-right: 10px;\n}\n.cell-arrow-icon[data-v-2e0409a6] {\n  width: 22px;\n  height: 22px;\n}\n.cell-content[data-v-2e0409a6] {\n  color: #333333;\n  font-size: 30px;\n  line-height: 40px;\n}\n.cell-desc-text[data-v-2e0409a6] {\n  color: #999999;\n  font-size: 24px;\n  line-height: 30px;\n  margin-top: 4px;\n}\n","",{version:3,sources:["F:/weex/test_wx/node_modules/weex-ui/packages/wxc-cell/index.vue?2cdaf0ca"],names:[],mappings:";AAgCA;EACA,cAAA;EACA,oBAAA;EACA,oBAAA;EACA,mBAAA;EACA,oBAAA;EACA,0BAAA;CACA;AAEA;EACA,oBAAA;CACA;AAEA;EACA,QAAA;CACA;AAEA;EACA,qBAAA;EACA,kBAAA;CACA;AAEA;EACA,qBAAA;EACA,kBAAA;CACA;AAEA;EACA,0BAAA;EACA,sBAAA;CACA;AAEA;EACA,6BAAA;EACA,yBAAA;CACA;AAEA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;CACA;AAEA;EACA,YAAA;EACA,aAAA;CACA;AAEA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;CACA;AAEA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;CACA",file:"index.vue",sourcesContent:['\x3c!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. --\x3e\n\x3c!-- Created by Tw93 on 17/09/25. --\x3e\n\x3c!--A Cell --\x3e\n\n<template>\n  <div :class="[\'wxc-cell\', hasTopBorder && \'cell-top-border\', hasBottomBorder && \'cell-bottom-border\', hasMargin && \'cell-margin\', hasVerticalIndent && \'cell-indent\', desc && \'has-desc\']"\n    :style="cellStyle"\n    :accessible="autoAccessible"\n    :aria-label="`${label},${title},${desc}`"\n    @click="cellClicked">\n    <slot name="label">\n      <div v-if="label">\n        <text class="cell-label-text">{{label}}</text>\n      </div>\n    </slot>\n    <div class="cell-title">\n      <slot name="title">\n        <text class="cell-content">{{title}}</text>\n        <text class="cell-desc-text"\n              v-if="desc">{{desc}}</text>\n      </slot>\n    </div>\n    <slot name="value"></slot>\n    <slot></slot>\n    <image :src="arrowIcon"\n           class="cell-arrow-icon"\n           :aria-hidden="true"\n           v-if="hasArrow"></image>\n  </div>\n</template>\n\n<style scoped>\n  .wxc-cell {\n    height: 100px;\n    flex-direction: row;\n    align-items: center;\n    padding-left: 24px;\n    padding-right: 24px;\n    background-color: #ffffff;\n  }\n\n  .cell-margin {\n    margin-bottom: 24px;\n  }\n\n  .cell-title {\n    flex: 1;\n  }\n\n  .cell-indent {\n    padding-bottom: 30px;\n    padding-top: 30px;\n  }\n\n  .has-desc {\n    padding-bottom: 18px;\n    padding-top: 18px;\n  }\n\n  .cell-top-border {\n    border-top-color: #e2e2e2;\n    border-top-width: 1px;\n  }\n\n  .cell-bottom-border {\n    border-bottom-color: #e2e2e2;\n    border-bottom-width: 1px;\n  }\n\n  .cell-label-text {\n    font-size: 30px;\n    color: #666666;\n    width: 188px;\n    margin-right: 10px;\n  }\n\n  .cell-arrow-icon {\n    width: 22px;\n    height: 22px;\n  }\n\n  .cell-content {\n    color: #333333;\n    font-size: 30px;\n    line-height: 40px;\n  }\n\n  .cell-desc-text {\n    color: #999999;\n    font-size: 24px;\n    line-height: 30px;\n    margin-top: 4px;\n  }\n</style>\n\n<script>\n  import Utils from \'../utils\';\n\n  export default {\n    props: {\n      label: {\n        type: String,\n        default: \'\'\n      },\n      title: {\n        type: String,\n        default: \'\'\n      },\n      desc: {\n        type: String,\n        default: \'\'\n      },\n      link: {\n        type: String,\n        default: \'\'\n      },\n      hasTopBorder: {\n        type: Boolean,\n        default: false\n      },\n      hasMargin: {\n        type: Boolean,\n        default: false\n      },\n      hasBottomBorder: {\n        type: Boolean,\n        default: true\n      },\n      hasArrow: {\n        type: Boolean,\n        default: false\n      },\n      arrowIcon: {\n        type: String,\n        default: \'https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png\'\n      },\n      hasVerticalIndent: {\n        type: Boolean,\n        default: true\n      },\n      cellStyle: {\n        type: Object,\n        default: () => ({})\n      },\n      autoAccessible: {\n        type: Boolean,\n        default: true\n      }\n    },\n    methods: {\n      cellClicked (e) {\n        const link = this.link;\n        this.$emit(\'wxcCellClicked\', { e });\n        link && Utils.goToH5Page(link, true);\n      }\n    }\n  };\n<\/script>\n'],sourceRoot:""}])},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.text {\n    font-size: 50px;\n    text-align: center;\n    color: #41B883;\n}\n","",{version:3,sources:["F:/weex/test_wx/src/xyz.vue?b25818da"],names:[],mappings:";AAsBA;IACA,gBAAA;IACA,mBAAA;IACA,eAAA;CACA",file:"xyz.vue",sourcesContent:['<template>\n    <div class="body" @viewappear="onviewappear" @viewdisappear="onviewdisappear">\n        <div style="align-items: center;margin-top: 20px">\n            <wxc-button text="确定"\n                        :disabled="checked"\n                        @wxcButtonClicked="wxcButtonClicked"></wxc-button>\n        </div>\n\n        <div style="margin-top: 20px;margin-right: 20px;margin-left: 20px">\n            <wxc-cell label="标题"\n                      :has-arrow="false"\n                      @wxcCellClicked="wxcCellClicked"\n                      :has-top-border="true">\n\n                <switch slot="value" @change="onchange" checked="true"></switch>\n            </wxc-cell>\n        </div>\n\n    </div>\n</template>\n\n<style>\n    .text {\n        font-size: 50px;\n        text-align: center;\n        color: #41B883;\n    }\n</style>\n\n<script>\n    var modal = weex.requireModule(\'modal\');\n    var navigator = weex.requireModule(\'navigator\');\n\n    const androidModule = weex.requireModule(\'myModule\');\n\n    import {WxcButton, WxcCell} from \'weex-ui\';\n\n    export default {\n        components: {WxcButton, WxcCell},\n        data: {\n            logoUrl: \'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png\',\n            target: \'World\',\n            checked: true\n        },\n        methods: {\n            wxcButtonClicked (e) {\n                console.log(e)\n\n                androidModule.startActivity({\n                    url: \'http://192.168.1.246:8081/dist/test3.js\',\n                    title: \'測試2\',\n                    action: \'TestActivity\'\n                });\n            },\n            onchange(e){\n                this.checked = e.value;\n                modal.toast({message: e.value})\n            }\n        },\n        init: function () {\n            console.log(\'xyz 在初始化内部变量，并且添加了事件功能后被触发\');\n\n            navigator.setNavBarHidden({\n                hidden: 1\n            }, function (xyz) {\n                console.log("xyz  success：" + xyz)\n            });\n        },\n        created: function () {\n            console.log(\'xyz 完成数据绑定之后，模板编译之前被触发\');\n        },\n        ready: function () {\n            console.log(\'xyz 模板已经编译并且生成了 Virtual DOM 之后被触发\');\n            this.checked = true;\n        },\n        destroyed: function () {\n            console.log(\'xyz 在页面被销毁时调用\');\n        }, onviewappear(){\n            console.log("xyz   onviewappear")\n        }, onviewdisappear(){\n            console.log("xyz    onviewdisappear");\n        }\n    }\n<\/script>'],sourceRoot:""}])},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.wxc-btn[data-v-5f8008fd] {\n  width: 702px;\n  height: 88px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n}\n.btn-text[data-v-5f8008fd] {\n  text-overflow: ellipsis;\n  lines: 1;\n  font-size: 36px;\n  color: #FFFFFF;\n}\n\n","",{version:3,sources:["F:/weex/test_wx/node_modules/weex-ui/packages/wxc-button/index.vue?1e2d60b0"],names:[],mappings:";AA8DA;EACA,aAAA;EACA,aAAA;EACA,oBAAA;EACA,wBAAA;EACA,oBAAA;CACA;AAEA;EACA,wBAAA;EACA,SAAA;EACA,gBAAA;EACA,eAAA;CACA",file:"index.vue",sourcesContent:['\x3c!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. --\x3e\n\x3c!-- Created by Tw93 on 17/07/28. --\x3e\n\n<template>\n  <div class="wxc-btn"\n       :style="mrBtnStyle"\n       @click="onClicked"\n       :accessible="true"\n       :aria-label="text">\n    <text class="btn-text" :style="mrTextStyle">{{text}}</text>\n  </div>\n</template>\n\n<script>\n  import { STYLE_MAP, TEXT_STYLE_MAP } from \'./type\'\n\n  export default {\n    props: {\n      text: {\n        type: String,\n        default: \'确认\'\n      },\n      type: {\n        type: String,\n        default: \'red\'\n      },\n      disabled: {\n        type: Boolean,\n        default: false\n      },\n      btnStyle: Object,\n      textStyle: Object\n    },\n    computed: {\n      mrBtnStyle () {\n        const { type, disabled, btnStyle } = this;\n        const mrBtnStyle = {\n          ...STYLE_MAP[type],\n          ...btnStyle\n        };\n        return disabled ? {\n          ...mrBtnStyle,\n          backgroundColor: \'rgba(0, 0, 0, 0.1)\',\n          borderWidth: 0\n        } : mrBtnStyle;\n      },\n      mrTextStyle () {\n        const { type, disabled, textStyle } = this;\n        const mrTextStyle = { ...TEXT_STYLE_MAP[type], ...textStyle };\n        return disabled ? { ...mrTextStyle, color: \'#FFFFFF\' } : mrTextStyle;\n      }\n    },\n    methods: {\n      onClicked (e) {\n        const { type, disabled } = this;\n        this.$emit(\'wxcButtonClicked\', { e, type, disabled })\n      }\n    }\n  }\n<\/script>\n\n<style scoped>\n  .wxc-btn {\n    width: 702px;\n    height: 88px;\n    align-items: center;\n    justify-content: center;\n    border-radius: 12px;\n  }\n\n  .btn-text {\n    text-overflow: ellipsis;\n    lines: 1;\n    font-size: 36px;\n    color: #FFFFFF;\n  }\n\n</style>\n'],sourceRoot:""}])},,,function(e,t,n){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},function(e,t,n){"use strict";(function(t){function o(e){e=e||t.location||{};var n,o={},r=typeof e;if("blob:"===e.protocol)o=new s(unescape(e.pathname),{});else if("string"===r){o=new s(e,{});for(n in h)delete o[n]}else if("object"===r){for(n in e)n in h||(o[n]=e[n]);void 0===o.slashes&&(o.slashes=p.test(e.href))}return o}function r(e){var t=u.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function i(e,t){for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),o=n.length,r=n[o-1],i=!1,s=0;o--;)"."===n[o]?n.splice(o,1):".."===n[o]?(n.splice(o,1),s++):s&&(0===o&&(i=!0),n.splice(o,1),s--);return i&&n.unshift(""),"."!==r&&".."!==r||n.push(""),n.join("/")}function s(e,t,n){if(!(this instanceof s))return new s(e,t,n);var l,a,u,p,h,A,v=f.slice(),x=typeof t,y=this,g=0;for("object"!==x&&"string"!==x&&(n=t,t=null),n&&"function"!=typeof n&&(n=d.parse),t=o(t),a=r(e||""),l=!a.protocol&&!a.slashes,y.slashes=a.slashes||l&&t.slashes,y.protocol=a.protocol||t.protocol||"",e=a.rest,a.slashes||(v[2]=[/(.*)/,"pathname"]);g<v.length;g++)p=v[g],u=p[0],A=p[1],u!==u?y[A]=e:"string"==typeof u?~(h=e.indexOf(u))&&("number"==typeof p[2]?(y[A]=e.slice(0,h),e=e.slice(h+p[2])):(y[A]=e.slice(h),e=e.slice(0,h))):(h=u.exec(e))&&(y[A]=h[1],e=e.slice(0,h.index)),y[A]=y[A]||(l&&p[3]?t[A]||"":""),p[4]&&(y[A]=y[A].toLowerCase());n&&(y.query=n(y.query)),l&&t.slashes&&"/"!==y.pathname.charAt(0)&&(""!==y.pathname||""!==t.pathname)&&(y.pathname=i(y.pathname,t.pathname)),c(y.port,y.protocol)||(y.host=y.hostname,y.port=""),y.username=y.password="",y.auth&&(p=y.auth.split(":"),y.username=p[0]||"",y.password=p[1]||""),y.origin=y.protocol&&y.host&&"file:"!==y.protocol?y.protocol+"//"+y.host:"null",y.href=y.toString()}function l(e,t,n){var o=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(n||d.parse)(t)),o[e]=t;break;case"port":o[e]=t,c(t,o.protocol)?t&&(o.host=o.hostname+":"+t):(o.host=o.hostname,o[e]="");break;case"hostname":o[e]=t,o.port&&(t+=":"+o.port),o.host=t;break;case"host":o[e]=t,/:\d+$/.test(t)?(t=t.split(":"),o.port=t.pop(),o.hostname=t.join(":")):(o.hostname=t,o.port="");break;case"protocol":o.protocol=t.toLowerCase(),o.slashes=!n;break;case"pathname":o.pathname=t.length&&"/"!==t.charAt(0)?"/"+t:t;break;default:o[e]=t}for(var r=0;r<f.length;r++){var i=f[r];i[4]&&(o[i[1]]=o[i[1]].toLowerCase())}return o.origin=o.protocol&&o.host&&"file:"!==o.protocol?o.protocol+"//"+o.host:"null",o.href=o.toString(),o}function a(e){e&&"function"==typeof e||(e=d.stringify);var t,n=this,o=n.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var r=o+(n.slashes?"//":"");return n.username&&(r+=n.username,n.password&&(r+=":"+n.password),r+="@"),r+=n.host+n.pathname,t="object"==typeof n.query?e(n.query):n.query,t&&(r+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(r+=n.hash),r}var c=n(24),d=n(26),u=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,p=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,f=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],h={hash:1,query:1};s.prototype={set:l,toString:a},s.extractProtocol=r,s.location=o,s.qs=d,e.exports=s}).call(t,n(39))},function(e,t,n){"use strict";function o(e){return decodeURIComponent(e.replace(/\+/g," "))}function r(e){for(var t,n=/([^=?&]+)=?([^&]*)/g,r={};t=n.exec(e);r[o(t[1])]=o(t[2]));return r}function i(e,t){t=t||"";var n=[];"string"!=typeof t&&(t="?");for(var o in e)s.call(e,o)&&n.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return n.length?t+n.join("&"):""}var s=Object.prototype.hasOwnProperty;t.stringify=i,t.parse=r},function(e,t,n){function o(e){r||n(36)}var r=!1,i=n(1)(n(7),n(31),o,"data-v-5f8008fd",null);i.options.__file="F:\\weex\\test_wx\\node_modules\\weex-ui\\packages\\wxc-button\\index.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},function(e,t,n){function o(e){r||n(34)}var r=!1,i=n(1)(n(8),n(29),o,"data-v-2e0409a6",null);i.options.__file="F:\\weex\\test_wx\\node_modules\\weex-ui\\packages\\wxc-cell\\index.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["wxc-cell",e.hasTopBorder&&"cell-top-border",e.hasBottomBorder&&"cell-bottom-border",e.hasMargin&&"cell-margin",e.hasVerticalIndent&&"cell-indent",e.desc&&"has-desc"],staticStyle:e.$processStyle(void 0),style:e.$processStyle(e.cellStyle),attrs:{accessible:e.autoAccessible,"aria-label":e.label+","+e.title+","+e.desc},on:{click:e.cellClicked}},[e._t("label",[e.label?n("div",[n("text",{staticClass:"cell-label-text",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v(e._s(e.label))])]):e._e()]),e._v(" "),n("div",{staticClass:"cell-title",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._t("title",[n("text",{staticClass:"cell-content",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v(e._s(e.title))]),e._v(" "),e.desc?n("text",{staticClass:"cell-desc-text",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v(e._s(e.desc))]):e._e()])],2),e._v(" "),e._t("value"),e._v(" "),e._t("default"),e._v(" "),e.hasArrow?n("image",{staticClass:"cell-arrow-icon",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{src:e.arrowIcon,"aria-hidden":!0}}):e._e()],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"body",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),on:{viewappear:e.onviewappear,viewdisappear:e.onviewdisappear}},[n("div",{staticStyle:e.$processStyle({"align-items":"center","margin-top":"20px"}),style:e.$processStyle(void 0)},[n("wxc-button",{staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{text:"确定",disabled:e.checked},on:{wxcButtonClicked:e.wxcButtonClicked}})],1),e._v(" "),n("div",{staticStyle:e.$processStyle({"margin-top":"20px","margin-right":"20px","margin-left":"20px"}),style:e.$processStyle(void 0)},[n("wxc-cell",{staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{label:"标题","has-arrow":!1,"has-top-border":!0},on:{wxcCellClicked:e.wxcCellClicked}},[n("switch",{staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{slot:"value",checked:"true"},on:{change:e.onchange},slot:"value"})])],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wxc-btn",staticStyle:e.$processStyle(void 0),style:e.$processStyle(e.mrBtnStyle),attrs:{accessible:!0,"aria-label":e.text},on:{click:e.onClicked}},[n("text",{staticClass:"btn-text",staticStyle:e.$processStyle(void 0),style:e.$processStyle(e.mrTextStyle)},[e._v(e._s(e.text))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},,,function(e,t,n){var o=n(19);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("56bae0a2",o,!1)},function(e,t,n){var o=n(20);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("7ec0acac",o,!1)},function(e,t,n){var o=n(21);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("1656fb09",o,!1)},,,function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);
//# sourceMappingURL=xyz.web.js.map