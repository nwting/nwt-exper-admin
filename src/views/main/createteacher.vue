<template>
  <!-- <div>{{ lab }}</div> -->
  <el-form label-width="100px" class="demo-ruleForm">
    <el-form-item label="教师ID">
      <el-input v-model="newteacher.id"></el-input>
    </el-form-item>
    <el-form-item label="设置密码">
      <el-input v-model="newteacher.pw"></el-input>
    </el-form-item>
    <el-form-item label="教师姓名">
      <el-input v-model="newteacher.name"></el-input>
    </el-form-item>
    <el-form-item label="教师性别">
      <el-input v-model="newteacher.gender"></el-input>
    </el-form-item>
    <el-form-item label="教师年龄">
      <el-input v-model="newteacher.age"></el-input>
    </el-form-item>
    <el-form-item label="教师所在学院">
      <el-input v-model="newteacher.college"></el-input>
    </el-form-item>
    <el-form-item label="教师所在专业">
      <el-input v-model="newteacher.major"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="createTeacher">立即创建</el-button>
      <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, ref } from "vue";
import { Lab, UserInfo } from "@/role/Menu";
import { CREATE_TEACHER, CREATE_LAB, UPDATE_LABLIST } from "@/store/VuexTypes";
export default {
  setup() {
    const store: Store<State> = useStore();
    const newteacher = ref<UserInfo>({
      id: "",
    });
    const createTeacher = () => {
      store.dispatch(CREATE_TEACHER, {
        id: newteacher.value.id,
        pw: newteacher.value.pw,
        role: "1",
        name: newteacher.value.name,
        gender: newteacher.value.gender,
        age: newteacher.value.age,
        college: newteacher.value.college,
        major: newteacher.value.major,
      } as UserInfo);
      //console.log("createLab");
    };
    return {
      createTeacher,
      newteacher,
    };
  },
};
</script>

<style></style>
