<template>
  <el-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
    <el-button @click="disabled = !disabled">点击{{ disabled ? '开启' : '关闭' }} tooltip 功能</el-button>
  </el-tooltip>
</template>

<script>
export default {
  data() {
    return {
      disabled: false
    }
  }
}
</script>
