<template>
  <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
</template>

<script>
export default {
  methods: {
    openHTML() {
      this.$message({
        dangerouslyUseHTMLString: true,
        message: '<strong>这是 <i>HTML</i> 片段</strong>'
      })
    }
  }
}
</script>
