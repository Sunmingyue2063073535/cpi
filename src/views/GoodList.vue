<template>
    <div class="goodList">
        <div class="gl-title">recommended to you</div>
        <ul class="liebiao">
            <li v-for="item in list" :key="item.id">
                <!-- banner图 -->
                <div class="lb-banner">
                    <img :src="toIcon(item.iconBig)" alt="">
                </div>
                <!-- 详情 -->
                <div class=" lb-content">
                    <div class="lb-icon">
                        <img :src="toIcon(item.icon)" alt="">
                    </div>
                    <div class="lb-desc">
                        <div class="lb-name">{{ item.productName }}</div>
                        <div class="lb-pinfen">
                            <div class="lb-pinfen-icon">
                                <img src="../assets/start.png" alt="">
                                <img src="../assets/start.png" alt="">
                                <img src="../assets/start.png" alt="">
                                <img src="../assets/start.png" alt="">
                                <img src="../assets/start.png" alt="">
                            </div>
                            <div class="fenshu">{{ item.googleScore }}.0</div>
                        </div>
                    </div>
                    <div class="lb-btn" @click="doClick(item)"><span>download</span></div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { tuijianAppApi } from "../api";
import { jiami, jiemi } from "../utils/AESKEY.js";
export default {
    data() {
        return {
            //app列表
            list: []
        }
    },
    methods: {
        //图标链接
        toIcon(icon) {
            return `https://app.fidelitywallet.life/lt-image/resize/0x0/${icon}`
        },
        async doClick(item) {
            window.location.href = item.url
        },
        //获取推荐app列表
        async getAppList() {
            const f = {
                query: {
                    pageNo: 1,
                    pageSize: 10
                }
            }
            const res = await tuijianAppApi(jiami(f))
            this.list = jiemi(res.data).page.content
            console.log(jiemi(res.data))
        }
    },
    created() {
        this.getAppList()
    }
}
</script>
<style lang="less" scoped>
.goodList {
    padding-left: (20/@a);
    padding-right: (20/@a);

    .liebiao {
        li {
            margin-bottom: (28/@a);

            .lb-banner {
                width: (320/@a);
                height: (150/@a);

                img {
                    width: (320/@a);
                    height: (150/@a);
                }
            }

            // 详情
            .lb-content {
                margin-top: (20/@a);
                display: flex;
                justify-content: space-around;

                .lb-icon {
                    width: (54/@a);
                    height: (54/@a);

                    img {
                        width: 100%;
                    }
                }

                .lb-desc {
                    margin-right: (30/@a);

                    .lb-name {
                        font-family: 'Roboto';
                        font-style: normal;
                        font-weight: 700;
                        font-size: (18/@a);
                    }

                    .lb-pinfen {
                        display: flex;

                        .fenshu {
                            margin-top: (3/@a);
                            margin-left: (20/@a);
                            font-family: 'Roboto';
                            font-style: normal;
                            font-weight: 400;
                            font-size: (16/@a);
                            color: #5F6368;
                        }
                    }
                }

                .lb-btn {
                    width: (70/@a);
                    height: (30/@a);
                    margin-top: (14/@a);
                    background: #1BA075;
                    border-radius: (15/@a);
                    font-family: 'Roboto';
                    font-style: normal;
                    text-align: center;



                    span {
                        line-height: (30/@a);
                        font-weight: 700;
                        color: #FFFFFF;
                        font-size: (10/@a);
                        transform: scale(0.8);
                    }
                }
            }
        }
    }

    .gl-title {
        margin-top: (29/@a);
        margin: (15/@a);
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: (18/@a);
    }
}
</style>