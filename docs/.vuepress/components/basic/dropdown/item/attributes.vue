<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="参数" width="120" />
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
          prop: 'command',
          desc: '指令',
          type: 'string/number/object',
          check: '—',
          default: '—'
        },
        {
          prop: 'disabled',
          desc: '禁用',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'divided',
          desc: '显示分割线',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'icon',
          desc: '图标类名',
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
