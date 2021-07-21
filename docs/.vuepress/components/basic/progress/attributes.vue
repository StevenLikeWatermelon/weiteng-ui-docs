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
          prop: 'percentage',
          desc: '百分比（必填）',
          type: 'number',
          check: '0-100',
          default: '0'
        },
        {
          prop: 'type',
          desc: '进度条类型',
          type: 'string',
          check: 'line/circle',
          default: 'line'
        },
        {
          prop: 'stroke-width',
          desc: '进度条的宽度，单位 px',
          type: 'number',
          check: '-',
          default: '6'
        },
        {
          prop: 'text-inside',
          desc: '进度条显示文字内置在进度条内（只在 type=line 时可用）',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'status',
          desc: '进度条当前状态',
          type: 'string',
          check: 'success/exception/warning',
          default: '-'
        },
        {
          prop: 'color',
          desc: '进度条背景色（会覆盖 status 状态颜色）',
          type: 'string/function/array',
          check: '-',
          default: '-'
        },
        {
          prop: 'width',
          desc: '环形进度条画布宽度（只在 type 为 circle 时可用）',
          type: 'number',
          check: '-',
          default: '-'
        },
        {
          prop: 'show-text',
          desc: '是否显示进度条文字内容',
          type: 'boolean',
          check: '-',
          default: 'true'
        },
        {
          prop: 'stroke-linecap',
          desc: 'circle 类型路径两端的形状',
          type: 'string',
          check: 'butt/round/square',
          default: 'round'
        }
      ]
    }
  }
}
</script>

<style>
</style>
