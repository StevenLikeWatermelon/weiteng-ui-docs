<template>
  <el-time-picker
    v-model="value"
    is-range
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围"
  />
</template>

<script>
export default {
  data() {
    return {
      value: [new Date(2020, 7, 1, 8, 40), new Date(2020, 7, 1, 9, 40)]
    }
  }
}
</script>
