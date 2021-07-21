<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="prop"
      label="方法名"
      width="160"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
    <el-table-column
      prop="callback"
      width="120"
      label="参数"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'clearQuery',
          desc: '清空某个面板的搜索关键词',
          callback: `'left' / 'right'，指定需要清空的面板`
        }
      ]
    }
  }
}
</script>

<style>

</style>
