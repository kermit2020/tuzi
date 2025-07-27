//购物车模块
import { defineStore } from 'pinia'
import { ref ,computed} from 'vue'
import { getCate } from '@/apis/category'

export const s_cart = defineStore(
  's_cart',
  () => {
    // 购物车数据
    const cartList = ref([])

    /* -------method------ */

    const getCartList = async id => {
      // const res = await getCate(id)
      // cartList.value = res.result
      // console.log('res_cart_id', res)
    }
    const addCart = data => {
      // 已添加过数量加1,没添加过push
      const item = cartList.value.find(item => item.skuId === data.skuId)
      if (item) {
        item.count = item.count + data.count
      } else {
        cartList.value.push(data)
      }
    }
    const delCart = skuId => {
      // 删除购物车商品
      // cartList.value = cartList.value.filter(item => item.skuId !== skuId)
      const delIdx = cartList.value.findIndex(item => item.skuId === skuId)
      if (delIdx !== -1) {
        cartList.value.splice(delIdx, 1)
      }
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
    const isAll= computed(() => {
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
    return { cartList, getCartList, addCart, delCart,singleChange,allSelect, totalCount, totalPrice, isAll, selectedCount, selectedPrice }
  },
  /* --------数据持久化方案-------- */
  {
    persist: [
      {
        // pick: ['userList'],
        // storage: sessionStorage
        storage: localStorage
      }
    ]
  }
)
