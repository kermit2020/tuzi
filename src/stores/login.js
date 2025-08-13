import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUser } from '@/apis/login'
import { s_cart } from '@/stores/cart'
import { getMergeCart } from '@/apis/cart'

export const s_login = defineStore(
  's_login',
  () => {
    // 用户数据
    const userList = ref({})
    const d_cart = s_cart() // 导入购物车模块
    const getUserList = async data => {
      const res = await getUser(data)
      userList.value = {}
      if (res.code === '1') {
        userList.value = res.result ? res.result : null
        console.log('res_login_user', res)
        
        //合并购物车
       
        await getMergeCart(d_cart.cartList.map(v=> {
          return {
            skuId: v.skuId,
            count: v.count,
            selected: v.selected
          }
        }))
        console.log('登录路线');
        
        // 登录成功后，获取购物车
        d_cart.updateCart()
        
      } else {
        clearUserList() 
        return flase
      }
    }
    const clearUserList = () => {
      userList.value = {}
      d_cart.clearCart() // 清空购物车
    }
    return { userList, getUserList, clearUserList }
  },
  //添加持久化设定__默认localStorage
  { persist: [
    {
      // pick: ['userList'],
      storage: sessionStorage,
      // storage: localStorage,
    }
  
  ]}
)
