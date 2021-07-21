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
          prop: 'span',
          desc: '栅格占据的列数	',
          type: 'number',
          check: '-',
          default: '24'
        },
        {
          prop: 'offset',
          desc: '栅格左侧的间隔格数',
          type: 'number',
          check: '-',
          default: '0'
        },
        {
          prop: 'push',
          desc: '栅格向右移动格数',
          type: 'number',
          check: '-',
          default: '0'
        },
        {
          prop: 'pull',
          desc: '栅格向左移动格数',
          type: 'number',
          check: '-',
          default: '0'
        },
        {
          prop: 'xs',
          desc: '<768px 响应式栅格数或者栅格属性对象',
          type: 'number/object (例如： {span: 4, offset: 4})',
          check: '—',
          default: '—'
        },
        {
          prop: 'sm',
          desc: '≥768px 响应式栅格数或者栅格属性对象',
          type: 'number/object (例如： {span: 4, offset: 4})',
          check: '—',
          default: '—'
        },
        {
          prop: 'md',
          desc: '≥992px 响应式栅格数或者栅格属性对象',
          type: 'number/object (例如： {span: 4, offset: 4})',
          check: '—',
          default: '—'
        },
        {
          prop: 'lg',
          desc: '≥1200px 响应式栅格数或者栅格属性对象',
          type: 'number/object (例如： {span: 4, offset: 4})',
          check: '—',
          default: '—'
        },
        {
          prop: 'xl',
          desc: '≥1920px 响应式栅格数或者栅格属性对象',
          type: 'number/object (例如： {span: 4, offset: 4})',
          check: '—',
          default: '—'
        },
        {
          prop: 'tag',
          desc: '自定义元素标签',
          type: 'string',
          check: '*',
          default: 'div'
        }
      ]
    }
  }
}
</script>

<style>
</style>
