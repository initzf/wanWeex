// { "framework": "Vue"} 

!function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([,,,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:{left_icon:"mipmap://img_calendar_icon.webp",ic_home_title_menu_search:"mipmap://ic_home_title_menu_search.png",message_icon:"mipmap://message_icon.webp",lists:[1,2,3,4,5],tabitems2:[{name:"发布出售",icon:"mipmap://img_home_shell_1.webp"},{name:"发表求购",icon:"mipmap://img_home_shell_1.webp"},{name:"金融借贷",icon:"mipmap://img_home_shell_1.webp"},{name:"实名查询",icon:"mipmap://img_home_shell_1.webp"},{name:"故障百科",icon:"mipmap://img_home_shell_1.webp"}],tabitems:[[{name:"发布出售",icon:"mipmap://img_home_shell_1.webp"},{name:"发表求购",icon:"mipmap://img_home_shell_1.webp"},{name:"金融借贷",icon:"mipmap://img_home_shell_1.webp"}],[{name:"实名查询",icon:"mipmap://img_home_shell_1.webp"},{name:"故障百科",icon:"mipmap://img_home_shell_1.webp"}]],imgurls:[{id:"17",title:"合伙人邀请",pic:"https://testadmin.meckeeper.com/upload/picture/20170812150118_620.png",url:"http://h5.meckeeper.com/testadmin/business/activity/twelve/index.html",skip:"html",start_time:null,end_time:null},{id:"15",title:"新手任务",pic:"https://testadmin.meckeeper.com/upload/picture/20170811095710_573.jpg",url:"action=minebean",skip:"app",start_time:null,end_time:null},{id:"14",title:"邀请活动",pic:"https://testadmin.meckeeper.com/upload/picture/20170811095616_753.png",url:"http://testadmin.meckeeper.com/business/activity/events/inviteactivity",skip:"html",start_time:null,end_time:null},{id:"5",title:"迈迈诚推",pic:"https://testadmin.meckeeper.com/upload/picture/20170811095456_262.png",url:"action=shop&id=6",skip:"app",start_time:null,end_time:null},{id:"6",title:"定制头像",pic:"https://testadmin.meckeeper.com/upload/picture/20170615152227_299.webp",url:"http://testadmin.meckeeper.com/business/activity/events/iconset",skip:"html",start_time:null,end_time:null}],logoUrl:"http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png",target:"World"},methods:{update:function(e){this.target="Weex",console.log("target:",this.target)}}}},function(e,t){e.exports={tab1:{flex:1},tab2:{marginLeft:10},image:{width:750,height:350},text:{fontSize:50,textAlign:"center",color:"#41B883"}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",[i("div",[i("div",{staticStyle:{height:"350px",width:"750px",position:"absolute"}},[i("div",{staticStyle:{flexDirection:"row",height:"100px",zIndex:"0",left:"100px",top:"150px"}},[i("div",{staticStyle:{flex:"0.3",backgroundColor:"#0088fb"}},[i("image",{staticStyle:{width:"44px",height:"44px",marginLeft:"5px"},attrs:{src:e.left_icon}})]),i("div",{staticStyle:{flex:"1",backgroundColor:"aqua",flexDirection:"row",justifyContent:"center",alignItems:"center"}},[i("image",{staticStyle:{width:"44px",height:"44px",marginLeft:"5px"},attrs:{src:e.ic_home_title_menu_search}}),i("text",{staticStyle:{color:"#999999",fontSize:"22px",marginLeft:"5px"}},[e._v("搜索设备编号")])]),i("div",{staticStyle:{flex:"0.3",backgroundColor:"darkolivegreen"}},[i("image",{attrs:{src:e.message_icon}})])])]),i("div",{staticStyle:{zIndex:"1"}},[i("slider",{staticClass:["slider"],staticStyle:{height:"350px"},attrs:{interval:"5000",autoPlay:"false"}},e._l(e.imgurls,function(e){return i("div",{staticClass:["frame"]},[i("image",{staticClass:["image"],attrs:{src:e.pic}})])}))])]),e._l(e.tabitems,function(t){return i("div",{staticClass:["cell"],staticStyle:{marginTop:"36px"}},[i("div",{staticStyle:{flexDirection:"row"}},[e._l(t,function(t){return i("div",{staticStyle:{flex:"0.9"}},[i("div",{staticStyle:{justifyContent:"center",alignItems:"center"}},[i("image",{staticStyle:{width:"72px",height:"72px"},attrs:{src:t.icon}}),i("text",{staticStyle:{fontSize:"35px",marginTop:"6px"}},[e._v(e._s(t.name))])])])}),i("div",{staticStyle:{height:"60px",color:"red",width:"2px",flex:"0.1"}})],2)])})],2)])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,i){var n,a,s=[];s.push(i(4)),n=i(3);var r=i(5);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a=n=n.default),"function"==typeof a&&(a=a.options),a.__file="F:\\weex\\test_wx\\src\\index.vue",a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-3b5a2b1b",a.style=a.style||{},s.forEach(function(e){for(var t in e)a.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,s),e.exports=n,e.exports.el="true",new Vue(e.exports)}]);