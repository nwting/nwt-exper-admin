<template>
  <!-- <div>{{ lab }}</div> -->
  <el-form
    label-width="100px"
    class="elform"
    :model="newlab"
    :rules="rules"
    ref="newlab.value"
  >
    <el-form-item label="实验室所在楼" prop="place">
      <el-input v-model="newlab.place"></el-input>
    </el-form-item>
    <el-form-item label="实验室编号" prop="id">
      <el-input v-model="newlab.id"></el-input>
    </el-form-item>
    <el-form-item label="实验室机器数量" prop="deviceNum">
      <el-input v-model="newlab.deviceNum"></el-input>
    </el-form-item>
    <el-form-item label="描述">
      <el-input type="textarea" v-model="newlab.description"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :disabled="!result" @click="createLab">
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
import { Lab } from "@/role/Menu";
import { CREATE_LAB, UPDATE_LABLIST } from "@/store/VuexTypes";
export default {
  setup() {
    const store: Store<State> = useStore();
    const lab = computed(() => store.state.labinfoList);
    const newlab = ref<Lab>({
      id: "",
    });
    const rules = {
      id: [{ required: true, message: "请输入实验室编号", trigger: "blur" }],
      place: [
        { required: true, message: "请输入实验室所在地点", trigger: "blur" },
      ],
      deviceNum: [
        {
          required: true,
          message: "请输入实验室机器数量数量",
          trigger: "blur",
        },
      ],
    };
    var result = ref(false);
    watch(newlab.value, () => {
      if (
        newlab.value.id == null ||
        newlab.value.place == null ||
        newlab.value.deviceNum == null
      ) {
        result.value = false;
      } else {
        result.value = true;
      }
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
      alert("创建成功！");
    };
    return {
      createLab,
      lab,
      newlab,
      rules,
      result,
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
