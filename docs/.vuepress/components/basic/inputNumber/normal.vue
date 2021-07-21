<template>
  <el-input-number
    v-model="num"
    :min="1"
    :max="10"
    label="描述文字"
    @change="handleChange"
  />
</template>
<script>
export default {
  data() {
    return {
      num: 2
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>
