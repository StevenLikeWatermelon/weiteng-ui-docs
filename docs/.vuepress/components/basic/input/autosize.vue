<template>
  <div>
    <el-input
      v-model="textarea1"
      type="textarea"
      autosize
      placeholder="请输入内容对对对"
    />
    <div style="margin: 20px 0;" />
    <el-input
      v-model="textarea2"
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容1"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea1: '',
      textarea2: ''
    }
  }
}
</script>
