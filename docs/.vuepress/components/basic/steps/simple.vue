
<template>
  <div class="full-width">
    <el-steps :active="1" simple>
      <el-step title="步骤 1" icon="el-icon-edit" />
      <el-step title="步骤 2" icon="el-icon-upload" />
      <el-step title="步骤 3" icon="el-icon-picture" />
    </el-steps>

    <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
      <el-step title="步骤 1" />
      <el-step title="步骤 2" />
      <el-step title="步骤 3" />
    </el-steps>
  </div>
</template>
