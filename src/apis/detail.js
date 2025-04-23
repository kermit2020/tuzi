import http from '@/utils/http'
export function getDetail(id) {
  return http({
    method: 'GET',
    url: '/goods',
    params: {
      id
    }
  })
}
export function getHot(id,type,limit=3) {
  return http({
    method: 'GET',
    url: '/goods/hot',
    params: {
      id, 
      type, 
      limit
    }
  })
}