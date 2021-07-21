<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    text-color="#303133"
    @select="handleSelect"
  >
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.baidu.com" target="_blank">订单管理</a></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '2'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.el-menu-demo {
    width: 240px;
    min-height: 400px;
    display: inline-block;
    text-align: left;
}
</style>
