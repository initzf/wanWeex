<template>
    <div class="body" @viewappear="onviewappear" @viewdisappear="onviewdisappear">
        <div style="align-items: center;margin-top: 20px">
            <wxc-button text="确定"
                        :disabled="checked"
                        @wxcButtonClicked="wxcButtonClicked"></wxc-button>
        </div>

        <div style="margin-top: 20px;margin-right: 20px;margin-left: 20px">
            <wxc-cell label="标题"
                      :has-arrow="false"
                      @wxcCellClicked="wxcCellClicked"
                      :has-top-border="true">

                <switch slot="value" @change="onchange" checked="true"></switch>
            </wxc-cell>
        </div>

    </div>
</template>

<style>
    .text {
        font-size: 50px;
        text-align: center;
        color: #41B883;
    }
</style>

<script>
    var modal = weex.requireModule('modal');
    var navigator = weex.requireModule('navigator');

    const androidModule = weex.requireModule('myModule');

    import {WxcButton, WxcCell} from 'weex-ui';

    export default {
        components: {WxcButton, WxcCell},
        data: {
            logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
            target: 'World',
            checked: true
        },
        methods: {
            wxcButtonClicked (e) {
                console.log(e)

                androidModule.startActivity({
                    url: 'http://192.168.1.246:8081/dist/test3.js',
                    title: '測試2',
                    action: 'TestActivity'
                });
            },
            onchange(e){
                this.checked = e.value;
                modal.toast({message: e.value})
            }
        },
        init: function () {
            console.log('xyz 在初始化内部变量，并且添加了事件功能后被触发');

            navigator.setNavBarHidden({
                hidden: 1
            }, function (xyz) {
                console.log("xyz  success：" + xyz)
            });
        },
        created: function () {
            console.log('xyz 完成数据绑定之后，模板编译之前被触发');
        },
        ready: function () {
            console.log('xyz 模板已经编译并且生成了 Virtual DOM 之后被触发');
            this.checked = true;
        },
        destroyed: function () {
            console.log('xyz 在页面被销毁时调用');
        }, onviewappear(){
            console.log("xyz   onviewappear")
        }, onviewdisappear(){
            console.log("xyz    onviewdisappear");
        }
    }
</script>