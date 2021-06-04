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
    <el-table-column prop="id" label="实验室编号" width="180"></el-table-column>
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
export default {
  setup() {
    const store: Store<State> = useStore();
    const labinfolist = computed(() => store.state.labinfoList);
    return {
      labinfolist,
    };
  },
  // data() {
  //   return {
  //     tableData: [
  //       {
  //         date: "2016-05-04",
  //         name: "王小虎",
  //         address: "上海市普陀区金沙江路 1517 弄",
  //         tag: "公司",
  //       },
  //       {
  //         date: "2016-05-01",
  //         name: "王小虎",
  //         address: "上海市普陀区金沙江路 1519 弄",
  //         tag: "家",
  //       },
  //       {
  //         date: "2016-05-03",
  //         name: "王小虎",
  //         address: "上海市普陀区金沙江路 1516 弄",
  //         tag: "公司",
  //       },
  //     ],
  //   };
  // },
  // methods: {
  //   resetDateFilter() {
  //     this.$refs.filterTable.clearFilter("date");
  //   },
  //   clearFilter() {
  //     this.$refs.filterTable.clearFilter();
  //   },
  //   formatter(row, column) {
  //     return row.address;
  //   },
  //   filterTag(value, row) {
  //     return row.tag === value;
  //   },
  //   filterHandler(value, row, column) {
  //     const property = column["property"];
  //     return row[property] === value;
  //   },
  // },
};
</script>

<style></style>
