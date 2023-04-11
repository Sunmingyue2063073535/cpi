<template>
    <div class="istonext">
        <login v-if="!$store.state.isLogin"></login>
        <GoodList v-if="$store.state.isLogin && $store.state.toGood"></GoodList>
    </div>
</template>

<script>
import login from './login'
import GoodList from './GoodList'
export default {
    components: { login, GoodList }
}

</script>