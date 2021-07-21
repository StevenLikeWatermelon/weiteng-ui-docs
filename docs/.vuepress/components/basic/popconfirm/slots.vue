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
          prop: 'reference',
          desc: '触发 Popconfirm 显示的 HTML 元素'
        }
      ]
    }
  }
}
</script>

<style>

</style>
