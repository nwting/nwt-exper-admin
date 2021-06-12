import { RouteRecordRaw } from "vue-router";
import { Menu, Role } from "./Menu";
import router from "@/router/index";

const routes: Array<RouteRecordRaw> = [
  {
    name: "main",
    props: true,
    path: "/main/:mroleNum",
    component: () => import("@/views/main/Main.vue"),
    children: [
      {
        path: "",
        props: true,
        component: () => import("@/views/main/Welcome.vue"),
      },
      {
        props: true,
        path: "/personnalinfo",
        component: () => import("@/views/main/personnalinfo.vue"),
      },
      {
        props: true,
        path: "/modifypw",
        component: () => import("@/views/main/modifypw.vue"),
      },
      {
        props: true,
        path: "/createcourse",
        component: () => import("@/views/main/createcourse.vue"),
      },
      {
        props: true,
        path: "/listcourses",
        component: () => import("@/views/main/listcourses.vue"),
      },
      {
        props: true,
        path: "/createlab",
        component: () => import("@/views/main/createlab.vue"),
      },
      {
        props: true,
        path: "/listlab",
        component: () => import("@/views/main/listlab.vue"),
      },
      {
        path: "/schedule",
        component: () => import("@/views/main/schedule.vue"),
      },
      {
        path: "/orderlab",
        component: () => import("@/views/main/orderlab.vue"),
      },
      {
        path: "/test",
        component: () => import("@/views/main/test.vue"),
      },
      {
        path: "/createteacher",
        component: () => import("@/views/main/createteacher.vue"),
      },
      {
        path: "/teacheradmin",
        component: () => import("@/views/main/teacheradmin.vue"),
      },
      {
        path: "/listorderinfo",
        component: () => import("@/views/main/listorderinfo.vue"),
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "main" },
  },
];

// ----------------
const roleList: Role[] = [
  {
    rolenum: "1",
    title: "实验室管理系统——教师端",
    menulist: [
      {
        title: "用户管理",
        children: [
          {
            title: "查看个人信息",
            path: "/personnalinfo",
          },
          {
            title: "修改个人密码",
            path: "/modifypw",
          },
        ],
      },
      {
        title: "课程管理",
        children: [
          {
            title: "新增课程",
            path: "/createcourse",
          },
          {
            title: "查看课程",
            path: "/listcourses",
          },
        ],
      },
      {
        title: "预约管理",
        children: [
          {
            title: "预约实验室",
            path: "/orderlab",
          },
          {
            title: "查看预约信息",
            path: "/listorderinfo",
          },
          {
            title: "查看排期表",
            path: "/schedule",
          },
        ],
      },
    ],
  },
  {
    rolenum: "2",
    title: "实验室管理系统——管理员端",
    menulist: [
      {
        title: "用户管理",
        children: [
          {
            title: "查看个人信息",
            path: "/personnalinfo",
          },
          {
            title: "修改个人密码",
            path: "/test",
          },
          {
            title: "添加教师",
            path: "/createteacher",
          },
          {
            title: "教师管理",
            path: "/teacheradmin",
          },
        ],
      },
      {
        title: "实验室管理",
        children: [
          {
            title: "新增实验室",
            path: "/createlab",
          },
          {
            title: "查看实验室",
            path: "/listlab",
          },
        ],
      },
      {
        title: "预约信息管理",
        children: [
          {
            title: "排期表",
            path: "/schedule",
          },
        ],
      },
    ],
  },
];

// --------------------

export function setUserRole() {
  router.removeRoute("nomatch");
  routes.forEach((r) => router.addRoute(r));
  return roleList;
}
