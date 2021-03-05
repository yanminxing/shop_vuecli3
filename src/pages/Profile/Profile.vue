<template>
    <div class="profile_page">
        <!--头部-->
        <HeaderTop>
            <template v-slot:headTitle="{titleList}">
                <span class="header_title">
                    <span class = "header_title_text ellipsis">{{titleList.profileTitle.title}}</span>
                </span>
            </template>
        </HeaderTop>
        <!--zzz中间部分：跳转到登录界面-->
        <section class="info_login_container">
            <router-link :to="userInfo._id? '/user_info':'/login'" class="profile_to_login border-1px">
                <span class="person_icon_container">
                    <i class="iconfont icon-gerenzhongxin"></i>
                </span>
                <div class="login_information">
                    <span class="login_tips" v-if="!userInfo.phone">{{ userInfo.name || "登录/注册"}}</span>
                    <div class="login_phone">
                        <i class="iconfont icon-shouji"></i>
                        <span>{{ userInfo.phone || "还没有绑定手机号"}}</span>
                    </div>
                </div>
                <span class="to_login">
                    <i class="iconfont icon-jiantou1"></i>
                </span>
            </router-link>
        </section>
        <!--zzz中间部分：钱包-->
        <section class="profile_money border-1px">
            <div class="my_money">我的资产</div>
            <div class="pay_container">
                <a href="javascript:;" class="info_data_list border-1px">
                    <div class="info_name_container">
                        <span class="info_name_icon">
                            <i class="iconfont icon-yue1"></i>
                        </span>
                        <span class="info_name">余额</span>
                    </div>
                    <div class="info_details">
                        <span class="info_number">0.00</span>
                        <span class="info_unit">元</span>
                    </div>
                </a>
                <a href="javascript:;" class="info_data_list">
                    <div class="info_name_container">
                        <span class="info_name_icon">
                            <i class="iconfont icon-youhuiquan"></i>
                        </span>
                        <span class="info_name">优惠</span>
                    </div>
                    <div class="info_details">
                        <span class="info_number">0</span>
                        <span class="info_unit">张</span>
                    </div>
                </a>
                <a href="javascript:;" class="info_data_list">
                    <div class="info_name_container">
                        <span class="info_name_icon">
                            <i class="iconfont icon-hongbao1"></i>
                        </span>
                        <span class="info_name">红包</span>
                    </div>
                    <div class="info_details">
                        <span class="info_number">0</span>
                        <span class="info_unit">个</span>
                    </div>
                </a>
                <a href="javascript:;" class="info_data_list">
                    <div class="info_name_container">
                        <span class="info_name_icon">
                            <i class="iconfont icon-jinbi2"></i>
                        </span>
                        <span class="info_name">金豆</span>
                    </div>
                    <div class="info_details">
                        <span class="info_number">0</span>
                        <span class="info_unit">个</span>
                    </div>
                </a>
            </div>
        </section>
        <!--zzz中间部分：常用功能-->
        <section class="profile_often border-1px">
            <div class="my_often">常用功能</div>
            <div class="often_container">
                <a href="javascript:;" class="often_list">
                    <span class="often_name_icon">
                        <i class="iconfont icon-dingdan"></i>
                    </span>
                    <span class="often_name">我的订单</span>
                </a>
                <a href="javascript:;" class="often_list">
                    <span class="often_name_icon">
                        <i class="iconfont icon-jifenshangchang"></i>
                    </span>
                    <span class="often_name">积分商场</span>
                </a>
                <a href="javascript:;" class="often_list">
                    <span class="often_name_icon">
                        <i class="iconfont icon-huiyuan1-012"></i>
                    </span>
                    <span class="often_name">外卖会员卡</span>
                </a>
                <a href="javascript:;" class="often_list">
                    <span class="often_name_icon">
                        <i class="iconfont icon-dizhi"></i>
                    </span>
                    <span class="often_name">我的地址</span>
                </a>
                <a href="javascript:;" class="often_list">
                    <span class="often_name_icon">
                        <i class="iconfont icon-bangzhuyuzhichi1"></i>
                    </span>
                    <span class="often_name">帮助与支持</span>
                </a>
                <a href="javascript:;" class="often_list">
                    <span class="often_name_icon">
                        <i class="iconfont icon-banbenhao1"></i>
                    </span>
                    <span class="often_name">版本号</span>
                </a>
            </div>
        </section>
        <!--zzz中间部分：退出登录-->
        <section class="profile_often border-1px">
            <mt-button class="logout" type="danger" @click="logout" v-if="userInfo._id">
                退出登录
            </mt-button>
        </section>
        <!--底部导航-->
        <FooterGuide></FooterGuide>
    </div>
</template>

<script>
    import HeaderTop from "../../components/HeaderTop/HeaderTop";
    import FooterGuide from "../../components/FooterGuide/FooterGuide";
    import {mapState} from "vuex";
    import {MessageBox} from "mint-ui";
    export default {
        name: "Profile",
        components:{
            HeaderTop,
            FooterGuide
        },
        computed:{
            ...mapState(["userInfo"]),
        },
        methods:{
            //退出登录
            logout () {
                MessageBox.confirm('确定退出登陆吗?').then(action => {
                    this.$store.dispatch('logout');
                }, action => {  //不写这个，浏览器容易报错
                });
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./css/profile.styl"
</style>