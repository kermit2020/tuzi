<template>
  <div>
    
  </div>
</template>
<script setup>
import { ref,reactive,defineProps,defineEmits,defineExpose } from 'vue'
const props = defineProps({
  count: Number,
  obj1: Object,
  arr1: Array,
  handleArr1: Array
})
defineExpose({
  
})

</script>