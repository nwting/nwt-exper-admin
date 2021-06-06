<template>
  <!-- <div>{{ lab }}</div> -->
  <el-form label-width="100px" class="demo-ruleForm">
    <el-form-item label="课程名称">
      <el-input v-model="newlab.place"></el-input>
    </el-form-item>
    <el-form-item label="课程编号">
      <el-input v-model="newlab.id"></el-input>
    </el-form-item>
    <el-form-item label="课程学时">
      <el-input v-model="newlab.deviceNum"></el-input>
    </el-form-item>
    <el-form-item label="授课教师">
      <el-input v-model="newlab.deviceNum"></el-input>
    </el-form-item>
    <el-form-item label="学生数量">
      <el-input v-model="newlab.deviceNum"></el-input>
    </el-form-item>
    <el-form-item label="备注">
      <el-input type="textarea" v-model="newlab.description"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="createLab">立即创建</el-button>
      <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, ref } from "vue";
import { Lab } from "@/role/Menu";
import { CREATE_LAB, UPDATE_LABLIST } from "@/store/VuexTypes";
export default {
  setup() {
    const store: Store<State> = useStore();
    const lab = computed(() => store.state.labinfoList);
    const newlab = ref<Lab>({
      id: "",
    });
    const createLab = () => {
      store.commit(UPDATE_LABLIST, {
        id: newlab.value.id,
        place: newlab.value.place,
        deviceNum: newlab.value.deviceNum,
        description: newlab.value.description,
      } as Lab);
      console.log("createLab");
    };
    return {
      createLab,
      lab,
      newlab,
    };
  },
};
</script>

<style></style>
