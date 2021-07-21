<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="参数" width="140" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="type" width="160" label="类型" />
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
          prop: 'height',
          desc: '走马灯的高度',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'initial-index',
          desc: '初始状态激活的幻灯片的索引，从 0 开始',
          type: 'number',
          check: '—',
          default: '0'
        },
        {
          prop: 'trigger',
          desc: '指示器的触发方式',
          type: 'string',
          check: 'click',
          default: '—'
        },
        {
          prop: 'autoplay',
          desc: '是否自动切换',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'interval',
          desc: '自动切换的时间间隔，单位为毫秒',
          type: 'number',
          check: '—',
          default: '3000'
        },
        {
          prop: 'indicator-position',
          desc: '指示器的位置',
          type: 'string',
          check: 'outside/none',
          default: '—'
        },
        {
          prop: 'arrow',
          desc: '切换箭头的显示时机',
          type: 'string',
          check: 'always/hover/never',
          default: 'hover'
        },
        {
          prop: 'type',
          desc: '走马灯的类型',
          type: 'string',
          check: 'card',
          default: '—'
        },
        {
          prop: 'loop',
          desc: '是否循环显示',
          type: 'boolean',
          check: '-',
          default: 'true'
        },
        {
          prop: 'direction',
          desc: '走马灯展示的方向',
          type: 'string',
          check: 'horizontal/vertical',
          default: 'horizontal'
        }
      ]
    }
  }
}
</script>

<style>
</style>
