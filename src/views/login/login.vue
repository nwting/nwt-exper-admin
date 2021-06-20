<template>
  <div id="login">
    <el-row>
      <el-col :span="8">
        <el-card shadow="always" class="login-container">
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
          <div class="oper">
            <el-button type="primary" round @click="login">登录</el-button>
            <el-button type="info" round>清空</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Store, useStore } from "vuex";
import { defineComponent, onMounted, Ref, ref } from "vue";
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
    return {
      userForm,
      login,
    };
  },
});
</script>

<style>
/* * {
  background-image: linear-gradient(
    -225deg,
    #7085b6 0%,
    #87a7d9 50%,
    #def3f8 100%
  );
} */
* {
  margin: 0;
  padding: 0;
}
#login {
  background: url("../../assets/login.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
  margin: 0;
  padding: 0;
}
.login-container {
  background-color: rgba(192, 192, 192, 0.4);
  margin-top: 100px;
  border: none;
}
.login {
  display: inline-block;
  width: 300px;
  font-size: 35px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.oper {
  margin-bottom: 20px;
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
