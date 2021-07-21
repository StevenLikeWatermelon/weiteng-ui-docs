<template>
  <div class="block">
    <el-date-picker
      v-model="value"
      type="date"
      placeholder="选择日期"
      disabled
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    }
  }
}
</script>
