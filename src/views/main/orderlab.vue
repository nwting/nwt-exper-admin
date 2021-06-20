<template>
  <el-form
    :model="order"
    :rules="orderrules"
    ref="order.value"
    label-width="100px"
    class="ruleForm"
  >
    <el-form
      :inline="true"
      :model="order"
      :rules="orderrules"
      ref="order.value"
      label-width="150px"
      class="elform1"
    >
      <el-form-item label="实验课程编号" prop="courseid">
        <el-input v-model="order.courseid"></el-input>
      </el-form-item>
      <el-form-item label="学生人数" prop="stunum">
        <el-input v-model="order.stunum"></el-input>
      </el-form-item>
      <el-form-item label="实验室编号" prop="labid">
        <el-select v-model="order.labid">
          <el-option
            v-for="(l, index) in lablist"
            :key="index"
            :label="`${l.id}`"
            :value="`${l.id}`"
            name="labid"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <el-form-item label="周次" prop="week">
      <el-checkbox-group v-model="order.week">
        <el-checkbox label="1" name="week" border></el-checkbox>
        <el-checkbox label="2" name="week" border></el-checkbox>
        <el-checkbox label="3" name="week" border></el-checkbox>
        <el-checkbox label="4" name="week" border></el-checkbox>
        <el-checkbox label="5" name="week" border></el-checkbox>
        <el-checkbox label="6" name="week" border></el-checkbox>
        <el-checkbox label="7" name="week" border></el-checkbox>
        <el-checkbox label="8" name="week" border></el-checkbox>
        <el-checkbox label="9" name="week" border></el-checkbox>
        <el-checkbox label="10" name="week" border></el-checkbox>
        <el-checkbox label="11" name="week" border></el-checkbox>
        <el-checkbox label="12" name="week" border></el-checkbox>
        <el-checkbox label="13" name="week" border></el-checkbox>
        <el-checkbox label="14" name="week" border></el-checkbox>
        <el-checkbox label="15" name="week" border></el-checkbox>
        <el-checkbox label="16" name="week" border></el-checkbox>
        <el-checkbox label="17" name="week" border></el-checkbox>
        <el-checkbox label="18" name="week" border></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="星期" prop="day">
      <el-checkbox-group v-model="order.day">
        <el-checkbox label="1" name="day" border>星期一</el-checkbox>
        <el-checkbox label="2" name="day" border>星期二</el-checkbox>
        <el-checkbox label="3" name="day" border>星期三</el-checkbox>
        <el-checkbox label="4" name="day" border>星期四</el-checkbox>
        <el-checkbox label="5" name="day" border>星期五</el-checkbox>
        <el-checkbox label="6" name="day" border>星期六</el-checkbox>
        <el-checkbox label="7" name="day" border>星期日</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="上课时间" prop="cth">
      <el-checkbox-group v-model="order.cth">
        <el-checkbox label="1" name="cth" border></el-checkbox>
        <el-checkbox label="2" name="cth" border></el-checkbox>
        <el-checkbox label="3" name="cth" border></el-checkbox>
        <el-checkbox label="4" name="cth" border></el-checkbox>
        <el-checkbox label="5" name="cth" border></el-checkbox>
        <el-checkbox label="6" name="cth" border></el-checkbox>
        <el-checkbox label="7" name="cth" border></el-checkbox>
        <el-checkbox label="8" name="cth" border></el-checkbox>
        <el-checkbox label="9" name="cth" border></el-checkbox>
        <el-checkbox label="10" name="cth" border></el-checkbox>
        <el-checkbox label="11" name="cth" border></el-checkbox>
        <el-checkbox label="12" name="cth" border></el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <!-- <el-form-item label="学生人数" prop="stunum">
      <el-input v-model="order.stunum"></el-input>
    </el-form-item> -->

    <el-form-item>
      <el-button type="warning" :plain="true" @click="checkorder">
        冲突检测
      </el-button>
      <el-button type="primary" :disabled="!checkresult" @click="submitorder">
        立即创建
      </el-button>
      <!-- <el-button @click="resetForm">重置</el-button> -->
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, ref, watch } from "vue";
import { Lab, OrderedInfo, OrderForm } from "@/role/Menu";
import { ElMessage } from "element-plus";
import { UPDATE_LABOCCUPY } from "@/store/VuexTypes";
//import { formatDate } from "@/role/Menu";
export default {
  setup() {
    const store: Store<State> = useStore();
    const lablist = computed(() => store.state.labinfoList);
    const order = ref<OrderForm>({
      week: [],
      day: [],
      cth: [],
      createTime: "",
    });
    const checkresult = ref(false);
    const checkorder = () => {
      let check = true;
      if (
        order.value.labid == null ||
        order.value.week == null ||
        order.value.day == null ||
        order.value.cth == null ||
        order.value.stunum == null ||
        order.value.courseid == null
      ) {
        check = false;
      }
      const labinfo = store.state.labinfoList?.find((x) => {
        return x.id == order.value.labid;
      });
      order.value.week?.forEach((x) => {
        order.value.day?.forEach((y) => {
          order.value.cth?.forEach((z) => {
            const xi = parseInt(x);
            const yi = parseInt(y);
            const zi = parseInt(z);
            labinfo?.occupyedTime?.some((item) => {
              if (item.week == xi && item.day == yi && item.cth == zi) {
                check = false;
              }
            });
            console.log(check);
          });
        });
      });
      if (
        labinfo?.deviceNum != undefined &&
        order.value.stunum != undefined &&
        labinfo?.deviceNum <= order.value.stunum
      ) {
        check = false;
      }
      console.log(check);
      if (check) {
        ElMessage.success({
          showClose: true,
          message: "通过冲突检测！课程预约与现有实验课程安排不存在冲突",
          type: "success",
        });
      } else {
        ElMessage({
          showClose: true,
          message: "未通过冲突检测！课程预约与现有实验课程安排存在冲突",
          type: "error",
        });
      }
      checkresult.value = check;
      console.log(checkresult.value);
    };
    const submitorder = () => {
      var arrweek;
      arrweek = order.value.week?.map(function (data) {
        return +data;
      });
      var arrday;
      arrday = order.value.day?.map(function (data) {
        return +data;
      });
      var arrcth;
      arrcth = order.value.cth?.map(function (data) {
        return +data;
      });
      store.dispatch(UPDATE_LABOCCUPY, {
        labid: order.value.labid,
        week: arrweek,
        day: arrday,
        cth: arrcth,
        stunum: order.value.stunum,
        courseid: order.value.courseid,
        createTime: new Date().toISOString().substring(0, 19),
      } as OrderForm);
      console.log(store.state.laborderinfoList);
      alert("预约成功！");
    };
    const orderrules = {
      courseid: [
        { required: true, message: "请输入实验课程编号", trigger: "blur" },
      ],
      labid: [
        { required: true, message: "请选择一个实验室", trigger: "change" },
      ],
      week: [
        {
          type: "array",
          required: true,
          message: "请至少选择一个周次",
          trigger: "change",
        },
      ],
      day: [
        {
          type: "array",
          required: true,
          message: "请至少选择一个星期",
          trigger: "change",
        },
      ],
      cth: [
        {
          type: "array",
          required: true,
          message: "请至少选择一个上课时间",
          trigger: "change",
        },
      ],
      stunum: [{ required: true, message: "请输入学生人数", trigger: "blur" }],
    };

    return {
      order,
      submitorder,
      orderrules,
      lablist,
      checkresult,
      checkorder,
    };
  },
};
</script>

<style>
.el-checkbox-group {
  width: 100%;
  text-align: center;
  display: flex;
  align-content: flex-start;
  /* flex-flow: row wrap; */
  flex-wrap: wrap;
  justify-content: flex-start;
}
.el-checkbox-group .el-checkbox {
  /* flex: 0 0 10%; */
  margin-bottom: 20px;
  margin: 5px;
  width: 100px;
}
.ruleForm {
  width: 70%;
  margin: 10px auto;
}
.el-form .el-form-item {
  padding: 0px;
}
.elform1 {
  padding: 0;
  margin: 0;
  display: flex;
  align-content: flex-start;
  /* flex-flow: row wrap; */
  flex-wrap: wrap;
  justify-content: flex-start;
}
.elform1 .el-form-item .el-input {
  width: 150px;
}
</style>
