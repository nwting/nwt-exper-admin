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
        component: () => import("@/views/main/Welcome.vue"),
      },
      {
        path: "/p1",
        component: () => import("@/views/main/P1.vue"),
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
        title: "课程实验管理",
        children: [
          {
            title: "课程管理",
            path: "/p1",
          },
          {
            title: "学生管理",
            path: "/p1",
          },
        ],
      },
      {
        title: "实验室预约",
        children: [],
      },
    ],
  },
  {
    rolenum: "2",
    title: "实验室管理系统——管理员端",
    menulist: [
      {
        title: "学生管理模块",
        children: [
          {
            title: "学生管理",
            path: "/p1",
          },
          {
            title: "课程管理",
            path: "/p1",
          },
        ],
      },
      {
        title: "课程管理模块",
        children: [],
      },
    ],
  },
];
const menuList: Menu[] = [
  {
    title: "学生管理模块",
    children: [
      {
        title: "学生管理",
        path: "/p1",
      },
      {
        title: "课程管理",
        path: "/p1",
      },
    ],
  },
  {
    title: "课程管理模块",
    children: [],
  },
];

// --------------------

export function setUserRole() {
  router.removeRoute("nomatch");
  routes.forEach((r) => router.addRoute(r));
  return roleList;
}
