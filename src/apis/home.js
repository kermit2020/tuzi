import http from '@/utils/http'
//获取banner轮播图
export function getBanner() {
  return http({
    method: 'GET',
    url:'home/banner'
  })
}
export function getNew() {
  return http({
    method: 'GET',
    url:'home/new'
  })
}
export function getHot() {
  return http({
    method: 'GET',
    url:'home/hot'
  })
}
export function getProduct() {
  return http({
    method: 'GET',
    url:'home/goods'
  })
}