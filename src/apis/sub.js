import http from '@/utils/http'
//获取banner轮播图
export function getSub(id) {
  return http({
    method: 'GET',
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}
export function getTab(data) {
  return http({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}