<template>
  <div class="category_banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="(v,i) in d_home.bannerList" :key="i">
        <img :src="v.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {s_home} from '@/stores/home'
const d_home = s_home()
d_home.getBannerList({distributionSite:'2'})
</script>



<style scoped lang='scss'>
.category_banner {
  width: 1240px;
  height: 500px;
  // position: absolute;
  // left: 0;
  // top: 0;
  margin:0 auto;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>