<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="参数" width="160" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="type" width="160" label="类型" />
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
          prop: 'label',
          desc: '指定节点标签为节点对象的某个属性值',
          type: 'string, function(data, node)',
          check: '-',
          default: '-'
        },
        {
          prop: 'children',
          desc: '指定子树为节点对象的某个属性值	',
          type: 'string	',
          check: '-',
          default: '-'
        },
        {
          prop: 'disabled',
          desc: '指定节点选择框是否禁用为节点对象的某个属性值	',
          type: 'boolean, function(data, node)',
          check: '-',
          default: '-'
        }, {
          prop: 'isLeaf',
          desc: '指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效',
          type: 'boolean, function(data, node)',
          check: '-',
          default: '-'
        }
      ]
    }
  }
}
</script>
