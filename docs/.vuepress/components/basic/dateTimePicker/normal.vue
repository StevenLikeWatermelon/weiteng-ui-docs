<template>
  <div class="block">
    <el-date-picker
      v-model="value"
      type="datetime"
      placeholder="选择日期时间"
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
