import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getTableColumn, getTableData } from '@/api$1/lowCode.js'

export const s_table = defineStore('s_table', () => {

  // 子页面数据
  const tableList = ref({})
  const getTableList = async () => {
    const res = await getTableData()
    tableList.value = res.data
    console.log('res_table', res)
  }
  // 表头
  const tableColumnList = ref({})
  const getTableColumn = async () => {
    const res = await getTableColumn()
    tableColumnList.value = res.data
    console.log('res_tableColumn', res)

  }
  return { tableList, getTableList, tableColumnList, getTableColumn }
})
 

