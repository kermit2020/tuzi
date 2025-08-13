import http from '@/utils/http'
//获取用户购物车
export function getAddCart(skuId, count) {
  return http({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}
//获取新列表
export function getCartList() {
  return http({
    url: '/member/cart',
    method: 'GET'
  })
}
//删除购物车
export function getDelCart(ids) {
  return http({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}
//合并购物车
export function getMergeCart(data) {
  return http({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}
