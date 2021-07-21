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
          prop: 'trigger',
          desc: '触发方式',
          type: 'String',
          check: 'click/focus/hover/manual',
          default: 'click'
        },
        {
          prop: 'title',
          desc: '标题',
          type: 'String',
          check: '—',
          default: '—'
        },
        {
          prop: 'content',
          desc: '显示的内容，也可以通过 slot 传入 DOM',
          type: 'String',
          check: '—',
          default: '—'
        },
        {
          prop: 'width',
          desc: '宽度',
          type: 'String, Number',
          check: '—',
          default: '最小宽度 150px'
        },
        {
          prop: 'placement',
          desc: '出现位置',
          type: 'String',
          check:
            'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
          default: 'bottom'
        },
        {
          prop: 'disabled',
          desc: 'Popover 是否可用',
          type: 'Boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'value / v-model',
          desc: '状态是否可见',
          type: 'Boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'offset',
          desc: '出现位置的偏移量',
          type: 'Number',
          check: '—',
          default: '0'
        },
        {
          prop: 'popper-class',
          desc: '为 popper 添加类名',
          type: 'String',
          check: '—',
          default: '—'
        },
        {
          prop: 'open-delay',
          desc: '触发方式为 hover 时的显示延迟，单位为毫秒',
          type: 'Number',
          check: '—',
          default: '—'
        },
        {
          prop: 'close-delay',
          desc: '触发方式为 hover 时的隐藏延迟，单位为毫秒',
          type: 'number',
          check: '—',
          default: '200'
        },
        {
          prop: 'tabindex',
          desc: 'Popover 组件的 tabindex',
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
