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
      tableData: [{
        prop: 'value / v-model',
        desc: '绑定值',
        type: 'string / number',
        check: '-',
        default: '-'
      },
      {
        prop: 'min',
        desc: '设置计数器允许的最小值',
        type: 'number',
        check: '-',
        default: '-Infinity'
      }, {
        prop: 'max',
        desc: '设置计数器允许的最大值',
        type: 'number',
        check: '-',
        default: 'Infinity'
      },
      {
        prop: 'step',
        desc: '计数器步长',
        type: 'number',
        check: '-',
        default: '1'
      },
      {
        prop: 'precision',
        desc: '数值精度',
        type: 'number',
        check: '-',
        default: '-'
      },
      {
        prop: 'disabled',
        desc: '是否禁用计数器',
        type: 'boolean',
        check: '-',
        default: 'false'
      }]
    }
  }
}
</script>

<style>

</style>
