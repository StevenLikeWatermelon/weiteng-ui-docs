<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="事件名称" width="120" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="callback" width="150" label="回调参数" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'click',
          desc: 'split-button 为 true 时，点击左侧按钮的回调',
          callback: '—'
        },
        {
          prop: 'command',
          desc: '点击菜单项触发的事件回调',
          callback: 'dropdown-item 的指令'
        },
        {
          prop: 'visible-change',
          desc: '下拉框出现/隐藏时触发',
          callback: '出现则为 true，隐藏则为 false'
        }
      ]
    }
  }
}
</script>

<style>
</style>
