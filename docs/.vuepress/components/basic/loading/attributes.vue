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
          prop: 'target',
          desc:
            'Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点',
          type: 'object/string',
          check: '—',
          default: 'document.body'
        },
        {
          prop: 'body',
          desc: '同 v-loading 指令中的 body 修饰符',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'fullscreen',
          desc: '同 v-loading 指令中的 fullscreen 修饰符',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'lock',
          desc: '同 v-loading 指令中的 lock 修饰符',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'text',
          desc: '显示在加载图标下方的加载文案',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'spinner',
          desc: '自定义加载图标类名',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'background',
          desc: '遮罩背景色',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'customClass',
          desc: 'Loading 的自定义类名',
          type: 'string',
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
