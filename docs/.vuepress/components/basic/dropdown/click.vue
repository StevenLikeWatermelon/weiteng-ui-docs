<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      下拉菜单<i class="el-icon-arrow-down el-icon--right" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>查看设备状态</el-dropdown-item>
      <el-dropdown-item>查看设备名称</el-dropdown-item>
      <el-dropdown-item>查看供应商名称</el-dropdown-item>
      <el-dropdown-item disabled>查看设备位置</el-dropdown-item>
      <el-dropdown-item divided>查看审核状态</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
