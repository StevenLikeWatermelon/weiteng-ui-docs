<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="prop"
      label="事件名称"
      width="160"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
    <el-table-column
      prop="callback"
      width="180"
      label="回调参"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'change',
          desc: '当选中节点变化时触发',
          callback: '选中节点的值'
        },
        {
            prop: 'expand-change',
            desc: '当展开节点发生变化时触发	',
            callback: '各父级选项值组成的数组'
        }
      ]
    }
  }
}
</script>