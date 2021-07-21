<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="name"
      label="事件名称"
      width="120"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
    <el-table-column
      prop="callback"
      width="150"
      label="回调参数"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: 'on-preview',
          desc: '点击文件列表中已上传的文件时的钩子',
          callback: 'function(file)',
          check: '—',
          default: '—'
        },
        {
          name: 'on-remove',
          desc: '文件列表移除文件时的钩子',
          callback: 'function(file, fileList)',
          check: '—',
          default: '—'
        },
        {
          name: 'on-success',
          desc: '文件上传成功时的钩子',
          callback: 'function(response, file, fileList)',
          check: '—',
          default: '—'
        },
        {
          name: 'on-error',
          desc: '文件上传失败时的钩子',
          callback: 'function(err, file, fileList)',
          check: '—',
          default: '—'
        },
        {
          name: 'on-progress',
          desc: '文件上传时的钩子',
          callback: 'function(event, file, fileList)',
          check: '—',
          default: '—'
        },
        {
          name: 'on-change',
          desc:
            '文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用',
          callback: 'function(file, fileList)',
          check: '—',
          default: '—'
        },
        {
          name: 'before-upload',
          desc:
            '上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。',
          callback: 'function(file)',
          check: '—',
          default: '—'
        },
        {
          name: 'before-remove',
          desc:
            '删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。',
          callback: 'function(file, fileList)',
          check: '—',
          default: '—'
        }
      ]
    }
  }
}
</script>

<style>

</style>
