<template>
  <div class="block">
    <el-date-picker
      v-model="value"
      type="year"
      placeholder="选择年"
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
