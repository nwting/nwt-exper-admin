import { ActionTree, createStore } from "vuex";
import { Menu, Role, UserInfo, Lab, OrderedInfo } from "@/role/Menu";
import { getuserinfoList } from "@/role/UserInfo";
import { getlabinfoList } from "@/role/LabInfo";
import router from "@/router";
import axios from "axios";
import { ResultVO } from "@/mock";
import * as types from "./VuexTypes";
import { getorderedinfoList } from "@/role/OrderedInfo";

export interface State {
  role?: string | null;
  roleList?: Role[];
  userinfoList?: UserInfo[];
  userinfo: UserInfo;
  labinfoList?: Lab[];
  labinfo: Lab;
  orderedinfoList?: OrderedInfo[];
}

const state: State = {
  role: null,
  roleList: [],
  userinfoList: [],
  userinfo: { id: "" },
  labinfoList: getlabinfoList(),
  labinfo: { id: "" },
  orderedinfoList: getorderedinfoList(),
};

const mutations = {
  [types.SET_ROLE](state: State, data: string) {
    state.role = data;
  },
  [types.SET_ROLELIST](state: State, data: Role[]) {
    state.roleList = data;
  },
  [types.SET_USERINFOLIST](state: State, data: UserInfo[]) {
    state.userinfoList = data;
  },
  [types.UPDATE_USER]: (state: State, data: UserInfo) =>
    (state.userinfo = data),
  [types.UPDATE_LABLIST]: (state: State, date: Lab) =>
    state.labinfoList?.push(date),
};

// const getters = {
//   premission: (state: State) => (level: number[]) =>
//     level.some((l) => l == state.role),
// };
const actions: ActionTree<State, State> = {
  [types.UPDATE_USER]: ({ commit }, user: UserInfo) => {
    setTimeout(() => commit(types.UPDATE_USER, user), 1000);
  },
  async [types.UPDATE_LABLIST]({ commit }, newlab: Lab) {
    try {
      const resp = await axios.post<ResultVO>("updateLabList", newlab);
    } catch (error) {
      //
    }
  },
  async [types.LOGIN]({ commit }, user: UserInfo) {
    try {
      const resp = await axios.post<ResultVO>("login", user);
      // console.log(resp.data.data.userinfo);
      commit(types.UPDATE_USER, resp.data.data.userinfo);
      const userinfo = resp.data.data.userinfo;
      commit(types.SET_ROLE, userinfo.role);
      sessionStorage.setItem("role", userinfo.role);
      const { setUserRole } = await import("@/role/UserRole.ts");
      const roleList = setUserRole();
      commit(types.SET_ROLELIST, roleList);
      // router.push("/main");
      const mroleNum = userinfo.role;
      router.push({ path: `/main/${mroleNum}` });
    } catch (error) {
      //
    }
    // }
  },
};

export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  // getters: getters,
});
