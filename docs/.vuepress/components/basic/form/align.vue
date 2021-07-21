<template>
  <div class="full-width">
    <el-button-group size="small">
      <el-button type="primary" @click="changeAlign('left')">左对齐</el-button>
      <el-button type="primary" @click="changeAlign('right')">右对齐</el-button>
      <el-button type="primary" @click="changeAlign('top')">顶部对齐</el-button>
    </el-button-group>
    <div style="margin: 20px;" />
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
>
      <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign.region" />
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="formLabelAlign.type" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  methods: {
    changeAlign(type) {
      this.labelPosition = type
    }
  }
}
</script>
