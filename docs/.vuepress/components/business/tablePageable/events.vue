<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="name"
      label="事件名称"
      width="120"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
    <el-table-column
      prop="callback"
      width="150"
      label="回调参数"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: 'size-change',
          desc: 'pageSize 改变时会触发',
          callback: '每页条数'
        }, {
          name: 'current-page-change',
          desc: 'currentPage 改变时会触发',
          callback: '当前页'
        }
      ]
    }
  }
}
</script>

<style>

</style>
