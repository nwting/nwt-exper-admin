<template>
  <!-- <el-button @click="resetDateFilter">清除日期过滤器</el-button>
  <el-button @click="clearFilter">清除所有过滤器</el-button> -->
  <el-table
    row-key="date"
    ref="filterTable"
    :data="labinfolist"
    height="500"
    style="width: 100%"
  >
    <el-table-column
      prop="deviceNum"
      label="机器数量"
      width="180"
      sortable
      column-key="deviceNum"
    ></el-table-column>
    <el-table-column
      prop="id"
      label="实验室编号"
      sortable
      width="180"
      :filters="labfilter"
      :filter-method="filterHandler"
    ></el-table-column>
    <el-table-column
      prop="place"
      label="教学楼"
      :formatter="formatter"
    ></el-table-column>
    <el-table-column
      prop="description"
      label="描述信息"
      :formatter="formatter"
    ></el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
          编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, labinfolist, scope.row)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog title="修改信息" v-model="dialogFormVisible">
    <el-form :model="upinfo">
      <el-form-item label="实验室编号" :label-width="formLabelWidth">
        <el-input v-model="upinfo.id" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="机器数量" :label-width="formLabelWidth">
        <el-input v-model="upinfo.deviceNum" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="教学楼" :label-width="formLabelWidth">
        <el-input v-model="upinfo.place" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="描述信息" :label-width="formLabelWidth">
        <el-input v-model="upinfo.description" autocomplete="off"></el-input>
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
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, ref, defineComponent } from "vue";
import { Lab } from "@/role/Menu";
import { DELETE_LABINFO, UPDATE_LABINFO } from "@/store/VuexTypes";
function setlabfilter(labinfoList: Lab[] | undefined) {
  const arr: { text: string; value: string }[] = [];
  if (labinfoList != undefined) {
    labinfoList.forEach((x) => {
      const item = {
        text: x.id,
        value: x.id,
      };
      arr.push(item);
    });
    return arr;
  }
}
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const labinfolist = computed(() => store.state.labinfoList);
    const labfilter = setlabfilter(labinfolist.value);
    const dialogFormVisible = ref(false);
    const filterHandler = (value: any, row: any, column: any) => {
      const property = column["property"];
      return row[property] === value;
    };

    const upinfo = ref<Lab>();
    const handleEdit = (index: any, row: any) => {
      // console.log(index);
      console.log(row);
      //console.log(row.id);
      upinfo.value = {
        id: row.id,
        place: row.place,
        deviceNum: row.deviceNum,
        description: row.description,
      } as Lab;
      dialogFormVisible.value = true;
      //return upinfo;
    };
    const updateEdit = () => {
      //console.log(upinfo.value);
      store.dispatch(UPDATE_LABINFO, upinfo.value);
      dialogFormVisible.value = false;
    };
    const handleDelete = (index: any, rows: any, row: any) => {
      //console.log(rows);
      const r = window.confirm("此操作将永久删除，是否继续？");
      if (r == true) {
        setTimeout(() => {
          rows.splice(index, 1);
        }, 500);
        store.dispatch(DELETE_LABINFO, row.id);
      }
    };
    return {
      labinfolist,
      labfilter,
      filterHandler,
      updateEdit,
      handleDelete,
      handleEdit,
      upinfo,
      dialogFormVisible,
    };
  },
});
</script>

<style></style>
