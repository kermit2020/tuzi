<template>
  <!-- 一级路由出口 -->
   <div class="test">test scss</div>
  <RouterView class="view"> </RouterView>
  <!-- <home></home> -->
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import home from '@/views/home.vue'
import { ref } from 'vue'
// import { useRoute } from 'vue-router'

// const route = useRoute()
// const id = route.params.id
</script>
<style scoped lang="scss">
.test {
  color: $xtxColor;
}
body {
  margin: 0;
  padding: 0;
  height: 100%; /* 设置 body 高度为视口高度的 100% */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  font-family: Arial, sans-serif; /* 设置字体 */
  background-color: greenyellow; /* 设置背景颜色 */
}
.view {
  width: 100%;
  height: 90vh;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
/**header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}



nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}**/
</style>
