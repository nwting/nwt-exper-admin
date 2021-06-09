<template>
  <!-- <div>{{ lab }}</div> -->
  <el-form label-width="100px" class="demo-ruleForm">
    <el-form-item label="实验室所在楼">
      <el-input v-model="newlab.place"></el-input>
    </el-form-item>
    <el-form-item label="实验室编号">
      <el-input v-model="newlab.id"></el-input>
    </el-form-item>
    <el-form-item label="实验室机器数量">
      <el-input v-model="newlab.deviceNum"></el-input>
    </el-form-item>
    <el-form-item label="描述">
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
      store.dispatch(UPDATE_LABLIST, {
        id: newlab.value.id,
        place: newlab.value.place,
        deviceNum: newlab.value.deviceNum,
        description: newlab.value.description,
        isoccupyed: false,
        occupyedTime: [],
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
