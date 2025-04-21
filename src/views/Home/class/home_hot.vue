<script setup>
import home_repanel from './home_repanel.vue'
import { s_home } from '@/stores/home'
import { onMounted, nextTick } from 'vue'

const d_home = s_home()
d_home.getHotList()
</script>
<template>
  <home_repanel title="人气推荐" subtitle="人气爆款 不容错过">
      <ul class="goods-list">
        <li v-for="(v,i) in d_home.hotList" :key="v.id">
          <RouterLink :to="`/Layout/detail/${v.id}`">
            <img v-img-lazy="v.picture" alt="">
            <p class="name">{{ v.title }}</p>
            <p class="desc">{{ v.alt }}</p>
          </RouterLink>
        </li>
        
      </ul>
  </home_repanel>
</template>

<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>