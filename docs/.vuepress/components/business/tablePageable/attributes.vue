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
      width="180"
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
          prop: 'loading',
          desc: '获取数据时显示loading',
          type: 'boolean',
          check: '-',
          default: 'false'
        }, {
          prop: 'layout',
          desc: '组件布局，子组件名用逗号分隔',
          type: 'String',
          check: 'sizes, prev, pager, next, jumper, ->, total, slot',
          default: 'slot, next, pager, prev'
        },
        {
          prop: 'pagination',
          desc: '分页相关的配置项',
          type: 'Object',
          check: '-',
          default: `{
            pageSize: 10,
            total: 0,
            pageIndex: 0,
            pageSizes: [10, 20, 50, 100, 500, 5000]
          }`
        }]
    }
  }
}
</script>

<style>

</style>
