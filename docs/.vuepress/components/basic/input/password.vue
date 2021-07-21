<template>
  <el-input
    v-model="input"
    placeholder="请输入密码"
    show-password
  />
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
