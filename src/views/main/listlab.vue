<template>
  <!-- <el-button @click="resetDateFilter">清除日期过滤器</el-button>
  <el-button @click="clearFilter">清除所有过滤器</el-button> -->
  <el-table
    row-key="date"
    ref="filterTable"
    :data="labinfolist"
    height="500"
    style="width: 100%"
  >
    <el-table-column
      prop="deviceNum"
      label="机器数量"
      width="180"
      sortable
      column-key="deviceNum"
    ></el-table-column>
    <el-table-column
      prop="id"
      label="实验室编号"
      sortable
      width="180"
      :filters="labfilter"
      :filter-method="filterHandler"
    ></el-table-column>
    <el-table-column
      prop="place"
      label="教学楼"
      :formatter="formatter"
    ></el-table-column>
    <el-table-column
      prop="description"
      label="描述信息"
      :formatter="formatter"
    ></el-table-column>
  </el-table>
</template>

<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, ref } from "vue";
import { Lab } from "@/role/Menu";
function setlabfilter(labinfoList: Lab[] | undefined) {
  const arr: { text: string; value: string }[] = [];
  if (labinfoList != undefined) {
    labinfoList.forEach((x) => {
      const item = {
        text: x.id,
        value: x.id,
      };
      arr.push(item);
    });
    return arr;
  }
}
export default {
  setup() {
    const store: Store<State> = useStore();
    const labinfolist = computed(() => store.state.labinfoList);
    const labfilter = setlabfilter(labinfolist.value);
    const filterHandler = (value: any, row: any, column: any) => {
      const property = column["property"];
      return row[property] === value;
    };
    return {
      labinfolist,
      labfilter,
      filterHandler,
    };
  },
};
</script>

<style></style>
