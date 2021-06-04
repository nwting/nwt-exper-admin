<template>
  <el-row>
    <el-col :span="8">
      <el-card shadow="always">
        <div class="login">
          实验室管理系统：
          <el-input
            placeholder="请输入账号"
            prefix-icon="el-icon-user"
            v-model="userForm.number"
          ></el-input>
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-key"
            type="password"
            v-model="userForm.password"
          ></el-input>
        </div>
        <!-- <div class="choose-root">
          <el-radio-group v-model="role">
            <el-radio :label="1">我是老师</el-radio>
            <el-radio :label="2">我是管理员</el-radio>
          </el-radio-group>
        </div> -->
        <div>
          <el-button type="primary" round @click="login">登录</el-button>
          <el-button type="info" round>清空</el-button>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Store, useStore } from "vuex";
import { defineComponent, Ref, ref } from "vue";
import { LOGIN } from "@/store/VuexTypes";
import { useRouter } from "vue-router";
import { State } from "@/store";

interface User {
  number?: string;
  password?: string;
}
function useLogin(userForm: Ref<User>, store: Store<State>) {
  const login = () => {
    const user = {
      number: userForm.value.number,
      password: userForm.value.password,
    };
    store.dispatch(LOGIN, user);
    userForm.value.number = "";
    userForm.value.password = "";
  };
  return {
    login,
  };
}
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const userForm = ref<User>({});
    const { login } = useLogin(userForm, store);
    // const input_zh = ref(null);
    // const input_pw = ref(null);
    // const role = ref(null);
    // const store = useStore();
    // const login = () => {
    //   store.dispatch(LOGIN, role.value);
    // };
    // const router = useRouter();
    // const mroleNum = role.value;
    // router.push({ path: "/main/${mroleNum}" });

    return {
      userForm,
      login,
    };
  },
  // methods: {
  //   setroute() {
  //     this.$router.push({ path: "/main/${rolevalue}" });
  //   },
  // },
});
</script>

<style>
.login {
  display: inline-block;
  width: 200px;
}
.choose-root {
  margin: 5px;
}
.el-row {
  display: flex;
  justify-content: center;
}
.el-input {
  margin: 8px;
  font-size: 20px;
}
</style>
