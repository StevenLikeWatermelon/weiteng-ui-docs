<template>
  <div class="full-width">
    <el-button type="text" @click="table = true">打开嵌套表格的 Drawer</el-button>
    <el-drawer
      title="我嵌套了表格!"
      :visible.sync="table"
      direction="rtl"
      size="50%"
    >
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150" />
        <el-table-column property="name" label="姓名" width="200" />
        <el-table-column property="address" label="地址" />
      </el-table>
    </el-drawer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      table: false,
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
}
</script>
