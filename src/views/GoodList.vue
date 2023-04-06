<template>
    <div class="goodList">
        <div class="gl-title">recommended to you</div>
        <ul class="liebiao">
            <li v-for="i in 10">
                <!-- banner图 -->
                <div class="lb-banner">
                    <img src="../assets/banner.png" alt="">
                </div>
                <!-- 详情 -->
                <div class="lb-content">
                    <div class="lb-icon">
                        <img src="../assets/icon.png" alt="">
                    </div>
                    <div class="lb-desc">
                        <div class="lb-name">YES Accouloan</div>
                        <div class="lb-pinfen">
                            <div class="lb-pinfen-icon">
                                <img src="../assets/start.png" alt="">
                                <img src="../assets/start.png" alt="">
                                <img src="../assets/start.png" alt="">
                                <img src="../assets/start.png" alt="">
                                <img src="../assets/start.png" alt="">
                            </div>
                            <div class="fenshu">5.0</div>
                        </div>
                    </div>
                    <div class="lb-btn" @click="doClick"><span>download</span></div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        async doClick() {
            this.$router.push('/ocr')
        }
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
                    width: 100%;
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