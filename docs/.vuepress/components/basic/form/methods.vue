<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="prop"
      label="方法名"
      width="160"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
    <el-table-column
      prop="callback"
      width="120"
      label="参数"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'validate',
          desc: '对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise	',
          callback: 'Function(callback: Function(boolean, object))'
        }, {
          prop: 'validateField',
          desc: '对部分表单字段进行校验的方法	',
          callback: 'Function(props: array | string, callback: Function(errorMessage: string))'
        }, {
          prop: 'resetFields',
          desc: '对整个表单进行重置，将所有字段值重置为初始值并移除校验结果	',
          callback: '-'
        }, {
          prop: 'clearValidate',
          desc: '移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果	',
          callback: 'Function(props: array | string)'
        }
      ]
    }
  }
}
</script>

<style>

</style>
