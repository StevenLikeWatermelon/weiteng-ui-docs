<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="name"
      label="方法名"
      width="120"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
    <el-table-column
      prop="callback"
      width="150"
      label="参数"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: 'clearSelection',
          desc: '用于多选表格，清空用户的选择',
          callback: '-'
        },
        {
          name: 'toggleRowSelection',
          desc: '用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中',
          callback: 'row, selected'
        },
        {
          name: 'toggleAllSelection',
          desc: '用于多选表格，切换所有行的选中状态',
          callback: '-'
        },
        {
          name: 'toggleRowExpansion',
          desc: '用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开',
          callback: 'row, expanded'
        },
        {
          name: 'setCurrentRow',
          desc: '用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。',
          callback: 'row'
        },
        {
          name: 'clearSort',
          desc: '用于清空排序条件，数据会恢复成未排序的状态',
          callback: '-'
        },
        {
          name: 'clearFilter',
          desc: '不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件',
          callback: 'columnKey'
        },
        {
          name: 'doLayout',
          desc: '对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法',
          callback: '-'
        },
        {
          name: 'sort',
          desc: '手动对 Table 进行排序。参数prop属性指定排序列，order指定排序顺序。',
          callback: 'prop: string, order: string'
        }
      ]
    }
  }
}
</script>
