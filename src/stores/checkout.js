import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCheckout} from '@/apis/checkout'

export const s_checkout = defineStore('s_checkout', () => {
  // 订单数据
  const checkoutList = ref({})
 
  const getCheckoutList = async id => {
    const res = await getCheckout()
    checkoutList.value = res.result
    console.log('res_checkout_res', res)
  }
 
  return { checkoutList, getCheckoutList }
})
