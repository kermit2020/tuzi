import http from '@/utils/http'
//获取banner轮播图
export function getBanner() {
  return http({
    method: 'GET',
    url:'home/banner'
  })
}