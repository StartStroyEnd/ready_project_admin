import { getMenuList } from "../../api";

const state = {
  menuList: [],
};
const mutations = {
  SAVE_HOMEMENULIST(state, data) {
    state.menuList = data;
  },
};
const actions = {
  async getMenuList({ commit }) {
    const res = await getMenuList();
    if (res.meta.status === 200) {
      commit("SAVE_HOMEMENULIST", res.data);
    }
  },
};
const getters = {
  menuList(state) {
    return state.menuList;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
