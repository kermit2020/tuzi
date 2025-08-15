import '@/styles/common.scss'
import 'virtual:windi.css'
import 'element-plus/theme-chalk/el-message.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { lazyPlugin } from '@/directions/lazy.js'
import { componentPlugin } from './components/_out'

import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
//挂载mock ==start
import { lowCode, rabbit } from '@/_mock/mock'
const app = createApp(App)
// 批量注册 lowCode 目录下的 js
Object.entries(lowCode).forEach(([filename, importFn]) => {
  importFn().then(mod => {
    const comp = mod.default || mod
    const compName = comp.name || filename.replace(/\.\/(.*)\.js$/g, '$1')
    app.component(compName, comp)
  })
})
// Object.values(lowCode).forEach(importFn => {
//   importFn() // 这样会执行 table.js 里的 Mock.mock
// })

// 批量注册 rabbit 目录下的 js
Object.entries(rabbit).forEach(([filename, importFn]) => {
  importFn().then(mod => {
    const comp = mod.default || mod
    const compName = comp.name || filename.replace(/\.\/(.*)\.js$/g, '$1')
    app.component(compName, comp)
  })
})
// 挂载全局组件==end



const pinia = createPinia()
// pinia持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
//图片懒加载
app.use(lazyPlugin)
//全局组件
app.use(componentPlugin)
app.mount('#app')
