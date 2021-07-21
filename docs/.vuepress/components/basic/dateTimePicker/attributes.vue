<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="prop"
      label="参数"
      width="160"
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
          type: 'date(DateTimePicker) / array(DateTimeRangePicker)',
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
          prop: 'time-arrow-control',
          desc: '是否使用箭头进行时间选择',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'type',
          desc: '显示类型',
          type: 'string',
          check: 'year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange',
          default: 'date'
        },
        {
          prop: 'format',
          desc: '显示在输入框中的格式',
          type: 'string',
          check: '见日期格式',
          default: 'yyyy-MM-dd HH:mm:ss'
        },
        {
          prop: 'align',
          desc: '对齐方式',
          type: 'string',
          check: 'left, center, right',
          default: 'left'
        },
        {
          prop: 'popper-class',
          desc: 'DateTimePicker 下拉框的类名',
          type: 'string',
          check: '-',
          default: '-'
        },
        {
          prop: 'picker-options',
          desc: '当前时间日期选择器特有的选项参考下表',
          type: 'object',
          check: '-',
          default: '{}'
        },
        {
          prop: 'range-separator',
          desc: '选择范围时的分隔符',
          type: 'string',
          check: '-',
          default: '-'
        },
        {
          prop: 'default-value',
          desc: '可选，选择器打开时默认显示的时间',
          type: 'Date',
          check: '可被new Date()解析',
          default: '-'
        },
        {
          prop: 'default-time',
          desc: '选中日期后的默认具体时刻	',
          type: '非范围选择时：string / 范围选择时：string[]',
          check: '非范围选择时：形如12:00:00的字符串；范围选择时：数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻。不指定会使用时刻 00:00:00',
          default: '-'
        },
        {
          prop: 'value-format',
          desc: '可选，绑定值的格式。不指定则绑定值为 Date 对象',
          type: 'string',
          check: '见日期格式',
          default: '-'
        },
        {
          prop: 'picker-options',
          desc: '当前时间日期选择器特有的选项参考下表',
          type: 'object',
          check: '-',
          default: '{}'
        }
      ]
    }
  }
}
</script>

<style>

</style>
