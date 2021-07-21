<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="prop"
      label="事件名称"
      width="120"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
    <el-table-column
      prop="callback"
      width="120"
      label="回调参"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'change',
          desc: '当选中节点变化时触发	',
          callback: '选中节点的值'
        },
        {
          prop: 'expand-change',
          desc: '当展开节点发生变化时触发',
          callback: '各父级选项值组成的数组'
        },
        {
          prop: 'blur',
          desc: '当失去焦点时触发',
          callback: '(event: Event)'
        },
        {
          prop: 'focus',
          desc: '当获得焦点时触发',
          callback: '(event: Event)'
        },
        {
          prop: 'visible-change',
          desc: '下拉框出现/隐藏时触发',
          callback: '出现则为 true，隐藏则为 false'
        }, {
          prop: 'remove-tag',
          desc: '在多选模式下，移除Tag时触发',
          callback: '移除的Tag对应的节点的值'
        }
      ]
    }
  }
}
</script>

<style>

</style>
