<template>
    <div class="shop_container_static">
        <!--商家头部组件-->
        <section class="shop_header_container">
            <!--显示头部图片区域-->
            <div class="shop_header">
                <span class="shop_back">
                    <i class="iconfont icon-fanhui2"></i>
                </span>
                <span class="shop_search">
                    <i class="iconfont icon-sousuo"></i>
                </span>
            </div>
            <!--商家名字等信息-->
            <div class="shop_title_container">
                <div class="shop_title_info">
                    <div class="shop_name ellipsis">鱼你在一起</div>
                    <ul class="shopper_info_container">
                        <li class="shopper_info">
                            <span class="title_star">
                                <i class="iconfont icon-xingxingxuanzhongzhuangtai"></i>
                            </span>
                            <span class="title_info_text">4.4分</span>
                        </li>
                        <li class="shopper_info">
                            <span class="title_info_text">月售1500单</span>
                        </li>
                        <li class="shopper_info">
                            <span class="title_info_text">配送约40分钟（商家5分钟内出餐）</span>
                        </li>
                        <li class="shopper_info">
                            <span class="title_info_text">某团专送</span>
                        </li>
                        <li class="shopper_info">
                            <span class="title_info_text">距离1400m</span>
                        </li>
                    </ul>
                </div>
                <span class="shop_title_icon">
                    <img alt="商家logo" class="shop_image" src="https://m.qpic.cn/psc?/V53tkwTt4Hqdjg2t666X3zuePl00tX2K/ruAMsa53pVQWN7FLK88i5o9ct3r0yXddIGIN8IDzAjp7SX36Qvc4MFAYBhJuEbDYUqrKlNxUHQ6TXrHsiz5ZRasLdm7r13ZOgKvfVovOqsA!/mnull&bo=9AFNAQAAAAABB5k!&rf=photolist&t=5">
                </span>
            </div>
            <!--活动/满减专区-->
            <div class="food_discounts_container">
                <ul class="food_discounts">
                    <li class="discounts_items border-1px">
                        <span class="items_dis">21减18 |</span>
                        <span class="items_dis"> 75减35 |</span>
                        <span class="items_dis"> 100减45</span>
                    </li>
                    <li class="discounts_items border-1px">
                        <span class="items_dis">新客减1</span>
                    </li>
                    <li class="discounts_items border-1px">
                        <span class="items_dis">4.16折起</span>
                    </li>
                    <li class="discounts_items border-1px">
                        <span class="items_dis">首单减14</span>
                    </li>
                </ul>
            </div>
            <!--公告专区-->
            <div class="shop_notices_con">
                <div class="shop_notices ellipsis">
                    公告：各位亲爱的小主，每份菜是包含米饭的哦！如遇缺货等问题，请致电×××××××以便及时解决你的烦恼。
                    （本店所选食材均是新鲜的某鱼和新鲜的蔬菜）
                </div>
                <span class="icon_down">
                    <i class="iconfont icon-xiangxia"></i>
                </span>
            </div>
        </section>
        <!--商家二级路由导航-->
        <section class="shop_router_nav border-1px">
            <a href="javascript:;" class="nav_item on">
                <span class="shop_group group_on">点菜</span>
            </a>
            <a href="javascript:;" class="nav_item on">
                <span class="shop_group">评价</span>
                <span class="ratings_num">3621</span>
            </a>
            <a href="javascript:;" class="nav_item">
                <span class="shop_group">商家</span>
            </a>
        </section>
        <!--点击标题等出现的扩展模块-->
        <!--<section class="extend_modules_con">
            &lt;!&ndash;折扣扩展模块&ndash;&gt;
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
            &lt;!&ndash;扩展模块&#45;&#45;商家服务&ndash;&gt;
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
            &lt;!&ndash;扩展模块&#45;&#45;商家公告&ndash;&gt;
            <section class="shop_comment_extend">
                <div class="comment_extend_name">
                    公告
                </div>
                <span class="comment_extend">
                各位亲爱的小主，每份菜是包含米饭的哦！如遇缺货等问题，请致电×××××××以便及时解决你的烦恼。
                （本店所选食材均是新鲜的某鱼和新鲜的蔬菜）
            </span>
            </section>
            &lt;!&ndash;显示上拉图标&ndash;&gt;
            <section class="shop_up_icon">
                <i class="iconfont icon-ziyuan"></i>
            </section>
        </section>-->
        <!--路由组件--点菜路由组件-->
        <!--<section class="foods_buy">
        </section>-->
        <!--路由组件--商家路由组件-->
        <!--<div class="shop_info_con">
            &lt;!&ndash;地址&ndash;&gt;
            <section class="shop_address border-1px">
            <span class="address_icon">
                <i class="iconfont icon-dizhi"></i>
            </span>
                <span class="address">
                 深圳市宝安区望丰社区万安路182号 深圳市宝安区望丰社区万安路182号
            </span>
                <span class="address_icon">
                <i class="iconfont icon-phone1"></i>
            </span>
            </section>
            &lt;!&ndash;食品档案&ndash;&gt;
            <section class="shop_safe border-1px">
            <span class="address_icon">
                <i class="iconfont icon-anquan1"></i>
            </span>
                <span class="address">
                  查看食品安全档案
            </span>
                <span class="address_icon">
                <i class="iconfont icon-jiantou"></i>
            </span>
            </section>
            <section class="void_ele"></section>
            &lt;!&ndash;配送&ndash;&gt;
            <section class="distribution_services border-1px">
            <span class="address_icon">
                <i class="iconfont icon-peisong1"></i>
            </span>
                <span class="address">
                  配送服务：由某团专送提供配送服务
            </span>
            </section>
            &lt;!&ndash;配送时间&ndash;&gt;
            <section class="time_services">
            <span class="address_icon">
                <i class="iconfont icon-time_icon"></i>
            </span>
                <span class="address">
                  配送时间：0-24:00
            </span>
            </section>
            <section class="void_ele"></section>
            &lt;!&ndash;公告&ndash;&gt;
            <section class="time_services">
            <span class="address_icon">
                <i class="iconfont icon-gonggao"></i>
            </span>
                <div class="address ellipsis">
                    公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告
                </div>
            </section>
            &lt;!&ndash;空&ndash;&gt;
            <section class="void_ele"></section>
            &lt;!&ndash;折扣扩展模块&ndash;&gt;
            <section class="discounts_extend_con">
                <div class="discounts_extend">
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

        </div>-->
        <!--商家路由--点菜路由组件-->
        <div class="order_foods">
            <div class="food_classes">
                <ul class="food_classes_list">
                    <li class="food_classes_item border-1px">
                        <div class="classes_content">
                    <span class="classes_icon">
                        <i class="iconfont icon-liebiao1"></i>
                    </span>
                            <span class="classes_name">优惠</span>
                        </div>
                    </li>
                    <li class="food_classes_item border-1px">
                        <div class="classes_content">
                    <span class="classes_icon">
                        <i class="iconfont icon-liebiao1"></i>
                    </span>
                            <span class="classes_name">优惠优惠优惠优惠优惠优惠优惠优惠优惠优惠优惠优惠优惠</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="food_lists_con">
                <ul class="food_lists">
                    <li class="food_item">
                        <div class="food_item_name_con">
                            <span class="food_item_name">优惠</span>
                        </div>
                        <ul class="food_item_detail">
                            <li class="food_item_icon">
                                <i class="iconfont icon-waimai1"></i>
                            </li>
                            <li class="food_item_content">
                                <div class="food_item_name">南瓜粥</div>
                                <div class="food_item_describe">
                                    这里最多显示两行文字
                                    1人份 皮蛋瘦肉粥+蛋挞（2个）+ 小菜
                                    这里最多显示两行文字
                                    1人份 皮蛋瘦肉粥+蛋挞（2个）+ 小菜
                                </div>
                                <div class="food_item_rate">
                                    <span class="monthly_sales">月售106单</span>
                                    <span class="praise_rate">好评率98%</span>
                                </div>
                                <div class="food_item_price">
                                    <span class="new_price">￥15.8</span>
                                    <span class="old_price">￥13.8</span>
                                    <div class="buy_num_con">
                                <span class="iconfont_con_1">
                                    <i class="iconfont icon-jian1"></i>
                                </span>
                                        <span class="buy_num">1</span>
                                        <span class="iconfont_con_2">
                                    <i class="iconfont icon-jia"></i>
                                </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul class="food_item_detail">
                            <li class="food_item_icon">
                                <i class="iconfont icon-waimai1"></i>
                            </li>
                            <li class="food_item_content">
                                <div class="food_item_name">南瓜粥</div>
                                <div class="food_item_describe">
                                    这里最多显示两行文字
                                    1人份 皮蛋瘦肉粥+蛋挞（2个）+ 小菜
                                    这里最多显示两行文字
                                    1人份 皮蛋瘦肉粥+蛋挞（2个）+ 小菜
                                </div>
                                <div class="food_item_rate">
                                    <span class="monthly_sales">月售106单</span>
                                    <span class="praise_rate">好评率98%</span>
                                </div>
                                <div class="food_item_price">
                                    <span class="new_price">￥15.8</span>
                                    <span class="old_price">￥13.8</span>
                                    <div class="buy_num_con">
                                <span class="iconfont_con_1">
                                    <i class="iconfont icon-jian1"></i>
                                </span>
                                        <span class="buy_num">1</span>
                                        <span class="iconfont_con_2">
                                    <i class="iconfont icon-jia"></i>
                                </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul class="food_item_detail">
                            <li class="food_item_icon">
                                <i class="iconfont icon-waimai1"></i>
                            </li>
                            <li class="food_item_content">
                                <div class="food_item_name">南瓜粥</div>
                                <div class="food_item_describe">
                                    这里最多显示两行文字
                                    1人份 皮蛋瘦肉粥+蛋挞（2个）+ 小菜
                                    这里最多显示两行文字
                                    1人份 皮蛋瘦肉粥+蛋挞（2个）+ 小菜
                                </div>
                                <div class="food_item_rate">
                                    <span class="monthly_sales">月售106单</span>
                                    <span class="praise_rate">好评率98%</span>
                                </div>
                                <div class="food_item_price">
                                    <span class="new_price">￥15.8</span>
                                    <span class="old_price">￥13.8</span>
                                    <div class="buy_num_con">
                                <span class="iconfont_con_1">
                                    <i class="iconfont icon-jian1"></i>
                                </span>
                                        <span class="buy_num">1</span>
                                        <span class="iconfont_con_2">
                                    <i class="iconfont icon-jia"></i>
                                </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="food_item">
                        <div class="food_item_name_con">
                            <span class="food_item_name">优惠</span>
                        </div>
                        <ul class="food_item_detail">
                            <li class="food_item_icon">
                                <i class="iconfont icon-waimai1"></i>
                            </li>
                            <li class="food_item_content">
                                <div class="food_item_name">南瓜粥</div>
                                <div class="food_item_describe">
                                    这里最多显示两行文字
                                    1人份 皮蛋瘦肉粥+蛋挞（2个）+ 小菜
                                    这里最多显示两行文字
                                    1人份 皮蛋瘦肉粥+蛋挞（2个）+ 小菜
                                </div>
                                <div class="food_item_rate">
                                    <span class="monthly_sales">月售106单</span>
                                    <span class="praise_rate">好评率98%</span>
                                </div>
                                <div class="food_item_price">
                                    <span class="new_price">￥15.8</span>
                                    <span class="old_price">￥13.8</span>
                                    <div class="buy_num_con">
                                <span class="iconfont_con_1">
                                    <i class="iconfont icon-jian1"></i>
                                </span>
                                        <span class="buy_num">1</span>
                                        <span class="iconfont_con_2">
                                    <i class="iconfont icon-jia"></i>
                                </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul class="food_item_detail">
                            <li class="food_item_icon">
                                <i class="iconfont icon-waimai1"></i>
                            </li>
                            <li class="food_item_content">
                                <div class="food_item_name">南瓜粥</div>
                                <div class="food_item_describe">
                                    这里最多显示两行文字
                                    1人份 皮蛋瘦肉粥+蛋挞（2个）+ 小菜
                                    这里最多显示两行文字
                                    1人份 皮蛋瘦肉粥+蛋挞（2个）+ 小菜
                                </div>
                                <div class="food_item_rate">
                                    <span class="monthly_sales">月售106单</span>
                                    <span class="praise_rate">好评率98%</span>
                                </div>
                                <div class="food_item_price">
                                    <span class="new_price">￥15.8</span>
                                    <span class="old_price">￥13.8</span>
                                    <div class="buy_num_con">
                                <span class="iconfont_con_1">
                                    <i class="iconfont icon-jian1"></i>
                                </span>
                                        <span class="buy_num">1</span>
                                        <span class="iconfont_con_2">
                                    <i class="iconfont icon-jia"></i>
                                </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul class="food_item_detail">
                            <li class="food_item_icon">
                                <i class="iconfont icon-waimai1"></i>
                            </li>
                            <li class="food_item_content">
                                <div class="food_item_name">南瓜粥</div>
                                <div class="food_item_describe">
                                    这里最多显示两行文字
                                    1人份 皮蛋瘦肉粥+蛋挞（2个）+ 小菜
                                    这里最多显示两行文字
                                    1人份 皮蛋瘦肉粥+蛋挞（2个）+ 小菜
                                </div>
                                <div class="food_item_rate">
                                    <span class="monthly_sales">月售106单</span>
                                    <span class="praise_rate">好评率98%</span>
                                </div>
                                <div class="food_item_price">
                                    <span class="new_price">￥15.8</span>
                                    <span class="old_price">￥13.8</span>
                                    <div class="buy_num_con">
                                <span class="iconfont_con_1">
                                    <i class="iconfont icon-jian1"></i>
                                </span>
                                        <span class="buy_num">1</span>
                                        <span class="iconfont_con_2">
                                    <i class="iconfont icon-jia"></i>
                                </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!--底部购物车--点菜统计付款那块-->
            <div class="food_car_all">
            <span class="car_con">
                <i class="iconfont icon-ziyuan1"></i>
            </span>
                <div class="need_money_con">
                    <div class="money">￥0</div>
                    <div class="distribution_fee">预计另需配送费￥3.5</div>
                </div>
                <span class="need_left_money">
                ￥20元起送<!-- ￥20元起送 || 差￥15元起送 || 去结算-->
            </span>
            </div>
        </div>
    </div>
</template>

<script>
    import ShopHeader from "../../components/ShopHeader/ShopHeader";
    export default {
        name: "Shop",
        components: {
            ShopHeader
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "css/shopStatic.styl"
</style>