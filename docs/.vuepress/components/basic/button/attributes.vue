<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="prop"
      label="参数"
      width="120"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
    <el-table-column
      prop="type"
      width="120"
      label="类型"
    />
    <el-table-column
      prop="check"
      label="可选值"
    />
    <el-table-column
      prop="default"
      width="100"
      label="默认值"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'type',
          desc: '类型',
          type: 'string',
          check: 'primary / success / warning / danger / info / text',
          default: '-'
        },
        {
          prop: 'plain',
          desc: '是否朴素按钮',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'loading',
          desc: '是否加载中状态',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'disabled',
          desc: '是否禁用状态',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'size',
          desc: '按钮大小',
          type: 'string',
          check: 'large/small/mini',
          default: '-'
        },
        {
          prop: 'round',
          desc: '是否为圆角',
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
