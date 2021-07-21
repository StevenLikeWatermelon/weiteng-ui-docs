<template>
  <div class="box">
    <div class="top">
      <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
        <el-button size="large">上左</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
        <el-button size="large">上边</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
        <el-button size="large">上右</el-button>
      </el-tooltip>
    </div>
    <div class="left">
      <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
        <el-button size="large">左上</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
        <el-button size="large">左边</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
        <el-button size="large">左下</el-button>
      </el-tooltip>
    </div>

    <div class="right">
      <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
        <el-button size="large">右上</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
        <el-button size="large">右边</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
        <el-button size="large">右下</el-button>
      </el-tooltip>
    </div>
    <div class="bottom">
      <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
        <el-button size="large">下左</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
        <el-button size="large">下边</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
        <el-button size="large">下右</el-button>
      </el-tooltip>
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 400px;
}
.top {
  text-align: center;
}

.left {
  float: left;
  width: 60px;
}

.right {
  float: right;
  width: 60px;
}

.bottom {
  clear: both;
  text-align: center;
}

.item {
  margin: 4px;
}

.left .el-tooltip__popper,
.right .el-tooltip__popper {
  padding: 8px 10px;
}
</style>
