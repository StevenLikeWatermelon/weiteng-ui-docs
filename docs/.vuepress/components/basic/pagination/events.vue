<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="事件名称" width="120" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="callback" width="150" label="回调参数" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'size-change',
          desc: 'pageSize 改变时会触发',
          type: '每页条数'
        },
        {
          prop: 'current-change',
          desc: 'currentPage 改变时会触发',
          type: '当前页'
        },
        {
          prop: 'prev-click',
          desc: '用户点击上一页按钮改变当前页后触发',
          type: '当前页'
        },
        {
          prop: 'next-click',
          desc: '用户点击下一页按钮改变当前页后触发',
          type: '当前页'
        }
      ]
    }
  }
}
</script>

<style>
</style>
