//购物车模块
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
//登录验证
import { s_login } from '@/stores/login'
//请求接口
import { getCartList, getAddCart, getDelCart } from '@/apis/cart'
import { ElMessage } from 'element-plus'
export const s_cart = defineStore(
  's_cart',
  () => {
    // 购物车数据
    const cartList = ref([])
    // 获取登录状态
    const isLogin = computed(() => s_login().userList.token)
    /* -------method------ */
    const updateCart = async () => {
      // 获取购物车列表
      const res = await getCartList()
      if (res.code === '1') {
        cartList.value = res.result
      } else {
        ElMessage({
          type: 'error',
          message: '获取购物车失败,请稍后再试!'
        })
        console.error('获取购物车失败:', res.message)
      }
    }

    const addCart = async data => {
      const { skuId, count, price } = data
      console.log('addCart_data', skuId, count)
      if (isLogin.value) {
        // 登录状态下添加购物车

        await getAddCart(skuId, count)
        updateCart()
        // console.log('res_cart_add', res)
      } else {
        // 已添加过数量加1,没添加过push
        const item = cartList.value.find(item => item.skuId === data.skuId)
        if (item) {
          item.count = item.count + data.count
        } else {
          cartList.value.push(data)
        }
      }
    }
    const delCart = async skuId => {
      if (isLogin.value) {
        // 登录状态下删除购物车商品
        //[skuId] 是一个数组，表示要删除的商品ID,单删和批量删除都可以
        const res = await getDelCart([skuId])
        if (res.code === '1') {
          // 删除成功后更新购物车列表
          updateCart()
        } else {
          ElMessage({
            type: 'error',
            message: '删除失败,请稍后再试!'
          })
          console.error('删除购物车商品失败:', res.message)
        }
      } else {
        // 删除购物车商品
        // cartList.value = cartList.value.filter(item => item.skuId !== skuId)
        const delIdx = cartList.value.findIndex(item => item.skuId === skuId)
        if (delIdx !== -1) {
          cartList.value.splice(delIdx, 1)
        }
      }
    }
    //清空购物车
    const clearCart = () => {
      // 清空购物车
      cartList.value = []
      // ElMessage({
      //   type: 'success',
      //   message: '购物车已清空!'
      // })
    }
    //单一复选框
    const singleChange = (skuId, selected) => {
      // 单一复选框变化
      const item = cartList.value.find(item => item.skuId === skuId)
      if (item) {
        item.selected = selected
      }
      // 这里可以添加逻辑来处理单个商品的选中状态
    }
    //全选功能
    const allSelect = () => {
      // 全选功能
      const isAllSelected = cartList.value.every(item => item.selected)
      cartList.value.forEach(item => {
        item.selected = !isAllSelected
      })
    }

    /* ----------computed--------- */

    //计算总量
    const totalCount = computed(() => {
      return cartList.value.reduce((total, item) => total + item.count, 0)
    })
    //计算总价
    const totalPrice = computed(() => {
      return cartList.value.reduce((total, item) => total + item.count * item.price, 0)
    })
    //全选状态
    const isAll = computed(() => {
      // 判断是否全选
      return cartList.value.every(item => item.selected)
    })
    //已选数量
    const selectedCount = computed(() => {
      return cartList.value.filter(item => item.selected).reduce((total, item) => total + item.count, 0)
    })
    //已选总价
    const selectedPrice = computed(() => {
      return cartList.value.filter(item => item.selected).reduce((total, item) => total + item.count * item.price, 0)
    })

    /* -------返回接口-------- */
    return { cartList, updateCart, addCart, delCart, clearCart,singleChange, allSelect, totalCount, totalPrice, isAll, selectedCount, selectedPrice }
  },
  /* --------数据持久化方案-------- */
  {
    persist: [
      {
        // pick: ['userList'],
        // storage: sessionStorage
        storage: sessionStorage
      }
    ]
  }
)
