<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="事件名称" width="120" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="callback" width="150" label="回调参数" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: 'change',
          desc: '选中值发生变化时触发',
          callback: '目前的选中值'
        },
        {
          name: 'visible-change',
          desc: '下拉框出现/隐藏时触发',
          callback: '出现则为 true，隐藏则为 false'
        },
        {
          name: 'remove-tag',
          desc: '多选模式下移除tag时触发',
          callback: '移除的tag值'
        },
        {
          name: 'clear',
          desc: '可清空的单选模式下用户点击清空按钮时触发',
          callback: '—'
        },
        {
          name: 'blur',
          desc: '当 input 失去焦点时触发',
          callback: '(event: Event)'
        },
        {
          name: 'focus',
          desc: '当 input 获得焦点时触发',
          callback: '(event: Event)'
        }
      ]
    }
  }
}
</script>

<style>
</style>
