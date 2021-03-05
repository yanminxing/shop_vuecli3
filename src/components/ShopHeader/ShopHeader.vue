<template>
    <!--商家头部组件-->
    <section class="shop_header_container">
        <!--显示头部图片区域-->
        <section class="shop_header" :style="{backgroundImage: `url(${info.bgImg})`}">
            <a @click="goBackMsite" class="shop_back">
                <i class="iconfont icon-fanhui2"></i>
            </a>
            <!--暂时没有实现搜索-->
            <span class="shop_search">
                <i class="iconfont icon-sousuo"></i>
            </span>
        </section>
        <section class="link_detail" @click="toShopDetail">
           <!--商家名字等信息-->
           <div class="shop_title_container">
               <div class="shop_title_info">
                   <div class="shop_name ellipsis">{{info.name}}</div>
                   <ul class="shopper_info_container">
                       <li class="shopper_info">
                            <span class="title_star">
                                <i class="iconfont icon-xingxingxuanzhongzhuangtai"></i>
                            </span>
                           <span class="title_info_text">{{info.score}}分</span>
                       </li>
                       <li class="shopper_info">
                           <span class="title_info_text">月售{{info.sellCount}}单</span>
                       </li>
                       <li class="shopper_info">
                           <span class="title_info_text">配送约{{info.deliveryTime}}分钟（商家{{info.shopReadyTime}}分钟内出餐）</span>
                       </li>
                       <li class="shopper_info">
                           <span class="title_info_text">{{info.description}}</span>
                       </li>
                       <li class="shopper_info">
                           <span class="title_info_text">距离{{info.distance}}</span>
                       </li>
                   </ul>
               </div>
               <span class="shop_title_icon">
                <img alt="商家logo" class="shop_image" :src="info.avatar">
               </span>
           </div>
           <!--活动/满减专区-->
           <div class="food_discounts_container" v-if="!showDetail">
               <ul class="food_discounts" v-if="info.supports">
                   <li class="discounts_items border-1px" v-for="(items, index) in info.supports" :key="index">
                    <span class="items_dis" v-for="(item, index_2) in items" :key="index_2">
                        {{item.content}}
                    </span>
                   </li>
               </ul>
           </div>
           <!--公告专区-->
           <div class="shop_notices_con" v-show="!showDetail">
               <div class="shop_notices ellipsis">
                   公告：{{info.notice}}
               </div>
               <span class="icon_down">
                    <i class="iconfont icon-xiangxia"></i>
                </span>
           </div>
       </section>
        <!--点击标题等出现的扩展模块-->
        <section class="extend_modules_con" v-if="showDetail">
            <div class="extend_con">
                <!--折扣扩展模块-->
                <section class="discounts_extend_con">
                    <div class="discounts_extend">
                        <div class="discounts_name border-1px">优惠</div>
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
                <!--扩展模块--商家服务-->
                <section class="shop_server_con" v-if="info.shopService">
                    <div class="shop_server_name">商家服务</div>
                    <ul class="server_lists">
                        <li class="server_item border-1px" v-for="(item, index_service) in info.shopService" :key="index_service">
                            <ul class="items">
                                <li class="item_name_icon" v-if="item.icon">
                                    <i class="iconfont" :class="item.icon"></i>
                                </li>
                                <li class="item_name">{{item.content}}</li>
                                <li class="item_question_mack" v-if="item.icon_help">
                                    <i class="iconfont" :class="item.icon_help"></i>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
                <!--扩展模块--商家公告-->
                <section class="shop_comment_extend">
                    <div class="comment_extend_name">
                        公告
                    </div>
                    <span class="comment_extend">
                    {{info.notice}}
                </span>
                </section>
                <!--显示上拉图标-->
                <section class="shop_up_icon" @click="notShopDetail">
                    <i class="iconfont icon-ziyuan"></i>
                </section>
            </div>
        </section>
    </section>

</template>

<script>
    import {mapState} from "vuex";
    export default {
        name: "ShopHeader",
        data(){
            return{
                showDetail: false, //false表示不显示详细信息
            }
        },
        computed:{
            ...mapState(["info","foods","evaluates","shoppingCar"]),
        },
        mounted(){
            this.$store.dispatch("getShopInfo");
        },
        methods:{
            //是否显示商家详细信息（不是商家那个路由）封装函数
            detail(){
                //
                this.showDetail = !this.showDetail;
                this.$emit("isShow", this.showDetail);//将其值传给父组件
            },
            //显示商家详细信息
            toShopDetail(){
                if(!this.showDetail){
                    this.detail();
                }
            },
            //不显示商家详细信息
            notShopDetail(){
                if(this.showDetail){
                    this.detail();
                }
            },
            goBackMsite(){
                if(this.foods.length > 0){ //foods存在，则清除
                    this.$store.dispatch("clearFoods");
                }
                if(this.shoppingCar.length > 0){ //foods存在，则清除
                    this.$store.dispatch("clearShoppingCar", false);
                }
                //this.$router.back();
                this.$router.push("/msite");
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "./css/shopHeader.styl"
</style>