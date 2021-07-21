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
          name: 'blur',
          desc: '在 Input 失去焦点时触发',
          callback: '(event: Event)'
        }, {
          name: 'focus',
          desc: '在 Input 获得焦点时触发',
          callback: '(event: Event)'
        },
        {
          name: 'change',
          desc: '仅在输入框失去焦点或用户按下回车时触发',
          callback: '(value: string | number)'
        }, {
          name: 'input',
          desc: '在 Input 值改变时触发',
          callback: '(value: string | number)'
        },
        {
          name: 'clear',
          desc: '在点击由 clearable 属性生成的清空按钮时触发',
          callback: '-'
        }
      ]
    }
  }
}
</script>

<style>

</style>
