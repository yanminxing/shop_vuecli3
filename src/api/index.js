/*与后台进行交互的模块，就是请求模块*/
//返回的值依旧是promise实例
import ajax from "./ajax";

const baseUrl = process.env.NODE_ENV === 'production'? process.env.VUE_APP_BASE_URL: "/api"; //开发环境跨域引用
//const baseUrl = process.env.VUE_APP_BASE_URL; //生产环境/开发环境中引用
/*打包环境执行*/
// [1、根据经纬度获取位置详情]
export const reqAddress = (geohash) => ajax(`${baseUrl}/position/${geohash}`)
// [2、获取食品分类列表]
export const reqFoodList = function () {
    return ajax(`${baseUrl}/index_category`);  //ajax默认的是GET方式
}
// [3、根据经纬度获取商铺列表]
export const reqShopList = (longitude, latitude)=> ajax(`${baseUrl}/shops`,{latitude,longitude},"GET");//longitude为经度
// [4、根据经纬度和关键字搜索商铺列表]
export const reqSearchShop = (geohash, keyword) => ajax(`${baseUrl}/search_shops`, {geohash, keyword});
// [5、获取一次性验证码] 这个是不需要发起ajax请求的，直接通过img中src就可以获取
export const reqCaptcha = ()=> {
    return ajax(`${baseUrl}/captcha`);
}
// [6、用户名密码登陆]
export const reqLoginPwd = ({name, pwd, captcha})=> ajax(`${baseUrl}/login_pwd`,{name, pwd, captcha},"POST");
// [7、发送短信验证码]
export const reqSendCode = (phone)=> ajax(`${baseUrl}/sendcode`,{phone});
// [8、手机号验证码登陆])
export const reqLoginSms = (phone, code)=> ajax(`${baseUrl}/login_sms`,{phone, code}, "POST");
// [9、根据会话获取用户信息]
export const reqUserInfo = ()=> ajax(`${baseUrl}/userinfo`);
// [10、用户登出]
export const reqLogout = ()=> ajax(`${baseUrl}/logout`);


//使用ajax请求获取商家数据--获取商家信息(无proxy代理)
export const reqShopInfo = () => ajax("/info");
//使用ajax请求获取商家数据--获取点菜信息(无proxy代理)
export const reqShopFoods = () => ajax("/foods");
//使用ajax请求获取商家数据--获取商家信息(无proxy代理)
export const reqShopEvaluates = () => ajax("/evaluates");


/*
// [1、根据经纬度获取位置详情]
export const reqAddress = function (geohash) {
    return ajax(`/api/position/${geohash}`,{}, "GET");//或使用+拼接参数
}
export const reqAddress = (geohash) => ajax(`/api/position/${geohash}`)
// [2、获取食品分类列表]
export const reqFoodList = function () {
    return ajax("/api/index_category");  //ajax默认的是GET方式
}
// [3、根据经纬度获取商铺列表]
export const reqShopList = (longitude, latitude)=> ajax("/api/shops",{latitude,longitude},"GET");//longitude为经度
// [4、根据经纬度和关键字搜索商铺列表]
export const reqSearchShop = (geohash, keyword) => ajax("/api/search_shops", {geohash, keyword});
// [5、获取一次性验证码] 这个是不需要发起ajax请求的，直接通过img中src就可以获取
export const reqCaptcha = ()=> {
    return ajax("/api/captcha");
}
// [6、用户名密码登陆]
export const reqLoginPwd = ({name, pwd, captcha})=> ajax("/api/login_pwd",{name, pwd, captcha},"POST");
// [7、发送短信验证码]
export const reqSendCode = (phone)=> ajax("/api/sendcode",{phone});
// [8、手机号验证码登陆])
export const reqLoginSms = (phone, code)=> ajax("/api/login_sms",{phone, code}, "POST");
// [9、根据会话获取用户信息]
export const reqUserInfo = ()=> ajax("/api/userinfo");
// [10、用户登出]
export const reqLogout = ()=> ajax("/api/logout");
*/

/*
//使用ajax请求获取商家数据--获取商家信息(无proxy代理)
export const reqShopInfo = () => ajax("/info");
//使用ajax请求获取商家数据--获取点菜信息(无proxy代理)
export const reqShopFoods = () => ajax("/foods");
//使用ajax请求获取商家数据--获取商家信息(无proxy代理)
export const reqShopEvaluates = () => ajax("/evaluates");
*/
