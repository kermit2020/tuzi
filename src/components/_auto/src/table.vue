<template>
  <table>
    <thead>
      <tr>
        <th v-for="(col,i) in columns" :key="i">{{ col }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="loadFlag">
        <td :colspan="columns.length" style="text-align: center;">加载中...</td>
      </tr>
      <tr  v-else-if="d_table.tableList.length===0">
        <template v-for="(row,i) in d_table.tableList" :key="i">
          <td v-for="(col,i) in row" :key="i">{{ v[col] }}</td>
        </template>
        
      </tr>
      <tr v-else>
        <td  style="text-align: center;">暂无数据!</td>
      </tr>

    </tbody>
  </table>
</template>

<script setup lang="javascript">

import { ref } from 'vue'

const columns = defineProps({
  columns: {
    type: Array,
    default: () => []
  }
})
const tableData = ref([
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 }
])
import { onMounted } from 'vue'
import { s_table } from '@/stores/lowCode/table.js'
const d_table = s_table()

onMounted(async() => {
  await d_table.getTableList()
  console.log('表格数据', d_table.tableList)
})
// return {
//     columns,
//     tableData
//   }
</script>
<style lang="scss">
.table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  th,
  td {
    padding: 12px 15px;
    border: 1px solid #ddd;
  }
  th {
    background-color: #f4f4f4;
  }
  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
}
</style>
