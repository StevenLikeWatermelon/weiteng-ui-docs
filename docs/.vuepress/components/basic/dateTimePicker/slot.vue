<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="prop"
      label="Name"
      width="360"
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
          prop: 'range-separator',
          desc: '自定义分隔符'
        }
      ]
    }
  }
}
</script>

<style>

</style>
