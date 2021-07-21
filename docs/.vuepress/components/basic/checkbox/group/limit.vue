<template>
  <el-checkbox-group
    v-model="checkedCities"
    :min="1"
    :max="2"
  >
    <el-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</el-checkbox>
  </el-checkbox-group>
</template>
<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  data() {
    return {
      checkedCities: ['上海', '北京'],
      cities: cityOptions
    }
  }
}
</script>
