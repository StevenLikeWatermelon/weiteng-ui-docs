<template>
  <div class="full-width">
    <el-dropdown>
      <el-button type="primary">
        更多菜单<i class="el-icon-arrow-down el-icon--right" />
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看设备状态</el-dropdown-item>
        <el-dropdown-item>查看设备名称</el-dropdown-item>
        <el-dropdown-item>查看供应商名称</el-dropdown-item>
        <el-dropdown-item>查看设备位置</el-dropdown-item>
        <el-dropdown-item>查看审核状态</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown split-button type="primary" @click="handleClick">
      更多菜单
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看设备状态</el-dropdown-item>
        <el-dropdown-item>查看设备名称</el-dropdown-item>
        <el-dropdown-item>查看供应商名称</el-dropdown-item>
        <el-dropdown-item>查看设备位置</el-dropdown-item>
        <el-dropdown-item>查看审核状态</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert('button click')
    }
  }
}
</script>

<style>
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
