/*mutation type常量名称模块
* 即定义mutation中动态的函数名*/

export const RECEIVE_ADDRESS = "receive_address"; //接受地址的动态函数名
export const RECEIVE_FOODLIST = "receive_foodList"; //接受食物列表的动态函数名
export const RECEIVE_SHOPLIST = "receive_shopList"; //接受商铺列表的动态函数名
export const RECEIVE_USERINFO = "receive_userInfo"; //接受用户信息模块
export const RESET_USERINFO = "reset_userinfo"; //重置用户信息
export const RECEIVE_FOODS = "receive_foods"; //接受商家点菜信息
export const RESET_FOODS = "reset_foods"; //重置商家点菜信息（缓存需要）
export const RECEIVE_INFO = "receive_info"; //接受商家信息
export const RECEIVE_EVALUATES = "receive_evaluates"; //接受商家评价信息
export const RECEIVE_RECRUIT_SCROLLY = "receive_recruit_scrolly"// 接受页面的y坐标，或者说是y偏离
export const INCREASE_FOOD_COUNT = "increase_food_count"// 购买食物加1,操作购物车
export const REDUCE_FOOD_COUNT = "reduce_food_count"// 购买食物减1 操作购物车
export const RESET_FOOD_COUNT = "reset_food_count"// 清除购物车
export const FOODS_SYNC_SHOPPING_CAR = "foods_sync_shopping_car"// 购买食物加1,操作购物车
export const INCREASE_FOOD_NOW = "increase_food_now"// 链接到食物详情食品数组中添1项
export const REDUCE_FOOD_NOW = "reduce_food_now"// 链接到食物详情食品数组中减1项 将数组置为空
export const RECEIVE_SEARCH_SHOP_LIST = "receive_search_shop_list"// 搜索获取商家列表
export const RECEIVE_ID_NOW_SHOP_FOOD = "receive_id_now_shop_food"// 获得当前的食品ID
export const RESET_ID_NOW_SHOP_FOOD = "reset_id_now_shop_food"// 重置当前的食品ID
export const RECEIVE_ID_CLASS_NOW_SHOP_FOOD = "receive_id_class_now_shop_food"// 获得当前的食品所在分类ID
export const RESET_ID_CLASS_NOW_SHOP_FOOD = "reset_id_class_now_shop_food"// 重置当前的食品所在分类ID
