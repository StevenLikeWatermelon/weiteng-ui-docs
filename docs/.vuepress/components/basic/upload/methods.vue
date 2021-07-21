<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="prop"
      label="方法名"
      width="160"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
    <el-table-column
      prop="callback"
      width="120"
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
          prop: 'clearFiles',
          desc: '清空已上传的文件列表（该方法不支持在 before-upload 中调用）	',
          callback: '-'
        }, {
          prop: 'abort',
          desc: '取消上传请求',
          callback: '（ file: fileList 中的 file 对象 ）'
        }, {
          prop: 'submit',
          desc: '手动上传文件列表',
          callback: '-'
        }
      ]
    }
  }
}
</script>

<style>

</style>
