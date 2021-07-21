<template>
  <div class="full-width carousel-block">
    <div class="block">
      <el-carousel indicator-position="outside" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
