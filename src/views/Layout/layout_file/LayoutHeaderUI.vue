<template>
  <div>
    <ul class="app-header-nav">
      <li class="home">
        <router-link to="/">首页</router-link>
      </li>
      <li class="home" v-for="(v, i) in d_layout.navList" :key="i">
        <router-link to="/">{{ v.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { s_layout } from '@/stores/layout'
import { onMounted, nextTick } from 'vue'

const d_layout = s_layout()
//总结获取异步请求,要先调用方法,然后在setTimeout中获取数据

d_layout.getNavList()
onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      console.log('layout_header:', d_layout.navList)
    }, 1000)
  })
})
</script>

<style lang="scss" scoped>
.app-header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
  li {
    margin-right: 15px;
    background-color: pink;
    padding: 5px 15px;
    font-size: 12px;
    line-height: 22px;
    height: 32px;
    display: inline-block;
    font-weight: bold; 
    border-radius: 4px;
  }
}
</style>
