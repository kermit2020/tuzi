<template>
  <div class="home-product">
    <home_repanel :title="v1.name" v-for="(v1, i1) in d_home.goodsList" :key="v1.id">
      <div class="box">
        <RouterLink class="cover" :to="`/Layout/detail/${v1.id}`">
          <img v-img-lazy="i1 === 3 ? 'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/d38a73b8-cd03-48aa-a60b-e7c4e16667ed.png' : v1.picture" />
          <strong class="label">
            <span>{{ v1.name }}馆</span>
            <span>{{ v1.saleInfo }}</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="v2 in v1.goods" :key="v1.id">
            <goods_item :goods="v2" />
          </li>
        </ul>
      </div>
    </home_repanel>
  </div>
</template>

<script setup>
import home_repanel from './home_repanel.vue'
import goods_item from './goods_item.vue'
import { s_home } from '@/stores/home'
import { onMounted, nextTick } from 'vue'

const d_home = s_home()
d_home.getGoodsList()
</script>

<style scoped lang="scss">
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

   
  }
}
</style>
