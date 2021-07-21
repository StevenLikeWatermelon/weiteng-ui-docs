<template>
  <div class="full-width">
    <el-calendar v-model="value" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    }
  },
  watch: {
    value(val) {
      console.log(val)
    }
  }
}
</script>
