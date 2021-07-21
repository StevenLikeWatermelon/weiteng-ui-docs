<template>
  <div class="full-width">
    <el-button
      v-loading.fullscreen.lock="fullscreenLoading"
      type="primary"
      @click="openFullScreen1"
    >
      指令方式
    </el-button>
    <el-button
      type="primary"
      @click="openFullScreen2"
    >
      服务方式
    </el-button></div>
</template>

<script>
export default {
  data() {
    return {
      fullscreenLoading: false
    }
  },
  methods: {
    openFullScreen1() {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 2000)
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        loading.close()
      }, 2000)
    }
  }
}
</script>
