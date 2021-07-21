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
          prop: 'title',
          desc: 'MessageBox 标题',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'message',
          desc: 'MessageBox 消息正文内容',
          type: 'string / VNode',
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
          prop: 'type',
          desc: '消息类型，用于显示图标',
          type: 'string',
          check: 'success / info / warning / error',
          default: '—'
        },
        {
          prop: 'iconClass',
          desc: '自定义图标的类名，会覆盖 type',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'customClass',
          desc: 'MessageBox 的自定义类名',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'callback',
          desc: '若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调',
          type:
            "function(action, instance)，action 的值为'confirm', 'cancel'或'close', instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法",
          check: '—',
          default: '—'
        },
        {
          prop: 'showClose',
          desc: 'MessageBox 是否显示右上角关闭按钮',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'beforeClose',
          desc: 'MessageBox 关闭前的回调，会暂停实例的关闭',
          type:
            "function(action, instance, done)，action 的值为'confirm', 'cancel'或'close'；instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法；done 用于关闭 MessageBox 实例",
          check: '—',
          default: '—'
        },
        {
          prop: 'distinguishCancelAndClose',
          desc:
            '是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 ESC 键）进行区分',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'lockScroll',
          desc: '是否在 MessageBox 出现时将 body 滚动锁定',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'showCancelButton',
          desc: '是否显示取消按钮',
          type: 'boolean',
          check: '—',
          default: 'false（以 confirm 和 prompt 方式调用时为 true）'
        },
        {
          prop: 'showConfirmButton',
          desc: '是否显示确定按钮',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'cancelButtonText',
          desc: '取消按钮的文本内容',
          type: 'string',
          check: '—',
          default: '取消'
        },
        {
          prop: 'confirmButtonText',
          desc: '确定按钮的文本内容',
          type: 'string',
          check: '—',
          default: '确定'
        },
        {
          prop: 'cancelButtonClass',
          desc: '取消按钮的自定义类名',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'confirmButtonClass',
          desc: '确定按钮的自定义类名',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'closeOnClickModal',
          desc: '是否可通过点击遮罩关闭 MessageBox',
          type: 'boolean',
          check: '—',
          default: 'true（以 alert 方式调用时为 false）'
        },
        {
          prop: 'closeOnPressEscape',
          desc: '是否可通过按下 ESC 键关闭 MessageBox',
          type: 'boolean',
          check: '—',
          default: 'true（以 alert 方式调用时为 false）'
        },
        {
          prop: 'closeOnHashChange',
          desc: '是否在 hashchange 时关闭 MessageBox',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'center',
          desc: '是否居中布局',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'roundButton',
          desc: '是否使用圆角按钮',
          type: 'boolean',
          check: '—',
          default: 'false'
        }
      ]
    }
  }
}
</script>

<style>
</style>
