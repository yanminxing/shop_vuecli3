<template>
    <div class="search_static">
        <HeaderTop>
            <template #headTitle="{titleList}">
                <span class="header_title">
                    <span class="header_title_text ellipsis">
                        {{titleList.searchTitle.title}}
                    </span>
                </span>
            </template>
        </HeaderTop>
        <!--<form> 标签用于创建供用户输入的 HTML 表单。-->
        <form action="#" class="search_form" @submit.prevent="search">
            <div class="input_container">
                <span class="input_icon">
                    <i class="iconfont icon-sousuo"></i>
                </span>
                <input type="search" placeholder="请输入商家名称" class="search_content" v-model="keyWord">
            </div>
            <button type="submit" class="summit_text">提交</button>
        </form>
        <div class="shop_container">
            <ul class="shops" v-if="searchShopList.length>0">
                <li class="shop_item" v-for="(shop,index) in searchShopList" :key="index">
                    <router-link :to="{path:'/shop', query:{id:shop.id}}">
                        <div class="shop_logo">
                            <img :src="imgBase+shop.image_path" alt="这里应该使用图片" >
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
                                    {{shop.piecewise_agent_fee.tips}}元
                                </span>
                            </section>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="noResult" v-if="emptyResult">
            温馨提示：没有相关店铺，请输入其他关键词
        </div>
    </div>
</template>

<script>
    import HeaderTop from "../../components/HeaderTop/HeaderTop";
    import {mapState} from "vuex";
    import BetterScroll from "better-scroll";
    export default {
        name: "Search",
        data(){
            return {
                keyWord: "",//搜索的关键词
                emptyResult: false, //结果是否为空 true为空， false为非空
                imgBase: "http://cangdu.org:8001/img/"  //图片基础地址
            }
        },
        computed:{
            ...mapState(["shopList","searchShopList"])
        },
        methods:{
            //搜索方法
            search(){ //
                let keyWord = this.keyWord.trim(); //去掉空格
                if(keyWord){
                    this.emptyResult = false;  //非空？？
                    this.$store.dispatch("getSearchShops", keyWord);
                }
            }
        },
        watch:{
            searchShopList(val){
                if(!val.length){ //数组长度为0
                    this.emptyResult = true; //则为空
                }
            }
        },
        components:{
            HeaderTop
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./css/search.styl"
</style>