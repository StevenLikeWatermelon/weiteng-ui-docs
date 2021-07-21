<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="prop"
      label="名称"
      width="160"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'left-footer',
          desc: '	左侧列表底部的内容'
        },
        {
          prop: 'right-footer',
          desc: '右侧列表底部的内容'
        }
      ]
    }
  }
}
</script>

<style>

</style>
