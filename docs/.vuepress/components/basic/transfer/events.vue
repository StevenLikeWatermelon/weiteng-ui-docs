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
          name: 'change',
          desc: '右侧列表元素变化时触发',
          type: "当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组"
        },
        {
          name: 'left-check-change',
          desc: '左侧列表元素被用户选中 / 取消选中时触发',
          type: '当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组'
        },
        {
          name: 'right-check-change',
          desc: '右侧列表元素被用户选中 / 取消选中时触发',
          type: '当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组'
        }
      ]
    }
  }
}
</script>

<style>
</style>
