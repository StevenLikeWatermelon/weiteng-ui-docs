<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="参数" width="140" />
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
          prop: 'space',
          desc: '每个 step 的间距，不填写将自适应间距。支持百分比。',
          type: 'number / string',
          check: '—',
          default: '—'
        },
        {
          prop: 'direction',
          desc: '显示方向',
          type: 'string',
          check: 'vertical/horizontal',
          default: 'horizontal'
        },
        {
          prop: 'active',
          desc: '设置当前激活步骤',
          type: 'number',
          check: '—',
          default: '0'
        },
        {
          prop: 'process-status',
          desc: '设置当前步骤的状态',
          type: 'string',
          check: 'wait / process / finish / error / success',
          default: 'process'
        },
        {
          prop: 'finish-status',
          desc: '设置结束步骤的状态',
          type: 'string',
          check: 'wait / process / finish / error / success',
          default: 'finish'
        },
        {
          prop: 'align-center',
          desc: '进行居中对齐',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'simple',
          desc: '是否应用简洁风格',
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
