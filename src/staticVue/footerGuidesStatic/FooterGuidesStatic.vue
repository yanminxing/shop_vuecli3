<template>
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
</template>

<script>
    export default {
        name: "FooterGuidesStatic"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./css/footerGuidesStatic.styl"
</style>