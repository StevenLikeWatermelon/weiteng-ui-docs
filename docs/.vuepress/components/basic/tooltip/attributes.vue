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
          prop: 'effect',
          desc: '默认提供的主题',
          type: 'String',
          check: 'dark/light',
          default: 'dark'
        },
        {
          prop: 'content',
          desc: '显示的内容，也可以通过 slot#content 传入 DOM',
          type: 'String',
          check: '—',
          default: '—'
        },
        {
          prop: 'placement',
          desc: 'Tooltip 的出现位置',
          type: 'String',
          check: 'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
          default: 'bottom'
        },
        {
          prop: 'value / v-model',
          desc: '状态是否可见',
          type: 'Boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'disabled',
          desc: 'Tooltip 是否可用',
          type: 'Boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'open-delay',
          desc: '延迟出现，单位毫秒',
          type: 'Number',
          check: '—',
          default: '0'
        },
        {
          prop: 'manual',
          desc: '手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效',
          type: 'Boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'popper-class',
          desc: '为 Tooltip 的 popper 添加类名',
          type: 'String',
          check: '—',
          default: '—'
        },
        {
          prop: 'enterable',
          desc: '鼠标是否可进入到 tooltip 中',
          type: 'Boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'hide-after',
          desc: 'Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏',
          type: 'number',
          check: '—',
          default: '0'
        },
        {
          prop: 'tabindex',
          desc: 'Tooltip 组件的 tabindex',
          type: 'number',
          check: '—',
          default: '0'
        }
      ]
    }
  }
}
</script>

<style>
</style>
