<template>
  <el-table
    row-key="id"
    ref="filterTable"
    :data="teacherlist"
    style="width: 100%"
  >
    <el-table-column
      prop="id"
      label="ID"
      sortable
      width="180"
      column-key="id"
    ></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column
      prop="gender"
      label="性别"
      :formatter="formatter"
    ></el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      :formatter="formatter"
    ></el-table-column>
    <el-table-column
      prop="college"
      label="学院"
      :formatter="formatter"
    ></el-table-column>
    <el-table-column
      prop="major"
      label="专业"
      :formatter="formatter"
    ></el-table-column>
    <el-table-column
      prop="role"
      label="身份"
      width="100"
      :filters="[
        { text: '教师', value: '1' },
        { text: '管理员', value: '2' },
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <el-tag
          :type="scope.row.role === '1' ? 'primary' : 'success'"
          disable-transitions
        >
          {{ scope.row.role == "1" ? "教师" : "管理员" }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.$index }}</span>

        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
          编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, teacherlist, scope.row)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="修改信息" v-model="dialogFormVisible">
    <el-form :model="upinfo">
      <el-form-item label="用户姓名" :label-width="formLabelWidth">
        <el-input v-model="upinfo.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="用户性别" :label-width="formLabelWidth">
        <el-input v-model="upinfo.gender" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="用户年龄" :label-width="formLabelWidth">
        <el-input v-model="upinfo.age" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="用户身份" :label-width="formLabelWidth">
        <el-select v-model="upinfo.role" placeholder="请选择活动区域">
          <el-option label="教师" value="1"></el-option>
          <el-option label="管理员" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户所在学院" :label-width="formLabelWidth">
        <el-input v-model="upinfo.college" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="用户所在专业" :label-width="formLabelWidth">
        <el-input v-model="upinfo.major" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateEdit()">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { defineComponent, Ref } from "vue";
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, ref } from "vue";
import { CourseInfo, Teacher, UserInfo } from "@/role/Menu";
import { onMounted, getCurrentInstance } from "vue";
import { DELETE_USERINFO, UPDATE_USERINFO } from "@/store/VuexTypes";
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const teacherlist = computed(() => store.state.userinfoList);
    const dialogFormVisible = ref(false);
    console.log(teacherlist.value);
    const filterTag = (value: any, row: any) => {
      return row.role === value;
    };
    const filterHandler = (value: any, row: any, column: any) => {
      const property = column["property"];
      return row[property] === value;
    };
    const open = () => {
      window.prompt("qwe", "wer");
    };
    const upinfo = ref<UserInfo>();
    const handleEdit = (index: any, row: any) => {
      // console.log(index);
      console.log(row);
      //console.log(row.id);
      upinfo.value = {
        id: row.id,
        pw: row.pw,
        role: row.role,
        name: row.name,
        gender: row.gender,
        age: row.age,
        college: row.college,
        major: row.major,
      } as UserInfo;
      dialogFormVisible.value = true;
      //return upinfo;
    };
    const updateEdit = () => {
      //console.log(upinfo.value);
      store.dispatch(UPDATE_USERINFO, upinfo.value);
      dialogFormVisible.value = false;
    };
    const handleDelete = (index: any, rows: any, row: any) => {
      //console.log(index, rows);
      //console.log(rows.indexOf(row));
      const r = window.confirm("此操作将永久删除，是否继续？");
      if (r == true) {
        setTimeout(() => {
          rows.splice(rows.indexOf(row), 1);
        }, 500);
        store.dispatch(DELETE_USERINFO, row.id);
        console.log(teacherlist);
      }
    };
    return {
      teacherlist,
      filterTag,
      filterHandler,
      handleEdit,
      dialogFormVisible,
      open,
      handleDelete,
      upinfo,
      updateEdit,
    };
  },
});
</script>
