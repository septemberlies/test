<template>
  <div>
    <el-form :inline="true" :model="selectData" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input
          v-model="selectData.nickName"
          placeholder="输入姓名"
          clearable
        />
      </el-form-item>
      <el-form-item
        label="角色
     "
      >
        <el-select
          v-model="selectData.role"
          class="m-2"
          placeholder="全部"
          size="large"
        >
          <el-option label="全部" :value="0" />
          <el-option
            v-for="item in roleList"
            :key="item.roleId"
            :label="item.roleName"
            :value="item.roleId"
          />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit()">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="nickName" label="姓名" width="180" />
      <el-table-column prop="role" label="角色">
        <template #default="scope">
          <el-button
            v-for="item in scope.row.role"
            :key="item.role"
            type="primary"
            size="small"
          >
            {{ item.roleName }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { getUserList, getRoleList } from "../request/api";
import { InitData } from "../type/user";
export default defineComponent({
  setup() {
    const data = reactive(new InitData());
    onMounted(() => {
      getUser();
      getRole();
    });
    const getUser = () => {
      getUserList().then((res) => {
        data.list = res.data;
        console.log(res.data);
      });
    };
    const getRole = () => {
      getRoleList().then((res) => {
        console.log(res);
        data.roleList = res.data;
      });
    };
    const deleteRow = (row: any) => {
      console.log(row);
    };
    return { ...toRefs(data), deleteRow };
  },
});
</script>

<style scoped>
</style>