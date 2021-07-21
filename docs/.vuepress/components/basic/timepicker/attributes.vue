<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="prop"
      label="参数"
      width="140"
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
          prop: 'value / v-model',
          desc: '绑定值',
          type: 'date(DatePicker) / array(DateRangePicker)',
          check: '-',
          default: '-'
        },
        {
          prop: 'disabled',
          desc: '是否禁用',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'clearable',
          desc: '是否显示清除按钮',
          type: 'boolean',
          check: '-',
          default: 'true'
        },
        {
          prop: 'placeholder',
          desc: '非范围选择时的占位内容',
          type: 'string',
          check: '-',
          default: '-'
        },
        {
          prop: 'start-placeholder',
          desc: '范围选择时开始日期的占位内容',
          type: 'string',
          check: '-',
          default: '-'
        },
        {
          prop: 'end-placeholder',
          desc: '范围选择时结束日期的占位内容',
          type: 'string',
          check: '-',
          default: '-'
        },
        {
          prop: 'format',
          desc: '显示在输入框中的格式',
          type: 'string',
          check: '见日期格式',
          default: 'yyyy-MM-dd'
        },
        {
          prop: 'is-range',
          desc: '是否为时间范围选择，仅对<el-time-picker>有效',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'arrow-control',
          desc: '是否使用箭头进行时间选择，仅对<el-time-picker>有效',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'value-format',
          desc: '可选，绑定值的格式。不指定则绑定值为 Date 对象',
          type: 'string',
          check: '见日期格式',
          default: '-'
        }
      ]
    }
  }
}
</script>

<style>

</style>
