<template>
  <div class="full-width">
    <el-popconfirm
      confirm-button-text="好的"
      cancel-button-text="不用了"
      icon="el-icon-info"
      icon-color="red"
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
