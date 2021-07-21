<template>
  <div class="full-width">
    <el-button type="primary" style="margin-left: 16px;" @click="drawer = true">
      点我打开
    </el-button>

    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
    >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      direction: 'rtl'
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>
