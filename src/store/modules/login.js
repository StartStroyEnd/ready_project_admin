import { reqLogin } from "../../api";

const state = {
  token: "",
};
const mutations = {
  SAVE_TOKEN_INFO(state, token) {
    state.token = token;
  },
};
const actions = {
  async login({ commit }, userInfo) {
    const res = await reqLogin(userInfo);
    if (res.meta.status === 200) {
      commit("SAVE_TOKEN_INFO", res.data.token);
    }
  },
};
const getters = {
  token(state) {
    return state.token;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
