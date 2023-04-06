import Vue from "vue";
import VueRouter from "vue-router";
import goodlist from '../views/GoodList.vue'
import login from '../views/login.vue'
import ocr from "../views/ocr.vue";
Vue.use(VueRouter);

const routes = [
  { path: '/', component: goodlist },
  { path: '/login', component: login },
  { path: '/ocr', component: ocr },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;