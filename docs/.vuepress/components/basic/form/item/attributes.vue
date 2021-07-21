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
          prop: 'prop',
          desc: '表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的',
          type: 'string',
          check: '传入 Form 组件的 model 中的字段',
          default: '-'
        },
        {
          prop: 'label',
          desc: '标签文本',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'label-width',
          desc: "表单域标签的的宽度，例如 '50px'。支持 auto。",
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'required',
          desc: '是否必填，如不设置，则会根据校验规则自动生成',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'rules',
          desc: '表单验证规则',
          type: 'object',
          check: '—',
          default: '—'
        },
        {
          prop: 'error',
          desc: '表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息',
          type: 'string',
          check: '—',
          default: '—'
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
          desc: '以行内形式展示校验信息',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'size',
          desc: '用于控制该表单域下组件的尺寸',
          type: 'string',
          check: 'medium / small / mini',
          default: '-'
        }
      ]
    }
  }
}
</script>

<style>
</style>
