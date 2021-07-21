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
          prop: 'type',
          desc: '对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮',
          type: 'string',
          check: 'selection/index/expand',
          default: '-'
        },
        {
          prop: 'index',
          desc: '如果设置了 type=index，可以通过传递 index 属性来自定义索引',
          type: 'number, Function(index)',
          check: '-',
          default: '-'
        },
        {
          prop: 'column-key',
          desc: 'column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件',
          type: 'string',
          check: '-',
          default: '-'
        },
        {
          prop: 'label',
          desc: '显示的标题',
          type: 'string',
          check: '-',
          default: '-'
        },
        {
          prop: 'prop',
          desc: '对应列内容的字段名',
          type: 'string',
          check: '-',
          default: '-'
        },
        {
          prop: 'width',
          desc: '对应列的宽度',
          type: 'string',
          check: '-',
          default: '-'
        },
        {
          prop: 'min-width',
          desc: '对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列',
          type: 'string',
          check: '-',
          default: '-'
        },
        {
          prop: 'fixed',
          desc: '列是否固定在左侧或者右侧，true 表示固定在左侧',
          type: 'string, boolean',
          check: '-',
          default: '-'
        },
        {
          prop: 'render-header',
          desc: '列标题 Label 区域渲染使用的 Function',
          type: 'Function',
          check: 'Function(h, { column, $index })',
          default: '-'
        },
        {
          prop: 'sortable',
          desc: '对应列是否可以排序，如果设置为custom，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件',
          type: 'boolean, string',
          check: 'true, false, custom',
          default: 'false'
        },
        {
          prop: 'sort-method',
          desc: '对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致',
          type: 'Function(a, b)',
          check: '-',
          default: '-'
        },
        {
          prop: 'sort-by',
          desc: '指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推',
          type: 'String/Array/Function(row, index)',
          check: '-',
          default: '-'
        },
        {
          prop: 'sort-orders',
          desc: '数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序',
          type: 'array',
          check: '数组中的元素需为以下三者之一：ascending 表示升序，descending 表示降序，null 表示还原为原始顺序',
          default: '-'
        },
        {
          prop: 'resizable',
          desc: '对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真',
          type: 'boolean',
          check: '-',
          default: 'true'
        },
        {
          prop: 'formatter',
          desc: '用来格式化内容	',
          type: 'Function(row, column, cellValue, index)',
          check: '-',
          default: '-'
        },
        {
          prop: 'show-overflow-tooltip',
          desc: '当内容过长被隐藏时显示 tooltip',
          type: 'Boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'align',
          desc: '对齐方式',
          type: 'String',
          check: 'left/center/right	',
          default: 'left'
        },
        {
          prop: 'header-align',
          desc: '表头对齐方式，若不设置该项，则使用表格的对齐方式',
          type: 'String',
          check: 'left/center/right	',
          default: 'left'
        },
        {
          prop: 'class-name',
          desc: '列的 className',
          type: 'String',
          check: '-',
          default: '-'
        },
        {
          prop: 'label-class-name',
          desc: '当前列标题的自定义类名	',
          type: 'string',
          check: '-	',
          default: '-'
        },
        {
          prop: 'selectable',
          desc: '仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选',
          type: 'Function(row, index)',
          check: '-',
          default: '-'
        },
        {
          prop: 'reserve-selection',
          desc: '仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）',
          type: 'Boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'filters',
          desc: '数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。',
          type: 'Array[{ text, value }]',
          check: '-',
          default: '-'
        },
        {
          prop: 'ilter-placement',
          desc: '过滤弹出框的定位',
          type: 'String',
          check: '与 Tooltip 的 placement 属性相同',
          default: '-'
        },
        {
          prop: 'filter-multiple',
          desc: '数据过滤的选项是否多选	',
          type: 'Boolean',
          check: '-',
          default: 'true'
        },
        {
          prop: 'filter-method',
          desc: '数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。',
          type: 'Function(value, row, column)',
          check: '-',
          default: '-'
        },
        {
          prop: 'filtered-value',
          desc: '选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。',
          type: 'Array',
          check: '-',
          default: '-'
        }]
    }
  }
}
</script>

<style>

</style>
