<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="实验课程编号" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="实验室编号" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox
          v-for="(l, index) in lablist"
          :key="index"
          :label="`${l.id}`"
          name="type"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="周次" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="1" name="type"></el-checkbox>
        <el-checkbox label="2" name="type"></el-checkbox>
        <el-checkbox label="3" name="type"></el-checkbox>
        <el-checkbox label="4" name="type"></el-checkbox>
        <el-checkbox label="5" name="type"></el-checkbox>
        <el-checkbox label="6" name="type"></el-checkbox>
        <el-checkbox label="7" name="type"></el-checkbox>
        <el-checkbox label="8" name="type"></el-checkbox>
        <el-checkbox label="9" name="type"></el-checkbox>
        <el-checkbox label="10" name="type"></el-checkbox>
        <el-checkbox label="11" name="type"></el-checkbox>
        <el-checkbox label="12" name="type"></el-checkbox>
        <el-checkbox label="13" name="type"></el-checkbox>
        <el-checkbox label="14" name="type"></el-checkbox>
        <el-checkbox label="15" name="type"></el-checkbox>
        <el-checkbox label="16" name="type"></el-checkbox>
        <el-checkbox label="17" name="type"></el-checkbox>
        <el-checkbox label="18" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="星期" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="星期一" name="type"></el-checkbox>
        <el-checkbox label="星期二" name="type"></el-checkbox>
        <el-checkbox label="星期三" name="type"></el-checkbox>
        <el-checkbox label="星期四" name="type"></el-checkbox>
        <el-checkbox label="星期五" name="type"></el-checkbox>
        <el-checkbox label="星期六" name="type"></el-checkbox>
        <el-checkbox label="星期日" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="节" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="1" name="type"></el-checkbox>
        <el-checkbox label="2" name="type"></el-checkbox>
        <el-checkbox label="3" name="type"></el-checkbox>
        <el-checkbox label="4" name="type"></el-checkbox>
        <el-checkbox label="5" name="type"></el-checkbox>
        <el-checkbox label="6" name="type"></el-checkbox>
        <el-checkbox label="7" name="type"></el-checkbox>
        <el-checkbox label="8" name="type"></el-checkbox>
        <el-checkbox label="9" name="type"></el-checkbox>
        <el-checkbox label="10" name="type"></el-checkbox>
        <el-checkbox label="11" name="type"></el-checkbox>
        <el-checkbox label="12" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="学生人数" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">
        立即创建
      </el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, ref } from "vue";
import { OrderedInfo } from "@/role/Menu";
export default {
  data() {
    const store: Store<State> = useStore();
    const lablist = computed(() => store.state.labinfoList);

    return {
      lablist,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {
    // submitForm(formName: string | number) {
    //   let el: any = this.$refs;
    //   el[formName].validate((valid: any) => {
    //     if (valid) {
    //       alert("submit!");
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // },
    // resetForm(formName: string | number) {
    //   this.$refs[formName].resetFields();
    // },
  },
};
</script>

<style></style>
