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
    title: "????????????????????????????????????",
    menulist: [
      {
        title: "????????????",
        children: [
          {
            title: "??????????????????",
            path: "/personnalinfo",
          },
          {
            title: "??????????????????",
            path: "/modifypw",
          },
        ],
      },
      {
        title: "????????????",
        children: [
          {
            title: "????????????",
            path: "/createcourse",
          },
          {
            title: "????????????",
            path: "/listcourses",
          },
        ],
      },
      {
        title: "????????????",
        children: [
          {
            title: "???????????????",
            path: "/orderlab",
          },
          {
            title: "??????????????????",
            path: "/listorderinfo",
          },
          {
            title: "???????????????",
            path: "/schedule",
          },
        ],
      },
    ],
  },
  {
    rolenum: "2",
    title: "???????????????????????????????????????",
    menulist: [
      {
        title: "????????????",
        children: [
          {
            title: "??????????????????",
            path: "/personnalinfo",
          },
          {
            title: "??????????????????",
            path: "/modifypw",
          },
          {
            title: "????????????",
            path: "/createteacher",
          },
          {
            title: "????????????",
            path: "/teacheradmin",
          },
        ],
      },
      {
        title: "???????????????",
        children: [
          {
            title: "???????????????",
            path: "/createlab",
          },
          {
            title: "???????????????",
            path: "/listlab",
          },
        ],
      },
      {
        title: "??????????????????",
        children: [
          {
            title: "?????????",
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
