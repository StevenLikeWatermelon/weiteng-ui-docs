<template>
  <div class="full-width carousel-block">
    <div class="block">
      <el-carousel
        height="150px"
        direction="vertical"
        :autoplay="false"
      >
        <el-carousel-item v-for="item in 3" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
