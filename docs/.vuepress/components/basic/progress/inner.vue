<template>
  <div class="full-width">
    <div style="margin-bottom: 15px;">
      <el-progress :text-inside="true" :stroke-width="26" :percentage="70" />
    </div>
    <div style="margin-bottom: 15px;">
      <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success" />
    </div>
    <div style="margin-bottom: 15px;">
      <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning" />
    </div>
    <div style="margin-bottom: 15px;">
      <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception" />
    </div>
  </div>
</template>

