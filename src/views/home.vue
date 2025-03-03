
<template>
  <div class="warpper">
    <!-- <nav> -->
      <!-- <RouterLink v-for="id1 in [1, 2, 3, 4]" :key="id1" :to="{path:`/item/${id1}`,params:{id:`${id1}`}}">{{ id1 }}</RouterLink> -->
      <RouterView class="view"> </RouterView>
     
    <!-- </nav> -->
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
  <!-- <script setup>
  
  </script> -->
