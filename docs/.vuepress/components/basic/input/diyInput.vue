
<template>
  <el-input
    v-model="inputvalue"
    class="input-demo"
    :placeholder="placeholder"
  >
    <el-select slot="prepend" v-model="select" placeholder="请选择">
      <el-option label="餐厅名" value="1" />
      <el-option label="订单号" value="2" />
      <el-option label="用户电话" value="3" />
    </el-select>
    <el-button slot="append" icon="el-icon-search" />
  </el-input>
</template>

<script>
export default {
  data() {
    return {
      inputvalue: 'DDD',
      select: '',
      placeholder: '请输入内容'
    }
  }
}
</script>

<style>
  .input-demo .el-select .el-input {
    width: 100px;
  }
  .input-demo .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
