<template>
  <div class="full-width">
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
      <el-radio label="top">top</el-radio>
      <el-radio label="right">right</el-radio>
      <el-radio label="bottom">bottom</el-radio>
      <el-radio label="left">left</el-radio>
    </el-radio-group>

    <el-tabs
      :tab-position="tabPosition"
      style="height: 200px;"
    >
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: 'left'
    }
  }
}
</script>
