<template>
  <div class="block">
    <el-date-picker
      v-model="value"
      type="daterange"
      range-separator="至"
      start-placeholder="开始月份"
      end-placeholder="结束月份"
      :picker-options="pickerOptions"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
      pickerOptions: {
        disabledDate(time) {
          const timeGap = 1 * 30 * 24 * 60 * 60 * 1000
          const nowStamp = Date.now()
          return !(time.getTime() > nowStamp && time.getTime() <= (nowStamp + timeGap))
        }
      }
    }
  }
}
</script>
