<template>
  <!-- <div>
    <h1>{{ role.title }}</h1>
    <sidebar :roleNum="rolenum" />
    <hr />
    <router-view />
  </div> -->
  <el-container
    style="height：1000px; border: 1px solid #eee;background-color:#ecf5ff"
  >
    <el-page-header
      icon="el-icon-arrow-left"
      style="background-color: #8cc5ff"
      @click="goback"
    >
      <!-- <router-link :to="login"></router-link> -->
    </el-page-header>
    <el-header
      style="text-align: right; font-size: 18px; background-color: #8cc5ff"
    >
      <span class="title">{{ role1List.title }}</span>
      <el-button
        circle
        class="firstpagebutton"
        @click="towelcome"
        icon="el-icon-date"
      >
        <!-- <router-link :to="welrouter" /> -->
      </el-button>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: white">
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
import { useRouter } from "vue-router";
import router from "@/router";

export default defineComponent({
  components: { sidebar },
  props: {
    mroleNum: String,
  },
  methods: {
    goback() {
      this.$router.push({ name: "login" });
    },
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

    const welrouter = { path: "/main/:mroleNum" };
    const router = useRouter();
    const towelcome = () => {
      router.push(welrouter);
    };
    return {
      rolenum,
      role,
      roleList,
      role1List,
      towelcome,
    };
  },
});
</script>
<style>
@import url("//unpkg.com/element-plus/lib/theme-chalk/index.css");
.el-header {
  background-color: #409eff;
  color: #333;
  line-height: 60px;
}
.title {
  margin-right: 10px;
}
</style>
