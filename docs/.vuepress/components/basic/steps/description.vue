<template>
  <div class="full-width">
    <el-steps :space="400" :active="1" finish-status="success">
      <el-step title="已完成" description="这是一段很长很长很长的描述性文字" />
      <el-step title="进行中" description="这是一段很长很长很长的描述性文字" />
      <el-step title="步骤 3" description="这段就没那么长了" />
    </el-steps>
  </div>
</template>

