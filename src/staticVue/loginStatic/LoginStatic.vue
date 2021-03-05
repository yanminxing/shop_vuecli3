<template>
    <div class="login_static">
        <div class="login_back">
            <i class="iconfont icon-fanhui3"></i>
        </div>
        <div class="login_title">
            <span class="header_name">
                欢迎登录外卖App
            </span>
        </div>
        <div class="login_ways">
            <div class="way_name">
                <span class="phone_login" v-if="true">
                    手机号登录
                </span>
                <span class="password_login" v-else>
                    密码登录
                </span>
            </div>
            <div class="way_content">
                <form action="#" class="login_way_details">
                    <!--手机登录-->
                    <div class="phone_container">
                        <div class="telephone_num">
                            <input type="tel" maxlength="11" placeholder="请输入手机号">
                        </div>
                        <div class="verification_container">
                            <input type="tel" maxlength="8" placeholder="请输入验证码">
                            <button class="login_verification">获取验证码</button>
                        </div>
                        <div class="verification_summit">
                            <button >同意协议并且登录</button>
                        </div>
                        <div class="login_tips">
                            <span>未注册手机号登录后将自动生成账号，且代表你已经阅读并且同意</span>
                            <a href="javascript:;" class="login_agreement">《用户服务协议》</a>
                        </div>
                    </div>
                    <!--密码登录-->
                    <div class="phone_container on">
                        <div class="telephone_num">
                            <input type="tel" maxlength="11" placeholder="手机/用户名">
                        </div>
                        <div class="verification_container">
                            <input type="tel" maxlength="8" placeholder="请输入密码">
                            <span class="password_icon">
                                <i class="iconfont icon-xianshi1"></i>
                            </span>
                        </div>
                        <div class="verification_summit">
                            <button >登录</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginStatic"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./css/loginStatic.styl"
</style>