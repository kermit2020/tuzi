import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getDetail, getHot } from '@/apis/detail'

export const s_detail = defineStore('s_detail', () => {
  // 商品详情数据
  const detailList = ref([])
  const hotList = ref([])
  const getDetailList = async id => {
    const res = await getDetail(id)
    detailList.value = res.result
    console.log('res_detail_goods', res)
  }
  const getHotList = async (id, type, limit) => {
    const res = await getHot(id, type, limit)
    hotList.value = res.result
    console.log('res_detail_hot', res)
  }
  return { detailList, hotList, getDetailList, getHotList }
})
