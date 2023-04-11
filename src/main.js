import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './style/base.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import MyCom from './components'
import { uploadInstallIdAPI, uploadInstallReferrerAPI } from './api'
import { jiami, jiemi } from "./utils/AESKEY";
Vue.use(MyCom)
Vue.use(Vant);
Vue.config.productionTip = false;
// window.updateData = function (item) {
//   if (item && item.type == 2 && item.id) {
//     const result = uploadInstallIdAPI(jiami({ model: item.id || null }))
//     // console.log(item.id, '第二个id')
//     // console.log(JSON.stringify(jiemi(result.data)), '上报InstanceId')
//     console.log(result, '上报InstanceId')
//     // console.log('222')
//   }
//   if (item && item.type == 3) {
//     // console.log(JSON.stringify(item), 'InstallReferrer')
//     const result = uploadInstallReferrerAPI(jiami({ model: item || {} }))
//     // console.log(JSON.stringify(jiemi(result.data)), '上报InstallReferrer')
//     console.log(result, '上报InstallReferrer')
//     // console.log('333')
//   }
// }
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");