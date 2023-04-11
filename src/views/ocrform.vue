<template>
    <div class="ocrform">
        <TopDesc desc="OCR From"></TopDesc>
        <!-- form表单 -->
        <div class="form">
            <van-cell-group>
                <van-field v-model="ocr.sfzq.realName" label="RealName" placeholder="Please enter your first name" clearable
                    label-width="30%" :rules="rule"></van-field>
                <van-field label="Birthday" placeholder="Please enter birthday" clearable label-width="30%"
                    @click="showPicker = true" v-model="birthday" />
                <van-popup v-model="showPicker" position="bottom">
                    <van-datetime-picker v-model="currentDate" :min-date="minDate" :max-date="maxDate" type="date"
                        confirm-button-text="confirm" cancel-button-text="cancel" title="Please select a birthday"
                        @confirm="doConfirm" />
                </van-popup>
                <van-field v-model="ocr.sfzq.idCard" label="IdCard" placeholder="Please enter idCard" clearable
                    label-width="30%" :rules="rule"></van-field>
                <van-field v-model="ocr.sfzh.pinCode" label="PinCode"
                    placeholder="Please enter your personal identification code" clearable label-width="30%"
                    :rules="rule"></van-field>
                <van-field v-model="ocr.bank.taxRegNumber" label="TaxRegNumber"
                    placeholder="Please enter the tax registration number" clearable label-width="30%"
                    :rules="rule"></van-field>
            </van-cell-group>
            <van-button type="primary" class="btn" @click="doClick">Submit</van-button>
        </div>
    </div>
</template>

<script>
import { subUserInfoAPI } from "../api";
import { jiami, jiemi } from "../utils/AESKEY.js";
import { Toast } from "vant";
export default {
    data() {
        return {
            rule: [{
                required: true,
                message: '该项为必填项',
                trigger: 'blur',
            }],
            birthday: '',
            showPicker: false,
            currentDate: new Date(this.$store.state.ocr.bank.birthDay),
            minDate: new Date(1900, 0, 1),
            maxDate: new Date(Date.now()),
        }
    },
    methods: {
        //选择生日完毕时触发
        doConfirm(value) {
            this.showPicker = false
            const timer = new Date(value).getTime()
            this.birthday = this.formatDate(timer)
            console.log(this.birthday)
        },
        //提交表单信息
        async doClick() {
            const f = {
                model: {
                    idCard: this.ocr.sfzh.idCard,
                    realName: this.ocr.sfzq.realName,
                    taxRegNumber: this.ocr.bank.taxRegNumber,
                    birthDay: '',
                    idCardImageFront: this.ocr.img.sfzqImg,
                    idCardImageBack: this.ocr.img.sfzhImg,
                    idCardImagePan: this.ocr.img.bankImg
                }
            }
            f.model.birthDay = Date.parse(this.birthday)
            console.log(f, 'ocr表单数据')
            const res = await subUserInfoAPI(jiami(f))
            console.log(jiemi(res.data))
            if (jiemi(res.data).status == 0) {
                Toast('Successfully submitted')
                this.$router.push('/')
            }
        },
        //时间戳转成年月日
        formatDate(timestamp) {
            const date = new Date(timestamp);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
    },
    created() {
        this.birthday = this.formatDate(this.$store.state.ocr.bank.birthDay)
    },
    computed: {
        ocr() {
            return this.$store.state.ocr
        }
    }
}
</script>

<style lang="less" scoped>
.ocrform {
    padding-top: (80/@a);

    .btn {
        width: (300/@a);
        height: (44/@a);
        background: #2C8F48;
        border-radius: (10/@a);
        margin-top: (20/@a);
        margin-left: (35/@a);
        text-align: center;
        line-height: (44/@a);
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: (18/@a);
        color: #fff;
    }
}
</style>