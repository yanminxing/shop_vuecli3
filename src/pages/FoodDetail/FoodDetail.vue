<template>
    <div class="foods_details_con">
        <!--标题-->
        <section class="header">
            <a @click="goBackShop" class="shop_back" >
                <i class="iconfont icon-fanhui2"></i>
            </a>
            <span class="title">食物详情</span>
        </section>
        <div class="swapper_page" ref="foodDetail">
           <div> <!--多这个的用意是，将ref="foodDetail"这个div设置为滑动的父容器，使用滑动的原理是：
           父容器高度和宽度定死，第一个子元素的高度必须高于父容器才会滑动，所以将滑动内容全部放到第一个字元素里面-->
               <!--图片-->
               <section class="shop_header" >
                   <span :style="{backgroundImage: `url(${nowFood.icon})`}"></span>
               </section>
               <!--食物相关信息-->
               <section class="food_info_con">
                   <div class="shop_name">
                       {{nowFood.name}}
                   </div>
                   <div class="food_info">
                       月售{{nowFood.sellCount}}
                   </div>
                   <div class="food_item_price">
                       <span class="new_price">￥{{nowFood.price}}</span>
                       <span class="old_price" v-show="nowFood.oldPrice">￥{{nowFood.oldPrice}}</span>
                       <FoodNumber v-bind:foodItem="nowFood"></FoodNumber>
                   </div>
               </section>
               <!--商家描述-->
               <section class="food_details_info">
                   <div class="detail_title_text">
                       详情
                   </div>
                   <div class="food_set">
                       <span class="boss_say">掌柜描述：</span>
                       <span class="boss_say_text">
                            {{nowFood.setMeal}}
                        </span>
                   </div>
               </section>
               <!--外卖评价-->
               <section class="food_detali_rating" v-if="nowFood.ratings">
                   <div class="rating_title">外卖评价</div>
                   <ul class="ratings">
                       <li class="rating_item border-1px" v-for="(rating, index) in nowFood.ratings" :key="index">
                           <div class="user_rating">
                        <span class="user_icon">
                            <img :src="rating.avatar" alt="" class="img_con">
                        </span>
                               <div class="user_con">
                            <span class="user_name">
                                {{rating.username}}
                            </span>
                                   <span class="start_con" v-if="rating.score">
                                 <Stars :score="rating.score" :size="24"/>
                            </span>
                               </div>
                               <span class="rating_time">
                            {{new Date(rating.rateTime).toLocaleString()}}
                        </span>
                           </div>
                           <span class="user_say_detail">
                        {{rating.text}}}
                    </span>
                       </li>
                   </ul>
               </section>
           </div>
        </div>
        <!--显示购物车-->
        <ShopCart :info="info"></ShopCart>
    </div>
</template>

<script>
    import FoodNumber from "../../components/FoodNumber/FoodNumber";
    import ShopCart from "../../components/ShopCart/ShopCart";
    import {mapState} from "vuex";;
    import Stars from  "../../components/Stars/Stars";
    import BetterScroll from "better-scroll";
    export default {
        name: "FoodDetail",
        data(){
            return{
                foodItem:{},
            }
        },
        components:{
            FoodNumber,
            Stars,
            ShopCart
        },
        computed:{
            ...mapState(["nowShopFood", "info", "idNowShopFood", "idClassNowShopFood", "shoppingCar"]),
            nowFood(){
                return this.nowShopFood[this.nowShopFood.length-1];
            }
        },
        methods:{
            goBackShop(){
                //清空当前食品数组
                this.$store.dispatch("updateNowShopFood", {isAdd:false, foodItem:[]});
                ////重置当前的食品所在分类ID，食品id
                this.$store.dispatch("resetIdNowShopFood");
                //
                this.$router.push("/shop");
            }
        },
        created() {
            window.addEventListener("load",()=>{ //beforeunload这个事件不行
                let foodItem = null;
                this.shoppingCar.forEach((value, index)=>{
                    if(value.foodId === this.idNowShopFood){
                        this.$store.dispatch("updateNowShopFood",{isAdd: true, foodItem: value});
                    }
                });
            });
        },
        mounted() {
            this.$nextTick(() => {
                this.bs = new BetterScroll(this.$refs.foodDetail, {
                    click: true
                });
            });
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "./css/foodDetail.styl"
</style>