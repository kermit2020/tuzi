<template>
  <div class="goods-hot">
    <h3>{{title}}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="v in goods" :key="v.id">
      <img :src="v.picture" alt="" />
      <p class="name ellipsis">{{v.name}}</p>
      <p class="desc ellipsis">{{v.desc}}</p>
      <p class="price">&yen;{{v.price}}</p>
    </RouterLink>
  </div>
</template>

<script setup>
import{defineProps} from 'vue'
defineProps({
  title: {
    type: String,
    default:""
  },
  goods: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
</style>