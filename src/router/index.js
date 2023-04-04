import Vue from "vue";
import VueRouter from "vue-router";
import goodlist from '../views/GoodList.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: goodlist }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;