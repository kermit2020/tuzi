<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/Layout' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/Layout/category/${d_sub.subList.parentId}` }">{{ d_sub.subList.parentName }} </el-breadcrumb-item>
        <el-breadcrumb-item>{{ d_sub.subList.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="req_tab.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="tableLoad" :infinite-scroll-disabled='disabled'>
        <!-- 商品列表-->
        <goods_item v-for="good in goodList" :goods="good" :key="good.id" class="goods-item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { s_sub } from '@/stores/sub'
import { useRoute } from 'vue-router'
import goods_item  from '@/views/Home/class/goods_item.vue'
const route = useRoute()
const d_sub = s_sub()
const goodList = ref([])
const req_tab = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
onMounted(async () => {
  await d_sub.getSubList(route.params.id)
  await d_sub.getTabList(req_tab.value)
  goodList.value = d_sub.tabList.items
  
  // req_tab.value = {
  //   page: 1,
  //   pageSize: 10,
  //   sortField: 'publishTime',
  //   sort: 'desc'
  // }
})
const tabChange = async () => {
  await d_sub.getTabList(req_tab.value)
  goodList.value = d_sub.tabList.items
  disabled.value = false
}
//无限下拉加载
const disabled = ref(false)
const tableLoad = async () => {
  req_tab.value.page++
  await d_sub.getTabList(req_tab.value)
  goodList.value.push(...d_sub.tabList.items) 
  if (d_sub.tabList.items.length < 20) {
    disabled.value = true
  }
}
</script>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
