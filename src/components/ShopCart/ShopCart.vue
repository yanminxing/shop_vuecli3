<template>
    <div class="food_car_all">
        <div class="car_no_food_con"  @click="toChangeShow">
            <div class="car_con" :class="{car_has_food: carFoodNums>0}">  <!--car_has_food-->
                <i class="iconfont icon-ziyuan1"></i>
                <div class="food_count_con" v-show="carFoodNums>0">
                   <span class="food_count">
                        {{carFoodNums}}
                   </span>
                </div>
            </div>
            <div class="need_money_con">
                <div class="money">￥{{carFoodPrices}}元</div>
                <div class="distribution_fee">预计另需配送费￥{{info.deliveryPrice}}元</div>
            </div>
            <span :class="payClass" @click.stop="">
                {{needMoney}}
            </span>
        </div>
        <div class="food_shop_detail" v-show="isShowCarList">
            <div class="car_detail-title border-1px">
                <span class="car_name">购物车</span>
                <transition name="clearCar">
                    <div class="clear_car_con" @click="clearShopCar">
                        <span class="clear_icon">
                            <i class="iconfont icon-qingkong"></i>
                        </span>
                        <span class="clear_car" @click="clearShoppingCar">
                            清空购物车
                        </span>
                    </div>
                </transition>
            </div>
            <div class="car_shop_list" @click="toChangeShow">
                <ul class="car_list_wrapper">
                    <li class="shop_item" v-for="(food, index) in shoppingCar" :key="index">
                       <span class="car_food_image">
                            <img :src="food.icon"
                                 alt="" class="foo_img">
                       </span>
                        <div class="car_food_detail_con border-1px">
                            <span class="car_food_name">{{food.name}}</span>
                            <div class="price_and_buy ">
                                <span class="now_price">
                                    ￥{{food.price}}元
                                </span>
                                <span class="old_price" v-if="food.oldPrice">
                                    ￥{{food.oldPrice}}元
                                </span>
                                <span class="car_buy_num">
                                    <FoodNumber :food-item="food"></FoodNumber>
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--购物车列表显示的时候，整个页面的显示效果-->
        <transition name="showList">
            <div class="food_list_show" v-show="isShowCarList" @click="toChangeShow"></div>
        </transition>
    </div>
</template>

<script>
    import FoodNumber from "../FoodNumber/FoodNumber";
    import {mapState, mapGetters} from "vuex";
    import BetterScroll from "better-scroll";
    export default {
        name: "ShopCart",
        data(){
            return{
                isShow: false, //是否显示购物车的列表
            }
        },
        props:{
            info: Object,  /*为了在另外一个组件也显示，所以从父组件传过来比较好,其实计算属性也可以的*/
        },
        computed:{
            ...mapState(["shoppingCar"]), //这个也可以由父组件传过来,但是这个缓存了，直接取就好了
            ...mapGetters(["carFoodNums", "carFoodPrices"]),//购物车里面食物总个数和总价格
            //购物车右边显示
            needMoney(){ //购物车右边显示 <!-- ￥20元起送 || 差￥15元起送 || 去结算-->
                let {carFoodPrices} = this;
                let minPrice = this.info.minPrice;
                if(carFoodPrices === 0){
                    return "￥20元起送";
                }
                else if(minPrice > carFoodPrices){
                    return `差￥${minPrice - carFoodPrices}元起送`;
                }
                else{
                    return "去结算";
                }
            },
            //购物车右边需要显示的动态class
            payClass(){
                let {carFoodPrices} = this;
                let {minPrice} = this.info;
                return  minPrice > carFoodPrices? "need_left_money": "to_pay_money";
            },
            //是否显示购物车列表
            isShowCarList(){
                //列表没有食物时，不显示
                let {carFoodNums} = this; //不知道为何，直接用this.carFoodNums作为判断条件有警告
                if(carFoodNums === 0){
                    //isShow为false
                    this.isShow = false;
                    return false;
                }
                //列表显示的时候，应该创建滑动
                if(this.isShow){
                    //在页面创建之后创建BetterScroll实例(有且只能有一个，要不然对列表操作会出错)
                    /*
                    * 单例：
                    1 创建前，判断是否存在，只有不存在的时候，才会创建
                    * 2 创建之后，保存*/
                    if(!this.bs){
                        this.$nextTick(()=>{
                            this.bs = new BetterScroll(".car_shop_list", {
                                click: true,
                                movable: true,
                                zoom: true
                            });
                        });
                    }
                    else{ //非首次打开 通知BetterScroll对象
                        this.bs.refresh();
                    }
                }
                //通过isShow控制
                return this.isShow;
            }
        },
        methods:{
            //清空购物车
            clearShopCar(){
            },
            //控制是否显示购物车列表
            toChangeShow(){
                if(this.carFoodNums > 0){  //只有购物车里面有食物才点击切换
                    this.isShow = !this.isShow;
                }
            },
            clearShoppingCar(){
                this.$store.dispatch("clearShoppingCar", false);
            }
        },
        components: {
            FoodNumber
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./css/shopCart.styl"
</style>