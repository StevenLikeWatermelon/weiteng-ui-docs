<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="prop"
      label="事件名称"
      width="120"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
    <el-table-column
      prop="callback"
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
          prop: 'change',
          desc: '用户确认选定的值时触发',
          callback: '组件绑定值'
        },
        {
          prop: 'blur',
          desc: '当 input 失去焦点时触发',
          callback: '组件实例'
        },
        {
          prop: 'focus',
          desc: '当 input 获得焦点时触发',
          callback: '组件实例'
        }
      ]
    }
  }
}
</script>

<style>

</style>
