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
          prop: 'focus',
          desc: '使 input 获取焦点',
          callback: '-'
        }, {
          prop: 'blur',
          desc: '使 input 失去焦点，并隐藏下拉框',
          callback: '-'
        }
      ]
    }
  }
}
</script>

<style>

</style>
