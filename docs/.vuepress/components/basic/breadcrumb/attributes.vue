<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="参数" width="140" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="type" width="120" label="类型" />
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
          prop: 'separator',
          desc: '分隔符	',
          type: 'string',
          check: '—',
          default: '/'
        },
        {
          prop: 'separator-class',
          desc: '图标分隔符 class',
          type: 'string',
          check: '-',
          default: '—'
        }
      ]
    }
  }
}
</script>

<style>
</style>
