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
          prop: 'visible',
          desc: '是否显示 Dialog，支持 .sync 修饰符',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'title',
          desc: 'Dialog 的标题，也可通过具名 slot （见下表）传入',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'width',
          desc: 'Dialog 的宽度',
          type: 'string',
          check: '—',
          default: '50%'
        },
        {
          prop: 'fullscreen',
          desc: '是否为全屏 Dialog',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'top',
          desc: 'Dialog CSS 中的 margin-top 值',
          type: 'string',
          check: '—',
          default: '15vh'
        },
        {
          prop: 'modal',
          desc: '是否需要遮罩层',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'modal-append-to-body',
          desc:
            '遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'append-to-body',
          desc:
            'Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'lock-scroll',
          desc: '是否在 Dialog 出现时将 body 滚动锁定',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'custom-class',
          desc: 'Dialog 的自定义类名',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'close-on-click-modal',
          desc: '是否可以通过点击 modal 关闭 Dialog',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'close-on-press-escape',
          desc: '是否可以通过按下 ESC 关闭 Dialog',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'show-close',
          desc: '是否显示关闭按钮',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'before-close',
          desc: '关闭前的回调，会暂停 Dialog 的关闭',
          type: 'function(done)，done 用于关闭 Dialog',
          check: '—',
          default: '—'
        },
        {
          prop: 'center',
          desc: '是否对头部和底部采用居中布局',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'destroy-on-close',
          desc: '关闭时销毁 Dialog 中的元素',
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
