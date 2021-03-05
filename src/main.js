import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "../static/css/reset.css" ; //全局引入reset.css文件，在index.html引入的时候,谷歌浏览器没用，火狐浏览器报错
import VueAwesomeSwiper from 'vue-awesome-swiper';//使用swiper库文件
import 'swiper/css/swiper.css';//使用swiper库文件
import {Button} from "mint-ui";
import 'mint-ui/lib/style.css';  //需要引入这个样式，否则无法使用mint-ui的样式
import "./mock/mockServer.js";  //全局引入mock数据
import VueLazyload from 'vue-lazyload'; //优化：图片加载
import loadingImg from "./common/image/loading.gif"
import axios from 'axios';

//基础路径地址可以在env中配置
/*/!*第一层if判断生产环境和开发环境*!/
if (process.env.NODE_ENV === 'production') {
    /!*第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境*!/
    if (process.env.VUE_APP_FLAG === 'pro') {
        //production 生产环境
        //axios.defaults.baseURL = 'http://api.xinggeyun.com';
        axios.defaults.baseURL = 'http://192.168.0.102:5000';

    } else {
        //test 测试环境
        axios.defaults.baseURL = 'http://192.168.0.102:5000';

    }
} else {
    //dev 开发环境
    axios.defaults.baseURL = '/api';
}*/
//全局注册miui-ui中的组件
Vue.component(Button.name, Button);
Vue.use(VueAwesomeSwiper) //使用swiper插件
// 创建事件总线(全局性的事件总线S） ，在任何组件都可以使用
Vue.prototype.$EventBus = new Vue();
Vue.use(VueLazyload, {  //全局多了一个指令v-lazy
    loadingImg  //loading: 'dist/loading.gif',
});

new Vue({
    el: '#app',
    render: h => h(App),
    router, //注册路由
    store,  //注册store（vuex）
});