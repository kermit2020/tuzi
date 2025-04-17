import http from '@/utils/http'
//获取banner轮播图
export function getBanner(params={distributionSite:'1'}) {
  //distributionSite: 1 代表首页,2代表分类页,3代表个人中心
  return http({
    method: 'GET',
    url:'home/banner',
    params
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