import { ActionTree, createStore } from "vuex";
import {
  Menu,
  Role,
  UserInfo,
  Lab,
  OrderedInfo,
  OrderForm,
  CourseInfo,
} from "@/role/Menu";
import { getuserinfoList } from "@/role/UserInfo";
import { getlabinfoList, updatelaboccupyinfo } from "@/role/LabInfo";
import router from "@/router";
import axios from "axios";
import { ResultVO } from "@/mock";
import * as types from "./VuexTypes";
import { getorderedinfoList } from "@/role/OrderedInfo";
import { getcourseinfoList } from "@/role/CourseInfo";

export interface State {
  role?: string | null;
  roleList?: Role[];
  userinfoList?: UserInfo[];
  userinfo: UserInfo;
  courseinfoList?: CourseInfo[];
  courseinfo: CourseInfo;
  labinfoList?: Lab[];
  labinfo: Lab;
  orderedinfoList?: OrderedInfo[];
  orderedinfo?: OrderForm;
  orderform?: OrderForm;
  updatecourselab?: OrderForm;
}

const state: State = {
  role: null,
  roleList: [],
  userinfoList: getuserinfoList(),
  userinfo: { id: "" },
  courseinfoList: getcourseinfoList(),
  courseinfo: { id: "" },
  labinfoList: getlabinfoList(),
  labinfo: { id: "" },
  orderedinfoList: getorderedinfoList(),
  orderedinfo: {},
  orderform: {},
  updatecourselab: {},
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
  [types.UPDATE_LABLIST]: (state: State, data: Lab) => (state.labinfo = data),
  [types.UPDATE_COURSELIST]: (state: State, data: CourseInfo) =>
    (state.courseinfo = data),
  [types.UPDATE_LABOCCUPY]: (state: State, data: OrderForm) => {
    state.orderform = data;
  },
  [types.UPDATE_ORDEREDLIST]: (state: State, data: OrderForm) => {
    state.orderedinfo = data;
  },
  [types.UPDATE_COURSELISTLAB]: (state: State, data: OrderForm) => {
    state.updatecourselab = data;
  },
};

// const getters = {
//   premission: (state: State) => (level: number[]) =>
//     level.some((l) => l == state.role),
// };
const actions: ActionTree<State, State> = {
  [types.UPDATE_USER]: ({ commit }, user: UserInfo) => {
    setTimeout(() => commit(types.UPDATE_USER, user), 1000);
  },
  async [types.CREATE_TEACHER]({ commit }, newteacher: UserInfo) {
    try {
      const resp = await axios.post<ResultVO>("createTeacher", newteacher);
    } catch (error) {
      //
    }
  },
  async [types.UPDATE_USERINFO]({ commit }, upinfo: UserInfo) {
    try {
      const resp = await axios.post<ResultVO>("updateUserList", upinfo);
      if (upinfo.id == state.userinfo.id) {
        commit(types.UPDATE_USER, resp.data.data.updateinfo);
      }
    } catch (error) {
      //
    }
  },
  async [types.DELETE_USERINFO]({ commit }, duid: string) {
    try {
      const resp = await axios.post<ResultVO>("deleteUserInfo", duid);
    } catch (error) {
      //
    }
  },
  async [types.UPDATE_LABOCCUPY]({ commit }, orderitem: OrderForm) {
    try {
      console.log("UPDATE_LABOCCUPY");
      const resp1 = await axios.post<ResultVO>(
        "updateLabInfo_Occupy",
        orderitem
      );
      commit(types.UPDATE_LABOCCUPY, resp1.data.data.orderform);
      const resp2 = await axios.post<ResultVO>("updateOrderedInfo", orderitem);
      commit(types.UPDATE_ORDEREDLIST, resp2.data.data.orderedinfo);
      const resp3 = await axios.post<ResultVO>(
        "updateCourseInfo_Lab",
        orderitem
      );
      commit(types.UPDATE_COURSELISTLAB, resp3.data.data.updatecourselab);
    } catch (error) {
      //
    }
  },
  async [types.UPDATE_LABLIST]({ commit }, newlab: Lab) {
    try {
      console.log("UPDATE_LABLIST");
      const resp = await axios.post<ResultVO>("updateLabList", newlab);
      commit(types.UPDATE_LABLIST, resp.data.data.updated);
    } catch (error) {
      //
    }
  },
  async [types.UPDATE_COURSELIST]({ commit }, newcourse: CourseInfo) {
    try {
      const resp = await axios.post<ResultVO>("updateCourseList", newcourse);
      commit(types.UPDATE_COURSELIST, resp.data.data.updated);
    } catch (error) {
      //
    }
  },
  async [types.LOGIN]({ commit }, user: UserInfo) {
    try {
      const resp = await axios.post<ResultVO>("login", user);
      //console.log(resp.data.data.userinfo);
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
