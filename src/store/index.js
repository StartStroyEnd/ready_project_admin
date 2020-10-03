import Vue from "vue";
import Vuex from "vuex";
// home页面
import home from "./modules/home";
import login from "./modules/login";

Vue.use(Vuex);

const state = {};
const mutations = {};
const actions = {};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    // 其他模块
    home,
    login,
  },
});
