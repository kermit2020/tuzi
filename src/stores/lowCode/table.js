import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getLowCodeData } from '@/api$1/lowCode.js'

export const s_table = defineStore('s_table', () => {

  // 子页面数据
  const tableList = ref({})
  const getTableList = async () => {
    const res = await getLowCodeData()
    tableList.value = res.data
    console.log('res_table', res)
  }
  return { tableList, getTableList }
})
 

