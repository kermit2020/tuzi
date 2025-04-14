<template>
  <div class="home-product">
    <home_repanel :title="v1.name" v-for="(v1,i1) in d_home.goodsList" :key="v1.id">
      <div class="box">
        <RouterLink class="cover" to="/">
          <img v-img-lazy="i1===3?'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/d38a73b8-cd03-48aa-a60b-e7c4e16667ed.png':v1.picture" />
          <strong class="label">
            <span>{{ v1.name }}馆</span>
            <span>{{ v1.saleInfo }}</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="v2 in v1.goods" :key="v2.id">
            <RouterLink to="/" class="goods-item">
              <img v-img-lazy="v2.picture" alt="" />
              <p class="name ellipsis">{{ v2.name }}</p>
              <p class="desc ellipsis">{{ v2.desc }}</p>
              <p class="price">&yen;{{ v2.price }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </home_repanel>
  </div>
</template>

<script setup>

import home_repanel from './home_repanel.vue'
import { s_home } from '@/stores/home'
import { onMounted, nextTick } from 'vue'

const d_home = s_home()
d_home.getGoodsList()
</script>

<style scoped lang='scss'>
.home-product {
  background: #fff;
  margin-top: 20px;
  .sub {
    margin-bottom: 2px;

    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;

      &:hover {
        background: $xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
  }

  .box {
    display: flex;

    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);

        span {
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }

    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;

        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }

    .goods-item {
      display: block;
      width: 220px;
      padding: 20px 30px;
      text-align: center;
      transition: all .5s;

      &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
      }

      img {
        width: 160px;
        height: 160px;
      }

      p {
        padding-top: 10px;
      }

      .name {
        font-size: 16px;
      }

      .desc {
        color: #999;
        height: 29px;
      }

      .price {
        color: $priceColor;
        font-size: 20px;
      }
    }
  }
}
</style>