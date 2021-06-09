<template>
  <el-descriptions
    class="margin-top"
    title="我的信息"
    :column="1"
    :size="size"
    border
  >
    <template #extra>
      <!-- <el-button type="primary" size="small" @click="dialogFormVisible = true">
        操作
      </el-button> -->
    </template>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        用户名
      </template>
      {{ user.name }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-star-off"></i>
        账号
      </template>
      {{ user.id }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-s-custom"></i>
        性别
      </template>
      {{ user.gender }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-aim"></i>
        年龄
      </template>
      {{ user.age }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-place"></i>
        学院
      </template>
      {{ user.college }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        专业
      </template>
      {{ user.major }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-tickets"></i>
        身份
      </template>
      <el-tag size="small">{{ user.role == "1" ? "教师" : "管理员" }}</el-tag>
    </el-descriptions-item>
  </el-descriptions>

  <!-- // 操作对话框 -->
  <!-- <div>
    <el-dialog title="修改个人信息" v-model="dialogFormVisible">
      <el-form :model="newuser">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="newuser.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-input v-model="newuser.gender" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="newuser.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学院" :label-width="formLabelWidth">
          <el-input v-model="newuser.college" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="专业" :label-width="formLabelWidth">
          <el-input v-model="newuser.major" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button
            type="primary"
            @click="(dialogFormVisible = false), updateUser"
          >
            确 定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div> -->
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { getuserinfoList, getuserinfo } from "@/role/UserInfo";
import { Store, useStore } from "vuex";
import { State } from "@/store";
import { SHOW_USERINFO, UPDATE_USER } from "@/store/VuexTypes";
import { UserInfo } from "@/role/Menu";
import axios from "axios";
export default defineComponent({
  setup() {
    const user = ref<UserInfo>({ id: "" });
    //const user = computed(() => store.state.userinfo);
    const store: Store<State> = useStore();
    // console.log(store.state.userinfo?.id);
    const uid = store.state.userinfo.id;
    // const olduser = store.state.userinfo;
    // console.log(olduser);

    // const newuser = ref<UserInfo>(olduser);
    // const updateUser = () => {
    //   store.commit(UPDATE_USER, {
    //     name: newuser.value.name,
    //     gender: newuser.value.gender,
    //     age: newuser.value.age,
    //     college: newuser.value.college,
    //     major: newuser.value.major,
    //   } as UserInfo);
    //   console.log(olduser);
    // };
    // console.log(
    //   getuserinfoList().find((x) => {
    //     return x.id == uid;
    //   })
    // );
    // const formLabelWidth = "120px";
    // const dialogFormVisible = ref(false);
    // console.log(dialogFormVisible);

    // 发出异步请求，获取结果。没有置于state
    axios.get(`users/${uid}/personnalinfo`).then((resp) => {
      user.value = resp.data.data.userinfo;
      //console.log(resp.data.data.userinfo);
      //console.log(user.value);
    });

    return {
      user,
      // dialogFormVisible,
      // formLabelWidth,
      // updateUser,
      // newuser,
    };
  },
});
</script>
<style></style>
