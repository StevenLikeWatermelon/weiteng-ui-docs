<template>
  <div>
    <div style="padding-bottom: 20px">
      <el-button>标准按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
    <div style="padding-bottom: 20px">
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </div>
    <div style="padding-bottom: 20px">
      <el-button :round="true">方角按钮</el-button>
      <el-button type="primary" :round="true">主要按钮</el-button>
      <el-button type="success" :round="true">成功按钮</el-button>
      <el-button type="info" :round="true">信息按钮</el-button>
      <el-button type="warning" :round="true">警告按钮</el-button>
      <el-button type="danger" :round="true">危险按钮</el-button>
    </div>
  </div>
</template>
