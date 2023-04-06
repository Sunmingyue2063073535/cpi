<template>
    <div class="login">
        <div class="logo">
            <img src="../assets/login-hi.png" alt="">
        </div>
        <div class="desc">Welcome to Gain Wealth</div>
        <div class="form">

            <van-form @submit="onSubmit">
                <van-field class="phone" v-model="form.phone" name="手机号" placeholder="Enter phone number"
                    :rules="[{ required: true, message: 'Please fill in your phone number' }]" />
                <div class="phone-icon">
                    <img src="../assets/login-phone.png" alt="">
                </div>
                <div class="anquan-icon">
                    <img src="../assets/login-anquan.png" alt="">
                </div>
                <van-field class="yzm" v-model="form.code" name="验证码" placeholder="Enter verification code"
                    :rules="[{ required: true, message: 'Please fill in the verification code' }]" />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit" class="btn">Continue</van-button>
                </div>
                <div class="otp" @click="getYZM" v-if="isShow">OTP</div>
                <div class="djs" v-else>{{ num }} s</div>
            </van-form>

            <div class="desc">
                <van-checkbox v-model="checked" icon-size="24px" checked-color="#2c8f48"></van-checkbox>
                <div class="desc-info">To proceed to the next step means that you agree to
                    &lt;<span>Privacy Policy</span>&gt;and&lt;<span>Terms and Conditionn</span>&gt;.
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant'
export default {
    data() {
        return {
            // 登录表单
            form: {
                phone: '',
                code: '',
                phoneCode: '+91'
            },
            checked: false,
            num: 0,
            isShow: true,
        }
    },
    methods: {
        onSubmit() {
            if (this.checked) {
                console.log(this.form)
            } else {
                Toast('Please check the agreement first')
            }
        },
        //点击发送
        getYZM() {
            this.djs()
        },
        //倒计时
        djs() {
            this.isShow = false
            this.num = 60
            let timer = setInterval(() => {
                this.num--
                if (this.num < 0) {
                    this.isShow = true
                    clearInterval(timer)
                }
            }, 1000)
        }
    }
}
</script>

<style lang="less" scoped>
.login {
    width: 100vw;
    height: (667/@a);
    background-color: #28af55;
    padding-top: (37/@a);

    .form {
        position: relative;
        padding-top: (55/@a);

        .otp {
            position: absolute;
            top: (165/@a);
            right: (60/@a);
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: (16/@a);
            color: #23AF28;
        }

        .djs {
            position: absolute;
            top: (165/@a);
            right: (60/@a);
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: (16/@a);
            color: #C2C9C2;
        }

        .desc {
            margin-top: (70/@a);
            display: flex;
            align-items: center;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: (9/@a);
            color: #A6A5A5;
            transform: scale(0.8);

            .desc-info {
                width: (300/@a);
                height: (50/@a);
                margin-left: (10/@a);

                span {
                    color: #2c8f48;
                }
            }

        }

        .phone-icon {
            position: absolute;
            top: (75/@a);
            left: (45/@a);
            width: (16/@a);
            height: (20/@a);

            img {
                width: 100%;
            }
        }

        .anquan-icon {
            position: absolute;
            z-index: 1;
            top: (165/@a);
            left: (45/@a);
            width: (16/@a);
            height: (20/@a);

            img {
                width: 100%;
            }
        }

        .phone {
            width: (310/@a);
            height: (60/@a);
            background: #F5F5FA;
            border-radius: (25/@a);
            margin-left: (25/@a);
            padding-left: (52/@a);
            padding-top: (15/@a);
        }

        .yzm {
            width: (310/@a);
            height: (60/@a);
            margin-top: (30/@a);
            background: #F5F5FA;
            border-radius: (25/@a);
            margin-left: (25/@a);
            padding-left: (52/@a);
            padding-top: (15/@a);
        }

        .btn {
            width: (310/@a);
            height: (48/@a);
            border-radius: (76/@a);
            background-color: #2c8f48;
            margin-right: (60/@a);
            margin-top: (60/@a);
            margin-left: (15/@a);
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: (18/@a);
        }
    }

    .form {
        margin-top: (30/@a);
        width: 100vw;
        height: (514/@a);
        border-radius: (25/@a) (25/@a) 0 0;
        background-color: #fff;
    }

    .logo {
        margin-left: (34/@a);
    }

    .desc {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: (20/@a);
        color: #fff;
        margin-top: (10/@a);
        margin-left: (34/@a);
    }
}
</style>