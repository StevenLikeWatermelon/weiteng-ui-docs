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
          prop: 'resetField',
          desc: '对该表单项进行重置，将其值重置为初始值并移除校验结果	',
          callback: '-'
        }, {
          prop: 'clearValidate',
          desc: '移除表单项的校验结果。',
          callback: '-'
        }
      ]
    }
  }
}
</script>

<style>

</style>
