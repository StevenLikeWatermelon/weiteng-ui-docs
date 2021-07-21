<template>
  <el-button :plain="true" @click="openCenter">文字居中</el-button>
</template>
<script>
export default {
  methods: {
    openCenter() {
      this.$message({
        message: '居中的文字',
        center: true
      })
    }
  }
}
</script>
