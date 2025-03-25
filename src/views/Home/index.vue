<template>
  <div class="container">
    <!-- home页面 -->
     <home_banner></home_banner>
     <home_class></home_class>
    </div>
    <home_new></home_new>
    <home_hot></home_hot>
    <home_product></home_product>
</template>

<script setup>
import home_class from './class/home_class.vue'
import home_banner from './class/home_banner.vue'
import home_new from './class/home_new.vue'
import home_hot from './class/home_hot.vue'
import home_product from './class/home_product.vue'
</script>

<style scoped>

</style>