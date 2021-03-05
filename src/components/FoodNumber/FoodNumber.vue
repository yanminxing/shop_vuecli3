<template>
    <div class="buy_num_con">
        <span class="iconfont_con_1" @click.stop="updateFoodCount(false)" v-show="foodItem.count">
            <i class="iconfont icon-jian1"></i>
        </span>
        <span class="buy_num" v-show="foodItem.count">{{foodItem.count}}</span>
        <span class="iconfont_con_2" @click.stop="updateFoodCount(true)">
            <i class="iconfont icon-jia"></i>
        </span>
    </div>
</template>

<script>
    export default {
        name: "FoodNumber",
        props:{
            foodItem: Object //从父组件哪里得来的每一个食品（右边每一个li中的一个食品）
        },
        methods:{
            updateFoodCount(isAdd){
                //console.log("添加食物");
                this.$store.dispatch("updateFoodCount",{isAdd, foodItem: this.foodItem});
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./css/foodNumber.styl"
</style>