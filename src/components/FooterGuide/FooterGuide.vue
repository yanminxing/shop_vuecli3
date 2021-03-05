<template>
    <!--底部路由的导航-->
    <footer class="footer_container border-1px">
        <!--因为在vue中可以通过方法来进行路由的切换，这里不必使用a标签，可以添加点击事件-->
        <!--底部导航之首页-->
        <div class="footer_item" :class="{on: isCurrentRoute('/msite')}" @click="routerGoTo('/msite')">
            <!--在静态页面上，添加动态的class，添加路由跳转事件-->
            <span class="footer_icon">
                <i class="iconfont icon-shouye2"></i>
            </span>
            <span class="footer_text">
                首页
            </span>
        </div>
        <!--底部导航之搜索-->
        <div class="footer_item" :class="{on: isCurrentRoute('/search')}" @click="routerGoTo('/search')">
            <!--在静态页面上，添加动态的class，添加路由跳转事件-->
            <span class="footer_icon">
                <i class=" iconfont icon-fangdajing"></i>
            </span>
            <span class="footer_text">
                搜索
            </span>
        </div>
        <!--底部导航之订单-->
        <div  class="footer_item" :class="{on: isCurrentRoute('/order')}" @click="routerGoTo('/order')">
            <!--在静态页面上，添加动态的class，添加路由跳转事件-->
            <span class="footer_icon">
                <i class=" iconfont icon-order_icon"></i>
            </span>
            <span class="footer_text">
                订单
            </span>
        </div>
        <!--底部导航之个人中心-->
        <div class="footer_item" :class="{on: isCurrentRoute('/profile')}" @click="routerGoTo('/profile')">
            <!--在静态页面上，添加动态的class，添加路由跳转事件-->
            <span class="footer_icon">
                <i class=" iconfont icon-gerenzhongxin"></i>
            </span>
            <span class="footer_text">
                个人中心
            </span>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "FooterGuide",
        methods:{
            /*作用：用来动态切换class，判断当前的路由与传进来的路由是不是一样*/
            isCurrentRoute(path){
                return this.$route.path === path  /*this.$route获得当前路由*/
            },
            /*作用：路由跳转，使用$router.replace不会向history添加记录*/
            routerGoTo(path){
                this.$router.replace(path)  /*this.$router路由实例，里面有很多api*/
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "css/footerGuides.styl"
</style>