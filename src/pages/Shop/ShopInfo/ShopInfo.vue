<template>
    <div class="shop_info_con">
        <!--地址-->
        <section class="shop_address border-1px">
            <span class="address_icon">
                <i class="iconfont icon-dizhi"></i>
            </span>
            <span class="address">
                {{info.address}}
            </span>
            <span class="address_icon">
                <i class="iconfont icon-phone1"></i>
            </span>
        </section>
        <!--食品档案-->
        <section class="shop_safe border-1px">
            <span class="address_icon">
                <i class="iconfont icon-anquan1"></i>
            </span>
            <span class="address">
                  {{info.food_safe}}
            </span>
            <span class="address_icon">
                <i class="iconfont icon-jiantou"></i>
            </span>
        </section>
        <section class="void_ele"></section>
        <!--配送-->
        <section class="distribution_services border-1px">
            <span class="address_icon">
                <i class="iconfont icon-peisong1"></i>
            </span>
            <span class="address">
                  配送服务：由{{info.description}}提供配送服务
            </span>
        </section>
        <!--配送时间-->
        <section class="time_services">
            <span class="address_icon">
                <i class="iconfont icon-time_icon"></i>
            </span>
            <span class="address">
                  配送时间：{{info.workTime}}
            </span>
        </section>
        <section class="void_ele"></section>
        <!--公告-->
        <section class="time_services">
            <span class="address_icon">
                <i class="iconfont icon-gonggao"></i>
            </span>
            <div class="address ellipsis">
                {{info.notice}}
            </div>
        </section>
        <!--空-->
        <section class="void_ele"></section>
        <!--折扣扩展模块-->
        <section class="discounts_extend_con">
            <div class="discounts_extend">
                <ul class="discounts_list" v-if="info.discounts">
                    <li class="discounts_item" v-for="(items,index_dis) in info.discounts" :key="index_dis">
                        <div v-for="(item,index_it) in items" :key="index_it">
                            <span class="discounts_keyword">{{item.name}}</span>
                            <span class="discounts_detail">{{item.content}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
        name: "ShopInfo",
        computed:{
            ...mapState(["info"]),
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./css/shopInfo.styl"
</style>