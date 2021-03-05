<template>
    <div class="login_static">
        <a @click="$router.back()" class="login_back">
            <i class="iconfont icon-fanhui2"></i>
        </a>
        <div class="login_title">
            <span class="header_name">
                欢迎登录外卖App
            </span>
        </div>
        <div class="login_ways">
            <div class="way_name">
                <span class="phone_login">
                    {{loginWay? "手机号登录":"密码登录"}}
                </span>
                <!--<span class="phone_login" v-if="loginWay">
                    手机号登录
                </span>
                <span class="password_login" v-else>
                    密码登录
                </span>-->
            </div>
            <div class="way_content">
                <form action="#" class="login_way_details" @submit.prevent="login">
                    <!--手机登录-->
                    <div class="phone_container" v-if="loginWay">
                        <div class="telephone_num">
                            <input type="tel" maxlength="11" placeholder="请输入手机号" v-model="phone">
                        </div>
                        <div class="verification_container">
                            <input type="tel" maxlength="8" placeholder="请输入验证码" v-model="code">
                            <button type="submit" :disabled="!rightPhone" class="login_verification" :class="{right_phone: rightPhone}"
                                    @click.prevent="getCode">
                                {{countDown > 0? `${countDown}S后重新发送`: "获取验证码"}}
                            </button>
                        </div>
                        <div class="verification_summit">
                            <button type="submit">同意协议并且登录</button>
                        </div>
                        <div class="login_tips">
                            <span>未注册手机号登录后将自动生成账号，且代表你已经阅读并且同意</span>
                            <a href="javascript:;" class="login_agreement">《用户服务协议》</a>
                        </div>
                        <div class="changeLogin" @click="loginWay=false">
                            切换到密码登录
                        </div>
                    </div>
                    <!--密码登录-->
                    <div class="phone_container" v-else>
                        <div class="telephone_num" >
                            <input type="tel" maxlength="11" placeholder="手机/用户名" v-model="name">
                        </div>
                        <div class="verification_container" v-if="showPassword">
                            <input type="password" maxlength="8" placeholder="请输入密码" v-model="pwd">
                            <span class="password_icon">
                                <i class="iconfont icon-guanbi" @click="showPassword=false"></i>
                            </span>
                        </div>
                        <div class="verification_container" v-else>
                            <input type="text" maxlength="8" placeholder="请输入密码" v-model="pwd">
                            <span class="password_icon">
                                <i class="iconfont icon-xianshi1"  @click="showPassword=true"></i>
                            </span>
                        </div>
                        <div class="captcha_container">
                            <input type="text" maxlength="8" placeholder="请输入图形验证码" v-model="captcha">
                            <img src="http://localhost:5000/captcha" alt="图形验证码" @click="changeCaptcha" ref="captchaImg">
                        </div>
                        <div class="verification_summit">
                            <button type="submit">登录</button>
                        </div>
                        <div class="changeLogin" @click="loginWay=true">
                            切换到手机号登录
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <AlertTip :alertText="alertText" v-show="showAlertTip" @closeTip="closeTip"></AlertTip>
    </div>
</template>
<script>
    import AlertTip from "../../components/AlertTip/AlertTip";
    import {
        reqLoginPwd, //  密码登录
        reqSendCode, // 获取验证码
        reqLoginSms  // 电话号码登录/短信登录
    } from "../../api";
    export default {
        name: "Login",
        data(){
            return {
                loginWay: true,//true代表电话登录，false代表密码登录
                phone: "", //手机号
                code: "",//手机号登录时短信验证码
                countDown: 0, //倒计时
                showPassword: true,//是否显示密码，true表示显示
                name: "", //密码登录时的用户名
                pwd: "", //密码登录时的密码
                captcha: "",//图形验证码
                alertText: "",//提示框的内容
                showAlertTip: false,//是否显示提示框
            }
        },
        computed:{
            //检查手机号输入是否正确，以1开头的十一位数
            rightPhone: function(){
                let patternPhone = /^1\d{10}$/;
                return patternPhone.test(this.phone);
            }
        },
        components:{
            AlertTip
        },
        methods:{
            //异步获取验证码
             async getCode(){
                let {phone, rightPhone} = this; //对象语法的解构赋值
                if(rightPhone && !this.countDown){ //手机号合法并且countDown===0时才触发
                    //倒计时效果
                    this.countDown = 60;
                    //使用setInterval实现倒计时，每隔1秒this.countDown减1
                    this.timer = setInterval(() => { //使用箭头函数的作用，函数里面的this与getCode中一样
                        this.countDown--;//如果这条语句放在if语句之后，则会发生不能多次点击按钮（倒计时一次之后，不再倒计时）
                        if(this.countDown === 0){
                            clearInterval(this.timer); //timer不使用let声明,为了后面可以使用
                        }
                    },1000);
                }
                //发送ajax请求，获取验证码登录中的验证码
                let result = await reqSendCode(this.phone);
                if(result.code === 1){ //获取失败
                    //弹出提示框
                    this.showAlertTip = true;
                    this.alertText = result.msg;
                    //停止倒计时
                    if(this.countDown !== 0){
                        this.countDown = 0;
                        clearInterval(this.timer);
                        this.timer = null;//
                    }
                }
            },
            //显示提示框封装函数
            showAlertTipFun(alertText){
                this.showAlertTip = true;
                this.alertText = alertText;
            },
            closeTip(){
                this.showAlertTip = false;
                this.alertText = "";
            },
            //获取动态图形验证码
            changeCaptcha(){
                //方法一ref用在普通元素上面获得该元素
                this.$refs.captchaImg.src = `http://localhost:5000/captcha?time=${Date.now()}`;
                //方法2 需要添加参数event 这里不可用的原因是，这个封装成为函数，有两处调用，一次是点击事件（可以使用event），一次函数的调用（不可以）
                //event.target.src = `http://localhost:5000/captcha?time=${Date.now()}`;
            },
            //异步登录
            async login(){
                //手机号登录（短信登录）
                if(this.loginWay){
                    //前台验证（前端对数据进行简单的处理）
                    let {rightPhone, phone, code} = this; //获取模版中data等中数据时，如不需要修改，可以将其赋值给局部变量
                    let codePattern = /^\d{6}$/;  //6位数验证码正则
                    let rightCode = codePattern.test(code); //验证码是否是六位数
                    if(!rightPhone){ //手机号不正确
                        this.showAlertTipFun("手机号不正确");
                        return; //退出该函数的执行
                    }
                    else if(!rightCode){//手机验证码不正确
                        this.showAlertTipFun("手机验证码不正确");
                        return;//退出该函数的执行
                    }

                    /*异步登录并处理结果*/
                    //异步请求登录
                    let result = await reqLoginSms(phone, code);//后台会验证登录信息是否正确，不需要前台验证
                    if(result.code === 0){//登录成功
                        // 存储用户信息到state中，方便整个app读取用户信息
                        this.userInfo = result.data;
                        this.$store.dispatch("recordUserInfo", this.userInfo);
                        // 路由跳转  返回上一级路由
                        this.$router.back();
                    }
                    else if(result.code === 1){ //登录失败
                        //弹出警告框
                        this.showAlertTipFun(result.msg);
                    }
                }
                //密码登录
                else{
                    /*前台对输入信息进行简单的验证*/
                    let {name, pwd, captcha}  = this
                    //用户名不正确
                    if(!name){
                        this.showAlertTipFun("用户名不正确");
                        return;
                    }
                    //密码不正确
                    else if(!pwd){
                        this.showAlertTipFun("密码不正确");
                        return;
                    }
                    //图形验证码不正确
                    else if(!captcha){ //验证码为空时，可以添加其他逻辑，比如位数什么的
                        this.showAlertTipFun("图形验证码错误");
                        return;
                    }

                    /*异步登录并处理结果*/
                    //异步请求登录
                    let result = await reqLoginPwd({name, pwd, captcha});//后台会验证登录信息是否正确，不需要前台验证
                    if(result.code === 0){//登录成功
                        // 存储用户信息到state中，方便整个app读取用户信息
                        this.userInfo = result.data;
                        this.$store.dispatch("recordUserInfo", this.userInfo);
                        // 路由跳转  返回上一级路由
                        this.$router.back();
                    }
                    else if(result.code === 1){ //登录失败
                        //弹出警告框
                        this.showAlertTipFun(result.msg);
                        //图形验证码需要更新(无论成功后者失败) 所以该函数不能使用event取得dom元素
                        this.changeCaptcha();
                    }
                }
            }
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./css/login.styl"
</style>