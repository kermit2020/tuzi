<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/Layout' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ d_cateList.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <!-- 轮播图 -->
  
  <category_banner></category_banner>
  <!-- 分类渲染 -->
  <category_sub></category_sub>
</div>
</template>

<script setup>
import category_banner from './class/category_banner.vue'
import category_sub from './class/category_sub.vue'
import { s_category } from '@/stores/category'
import { onMounted, onUpdated, nextTick, ref, watchEffect, watch } from 'vue'
import { useRoute } from 'vue-router'
let d_cateList = ref({})
const route = useRoute()
console.log(route.params.id)
const d_category = s_category()
// onMounted(() => {
//   d_category.getCateList(route.params.id)
//   d_cateList.value = d_category.cateList
// })

// onUpdated(() => {
watch(
  route,
  async(newN, oldN) => {
   await d_category.getCateList(newN.params.id)
   console.log(newN)
   d_cateList.value = d_category.cateList
  },
  { immediate: true, deep: true }
)

// })
// watchEffect(() => {
//   d_category.getCateList(route.params.id)
//   console.log(d_category.cateList)
//   d_cateList.value = d_category.cateList
// })
</script>

<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }



  .bread-container {
    padding: 25px 0;
  }
}
</style>
