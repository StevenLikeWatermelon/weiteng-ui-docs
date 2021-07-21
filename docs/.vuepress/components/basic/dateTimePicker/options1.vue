<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="prop"
      label="参数"
      width="160"
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
      width="120"
      label="可选值"
    />
    <el-table-column
      prop="default"
      width="120"
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
          prop: 'shortcuts',
          desc: '设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表',
          type: 'Object[]',
          check: '-',
          default: '-'
        },
        {
          prop: 'disabledDate',
          desc: '设置禁用状态，参数为当前日期，要求返回 Boolean',
          type: 'Function',
          check: '-',
          default: '-'
        },
        {
          prop: 'cellClassName',
          desc: '设置日期的 className',
          type: 'Function(Date)',
          check: '-',
          default: '-'
        },
        {
          prop: 'firstDayOfWeek',
          desc: '周起始日',
          type: 'Number',
          check: '1 到 7a',
          default: '7'
        }]
    }
  }
}
</script>

<style>

</style>
