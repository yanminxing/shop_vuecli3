/*
路由对象模块
*/
/*引入库*/
import Vue from "vue"
import VueRouter from "vue-router"
/*模块使用路由四步走：1 定义路由组件，或者从地方引入*/
//优化：路由懒加载
const Msite = ()=> import("../pages/Msite/Msite");
const Order = ()=> import("../pages/Order/Order");
const Profile = ()=> import("../pages/Profile/Profile");
const Search = ()=> import("../pages/Search/Search");
const Login = ()=> import("../pages/Login/Login");
const UserInfo = ()=> import("../pages/UserInfo/UserInfo");
const Shop = ()=> import("../pages/Shop/Shop");
const OrderFoods = ()=> import("../pages/Shop/OrderFoods/OrderFoods");
const ShopEvaluate = ()=> import("../pages/Shop/ShopEvaluate/ShopEvaluate");
const FoodDetail = ()=> import("../pages/FoodDetail/FoodDetail");
const ShopInfo = ()=> import("../pages/Shop/ShopInfo/ShopInfo");

/*import Msite from "../pages/Msite/Msite"
import Order from "../pages/Order/Order"
import Profile from "../pages/Profile/Profile"
import Search from "../pages/Search/Search"
import Login from "../pages/Login/Login"
import UserInfo from "../pages/UserInfo/UserInfo"
import Shop from "../pages/Shop/Shop"
import OrderFoods from "../pages/Shop/OrderFoods/OrderFoods"
import ShopEvaluate from "../pages/Shop/ShopEvaluate/ShopEvaluate"
import ShopInfo from "../pages/Shop/ShopInfo/ShopInfo"
import FoodDetail from "../pages/FoodDetail/FoodDetail"*/

//用于测试静态路由组件
import ShopStatic from "../staticVue/ShopStatic/ShopStatic"

/*解决一下报错问题：下面三行语句解决报错问题
* Uncaught (in promise) NavigationDuplicated
* {_name: “NavigationDuplicated”, name: "NavigationDuplic}的报错问*/
/*或者错误
Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to curren。。
* */
const originalPush = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalPush.call(this, location).catch(err => err)
}

/*声明使用路由插件*/
Vue.use(VueRouter);

//向外暴露路由组件
/*模块使用路由四步走：3 创建 router 实例，然后传 `routes` 配置*/
export  default new VueRouter({
    routes:[
        /*模块使用路由四步走： 2. 定义路由.每个路由应该映射一个组件。(这里其实可以抽到外面定义)*/
        {/*默认路由*/
            path: "/",
            redirect: "/msite"
        },
        {
            path: "/msite",
            component:Msite,
            meta:{
                isShowFooter: true,
                keepAlive: true, //需要缓存
            }
        },
        {
            path: "/order",
            component:Order,
            meta:{
                isShowFooter: true
            }
        },
        {
            path: "/profile",
            component:Profile,
            meta:{
                isShowFooter: true,
            }
        },
        {
            path: "/search",
            component:Search,
            meta:{
                isShowFooter: true
            }
        },
        {
            path: "/login",
            component:Login,
            meta:{
                isShowFooter: false
            }
        },
        {
            path: "/user_info",
            component:UserInfo,
            meta:{
                isShowFooter: false
            }
        },
        {
            path: "/shop",
            name: "Shop",
            component: Shop,
            children: [
                {
                    path: "/shop/orderFoods",
                    component: OrderFoods,
                    name: "OrderFoods",
                    meta: {
                        keepAlive: true  //需要被缓存
                    }
                },
                {
                    component: ShopEvaluate,
                    path: "/shop/shopEvaluate",
                    name: "ShopEvaluate",
                    meta: {
                        keepAlive: false
                    }
                },
                {
                    component: ShopInfo,
                    path: "/shop/shopInfo",
                    name: "ShopInfo",
                    meta: {
                        keepAlive: false
                    }
                },
                {
                    path: "",
                    redirect: "/shop/orderFoods"
                }
            ]
        },
        {
            path: "/shopStatic",
            component: ShopStatic
        },
        {
            path: "/foodDetail",
            component: FoodDetail
        }
    ],
})
/*模块使用路由四步走： 4. 创建和挂载根实例。（在main.js中）*/

