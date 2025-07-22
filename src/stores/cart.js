//购物车模块
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCate } from '@/apis/category'

export const s_cart = defineStore('s_cart', () => {
  // 购物车数据
  const cartList = ref([])
  const getCartList = async id => {
    // const res = await getCate(id)
    // cartList.value = res.result
    // console.log('res_cart_id', res)
  }
  const addCart = async data => {
   // 已添加过数量加1,没添加过push
   const item = cartList.value.find(item => item.skuId === data.skuId) 
   if(item){
    item.count= item.count + data.count
   }else{
    cartList.value.push(data)
   }
  }
  return { cartList, getCartList, addCart }
})
