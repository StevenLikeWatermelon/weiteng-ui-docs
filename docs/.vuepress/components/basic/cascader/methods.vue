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
          prop: 'getCheckedNodes',
          desc: '获取选中的节点	',
          callback: '(leafOnly) 是否只是叶子节点，默认值为 false'
        }
      ]
    }
  }
}
</script>

<style>

</style>
