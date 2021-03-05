<template>
    <div class = "search_static">
        <!--屏幕以iPhone6/7/8 Plus为尺寸，即414*736-->
        <!--头部-->
        <header class="search_header">
            <a href="javascript:;" class="header_title">
                <span class = "header_title_text ellipsis">搜索</span>
            </a>
        </header>
        <!--<form> 标签用于创建供用户输入的 HTML 表单。-->
        <form action="#" class="search_form">
            <div class="input_container">
                <span class="input_icon">
                    <i class="iconfont icon-sousuo"></i>
                </span>
                <input type="search" class="search_content" name="search" placeholder="请输入搜索词">
            </div>
            <button type="submit" class="summit_text">提交</button>
        </form>
        <!--<form action="#" class="demo">
            <input type="text" class = "input_ii" placeholder="25655">
            <button type="submit" class = "submit_ii">提交</button>
        </form>-->
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
        name: "SearchStatic"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./css/searchStatic_css.styl"
</style>