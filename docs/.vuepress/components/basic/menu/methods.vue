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
          name: 'open',
          desc: '	展开指定的 sub-menu',
          callback: 'index: 需要打开的 sub-menu 的 index'
        },
        {
          name: 'close',
          desc: '	收起指定的 sub-menu',
          callback: 'index: 需要收起的 sub-menu 的 index'
        }
      ]
    }
  }
}
</script>
