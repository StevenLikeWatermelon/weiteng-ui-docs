<template>
  <div>
    <el-upload
      class="upload-demo"
      drag
      :action="uploadUrl"
      multiple
    >
      <i class="el-icon-upload" />
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
  </div>
</template>

<script>
const domain = '/'
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      domain,
      uploadUrl: `${domain}upload/single`
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      console.log(file)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>
