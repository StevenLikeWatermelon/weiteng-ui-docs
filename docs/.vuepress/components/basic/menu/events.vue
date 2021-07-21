<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="事件名称" width="120" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="callback" width="650" label="回调参数" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'select',
          desc: '菜单激活回调',
          callback: 'index: 选中菜单项的 index, indexPath: 选中菜单项的 index path'
        },
        {
          prop: 'open',
          desc: 'sub-menu 展开的回调',
          callback: 'index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path'
        },
        {
          prop: 'close',
          desc: 'sub-menu 收起的回调',
          callback: 'index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path'
        }
      ]
    }
  }
}
</script>

<style>
</style>s
