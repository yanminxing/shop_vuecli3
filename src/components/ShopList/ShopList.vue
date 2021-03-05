<template>
    <!--商家列表组件-->
    <div class="shop_list">
        <div class="shop_title">
            <i class="iconfont icon-liebiao"></i>
            <span class="shop_title_text">
                    附近商家
                </span>
        </div>
        <!--商家列表组件-->
        <div class="shop_container">
            <!--异步获取商家列表-->
            <ul class="shops" v-if="shopList.length>0">
                <li class="shop_item" v-for="(shop,index) in shopList" :key="index">
                    <router-link to="/shop">  <!---->
                            <div class="shop_logo">
                                <img v-lazy="shop.image_path" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        {{shop.name}}
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee" v-for="(item, index2) in shop.supports" :key="index2">
                                            {{item.icon_name}}
                                        </li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <!--显示一个黄星-->
                                    <div class="shop_star_container">
                                    <span class="star_item">
                                        <i class="iconfont icon-xingxingxuanzhongzhuangtai"></i>
                                    </span>
                                    </div>
                                    <span class="shop_score">
                                        {{shop.rating}}分
                                    </span>
                                    <span class="order_number">
                                        月售{{shop.recent_order_num}}单
                                    </span>
                                    <span class="shop_delivery">
                                        {{shop.delivery_mode.text}}
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        ￥{{shop.float_minimum_order_amount}}元起送
                                    </span>
                                    <span class="delivery_pay">
                                        {{shop.piecewise_agent_fee.tips}}
                                    </span>
                                </section>
                            </div>
                        </router-link>
                </li>
            </ul>
            <ul v-else>  <!--在加载后台数据的时候，显示svg图片-->
                <li v-for="item in 10"> <!--显示10个这样的li-->
                    <img src="./image/shop_back.svg" alt="数据加载中">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
        name: "ShopList",
        data(){
            return{
            }
        },
        mounted() {
            this.$store.dispatch("getShopList")//调用该方法异步获得商家列表
        },
        computed:{
            ...mapState(["shopList"])//读取state更新之后的数据，并映射成计算属性
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./css/shopList.styl"
</style>