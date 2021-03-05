<template>
    <!--显示星星（即评分中的星星，只有三种，黄星，半黄星，灰色的星星）-->
    <div class="stars_container" :class="`star-${size}`">
        <span class="star-item" v-for="(value, index) in starClasses" :key="index" :class="value"></span>
    </div>
</template>

<script>
    export default {
        name: "Stars",
        props:{
            size: Number, /*图片尺寸*/
            score: Number  /*分数，根据分数显示星星*/
        },
        mounted() {
            //console.log(this.size,this.score);
        },
        computed:{
            starClasses(){
                //根据分数显示星星的类名数组
                let score = this.score;
                let arr = [];
                let scoreInt = Math.floor(score); //向下取整
                //显示黄星(n个)
                for(let i = 0; i < scoreInt; i++){
                    arr.push("on");//添加class“on”
                }
                //显示半星(0-1个)
                if(score * 10 - scoreInt * 10> 5){//js中小数计算不是很准确,所以乘以10倍
                    arr.push("half");//添加class“half”
                }
                //显示灰色星星(n个)
                while (arr.length < 5){
                    arr.push("off");//添加class“off”
                }
                return arr;
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./css/stars.styl"
</style>