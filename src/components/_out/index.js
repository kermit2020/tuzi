// 把components中的所组件都进行全局化注册
// 通过插件的方式

import goods_magnifier from './goods_magnifier.vue'
import sku from './XtxSku/index.vue'
export const componentPlugin = {
    install(app) {
        // app.component('组件名字', '组件配置对象')
        app.component('goods_magnifier', goods_magnifier)
        app.component('sku', sku)
    }
}