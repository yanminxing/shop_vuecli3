<template>
    <div class="evaluate_con">
        <div> <!--使用better-scroll时，第一个元素高度大于父元素高度时，可以滑动-->
            <!--商家总体评价-->
            <section class="total_ratings">
                <!--商家评价之左边分数与口味-->
                <div class="total_shop_rating">
                    <span class="shop_score">{{info.score}}</span>
                    <div class="shop_stars">
                        <span class="stars_text">商家评分</span>
                        <span class="stars_con">
                            <Stars :size="24" :score="info.score"></Stars>
                        </span>
                    </div>
                    <div class="shop_stars">
                        <span class="stars_text">口味</span>
                        <span class="stars_con">{{info.foodScore}}</span>
                    </div>
                    <div class="shop_stars">
                        <span class="stars_text">服务</span>
                        <span class="stars_con">{{info.serviceScore}}</span>
                    </div>
                </div>
                <!--商家评价之右边配送满意度-->
                <div class="shop_delivery">
                    <span class="delivery_text">配送满意度</span>
                    <span class="delivery_score">{{info.rankRate}}%</span>
                </div>
            </section>
            <section class="select_type_coon">
                <div class="select_type">
                    <span class="type_item" @click="changeType(3)" :class="{type_item_on:ratingType===3}">
                        全部{{evaluates.length}}
                    </span>
                    <span class="type_item" @click="changeType(2)" :class="{type_item_on:ratingType===2}">
                        最新
                    </span>
                    <span class="type_item" @click="changeType(0)" :class="{type_item_on:ratingType===0}">
                        好评{{ratingGood}}
                    </span>
                    <span class="type_item" @click="changeType(1)" :class="{type_item_on:ratingType===1}">
                        差评{{evaluates.length - ratingGood}}
                    </span>
                </div>
            </section>
            <section class="food_detali_rating" v-if="ratingFilterArr.length>0">
                <ul class="ratings">
                    <li class="rating_item border-1px" v-for="(rating, index) in ratingFilterArr" :key="index">
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
                            <span class="rating_time">{{new Date(rating.rateTime).toLocaleString()}}</span>
                        </div>
                        <span class="user_say_detail" v-if="rating.text">{{rating.text}}</span>
                        <div class="img_ul_li_con" v-if="rating.userShowImg.length>0">
                            <ul class="ul_img_con">
                                <li class="li_img_item" v-for="(item, indexImg) in rating.userShowImg">
                                    <img class="img_con" :src="item.userImgUrl" alt="">
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
    import BetterScroll from "better-scroll";
    import Stars from "../../../components/Stars/Stars";
    import {mapState} from "vuex";
    export default {
        name: "ShopEvaluate",
        data(){
            return{
                ratingType: 3, //评价按钮 0/1/2/3 好评//差评/最新/全部/
            }
        },
        computed:{
            ...mapState(["evaluates", "info"]),
            ratingGood(){
                return this.evaluates.reduce((acc, item, index)=>{
                    if(item.rateType === 0){
                        acc++;
                    }
                    return acc;
                }, 0);
            },
            //获得相应类型的数组
            ratingFilterArr(){
                let ratingArr = this.evaluates;
                let {ratingType} = this;
                if(ratingType === 2){
                    //需要浅拷贝，要不然原来数组会被修改
                    return ratingArr.concat().sort((a, b)=> b.rateTime - a.rateTime); //按时间错从大到小
                }
                else{
                    return ratingArr.filter((item, index)=>{
                        if(ratingType === 3){
                            return true;
                        }
                        else if(ratingType === 1){
                            return item.rateType === 1;
                        }
                        else if(ratingType === 0){
                            return item.rateType === 0;
                        }
                    });
                }
            }
        },
        methods:{
            changeType(ratingType){
                //类型转换
                this.ratingType = ratingType;
                //重新刷新一下滚动条
                this.$nextTick(()=>{
                    this.bs.refresh();
                });
            }
        },
        mounted(){
            this.$store.dispatch("getShopEvaluates",()=>{
                this.$nextTick(() => {
                    this.bs = new BetterScroll(".evaluate_con", {
                        click: true
                    });
                });
            });
        },
        components:{
            Stars
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "./css/evaluate.styl"
</style>
