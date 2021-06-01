<template>
  <!-- <div>
    <h1>{{ role.title }}</h1>
    <sidebar :roleNum="rolenum" />
    <hr />
    <router-view />
  </div> -->
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <sidebar :roleNum="rolenum" />
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column
            prop="date"
            label="日期"
            width="140"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120"
          ></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
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
    const role = state.roleList?.find((x) => {
      return x.rolenum == rolenum.value;
    });
    return {
      rolenum,
      role,
    };
  },
});
</script>
