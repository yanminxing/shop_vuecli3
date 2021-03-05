<!--  -->
<template>
    <div class="chat_wrap">
        <div class="shop">
            <div class="menu_wrap">
                <ul>
                    <li
                            v-for="(item, index) in leftD"
                            :key="index"
                            :class="{ current: index === currentIndex }"
                            @click="clickLeftItem(index)"
                            ref="meneList"
                    >
                        <span>{{ item }}</span>
                    </li>
                </ul>
            </div>
            <div class="shop_wrap">
                <ul ref="shopListP">
                    <li class="shopList" v-for="item in rightD" :key="item.title">
                        <div class="shop_title">
                            <div class="title_t">
                                <h4>{{ item.title }}</h4>
                                <a href="###">{{ item.msg }}</a>
                            </div>
                            <ul>
                                <li v-for="items in item.list" :key="items">
                                    <img :src="items.imgUrl" alt />
                                    <span>{{ items.title }}</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from "better-scroll";
    export default {
        name: "Chat",
        data() {
            return {
                scrollY: 0, //右侧列表滚动的y轴
                rightItemTop: [], //所有分类的头部位置
            };
        },
        watch: {
            // // searchGoods 是请求回来的数据 监听这个数据的变化 然后调用 由于写死的数据 因此在mounted之中调用 实际上this.$nextTick存放在watch之中
            // searchGoods() {
            //   this.$nextTick(() => {
            //     this.init();
            //   });
            // }
        },
        mounted() {
            //基本的滚动 就是在 mounted之中调用的
            this.$nextTick(() => {
                this.init();
                // 求出 所有版块的头部位置
                this.rightListTop();
            });
        },
        computed: {
            //左侧的动态选中
            currentIndex() {
                //获取数据
                const { scrollY, rightItemTop } = this;
                // 取出索引 滚动到哪里 然后左侧显示高亮
                return rightItemTop.findIndex((LiTop, index) => {
                    this._leftScroll(index); //调用 左侧的联动
                    return scrollY >= LiTop && scrollY < rightItemTop[index + 1];
                });
            }
        },
        methods: {
            init() {
                //左侧
                this.leftScroll = new BScroll(".menu_wrap", {
                    scrollY: true,
                    click: true
                });
                // 右侧
                this.rightScroll = new BScroll(".shop_wrap", {
                    scrollY: true,
                    click: true,
                    probeType: 3 //滚动时候 监听
                });
                //监听右侧的滚动事件
                this.rightScroll.on("scrollEnd", pos => {
                    //scroll  scrollEnd滚动结束的时候 监听
                    this.scrollY = Math.abs(pos.y);
                });
            },
            // 获取右侧的 每一个模块的距离顶部的距离
            rightListTop() {
                const tempArr = [];
                let top = 0; //记录高度
                tempArr.push(top);
                // 遍历 对应的ul 中的li 取出每一个高度
                let allList = this.$refs.shopListP.querySelectorAll(".shopList");
                allList.forEach(item => {
                    top += item.clientHeight;
                    // console.log("top", top);
                    tempArr.push(top);
                });
                this.rightItemTop = tempArr;
            },
            //点击切换
            clickLeftItem(index) {
                // console.log("index", this.rightItemTop[index]);
                this.scrollY = this.rightItemTop[index];
                this.rightScroll.scrollTo(0, -this.scrollY, 300);
            },
            //右侧滚动时候 实现左侧的联动
            _leftScroll(index) {
                let meneList = this.$refs.meneList;
                // console.log("左侧", index, meneList);
                let el = meneList[index];
                this.leftScroll.scrollToElement(el, 300, 0, -100);
            }
        },
        components: {}
    };
</script>
<style lang="scss" scoped>
    ul,
    li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .chat_wrap {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .shop {
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;

            .menu_wrap {
                width: 75px;
                height: 100%;
                background: #ccc;
                & > ul > li {
                    width: 75px;
                    height: 60px;
                    background: #fafafa;
                    span {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                    }
                }
                .current {
                    position: relative;
                    color: red;
                    &::before {
                        position: absolute;
                        left: 0;
                        top: 15px;
                        content: "";
                        height: 30px;
                        background: red;
                        width: 4px;
                    }
                }
            }
            .shop_wrap {
                width: 300px;
                height: 100%;
                // background: yellow;
                overflow-x: hidden;
                overflow-y: scroll;
                .shop_title {
                    & > .title_t {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    & > ul {
                        display: flex;
                        flex-wrap: wrap;
                    }
                    & > ul > li {
                        width: 50%;
                        height: 130px;
                        margin-bottom: 5px;
                        background: pink;
                        img {
                            width: 100%;
                            height: 85%;
                        }
                        span {
                            display: block;
                            height: 20px;
                            line-height: 20px;
                            color: #fff;
                            text-align: center;
                            background: #000;
                        }
                    }
                }
            }
        }
    }
</style>

