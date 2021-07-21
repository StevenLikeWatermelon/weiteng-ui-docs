<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="prop"
      label="参数"
      width="120"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
    <el-table-column
      prop="type"
      width="120"
      label="类型"
    />
    <el-table-column
      prop="check"
      label="可选值"
    />
    <el-table-column
      prop="default"
      width="100"
      label="默认值"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'type',
          desc: '类型',
          type: 'string',
          check: 'text，textarea 和其他 原生 input 的 type 值',
          default: 'text'
        }, {
          prop: 'value / v-model',
          desc: '绑定值',
          type: 'string / number',
          check: '-',
          default: '-'
        },
        {
          prop: 'maxlength',
          desc: '原生属性，最大输入长度',
          type: 'number',
          check: '-',
          default: '-'
        }, {
          prop: 'minlength',
          desc: '原生属性，最小输入长度',
          type: 'number',
          check: '-',
          default: '-'
        },
        {
          prop: 'prefix-icon',
          desc: '输入框首部的icon',
          type: 'string',
          check: '-',
          default: '-'
        },
        {
          prop: 'suffix-icon',
          desc: '输入框尾部的icon',
          type: 'string',
          check: '-',
          default: '-'
        },
        {
          prop: 'placeholder',
          desc: '输入框占位文本',
          type: 'string',
          check: '-',
          default: '-'
        },
        {
          prop: 'clearable',
          desc: '是否可清空',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'show-password',
          desc: '是否显示切换密码图标',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'disabled',
          desc: '禁用',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'rows',
          desc: '输入框行数，只对 type="textarea" 有效',
          type: 'number',
          check: '-',
          default: '2'
        },
        {
          prop: 'autosize',
          desc: '自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }',
          type: 'boolean / object',
          check: '-',
          default: 'false'
        },
        {
          prop: 'name',
          desc: '原生属性',
          type: 'string',
          check: '-',
          default: '-'
        }]
    }
  }
}
</script>

<style>

</style>
