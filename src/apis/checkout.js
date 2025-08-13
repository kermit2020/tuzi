import http from '@/utils/http'
//获取banner轮播图
export function getCheckout() {
  return http({
    method: 'GET',
    url: '/member/order/pre'
  })
}
// export function getTab(data) {
//   return http({
//     url:'/category/goods/temporary',
//     method:'POST',
//     data
//   })
// }
