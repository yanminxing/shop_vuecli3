/*定义actions模块
* 即异步操作数据的模块，里面需要出发mutations*/

import {
    reqAddress,
    reqFoodList,
    reqShopList,
    reqUserInfo,
    reqLogout,
    reqShopFoods,
    reqShopInfo,
    reqShopEvaluates,
    reqSearchShop
} from "../api";
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
    //异步获取地址
    async getAddress({commit, state}){
        const geohash = state.latitude + "," + state.longitude;
        //异步获取数据
        const result = await reqAddress(geohash);
        //通过触发mutations更改state
        if(result.code === 0){
            const address = result.data;
            commit(RECEIVE_ADDRESS,{address});
        }
    },
    //异步获取食品分类
    async getFoodList({commit, state},callback){
        //异步获取数据
        const result = await reqFoodList();
        //通过触发mutations更改state
        if(result.code === 0){ //成功获取时
            const foodList = result.data;
            commit(RECEIVE_FOODLIST, {foodList});
        }
        callback && callback();
    },
    //异步商家列表
    async getShopList({commit, state},callback){
        //异步获取数据
        const {latitude,longitude} = state;
        const result = await reqShopList(longitude, latitude);
        //通过触发mutations更改state
        if(result.code === 0){ //成功获取时
            const shopList = result.data;
            commit(RECEIVE_SHOPLIST, {shopList});
        }
        callback && callback();
    },
    //同步获得用户的信息， 即将用户信息保存到state中。。。因为异步登录之后就获得了用户信息，这里不需要再异步获取
    recordUserInfo({commit, state}, userInfo){
        commit(RECEIVE_USERINFO, {userInfo});
    },
    //异步获取用户信息，主要是为实现一天以内自动登录的功能
    async getUserInfo({commit, state}){
        let result =  await reqUserInfo();
        if(result.code === 0){ //获取成功
            let userInfo = result.data;
            commit(RECEIVE_USERINFO, {userInfo});
        }
    },
    //异步退出登录
    async logout({commit}){
        let result = await reqLogout();
        if(result.code === 0){
            commit(RESET_USERINFO);
        }
    },
    //异步获取商家点菜列表
    async getFoods({state, commit}, callback){
        let result = await reqShopFoods();
        if(result.code ===0){
            let foods = result.data;
            commit(RECEIVE_FOODS, {foods});
        }
        //数据更新之后通知组件
        callback && callback(); //该参数可传可不传的设置
    },
    //重置商家食品列表  同步删除商家点菜列表缓存 使用部分数据持久缓存需要
    clearFoods({state, commit}){
        commit(RESET_FOODS);
    },
    //异步获取商家信息
    async getShopInfo({state, commit}, callback){
        let result = await reqShopInfo();
        if(result.code ===0){
            let info = result.data;
            commit(RECEIVE_INFO, {info});
        }
        callback && callback(); //该参数可传可不传的设置
    },
    //异步获取商家评价列表
    async getShopEvaluates({state, commit}, callback){
        let result = await reqShopEvaluates();
        if(result.code ===0){
            let evaluates = result.data;
            commit(RECEIVE_EVALUATES, {evaluates});
        }
        callback && callback(); //该参数可传可不传的设置
    },
    //同步修改y坐标
    changeYScroll({state, commit}, recruitScrollY){
        commit(RECEIVE_RECRUIT_SCROLLY, recruitScrollY);
    },
    //同步 更新购物数量 商家食物类中的每一个食物里添加一个购买数量count，购买加1,减1
    updateFoodCount({state, commit}, {isAdd, foodItem}){
        /*isAdd:布尔值，表示是否增加
        foodItem：一个具体食物li
        */
        if(isAdd){ //加1
            commit(INCREASE_FOOD_COUNT, {foodItem});
        }
        else {  //减1
            commit(REDUCE_FOOD_COUNT, {foodItem});
        }
    },
    //解决刷新时，购物车里面食物与商家食物失联的问题。
    foodsSyncShoppingCar({state, commit}){
        if(state.foods.length){ //foods有值时，才去同步
            commit(FOODS_SYNC_SHOPPING_CAR);
        }
    },
    //同步清空购物车 将购物车数组重置为0
    clearShoppingCar({state, commit},isAsyncFoods){
        if(state.shoppingCar.length > 0){
            commit(RESET_FOOD_COUNT,{isAsyncFoods});
        }
    },
    //同步更新 链接到食物详情食品数组  暂时不需要这个啦，留着过年
    updateNowShopFood({state, commit}, {isAdd, foodItem}){
        if(isAdd){ //添加一个
           //("添加一个foodItem");
            commit(INCREASE_FOOD_NOW, {foodItem});
        }
        else{  //删除，变为[]
            //console.log("删除一个foodItem");
            commit(REDUCE_FOOD_NOW);
        }
    },
    //异步获取搜索的商家列表
    async getSearchShops({state, commit}, {keyword}){
        let {latitude, longitude } = state;
        let result = await reqSearchShop(latitude + ","+ longitude, keyword);
        if(result.code === 0){
            let searchShopList = result.data;
            commit(RECEIVE_SEARCH_SHOP_LIST, {searchShopList});
        }
    },
    //获得当前的食品ID
    getIdNowShopFood({state, commit},foodId){
        //console.log(foodId);
        commit(RECEIVE_ID_NOW_SHOP_FOOD, {foodId});
    },
    ////获得当前的食品所在分类ID
    getIdClassNowShopFood({state, commit},foodClassId){
        //console.log("foodclassaaaa",foodClassId);
        commit(RECEIVE_ID_CLASS_NOW_SHOP_FOOD, {foodClassId});
    },
    ////重置当前的食品所在分类ID，食品id
    resetIdNowShopFood({state, commit}){
        commit(RESET_ID_NOW_SHOP_FOOD);
        commit(RESET_ID_CLASS_NOW_SHOP_FOOD);
    },
}