<template>
    <!--首页的vue组件-->
    <div id="mSiteHtml" class ="m_site">
        <!--方法一：使用v-slot实现具名插槽、prop实现父传子-->
        <!--<HeaderTop title="外卖">
            <template v-slot:headerResearch>
                <router-link class="leftHeader" to="/search">
                    <span>
                      <i class="iconfont icon-sousuo"></i>
                    </span>
                </router-link>
            </template>
            <template v-slot:headerLogin>
                <router-link class="rightHeader" to="/login">
                    <span>登录|注册</span>
                </router-link>
            </template>
        </HeaderTop>-->
        <!--头部 方法2：使用v-slot实现具名、作用域插槽-->
        <!--<HeaderTop>
            <template v-slot:headerResearch>
                <router-link to = "/search" class="header_search">&lt;!&ndash;class是在模版里面对应的&ndash;&gt;
                    <span>
                      <i class="iconfont icon-sousuo"></i>
                    </span>
                </router-link>
            </template>
            &lt;!&ndash;作用域插槽：在父组件中访问子组件（插槽中）内部的一些可用数据。&ndash;&gt;
            &lt;!&ndash;<template #headTitle = "titleName">
                <span class = "headerTitle">{{titleName.titleList.mSiteTitle.title}}</span>
            </template>&ndash;&gt;

            &lt;!&ndash;解构插槽：可以使模板更简洁，尤其是在该插槽提供了多个 prop 的时候&ndash;&gt;
            <template #headTitle = "{titleList: titleName}" class="header_title">&lt;!&ndash;开启了 prop 重命名，例如将 titleList 重命名为 titleName&ndash;&gt;
                <span class="header_title">
                    <span class = "header_title_text ellipsis">{{titleName.mSiteTitle.title}}</span>
                </span>
            </template>
            &lt;!&ndash;具名插槽&ndash;&gt;
            <template #headerLogin>
                <router-link to = "/login" class="header_login"> &lt;!&ndash;模版里面的内容可以自定义，我这里是结合项目&ndash;&gt;
                    <span class="header_login_text">登录|注册</span>
                </router-link>
            </template>
        </HeaderTop>-->
        <!--头部部分-->
        <HeaderTop>
            <!--搜索-->
            <template v-slot:headerResearch><!--有多个插槽时，应该使用template当模版-->
                <!--router-link代替原来的a标签-->
                <router-link to="/search" class="header_search">
                    <i class = "iconfont icon-sousuo"></i>
                </router-link>
            </template>
            <!--title-->
            <template #headTitle="{titleList}"><!--作用域插槽，让父组件获得子组件的数据-->
                <!--这里是静态显示标题，后面需要注释掉-->
                <!--<span class="header_title"> &lt;!&ndash;这个标签代替原来的a标签，因为这里没有跳转&ndash;&gt;
                    <span class = "header_title_text ellipsis">{{titleList.mSiteTitle.title}}</span>
                </span>-->
                <!--异步显示标题,这里不需要从子组件读取数据-->
                <span class="header_title"> <!--这个标签代替原来的a标签，因为这里没有跳转-->
                    <span class = "header_title_text ellipsis">{{address.name}}</span>
                </span>
            </template>
            <template #headerLogin><!--不要在template上面使用class-->
                <router-link :to="userInfo._id? '/user_info':'/login'" class="header_login">
                    <span class="header_login_icon" v-if="userInfo._id">
                        <i class="iconfont icon-yonghu"></i>
                    </span>
                    <span class="header_login_text" v-else>
                        登录|注册
                    </span>
                </router-link>
            </template>
        </HeaderTop>
        <section class="scroll_area">
           <div>
               <!--首页导航-->
               <nav class = "m_site_nav"><!--<nav> 标签表示一个页面中的某个部分，目的是提供导航链接，常见的导航栏的示例是菜单、目录和索引-->
                   <div class="swiper-container"  v-if="foodList.length>0">
                       <div class="swiper-wrapper">
                           <!--异步显示轮播图-->
                           <div class="swiper-slide" v-for="(foodListInner,index) in foodListTwo" :key="index">
                               <a href="javascript:;" class="food_category" v-for="(foodItem,index2) in foodListInner" :key="index2">
                                   <div class="food_picture_container">
                                       <img :src="foodItem.image_url" class="food_picture"/>
                                   </div>
                                   <span class="food_name">
                                {{foodItem.title}}
                            </span>
                               </a>
                           </div>
                       </div>
                       <!-- 如果需要分页器 （小圆点）-->
                       <div class="swiper-pagination"></div>
                       <!-- 如果需要导航按钮 -->
                       <!--<div class="swiper-button-prev"></div>
                       <div class="swiper-button-next"></div>-->
                       <!-- 如果需要滚动条 -->
                       <!--<div class="swiper-scrollbar"></div>-->
                   </div>
                   <img src="./image/msite_back.svg" alt="食物列表分类加载中" v-else> <!--为了在读取后台食物分类数据的时间间隙里面显示特有图片-->
               </nav>
               <!--商家列表-->
               <ShopList ></ShopList>
           </div>
        </section>
    </div>
</template>

<script>
    import Swiper from "swiper"
    import {
        mapActions,
        mapState
    } from "vuex";
    import HeaderTop from "../../components/HeaderTop/HeaderTop"/*头部组件*/
    import ShopList from "../../components/ShopList/ShopList"/*商家组件*/
    import BetterScroll from "better-scroll";
    export default {
        name: "Msite",
        data(){
            return {
                baseImaUrl:"https://fuss10.elemecdn.com", //图片的基本地址,
                //timer: null, //存储定时器,浏览器和node返回不一样
            }
        },
        methods: {
            ...mapActions([  //使用actions中方法2，步骤1
                "getAddress",
            ]),//将store中的action模块的函数映射成组件的函数
            //将y坐标设置为state中值
            /*isTabRoute(){
                if(this.$route.path === "/msite"){
                    let recruitScrollY = this.$store.state.recruitScrollY;
                    document.documentElement.scrollTop = recruitScrollY; //滚动条位置设置为
                }
            },*/
        },
        created() {
            //bug:在页面刷新时，重置购物车，清空购物车,此时还不行，还需要将食物foods里面所有的count大于0食物进行置0
            /* window.addEventListener("beforeunload",()=>{
                 this.$store.dispatch("clearShoppingCar");
             })*/
            /*通过这个解决页面刷新时，购物车（已经存在的食物与食物列表里面的失联了）与食物里面的食品指向不同的对象方法。
            * 解决方法：在页面刷新的时候，遍历所有的食物，将count值大于0的时候，添加到购物车里面。*/
            window.addEventListener("load",()=>{ //beforeunload这个事件不行
                //先清空购物车
                this.$store.dispatch("clearShoppingCar",true);
                //再同步购物车与食物列表中有count>0的食物
                this.$store.dispatch("foodsSyncShoppingCar");
            });
        },
        mounted() {
            this.getAddress();//使用actions中方法2，步骤2调用该方法，state中数据发生变化
            this.$store.dispatch("getFoodList",()=>{
                this.bs = new BetterScroll(".scroll_area",{
                    click: true
                })
            });//使用actions中方法1
        },
        computed:{
            //读取store对象中的state模块中数据
            ...mapState([ //读取store对象中的state模块中数据:将全局数据映射为当前组件的计算属性
                "address", //state中的地址
                "foodList",//state中的食品分类列表
                "userInfo",//state中的用户信息
            ]),
            ////将商家列表（原来为一维数组）变成二维数组
            foodListTwo: function () {//将商家列表（原来为一维数组）变成二维数组，且二维数组中的每一个项长度最大值为8
                const foodList = this.foodList //获得商家列表
                const maxLength = 8 //二维数组中的项（为数组）最大长度为8
                let resultArr = [] //用来保存二维数组，初始化
                let innerArr = [] //二维数组的项（即一维数组），初始化值
                //遍历一维数组shopList
                foodList.forEach((value, index, shopList)=>{ //也可以使用for循环遍历
                    //如果二维数组里层的数组项数满了，创建新的
                    if(innerArr.length === maxLength){ //长度等于8时,，此时里层数组长度为最大值
                        innerArr = [];//若还需要一维变二维，则外层数组应该添加项,进行初始化
                    }
                    //如果二维数组的项（里层数组）长度为0时，添加到外层数组
                    if(innerArr.length === 0){ //innerArr添加到外层数组中
                        resultArr.push(innerArr);
                    }
                    innerArr.push(value)//二维数组项（里层数组）添加元素
                })
                return resultArr; //返回二维数组
            }
        },
        watch:{
            //监听商家列表的变化
            foodList: function (value) {
                //如果数据发生变化，则轮播列表也异步发生变化，变化之后立即显示视图
                this.$nextTick(()=>{//nextTick在下次 DOM更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
                    this.mySwiper = new Swiper('.swiper-container', {
                        loop : true,// 循环模式选项
                        /* autoplay: {  //有这个项的时候会自动切换
                             delay: 3000,//自动切换延时
                             stopOnLastSlide: false,//如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）。
                             disableOnInteraction: false,//用户操作swiper之后，是否禁止autoplay。默认为true：停止。
                             cirular: true
                         },*/
                        /*clickable :true,点击分页器的指示点分页器会控制Swiper切换。 */
                        pagination: {
                            el: '.swiper-pagination',
                            clickable :true,
                        },
                        // 如果需要前进后退按钮
                        /*navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }*/
                    })
                })
            },
            //监听路由的变化
            /*"$route": function(value){
                this.nextTick(()=>{
                    this.isTabRoute();
                });
            }*/
        },
        /*beforeRouteLeave(to, from, next){
            let position = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop || window.pageYOffset; //记录页面离开的位置
            //console.log(position);
            if(position === null){
                position = 0;
            }
            //console.log(position);
            this.$store.dispatch("changeYScroll", position); //离开路由时，把位置存储起来
            next();
        },*/
        components: {
            HeaderTop,
            ShopList
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./css/msite.styl"
</style>