<template>
  <div>
    <div style="margin-bottom: 15px;">
      <el-switch v-model="value" />
    </div>
    <el-pagination
      :hide-on-single-page="value"
      :total="5"
      layout="prev, pager, next"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: false
    }
  }
}
</script>
