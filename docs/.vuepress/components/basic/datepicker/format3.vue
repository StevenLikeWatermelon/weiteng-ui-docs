<template>
  <div class="block">
    <span class="demonstration">使用 value-format</span>
    <div class="demonstration">值：{{ value }}</div>
    <el-date-picker
      v-model="value"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      value-format="timestamp"
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
