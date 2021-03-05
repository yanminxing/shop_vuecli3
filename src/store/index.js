/*定义store对象:
* 1 下载依赖vuex
* 2 定义store对象（本js定义）
* 3 全局注册store对象（main.js中注册）
* 4 使用store对象（各个组件都可以使用）*/

import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import createPersistedState from "vuex-persistedstate"; //做数据持久化或者部分数据持久化

Vue.use(Vuex);//声明使用插件

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins:[
        createPersistedState({  //做部分数据持久化
            storage: sessionStorage, //使用的存储方式，该方式在页面关闭之后清除数据
            reducer(val){
                return{
                    //数据的部分持久化，即只存储state中部分数据
                    shoppingCar: val.shoppingCar,
                    nowShopFood: val.nowShopFood,
                    foods: val.foods,
                    idNowShopFood: val.idNowShopFood,
                    idClassNowShopFood: val.idClassNowShopFood
                }
            }
        })
    ],
});