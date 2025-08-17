import http$1 from '@/utils/http_lowCode'

export function getTableColumn() {
  return http$1({
    method: 'GET',
    url: '/api/table/columns'

  })
}
export function getTableData() {

  return http$1({
    method: 'GET',
    url: '/api/table/data'

  })
}