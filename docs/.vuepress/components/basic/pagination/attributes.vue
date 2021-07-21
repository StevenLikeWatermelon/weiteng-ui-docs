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
          prop: 'small',
          desc: '是否使用小型分页样式',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'background',
          desc: '是否为分页按钮添加背景色',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'page-size',
          desc: '每页显示条目个数，支持 .sync 修饰符',
          type: 'number',
          check: '—',
          default: '10'
        },
        {
          prop: 'total',
          desc: '总条目数',
          type: 'number',
          check: '—',
          default: '—'
        },
        {
          prop: 'page-count',
          desc:
            '总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性',
          type: 'Number',
          check: '—',
          default: '—'
        },
        {
          prop: 'pager-count',
          desc: '页码按钮的数量，当总页数超过该值时会折叠',
          type: 'number',
          check: '大于等于 5 且小于等于 21 的奇数',
          default: '7'
        },
        {
          prop: 'current-page',
          desc: '当前页数，支持 .sync 修饰符',
          type: 'number',
          check: '—',
          default: '1'
        },
        {
          prop: 'layout',
          desc: '组件布局，子组件名用逗号分隔',
          type: 'String',
          check: 'sizes, prev, pager, next, jumper, ->, total, slot',
          default: "'prev, pager, next, jumper, ->, total'"
        },
        {
          prop: 'page-sizes',
          desc: '每页显示个数选择器的选项设置',
          type: 'number[]',
          check: '—',
          default: '[10, 20, 30, 40, 50, 100]'
        },
        {
          prop: 'popper-class',
          desc: '每页显示个数选择器的下拉框类名',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'prev-text',
          desc: '替代图标显示的上一页文字',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'next-text',
          desc: '替代图标显示的下一页文字',
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
          prop: 'hide-on-single-page',
          desc: '只有一页时是否隐藏',
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
