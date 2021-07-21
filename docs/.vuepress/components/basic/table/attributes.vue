<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="prop"
      label="参数"
      width="140"
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
          prop: 'data',
          desc: '显示的数据	',
          type: 'array',
          check: '-',
          default: '-'
        },
        {
          prop: 'height',
          desc: 'Table 的高度，默认为自动高度。',
          type: 'string/number',
          check: '-',
          default: '-'
        },
        {
          prop: 'max-height',
          desc: 'Table 的最大高度。合法的值为数字或者单位为 px 的高度。',
          type: 'string/number',
          check: '-',
          default: '-'
        },
        {
          prop: 'stripe',
          desc: '是否为斑马纹 table',
          type: 'boolean',
          check: '-',
          default: 'true'
        },
        {
          prop: 'border',
          desc: '是否带有纵向边框',
          type: 'boolean',
          check: '-',
          default: 'true'
        },
        {
          prop: 'show-header',
          desc: '是否显示表头',
          type: 'boolean',
          check: '-',
          default: 'true'
        },
        {
          prop: 'highlight-current-row',
          desc: '是否要高亮当前行',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'row-class-name',
          desc: '行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。',
          type: 'Function({row, rowIndex})/String',
          check: '-',
          default: '-'
        },
        {
          prop: 'row-style',
          desc: '行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。',
          type: 'boolean',
          check: 'Function({row, rowIndex})/Object',
          default: '-'
        },
        {
          prop: 'cell-class-name',
          desc: '单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。',
          type: 'Function({row, column, rowIndex, columnIndex})/String',
          check: '-',
          default: '-'
        },
        {
          prop: 'cell-style',
          desc: '单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。',
          type: 'Function({row, column, rowIndex, columnIndex})/Object',
          check: '-',
          default: '-'
        },
        {
          prop: 'header-row-class-name',
          desc: '表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。',
          type: 'Function({row, rowIndex})/String',
          check: '-',
          default: '-'
        },
        {
          prop: 'header-cell-style',
          desc: '表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。',
          type: 'Function({row, column, rowIndex, columnIndex})/Object',
          check: '-',
          default: '-'
        },
        {
          prop: 'empty-text',
          desc: '空数据时显示的文本内容，也可以通过 slot="empty" 设置',
          type: 'String',
          check: '-',
          default: '暂无数据'
        },
        {
          prop: 'show-summary',
          desc: '是否在表尾显示合计行',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'sum-text',
          desc: '合计行第一列的文本',
          type: 'String',
          check: '-',
          default: '合计'
        },
        {
          prop: 'summary-method',
          desc: '自定义的合计计算方法',
          type: 'Function({ columns, data })',
          check: '-',
          default: '-'
        }]
    }
  }
}
</script>

<style>

</style>
