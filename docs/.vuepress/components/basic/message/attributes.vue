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
          prop: 'message',
          desc: '消息文字',
          type: 'string / VNode',
          check: '—',
          default: '—'
        },
        {
          prop: 'type',
          desc: '主题',
          type: 'string',
          check: 'success/warning/info/error',
          default: 'info'
        },
        {
          prop: 'iconClass',
          desc: '自定义图标的类名，会覆盖 type',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'dangerouslyUseHTMLString',
          desc: '是否将 message 属性作为 HTML 片段处理',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'customClass',
          desc: '自定义类名',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'duration',
          desc: '显示时间, 毫秒。设为 0 则不会自动关闭',
          type: 'number',
          check: '—',
          default: '3000'
        },
        {
          prop: 'showClose',
          desc: '是否显示关闭按钮',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'center',
          desc: '文字是否居中',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'onClose',
          desc: '关闭时的回调函数, 参数为被关闭的 message 实例',
          type: 'function',
          check: '—',
          default: '—'
        },
        {
          prop: 'offset',
          desc: 'Message 距离窗口顶部的偏移量',
          type: 'number',
          check: '—',
          default: '20'
        }
      ]
    }
  }
}
</script>

<style>
</style>
