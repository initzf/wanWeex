// { "framework": "Vue"} 

!function(e){function t(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,o){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=19)}({0:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=(weex.requireModule("navigator"),weex.requireModule("modal")),n=weex.requireModule("stream"),a=weex.requireModule("globalEvent"),r=weex.requireModule("myModule");t.default={data:{inputhint:"请输入你要搜索的设备",left_icon:"mipmap://img_calendar_icon.webp",ic_home_title_menu_search:"mipmap://ic_home_title_menu_search.png",message_icon:"mipmap://message_icon.webp",listitem:[1,2,3,4,5],tabitems2:[{name:"发布出售",icon:"mipmap://img_home_shell_1.webp"},{name:"发表求购",icon:"mipmap://img_home_shell_1.webp"},{name:"金融借贷",icon:"mipmap://img_home_shell_1.webp"},{name:"实名查询",icon:"mipmap://img_home_shell_1.webp"},{name:"故障百科",icon:"mipmap://img_home_shell_1.webp"},{name:"故障百科",icon:"mipmap://img_home_shell_1.webp"}],tabitems:[[{name:"发布出售",icon:"mipmap://img_home_shell_1.webp"},{name:"发表求购",icon:"mipmap://img_home_shell_1.webp"},{name:"金融借贷",icon:"mipmap://img_home_shell_1.webp"}],[{name:"实名查询",icon:"mipmap://img_home_shell_1.webp"},{name:"故障百科",icon:"mipmap://img_home_shell_1.webp"},{name:"故障百科",icon:"mipmap://img_home_shell_1.webp"}]],imgurls:[{pic:"https://testadmin.meckeeper.com/upload/picture/20170812150118_620.png"},{pic:"https://testadmin.meckeeper.com/upload/picture/20170811095710_573.jpg"},{pic:"https://testadmin.meckeeper.com/upload/picture/20170811095616_753.png"},{pic:"https://testadmin.meckeeper.com/upload/picture/20170811095456_262.png"},{pic:"https://testadmin.meckeeper.com/upload/picture/20170615152227_299.webp"}],logoUrl:"http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png",target:"World",lists:[]},created:function(){console.log("index 完成数据绑定之后，模板编译之前被触发");var e=this;a.addEventListener("wojiazaodiqiu",function(t){e.inputhint=t.str,e.getData()})},methods:{update:function(e){this.target="Weex",console.log("target:",this.target)},jump:function(e){o.toast({message:"callback: "+e}),r.startActivity({url:"http://192.168.1.246:8081/dist/xyz.js",title:"我放草",action:"TestActivity"})},getGoodCar:function(e,t){return n.fetch({method:"GET",type:"json",url:e},t)},onviewappear:function(){console.log("index   onviewappear")},onviewdisappear:function(){console.log("index   onviewdisappear")},getData:function(){r.getUserArgment(function(e){console.log("index     "+e.username),o.toast({message:e.username})})},getData2:function(e){then.inputhint=e.str}},destroyed:function(){console.log("index:  destroyed"),null!=a&&a.removeEventListener("wojiazaodiqiu")}}},19:function(e,t,i){var o,n,a=[];a.push(i(4)),o=i(0);var r=i(7);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="F:\\weex\\test_wx\\src\\index.vue",n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-3b5a2b1b",n.style=n.style||{},a.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,a),e.exports=o,e.exports.el="true",new Vue(e.exports)},4:function(e,t){e.exports={indicator:{width:750,height:350,itemColor:"#008000",itemSelectedColor:"#FF0000",itemSize:10,position:"absolute",top:150,left:280},tab1:{paddingTop:15,backgroundColor:"#FFFFFF"},tab2:{paddingBottom:15},image:{width:750,height:350},text:{fontSize:50,textAlign:"center",color:"#41B883"}}},7:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("scroller",{attrs:{showScrollbar:"false"},on:{viewappear:e.onviewappear,viewdisappear:e.onviewdisappear}},[i("div",{staticStyle:{backgroundColor:"#f0f0f0"}},[i("div",{staticStyle:{height:"370px",width:"750px"}},[i("slider",{staticClass:["slider"],staticStyle:{height:"370px",position:"absolute",zIndex:"1"},attrs:{interval:"5000",autoPlay:"true"}},[e._l(e.imgurls,function(e){return i("div",{staticClass:["frame"]},[i("image",{staticClass:["image"],attrs:{src:e.pic}})])}),i("indicator",{staticClass:["indicator"]})],2),i("div",{staticStyle:{flexDirection:"row",height:"80px",zIndex:"0",marginTop:"20px",display:"flex",alignItems:"center"}},[i("div",{staticStyle:{flex:"0.2",justifyContent:"center",alignItems:"center"}},[i("image",{staticStyle:{width:"44px",height:"44px",marginLeft:"5px"},attrs:{src:e.left_icon}})]),i("div",{staticStyle:{flex:"1",display:"flex",alignItems:"center",backgroundColor:"#0088fb",height:"60px",flexDirection:"row",borderRadius:"5px",marginLeft:"10px",marginRight:"10px",backgroundColor:"white",borderColor:"white",opacity:"0.8"}},[i("image",{staticStyle:{width:"32px",height:"32px",marginLeft:"20px"},attrs:{src:e.ic_home_title_menu_search}}),i("text",{staticStyle:{color:"#999999",fontSize:"25px",marginLeft:"15px"}},[e._v(e._s(e.inputhint))])]),i("div",{staticStyle:{flex:"0.2",justifyContent:"center",alignItems:"center"}},[i("image",{staticStyle:{width:"44px",height:"44px"},attrs:{src:e.message_icon}})])])]),e._l(e.tabitems,function(t,o){return i("div",{staticClass:["tab1"],style:{paddingBottom:0==o?0:"15px"}},[i("div",{staticStyle:{flexDirection:"row"}},e._l(t,function(t,o){return i("div",{style:{flex:1}},[i("div",{staticStyle:{justifyContent:"center",alignItems:"center"},on:{click:function(i){e.jump(t.name)}}},[i("image",{staticStyle:{width:"72px",height:"72px"},attrs:{src:t.icon}}),i("text",{staticStyle:{fontSize:"30px",marginTop:"6px"}},[e._v(e._s(t.name))])])])}))])}),e._l(e.listitem,function(t,o){return i("div",{style:{paddingTop:0==o?15:0}},[i("div",{staticStyle:{flexDirection:"row",paddingRight:"20px",paddingLeft:"20px",height:"190px",borderTopWidth:"1px",justifyContent:"center",alignItems:"center",borderColor:"#dedede",backgroundColor:"white"}},[i("div",{staticStyle:{flex:"0.3",borderColor:"#dedede",borderWidth:"0.5px",padding:"2px",borderRadius:"1px"}},[i("image",{staticStyle:{width:"200px",height:"150px"},attrs:{src:e.logoUrl}}),e._m(0,!0)]),e._m(1,!0)])])})],2)])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{position:"absolute",width:"auto",height:"20px",backgroundColor:"red",bottom:"0",margin:"5px"}},[i("text",{staticStyle:{fontSize:"12px",color:"white"}},[e._v("视频图标")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{flexDirection:"column",flex:"0.7",height:"150px",position:"relative",paddingLeft:"15px"}},[i("text",{staticStyle:{fontSize:"35px",color:"#333333"}},[e._v("这个是列表大标题栏")]),i("text",{staticStyle:{fontSize:"18px",marginTop:"1px",color:"#999999"}},[e._v("这个是列表小标题栏")]),i("div",{staticStyle:{flexDirection:"row",bottom:"0px",position:"absolute",bottom:"0px",padding:"0px"}},[i("text",{staticStyle:{fontSize:"30px",color:"royalblue"}},[e._v("50万")]),i("text",{staticStyle:{fontSize:"30px",color:"#999999",marginLeft:"30px"}},[e._v("20170109")])])])}]},e.exports.render._withStripped=!0}});