<template>
    <!--商家路由--点菜路由组件-->
    <div class="order_foods">
        <!--左边菜单  注意这个div不要和下面的食物列表不要放在一个总的div（定义好食物组件的可视区域）里面，应该分开放
        ，不然容易报错，自己做的时候，找不出错误来。。。大概可能是样式以及div包裹方面-->
        <div class="food_order_container" v-if="foods" ref="foodList">
            <ul class="food_classes_list" id="food_classes_list">
                <li class="food_classes_item border-1px" v-for="(food, index) in foods" :key="index"
                    :class="{menu_on: curInfoIndex===index}" @click="leftClick(index)" ref="foodClassesItem">
                    <div class="classes_content">
                        <span class="classes_icon" v-if="food.classesIcon">
                            <i class="iconfont" :class="food.classesIcon"></i>
                        </span>
                        <span class="classes_name">{{food.name}}</span>
                    </div>
                    <div class="food_count_menu" v-if="carFoodEveryNum[index]">
                        <span class="foods_count">
                            {{carFoodEveryNum[index]}}
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <!--右边食物-->
        <div class="food_wrapper" id="food_wrapper">
            <ul class="food_lists" ref="foodWrapper">
                <li class="food_item" v-for="(food, index) in foods" :key="index">
                    <div class="food_item_name_con">
                        <span class="food_item_name">{{food.name}}</span>
                    </div>
                    <ul class="food_item_detail" v-for="(foodItem, index) in food.foods" :key="index"
                        @click="toFoodDetail(true, foodItem, food)">
                        <li class="food_item_icon">
                            <img :src="foodItem.image" alt="这里食物图片" class="img_class">
                        </li>
                        <li class="food_item_content">
                            <div class="food_item_name">{{foodItem.name}}</div>
                            <div class="food_item_describe" v-show="foodItem.setMeal">
                                {{foodItem.setMeal}}
                            </div>
                            <div class="food_item_rate">
                                <span class="monthly_sales">月售{{foodItem.sellCount}}单</span>
                                <span class="praise_rate">好评率{{foodItem.rating}}%</span>
                            </div>
                            <div class="food_item_price">
                                <span class="new_price">￥{{foodItem.price}}</span>
                                <span class="old_price" v-show="foodItem.oldPrice">￥{{foodItem.oldPrice}}</span>
                                <FoodNumber v-bind:foodItem="foodItem"></FoodNumber>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- 底部购物车___点菜统计付款那块-->
        <ShopCart :info="info" v-if=""></ShopCart>
    </div>
</template>

<script>
    import {mapState, mapGetters} from "vuex";
    import BetterScroll from "better-scroll";
    import FoodNumber from "../../../components/FoodNumber/FoodNumber";
    import ShopCart from "../../../components/ShopCart/ShopCart";
    export default {
        name: "OrderFoods",
        data(){
            return{
                itemImgLoad: 0, //加载图片的个数
                rightScrollY: 0, //右边食品滚动的y坐标，其实负数，但是这里通过取反获得正
                rightTopY: [], //保存右边食品中每一个li（每一类食品的顶点y坐标）
            }
        },
        computed:{
            ...mapState(["foods", "info", "nowShopFood"]),
            ...mapGetters(["carFoodEveryNum"]),
            //通过右边食品的滚动坐标rightScrollY得到index（数组的下标，其实左边食物列表和右边的食品都来自一个数组info）
            curInfoIndex(){
                let {rightScrollY, rightTopY} = this;
                let index = rightTopY.findIndex((value, index) => { //找到满足滚动rightScrollY值在两个顶点范围之内的第一个值下标
                    this._leftScroll(index);//右侧滚动时候，实现左侧的联动，
                    return (rightScrollY >= value) && (rightScrollY < rightTopY[index + 1]); //大于等于当前值，并比下一个值小
                })
                //console.log("下标的变化",index)
                return index;
            }
        },
        methods:{
            //初始化BetterScroll（即滚动）并添加监听
            initBS(){
                //左边分类的初始化
                this.bs = new BetterScroll('.food_order_container', {
                    movable: true,
                    zoom: true,
                    scrollY:true, //y轴滚动
                });
                //右边食物滚动的初始化
                this.btsl = new BetterScroll('.food_wrapper', {
                    movable: true,
                    scrollY:true ,//y轴滚动
                    zoom: true,
                    probeType: 2,  // 手指滑动，滚性滑动和编写滑动不会触发
                    click: true  //点击
                });
                //右边正在滚动时监听 主要是获得实时的y值
                this.btsl.on("scroll",(position) => {
                    //console.log("右边滑动的位置",position.x, position.y);
                    this.rightScrollY = Math.abs(position.y);  //取绝对值
                });
                //解决probeType: 2时，惯性滑动得不到最终y值
                this.btsl.on("scrollEnd", (position)=>{
                    //console.log("滑动结束", -position.y);
                    this.rightScrollY = Math.abs(position.y); //记得取绝对值
                });
            },
            //计算右边食品中每一个li（每一类食品的顶点y坐标）
            computeRightTop(){
                let top = 0; //初始化为0
                this.rightTopY.push(top);
                let lis = this.$refs.foodWrapper.getElementsByClassName("food_item"); //获得右边所有的li类数组对象
                //对所有的li进行遍历 并进行操作
                [].slice.call(lis).forEach((value, index)=>{
                    top += value.clientHeight; //value.clientHeight为元素的高度，包括padding但是不包括border？？
                    this.rightTopY.push(top);  //也就是说，数组的个数是li个数加1，
                });
                //console.log("右边的顶点集",this.rightTopY);
            },
            //左边点击
            leftClick(index){
                let y = this.rightTopY[index]; //得到右边的y应该到的坐标,为正
                this.rightScrollY = y;  //更新右边滚动y坐标
                this.btsl.scrollTo(0, -y, 300); //滑到相应位置
            },
            //右侧滚动时候，实现左侧的联动，
            _leftScroll(index) {
                let meneList = this.$refs.foodClassesItem;
                // console.log("左侧", index, meneList);
                let el = meneList[index];
                this.bs.scrollToElement(el, 300, 0, -100);
            },
            //点击食物跳转到食物详情页面
            toFoodDetail(isAdd, foodItem, food){
                //保存对应的食品到当前的食品中（使用数组来保存）,但是到了跳转的页面刷新之后，该数据没了
                this.$store.dispatch("updateNowShopFood",{isAdd, foodItem});
                //但是到了跳转的页面刷新之后，该数据没了
                //this.$EventBus.$emit("saveNowShopFood",foodItem);
                //将foodItem保存，以便跳转到详情页面还能使用该数据
                //let food =  JSON.stringify(foodItem); //需要将其转为格式化字符串，要不然后面获取的时候，得到的是[object Object]
                //sessionStorage.setItem("foodItem", food);
                //路由跳转  因为路由跳转的时候，不能携带对象，或者说携带了对象，但是会转义成字符串

                /*在食物详情页面中，开始的时候，购物车里面有该食物，当强制刷新之后，该事物与购物车里面的食物没有联动啦
                （也就是说一个改变，另外一个不改变）。换句话说，同样都是使用createPersistedState保存数据
                （state中的shoppingCar: val.shoppingCar, nowShopFood: val.nowShopFood都是来自
                同一个食物列表，可是一刷新之后，他们就断了联系。刷新前是浅复制，刷新之后感觉是深拷贝）。*/
                this.$store.dispatch("getIdNowShopFood", foodItem.foodId);
                this.$store.dispatch("getIdClassNowShopFood", food.foodClassId);
                this.$router.push("/foodDetail");
            },
            //测试获取滚动区域的可见高度
            testHeight(){
                /*clientHeight获取元素的实际高度（如果设置好了高度，那么就是这个可视的高度，
            如果在设置了高度的父容器里面有高度随内容变化的子元素，那么该子元素高度为内容实际的高度）
            注意：若直接放在mouted里面，的内容随高度变化的子元素需要放在数据加载之后才能获得正确的高度，即应该放在this.$store.dispatch("getFoods"回调函数里
            而不应该放在这里*/
                console.log("左边div高度",this.$refs.foodList.clientHeight);
                console.log("左边边ui高度",document.getElementById("food_classes_list").clientHeight)
                console.log("右边ui高度",this.$refs.foodWrapper.clientHeight)
                console.log("右边div高度",document.getElementById("food_wrapper").clientHeight)
            }
        },
        mounted() {
            if(this.foods.length > 0){ //foods已经被缓存了，则不需要从后台获取该数据
                this.$nextTick(()=>{//数据加载完之后渲染视图，视图第一次渲染结束后执行回调？？？
                    this.initBS(); //滑动初始化以及事件监听
                    this.computeRightTop(); //收集右边li的顶点，其中第一个是0，第二个是第一个li的高度，共有li个数加1个
                });
            }
            else{ //否则需要从后台获取数据
                this.$store.dispatch("getFoods",()=>{
                    this.$nextTick(()=>{//数据加载完之后渲染视图，视图第一次渲染结束后执行回调？？？
                        this.initBS(); //滑动初始化以及事件监听
                        this.computeRightTop(); //收集右边li的顶点，其中第一个是0，第二个是第一个li的高度，共有li个数加1个
                        //this.testHeight();
                    });
                });
            }
            this.$store.dispatch("getShopInfo");
        },
        components:{
           FoodNumber,
           ShopCart
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./css/orderFoods.styl"
</style>