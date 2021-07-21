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
          prop: 'label',
          desc: '选项卡标题',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'disabled',
          desc: '是否禁用',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'name',
          desc: '与选项卡绑定值 value 对应的标识符，表示选项卡别名',
          type: 'string',
          check: '—',
          default: "该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1'"
        },
        // {
        //   prop: 'closable',
        //   desc: '标签是否可关闭',
        //   type: 'boolean',
        //   check: '—',
        //   default: 'false'
        // },
        {
          prop: 'lazy',
          desc: '标签是否延迟渲染',
          type: 'boolean',
          check: '—',
          default: 'false'
        }
      ]
    }
  }
}
</script>

<style>
</style>
