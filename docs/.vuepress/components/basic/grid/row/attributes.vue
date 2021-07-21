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
          prop: 'gutter',
          desc: '栅格间隔',
          type: 'number',
          check: '-',
          default: '0'
        }, {
          prop: 'type',
          desc: '布局模式，可选 flex，现代浏览器下有效',
          type: 'string',
          check: '-',
          default: '-'
        }, {
          prop: 'justify',
          desc: 'flex 布局下的水平排列方式',
          type: 'string',
          check: 'start/end/center/space-around/space-between',
          default: 'start'
        }, {
          prop: 'align',
          desc: 'flex 布局下的垂直排列方式',
          type: 'string',
          check: 'top/middle/bottom',
          default: 'top'
        }]
    }
  }
}
</script>

<style>

</style>
