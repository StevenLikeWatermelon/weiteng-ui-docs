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
          prop: 'model',
          desc: '表单数据对象',
          type: 'object',
          check: '—',
          default: '—'
        },
        {
          prop: 'rules',
          desc: '表单验证规则',
          type: 'object',
          check: '—',
          default: '—'
        },
        {
          prop: 'inline',
          desc: '行内表单模式',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'label-position',
          desc: '表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width',
          type: 'string',
          check: 'right/left/top',
          default: 'right'
        },
        {
          prop: 'label-width',
          desc:
            "表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。",
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'label-suffix',
          desc: '表单域标签的后缀',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'hide-required-asterisk',
          desc: '是否显示必填字段的标签旁边的红色星号',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'show-message',
          desc: '是否显示校验错误信息',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'inline-message',
          desc: '是否以行内形式展示校验信息',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'status-icon',
          desc: '是否在输入框中显示校验结果反馈图标',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'validate-on-rule-change',
          desc: '是否在 rules 属性改变后立即触发一次验证',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'size',
          desc: '用于控制该表单内组件的尺寸',
          type: 'string',
          check: 'medium / small / mini',
          default: '-'
        },
        {
          prop: 'disabled',
          desc: '是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效',
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
