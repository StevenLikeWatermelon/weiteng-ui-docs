<template>
  <div class="full-width">
    <el-popconfirm
      title="这是一段内容确定删除吗？"
      @onConfirm="hasConfirm"
      @onCancel="hasCancel"
    >
      <el-button slot="reference">删除</el-button>
    </el-popconfirm>
  </div>
</template>

<script>
export default {
  methods: {
    hasConfirm() {
      console.log('confirm')
    },
    hasCancel() {
      console.log('cancel')
    }
  }
}
</script>
