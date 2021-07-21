<template>
  <div class="block">
    <el-date-picker
      v-model="value"
      type="daterange"
      range-separator="至"
      start-placeholder="开始月份"
      end-placeholder="结束月份"
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
