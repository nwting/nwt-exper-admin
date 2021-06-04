<template>
  <div>welcome</div>
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
    const role1List = roleList?.find((x) => {
      return x.rolenum == props.mroleNum;
    });
    console.log(role1List?.title);
    return {
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
