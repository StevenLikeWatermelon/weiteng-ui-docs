<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="方法名" width="160" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="callback" width="450" label="参数" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'filter',
          desc: '对树节点进行筛选操作',
          callback: '接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数'
        },
        {
          prop: 'updateKeyChildren',
          desc: '通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性',
          callback: '(key, data) 接收两个参数，1. 节点 key 2. 节点数据的数组'
        },
        {
          prop: 'getCheckedNodes',
          desc: '若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点所组成的数组',
          callback: '(leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 false 2. 是否包含半选节点，默认值为 false'
        },
        {
          prop: 'setCheckedNodes',
          desc: '设置目前勾选的节点，使用此方法必须设置 node-key 属性',
          callback: '(nodes) 接收勾选节点数据的数组'
        },
        {
          prop: 'getCheckedKeys',
          desc: '若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组',
          callback: '(leafOnly) 接收一个 boolean 类型的参数，若为 true 则仅返回被选中的叶子节点的 keys，默认值为 false'
        },
        {
          prop: 'setCheckedKeys',
          desc: '通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性',
          callback: '(keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 true 则仅设置叶子节点的选中状态，默认值为 false'
        },
        {
          prop: 'setChecked',
          desc: '通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性',
          callback: '(key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中 3. boolean 类型，是否设置子节点 ，默认为 false'
        },
        {
          prop: 'getHalfCheckedNodes',
          desc: '若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点所组成的数组',
          callback: '-'
        },
        {
          prop: 'getHalfCheckedKeys',
          desc: '若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点的 key 所组成的数组',
          callback: '-'
        },
        {
          prop: 'getCurrentKey',
          desc: '获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 null',
          callback: '—'
        },
        {
          prop: 'getCurrentNode',
          desc: '获取当前被选中节点的 data，若没有节点被选中则返回 null',
          callback: '—'
        },
        {
          prop: 'setCurrentKey',
          desc: '通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性',
          callback: '(key) 待被选节点的 key，若为 null 则取消当前高亮的节点'
        },
        {
          prop: 'setCurrentNode',
          desc: '通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性',
          callback: '(node) 待被选节点的 node'
        },
        {
          prop: 'getNode',
          desc: '根据 data 或者 key 拿到 Tree 组件中的 node',
          callback: '(data) 要获得 node 的 key 或者 data'
        },
        {
          prop: 'remove',
          desc: '删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性',
          callback: '(data) 要删除的节点的 data 或者 node'
        },
        {
          prop: 'append',
          desc: '为 Tree 中的一个节点追加一个子节点',
          callback: '(data, parentNode) 接收两个参数，1. 要追加的子节点的 data 2. 子节点的 parent 的 data、key 或者 node'
        },
        {
          prop: 'insertBefore',
          desc: '为 Tree 的一个节点的前面增加一个节点',
          callback: '(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的后一个节点的 data、key 或者 node'
        },
        {
          prop: 'insertAfter',
          desc: '为 Tree 的一个节点的后面增加一个节点',
          callback: '(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的前一个节点的 data、key 或者 node'
        }
      ]
    }
  }
}
</script>

<style>
</style>
