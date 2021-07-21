<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="参数" width="160" />
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
          prop: 'v-model',
          desc: '绑定值',
          type: 'Object / Array',
          check: '-',
          default: '-'
        },
        {
          prop: 'data',
          desc: '下拉数据项',
          type: 'Array',
          check: '-',
          default: '-'
        },
        {
          prop: 'disabled',
          desc: '禁用',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'filterable',
          desc: '筛选',
          type: 'boolean',
          check: '-',
          default: 'false'
        }, {
          prop: 'multiple',
          desc: '多选',
          type: 'boolean',
          check: '-',
          default: 'false'
        }, {
          prop: 'placeholder',
          desc: '占位文本',
          type: 'string',
          check: '-',
          default: '-'
        },
        {
          prop: 'nodeKey',
          desc: '每个树节点用来作为唯一标识的属性，整棵树应该是唯一的',
          type: 'string',
          check: '-',
          default: '-'
        },
        {
          prop: 'filterNodeMethod',
          desc: '对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏',
          type: 'Function(value, data, node)',
          check: '-',
          default: '-'
        },
        {
          prop: 'props',
          desc: '配置选项，具体看下表',
          type: 'object',
          check: '-',
          default: '-'
        }
      ]
    }
  }
}
</script>
