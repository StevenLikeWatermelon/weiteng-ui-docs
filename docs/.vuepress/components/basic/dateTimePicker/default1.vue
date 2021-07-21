<template>
  <div class="block">
    <el-date-picker
      v-model="value"
      type="datetimerange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['12:00:00', '14:00:00']"
    /></div>
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
