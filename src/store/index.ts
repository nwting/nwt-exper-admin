import { ActionTree, createStore } from "vuex";
import { Menu, Role } from "@/role/Menu";
import router from "@/router";
import * as types from "./VuexTypes";

export interface State {
  role?: string | null;
  roleList?: Role[];
}

const state: State = {
  role: null,
  roleList: [],
};

const mutations = {
  [types.SET_ROLE](state: State, data: string) {
    state.role = data;
  },
  [types.SET_ROLELIST](state: State, data: Role[]) {
    state.roleList = data;
  },
};

// const getters = {
//   premission: (state: State) => (level: number[]) =>
//     level.some((l) => l == state.role),
// };
const actions: ActionTree<State, State> = {
  async [types.LOGIN]({ commit }, data: string) {
    // 此处向后端发出登录请求。后端返回token以及加密role，置于sessionstorage
    // 每次请求在header中携带token
    // 并基于role加载对应的角色权限路由/功能列表等信息，也可加载对应的API请求操作
    // if (data == "1") {
    commit(types.SET_ROLE, data);
    sessionStorage.setItem("role", data);
    const { setUserRole } = await import("@/role/UserRole.ts");
    const roleList = setUserRole();
    commit(types.SET_ROLELIST, roleList);
    // router.push("/main");
    const mroleNum = data;
    router.push({ path: `/main/${mroleNum}` });
    // }
  },
};

export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  // getters: getters,
});
