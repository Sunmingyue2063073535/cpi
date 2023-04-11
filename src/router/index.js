import Vue from "vue";
import VueRouter from "vue-router";
import goodlist from '../views/GoodList.vue'
import login from '../views/login.vue'
import ocr from "../views/ocr.vue";
import ocrform from '../views/ocrform.vue'
import store from "../store";
Vue.use(VueRouter);
const routes = [
  { path: '/', component: login },
  { path: '/goodlist', component: goodlist },
  { path: '/ocr', component: ocr },
  { path: '/ocrform', component: ocrform },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // 判断用户登录没有
  // if (to.path = '/' && !store.state.userInfo) {
  //   next('')
  // } else {
  //   next('/goodlist')
  // }
  if (to.fullPath === '/' && !store.state.isLogin) {
    console.log('我想去登录页')
  }
  next()
})
export default router;