<template>
  <div class="full-width carousel-block">
    <div class="block">
      <div class="demonstration">默认 Hover 指示器触发</div>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="block">
      <div class="demonstration">Click 指示器触发</div>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style>
  .el-carousel__item h3 {
    color: #ffffff;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .carousel-block {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
  .carousel-block .block {
    width: 40%;
  }
  .carousel-block .demonstration {
    padding-bottom: 10px;
  }
</style>
