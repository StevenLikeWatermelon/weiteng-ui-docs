<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="参数" width="120" />
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
          desc: '绑定值，选中选项卡的 name',
          type: 'string',
          check: '—',
          default: '第一个选项卡的 name'
        },
        {
          prop: 'type',
          desc: '风格类型',
          type: 'string',
          check: 'card/border-card',
          default: '—'
        },
        {
          prop: 'closable',
          desc: '标签是否可关闭',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'addable',
          desc: '标签是否可增加',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'editable',
          desc: '标签是否同时可增加和关闭',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'tab-position',
          desc: '选项卡所在位置',
          type: 'string',
          check: 'top/right/bottom/left',
          default: 'top'
        },
        {
          prop: 'stretch',
          desc: '标签的宽度是否自撑开',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'before-leave',
          desc: '切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
          type: 'Function(activeName, oldActiveName)',
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
