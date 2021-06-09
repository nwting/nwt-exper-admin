<template>
  <!-- <div>{{ lab }}</div> -->
  <el-form
    label-width="100px"
    class="demo-ruleForm"
    :model="newcourse"
    :rules="rules"
    ref="newcourse.value"
  >
    <el-form-item label="课程名称" prop="name">
      <el-input v-model="newcourse.name"></el-input>
    </el-form-item>
    <el-form-item label="课程编号" prop="id">
      <el-input v-model="newcourse.id"></el-input>
    </el-form-item>
    <el-form-item label="课程学时" prop="takePeriod">
      <el-input v-model="newcourse.takePeriod"></el-input>
    </el-form-item>
    <el-form-item label="学生数量" prop="stuNum">
      <el-input v-model="newcourse.stuNum"></el-input>
    </el-form-item>
    <el-form-item label="备注">
      <el-input type="textarea" v-model="newcourse.otherInfo"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :disabled="!result" @click="createCourse()">
        立即创建
      </el-button>
      <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, ref, watch } from "vue";
import { CourseInfo, Lab, UserInfo } from "@/role/Menu";
import {
  CREATE_LAB,
  UPDATE_COURSELIST,
  UPDATE_LABLIST,
} from "@/store/VuexTypes";
import axios from "axios";
export default {
  setup() {
    const user = ref<UserInfo>({ id: "" });
    //const user = computed(() => store.state.userinfo);
    const store: Store<State> = useStore();
    // console.log(store.state.userinfo?.id);
    const uid = store.state.userinfo.id;
    const uname = store.state.userinfo.name;
    const newcourse = ref<CourseInfo>({
      id: "",
    });

    const createCourse = () => {
      store.dispatch(UPDATE_COURSELIST, {
        id: newcourse.value.id,
        name: newcourse.value.name,
        takePeriod: newcourse.value.takePeriod,
        teacher: { id: uid, name: uname },
        stuNum: newcourse.value.stuNum,
        takelabInfo: [],
        otherInfo: newcourse.value.otherInfo,
      } as CourseInfo);
      console.log(store.state.courseinfoList);
    };
    const rules = {
      id: [{ required: true, message: "请输入实验课程编号", trigger: "blur" }],
      name: [{ required: true, message: "请输入课程名称", trigger: "blur" }],
      takePeriod: [
        { required: true, message: "请输入课程学时", trigger: "blur" },
      ],
      stuNum: [{ required: true, message: "请输入学生数量", trigger: "blur" }],
    };
    var result = ref(false);
    watch(newcourse.value, () => {
      if (
        newcourse.value.id == null ||
        newcourse.value.name == null ||
        newcourse.value.takePeriod == null ||
        newcourse.value.stuNum == null
      ) {
        result.value = false;
      } else {
        result.value = true;
      }
    });
    return {
      createCourse,
      newcourse,
      rules,
      result,
    };
  },
};
</script>

<style></style>
