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
          prop: 'value / v-model',
          desc: '绑定值',
          type: 'string / number / boolean',
          check: '-',
          default: '-'
        },
        {
          prop: 'label',
          desc: '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）',
          type: 'string / number / boolean',
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
          prop: 'indeterminate',
          desc: '设置 indeterminate 状态，只负责样式控制',
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
