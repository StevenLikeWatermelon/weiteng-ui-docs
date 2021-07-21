<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="参数" width="120" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="type" width="120" label="类型" />
    <el-table-column prop="check" label="可选值" />
    <el-table-column prop="default" width="140" label="默认值" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'to',
          desc: '路由跳转对象，同 vue-router 的 to	',
          type: '	string/object',
          check: '—',
          default: '-'
        },
        {
          prop: 'replace',
          desc: '在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录',
          type: 'boolean',
          check: '-',
          default: 'false'
        }
      ]
    }
  }
}
</script>

<style>
</style>
