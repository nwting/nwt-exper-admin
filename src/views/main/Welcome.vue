<template>
  <div class="container">
    <div class="majorinfo">
      <div class="hi">
        <h3 class="name">HI! {{ user }}</h3>
        <p>欢迎来到东北林业大学实验室管理系统！</p>
        <p>welcome to NEFU Laboratory management system!</p>
      </div>
      <p class="ksdh">快速导航</p>
      <div class="list">
        <ul>
          <li v-for="(grid, index) in grids" :key="index">
            <!--这里是点击时要跳转的路由-->
            <router-link :to="grid.router" style="text-decoration: none">
              <img :src="grid.src" />
              <p>{{ grid.title }}</p>
            </router-link>
            <router-view></router-view>
          </li>
        </ul>
      </div>
    </div>
    <div class="calendar"><el-calendar v-model="value"></el-calendar></div>
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    mroleNum: String,
  },
  setup(props) {
    const state: State = useStore().state;
    const roleList = state.roleList;
    const user = state.userinfo.name;
    const role1List = roleList?.find((x) => {
      return x.rolenum == props.mroleNum;
    });
    var grids1 = [
      {
        id: 1,
        src: require("../../assets/schedule.png"),
        title: "实验室排期表",
        router: { path: "/schedule" },
      },
      {
        id: 2,
        src: require("../../assets/courselist.png"),
        title: "课程信息",
        router: { path: "/listcourses" },
      },
      {
        id: 3,
        src: require("../../assets/orderlist.png"),
        title: "预约信息",
        router: { path: "/listorderinfo" },
      },
      {
        id: 4,
        src: require("../../assets/order.png"),
        title: "预约实验室",
        router: { path: "/orderlab" },
      },
    ];
    var grids2 = [
      {
        id: 1,
        src: require("../../assets/schedule.png"),
        title: "实验室排期表",
        router: { path: "/schedule" },
      },
      {
        id: 2,
        src: require("../../assets/teacheradmin.png"),
        title: "教师管理",
        router: { path: "/teacheradmin" },
      },
      {
        id: 3,
        src: require("../../assets/listlab.png"),
        title: "实验室信息",
        router: { path: "/listlab" },
      },
      {
        id: 4,
        src: require("../../assets/createlab.png"),
        title: "新增实验室",
        router: { path: "/createlab" },
      },
    ];
    var grids = props.mroleNum == "1" ? grids1 : grids2;
    console.log(role1List?.title);
    const value = ref(new Date());
    return {
      role1List,
      user,
      imgslist: [],
      grids,
      value,
    };
  },
});
</script>
<style>
@import url("//unpkg.com/element-plus/lib/theme-chalk/index.css");
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.calendar {
  width: 50%;
  height: auto;
}
.el-header {
  background-color: #409eff;
  color: #333;
  line-height: 30px;
}
.ksdh {
  font-size: 30px;
  color: #333;
}
.name {
  font-size: 30px;
}
.hi {
  margin-top: 30px;
  margin-bottom: 50px;
  margin-left: 50px;
  text-align: left;
}
.hi p {
  margin: 10px 0;
}
.list {
  width: 100%;
}

.list ul {
  /*他里面的li在必要时拆航*/
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}

.list ul li {
  width: 50%;
  height: 100px;
  text-align: center;
  font-size: 12px;
  margin-top: 35px;
  border: #333;
}
.list ul li:hover {
  transform: scale(1.1);
}
.list ul li a {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 0 auto;
}

.list ul li a img {
  width: 50px;
}
</style>
