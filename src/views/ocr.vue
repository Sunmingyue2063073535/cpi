<template>
    <div class="ocr">
        <TopDesc desc="Ocr Inspection"></TopDesc>
        <div class="ocr-desc">*Please Upload A Clear Photo Of Your ID Card HereWhich Willlncrease The Success Rate of
            <span>Your Loan Application From 20% To30%</span>
        </div>
        <!-- 身份证前 -->
        <div class="sfzq">
            <div class="sfzq-left">
                <div class="sfzq-left-top">Aadhaar Front</div>
                <div class="sfzq-left-bottom">Click Here To Upload
                    The Aadhaar Front</div>
            </div>
            <div class="sfzq-right" @click="doSfzq">

                <input class="sfz" id="sfzqian" type="file" accept="image/*" capture="camera" @change="handleFileInputqian"
                    style="width:50px'">
                <img :src="sfzqImg" alt="">
            </div>
        </div>
        <!-- 身份证后 -->
        <div class="sfzq">
            <div class="sfzq-left">
                <div class="sfzq-left-top">Aadhaar Back</div>
                <div class="sfzq-left-bottom">Click Here To Upload
                    The Aadhaar Back</div>
            </div>
            <div class="sfzq-right" @click="doSfzh">
                <input class="sfz" id="sfzhou" type="file" accept="image/*" capture="camera" @change="handleFileInputhou"
                    style="width:50px'">
                <img :src="sfzhImg" alt="">
            </div>
        </div>
        <!-- bank -->
        <div class="sfzq">
            <div class="sfzq-left">
                <div class="sfzq-left-top">Pan Card Front</div>
                <div class="sfzq-left-bottom">Click Here To Upload
                    The Pan Card Front</div>
            </div>
            <div class="sfzq-right" @click="doBank">
                <input class="sfz" id="bank" type="file" accept="image/*" capture="camera" @change="handleFileInputbank"
                    style="width:50px'">
                <img :src="bankImg" alt="">
            </div>
        </div>
        <!-- 按钮 -->
        <div class="ocr-btn" @click="doClick">Continue</div>

    </div>
</template>
<script>
import { uploadFileApi, zhengjainshibieAPI } from "../api";
import { jiemi, jiami } from '../utils/AESKEY.js'
import { Toast } from 'vant'
export default {
    data() {
        return {
            sfzqImg: require('../assets/sfzq.png'),
            sfzhImg: require('../assets/sfzh.png'),
            bankImg: require('../assets/bank.png'),
            user: {
                sfzq: {},
                sfzh: {},
                bank: {},
                img: {
                    sfzqImg: '',
                    sfzhImg: '',
                    bankImg: ''
                }
            }
        }
    },
    methods: {

        async doClick() {
            console.log(this.user)
            if (this.user.img.sfqImg !== '' && this.user.img.sfzhImg !== '' && this.user.img.bankImg !== '') {
                this.$router.push('/ocrform')
                this.$store.commit('setOcr', this.user)
            } else {
                Toast('Please upload your ID')
            }
        },
        //证件识别
        async zjsb(file, cardType) {
            const form = {
                model: {
                    url: file,
                    cardType: cardType
                }
            }
            const res = await zhengjainshibieAPI(jiami(form))
            console.log(jiemi(res.data), '识别证件结果')
            return jiemi(res.data).model
        },
        //base64转成file对象
        base64toFile(base64String, fileName) {
            const binaryString = atob(base64String.split(',')[1]);
            const buffer = new ArrayBuffer(binaryString.length);
            const bytes = new Uint8Array(buffer);

            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }

            const blob = new Blob([buffer], { type: 'image/png' });
            return new File([blob], fileName, { type: 'image/png' });
        },
        // 身份证前
        handleFileInputqian() {
            this.$store.commit('isTrue')
            // 获取图片元素的引用
            const photo = this.$refs.photo
            // 获取用户选择的文件对象
            const file = event.target.files[0]
            // 创建一个FileReader对象，用于读取文件内容
            const reader = new FileReader()
            // 当文件读取完成后，触发onload事件
            reader.onload = async () => {
                // 将读取的文件内容设置为图片的src属性
                // photo.src = reader.result

                const newFile = this.base64toFile(reader.result, file.name)
                const fileObj = {
                    content: reader.result,
                    file: newFile,
                    message: '',
                    status: ''
                }
                const newFileObj = await this.photoZip(fileObj.file)
                console.log(newFileObj, '1')
                //压缩后的
                const res = await uploadFileApi(newFileObj)
                console.log(jiemi(res.data), '上传图片的结果身份证前')
                this.sfzqImg = jiemi(res.data).model.id
                this.user.sfzq = await this.zjsb(jiemi(res.data).model.id, 'FRONT')
                this.user.img.sfzqImg = jiemi(res.data).model.id
                // this.user.sfqian = jiemi(res.data).model.id
            }
            // 开始读取文件内容，这会触发onload事件
            reader.readAsDataURL(file)
        },
        doSfzq() {
            document.getElementById('sfzqian').click()
        },
        //身份证后
        handleFileInputhou() {
            this.$store.commit('isTrue')
            // this.$store.commit('showLoading')
            // 获取图片元素的引用
            const photo = this.$refs.photo
            // 获取用户选择的文件对象
            const file = event.target.files[0]
            // 创建一个FileReader对象，用于读取文件内容
            const reader = new FileReader()
            // 当文件读取完成后，触发onload事件
            reader.onload = async () => {
                // 将读取的文件内容设置为图片的src属性
                // photo.src = reader.result
                const newFile = this.base64toFile(reader.result, file.name)
                const fileObj = {
                    content: reader.result,
                    file: newFile,
                    message: '',
                    status: ''
                }
                const newFileObj = await this.photoZip(fileObj.file)
                // console.log(JSON.stringify(newFileObj), '2')
                //压缩后的
                const res = await uploadFileApi(newFileObj)
                console.log(jiemi(res.data), '上传图片的结果身份证后')
                this.sfzhImg = jiemi(res.data).model.id
                this.user.sfzh = await this.zjsb(jiemi(res.data).model.id, 'BACK')
                this.user.img.sfzhImg = jiemi(res.data).model.id
                // this.user.sfqian = jiemi(res.data).model.id
            }
            // 开始读取文件内容，这会触发onload事件
            reader.readAsDataURL(file)
        },
        doSfzh() {
            document.getElementById('sfzhou').click()
        },
        // 银行卡
        handleFileInputbank() {
            this.$store.commit('isTrue')
            // 获取图片元素的引用
            const photo = this.$refs.photo
            // 获取用户选择的文件对象
            const file = event.target.files[0]
            // 创建一个FileReader对象，用于读取文件内容
            const reader = new FileReader()
            // 当文件读取完成后，触发onload事件
            reader.onload = async () => {
                // 将读取的文件内容设置为图片的src属性
                // photo.src = reader.result

                const newFile = this.base64toFile(reader.result, file.name)
                const fileObj = {
                    content: reader.result,
                    file: newFile,
                    message: '',
                    status: ''
                }
                const newFileObj = await this.photoZip(fileObj.file)
                // console.log(JSON.stringify(newFileObj), '3')
                //压缩后的
                const res = await uploadFileApi(newFileObj)
                console.log(jiemi(res.data), '上传银行卡')
                this.bankImg = jiemi(res.data).model.id
                this.user.bank = await this.zjsb(jiemi(res.data).model.id, 'PAN')
                this.user.img.bankImg = jiemi(res.data).model.id
                // this.user.sfqian = jiemi(res.data).model.id
            }
            // 开始读取文件内容，这会触发onload事件
            reader.readAsDataURL(file)
        },
        doBank() {
            document.getElementById('bank').click()
        },


        // 压缩照片
        async photoZip(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    const base64 = reader.result;
                    const img = new Image();
                    img.src = base64;
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        context.drawImage(img, 0, 0);
                        const quality = 0.7;
                        const maxWidth = 800;
                        const maxHeight = 800;
                        let newBase64 = canvas.toDataURL('image/jpeg', quality);
                        console.log(newBase64.length / 1024, '11111111111111')
                        while (newBase64.length / 1024 > 100) {
                            canvas.width *= 0.9;
                            canvas.height *= 0.9;
                            context.drawImage(img, 0, 0, canvas.width, canvas.height);
                            newBase64 = canvas.toDataURL('image/jpeg', quality);
                        }
                        const blob = this.dataURLtoBlob(newBase64);
                        const newFile = new File([blob], file.name, { type: 'image/jpeg' });
                        console.log(newBase64.length / 1024, '33333333')
                        // 返回file对象格式
                        resolve({ file: newFile, content: newBase64, message: '', status: '' });
                    }
                }
                reader.onerror = reject;
            }
            );
        },
        dataURLtoBlob(dataURL) {
            const arr = dataURL.split(',');
            const mime = arr[0].match(/:(.*?);/)[1];
            const bstr = atob(arr[1]);
            let n = bstr.length;
            const u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], { type: mime });
        }
    }
}
</script>
<style lang="less" scoped>
.ocr {
    width: 100vw;
    padding-top: (60/@a);

    .ocr-btn {
        width: (300/@a);
        height: (44/@a);
        background: #2C8F48;
        border-radius: (10/@a);
        margin-top: (20/@a);
        margin-left: (25/@a);
        text-align: center;
        line-height: (44/@a);
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: (18/@a);
        color: #fff;
    }

    .sfzq {
        display: flex;
        width: (320/@a);
        height: (120/@a);
        background: #F5F6F9;
        border-radius: (8/@a);
        margin-top: (32/@a);
        margin-left: (25/@a);

        .sfz {
            display: none;
        }

        .sfzq-left {
            .sfzq-left-top {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: (15/@a);
                color: #209554;
                margin-top: (31/@a);
                margin-left: (20/@a);
                margin-bottom: (8/@a);
            }

            .sfzq-left-bottom {
                margin-left: (20/@a);
                margin-right: (17/@a);
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: (11/@a);
                color: #808080;
            }
        }

        .sfzq-right {
            max-width: (150/@a);
            max-height: (90/@a);
            margin-top: (15/@a);
            margin-right: (10/@a);

            img {
                max-width: (150/@a);
                max-height: (90/@a);
            }
        }
    }

    .ocr-desc {
        width: 100vw;
        height: (70/@a);
        padding-top: (10/@a);
        padding-left: (10/@a);
        background: #D9FFDF;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: (10/@a);

        span {
            color: #E73F3F;
        }
    }
}
</style>