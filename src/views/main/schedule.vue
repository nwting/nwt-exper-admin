<template>
  <!-- <el-button @click="resetDateFilter">清除日期过滤器</el-button>
  <el-button @click="clearFilter">清除所有过滤器</el-button> -->
  <el-table row-key="lab" ref="filterTable" :data="list">
    <el-table-column
      prop="lab"
      label="实验室"
      sortable
      width="180"
      column-key="labId"
      :filters="labfilter"
      :filter-method="filterHandler"
    ></el-table-column>
    <el-table-column
      prop="week"
      label="周次"
      sortable
      :filters="datefilter"
      :filter-method="filterHandler"
      width="170"
    ></el-table-column>
    <el-table-column label="星期">
      <el-table-column prop="info1" label="星期一"></el-table-column>
      <el-table-column prop="info2" label="星期二"></el-table-column>
      <el-table-column prop="info3" label="星期三"></el-table-column>
      <el-table-column prop="info4" label="星期四"></el-table-column>
      <el-table-column prop="info5" label="星期五"></el-table-column>
      <el-table-column prop="info6" label="星期六"></el-table-column>
      <el-table-column prop="info7" label="星期日"></el-table-column>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, ref } from "vue";
import { OrderedInfo, Lab } from "@/role/Menu";

function dealdata(o: OrderedInfo[] | undefined) {
  if (o != undefined) {
    console.log("dealdata!");
    const schedule: {
      lab: string | undefined;
      week: number | undefined;
      info1: string;
      info2: string;
      info3: string;
      info4: string;
      info5: string;
      info6: string;
      info7: string;
    }[] = [];
    o.forEach((x) => {
      console.log("dealdata!!");
      let tlab = x.labId;
      let tweek = x.week;
      let tinfo1 = "";
      let tinfo2 = "";
      let tinfo3 = "";
      let tinfo4 = "";
      let tinfo5 = "";
      let tinfo6 = "";
      let tinfo7 = "";
      x.orderInfo?.forEach((y) => {
        if (y.day == 1) {
          y.info?.forEach((z) => {
            let cinfo1 = "第" + z.cth + "节课 " + z.course?.name + " \n ";
            tinfo1 = tinfo1 + cinfo1;
          });
        }
        if (y.day == 2) {
          y.info?.forEach((z) => {
            let cinfo2 = "第" + z.cth + "节课 " + z.course?.name + "\n";
            tinfo2 = tinfo2 + cinfo2;
          });
        }
        if (y.day == 3) {
          y.info?.forEach((z) => {
            let cinfo3 = "第" + z.cth + "节课 " + z.course?.name + "\n";
            tinfo3 = tinfo3 + cinfo3;
          });
        }
        if (y.day == 4) {
          y.info?.forEach((z) => {
            let cinfo4 = "第" + z.cth + "节课 " + z.course?.name + "\n";
            tinfo4 = tinfo4 + cinfo4;
          });
        }
        if (y.day == 5) {
          y.info?.forEach((z) => {
            let cinfo5 = "第" + z.cth + "节课 " + z.course?.name + "\n";
            tinfo5 = tinfo5 + cinfo5;
          });
        }
        if (y.day == 6) {
          y.info?.forEach((z) => {
            let cinfo6 = "第" + z.cth + "节课 " + z.course?.name + "\n";
            tinfo6 = tinfo6 + cinfo6;
          });
        }
        if (y.day == 7) {
          y.info?.forEach((z) => {
            let cinfo7 = "第" + z.cth + "节课 " + z.course?.name + "\n";
            tinfo7 = tinfo7 + cinfo7;
          });
        }
      });
      schedule.push({
        lab: tlab,
        week: tweek,
        info1: tinfo1,
        info2: tinfo2,
        info3: tinfo3,
        info4: tinfo4,
        info5: tinfo5,
        info6: tinfo6,
        info7: tinfo7,
      });
    });
    console.log(schedule);
    return schedule;
  } else {
    console.log("go else!");
  }
}
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
    const orderedinfoList = computed(() => store.state.orderedinfoList);
    const labinfoList = computed(() => store.state.labinfoList);
    //  const orderedlab = computed(() => this.$data);
    console.log(orderedinfoList);
    const list = dealdata(orderedinfoList.value);
    const labfilter = setlabfilter(labinfoList.value);

    const datefilter = [
      { text: "1", value: "1" },
      { text: "2", value: "2" },
      { text: "3", value: "3" },
      { text: "4", value: "4" },
      { text: "5", value: "5" },
      { text: "6", value: "6" },
      { text: "7", value: "7" },
      { text: "8", value: "8" },
      { text: "9", value: "9" },
      { text: "10", value: "10" },
      { text: "11", value: "11" },
      { text: "12", value: "12" },
      { text: "13", value: "13" },
      { text: "14", value: "14" },
      { text: "15", value: "15" },
      { text: "16", value: "16" },
      { text: "17", value: "17" },
      { text: "18", value: "18" },
    ];

    const formatter = (row: any, column: any) => {
      return row.address;
    };
    const filterTag = (value: any, row: any) => {
      return row.tag === value;
    };
    const filterHandler = (value: any, row: any, column: any) => {
      const property = column["property"];
      return row[property] === value;
    };
    return {
      formatter,
      filterTag,
      filterHandler,
      orderedinfoList,
      list,
      datefilter,
      labinfoList,
      labfilter,
    };
  },
};
</script>

<style>
.el-table .cell {
  white-space: pre-line;
}
</style>
