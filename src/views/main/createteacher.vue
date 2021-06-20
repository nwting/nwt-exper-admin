<template>
  <!-- <div>{{ lab }}</div> -->
  <el-form
    label-width="100px"
    class="elform"
    :model="newteacher"
    :rules="rules"
    ref="newteacher.value"
  >
    <el-form-item label="教师ID" prop="id">
      <el-input v-model="newteacher.id"></el-input>
    </el-form-item>
    <el-form-item label="设置密码" prop="pw">
      <el-input v-model="newteacher.pw"></el-input>
    </el-form-item>
    <el-form-item label="教师姓名" prop="name">
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
      <el-button type="primary" :disabled="!result" @click="createTeacher">
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
import { Lab, UserInfo } from "@/role/Menu";
import { CREATE_TEACHER, CREATE_LAB, UPDATE_LABLIST } from "@/store/VuexTypes";
export default {
  setup() {
    const store: Store<State> = useStore();
    const newteacher = ref<UserInfo>({
      id: "",
    });
    const rules = {
      id: [{ required: true, message: "请输入教师编号", trigger: "blur" }],
      name: [{ required: true, message: "请输入教师姓名", trigger: "blur" }],
      pw: [{ required: true, message: "请输入账号密码", trigger: "blur" }],
    };
    var result = ref(false);
    watch(newteacher.value, () => {
      if (
        newteacher.value.id == null ||
        newteacher.value.name == null ||
        newteacher.value.pw == null
      ) {
        result.value = false;
      } else {
        result.value = true;
      }
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
      alert("添加成功！");
    };
    return {
      createTeacher,
      newteacher,
      result,
      rules,
    };
  },
};
</script>

<style>
.elform {
  width: 50%;
  margin: 10px auto;
}
</style>
