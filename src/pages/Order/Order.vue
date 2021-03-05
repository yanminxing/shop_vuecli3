<template>
    <div class="order_page">
        <HeaderTop>
            <template v-slot:headTitle="{titleList}">
                <span class="header_title">
                    <span class = "header_title_text ellipsis">{{titleList.orderTitle.title}}</span>
                </span>
            </template>
        </HeaderTop>
        <!--<ShopCart :info="info"></ShopCart>-->
    </div>
</template>

<script>
    import HeaderTop from "../../components/HeaderTop/HeaderTop"
    import ShopCart from "../../components/ShopCart/ShopCart"
    import {mapState} from "vuex";
    export default {
        name: "Order",
        computed:{
            ...mapState(["info"]),
        },
        mounted() {
            this.$store.dispatch("getShopInfo");
        },
        components:{
            HeaderTop,
            ShopCart
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./css/order.styl"
</style>