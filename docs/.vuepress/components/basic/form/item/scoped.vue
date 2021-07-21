<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="prop"
      label="名称"
      width="160"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'error',
          desc: '自定义表单校验信息的显示方式，参数为 { error }'
        }
      ]
    }
  }
}
</script>

<style>

</style>
