import { defineStore } from "pinia";
import { ref } from "vue";
import { getBanner,getNew,getHot } from "@/apis/home";

export const s_home = defineStore("s_home", () => {
  // 导航栏数据
  const bannerList = ref([]);
  const newList = ref([]);
  const hotList = ref([]);
  const getBannerList = async () => {
    const res = await getBanner();
    bannerList.value = res.result;
    console.log('res_home_banner',res);
    
  };
  const getNewList = async () => {
    const res = await getNew();
    newList.value = res.result;
    console.log('res_home_new',res);
    
  };
  const getHotList = async () => {
    const res = await getHot();
    hotList.value = res.result;
    console.log('res_home_hot',res);
    
  };
  return { bannerList,newList,hotList, getBannerList,getNewList,getHotList };
})