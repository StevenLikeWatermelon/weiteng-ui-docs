<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="参数" width="120" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="type" width="120" label="类型" />
    <el-table-column prop="check" label="可选值" />
    <el-table-column prop="default" width="100" label="默认值" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'direction',
          desc: '设置分割线方向',
          type: 'string',
          check: 'horizontal / vertical',
          default: 'horizontal'
        },
        {
          prop: 'content-position',
          desc: '设置分割线文案的位置',
          type: 'string',
          check: 'left / right / center',
          default: 'center'
        }
      ]
    }
  }
}
</script>

<style>
</style>
