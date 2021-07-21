<template>
  <el-radio-group v-model="radio">
    <el-radio :label="3">备选项3</el-radio>
    <el-radio :label="6">备选项6</el-radio>
    <el-radio :label="9">备选项9</el-radio>
  </el-radio-group>
</template>

<script>
export default {
  data() {
    return {
      radio: 3
    }
  }
}
</script>
