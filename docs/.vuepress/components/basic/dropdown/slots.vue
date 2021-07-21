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
          desc: '	触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件'
        },
        {
          prop: 'dropdown',
          desc: '	下拉列表，通常是 <el-dropdown-menu> 组件'
        }
      ]
    }
  }
}
</script>

<style>

</style>
