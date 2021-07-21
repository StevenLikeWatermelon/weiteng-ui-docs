<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="参数" width="120" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="type" width="120" label="类型" />
    <el-table-column prop="check" label="可选值" />
    <el-table-column prop="default" width="100" label="默认值" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'data',
          desc: '展示数据',
          type: 'array',
          check: '—',
          default: '—'
        },
        {
          prop: 'empty-text',
          desc: '内容为空的时候展示的文本',
          type: 'String',
          check: '—',
          default: '—'
        },
        {
          prop: 'node-key',
          desc: '每个树节点用来作为唯一标识的属性，整棵树应该是唯一的',
          type: 'String',
          check: '—',
          default: '—'
        },
        {
          prop: 'props',
          desc: '配置选项，具体看下表',
          type: 'object',
          check: '—',
          default: '—'
        },
        {
          prop: 'render-after-expand',
          desc: '是否在第一次展开某个树节点后才渲染其子节点',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'load',
          desc: '加载子树数据的方法，仅当 lazy 属性为true 时生效',
          type: 'function(node, resolve)',
          check: '—',
          default: '—'
        },
        {
          prop: 'render-content',
          desc: '树节点的内容区的渲染 Function',
          type: 'Function(h, { node, data, store }',
          check: '—',
          default: '—'
        },
        {
          prop: 'highlight-current',
          desc: '是否高亮当前选中节点，默认值是 false。',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'default-expand-all',
          desc: '是否默认展开所有节点',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'expand-on-click-node',
          desc:
            '是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'check-on-click-node',
          desc:
            '是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'auto-expand-parent',
          desc: '展开子节点的时候是否自动展开父节点',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'default-expanded-keys',
          desc: '默认展开的节点的 key 的数组',
          type: 'array',
          check: '—',
          default: '—'
        },
        {
          prop: 'show-checkbox',
          desc: '节点是否可被选择',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'check-strictly',
          desc:
            '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'default-checked-keys',
          desc: '默认勾选的节点的 key 的数组',
          type: 'array',
          check: '—',
          default: '—'
        },
        {
          prop: 'current-node-key',
          desc: '当前选中的节点',
          type: 'string, number',
          check: '—',
          default: '—'
        },
        {
          prop: 'filter-node-method',
          desc:
            '对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏',
          type: 'Function(value, data, node)',
          check: '—',
          default: '—'
        },
        {
          prop: 'accordion',
          desc: '是否每次只打开一个同级树节点展开',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'indent',
          desc: '相邻级节点间的水平缩进，单位为像素',
          type: 'number',
          check: '—',
          default: '16'
        },
        {
          prop: 'icon-class',
          desc: '自定义树节点的图标',
          type: 'string',
          check: '-',
          default: '-'
        },
        {
          prop: 'lazy',
          desc: '是否懒加载子节点，需与 load 方法结合使用',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'draggable',
          desc: '是否开启拖拽节点功能',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'allow-drag',
          desc: '判断节点能否被拖拽',
          type: 'Function(node)',
          check: '—',
          default: '—'
        },
        {
          prop: 'allow-drop',
          desc:
            "拖拽时判定目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后",
          type: 'Function(draggingNode, dropNode, type)',
          check: '—',
          default: '—'
        }
      ]
    }
  }
}
</script>

<style>
</style>
