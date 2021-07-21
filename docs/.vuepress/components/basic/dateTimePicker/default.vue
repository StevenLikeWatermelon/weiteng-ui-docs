<template>
  <div class="block">
    <el-date-picker
      v-model="value"
      type="datetime"
      placeholder="选择日期时间"
      default-time="12:00:00"
    />
  </div>
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
