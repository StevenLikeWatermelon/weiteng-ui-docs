<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="name"
      label="事件名称"
      width="120"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
    <el-table-column
      prop="callback"
      width="150"
      label="回调参数"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: 'tab-click',
          desc: 'tab 被选中时触发',
          callback: '被选中的标签 tab 实例'
        }
      ]
    }
  }
}
</script>

<style>

</style>
