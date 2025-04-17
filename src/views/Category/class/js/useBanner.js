//解耦js代码,便于复用(封装函数=store)
//一般结构组件模块更方便,但JS引用要会
import { s_home } from '@/stores/home'
import { ref, computed } from 'vue'
export function useBanner() {
  const d_home = s_home()
  const bannerList = ref([])
  d_home.getBannerList({ distributionSite: '2' })
  bannerList.value = computed(() => d_home.bannerList)

  return bannerList
}

//使用时
/* 
import { useBanner } from '@/views/Category/class/js/useBanner'
const bannerlist = useBanner()


*/
