/* 全局样式 */
import '@/styles/common.scss'
import 'virtual:windi.css'
import 'element-plus/theme-chalk/el-message.css'
/* 方法 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
/* 自定义插件 */
import { lazyPlugin } from '@/_directions/lazy.js'
import { componentPlugin } from './components/_out'
import { mockPlugin } from '@/_mock/mock' //mock自动化
/* 全局插件 */
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
/* 全局组件 */
import App from './App.vue'
import router from './router'


/* 变量声明 */
const app = createApp(App)
const pinia = createPinia()


/* 挂载 */
pinia.use(piniaPluginPersistedstate) // pinia持久化插件

app.use(pinia)
app.use(router)
app.use(lazyPlugin)//图片懒加载
app.use(componentPlugin)//全局组件
app.use(mockPlugin)//mock自动化

app.mount('#app')
