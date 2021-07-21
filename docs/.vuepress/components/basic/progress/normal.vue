<template>
  <div class="full-width">
    <el-progress :percentage="50" />
    <el-progress :percentage="100" :format="format" />
    <el-progress :percentage="100" status="success" />
    <el-progress :percentage="100" status="warning" />
    <el-progress :percentage="50" status="exception" />
  </div>
</template>

<script>
export default {
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    }
  }
}
</script>
