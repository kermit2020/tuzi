import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import {lazyPlugin} from '@/directions/lazy.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(createPinia())
app.use(router)
//图片懒加载
app.use(lazyPlugin)
app.mount('#app')
