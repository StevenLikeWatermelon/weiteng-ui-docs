<template>
  <div class="full-width">
    <el-button :plain="true" @click="open1">消息</el-button>
    <el-button :plain="true" @click="open2">成功</el-button>
    <el-button :plain="true" @click="open3">警告</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    open1() {
      this.$message({
        showClose: true,
        message: '这是一条消息提示'
      })
    },

    open2() {
      this.$message({
        showClose: true,
        message: '恭喜你，这是一条不会自动关闭的成功消息',
        duration: 0,
        type: 'success'
      })
    },

    open3() {
      this.$message({
        showClose: true,
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      })
    },

    open4() {
      this.$message({
        showClose: true,
        message: '错了哦，这是一条错误消息',
        type: 'error'
      })
    }
  }
}
</script>
