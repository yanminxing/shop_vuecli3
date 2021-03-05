<template>
    <!--屏幕以iPhone6/7/8 Plus为尺寸，即414*736-->
    <!--首页的头部-->
    <header class="header_top">
        <!--使用v-slot来实现类似标题,主要用途是：为可能存在的内容的地方占炕-->

        <!--方法1代码：使用v-slot实现插入标签，使用prop实现父组件向子组件传递值-->
        <!--<slot name="headerResearch"></slot>
        <span class="headerTitle">
            <span class="headerTitleText ellipsis">{{title}}</span>
        </span>
        <slot name="headerLogin"></slot>-->

        <!--方法2代码：使用v-slot实现具名、作用域插槽-->
        <slot name = "headerResearch"></slot>
        <slot name = "headTitle" v-bind:titleList = "titleList"></slot>
        <slot name = "headerLogin"></slot>
        <!--原来的静态代码-->
        <!--<a href="" class="header_search">
            <i class = "iconfont icon-sousuo"></i>
        </a>
        <a href="" class="header_title">
            <span class = "header_title_text ellipsis">湖北省武汉市武昌区和平大道659号</span>
        </a>
        <a href="" class="header_login">
            <span class="header_login_text">登录|注册</span>
        </a>-->
    </header>
</template>

<script>
    export default {
        name: "HeaderTop",
        data(){
            return {
                titleList: {
                    "mSiteTitle": {title: "湖北省武汉市武昌区和平大道6952号"},
                    "searchTitle": {title: "搜索"},
                    "orderTitle": {title: "订单"},
                    "profileTitle": {title: "个人中心"}
                }
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./css/headerTop.styl"
</style>