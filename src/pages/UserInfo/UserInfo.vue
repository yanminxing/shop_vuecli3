<template>
    <div class="login_static">
        <a @click="$router.back()" class="login_back">
            <i class="iconfont icon-fanhui2"></i>
        </a>
        <div class="content">欢迎来到个人信息页面</div>
    </div>
</template>

<script>
    export default {
        name: "UserInfo"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "./css/userInfo.styl"
</style>