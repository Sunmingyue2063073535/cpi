import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    userInfo: {},
    //ocr
    ocr: {},
    ocrDone: false,
    //loadding
    isShow: false,
    //是否登录
    isLogin: false,
  },
  getters: {},
  mutations: {
    //登录
    onChangeLogin(state) {
      state.isLogin = true
    },
    //显示
    isTrue(state) {
      state.isShow = true
    },
    //隐藏
    isFalse(state) {
      state.isShow = false
    },
    //设置用户信息
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
    //清除用户信息
    clearUserInfo(state) {
      state.userInfo = {}
    },
    //设置用户上传的ocr
    setOcr(state, payload) {
      state.ocr = payload
    },
    //ocr通过了
    setOcrDone(state) {
      state.ocrDone = true
    }
  },
  actions: {},
  modules: {},
});