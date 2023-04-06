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
            <div class="sfzq-right">
                <img src="../assets/sfzq.png" alt="">
            </div>
        </div>
        <!-- 身份证后 -->
        <div class="sfzq">
            <div class="sfzq-left">
                <div class="sfzq-left-top">Aadhaar Back</div>
                <div class="sfzq-left-bottom">Click Here To Upload
                    The Aadhaar Back</div>
            </div>
            <div class="sfzq-right">
                <img src="../assets/sfzh.png" alt="">
            </div>
        </div>
        <!-- bank -->
        <div class="sfzq">
            <div class="sfzq-left">
                <div class="sfzq-left-top">Pan Card Front</div>
                <div class="sfzq-left-bottom">Click Here To Upload
                    The Pan Card Front</div>
            </div>
            <div class="sfzq-right">
                <img src="../assets/bank.png" alt="">
            </div>
        </div>
        <!-- 按钮 -->
        <div class="ocr-btn">Continue</div>

        <input class="sfz" id="sfzqian" type="file" accept="image/*" capture="camera" @change="handleFileInput"
            style="width:50px'">
    </div>
</template>
<script>
export default {
    methods: {
        handleFileInput() {
            handleFileInput
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
            width: (150/@a);
            height: (90/@a);
            margin-top: (15/@a);
            margin-right: (10/@a);

            img {
                width: 100%;
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