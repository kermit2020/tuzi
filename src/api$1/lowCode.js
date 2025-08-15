import http$1 from '@/utils/http_lowCode'

export function getLowCodeData() {
  return http$1({
    method: 'GET',
    url: '/api/table/columns'

  })
}