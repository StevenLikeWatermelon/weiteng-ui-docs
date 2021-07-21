<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="事件名称" width="120" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="callback" width="150" label="回调参数" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { name: 'open', desc: 'Drawer 打开的回调', callback: '—' },
        { name: 'opened', desc: 'Drawer 打开动画结束时的回调', callback: '—' },
        { name: 'close', desc: 'Drawer 关闭的回调', callback: '—' },
        { name: 'closed', desc: 'Drawer 关闭动画结束时的回调', callback: '—' }
      ]
    }
  }
}
</script>

<style>
</style>
