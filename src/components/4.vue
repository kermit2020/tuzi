<template>
  <div>
    
    <button @click="addCount">{{count}}</button>
  </div>
</template>
<script setup>

import {ref} from 'vue'
const count=ref(0)
function addCount(){
  count.value++
}

</script>
<!-- <script>
//vue2代码
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addCount() {
      this.count++;
    }
  },
  mounted() {
    // Any other mounted logic
  },
}
</script> -->
<style scoped>
</style>