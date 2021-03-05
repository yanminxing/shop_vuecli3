<template>
    <div id="app">
        <!--<ProfileStatic></ProfileStatic>-->
        <!--<MSiteStatic></MSiteStatic>-->
        <keep-alive include="Msite">  <!--将首页缓存起来，方便进入商家列表以后，还能回到原来的位置-->
            <router-view></router-view>  <!--显示路由组件-->
        </keep-alive>
        <FooterGuide v-show="this.$route.meta.isShowFooter"></FooterGuide> <!--显示底部路由的导航-->
    </div>
</template>

<script>
    import FooterGuide from "./components/FooterGuide/FooterGuide";
    import HeaderTop from "./components/HeaderTop/HeaderTop";

    export default {
        components:{
            FooterGuide,
            HeaderTop
        },
        created() {
            //bug:在页面刷新时，重置购物车，清空购物车,此时还不行，还需要将食物foods里面所有的count大于0食物进行置0
            /* window.addEventListener("beforeunload",()=>{
                 this.$store.dispatch("clearShoppingCar");
             })*/
            /*通过这个解决页面刷新时，购物车（已经存在的食物与食物列表里面的失联了）与食物里面的食品指向不同的对象方法。
            * 解决方法：在页面刷新的时候，遍历所有的食物，将count值大于0的时候，添加到购物车里面。*/
            window.addEventListener("load",()=>{ //beforeunload这个事件不行
                //先清空购物车
                this.$store.dispatch("clearShoppingCar",true);
                //再同步购物车与食物列表中有count>0的食物
                this.$store.dispatch("foodsSyncShoppingCar");
            });
        },
        async mounted() {
            //用于实现自动登录功能
            this.$store.dispatch("getUserInfo");//刷新的时候，会重新获取用户的信息
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #app
        width 100%
        height 100%
        background-color #f5f5f5
        /*当触控事件发生在元素上时，不进行任何操作。*/
        touch-action none /*解决点击事件Unable to preventDefault inside错误。添加这个，这样任何触摸事件都不会产生默认行为，但是 touch 事件照样触发*/
        /*滚动类*/
        overflow-x hidden /*禁止横向滚动条*/
        /*Firefox隐藏滚动条*/
        scrollbar-width none
        -ms-overflow-style none/*IE 10+隐藏滚动条*/
        &::-webkit-scrollbar/*chrome 和Safari隐藏滚动条*/
            width 0 !important
</style>
