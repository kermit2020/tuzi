<template>
  <div class="container">
    <!-- home页面 -->
     <home_banner></home_banner>
     <home_class></home_class>
    </div>
    <home_new></home_new>
    <home_hot></home_hot>
    <home_product></home_product>
    <!-- 封装面板组件 -->
    <home_repanel title="新鲜好物" subtitle="新鲜出炉 品质靠谱">
      <div>这里是新鲜好物的描述</div>
    </home_repanel>
    <home_repanel title="人气推荐" subtitle="人气推荐 物美价廉">
      <div>没错是人气推荐的描述</div>
    </home_repanel>
</template>

<script setup>
import home_class from './class/home_class.vue'
import home_banner from './class/home_banner.vue'
import home_new from './class/home_new.vue'
import home_hot from './class/home_hot.vue'
import home_product from './class/home_product.vue'
import home_repanel from './class/home_repanel.vue'
</script>

<style scoped>

</style>