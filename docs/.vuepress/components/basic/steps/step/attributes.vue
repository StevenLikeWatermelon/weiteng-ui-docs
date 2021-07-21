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
          prop: 'title',
          desc: '标题',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'description',
          desc: '描述性文字',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'icon',
          desc: '图标',
          type: 'string',
          check: '传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入',
          default: '—'
        },
        {
          prop: 'status',
          desc: '设置当前步骤的状态，不设置则根据 steps 确定状态',
          type: 'string',
          check: 'wait / process / finish / error / success',
          default: '—'
        }
      ]
    }
  }
}
</script>

<style>
</style>
