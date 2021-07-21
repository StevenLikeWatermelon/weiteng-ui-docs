<template>
  <div class="block">
    <el-date-picker
      v-model="value"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [new Date(2020, 10, 10, 10, 10), new Date(2020, 10, 11, 10, 10)]
    }
  }
}
</script>
