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
          desc: '自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据'
        },
        {
          prop: 'empty',
          desc: '无匹配选项时的内容'
        }
      ]
    }
  }
}
</script>

<style>

</style>
