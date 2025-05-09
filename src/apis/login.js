import http from '@/utils/http'
//获取banner轮播图

export function getUser({account,password}) {
  return http({
    url:'/login',
    method:'POST',
    data:{
      account,
      password
    }
  })
}



