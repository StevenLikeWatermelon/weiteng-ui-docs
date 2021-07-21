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
          prop: 'trigger',
          desc: '触发文件选择框的内容'
        },
        {
          prop: 'tip',
          desc: '提示说明文字'
        },
        {
          prop: 'file',
          desc: '自定义缩略图'
        }
      ]
    }
  }
}
</script>

<style>

</style>
