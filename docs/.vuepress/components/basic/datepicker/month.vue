<template>
  <div class="block">
    <el-date-picker
      v-model="value"
      type="month"
      placeholder="选择月"
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
