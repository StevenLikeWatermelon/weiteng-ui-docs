<template>
  <el-input
    v-model="input"
    placeholder="请输入内容"
    disabled
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
