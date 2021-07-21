<template>
  <div class="full-width carousel-block">
    <div class="full-width">
      <el-carousel
        :interval="4000"
        type="card"
        height="150px"
      >
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
