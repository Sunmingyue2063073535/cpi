<template>
    <div class="topdesc">
        <div class="callback" @click="$router.back()">
            <img src="../assets/callback.png" alt="">
        </div>
        <div class="desc">{{ desc }}</div>
    </div>
</template>

<script>
export default {
    name: 'topdesc',
    props: { desc: String }
}
</script>

<style lang="less" scoped>
.topdesc {
    position: fixed;
    width: 100vw;
    height: (56/@a);
    top: 0;
    left: 0;
    width: 100vw;
    background: #fff;
    border-radius: 0 0 (26/@a) (26/@a);
    text-align: center;

    .info {
        font-size: (10/@a);
        font-family: Nirmala UI;
        font-weight: bold;
        color: #FFFFFF;
        margin-top: (15/@a);
    }

    .desc {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: (18/@a);
        color: #202020;
        margin-top: (10/@a);
    }

    .callback {
        line-height: (65/@a);
        width: (10/@a);
        height: (10/@a);
        margin-left: (22/@a);

        img {
            width: 100%;
        }
    }
}
</style>