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
      width="160"
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
          prop: 'expandTrigger',
          desc: '次级菜单的展开方式	',
          type: 'string',
          check: 'click / hover',
          default: "'click'"
        },
        {
          prop: 'multiple',
          desc: '是否多选',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'checkStrictly',
          desc: '是否严格的遵守父子节点不互相关联',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'emitPath',
          desc: '在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值',
          type: 'boolean',
          check: '-',
          default: 'true'
        },
        {
          prop: 'lazy',
          desc: '是否动态加载子节点，需与 lazyLoad 方法结合使用',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'lazyLoad',
          desc: '加载动态数据的方法，仅在 lazy 为 true 时有效',
          type: 'function(node, resolve)，node为当前点击的节点，resolve为数据加载完成的回调(必须调用)',
          check: '-',
          default: '-'
        },
        {
          prop: 'value',
          desc: '指定选项的值为选项对象的某个属性值',
          type: 'string',
          check: '-',
          default: "'value'"
        },
        {
          prop: 'label',
          desc: '指定选项标签为选项对象的某个属性值',
          type: 'string',
          check: '-',
          default: "'label'"
        }, {
          prop: 'children',
          desc: '指定选项的子选项为选项对象的某个属性值',
          type: 'string',
          check: '-',
          default: "'children'"
        },
        {
          prop: 'disabled',
          desc: '指定选项的禁用为选项对象的某个属性值',
          type: 'string',
          check: '-',
          default: "'disabled'"
        },
        {
          prop: 'leaf',
          desc: '指定选项的叶子节点的标志位为选项对象的某个属性值',
          type: 'string',
          check: '-',
          default: "'leaf'"
        }
      ]
    }
  }
}
</script>

<style>

</style>
