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
          desc: 'Option 组件列表'
        },
        {
          prop: 'prefix',
          desc: 'Select 组件头部内容'
        },
        {
          prop: 'empty',
          desc: '无选项时的列表'
        }
      ]
    }
  }
}
</script>

<style>

</style>
