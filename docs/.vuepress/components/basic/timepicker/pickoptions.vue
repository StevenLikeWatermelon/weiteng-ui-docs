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
          prop: 'selectableRange',
          desc: "可选时间段，例如'18:30:00 - 20:30:00'或者传入数组['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']",
          type: 'string / array',
          check: '-',
          default: '-'
        },
        {
          prop: 'format',
          desc: '时间格式化(TimePicker)',
          type: 'string',
          check: '小时：HH，分：mm，秒：ss，AM/PM A',
          default: 'HH:mm:ss'
        }
      ]
    }
  }
}
</script>

<style>

</style>
