<template>
    <div class="profile_page">
        <!--头部-->
        <header class="search_header">
            <a href="javascript:;" class="header_title">
                <span class = "header_title_text ellipsis">个人中心</span>
            </a>
        </header>
        <!--zzz中间部分：跳转到登录界面-->
        <section class="info_login_container">
            <a href="javascript:;" class="profile_to_login border-1px">
                <span class="person_icon_container">
                    <i class="iconfont icon-gerenzhongxin"></i>
                </span>
                <div class="login_information">
                    <span class="login_tips">登录/注册</span>
                    <div class="login_phone">
                        <i class="iconfont icon-shouji"></i>
                        <span>还未登录，暂无手机号</span>
                    </div>
                </div>
                <span class="to_login">
                    <i class="iconfont icon-jiantou1"></i>
                </span>
            </a>
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
        <!--底部导航-->
        <footer class = "footer_container">
            <!--a href="javascript:;"表示javascript:是表示在触发默bai认动作du时，执行zhi一段daoJavaScript代码，而 javascript:;
            表示什么都不执行，这样点击时就zhuan没有任何shu反应。 -->
            <a href="javascript:;" class="footer_item">
            <span class="footer_icon">
                <i class="iconfont icon-shouye2"></i>
            </span>
                <span class="footer_text">
                首页
            </span>
            </a>
            <a href="javascript:;" class="footer_item">
            <span class="footer_icon">
                <i class=" iconfont icon-fangdajing"></i>
            </span>
                <span class="footer_text">
                搜索
            </span>
            </a>
            <a href="javascript:;" class="footer_item">
            <span class="footer_icon">
                <i class=" iconfont icon-order_icon"></i>
            </span>
                <span class="footer_text">
                订单
            </span>
            </a>
            <a href="javascript:;" class="footer_item">
            <span class="footer_icon">
                <i class=" iconfont icon-gerenzhongxin"></i>
            </span>
                <span class="footer_text">
                个人中心
            </span>
            </a>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "ProfileStatic"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "./css/profileStatic.styl"
</style>