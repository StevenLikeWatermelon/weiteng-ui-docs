<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="参数" width="140" />
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
          prop: 'value / v-model',
          desc: '绑定值',
          type: 'array',
          check: '—',
          default: '—'
        },
        {
          prop: 'data',
          desc: 'Transfer 的数据源',
          type: 'array[{ key, label, disabled }]',
          check: '—',
          default: '[ ]'
        },
        {
          prop: 'filterable',
          desc: '是否可搜索',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'filter-placeholder',
          desc: '搜索框占位符',
          type: 'string',
          check: '—',
          default: '请输入搜索内容'
        },
        {
          prop: 'filter-method',
          desc: '自定义搜索方法',
          type: 'function',
          check: '—',
          default: '—'
        },
        {
          prop: 'target-order',
          desc:
            '右侧列表元素的排序策略：若为 original，则保持与数据源相同的顺序；若为 push，则新加入的元素排在最后；若为 unshift，则新加入的元素排在最前',
          type: 'string',
          check: 'original / push / unshift',
          default: 'original'
        },
        {
          prop: 'titles',
          desc: '自定义列表标题',
          type: 'array',
          check: '—',
          default: "['列表 1', '列表 2']"
        },
        {
          prop: 'button-texts',
          desc: '自定义按钮文案',
          type: 'array',
          check: '—',
          default: '[ ]'
        },
        {
          prop: 'render-content',
          desc: '自定义数据项渲染函数',
          type: 'function(h, option)',
          check: '—',
          default: '—'
        },
        {
          prop: 'format',
          desc: '列表顶部勾选状态文案',
          type: 'object{noChecked, hasChecked}',
          check: '—',
          default:
            "{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }"
        },
        {
          prop: 'props',
          desc: '数据源的字段别名',
          type: 'object{key, label, disabled}',
          check: '—',
          default: '—'
        },
        {
          prop: 'left-default-checked',
          desc: '初始状态下左侧列表的已勾选项的 key 数组',
          type: 'array',
          check: '—',
          default: '[ ]'
        },
        {
          prop: 'right-default-checked',
          desc: '初始状态下右侧列表的已勾选项的 key 数组',
          type: 'array',
          check: '—',
          default: '[ ]'
        }
      ]
    }
  }
}
</script>

<style>
</style>
