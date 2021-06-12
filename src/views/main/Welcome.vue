<template>
  <div class="hi">
    <h1 class="name">HI!</h1>
    <h1 class="name">{{ user }}</h1>
  </div>
  <h1>welcome to NEFU Laboratory management system!</h1>
  <h2>欢迎来到东北林业大学实验室管理系统！</h2>
</template>
<script lang="ts">
import { State } from "@/store";
import { defineComponent } from "vue";
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
    console.log(role1List?.title);
    return {
      role1List,
      user,
    };
  },
});
</script>
<style>
@import url("//unpkg.com/element-plus/lib/theme-chalk/index.css");
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.name {
  font-size: 80px;
  margin: 0;
}
.hi {
  margin-top: 50px;
  margin-bottom: 100px;
}
</style>
