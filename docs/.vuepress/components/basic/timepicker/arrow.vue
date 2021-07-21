<template>
  <el-time-picker
    v-model="value"
    arrow-control
    placeholder="任意时间点"
  />
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
