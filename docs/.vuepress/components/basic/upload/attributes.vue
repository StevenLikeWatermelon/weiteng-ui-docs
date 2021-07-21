<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="参数" width="120" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="type" width="120" label="类型" />
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
          prop: 'action',
          desc: '必选参数，上传的地址',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'headers',
          desc: '设置上传的请求头部',
          type: 'object',
          check: '—',
          default: '—'
        },
        {
          prop: 'multiple',
          desc: '是否支持多选文件',
          type: 'boolean',
          check: '—',
          default: '—'
        },
        {
          prop: 'data',
          desc: '上传时附带的额外参数',
          type: 'object',
          check: '—',
          default: '—'
        },
        {
          prop: 'name',
          desc: '上传的文件字段名',
          type: 'string',
          check: '—',
          default: 'file'
        },
        {
          prop: 'with-credentials',
          desc: '支持发送 cookie 凭证信息',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'show-file-list',
          desc: '是否显示已上传文件列表',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'drag',
          desc: '是否启用拖拽上传',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'accept',
          desc: '接受上传的文件类型（thumbnail-mode 模式下此参数无效）',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'list-type',
          desc: '文件列表的类型',
          type: 'string',
          check: 'text/picture/picture-card',
          default: 'text'
        },
        {
          prop: 'auto-upload',
          desc: '是否在选取文件后立即进行上传',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'file-list',
          desc:
            "上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]",
          type: 'array',
          check: '—',
          default: '[]'
        },
        {
          prop: 'http-request',
          desc: '覆盖默认的上传行为，可以自定义上传的实现',
          type: 'function',
          check: '—',
          default: '—'
        },
        {
          prop: 'disabled',
          desc: '是否禁用',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'limit',
          desc: '最大允许上传个数',
          type: 'number',
          check: '—',
          default: '—'
        },
        {
          prop: 'on-exceed',
          desc: '文件超出个数限制时的钩子',
          type: 'function(files, fileList)',
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
