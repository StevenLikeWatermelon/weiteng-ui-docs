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
          desc: '选中项绑定值',
          type: '-',
          check: '-',
          default: '-'
        },
        {
          prop: 'options',
          desc: '可选项数据源，键名可通过 Props 属性配置',
          type: 'array',
          check: '-',
          default: '-'
        },
        {
          prop: 'props',
          desc: '配置选项，具体见下表',
          type: 'object',
          check: '-',
          default: '-'
        },
        {
          prop: 'size',
          desc: '尺寸',
          type: 'string',
          check: 'medium / small / mini',
          default: '-'
        },
        {
          prop: 'placeholder',
          desc: '输入框占位文本	',
          type: 'string	',
          check: '-',
          default: '请选择'
        },
        {
          prop: 'disabled',
          desc: '是否禁用',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'clearable',
          desc: '是否支持清空选项',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'show-all-levels',
          desc: '输入框中是否显示选中值的完整路径',
          type: 'boolean',
          check: '-',
          default: 'true'
        }, {
          prop: 'collapse-tags',
          desc: '多选模式下是否折叠Tag',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'separator',
          desc: '选项分隔符',
          type: 'string',
          check: '-',
          default: "斜杠' / '"
        },
        {
          prop: 'filterable',
          desc: '是否可搜索选项	',
          type: 'boolean',
          check: '-',
          default: '-'
        },
        {
          prop: 'filter-method',
          desc: '自定义搜索逻辑，第一个参数是节点node，第二个参数是搜索关键词keyword，通过返回布尔值表示是否命中',
          type: 'function(node, keyword)',
          check: '-',
          default: '-'
        },
        {
          prop: 'debounce',
          desc: '搜索关键词输入的去抖延迟，毫秒',
          type: 'number',
          check: '-',
          default: '300'
        },
        {
          prop: 'before-filter',
          desc: '筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选',
          type: 'function(value)',
          check: '-',
          default: '-'
        },
        {
          prop: 'popper-class',
          desc: '自定义浮层类名	',
          type: 'string',
          check: '-',
          default: '-'
        }
      ]
    }
  }
}
</script>

<style>

</style>
