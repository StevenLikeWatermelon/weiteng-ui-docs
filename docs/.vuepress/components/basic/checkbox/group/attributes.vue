<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="prop"
      label="参数"
      width="120"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
    <el-table-column
      prop="type"
      width="120"
      label="类型"
    />
    <el-table-column
      prop="check"
      label="可选值"
    />
    <el-table-column
      prop="default"
      width="100"
      label="默认值"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'value / v-model',
          desc: '绑定值',
          type: 'array',
          check: '-',
          default: '-'
        },
        {
          prop: 'disabled',
          desc: '禁用',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'min',
          desc: '可被勾选的 checkbox 的最小数量',
          type: 'number',
          check: '-',
          default: '-'
        },
        {
          prop: 'max',
          desc: '可被勾选的 checkbox 的最大数量',
          type: 'number',
          check: '-',
          default: '-'
        }]
    }
  }
}
</script>

<style>

</style>
