<template>
  <div class="warpper">
    首页页面
    <!-- 二级路由出口 -->
    <layout_header></layout_header>
    <layout_nav></layout_nav>
    <RouterView />
    <layout_footer></layout_footer>
  </div>
</template>
<script setup>
import layout_header from './layout_file/LayoutHeader.vue'
import layout_nav from './layout_file/LayoutNav.vue'
import layout_footer from './layout_file/LayoutFooter.vue'

// 简单的调试信息
console.log('layout_header:', layout_header)
console.log('layout_nav:', layout_nav)
console.log('layout_footer:', layout_footer)
</script>

<style scoped>

</style>