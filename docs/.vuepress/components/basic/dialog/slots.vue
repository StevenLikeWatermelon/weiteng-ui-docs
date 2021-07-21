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
          prop: '-',
          desc: 'Dialog 的内容'
        },
        {
          prop: 'title',
          desc: 'Dialog 标题区的内容'
        },
        {
          prop: 'footer',
          desc: 'Dialog 按钮操作区的内容'
        }
      ]
    }
  }
}
</script>

<style>

</style>
