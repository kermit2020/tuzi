import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    //懒加载自定义指令
    app.directive('img-lazy', {
      // v-img-lazy

      mounted(el, binding, vnode) {
        //el:元素,=img
        //binding:指令值binding.value,=url
        console.log(el, binding.value)
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          //isIntersecting元素是否进入区域
          console.log(isIntersecting)
          if (isIntersecting) {
            // 进入视口区域
            el.src = binding.value
            // 停止监听
            stop()
          }
        })
      }
    })
  }
}
