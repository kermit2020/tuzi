import { defineStore } from "pinia";
import { ref } from "vue";
import { getBanner } from "@/apis/home";

export const s_home = defineStore("s_home", () => {
  // 导航栏数据
  const bannerList = ref([]);
  const getBannerList = async () => {
    const res = await getBanner();
    bannerList.value = res.result;
    console.log('res_home_banner',res);
    
  };
  return { bannerList, getBannerList };
})