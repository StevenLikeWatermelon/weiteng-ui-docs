<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="name"
      label="name"
      width="120"
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
          name: '-',
          desc: '自定义列的内容，参数为 { row, column, $index }'
        }, {
          name: 'header',
          desc: '自定义表头的内容. 参数为 { column, $index }'
        }]
    }
  }
}
</script>

<style>

</style>
