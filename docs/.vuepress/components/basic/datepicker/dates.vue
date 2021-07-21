<template>
  <div class="block">
    <el-date-picker
      v-model="value"
      type="dates"
      placeholder="选择多个日期"
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
