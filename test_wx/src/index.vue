<template>

    <scroller show-scrollbar="false" @viewappear="onviewappear" @viewdisappear="onviewdisappear">
        <div style="background-color: #f0f0f0">
            <!-- head -->
            <div style="height: 370px;width: 750px;">
                <!-- banner -->
                <slider class="slider" interval="5000" auto-play="true"
                        style="height: 370px;position: absolute;;z-index: 1;">
                    <div class="frame" v-for="img in imgurls">
                        <image class="image" :src="img.pic"></image>
                    </div>
                    <indicator class="indicator"></indicator>
                </slider>

                <!-- 搜索栏 -->
                <div style="flex-direction: row;height: 80px;z-index: 0;margin-top: 20px;display: flex;align-items: center;">
                    <!-- 左边的图标 -->
                    <div style="flex: 0.2;justify-content: center;align-items: center">
                        <image :src="left_icon" style="width: 44px;height: 44px;;margin-left: 5px"></image>
                    </div>

                    <!-- 中间的搜索栏 -->
                    <div style="flex: 1;;display: flex;align-items: center;background-color:#0088fb;height:60px;flex-direction: row;border-radius: 5px;margin-left: 10px;margin-right: 10px;background-color: white;border-color: white;opacity:0.8;">
                        <image :src="ic_home_title_menu_search"
                               style="width: 32px;height: 32px;margin-left: 20px"></image>
                        <text style="color: #999999;font-size: 25px;margin-left: 15px">{{ inputhint }}</text>
                    </div>

                    <!-- 右边的图标 -->
                    <div style="flex: 0.2;justify-content: center;align-items: center">
                        <image style="width: 44px;height: 44px" :src="message_icon"></image>
                    </div>
                </div>
            </div>

            <!-- tab 事件入口 -->
            <div class="tab1" v-for="(tab,index) in tabitems" v-bind:style="{paddingBottom:index==0?0:15+'px'}">
                <div style="flex-direction: row">
                    <div v-for="(item,position) in tab" :style="{flex:index==0?1:1}">
                        <div style="justify-content: center;align-items: center" @click="jump(item.name)">
                            <image style="width: 72px;height: 72px;" :src="item.icon"></image>
                            <text style="font-size: 30px;margin-top: 6px">{{ item.name }}</text>
                        </div>
                    </div>
                </div>
            </div>


            <div v-for=" (item,index) in  listitem" :style="{paddingTop: index==0?15:0}">
                <div style="flex-direction: row;;padding-right: 20px;padding-left: 20px;height: 190px;border-top-width: 1px;justify-content: center;align-items: center;border-color: #dedede;background-color: white; ">
                    <div style=";flex: 0.3;border-color: #dedede;border-width: 0.5px;padding: 2px;border-radius: 1px">
                        <image :src="logoUrl" style="width: 200px;height: 150px"/>
                        <div style="position: absolute;;width: auto;height: 20px;background-color: red;bottom: 0;margin: 5px">
                            <text style="font-size: 12px;color: white;">视频图标</text>
                        </div>
                    </div>

                    <div style="flex-direction: column;flex: 0.7;height: 150px;position:relative;padding-left: 15px">
                        <text style="font-size: 35px;color: #333333">这个是列表大标题栏</text>
                        <text style="font-size: 18px;margin-top: 1px;color: #999999">这个是列表小标题栏</text>


                        <div style="flex-direction: row;bottom: 0px;position:absolute;bottom:0px;padding:0px; ">
                            <text style="font-size: 30px;color: royalblue;">50万</text>
                            <text style="font-size: 30px;color: #999999;margin-left: 30px">20170109</text>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </scroller>
</template>

<style>
    .indicator {
        width: 750px;
        height: 350px;
        item-color: green;
        item-selected-color: red;
        item-size: 10px;
        position: absolute;
        top: 150px;
        left: 280px;
    }

    .tab1 {
        padding-top: 15px;
        background-color: white
    }

    .tab2 {
        padding-bottom: 15px;
        /*background-color: black;*/
    }

    .image {
        width: 750px;
        height: 350px;
    }

    .text {
        font-size: 50px;
        text-align: center;
        color: #41B883;
    }
</style>

<script>

    var navigator = weex.requireModule('navigator')
    var modal = weex.requireModule('modal');
    const stream = weex.requireModule('stream');
    var globalEvent = weex.requireModule('globalEvent');

    const androidModule = weex.requireModule('myModule');

    export default {
        data: {
            inputhint: "请输入你要搜索的设备",
            left_icon: "mipmap://img_calendar_icon.webp",
            ic_home_title_menu_search: "mipmap://ic_home_title_menu_search.png",
            message_icon: "mipmap://message_icon.webp",

            listitem: [1, 2, 3, 4, 5],

            tabitems2: [
                {name: "发布出售", icon: "mipmap://img_home_shell_1.webp"},
                {name: "发表求购", icon: "mipmap://img_home_shell_1.webp"},
                {name: "金融借贷", icon: "mipmap://img_home_shell_1.webp"},
                {name: "实名查询", icon: "mipmap://img_home_shell_1.webp"},
                {name: "故障百科", icon: "mipmap://img_home_shell_1.webp"},
                {name: "故障百科", icon: "mipmap://img_home_shell_1.webp"}
            ],

            tabitems: [
                [{name: "发布出售", icon: "mipmap://img_home_shell_1.webp"}, {
                    name: "发表求购",
                    icon: "mipmap://img_home_shell_1.webp"
                }, {name: "金融借贷", icon: "mipmap://img_home_shell_1.webp"}],
                [{name: "实名查询", icon: "mipmap://img_home_shell_1.webp"}, {
                    name: "故障百科",
                    icon: "mipmap://img_home_shell_1.webp"
                }, {name: "故障百科", icon: "mipmap://img_home_shell_1.webp"}]
            ],
            imgurls: [
                {"pic": "https://testadmin.meckeeper.com/upload/picture/20170812150118_620.png"},
                {"pic": "https://testadmin.meckeeper.com/upload/picture/20170811095710_573.jpg"},
                {"pic": "https://testadmin.meckeeper.com/upload/picture/20170811095616_753.png"},
                {"pic": "https://testadmin.meckeeper.com/upload/picture/20170811095456_262.png"},
                {"pic": "https://testadmin.meckeeper.com/upload/picture/20170615152227_299.webp"}
            ],
            logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
            target: 'World',
            lists: [],
        },
        created: function () {
            console.log('index 完成数据绑定之后，模板编译之前被触发');

            var then = this;
            globalEvent.addEventListener("wojiazaodiqiu", function (e) {
                then.inputhint = e.str;

                then.getData();
            });

            /*let url = "http://www.jspang.com/DemoApi/newsApi.php";
             this.getGoodCar(url, function (res) {
             console.log(res.data);
             })*/
        },
        methods: {
            update: function (e) {
                this.target = 'Weex'
                console.log('target:', this.target)
            },
            jump: function (posi) {
                modal.toast({message: 'callback: ' + posi});

                /*navigator.open({
                 url: 'http://192.168.1.246:8081/dist/xyz.js',
                 title:'我放草'
                 }, function (e) {
                 console.log("index 页面跳转成功")
                 });*/

                androidModule.startActivity({
                    url: 'http://192.168.1.246:8081/dist/xyz.js',
                    title: '我放草',
                    action: 'TestActivity'
                })
            },
            getGoodCar(url, callback){
                return stream.fetch({
                    method: 'GET',
                    type: 'json',
                    url: url
                }, callback)
            }, onviewappear: function () {
                console.log("index   onviewappear");
            }, onviewdisappear: function () {
                console.log("index   onviewdisappear");
            }, getData: function () {
                androidModule.getUserArgment(function (data) {
                    console.log("index     " + data.username);

                    modal.toast({message: data.username});
                });
            }, getData2: function (argment) {
                then.inputhint = argment.str;
            }

        }, destroyed: function () {
            console.log("index:  destroyed");
            if (globalEvent != null) {
                globalEvent.removeEventListener("wojiazaodiqiu");
            }
        }
    }
</script>