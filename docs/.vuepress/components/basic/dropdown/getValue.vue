<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      下拉菜单<i class="el-icon-arrow-down el-icon--right" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="a">查看设备状态</el-dropdown-item>
      <el-dropdown-item command="b">查看设备名称</el-dropdown-item>
      <el-dropdown-item command="c">查看供应商名称</el-dropdown-item>
      <el-dropdown-item command="d" disabled>查看设备位置</el-dropdown-item>
      <el-dropdown-item command="e" divided>查看审核状态</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command)
    }
  }
}
</script>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
