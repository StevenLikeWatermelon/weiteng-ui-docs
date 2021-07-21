<template>
  <el-select
    v-model="value"
    disabled
    placeholder="请选择"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: '1',
        label: '未申报'
      }, {
        value: '2',
        label: '未审核'
      }, {
        value: '3',
        label: '审核通过'
      }, {
        value: '4',
        label: '审核驳回'
      }, {
        value: '5',
        label: '已核实'
      }],
      value: ''
    }
  }
}
</script>
