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
          prop: 'start',
          desc: '开始时间',
          type: 'string',
          check: '-',
          default: '09:00'
        },
        {
          prop: 'end',
          desc: '结束时间',
          type: 'string',
          check: '-',
          default: '18:00'
        },
        {
          prop: 'step',
          desc: '间隔时间',
          type: 'string',
          check: '-',
          default: '00:30'
        },
        {
          prop: 'minTime',
          desc: '最小时间，小于该时间的时间段将被禁用',
          type: 'string',
          check: '-',
          default: '00:00'
        },
        {
          prop: 'maxTime',
          desc: '最大时间，大于该时间的时间段将被禁用',
          type: 'string',
          check: '-',
          default: '-'
        }
      ]
    }
  }
}
</script>

<style>

</style>
