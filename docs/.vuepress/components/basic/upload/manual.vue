<template>
  <div>
    <el-upload
      ref="upload"
      class="upload-demo"
      :action="uploadUrl"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    </el-upload>
  </div>
</template>

<script>
const domain = '/'
export default {
  data() {
    return {
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
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
    submitUpload() {
      this.$refs.upload.submit()
    },
    handlePreview(file) {
      console.log(file)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>
