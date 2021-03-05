<template>
    <!--点击标题等出现的扩展模块-->
    <section class="extend_modules_con">
        <!--折扣扩展模块-->
        <section class="discounts_extend_con">
            <div class="discounts_extend">
                <div class="discounts_name border-1px">优惠</div>
                <ul class="discounts_list">
                    <li class="discounts_item">
                        <span class="discounts_keyword">减</span>
                        <span class="discounts_detail">满18减7；满50减9；满60减13；满100减26</span>
                    </li>
                    <li class="discounts_item">
                        <span class="discounts_keyword">津</span>
                        <span class="discounts_detail">本店可用9元津贴（与满减共享）</span>
                    </li>
                    <li class="discounts_item">
                        <span class="discounts_keyword">折</span>
                        <span class="discounts_detail">折扣商品2.61折起；部分商品喊津贴2~32元</span>
                    </li>
                    <li class="discounts_item">
                        <span class="discounts_keyword">首</span>
                        <span class="discounts_detail">新人立减14元（本优惠与新人首单红包不可同享），首次使用某团支付最高立减3元</span>
                    </li>
                </ul>
            </div>
        </section>
        <!--扩展模块--商家服务-->
        <section class="shop_server_con">
            <div class="shop_server_name">商家服务</div>
            <ul class="server_lists">
                <li class="server_item">
                    <ul class="items">
                        <li class="item_name_icon">
                            <i class="iconfont icon-on_time"></i>
                        </li>
                        <li class="item_name">准时宝</li>
                        <li class="item_question_mack">
                            <i class="iconfont icon-wenhao"></i>
                        </li>
                    </ul>
                </li>
                <li class="server_item">
                    <ul class="items">
                        <li class="item_name_icon">
                            <i class="iconfont icon-on_time"></i>
                        </li>
                        <li class="item_name">放心吃</li>
                        <li class="item_question_mack">
                            <i class="iconfont icon-wenhao"></i>
                        </li>
                    </ul>
                </li>
                <li class="server_item">
                    <ul class="items">
                        <li class="item_name_icon">
                            <i class="iconfont icon-on_time"></i>
                        </li>
                        <li class="item_name">青山公益</li>
                        <li class="item_question_mack">
                            <i class="iconfont icon-wenhao"></i>
                        </li>
                    </ul>
                </li>
                <li class="server_item">
                    <ul class="items">
                        <li class="item_name_icon">
                            <i class="iconfont icon-on_time"></i>
                        </li>
                        <li class="item_name">食品展示</li>
                    </ul>
                </li>
            </ul>
        </section>
        <!--扩展模块--商家公告-->
        <section class="shop_comment_extend">
            <div class="comment_extend_name">
                公告
            </div>
            <span class="comment_extend">
            各位亲爱的小主，每份菜是包含米饭的哦！如遇缺货等问题，请致电×××××××以便及时解决你的烦恼。
            （本店所选食材均是新鲜的某鱼和新鲜的蔬菜）
        </span>
        </section>
        <!--显示上拉图标-->
        <section class="shop_up_icon" @click="notShowDetail">
            <i class="iconfont icon-ziyuan"></i>
        </section>
    </section>
</template>

<script>
    export default {
        name: "ShopDetail",
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "css/shopDetail.styl"
</style>