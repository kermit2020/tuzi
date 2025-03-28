import axios from 'axios'

const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})
//axios拦截器
http.interceptors.request.use(config => {
  // config.headers.Authorization = `Bearer ${store.state.user.token}`  // 假设你有一个名为 user 的模块，其中包含一个名为 token 的属性
  return config
}, error => {
  return Promise.reject(error)
})

http.interceptors.response.use(response => {
  return response.data
},error => {
    return Promise.reject(error)        
})
export default http