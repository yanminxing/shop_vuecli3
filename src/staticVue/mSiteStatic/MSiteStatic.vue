<template>
    <div class ="my_site"> <!--不知道为何，设置class名字是m_site时，此class无用-->
        <!--屏幕以iPhone6/7/8 Plus为尺寸，即414*736-->
        <!--首页的头部-->
        <header class="m_site_header">
            <a href="" class = "header_search">
                <i class = "iconfont icon-sousuo"></i>
            </a>
            <a href="" class="header_title">
                <span class = "header_title_text ellipsis">昌平区北七家宏福科技园(337省道北)</span>
            </a>
            <a href="" class="header_login">
                <span class="header_login_text">登录|注册</span>
            </a>
        </header>
        <!--首页导航-->
        <nav class = "m_site_nav"><!--<nav> 标签表示一个页面中的某个部分，目的是提供导航链接，常见的导航栏的示例是菜单、目录和索引-->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="javascript:;" class="food_category">
                            <div class="food_picture_container">
                                <img src="./image/nav/1.jpg" class = "food_picture"/>
                            </div>
                            <span class="food_name">
                                美食
                            </span>
                        </a>
                        <a href="javascript:;" class="food_category">
                            <span class="food_picture_container">
                                <img src="./image/nav/2.jpg" class = "food_picture"/>
                            </span>
                            <span class="food_name">
                                正餐优选
                            </span>
                        </a>
                        <a href="javascript:;" class="food_category">
                            <span class="food_picture_container">
                                <img src="./image/nav/3.jpg" class = "food_picture"/>
                            </span>
                            <span class="food_name">
                                买药
                            </span>
                        </a>
                        <a href="javascript:;" class="food_category">
                            <span class="food_picture_container">
                                <img src="./image/nav/4.jpg" class = "food_picture"/>
                            </span>
                            <span class="food_name">
                                蔬菜水果
                            </span>
                        </a>
                        <a href="javascript:;" class="food_category">
                            <span class="food_picture_container">
                                <img src="./image/nav/5.jpg" class = "food_picture"/>
                            </span>
                            <span class="food_name">
                                品质晚餐
                            </span>
                        </a>
                        <a href="javascript:;" class="food_category">
                            <span class="food_picture_container">
                                <img src="./image/nav/6.jpg" class = "food_picture"/>
                            </span>
                            <span class="food_name">
                                面包蛋糕
                            </span>
                        </a>
                        <a href="javascript:;" class="food_category">
                            <span class="food_picture_container">
                                <img src="./image/nav/7.jpg" class = "food_picture"/>
                            </span>
                            <span class="food_name">
                                甜品饮品
                            </span>
                        </a>
                        <a href="javascript:;" class="food_category">
                            <span class="food_picture_container">
                                <img src="./image/nav/8.jpg" class = "food_picture"/>
                            </span>
                            <span class="food_name">
                                快食简餐
                            </span>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:;" class="food_category">
                            <div class="food_picture_container">
                                <img src="./image/nav/9.jpg" class = "food_picture"/>
                            </div>
                            <span class="food_name">
                                正餐
                            </span>
                        </a>
                        <a href="javascript:;" class="food_category">
                            <div class="food_picture_container">
                                <img src="./image/nav/10.jpg" class = "food_picture"/>
                            </div>
                            <span class="food_name">
                                湘菜
                            </span>
                        </a>
                        <a href="javascript:;" class="food_category">
                            <div class="food_picture_container">
                                <img src="./image/nav/9.jpg" class = "food_picture"/>
                            </div>
                            <span class="food_name">
                                川菜
                            </span>
                        </a>
                        <a href="javascript:;" class="food_category">
                            <div class="food_picture_container">
                                <img src="./image/nav/11.jpg" class = "food_picture"/>
                            </div>
                            <span class="food_name">
                                小吃美食
                            </span>
                        </a>
                        <a href="javascript:;" class="food_category">
                            <div class="food_picture_container">
                                <img src="./image/nav/12.jpg" class = "food_picture"/>
                            </div>
                            <span class="food_name">
                                到店自取
                            </span>
                        </a>
                        <a href="javascript:;" class="food_category">
                            <div class="food_picture_container">
                                <img src="./image/nav/13.jpg" class = "food_picture"/>
                            </div>
                            <span class="food_name">
                                麻辣烫
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
        </nav>
        <!--商家列表-->
        <div class="shop_list">
            <div class="shop_title">
                <i class="iconfont icon-liebiao"></i>
                <span class="shop_title_text">
                    附近商家
                </span>
            </div>
            <div class="shop_container">
                <ul class="shops">
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/1.jpg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/2.jpeg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/3.jpg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/4.jpeg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/5.jpg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        4分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>


                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/1.jpg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/2.jpeg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/3.jpg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/4.jpeg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/5.jpg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        4分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/1.jpg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/2.jpeg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/3.jpg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/4.jpeg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/5.jpg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        4分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/1.jpg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/2.jpeg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/3.jpg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/4.jpeg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/5.jpg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        4分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/1.jpg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/2.jpeg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/3.jpg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/4.jpeg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        3.5分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                    <li class="shop_item">
                        <a href="javascript:;">
                            <div class="shop_logo">
                                <img src="./image/shopList/5.jpg" alt="这里应该使用图片" >
                            </div>
                            <div class="shop_information">
                                <section class="information_list">
                                    <span class="shop_name ellipsis">
                                        外卖专用，你值得拥有，外卖平台上上上商行
                                    </span>
                                    <ul class="shop_detail">
                                        <li class="guarantee">准</li>
                                        <li class="guarantee">时</li>
                                        <li class="guarantee">保</li>
                                    </ul>
                                </section>
                                <section class="shop_order">
                                    <div class="shop_star_container">
                                        <span class="star_item on">1</span>
                                        <span class="star_item on">2</span>
                                        <span class="star_item on">3</span>
                                        <span class="star_item half">4</span>
                                        <span class="star_item off">5</span>
                                    </div>
                                    <span class="shop_score">
                                        4分
                                    </span>
                                    <span class="order_number">
                                        月售109单
                                    </span>
                                    <span class="shop_delivery">
                                        某团专送
                                    </span>
                                </section>
                                <section class="pay_container">
                                    <span class="low_pay">
                                        20元起送
                                    </span>
                                    <span class="delivery_pay">
                                        配送费￥3元
                                    </span>
                                </section>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
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
    import Swiper from "swiper"
    export default {
        name: "MSiteStatic",
        mounted() {
            var mySwiper = new Swiper('.swiper-container', {
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
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./css/mSiteStatic.styl"
</style>