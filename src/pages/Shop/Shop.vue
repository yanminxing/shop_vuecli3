<template>
    <div class="shop_container">
            <!--商家头部组件-->
            <ShopHeader v-on:isShow="showShopDetail=!showShopDetail"></ShopHeader>
            <!--商家二级路由导航-->
            <section class="shop_router_nav border-1px" v-if="!showShopDetail">
                <router-link to="/shop/orderFoods" class="nav_item" :class="{on: $route.path==='/shop/orderFoods'}" replace>
                    <span class="shop_group" :class="{group_on: $route.path==='/shop/orderFoods'}">点菜</span>
                </router-link>
                <router-link to="/shop/shopEvaluate" class="nav_item" :class="{on: $route.path==='/shop/shopEvaluate'}" replace><!---->
                    <span class="shop_group" :class="{group_on: $route.path==='/shop/shopEvaluate'}">评价</span>
                    <span class="ratings_num">{{totalEvaluates}}</span>
                </router-link>
                <router-link to="/shop/shopInfo" class="nav_item" :class="{on: $route.path==='/shop/shopInfo'}" replace>
                    <span class="shop_group" :class="{group_on: $route.path==='/shop/shopInfo'}">商家</span>
                </router-link>
            </section>
            <section v-if="!showShopDetail">  <!--我就是个包裹容器，来判断是否显示路由-->
                <keep-alive :include="['OrderFoods', 'ShopEvaluate']" ><!---->
                    <router-view></router-view><!--这里不能有这个判断语句判断是否显示路由,需要在外层判断，因为里面的v-if判断的是是否需要缓存-->
                </keep-alive>
            </section>
        </div>
</template>

<script>
    import ShopHeader from "../../components/ShopHeader/ShopHeader";
    import ShopDetail from "../../components/ShopDetail/ShopDetail";
    import {mapState} from "vuex";
    export default {
        name: "Shop",
        components: {
            ShopHeader,
            ShopDetail
        },
        data(){
            return{
                showShopDetail: false //是否显示商家详情（即点下拉那个），false表示不显示
            }
        },
        computed:{
            ...mapState(["evaluates"]),
            totalEvaluates(){
                return this.evaluates.length;
            }
        },
       mounted(){
           this.$store.dispatch("getShopEvaluates");
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./css/shop.styl"
</style>