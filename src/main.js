import '@/styles/common.scss'
import 'virtual:windi.css'
import 'element-plus/theme-chalk/el-message.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import {lazyPlugin} from '@/directions/lazy.js'
import { componentPlugin } from './components/_out'

import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)

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
