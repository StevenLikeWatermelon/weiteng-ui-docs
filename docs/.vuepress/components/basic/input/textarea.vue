<template>
  <el-input
    v-model="textarea"
    type="textarea"
    :rows="2"
    placeholder="请输入内容"
  />
</template>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
