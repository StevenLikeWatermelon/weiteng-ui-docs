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
          name: 'validate',
          desc: '任一表单项被校验后触发',
          callback: '被校验的表单项 prop 值，校验是否通过，错误消息（如果存在）'
        }
      ]
    }
  }
}
</script>

<style>

</style>
