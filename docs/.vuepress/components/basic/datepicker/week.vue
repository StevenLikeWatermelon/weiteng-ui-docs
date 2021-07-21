<template>
  <div class="block">
    <el-date-picker
      v-model="value"
      type="week"
      format="yyyy 第 WW 周"
      placeholder="选择周"
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
