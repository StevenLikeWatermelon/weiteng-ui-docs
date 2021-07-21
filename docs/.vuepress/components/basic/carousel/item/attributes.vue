<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="参数" width="140" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="type" width="160" label="类型" />
    <el-table-column prop="check" label="可选值" />
    <el-table-column prop="default" width="140" label="默认值" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'name',
          desc: '幻灯片的名字，可用作 setActiveItem 的参数',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'label',
          desc: '该幻灯片所对应指示器的文本',
          type: 'string',
          check: '—',
          default: '—'
        }
      ]
    }
  }
}
</script>

<style>
</style>
