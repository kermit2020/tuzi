import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getSub ,getTab} from '@/apis/sub'

export const s_sub = defineStore('s_sub', id => {
  // 导航栏数据
  const subList = ref({})
  const tabList = ref({})
  const getSubList = async id => {
    const res = await getSub(id)
    subList.value = res.result
    console.log('res_sub_id', res)
  }
  const getTabList = async data => {
    const res = await getTab(data)
    tabList.value = res.result
    console.log('res_sub_tab', res)
  }
  return { subList, tabList, getSubList, getTabList }
})
