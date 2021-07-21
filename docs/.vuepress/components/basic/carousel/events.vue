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
        { name: 'change', desc: '幻灯片切换时触发', callback: '目前激活的幻灯片的索引，原幻灯片的索引' }
      ]
    }
  }
}
</script>

<style>
</style>
