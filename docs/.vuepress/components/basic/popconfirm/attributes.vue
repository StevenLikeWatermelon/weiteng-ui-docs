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
          prop: 'title',
          desc: '标题',
          type: 'String',
          check: '—',
          default: '—'
        },
        {
          prop: 'confirmButtonText',
          desc: '确认按钮文字',
          type: 'String',
          check: '—',
          default: '—'
        },
        {
          prop: 'cancelButtonText',
          desc: '取消按钮文字',
          type: 'String',
          check: '—',
          default: '—'
        },
        {
          prop: 'confirmButtonType',
          desc: '确认按钮类型',
          type: 'String',
          check: '—',
          default: 'Primary'
        },
        {
          prop: 'cancelButtonType',
          desc: '取消按钮类型',
          type: 'String',
          check: '—',
          default: 'Text'
        },
        {
          prop: 'icon',
          desc: 'Icon',
          type: 'String',
          check: '—',
          default: 'el-icon-question'
        },
        {
          prop: 'iconColor',
          desc: 'Icon 颜色',
          type: 'String',
          check: '—',
          default: '#f90'
        },
        {
          prop: 'hideIcon',
          desc: '是否隐藏 Icon',
          type: 'Boolean',
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
