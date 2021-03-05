/*state模块
唯一的公共数据源*/
export default {
    latitude: 30.10038, //纬度 ,
    longitude: 114.36867, //经度
    address: {}, //地址信息，经纬度
    foodList: [], //食品分类列表
    shopList: [],//商铺列表
    userInfo: {}, // 用户信息，包括id等
    foods: [], //点菜列表
    info: {}, //商家信息
    evaluates: [], //评价列表
    recruitScrollY: 0, //定义页面的y坐标
    shoppingCar:[], //购物车 也可以在食品组件中通过监听食物列表里面的count变化，来获得计算获得当前购物车里面食物列表，再传给购物车子组件
    // 但是这样计算量特别大。所以这种通过vuex管理就很好方式特别好
    nowShopFood:[], //当前的商家食品详情数组，二维数组，最多有一项  链接到食物详情食品数组
    idNowShopFood: 0, //当前的商家食品详情食品ID
    idClassNowShopFood: 0, //当前的食品所在分类ID
    searchShopList:[], //搜索获取商家列表
}