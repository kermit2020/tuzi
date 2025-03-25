import http from '@/utils/http'
export function getCategory() {
  return http({
    method: 'GET',
    url: 'home/category/head'
  })
}