<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="事件名称" width="120" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="callback" width="650" label="回调参数" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'node-click',
          desc: '节点被点击时的回调',
          callback: '共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。'
        },
        {
          prop: 'node-contextmenu',
          desc: '当某一节点被鼠标右键点击时会触发该事件',
          callback: '共四个参数，依次为：event、传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。'
        },
        {
          prop: 'check-change',
          desc: '节点选中状态发生变化时的回调',
          callback: '共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点'
        },
        {
          prop: 'check',
          desc: '当复选框被点击的时候触发',
          callback: '共两个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性'
        },
        {
          prop: 'current-change',
          desc: '当前选中节点变化时触发的事件',
          callback: '共两个参数，依次为：当前节点的数据，当前节点的 Node'
        },
        {
          prop: 'node-expand',
          desc: '节点被展开时触发的事件',
          callback: '共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身'
        },
        {
          prop: 'node-collapse',
          desc: '节点被关闭时触发的事件',
          callback: '共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身'
        }
      ]
    }
  }
}
</script>

<style>
</style>s
