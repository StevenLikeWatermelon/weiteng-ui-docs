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
          name: 'close',
          desc: '	关闭当前的 Message',
          callback: '-'
        }
      ]
    }
  }
}
</script>
