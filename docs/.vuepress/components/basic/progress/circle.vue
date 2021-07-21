<template>
  <div class="full-width">
    <el-progress type="circle" :percentage="0" />
    <el-progress
      type="circle"
      :width="150"
      :percentage="25"
    />
    <el-progress type="circle" :percentage="100" status="success" />
    <el-progress type="circle" :percentage="70" status="warning" />
    <el-progress type="circle" :percentage="50" status="exception" />
  </div>
</template>
