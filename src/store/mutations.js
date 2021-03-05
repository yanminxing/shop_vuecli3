/*mutations：
同步更改state中数据的模块*/
import Vue from "vue";
import {
    RECEIVE_ADDRESS,
    RECEIVE_FOODLIST,
    RECEIVE_SHOPLIST,
    RECEIVE_USERINFO,
    RESET_USERINFO,
    RECEIVE_FOODS,
    RESET_FOODS,
    RECEIVE_INFO,
    RECEIVE_EVALUATES,
    RECEIVE_RECRUIT_SCROLLY,
    INCREASE_FOOD_COUNT,
    REDUCE_FOOD_COUNT,
    RESET_FOOD_COUNT,
    FOODS_SYNC_SHOPPING_CAR,
    INCREASE_FOOD_NOW,
    REDUCE_FOOD_NOW,
    RECEIVE_SEARCH_SHOP_LIST,
    RECEIVE_ID_NOW_SHOP_FOOD,
    RECEIVE_ID_CLASS_NOW_SHOP_FOOD,
    RESET_ID_NOW_SHOP_FOOD,
    RESET_ID_CLASS_NOW_SHOP_FOOD
} from "./mutation-types";

export default {
    //定义获得地址的函数
    [RECEIVE_ADDRESS](state, {address}) {
        state.address = address;
    },
    //定义获得食品分类的函数
    [RECEIVE_FOODLIST](state, {foodList}) {
        state.foodList = foodList;
    },
    //定义获得商家列表的函数
    [RECEIVE_SHOPLIST](state, {shopList}) {
        state.shopList = shopList;
    },
    //将用户信息保存到state中，即更新用户信息}
    [RECEIVE_USERINFO](state, {userInfo}){
        state.userInfo = userInfo;
    },
    //重置用户信息
    [RESET_USERINFO](state){
        state.userInfo = {};
    },
    //将商家食品信息保存到state中
    [RECEIVE_FOODS](state, {foods}){
        state.foods = foods;
    },
    //将商家食品信息重置
    [RESET_FOODS](state){
        state.foods.splice(0);
    },
    //将商家信息保存到state中
    [RECEIVE_INFO](state, {info}){
        state.info = info;
    },
    //将商家评价信息保存到state中
    [RECEIVE_EVALUATES](state, {evaluates}){
        state.evaluates = evaluates;
    },
    //页面滑动时，更新页面的y坐标
    [RECEIVE_RECRUIT_SCROLLY](state, {recruitScrollY}){
        state.recruitScrollY = recruitScrollY;
    },
    //添加购物count或者购物加1
    [INCREASE_FOOD_COUNT](state, {foodItem}){
        if(foodItem.count){  //count存在的时候
            foodItem.count++;
            /*bug:在mutation中更改count变化时添加食物到购物车判断也不行，因为这样会
            直接添加一个到购物车里面，而不是更改购物车里面的原来的项。*/
            /*if(state.shoppingCar.indexOf(foodItem) === -1){
                state.shoppingCar.push(foodItem);
            }*/
        }
        else{ //不存在，添加该属性
            //foodItem.count = 1; //存在的问题是：新添加的属性没有被劫持，即没有双向数据绑定，也就说是数据变化了，视图没有变化
            Vue.set(foodItem, "count", 1);//参数：对象、属性名（为字符串）、属性值
            //将该食物添加到购物车
            state.shoppingCar.push(foodItem);
        }
    },
    //解决刷新时，购物车里面食物与商家食物失联的问题。
    [FOODS_SYNC_SHOPPING_CAR](state){
        state.foods.forEach((classFood, index)=>{
            classFood.foods.forEach((foodItem, indexFood)=>{
                if(foodItem.count > 0){
                    state.shoppingCar.push(foodItem);
                }
            });
        });
    },
    //购物count或者购物减1
    [REDUCE_FOOD_COUNT](state, {foodItem}){
        if(foodItem.count){  //count存在的时候,或者说大于0的时候
            foodItem.count--;
            if(foodItem.count === 0){ //将该食物从购物车中移除，后续做
                state.shoppingCar.splice(state.shoppingCar.indexOf(foodItem),1);
            }
        }
    },
    //重置购物车 ，清空购物车
    [RESET_FOOD_COUNT](state,{isAsyncFoods}){//isAsycFoods表示是否是同步食物列表与购物车
        //因为不止路由跳转时调用，在购物车列表里面也调用，必须对列表里面食物的count进行清零
       if(!isAsyncFoods){//不同步的时候，才需要将count清0
           state.shoppingCar.forEach((value, index)=>{
               value.count = 0; //清零
               //console.log("将count清0");
           });
       }
        if(state.shoppingCar.length > 0){
            //console.log("清除购物车");
            state.shoppingCar.splice(0);//删除数组所有项，并改变数组
        }
    },
    //链接到食物详情食品数组中添1项
    [INCREASE_FOOD_NOW](state, {foodItem}){
        //console.log("链接到食物详情食品数组中添1项");
        state.nowShopFood.push(foodItem);
    },
    //链接到食物详情食品数组中减1项
    [REDUCE_FOOD_NOW](state){
        //console.log("链接到食物详情食品数组中减1项");
        if(state.nowShopFood.length > 0){
            state.nowShopFood.pop();
        }
    },
    //搜索获取商家列表将其保存在搜素页面
    [RECEIVE_SEARCH_SHOP_LIST](state, {searchShopList}){
        state.searchShopList = searchShopList;
    },
    //获得当前的食品ID
    [RECEIVE_ID_NOW_SHOP_FOOD](state, {foodId}){
        state.idNowShopFood = foodId;
        //console.log("____foodId",foodId);
    },
    //获得当前的食品所在分类ID
    [RECEIVE_ID_CLASS_NOW_SHOP_FOOD](state, {foodClassId}){
        state.idClassNowShopFood = foodClassId;
        //console.log("____idClassNowShopFood",state.idClassNowShopFood);
    },
    //重置当前的食品ID
    [RESET_ID_NOW_SHOP_FOOD](state){
        state.idNowShopFood = 0;
    },
    //重置当前的食品所在分类ID
    [RESET_ID_CLASS_NOW_SHOP_FOOD](state){
        state.idClassNowShopFood = 0;
    },
}
