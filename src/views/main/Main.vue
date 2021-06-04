<template>
  <!-- <div>
    <h1>{{ role.title }}</h1>
    <sidebar :roleNum="rolenum" />
    <hr />
    <router-view />
  </div> -->
  <el-container style="height：1000px; border: 1px solid #eee">
    <el-page-header
      icon="el-icon-arrow-left"
      style="background-color: #b3c0d1"
    ></el-page-header>
    <el-header style="text-align: right; font-size: 18px">
      <span>{{ role1List.title }}</span>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <sidebar :roleNum="rolenum" />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import sidebar from "@/views/main/Sidebar.vue";
import { State } from "@/store";
import { useStore } from "vuex";

export default defineComponent({
  components: { sidebar },
  props: {
    mroleNum: String,
  },
  setup(props) {
    // console.log(props.mroleNum);
    const rolenum = ref(props.mroleNum);
    const state: State = useStore().state;
    const roleList = state.roleList;
    const role1List = roleList?.find((x) => {
      return x.rolenum == props.mroleNum;
    });
    const role = state.roleList?.find((x) => {
      return x.rolenum == rolenum.value;
    });
    return {
      rolenum,
      role,
      roleList,
      role1List,
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
</style>
