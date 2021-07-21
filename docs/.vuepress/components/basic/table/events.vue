<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="name"
      label="事件名称"
      width="140"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
    <el-table-column
      prop="callback"
      width="150"
      label="回调参数"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: 'select',
          desc: '当用户手动勾选数据行的 Checkbox 时触发的事件',
          callback: 'selection, row'
        }, {
          name: 'select-all',
          desc: '当用户手动勾选全选 Checkbox 时触发的事件',
          callback: 'selection'
        }, {
          name: 'selection-change',
          desc: '当选择项发生变化时会触发该事件',
          callback: 'selection'
        }, {
          name: 'cell-mouse-enter',
          desc: '当单元格 hover 进入时会触发该事件',
          callback: 'row, column, cell, event'
        }, {
          name: 'cell-mouse-leave',
          desc: '当单元格 hover 离开时会触发该事件',
          callback: 'row, column, cell, event'
        }, {
          name: 'cell-click',
          desc: '当某个单元格被点击时会触发该事件',
          callback: 'row, column, cell, event'
        }, {
          name: 'cell-dblclick',
          desc: '当某个单元格被双击击时会触发该事件',
          callback: 'row, column, cell, event'
        }, {
          name: 'row-click',
          desc: '当某一行被点击时会触发该事件',
          callback: 'row, column, event'
        }, {
          name: 'row-contextmenu',
          desc: '当某一行被鼠标右键点击时会触发该事件	',
          callback: 'row, column, event'
        }, {
          name: 'row-dblclick',
          desc: '当某一行被双击时会触发该事件	',
          callback: 'row, column, event'
        }, {
          name: 'header-click',
          desc: '当某一列的表头被点击时会触发该事件',
          callback: 'column, event'
        }, {
          name: 'sort-change',
          desc: '当表格的排序条件发生变化的时候会触发该事件',
          callback: '{ column, prop, order }'
        }, {
          name: 'filter-change',
          desc: '当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。',
          callback: 'filters'
        }, {
          name: 'current-change',
          desc: '当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性',
          callback: 'currentRow, oldCurrentRow'
        }, {
          name: 'header-dragend',
          desc: '当拖动表头改变了列的宽度的时候会触发该事件',
          callback: 'newWidth, oldWidth, column, event'
        }
      ]
    }
  }
}
</script>

<style>

</style>
