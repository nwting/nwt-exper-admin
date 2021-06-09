<template>
  <!-- <el-button @click="resetDateFilter">清除日期过滤器</el-button>
  <el-button @click="clearFilter">清除所有过滤器</el-button> -->
  <el-table
    row-key="date"
    ref="filterTable"
    :data="list"
    height="500"
    style="width: 100%"
  >
    <el-table-column
      prop="id"
      label="课程编号"
      width="180"
      sortable
      column-key="id"
    ></el-table-column>
    <el-table-column prop="name" label="课程名称" width="180"></el-table-column>
    <el-table-column prop="takePeriod" label="课时数"></el-table-column>
    <el-table-column prop="stuNum" label="学生数"></el-table-column>

    <el-table-column prop="takelabInfo" label="上课安排"></el-table-column>
    <!-- <el-table-column prop="takelabInfo.day" label="星期"></el-table-column>
    <el-table-column prop="takelabInfo.cth" label="节数"></el-table-column>
    <el-table-column
      prop="takelabInfo.labid"
      label="实验室编号"
    ></el-table-column> -->
  </el-table>
</template>

<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, ref } from "vue";
import { CourseInfo, Teacher, UserInfo } from "@/role/Menu";
import axios from "axios";
function dealdate(c: CourseInfo[] | undefined) {
  if (c != undefined) {
    const showlist: {
      id: string | undefined;
      name: string | undefined;
      takePeriod: number | undefined;
      teacher: Teacher | undefined;
      stuNum: number | undefined;
      takelabInfo: string;
    }[] = [];
    var dayarr = ["", "一", "二", "三", "四", "五", "六", "日"];
    c.forEach((x) => {
      let infostring = "";
      x.takelabInfo?.forEach((y) => {
        if (y.day != undefined) {
          let t =
            "第" +
            y.week +
            "周" +
            "  " +
            "星期" +
            dayarr[y.day] +
            "第" +
            y.cth +
            "节课" +
            "  " +
            "教室：" +
            y.labid;
          infostring = infostring + t + " \n ";
        }
      });
      showlist.push({
        id: x.id,
        name: x.name,
        takePeriod: x.takePeriod,
        teacher: x.teacher,
        stuNum: x.stuNum,
        takelabInfo: infostring,
      });
    });
    return showlist;
  }
}
export default {
  setup() {
    const user = ref<UserInfo>({ id: "" });
    const store: Store<State> = useStore();
    const courselist = computed(() => store.state.courseinfoList);
    const course = ref<CourseInfo[]>([]);
    const uid = store.state.userinfo.id;
    courselist.value?.forEach((x) => {
      if (x.teacher?.id == uid) {
        course.value.push(x);
        console.log("coursePush!");
      }
    });
    const list = dealdate(course.value);
    return {
      course,
      list,
    };
  },
};
</script>

<style>
.el-table .cell {
  white-space: pre-line;
}
</style>
