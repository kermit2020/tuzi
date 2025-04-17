<template>
  <div class="sub-list">
    <h3>全部分类</h3>
    <ul>
      <li v-for="i in d_category.cateList.children" :key="i.id">
        <RouterLink to="/">
          <img :src="i.picture" />
          <p>{{ i.name }}</p>
        </RouterLink>
      </li>
    </ul>
  </div>
  <div class="ref-goods" v-for="item in d_category.cateList.children" :key="item.id">
    <div class="head">
      <h3>- {{ item.name }}-</h3>
    </div>
    <div class="body">
      <goods_item v-for="good in item.goods" :goods="good" :key="good.id" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { s_category } from '@/stores/category'

import goods_item from '@/views/Home/class/goods_item.vue'
import { useRoute } from 'vue-router'

const d_category = s_category()
</script>

<style lang="scss" scoped>
.sub-list {
  margin-top: 20px;
  background-color: #fff;
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  ul {
    display: flex;
    padding: 0 32px;
    flex-wrap: wrap;

    li {
      width: 168px;
      height: 160px;

      a {
        text-align: center;
        display: block;
        font-size: 16px;

        img {
          width: 100px;
          height: 100px;
        }

        p {
          line-height: 40px;
        }

        &:hover {
          color: $xtxColor;
        }
      }
    }
  }
}

.ref-goods {
  background-color: #fff;
  margin-top: 20px;
  position: relative;
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .head {
    .xtx-more {
      position: absolute;
      top: 20px;
      right: 20px;
    }

    .tag {
      text-align: center;
      color: #999;
      font-size: 20px;
      position: relative;
      top: -20px;
    }
  }

  .body {
    display: flex;
    justify-content: space-around;
    padding: 0 40px 30px;
  }
}

.bread-container {
  padding: 25px 0;
}
</style>
