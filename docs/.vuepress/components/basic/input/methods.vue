<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="name"
      label="方法名"
      width="120"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
    <el-table-column
      prop="callback"
      width="150"
      label="参数"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: 'focus',
          desc: '使 input 获取焦点',
          callback: '-'
        },
        {
          name: 'blur',
          desc: '使 input 失去焦点',
          callback: '-'
        },
        {
          name: 'select',
          desc: '选中 input 中的文字',
          callback: '-'
        }
      ]
    }
  }
}
</script>
