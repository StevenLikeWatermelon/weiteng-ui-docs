<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="方法名" width="160" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="callback" width="120" label="参数" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'setActiveItem',
          desc: '手动切换幻灯片',
          callback: '需要切换的幻灯片的索引，从 0 开始；或相应 el-carousel-item 的 name 属性值'
        },
        { prop: 'prev', desc: '切换至上一张幻灯片', callback: '—' },
        { prop: 'next', desc: '切换至下一张幻灯片', callback: '—' }
      ]
    }
  }
}
</script>

<style>
</style>
