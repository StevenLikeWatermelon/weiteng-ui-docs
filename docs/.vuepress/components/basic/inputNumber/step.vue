<template>
  <el-input-number
    v-model="num"
    :step="2"
  />
</template>
<script>
export default {
  data() {
    return {
      num: 5
    }
  }
}
</script>
