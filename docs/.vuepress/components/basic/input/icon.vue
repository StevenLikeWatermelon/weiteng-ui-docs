<template>
  <div class="demo">
    <el-input
      v-model="input1"
      placeholder="请选择日期"
      prefix-icon="el-icon-md-bug"
    />
    <el-input
      v-model="input1"
      placeholder="请选择日期"
      suffix-icon="el-icon-search"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: ''
    }
  }
}
</script>

<style scoped>
.demo {
    display: flex;
}
</style>
