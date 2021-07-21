<template>
  <el-input-number
    v-model="num"
    :precision="2"
    :step="0.1"
    :max="10"
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
