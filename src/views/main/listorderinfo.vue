<template>
  <!-- <el-button @click="resetDateFilter">清除日期过滤器</el-button>
  <el-button @click="clearFilter">清除所有过滤器</el-button> -->
  <el-table
    row-key="date"
    ref="filterTable"
    :data="orderinfolist"
    height="500"
    style="width: 100%"
  >
    <el-table-column
      prop="createTime"
      label="创建时间"
      width="180"
      sortable
      column-key="createTime"
    ></el-table-column>
    <el-table-column
      prop="orderUser.name"
      label="创建人"
      sortable
      width="180"
      :filters="labfilter"
      :filter-method="filterHandler"
    ></el-table-column>
    <el-table-column
      prop="orderLabId"
      label="申请教室"
      sortable
      width="180"
      :filters="labfilter"
      :filter-method="filterHandler"
    ></el-table-column>
    <el-table-column
      prop="orderCourse.id"
      label="申请课程编号"
      sortable
      width="180"
      :filters="labfilter"
      :filter-method="filterHandler"
    ></el-table-column>
    <el-table-column
      prop="orderCourse.name"
      label="申请课程名称"
      sortable
      width="180"
      :filters="labfilter"
      :filter-method="filterHandler"
    ></el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, preorderinfolist, scope.row)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, ref, defineComponent } from "vue";
import { Lab, LabOrderInfo, OrderForm } from "@/role/Menu";
import {
  DELETE_LABINFO,
  DELETE_ORDERINFO,
  UPDATE_LABINFO,
} from "@/store/VuexTypes";
import { getuserinfobyId } from "@/role/UserInfo";
import { getlabinfoListByid } from "@/role/LabInfo";
import { getlaborderinfobyCreateTime } from "@/role/LabOrderInfo";
function setlabfilter(orderinfolist: LabOrderInfo[] | undefined) {
  const arr: { text: string; value: string }[] = [];
  if (orderinfolist != undefined) {
    orderinfolist.forEach((x) => {
      if (x.orderLabId != undefined) {
        const item = {
          text: x.orderLabId,
          value: x.orderLabId,
        };
        arr.push(item);
      }
    });
    return arr;
  }
}
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const preorderinfolist = computed(() => store.state.laborderinfoList);

    const dialogFormVisible = ref(false);
    const orderinfolist = computed(() =>
      preorderinfolist.value?.filter(
        (x) => x.orderUser?.id == store.state.userinfo.id
      )
    );
    const labfilter = setlabfilter(orderinfolist.value);
    const filterHandler = (value: any, row: any, column: any) => {
      const property = column["property"];
      return row[property] === value;
    };
    const handleDelete = (index: any, rows: any, row: any) => {
      console.log(rows.indexOf(row));
      console.log("indexof_row");
      const r = window.confirm("此操作将永久删除，是否继续？");
      if (r == true) {
        console.log(store.state.laborderinfoList);
        const tran = getlaborderinfobyCreateTime(row.createTime);
        let tweek: (number | undefined)[] = [];
        let tday: (number | undefined)[] = [];
        let tcth: (number | undefined)[] = [];
        tran?.orderCourseTime?.forEach((t) => {
          if (tweek.indexOf(t.week) == -1) tweek.push(t.week);
          if (tday.indexOf(t.day) == -1) tday.push(t.day);
          if (tcth.indexOf(t.cth) == -1) tcth.push(t.cth);
        });
        console.log(tweek);
        const trans = {
          labid: tran?.orderLabId,
          week: tweek,
          day: tday,
          cth: tcth,
          courseid: tran?.orderCourse?.id,
          createTime: tran?.createTime,
        } as OrderForm;
        console.log(trans);
        store.dispatch(DELETE_ORDERINFO, trans);
        //console.log(row);
        console.log("orderedinfo");
        console.log(store.state.orderedinfoList);
        console.log("laborderinfo");
        console.log(store.state.laborderinfoList);
        console.log(getlabinfoListByid("910"));
        setTimeout(() => {
          rows.splice(rows.indexOf(row), 1);
        }, 500);
        //console.log("")
      }
    };
    return {
      orderinfolist,
      preorderinfolist,
      labfilter,
      filterHandler,
      handleDelete,
      dialogFormVisible,
    };
  },
});
</script>

<style></style>
