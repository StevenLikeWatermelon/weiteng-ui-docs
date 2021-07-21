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
          prop: 'icon',
          desc: '自定义图标'
        }, {
          prop: 'title',
          desc: '自定义标题'
        }, {
          prop: 'description',
          desc: '自定义描述性文字'
        }
      ]
    }
  }
}
</script>

<style>

</style>
