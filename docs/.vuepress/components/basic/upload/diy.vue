<template>
  <div>
    <el-upload
      :action="uploadUrl"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :file-list="fileList"
    >
      <i class="el-icon-plus" />
      <div slot="file" slot-scope="{file}">
        <img
          class="el-upload-list__item-thumbnail"
          :src="file.url"
          alt=""
        >
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <i class="el-icon-zoom-in" />
          </span>
          <span
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <i class="el-icon-download" />
          </span>
          <span
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <i class="el-icon-delete" />
          </span>
        </span>
      </div>
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
      fileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      domain,
      uploadUrl: `${domain}upload/single`
    }
  },
  methods: {
    handleSuccess(res, file) {
      console.log(res, file)
      this.fileList.push(file)
    },
    handleRemove(file, fileList) {
      console.log(file)
      console.log(this.fileList)
      let index
      for (index = 0; index < this.fileList.length; index++) {
        const element = this.fileList[index]
        if (file.uid === element.uid) {
          break
        }
      }
      console.log(index)
      this.fileList.splice(index, 1)
      console.log(this.fileList)
    },
    handleDownload(file) {
      const url = file.response.path
      window.open(url)
    },
    handlePictureCardPreview(file) {
      console.log(file)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>
