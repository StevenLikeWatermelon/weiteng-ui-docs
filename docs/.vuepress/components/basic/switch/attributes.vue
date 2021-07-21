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
      tableData: [{
        prop: 'value / v-model',
        desc: '绑定值',
        type: 'string / number',
        check: '-',
        default: '-'
      },
      {
        prop: 'disabled',
        desc: '禁用',
        type: 'boolean',
        check: '-',
        default: 'false'
      },
      {
        prop: 'active-color',
        desc: 'switch 打开时的背景色',
        type: 'string',
        check: '-',
        default: '#409EFF'
      },
      {
        prop: 'inactive-color',
        desc: 'switch 关闭时的背景色',
        type: 'string',
        check: '-',
        default: '#C0CCDA'
      }, {
        prop: 'active-text',
        desc: 'switch 打开时的文字描述',
        type: 'string',
        check: '-',
        default: '-'
      },
      {
        prop: 'inactive-text',
        desc: 'switch 关闭时的文字描述',
        type: 'string',
        check: '-',
        default: '-'
      }]
    }
  }
}
</script>

<style>
</style>
