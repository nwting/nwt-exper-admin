<template>
  <div>
    <!-- <template v-for="(menu1, m1index) in menuList" :key="`m1-${m1index}`">
      <h3>{{ menu1.title }}</h3>
      <template v-if="menu1?.children.length > 0">
        <ul>
          <li v-for="(menu2, m2index) in menu1.children" :key="`m2-${m2index}`">
            <router-link :to="menu2?.path">{{ menu2.title }}</router-link>
          </li>
        </ul>
      </template>
    </template> -->
    <el-menu
      :default-openeds="['1', '3']"
      v-for="(menu1, m1index) in menuList"
      :key="`m1-${m1index}`"
    >
      <el-submenu index="`${m1index}`">
        <template #title>
          <i class="el-icon-message"></i>
          {{ menu1.title }}
        </template>
        <el-menu-item-group v-if="menu1?.children.length > 0">
          <el-menu-item
            v-for="(menu2, m2index) in menu1.children"
            :key="`m2-${m2index}`"
          >
            <router-link :to="menu2?.path">{{ menu2.title }}</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    roleNum: String,
  },
  setup(props) {
    const state: State = useStore().state;
    const roleList = state.roleList;
    const role1List = roleList?.find((x) => {
      return x.rolenum == props.roleNum;
    });
    const menuList = role1List?.menulist;
    return {
      role1List,
      menuList,
    };
  },
});
</script>
