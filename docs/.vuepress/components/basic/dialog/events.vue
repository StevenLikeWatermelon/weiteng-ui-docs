<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="事件名称" width="120" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="callback" width="650" label="回调参数" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { prop: 'open', desc: 'Dialog 打开的回调', callback: '—' },
        { prop: 'opened', desc: 'Dialog 打开动画结束时的回调', callback: '—' },
        { prop: 'close', desc: 'Dialog 关闭的回调', callback: '—' },
        { prop: 'closed', desc: 'Dialog 关闭动画结束时的回调', callback: '—' }
      ]
    }
  }
}
</script>

<style>
</style>s
