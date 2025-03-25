
<template>
  <div class="warpper">
    <!-- <nav>
      222 -->
      
      <nav2></nav2>
      <RouterView class="view">
        
      </RouterView> 
     
    <!-- </nav> -->
  </div>
</template>
<script>
import nav2 from '../components/nav/nav.vue'
export default {
  // name: 'home',
  components: {
    nav2
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
  <!-- <script setup>
  
  </script> -->
