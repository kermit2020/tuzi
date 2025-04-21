

<template>
  <home_repanel title="新鲜好物" subtitle="新鲜出炉 品质靠谱">
    <ul class="goods-list">
    <li v-for="(v,i) in d_home.newList" :key="v.id">
      <RouterLink :to="`/Layout/detail/${v.id}`">
        <img v-img-lazy="v.picture" alt="" />
        <p class="name">{{ v.name }}</p>
        <p class="price">&yen;{{ v.price }}</p>
      </RouterLink>
    </li>
  </ul>
    </home_repanel>
  <!-- 下面是插槽主体内容模版

  -->
</template>

<script setup>
import home_repanel from './home_repanel.vue'
import { s_home } from '@/stores/home'
import { onMounted, nextTick } from 'vue'

const d_home = s_home()
d_home.getNewList()
</script>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
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
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>