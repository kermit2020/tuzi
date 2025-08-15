<template>
  <div>
    <button @click="addCount">{{ count }}</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const count = ref(0)
function addCount() {
  count.value++
}
import { onMounted } from 'vue'
import { s_table } from '@/stores/lowCode/table.js'
const d_table = s_table()

onMounted(async() => {
  await d_table.getTableList()
  console.log('表格数据', d_table.tableList)
})
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
<style scoped></style>
