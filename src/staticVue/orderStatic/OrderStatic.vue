<template>
    <!--订单页面-->
    <div class="order_page">
        <!--头部-->
        <header class="search_header">
            <a href="javascript:;" class="header_title">
                <span class = "header_title_text ellipsis">订单</span>
            </a>
        </header>
        <!--订单页面中间部分-->
        <section class="order_middle">
            <div class="img_container">
                <img src="./image/qishou.jpeg" alt="骑手" class="img_person">
            </div>
            <span class="order_tips">
                您还没有登录，请登录后再查看订单！！
            </span>
            <div class="button_container">
                <button class="order_login">登录|注册</button>
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
        name: "OrderStatic"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./css/orderStatic.styl"
</style>