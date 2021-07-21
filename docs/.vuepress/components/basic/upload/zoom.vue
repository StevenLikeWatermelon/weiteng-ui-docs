<template>
  <div>
    <el-upload
      :action="uploadUrl"
      list-type="picture"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
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
    handlePictureCardPreview(file) {
      console.log(file)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>
