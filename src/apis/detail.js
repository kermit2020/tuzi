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