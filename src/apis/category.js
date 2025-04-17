import http from '@/utils/http'
//获取banner轮播图
export function getCate(id) {
  return http({
    method: 'GET',
    url:'/category',
    params:{
      id
    }
  })
}